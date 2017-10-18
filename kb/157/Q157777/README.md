---
layout: page
title: "Q157777: WD97: Conversion Wizard Quits If Convert8.dll Is Missing"
permalink: kb/157/Q157777/
---

## Q157777: WD97: Conversion Wizard Quits If Convert8.dll Is Missing

	Article: Q157777
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Browse button to select a folder while running the Conversion
	Wizard, the Conversion Wizard abruptly closes.
	
	CAUSE
	=====
	
	The Convert8.dll file is missing. This file is typically installed in the
	\Program Files\Microsoft Office\Office folder.
	
	
	WORKAROUND
	==========
	
	To work around this problem, choose one of the following methods:
	
	Method 1
	--------
	
	Locate and copy the Convert8.dll file into the \Program Files\Microsoft
	Office\Office folder.
	
	Method 2
	--------
	
	Rerun Word 97 (or Office 97) Setup in maintenance mode and click Reinstall.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: 8.0 word8 word97 convert8.wiz dissapear disappear
	
	======================================================================
	Keywords          : kbdta kbconversion 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
