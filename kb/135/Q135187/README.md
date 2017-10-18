---
layout: page
title: "Q135187: Setup Reports That Windows NT Is Installed When It Is Not"
permalink: kb/135/Q135187/
---

## Q135187: Setup Reports That Windows NT Is Installed When It Is Not

	Article: Q135187
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows 95 Setup on a computer that had Microsoft Windows NT
	installed on it in the past, Setup may report that Windows NT is still
	installed, even though it is not.
	
	CAUSE
	=====
	
	The Windows\System32 folder contains the Windows NT version of the Winver.exe
	file. Setup checks for this file.
	
	RESOLUTION
	==========
	
	Quit Setup, delete the Winver.exe file from the Windows\System32 folder, and
	then run Setup again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
