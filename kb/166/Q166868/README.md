---
layout: page
title: "Q166868: WD97: Properties (Summary Info) Comments in Wrong Format/Missing"
permalink: kb/166/Q166868/
---

## Q166868: WD97: Properties (Summary Info) Comments in Wrong Format/Missing

	Article: Q166868
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbconversion word97 wordconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Word 97 document in an earlier version of Word, the information
	from the Comments box in the Properties dialog box (on the File menu, click
	Properties) may be incorrectly formatted or may be missing.
	
	NOTE: In Word 6.x, the Comments box is in the Summary Info dialog box (on the
	File menu, click Summary Info).
	
	Case 1:
	
	When you save the file in "Word 6.0/95 (*.doc)" or "Rich Text Format (*.rtf)"
	format and then open it in Word 6.x or 7.x, multiple paragraphs in the Comments
	box are combined into a single paragraph.
	
	Case 2:
	
	The text from the Comments box is lost when you use the Word 97 Import Converter
	to open the document.
	
	For more information about the Word 97 Import Converter, please see the following
	article in the Microsoft Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	CAUSE
	=====
	
	Case 1
	------
	
	The Microsoft Word 6.0/95 and the Rich Text Format (RTF) file converter of
	Microsoft Word 97 cannot read linefeeds in the RTF format for the document
	property.
	
	Case 2
	------
	
	The Word 97 Converter is not identifying the Comments field for conversion to
	earlier versions.
	
	MORE INFORMATION
	================
	
	In Word 97, the document information is called Properties. On the File menu,
	click Properties. In Word 6.0 and 7.0, the document information is called
	Summary Info. On the File menu, click Summary Info.
	
	REFERENCES
	==========
	
	For more information on what formatting is retained when you save in other
	formats, please see the following resources:
	
	Word Help
	---------
	
	Click the Office Assistant, type "Save as Word 7.0," click Search, and then click
	to view "Results of saving Word 97 documents in other formats."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Office Resource Kit
	-------------------
	
	Chapter 15 of the "Office Resource Kit" also contains information about
	formatting that is retained through the conversion process. The ORK is available
	on the Microsoft Web site at:
	
	  http://www.microsoft.com/office/ork/
	
	For more information about how to obtain the Office Resource Kit (ISBN:
	1-57231-329-3), call (800) MS-PRESS in the United States or (800) 667-1115 in
	Canada.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage kbconversion word97 wordconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbWord600 kbWord600a kbWord600c kbWord95 kbWord95a
	Version           : WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	Issue type        : kbprb
	
	=============================================================================
	
