---
layout: page
title: "Q270225: WD97: Error Message: &quot;Run-time Error '5'&quot; When You Start Word"
permalink: kb/270/Q270225/
---

## Q270225: WD97: Error Message: &quot;Run-time Error '5'&quot; When You Start Word

	Article: Q270225
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Word, you receive the following error message:
	
	  Run-time error '5': Invalid Procedure Call or Argument.
	
	CAUSE
	=====
	
	This error message may appear when the _stamps.dot template, which is provided
	by Stamps.com, is located in your Office Startup folder.
	
	The default location of the Office Startup folder is:
	
	  C:\Program Files\Microsoft Office\Office\Startup
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to version 2.2.2 or later of the Stamps.com
	Internet Postage software.
	
	WORKAROUND
	==========
	
	To work around this problem, delete or move the _stamps.dot template from your
	Startup folder. To do this, follow these steps:
	
	1. Quit Microsoft Word.
	
	2. In Office Startup folder, click to select _stamps.dot.
	
	3. Do one of the following:
	
	   - To delete _stamps.dot, click Delete on the Edit menu.
	
	     -or-
	
	   - To move _stamps.dot to a different folder, click Cut on the Edit menu.
	     Select the folder where you want to move _stamps.dot, and then click Paste
	     on the Edit menu.
	
	4. Restart Microsoft Word.
	
	MORE INFORMATION
	================
	
	The _stamps.dot template is installed by a third-party add-in that lets you use
	Internet postage from Stamps.com in Microsoft Word. For more information, please
	browse to the Stamps.com Web site at http://www.Stamps.com
	(http://www.Stamps.com).
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: runtime error 5 run time
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
