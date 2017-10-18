---
layout: page
title: "Q136336: Windows NT Fails Because of an Access Violation in WINLOGON"
permalink: kb/136/Q136336/
---

## Q136336: Windows NT Fails Because of an Access Violation in WINLOGON

	Article: Q136336
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an access violation occurs in WINLOGON, an updated DrWtsn32.LOG appears in
	the %SystemRoot directory and the following symptoms also occur sporadically:
	
	- A STOP 21a message appears on the server screen.
	
	- The error message "Error 1723 RPC Server too Busy" is returned to client
	  requests.
	
	CAUSE
	=====
	
	Winlogon fails due to an access violation caused by an RPC length pointer that
	refers beyond the end of a data structure (RPC buffer) referenced during RPC
	unmarshalling. This occurs if a client program provides an invalid RPC packet
	length or the length field gets damaged during the delivery to the server
	process.
	
	The STOP 21a message occurs if the security system fails.
	
	The Error 1723 occurs if threads in the SERVICES.EXE block as a result of the
	security system failure.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
