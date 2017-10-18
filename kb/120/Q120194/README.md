---
layout: page
title: "Q120194: Resolved: WFW Popup Error"
permalink: kb/120/Q120194/
---

## Q120194: Resolved: WFW Popup Error

	Article: Q120194
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT 3.1 computer sends a message to a Windows for Workgroups (WfWG)
	3.11 computer running only IPX\SPX with NetBIOS, the WfWG 3.11 computer receives
	this error (sent either as a print notification or a Net Send message) instead
	of a message pop-up:
	
	  There has been a failure of the network
	
	This error does not occur with messages sent from Windows NT 3.5 computers.
	
	CAUSE
	=====
	
	The streams stack is piggybacking the ack for the last message sent by the WfWG
	3.11 machine (the SMB send message response) on the session end. Instead of
	processing this ack, the WfWG stack returns an error because it gets a session
	end before an ack. Windows NT 3.5 does not show this problem, because its stack
	sends a data ack before the session end.
	
	STATUS
	======
	
	A newer version of NWNBLINK.386 has been released and is available on the
	Windows NT 3.5 distribution CD-ROM disks.
	
	
	Additional query words: prodnt 3.10 wfwg wfw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
