---
layout: page
title: "Q141807: BUG: RPC NetBIOS Calls Fail over RAS"
permalink: kb/141/Q141807/
---

## Q141807: BUG: RPC NetBIOS Calls Fail over RAS

	Article: Q141807
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When RPC calls attempt to register a NetBIOS protocol sequence as an endpoint
	with Remote Access Services (RAS) installed, you may receive error messages such
	as error 1704 "The RPC protocol sequence is invalid" or error 1720 "The endpoint
	cannot be created."
	
	CAUSE
	=====
	
	The problem occurs because RAS incorrectly enters some information in the
	registry when installed.
	
	RESOLUTION
	==========
	
	Taking the RPC-related RAS entries out of the registry resolves this issue.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor.
	
	2. Select the HKEY_LOCAL_MACHINE subtree.
	
	3. Go to the SOFTWARE\Microsoft\RPC\NetBIOS key.
	
	4. To the right you will see the protocol sequences that can be registered by an
	  RPC application. For a machine with a single network card and RAS, you may
	  see:
	
	  ncacn_nb_tcp0
	  ncacn_nb_nb0
	  ncacn_nb_ipx0
	  ncacn_nb_tcp1
	  ncacn_nb_nb1
	  ncacn_nb_ipx1
	
	  These values will have a dword that signifies the binding order. If the
	  network adapter driver was installed prior to RAS (most likely), remove all
	  the sequences that end in 1. The sequences are written to the registry in the
	  order the device driver was installed, so you must know the order in which
	  network cards and RAS were installed. Once the RAS bound protocol sequences
	  are removed, the RPC calls will always go over the RAS link when a call is
	  made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
