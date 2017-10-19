---
layout: page
title: "Q174882: FIX: Cannot Install &quot;Learn VB Now&quot; Program"
permalink: /kb/174/Q174882/
---

## Q174882: FIX: Cannot Install &quot;Learn VB Now&quot; Program

	Article: Q174882
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.51,5.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbOSWin98fix kbGrpDSVB kbDSupport
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to install the "Learn VB Now" program on a system running Windows 95
	(non OSR2) or Windows NT version 3.51, results in one of the following error
	messages:
	
	  Cannot Read File <filename>
	
	- or -
	
	  File Manager cannot find file (or one of its components). Make sure the path
	  and filename are correct and that all required libraries are available.
	
	CAUSE
	=====
	
	Files in the distribution disk with mixed-case file names cannot be read.
	
	RESOLUTION
	==========
	
	Share out the CD-ROM drive from a system running Windows 2000 or Windows NT 4.0.
	Install this edition from that drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Microsoft Windows
	98 and Windows Me.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbOSWin98fix kbGrpDSVB kbDSupport 
	Technology        : kbOSWin95 kbVBSearch kbAudDeveloper kbOSWinSearch kbOSWinNT351 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbOSWinNTSearch
	Version           : :3.51,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
