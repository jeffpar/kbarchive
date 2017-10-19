---
layout: page
title: "Q72254: User Directory Must Precede the Shared Windows Directory"
permalink: /kb/072/Q72254/
---

## Q72254: User Directory Must Precede the Shared Windows Directory

	Article: Q72254
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell technical support reports that the user's personal directory must precede
	the shared Windows directory in the user's PATH statement or NetWare search
	drives.
	
	MORE INFORMATION
	================
	
	By default, Windows will suggest this arrangement, but if Windows is not allowed
	to modify the AUTOEXEC.BAT, then the modification must be done manually.
	
	It is also possible to leave Windows out of the PATH statement, and instead use
	the Novell MAP ROOT command and search drives to set the directories in proper
	order, since you will be logging into the server before running Windows.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," pages 545-556.
	
	NetWare and Windows Integration, NetWare Application Notes, Page 33.
	
	Additional query words: 3.00 win30 net ware novell 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
