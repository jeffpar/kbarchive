---
layout: page
title: "Q173434: FP: Indent Formatting in Word HTML File Converted to Bullets"
permalink: kb/173/Q173434/
---

## Q173434: FP: Indent Formatting in Word HTML File Converted to Bullets

	Article: Q173434
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Word 97 document and apply increase indent formatting to the
	text, save the document in HyperText Markup Language (HTML) format, and then
	open the document in FrontPage 97, the HTML code is converted incorrectly. In
	FrontPage 97, the text is formatted with bullet formatting.
	
	NOTE: To increase the indentation of text in Word 97, click the Increase Indent
	button on the Formatting toolbar.
	
	CAUSE
	=====
	
	This problem occurs because Word 97 converts the indented formatting to a
	<DIR> element and FrontPage 97 saves indented formatting as a
	<BLOCKQUOTE> element. FrontPage will not convert the <DIR> element
	to a <BLOCKQUOTUE> element.
	
	WORKAROUND
	==========
	
	To work around this problem, follow these steps:
	
	1. Create the page in Word 97 and apply the formatting you want.
	
	2. On the File menu, click Save As.
	
	3. In the Save As dialog box, in the Save As Type list, click Word Document,
	  type a file name for the file, and then click Save.
	
	4. Start or switch to FrontPage Editor.
	
	5. On the File menu, click Open.
	
	6. Click the Other Location tab.
	
	7. Click From File.
	
	8. In the From File box, enter the file name of the Word document. Or, click
	  Browse and select the Word document.
	
	9. Click Open.
	
	NOTE: The file will open and the text that was originally formatted using the
	Increase Indent command will not be formatted as bullet items. You can save the
	file in the current web by clicking Save As on the File menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
