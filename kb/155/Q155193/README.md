---
layout: page
title: "Q155193: MOVE Command Does Not Support Overwriting Files"
permalink: kb/155/Q155193/
---

## Q155193: MOVE Command Does Not Support Overwriting Files

	Article: Q155193
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the MOVE command at a command prompt in Windows NT 4.0, you may
	receive the following error message:
	
	  Cannot create a file when that file already exists.
	
	CAUSE
	=====
	
	The destination folder already contains a file with the same name as the file
	you are attempting to move. The MOVE command does not prompt you to overwrite
	the file when this situation occurs.
	
	RESOLUTION
	==========
	
	Use Windows NT Explorer or File Manager (Winfile.exe) to move the file to the
	destination folder. When you use either of these tools, you are prompted to
	overwrite the existing file if a file with the same name exists in the
	destination folder.
	
	Additional query words: dos vdm
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
