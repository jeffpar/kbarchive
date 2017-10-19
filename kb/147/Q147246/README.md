---
layout: page
title: "Q147246: Using Direct Hosting over IPX Causes STOP 0x0000000A"
permalink: /kb/147/Q147246/
---

## Q147246: Using Direct Hosting over IPX Causes STOP 0x0000000A

	Article: Q147246
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following STOP error message appears on your Windows NT Server:
	
	  STOP: 0x0000000A (0xF922718C,0x00000002,0x00000000,0x80103214)
	
	NOTE: The first and fourth parameter, such as 0xF922718C and 0x80103214, are
	specific to your system configuration.
	
	CAUSE
	=====
	
	This problem occurs when a client computer, using direct hosting over IPX,
	writes to a file on the Windows NT Server. Event ID 2006: "The server has
	received an incorrectly formatted request from <name>" is logged in the
	Event Viewer at the same time.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one or all of the following:
	
	- Disable direct hosting over IPX on the client computer.
	
	- Disable direct hosting bindings on the Windows NT Server. To do this click
	  Bindings in Control Panel Network. Select "Server->Nwlink Ipx/Spx
	  Compatible" (without quotes) and click disable. Click OK and quit Network
	  Settings.
	
	- Remove the IPX/SPX Compatible Transport protocol (NWLink) and use another
	  protocol on the Windows NT Server.
	
	- Use an updated network adapter driver.
	
	- Replace the network adapter card.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt blue trap wfw directhosting
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
