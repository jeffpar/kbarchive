---
layout: page
title: "Q91017: Problems Upgrading Drivers When Installing WFWG on LAN Manager"
permalink: kb/091/Q91017/
---

## Q91017: Problems Upgrading Drivers When Installing WFWG on LAN Manager

	Article: Q91017
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows for Workgroups on a machine that uses Microsoft LAN
	Manager, Setup may display an error message saying it cannot upgrade a driver.
	This may occur with any original equipment manufacturer (OEM) specific device
	drivers in LAN Manager.
	
	CAUSE
	=====
	
	The LAN Manager configuration is upgraded by comparing the DRIVER0 entry in the
	LAN Manager SETUP.INI file against the list of known LAN Manager drivers in the
	[netcard] section of LM21DRV.UPD. If they do not match, the driver cannot be
	automatically upgraded.
	
	WORKAROUND
	==========
	
	You have to select from the drivers that Windows for Workgroups provides or use
	an OEM installation disk.
	
	Additional query words: 3.10 lanman err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
