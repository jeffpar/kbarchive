---
layout: page
title: "Q139179: 3C0M 3C59X.SYS Driver Fails to Initialize in Windows NT 3.51"
permalink: /kb/139/Q139179/
---

## Q139179: 3C0M 3C59X.SYS Driver Fails to Initialize in Windows NT 3.51

{% raw %}

	Article: Q139179
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose to Shutdown and Restart from the Windows NT 3.51 logon screen,
	the 3Com 3C59X.SYS driver fails to initialize the 3Com 3C590 or 3C595 network
	interface card (NIC). The system reboots, but when you log into Windows NT, you
	are notified that "a service or driver has failed to start," and the network is
	unavailable. The following events may also appear in the Event Log:
	
	  EVENT ID 5000: Source: El59x Type: Error Error: El59x1 : Has encountered a
	  conflict in resources and could not load.
	
	  EVENT ID 7000: Source: Service Control Manager Type: Error Error: The 3Com
	  Fast Etherlink/Etherlink III Adapter Driver service failed to start due to
	  the following error: A device attached to the system is not functioning.
	
	CAUSE
	=====
	
	This problem occurs because the 3Com 3C59X.SYS driver does not reset the NIC on
	Windows NT shutdown. When Windows NT restarts, the driver is not able to locate
	the NIC.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Restart the computer by turning the power off, and then back on.
	
	  -or-
	
	- Enable the resetting of the PCI bus during "warm boots" in the computer's
	  CMOS setup (This feature is available on some computers).
	
	  -or-
	
	- Use another supported NIC. Refer to the latest Windows NT 3.51 Hardware
	  Compatibility List (HCL).
	
	STATUS
	======
	
	3Com Corporation is aware of this problem. For more information, contact 3Com
	Corporation at (800) 876-3266.
	
	The 3Com product discussed here is manufactured by 3Com Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: prodnt 3c595 3c595-tx 3c590 dell cold boot boots
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
