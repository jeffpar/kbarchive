---
layout: page
title: "Q134472: Device Resources Not Updated with Forced Configuration"
permalink: /kb/134/Q134472/
---

## Q134472: Device Resources Not Updated with Forced Configuration

	Article: Q134472
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An exclamation point appears over a resource icon in Computer properties in
	Device Manager.
	
	-or-
	
	Changes you make to the resources assigned to a Plug and Play device in the
	computer's CMOS settings are not reflected in the Settings column in Computer
	properties in Device Manager.
	
	CAUSE
	=====
	
	The device is using a forced configuration instead of an automatic
	configuration.
	
	RESOLUTION
	==========
	
	To remove a forced configuration and allow the Plug and Play device to be fully
	configurable by the computer's BIOS and Windows 95, follow these steps:
	
	1. Double-click the System icon in Control Panel.
	
	2. Click the Device Manager tab.
	
	3. Double-click the device, and then click the Resources tab.
	
	4. Click the Use Automatic Settings check box to select it.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	When you clear the Use Automatic Settings check box, you receive the following
	message after you click OK to save your changes:
	
	  You adjusted one or more resource settings manually.
	
	  If you continue, these settings will be assigned, and Windows
	  will be unable to change then automatically to make room for
	  hardware you install in the future.
	
	  For example, if you install a Plug and Play device later,
	  Windows might be unable to set it up because these
	  settings are unavailable.  If this happens, you can
	  return to this Resources tab and check the Use
	  Automatic Settings check box.
	
	  Do you want to continue?
	
	A forced configuration overrides any BIOS or ROM settings, even if Windows 95
	knows the device is currently consuming a different set of resources. Forced
	configurations also allow you to force two devices to conflict with each other.
	If you move a device to a different set of resources, you must update the forced
	configuration manually.
	
	When you are diagnosing hardware problems, it is a good idea to look for forced
	configurations and remove them.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
