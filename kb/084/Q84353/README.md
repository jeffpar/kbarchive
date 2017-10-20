---
layout: page
title: "Q84353: Microphone II Requires Windows 3.1 Communications Driver"
permalink: /kb/084/Q84353/
---

## Q84353: Microphone II Requires Windows 3.1 Communications Driver

{% raw %}

	Article: Q84353
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microphone II, by Software Ventures Corporation, replaces the default Windows
	communications driver (COMM.DRV) with its own communications driver
	(COMM_SVC.DRV) in the [Boot] section of the SYSTEM.INI file:
	
	     [Boot]
	     COMM.DRV=COMM_SVC.DRV
	
	When running Microphone II through Microsoft Windows operating system version
	3.1, Software Ventures technical support recommends using the default Windows
	3.1 COMM.DRV driver.
	
	     [Boot]
	     COMM.DRV=COMM.DRV
	
	MORE INFORMATION
	================
	
	Using COMM_SVC.DRV in Windows 3.1 may cause one or more of the following
	problems:
	
	1. 386 enhanced mode restarts the system when accessing a communication port.
	
	2. The error message
	
	  The current port is assigned to a DOS application...
	
	  appears.
	
	3. In the Ports option in Control Panel, the Advanced button is unavailable
	  (dimmed). Normally, the Advanced button is available after you choose the
	  Settings button from the Ports option.
	
	For further information on Microphone II, call Software Ventures technical
	support.
	
	The Microphone II product included here is manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.11 3.10 Microphone Grey Gray reboot enhanced COM port greyed grayed out
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
