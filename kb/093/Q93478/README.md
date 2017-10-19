---
layout: page
title: "Q93478: WFWG May Hang Loading in Enhanced Mode Without a Terminator"
permalink: /kb/093/Q93478/
---

## Q93478: WFWG May Hang Loading in Enhanced Mode Without a Terminator

	Article: Q93478
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- Windows for Workgroups stops responding (hangs) at the logo screen when
	  starting in 386 enhanced mode.
	
	  -or-
	
	- Windows for Workgroups hangs after the logo screen when starting in standard
	  mode if the real-mode redirector has been started.
	
	  -or-
	
	- The computer may stop responding in MS-DOS if a NET USE or NET VIEW command
	  is used.
	
	- Your system stops responding (hangs) when you attempt to exit Windows for
	  Workgroups.
	
	CAUSE
	=====
	
	This problem occurs when there is no terminator connected to the network
	interface card (NIC). The NIC requires a terminator even if the card isn't on
	the network. The Intel EtherExpress 16, which is shipped with some versions of
	Windows for Workgroups, requires a terminator if it is configured with Thin
	Ethernet cable. The 3Com EtherLink III card also requires a terminator.
	
	WORKAROUND
	==========
	
	To work around this problem, attach a terminator to the coaxial jack on the
	network card. Or, if you are using the Intel EtherExpress 16 card, use the
	appropriate procedure below.
	
	Windows for Workgroups 3.1
	--------------------------
	
	1. Start Windows for Workgroups in standard mode by typing:
	
	  win/s
	
	2. From Control Panel, choose the Network icon.
	
	3. Choose the Adapters button and select the Intel EtherExpress 16.
	
	4. Choose the Advanced button and select Transceiver Type.
	
	5. In the Transceiver Type field, select Thick Net (AUI/DIX).
	
	6. Choose OK, then choose Close until you are back in Control Panel.
	
	Windows for Workgroups 3.11
	---------------------------
	
	1. Start Windows for Workgroups without loading the network software by typing:
	
	  win /n
	
	2. From the Program Manager Network group, run Network Setup.
	
	3. Choose the Drivers button.
	
	4. Select Intel EtherExpress 16 and choose the Advanced button.
	
	5. Select Transceiver Type.
	
	6. In the Transceiver Type field, select Thick Net (AUI/DIX) and then choose the
	  Set button.
	
	7. Choose OK twice.
	
	MORE INFORMATION
	================
	
	The Windows for Workgroups add-on user kit does not ship with a terminator.
	Normally, the add-on user kit is installed on an existing, functional Windows
	for Workgroups network. Because a functional Windows for Workgroups network must
	be already terminated on both ends, it is not necessary to provide an additional
	terminator to add a new user.
	
	Additional query words: 3.10 3.11 ether express ee16 lock up lockup lock-up crash freeze hang
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
