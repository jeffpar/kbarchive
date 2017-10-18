---
layout: page
title: "Q142367: MS-DOS Clients Cannot Log On Across Router with TCP/IP"
permalink: kb/142/Q142367/
---

## Q142367: MS-DOS Clients Cannot Log On Across Router with TCP/IP

	Article: Q142367
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft LAN Manager, version 2.2c 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to a domain across a router using the TCP/IP protocol from a LAN
	Manager 2.2c client computer or a Network Client 3.0 client computer configured
	as a WINS client, NET3778 error message appears.
	
	CAUSE
	=====
	
	The client computer sends a NetLogon request that is broadcasted locally. The
	WINS server is not queried to find a list of domain controllers.
	
	NOTE: When you use NET.EXE (such as "net use" or "net view"), a WINS server is
	queried for NetBIOS name resolution.
	
	WORKAROUND
	==========
	
	Add the following entry for a domain controller in the LMHOSTS file:
	
	  #DOM:<domain name>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LAN Manager version 2.2c and
	Network Client version 3.0 for MS-DOS. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt 2.20 3.00 lanman
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : 3.50 3.51
	
	=============================================================================
	
