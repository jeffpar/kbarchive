---
layout: page
title: "Q202940: SMS: Resource Explorer Shows Blank Hardware Inventory Classes"
permalink: kb/202/Q202940/
---

## Q202940: SMS: Resource Explorer Shows Blank Hardware Inventory Classes

	Article: Q202940
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbMMC kbsms200 kbCollections kbInventory kbResX kbsmsAdmin kbsmsUtil
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Resource Explorer, when you are viewing hardware for a Systems Management
	Server 2.0 client, some hardware inventory classes that are displayed may not
	contain data, although other clients display data for the same hardware
	inventory classes.
	
	This behavior can be seen in the following scenarios:
	
	- A child site reporting to the parent has more options enabled in the
	  SMS_def.mof file than other child sites also reporting to the parent, or more
	  options enabled than are on the parent site itself.
	
	- A client that is assigned to multiple sites uses the principal site's
	  SMS_def.mof file. If this site has enabled more classes in its SMS_def.mof
	  file than the other site(s) that the client is assigned to, this problem may
	  occur.
	
	MORE INFORMATION
	================
	
	During the initial hardware inventory, by default, SMS collects as many as 200
	hardware properties with details such as:
	
	- Number of disk drives
	
	- Type of processor
	
	- Amount of memory
	
	- Operating system
	
	- Monitor and display settings
	
	- Computer name and IP address
	
	- Information about peripherals connected to the resource
	
	- Network type
	
	The properties that are collected depend on which classes and attributes are
	enabled in the SMS_def.mof file. Classes are categories of hardware resources.
	Although this file contains more than 650 properties, it is distributed with
	approximately 200 of the properties enabled. This file can be modified by
	administrators.
	
	SMS_def.mof contains classes and properties of hardware that are defined by the
	Desktop Management Task Force (DMTF). Properties are the attributes of the
	classes. SMS_def.mof is used by hardware inventory client components to
	determine what classes and properties should be gathered. SMS_def.mof is stored
	on CAPs in the \CAP_sitecode\CLIFILES.BOX\HINV directory. A master copy of this
	file is stored on the site server in \smsdir\INBOXES\CLIFILES.SRC\HINV. Disabled
	properties in SMS_def.mof can be enabled by editing the master copy.
	
	Both Windows 16-bit and Windows 32-bit client computers use the SMS_def.mof file
	to determine what hardware inventory should be collected. However, the way the
	data is collected on these client computers differs. Windows 32-bit client
	computers use the CIM Object Manager (started by the Windows Management Service)
	to collect hardware inventory data from providers. Windows 16-bit client
	computers use the Hardware Inventory Client Agent to collect inventory data. On
	both client computer types, collection data is sent to the Client Access Point
	(CAP) by the Hardware Inventory Client Agent and added to the site server
	database by threads of the SMS Executive.
	
	Only a subset of the data that is collected by the CIM Object Manager can be
	collected by the Windows 16-bit Hardware Inventory Client Agent. Further, most
	hardware data processing for Windows 16-bit client computers is done on the site
	server. On the other hand, most hardware data processing for Windows 32-bit
	client computers is completed on the client computer. So, for example, only
	changes in hardware configuration are sent to the CAP by the Windows 32-bit
	client agent, while all hardware data is sent to the CAP by the Windows 16-bit
	client agent, and the site server must then process the data to find changes in
	hardware inventory.
	
	REFERENCES
	==========
	
	For additional information about this topic, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q199318 How SMS Uses the SMS_DEF.MOF in Hardware Inventory
	
	  Q200879 Resource Explorer Does Not Show Readable Format of Inventory
	
	  Q237495 Err Msg: ERROR 2 Failed to Run MofComp
	
	Systems Management Resource Guide:
	
	- Chapter 10 - Customizing Hardware Inventory
	- Chapter 13 - Using SMS 2.0 Tools - Part 1
	- Chapter 14 - Using SMS 2.0 Tools - Part 2
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbMMC kbsms200 kbCollections kbInventory kbResX kbsmsAdmin kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
