---
layout: page
title: "Q93658: WD97: How to Send Printer Escape Codes from a Word Document"
permalink: /kb/093/Q93658/
---

## Q93658: WD97: How to Send Printer Escape Codes from a Word Document

{% raw %}

	Article: Q93658
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbdta word97 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Word for Windows, you can use one of the following methods to send an
	instruction, or printer escape sequence, to your printer:
	
	- Insert a PRINT field in your document that contains the printer escape codes.
	  Example:
	
	  {PRINT "<printer instructions>"}
	
	  -or-
	
	- Type the printer escape sequence in your document and format it for a printer
	  font.
	
	MORE INFORMATION
	================
	
	There are limitations and drawbacks to each of these methods, depending on which
	printer driver you use. Neither method is guaranteed to work with every
	printer.
	
	NOTE: PRINT fields do not work correctly in Word 97 on the Windows NT 4.0
	platform. Items in the print field are not printed. To correct this problem,
	install Microsoft Word 97 Service Release 1 (SR-1).
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	Limitations of the PRINT Field
	------------------------------
	
	When you insert a PRINT field, Word calls an escape in the printer driver that
	sends the printer instruction text to the printer. If the escape in the printer
	driver malfunctions, the PRINT field may produce incorrect or no results.
	
	
	NOTE: The PRINT field does not affect the page layout because Word treats a PRINT
	field as a nonprinting character.
	
	Limitations of Typing Printer Information Directly in Your Document
	-------------------------------------------------------------------
	
	When you type printer information directly in your document, Word treats the
	escape sequence text as normal text. This means that Word incorporates the text
	in your document page layout.
	
	When you print the document, the printer interprets the escape sequence text as
	printer instructions and does not print it. Your printer may misinterpret the
	escape sequence if Word does not send the entire string contiguously. For
	example, if you apply justified paragraph formatting, Word sends other
	characters to adjust the line length, thereby changing the escape sequence
	string.
	
	For more information about the PRINT field, click the Index tab in Word Help,
	type the following text
	
	  " PRINT field " (without the quotation marks)
	
	and then double-click the selected text to go to the "Print Field" topic.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbdta word97 kbPrinting 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
