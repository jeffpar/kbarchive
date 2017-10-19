---
layout: page
title: "Q125879: WINS Static Mappings and Remote Access Services"
permalink: /kb/125/Q125879/
---

## Q125879: WINS Static Mappings and Remote Access Services

	Article: Q125879
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Remote Access Services (RAS) with TCP/IP on a domain
	controller or a stand-alone server and then restart your computer, the following
	error messages may appear in your event log:
	
	  Event ID: 2504
	  Source: Server
	  The server could not bind to the transport \device\NetBT_<adapter name>.
	  The data is BE 04.
	
	
	  Event ID: 2144
	  Source: Workstation
	  The computer name already exists on the network.
	
	Several other events are triggered as a result of these, including Netlogon
	failing to start.
	
	CAUSE
	=====
	
	This problem may occur if a statically mapped address on a WINS server exists on
	the other side of a router.
	
	RESOLUTION
	==========
	
	Remove the static mapping for the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.5,
	3.51, and 4.0. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: entries
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
