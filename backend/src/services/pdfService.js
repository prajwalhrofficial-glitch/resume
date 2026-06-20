import pdf from 'pdf-parse';
import fs from 'fs';

export class PDFService {
  async extractTextFromPDF(filePath) {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const data = await pdf(fileBuffer);
      return data.text;
    } catch (error) {
      console.error('Error extracting PDF text:', error);
      throw error;
    }
  }

  async parseResumeFromPDF(filePath) {
    try {
      const text = await this.extractTextFromPDF(filePath);
      return this.cleanText(text);
    } catch (error) {
      console.error('Error parsing resume PDF:', error);
      throw error;
    }
  }

  cleanText(text) {
    // Remove extra whitespace and normalize text
    return text
      .replace(/\s+/g, ' ')
      .trim();
  }
}

export default new PDFService();
