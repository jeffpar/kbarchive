---
layout: page
title: "Q154938: Bugcheck 0xA - Saving 64K File to NetWare in Notepad"
permalink: /kb/154/Q154938/
---

## Q154938: Bugcheck 0xA - Saving 64K File to NetWare in Notepad

	Article: Q154938
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Saving a text file a little bigger than 64K from Notepad on a NetWare server
	causes the system to crash. The following stop error message appears:
	
	  *** STOP: 0x0000000A (0xFC8E6000,0x00000002,0x00000000,0x804042A6)
	  IRQL_NOT_LESS_OR_EQUAL*** Address 804242a6 has base at 80400000 hal.dll
	
	MORE INFORMATION
	================
	
	The error does NOT occur under the following conditions: when saving the file on
	a local disk (FAT or NTFS), saving it to a Windows NT Server, or saving it to a
	NetWare server through a shared directory on a Windows NT Server running Gateway
	Services for NetWare.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	STATUS
	======
	
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.5 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
