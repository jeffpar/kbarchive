---
layout: page
title: "Q90253: NetWare Tools Installs and WFWG Stops Working"
permalink: /kb/090/Q90253/
---

## Q90253: NetWare Tools Installs and WFWG Stops Working

{% raw %}

	Article: Q90253
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Novell's NetWare Tools for Windows, you have no network
	functionality for Windows for Workgroups.
	
	CAUSE
	=====
	
	When you load Netware Tools, it replaces the NETWORK.DRV= line in the [Boot]
	section of the SYSTEM.INI file. This prevents the Windows for Workgroups network
	driver, WFWNET.DRV, from being loaded. Without this driver, there is no network
	functionality for Windows for Workgroups.
	
	WORKAROUND
	==========
	
	To fix this problem, you need to specify WFWNET.DRV in the NETWORK.DRV= line of
	your SYSTEM.INI file.
	
	1. Open your SYSTEM.INI with at text editor, and change the line from
	
	        network.drv=netware.drv
	
	  to:
	
	        network.drv=wfwnet.drv
	
	2. Save your changes and restart your system. Windows for Workgroups functions
	  correctly.
	
	The Netware Tools product included here is manufactured by Novell, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	KBCategory: kbnetwork kb3rdparty kbprb
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
