---
layout: page
title: "Q114945: Sytos Fails Adding Volumes with Enhanced-mode 1742 Controller"
permalink: /kb/114/Q114945/
---

## Q114945: Sytos Fails Adding Volumes with Enhanced-mode 1742 Controller

	Article: Q114945
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When the Adaptec 1742 tape controller is running in enhanced mode, Sytos may
	perform tape backup correctly but trap when trying to add a volume back from
	tape. If you attempt to view a catalog, you may also have to wait hours to
	obtain it.
	
	CAUSE
	=====
	
	These problems are related to configuring the Adaptec 1742 controller in
	enhanced mode, and running older versions of Sytos software.
	
	RESOLUTION
	==========
	
	1. Upgrade the Sytos software to the newest version. (Currently 1.38)
	
	2. Configure the Adaptec 1742 controller to run in Standard mode, thereby
	  forcing it to use the AHA154x.BID file as the device driver.
	
	3. Use a known good version of the AHA154x.BID file (AHA154x.BID dated
	  11/15/91).
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
