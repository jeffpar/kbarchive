---
layout: page
title: "Q140310: FIX: Holding Down the F1 Key a Long Time Crashes Windows Help"
permalink: /kb/140/Q140310/
---

## Q140310: FIX: Holding Down the F1 Key a Long Time Crashes Windows Help

	Article: Q140310
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Visual Basic 4.0 on Windows 95 or Windows NT version 3.51, holding
	down the F1 key for a long time causes an application error in Winhlp32.exe.
	However, the Help file still displays after you clear out the error message.
	
	RESOLUTION
	==========
	
	When pressing the F1 key, do not hold down the key for a long time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the Microsoft products listed
	above. This problem has been fixed in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Start Visual Basic.
	
	2. Press and hold down the F1 key. The result is an application error in
	  Winhlp32.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp400bug kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
