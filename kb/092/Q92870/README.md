---
layout: page
title: "Q92870: WFWG: NETX.COM Err Msg: File Server Not Found"
permalink: /kb/092/Q92870/
---

## Q92870: WFWG: NETX.COM Err Msg: File Server Not Found

{% raw %}

	Article: Q92870
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Windows for Workgroups with Novell NetWare support
	on an Ethernet II cabling system, you may be unable to see any NetWare file
	servers. Also, you may receive the following error messages when NETX.COM
	starts:
	
	  File server not found
	
	CAUSE
	=====
	
	This error may be caused by a conflict in data frame formats. An Ethernet II
	system uses its own frame format, while the default frame format for Novell
	support follows the IEEE 802.3 standard.
	
	WORKAROUND
	==========
	
	To enable your Windows for Workgroups workstation to communicate correctly on an
	Ethernet II system with Novell NetWare support, you must change the frame format
	used by the IPX protocol to Ethernet II. To do this, use the following steps:
	
	1. In the Control Panel window, choose the Network icon.
	
	2. Choose the Adapters button.
	
	3. Select the adapter that is configured for NetWare.
	
	4. Choose the Setup button, then choose the Protocols button.
	
	5. From the Protocols In Use list, select Novell IPX.
	
	6. Choose the Settings button.
	
	7. Select Ethernet II (DIX) instead of the default Novell/Ethernet setting, then
	  choose the OK button.
	
	After you accept the changes and reboot your machine, you should be able to see
	NetWare servers on the Ethernet II system.
	
	Additional query words: 3.10 wfwfest econfig
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
