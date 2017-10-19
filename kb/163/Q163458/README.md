---
layout: page
title: "Q163458: WD97: Err Msg: &quot;Unable to Open Selected TWAIN Source&quot; in Word 97"
permalink: /kb/163/Q163458/
---

## Q163458: WD97: Err Msg: &quot;Unable to Open Selected TWAIN Source&quot; in Word 97

	Article: Q163458
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop word97
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you point to Picture on the Insert menu and then click From Scanner, you
	receive the following error message:
	
	  Unable to open selected TWAIN Source. If your scanner is a TWAIN compliant
	  scanner, please reinstall the software for that scanner.
	
	CAUSE
	=====
	
	Word for Windows is not a TWAIN-compliant application. Using the From Scanner
	command starts Microsoft Photo Editor. You can use Photo Editor to import
	pictures and graphics with the use of a scanner.
	
	NOTE: When you install some graphics editors, a command for that editor may be
	added to a Word menu. These graphics editors may also provide scanning options
	that may cause similar error messages in Word. For more information about your
	specific editor, please refer to the documentation that is provided with your
	graphics editor.
	
	WORKAROUND
	==========
	
	To work around this problem, you may need to reinstall your scanner software.
	Please refer to the scanner's setup information for more information about how
	to properly install the scanner software.
	
	MORE INFORMATION
	================
	
	Microsoft Office 97 for Windows installs the Microsoft Photo Editor, version
	3.0, graphics editor. When you run Setup for the editor, menu commands are added
	to Word so that you can easily access Photo Editor from Word.
	
	Microsoft Photo Editor is a stand-alone application with which you can modify,
	enhance, and import pictures and graphics into an Office 97 program. Microsoft
	Photo Editor is a replacement graphics editor for Microsoft Imager in previous
	releases of Microsoft Office.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q93359 Word for Windows Does Not Support TWAIN Protocol
	
	  Q162784 Reinstalling Graphics Import Filters using the Office 97 Setup
	
	
	  Q162380 OFF97: Setup Performs Typical Installation by Default
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
