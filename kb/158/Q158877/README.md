---
layout: page
title: "Q158877: Msbatch.inf Parameters: Turn Off Online Registration"
permalink: /kb/158/Q158877/
---

## Q158877: Msbatch.inf Parameters: Turn Off Online Registration

	Article: Q158877
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to turn off online registration using the Msbatch.inf
	file for batch installations of Windows 95.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	line:
	
	  AddReg=Wizard
	
	Also, add the following section and key:
	
	  [Wizard]
	  HKLM,Software\Microsoft\Windows\CurrentVersion,"RegDone",,1
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
