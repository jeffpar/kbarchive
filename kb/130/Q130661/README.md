---
layout: page
title: "Q130661: Windows NT 3.5: STOP 0x0000000a in NETBT.SYS When Memory is Low"
permalink: /kb/130/Q130661/
---

## Q130661: Windows NT 3.5: STOP 0x0000000a in NETBT.SYS When Memory is Low

	Article: Q130661
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows NT 3.5 with TCP/IP installed on a network using the Windows
	Internet Naming Service (WINS), a STOP 0x0000000a message appears.
	
	CAUSE
	=====
	
	The Windows NT memory manager could not allocate a memory block of the requested
	size and returned STATUS_INSUFFICIENT_RESOURCES to the calling function. This
	occurs when your system runs low on available memory (physical memory and page
	file memory). Instead of checking first whether the pointer to the requested
	memory block is NULL, which it is in this case, the code continues to use that
	pointer as if it was successfully initialized. This causes the STOP 0x0000000a
	message.
	
	RESOLUTION
	==========
	
	To work around this problem, install more RAM on your computer or make more disk
	space available for the Windows NT page file.
	
	To resolve this problem, upgrade to Windows NT version 3.51 or obtain the fix
	mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt 3.51 crash trap blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
