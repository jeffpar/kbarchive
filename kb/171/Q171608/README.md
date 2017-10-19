---
layout: page
title: "Q171608: WD97: Text Converter Updates in Service Release 1"
permalink: /kb/171/Q171608/
---

## Q171608: WD97: Text Converter Updates in Service Release 1

	Article: Q171608
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbconversion word97kbfaq kbfixlist
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses text conversion problems that have been updated or fixed
	in Microsoft Word 97 Service Release 1 (SR-1). This information specifically
	addresses issues with the text converters that are included with Microsoft Word
	97.
	
	MORE INFORMATION
	================
	
	Html32.cnv - Used to Import and Export HTML Documents
	-----------------------------------------------------
	
	- Two Images Generated After Running VBA Macro
	
	  When you create a blank HTML document, insert an object, and then run a Visual
	  Basic for Applications macro that uses the header or footer of the document,
	  the HTML that is produced will result in two image tags for the inserted
	  object. When you reopen the HTML document, you get two images of the object
	  instead of one.
	
	
	- Memory Lost Converting Some HTML Files
	
	  With some types of HTML documents, memory is lost during the HTML conversion
	  process. This creates a memory usage spike and the conversion of the HTML
	  document takes a very long time.
	
	
	- Not Importing White Space After Graphics
	
	  If you have an HTML document containing an image at the beginning of a
	  paragraph followed by white space, the white space is ignored during the
	  import process into Microsoft Word 97.
	
	
	- Garbage Characters in Large Tables in Low Memory Situations
	
	  If you import an HTML file containing a large table (more than 60 rows and 60
	  columns), the table may contain garbage characters if your computer is low on
	  memory.
	
	
	- Spacing Around Object Exporting Incorrectly
	
	  If you create a Web page, insert an object, and then format the object for a
	  certain horizontal and vertical distance from the text, when you save as
	  HTML, the HTML source will contain the wrong values for horizontal and
	  vertical spacing. When you re-open the HTML document, the horizontal and
	  vertical distance from text for the object will be incorrect.
	
	
	- Hyperlinks Exported Using the HTML Converter Are Imported as URL Only
	  (Friendly Text Is Lost)
	
	  In some cases, if you insert a hyperlink containing a friendly name instead of
	  the URL name, the friendly name will be lost when you save as HTML, leaving
	  only the URL name for the hyperlink.
	
	
	- HTML Ordered List Always Displayed Left Aligned
	
	  If you use any of the following HTML tags to align bullets or numbers, the
	  bullets or numbers will always appear left aligned in Microsoft Word 97, even
	  though it may appear correctly in a Browser.
	
	     <ol>
	         <li><p align="left">Left Line Item</p>
	         <li><p align="right">Right Line Item</p>
	         <li><p align="center">Center Line Item</p>
	     </ol>
	
	
	Mswrd832.cnv - Used by Word 7.0 to Read Word 97 Documents (Import Only)
	-----------------------------------------------------------------------
	
	- Cell Border Converted Poorly
	
	  If you create a Microsoft Word 97 document containing certain combinations of
	  cell borders and table borders, the borders may be converted poorly when the
	  document is opened in Microsoft Word 7.0 using the Microsoft Word 97 import
	  converter.
	
	
	- Invalid Page Fault Opening Word 97 File with Text Box, Square Wrap
	
	  You receive an IPF when you open a Word 97 document in Word version 6.x or 7.x
	  that contains a text box or AutoShape that holds text and uses the square
	  wrapping style.
	
	  NOTE: In Word 97, to locate the square wrapping style, select the text box or
	  AutoShape, click Text Box on the Format menu, and then click the Wrapping
	  tab.
	
	  For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q160841 WD: Page Fault Opening Word 97 File with Text Box, Square Wrap
	
	
	- Invalid Page Fault Opening Document with Numbering Without Text
	
	  If you create a document in Microsoft Word 97 containing multi-level numbering
	  formatted with no text before the number, you may receive an IPF when you
	  open the document in Microsoft Word 7.0 using the Microsoft Word 97 import
	  converter.
	
	
	- Invalid Page Fault Opening a File with a Footnote That Ends with Multiple
	  Bookmarks
	
	  If you create a document in Microsoft Word 97 containing a footnote or endnote
	  that ends with multiple bookmarks, you may experience an IPF when you open
	  the document in Microsoft Word 7.0 using the Word 97 import converter.
	
	  Bookmarks in footnotes or endnotes can be created either manually by
	  explicitly inserting a bookmark at the end of a footnote or endnote, or
	  automatically by inserting a Table Of Contents, or Cross Reference to the
	  footnote or endnote in the document.
	
	
	REFERENCES
	==========
	
	Microsoft has confirmed these to be problems in Microsoft Word 97 for Windows.
	These problems were corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: SR1 release1 8.00 8.0
	
	======================================================================
	Keywords          : kbconversion word97 kbfaq kbfixlist
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
