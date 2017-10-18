---
layout: page
title: "Q106042: WFWG Err Msg: This Application Was Communicating on...Network"
permalink: kb/106/Q106042/
---

## Q106042: WFWG Err Msg: This Application Was Communicating on...Network

	Article: Q106042
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you exit Microsoft Windows for Workgroups, you receive the following error
	message on a blue screen:
	
	  This application was communicating on the network when you terminated it.
	  Although Windows attempted to restore the state of the network, you may have
	  problems with network communications until you restart your computer.
	
	  Press any key to continue
	
	
	CAUSE
	=====
	
	This problem occurs when you do one of the following:
	
	- You run Microsoft Mail.
	
	- You run After Dark 1.0a.
	
	- You run NetWare NETBIOS.EXE when Windows for Workgroups is configured with
	  Novell NetWare as an additional network.
	
	RESOLUTION
	==========
	
	If you are using After Dark, you can work around this problem by removing After
	Dark from your Startup group. Otherwise, change the following line in the
	[Microsoft Mail] section of the MSMAIL.INI file:
	
	     [Microsoft Mail]
	     NetBios=0 (instead of NetBios=1)
	
	NOTE: NetBios=0 disables the automatic new mail notification. You must manually
	check for new mail.
	
	
	If you are running Windows for Workgroups with Novell NetWare as an additional
	network, you can work around this problem by removing the NETBIOS.EXE from your
	AUTOEXEC.BAT file and installing IPX/SPX Compatible Transport or "IPX/SPX
	Compatible Transport with NetBIOS" as an additional protocol.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 MSMAIL
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
