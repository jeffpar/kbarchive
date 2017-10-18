---
layout: page
title: "Q110540: PRB: Quotation Marks Missing from Compiled Help File"
permalink: kb/110/Q110540/
---

## Q110540: PRB: Quotation Marks Missing from Compiled Help File

	Article: Q110540
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.0,3.1; WINDOWS:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upgrading from Word for Windows 2.x to Word for Windows 6.x and rebuilding
	a Windows Help file with HCP.EXE or HC31.EXE, all of the quotation marks are
	missing from the Help file.
	
	CAUSE
	=====
	
	Word 6.x uses a special .RTF keyword to represent the quotation mark character,
	and the Help compiler does not understand the new .RTF keyword so it drops the
	character. The same problem occurs for the curly double quotation mark, single
	quotation mark, en dash (char 150), em dash (char 151), and the bullet character
	(char 149).
	
	RESOLUTION
	==========
	
	You can prevent this problem by turning off the "Smart Quotes" option in Word
	for Windows. The following three steps accomplish this:
	
	1. Choose Options from Tools menu.
	
	2. Select the AutoFormat tab.
	
	3. In the Replace group box, clear the "Straight Quotes with Smart Quotes" check
	  box, and choose OK.
	
	If you wish to include smark quotes, bullets, em-dashes, and en-dashes in a Help
	file, you can open the file as text only and replace the RTF keywords with their
	ANSI hexadecimal equivalents, which are recognized by the help compiler.
	
	  Find String       Replace String
	  -----------       --------------
	  \emdash           \'97"
	  \endash           \'96"
	  \bullet           \'95"
	  \rdblquote        \'94"
	  \ldblquote        \'93"
	  \rquote           \'92"
	  \lquote           \'91"
	
	Make sure that there is a blank character included at the end of the Find String,
	but not in the Replace String.
	
	This replacement must be made every time you edit and convert the text from
	document to RTF format.
	
	Additional query words: 3.10 3.50 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK350 kbWin32SDK351 kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1; WINDOWS:3.5,3.51,4.0
	
	=============================================================================
	
