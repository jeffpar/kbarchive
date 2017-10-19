---
layout: page
title: "Q185827: WD97: Error Message Received on Opening Works 4.x Files"
permalink: /kb/185/Q185827/
---

## Q185827: WD97: Error Message Received on Opening Works 4.x Files

	Article: Q185827
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a Microsoft Works 4.x file in Microsoft Word 97, you
	will receive the following error message:
	
	  Word cannot open the document.
	  Try one or more of the following:
	  * On the File menu, click Open to open the document.
	  * Make sure the document has a *.doc extension (C:\<path>\Filename)
	
	CAUSE
	=====
	
	The file you are trying to open in Word is also open in Works.
	
	WORKAROUND
	==========
	
	To open the file in Word, close the file in Works.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Microsoft Works 4.0 converter, Works432.Cnv, is not installed during a
	typical setup. To install the converter, use one of the following methods.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	Method 1: Using Word 97 with Office 97
	--------------------------------------
	
	If you are using Word 97 with Office 97, follow these steps:
	
	1. Quit Word and all Office programs, including the Microsoft Office Shortcut
	  Bar.
	
	2. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Install/Uninstall tab.
	
	5. Click Microsoft Office 97, and then click Add/Remove.
	
	  The Microsoft Office 97 setup program will be started.
	
	6. From the Microsoft Office 97 Setup dialog box, click Add/Remove.
	
	7. From the Microsoft Office 97-Maintenance dialog box, click Converters And
	  Filters. Do not remove the check mark from the check box. Click Change
	  Options.
	
	8. Under Options, click Text Converters without removing the check mark from the
	  check box, and then click Change Options.
	
	9. Click to select Works for Windows 4.0, click OK twice, and then click
	  Continue.
	
	Method 2: Using the Standalone Version of Word 97
	-------------------------------------------------
	
	If you are using the stand-alone version of Word 97, follow these steps:
	
	1. Quit Word and all Office programs, including the Microsoft Office Shortcut
	  Bar.
	
	2. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Install/Uninstall tab.
	
	5. Click Microsoft Word 97, and then click Add/Remove.
	
	  The Microsoft Word 97 setup program will be started.
	
	6. From the Microsoft Word 97 Setup dialog box, click Add/Remove.
	
	7. From the Microsoft Word 97 - Maintenance dialog box, click Converters And
	  Filters. Do not remove the check mark from the check box. Click Change
	  Options.
	
	8. Under Options, click Text Converters without removing the check mark from the
	  check box, and then click Change Options.
	
	9. Click to select Works for Windows 4.0, click OK twice, and then click
	  Continue.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
