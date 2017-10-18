---
layout: page
title: "Q96954: NET START NETBEUI/BASIC/FULL/WORKSTATION/REDIR/LIST"
permalink: kb/096/Q96954/
---

## Q96954: NET START NETBEUI/BASIC/FULL/WORKSTATION/REDIR/LIST

	Article: Q96954
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbnetwork kbfasttip kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Windows for Workgroups NET command contains support for real-mode network
	functionality. It includes the real-mode network redirector and the NetBIOS
	Extended User Interface (NetBEUI) protocol. This article discusses the
	functionality of the following NET commands:
	
	- NET START NETBEUI
	
	- NET START BASIC
	
	- NET START FULL (NET START ENHANCED)
	
	- NET START WORKSTATION
	
	- NET START REDIR
	
	- NET START /LIST
	
	MORE INFORMATION
	================
	
	NET START NETBEUI
	-----------------
	
	NET START NETBEUI loads the real-mode version of the NetBEUI protocol into
	conventional memory. It does not load the real-mode network redirector. If you
	start Windows for Workgroups with NetBEUI loaded, most network virtual device
	drivers (VxDs) are used (such as VREDIR.386 and VSERVER.386) except for VNB.386
	(the NetBEUI VxD).
	
	NET START NETBEUI hooks into the interrupt vector table at 5CH. Programs often
	check 5CH to determine if NetBEUI is present and can do so with the NET START
	NETBEUI command.
	
	If you start Windows for Workgroups 3.1 without using NET START NETBEUI first,
	the NetBEUI VxD (VNB.386) loads and provides NetBEUI support but does not hook
	5CH. Applications that use 5CH for NetBEUI detection fail in this situation.
	Windows for Workgroups 3.11 hooks 5CH; therefore, NET START NETBEUI should not
	be needed for most NetBIOS applications."
	
	NOTE: Until you use the NET START WORKSTATION command or start Windows for
	Workgroups, the network redirector does not load.
	
	NET START BASIC
	---------------
	
	NET START BASIC loads the real-mode network redirector into conventional memory.
	If you have not already loaded a static protocol stack (such as TCP/IP or XNS),
	NetBEUI also loads into conventional memory.
	
	NET START BASIC does not load support for named pipes and many LAN Manager
	network application programming interfaces (APIs).
	
	NET START FULL (NET START ENHANCED)
	-----------------------------------
	
	NET START FULL (synonymous with NET START ENHANCED) loads the real- mode
	redirector into conventional memory along with support for named pipes and other
	LAN Manager network APIs. As with NET START BASIC, NetBEUI may install depending
	on the other protocols in use.
	
	NET START WORKSTATION
	---------------------
	
	Using the NET START WORKSTATION command is equivalent to using NET START BASIC
	(by default). The AutoStart= setting in the SYSTEM.INI file specifies the
	redirector loaded by the NET START WORKSTATION command. If you have no AutoStart
	entry in your SYSTEM.INI file, NET START WORKSTATION loads the basic
	redirector.
	
	NET START REDIR
	---------------
	
	The NET START REDIR command starts the default redirector as specified in
	SYSTEM.INI.
	
	NET START /LIST
	---------------
	
	The NET START /LIST command lists all network services that have started.
	
	Additional query words: 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
