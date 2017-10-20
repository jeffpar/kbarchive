---
layout: page
title: "Q143136: Internal Network Number of FFFFFFFF is Not Valid"
permalink: /kb/143/Q143136/
---

## Q143136: Internal Network Number of FFFFFFFF is Not Valid

{% raw %}

	Article: Q143136
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install a Novell Netware server, you give it an internal network number
	that should be unique on the network. An Internal Network Number of FFFFFFFF is
	not valid and you may not be able to connect with an NT Server with Gateway
	Services for NetWare (GSNW) or File & Print Services for NetWare (FPNW)
	installed.
	
	MORE INFORMATION
	================
	
	The Internal Network number is specified in the AUTOEXEC.NCF file of the Netware
	Server. Check to make sure it is not set to all F's. If it is, reconfigure the
	number to be something else. Any combination of numbers 0-9 and letters A-F with
	the exception of all F's or all 0's is valid. It must also be unique on the
	network.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
