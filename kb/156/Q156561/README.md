---
layout: page
title: "Q156561: Error: Data Misalignment in MapiServ.exe"
permalink: /kb/156/Q156561/
---

## Q156561: Error: Data Misalignment in MapiServ.exe

	Article: Q156561
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL extended stored procedure xp_readmail may fail on MIPS computers with
	datatype misalignment error in Mapisrv.exe
	
	The following error is returned:
	
	  Exception datatype misalignment (0x80000002) address : 0x76a651ac
	
	CAUSE
	=====
	
	The exception occurred because the address in a register was not on a 16 byte
	boundary.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
