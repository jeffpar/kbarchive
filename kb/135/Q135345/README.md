---
layout: page
title: "Q135345: Compaq NetFlex-L Fails To Start/Windows NT Hangs During Shutdown"
permalink: /kb/135/Q135345/
---

## Q135345: Compaq NetFlex-L Fails To Start/Windows NT Hangs During Shutdown

	Article: Q135345
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows NT on a Compaq computer using a NetFlex-L network
	interface card (NIC) driver (PCNTN3.SYS) supplied in the Compaq Support Software
	Diskette (SSD) version 1.15, the following error message appears when you start
	Windows NT:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	The following event is written to the system log:
	
	  Event: 7022
	  Source: Service Control Manager
	  Type: Error
	  Description: The Computer Browser service hung on starting.
	
	In addition, Windows NT stops responding (hangs) during shutdown.
	
	CAUSE
	=====
	
	This problem occurs if you are using the IPX/SPX Compatible transport (NWLink)
	protocol and the computer is not connected to the network.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure your computer is connected to a working
	network.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
