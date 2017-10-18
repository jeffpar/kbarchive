---
layout: page
title: "Q177805: XCLN: Setup Cannot Register Comcat.dll in the System Registry"
permalink: kb/177/Q177805/
---

## Q177805: XCLN: Setup Cannot Register Comcat.dll in the System Registry

	Article: Q177805
	Product(s): Microsoft Exchange
	Version(s): 8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Outlook client on a Microsoft Exchange Server
	computer, you may receive the following error:
	
	  Setup cannot register COMCAT.dll in the system registry
	  because an older version is in use. Close all applications
	  and try again.
	
	CAUSE
	=====
	
	The Microsoft Exchange Event Service that uses the Comcat.dll file may be
	running. This behavior is by design.
	
	RESOLUTION
	==========
	
	Stop the Microsoft Exchange Event service in the Control Panel Services icon
	before starting or continuing with the Outlook installation.
	
	Additional query words: ol97
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3
	Version           : :8.03
	Issue type        : kbprb
	
	=============================================================================
	
