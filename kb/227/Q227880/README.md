---
layout: page
title: "Q227880: Modifying TCP/IP Fields May Disable DHCP Relay Agent Service"
permalink: kb/227/Q227880/
---

## Q227880: Modifying TCP/IP Fields May Disable DHCP Relay Agent Service

	Article: Q227880
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows Server version 4.0 or later on a computer with
	only one network adapter, changing any of the TCP/IP properties in Control Panel
	causes the DHCP Relay Agent service running on that computer to become disabled.
	Consequently, when you restart the computer, the DHCP relay agent service does
	not start.
	
	CAUSE
	=====
	
	This problem occurs because there was a restriction on having at least two
	network adapters to use the DHCP Relay Agent service. This restriction has been
	removed. DHCP Relay agent Service is usually run on multihomed computers.
	However, in certain specific scenarios, such as an old router that does not
	support DHCP RFC 1542, you may want the service configured on a computer with
	only one network adapter to forward DHCP packets through unicast to a DHCP
	server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp2 kbWinNTS400search kbWinNT400search kbWinNTS400sp3 kbWinNTS400sp1 kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
