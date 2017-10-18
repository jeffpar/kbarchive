---
layout: page
title: "Q130293: Norton Desktop Groups Not Converted by Windows 95"
permalink: kb/130/Q130293/
---

## Q130293: Norton Desktop Groups Not Converted by Windows 95

	Article: Q130293
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade Windows version 3.x to Windows 95 and you are using Norton
	Desktop for Windows, the Windows 95 Setup program does not convert Norton
	Desktop groups to Windows 95 folders.
	
	CAUSE
	=====
	
	Norton Desktop places desktop icons in Quick Access groups (.QAG files) instead
	of Group (.GRP) files as Microsoft Windows 3.x does. The Windows 95 Setup
	program can convert only .GRP files.
	
	RESOLUTION
	==========
	
	To retain Norton Desktop icons when you upgrade to Windows 95, convert the
	Norton Desktop groups from .QAG files to .GRP files using the conversion utility
	provided by Symantec. For information about using or obtaining this utility,
	please contact Symantec.
	
	After you convert .QAG files to .GRP files, use the Windows 95 GRPCONV.EXE tool
	to convert the .GRP files to Windows 95 folders. For more information about
	using the GRPCONV.EXE tool, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q119941 How to Rebuild, Convert, Troubleshoot Folders in Windows 95
	
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, please contact Symantec.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
