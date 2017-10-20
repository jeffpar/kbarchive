---
layout: page
title: "Q158564: Err Msg: The Following Non-Microsoft Networking Component..."
permalink: /kb/158/Q158564/
---

## Q158564: Err Msg: The Following Non-Microsoft Networking Component...

{% raw %}

	Article: Q158564
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are upgrading to Windows NT 4.0, you may receive the following
	warning:
	
	  The following non-Microsoft networking component is installed on this
	  computer: <net card>. Although your network connection may function
	  properly after the upgrade is complete, the component should be removed
	  and replaced with a newer version.
	
	where <net card> is the network adapter driver currently installed.
	
	CAUSE
	=====
	
	Third-party network adapter drivers are not upgraded when you upgrade the
	operating system. This is a generic warning that appears when you upgrade a
	computer with a third-party network adapter driver.
	
	
	RESOLUTION
	==========
	
	Continue with the upgrade process. When the upgrade is finished, start Windows
	NT, remove the old network adapter driver, and install an updated driver
	intended for use with Windows NT 4.0.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
