---
layout: page
title: "Q177414: Using Incorrect DNS Forwarders Cause High Processor Usage"
permalink: kb/177/Q177414/
---

## Q177414: Using Incorrect DNS Forwarders Cause High Processor Usage

	Article: Q177414
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Microsoft Windows NT Domain Name Service (DNS) server may experience times
	when the processor usage climbs as high as 90 percent. Your computer may also
	appear extremely unresponsive while the processor usage remains at this high
	level.
	
	CAUSE
	=====
	
	Your DNS server has its own IP address configured as a forwarder.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. From DNS Manager, click your DNS server in the Server List.
	
	2. Click Properties on the DNS menu.
	
	3. Click the Forwarders tab, select your DNS server's IP address, and click
	  Remove.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	When you set up Microsoft DNS server, you may desire to use Forwarders. When
	configuring this setting, it is not necessary to include your own IP address in
	the list of forwarders. This setting is used as the next place to look when the
	DNS server does not have the name or address in its cache. By including your own
	IP address in the forwarders setting, you are creating a resolver loop where the
	computer keeps trying to forward queries to itself.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
