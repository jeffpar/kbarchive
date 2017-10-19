---
layout: page
title: "Q221947: SMS: Force Software Inventory Incorrectly Documented in Guide"
permalink: /kb/221/Q221947/
---

## Q221947: SMS: Force Software Inventory Incorrectly Documented in Guide

	Article: Q221947
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbdocfix kbsms200
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Systems Management Server 2.0 Administrator's Guide, Chapter 10
	Collecting Hardware and Software Inventory, page 339, in the section labeled
	Scheduling Software Inventory, it states the following:
	
	  "To force a software inventory on a single client, first click the Systems
	  Management Control Panel applet in the Windows Control Panel. On the Agents
	  tab, select Software Inventory Client Agent and then click Run."
	
	This information is INCORRECT. The user will note that there is neither an Agents
	tab, nor a Run button. The correct way to force a software inventory is:
	
	1. Go to the Systems Management Control Panel applet.
	
	2. Click the Components tab.
	
	3. Highlight the Software Inventory Agent.
	
	4. Click Start Component.
	
	MORE INFORMATION
	================
	
	This error has been documented for correction in Doc Bug 46179.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocfix kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	
	=============================================================================
	
