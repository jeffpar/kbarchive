---
layout: page
title: "Q167632: MCA Network Adapter Fails After Applying Windows NT 4.0 SP2"
permalink: kb/167/Q167632/
---

## Q167632: MCA Network Adapter Fails After Applying Windows NT 4.0 SP2

	Article: Q167632
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT version 4.0 Service Pack 2 to a computer with a Micro
	Channel Architecture (MCA) network adapter, you may receive the following error
	message:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When you look at the event log, you see the following entry:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: A device connected to the system is not functioning.
	
	After you log on to the computer, you may have no network access through the MCA
	network adapter.
	
	CAUSE
	=====
	
	The Ndis.sys device driver in Service Pack 2 fails to detect any network cards
	installed in MCA slots 8 or higher. Network cards installed in slots 1 through 7
	are detected by Windows NT and function normally.
	
	RESOLUTION
	==========
	
	If the MCA network adapter was working fine prior to installing Service Pack 2,
	you can rename the Ndis.sys file found in the %systemroot%\System32\Drivers
	directory and use the Expand utility to expand the Ndis.sys from the compact
	disc or copy the Ndis.sys file from the service pack uninstall
	$NtServicePackUninstall$ directory and reboot.
	
	-or-
	
	You can physically move the affected network adapter to a lower MCA slot number
	in order for the Service Pack 2 Ndis.sys driver to use it.
	
	You usually must re-run the Micro Channel configuration utility to Update your
	computer's configuration after moving the MCA network adapter to a different
	slot. Consult your computer manufacturer's user guide for complete instructions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: sp2
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
