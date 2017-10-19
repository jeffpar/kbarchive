---
layout: page
title: "Q90321: WFWG Err Msg: No Configuration Servers Found... DCA's Comnap"
permalink: /kb/090/Q90321/
---

## Q90321: WFWG Err Msg: No Configuration Servers Found... DCA's Comnap

	Article: Q90321
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to execute DCA's Comnap for 3270 services in Windows for
	Workgroups, and the workgroup you have selected is not the same as the domain
	for which Comnap is looking, the following error message is generated:
	
	  No configuration servers found within time limit. Comm Server Network Access
	  initialization failed.
	
	Comnap does a domain specific broadcast to locate the Comm Server.
	
	WORKAROUND
	==========
	
	To work around this problem, change the Workgroup Name to the same domain name
	that the LAN Manager server is on.
	
	To change your Workgroup name, take the following steps:
	
	1. From Control Panel, choose the Network icon .
	
	2. Change your Workgroup name, then choose the OK button.
	
	3. Restart the computer for the changes to take effect.
	
	DCA's Comnap included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 wfwg err msg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	
