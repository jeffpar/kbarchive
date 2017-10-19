---
layout: page
title: "Q173793: SMS: How to Use System Policies with Program Group Control"
permalink: /kb/173/Q173793/
---

## Q173793: SMS: How to Use System Policies with Program Group Control

	Article: Q173793
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbusage kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using system policies with client computers running Windows 95 or Windows
	NT 4.0, defining a "Custom Programs Folder" may keep Program Group Control (PGC)
	from successfully configuring a user's desktop with the program group(s) and
	shared application(s) that they would normally receive.
	
	The information in this article may also be useful to anyone that is implementing
	features associated with the Zero Administration for Windows (ZAW) Initiative.
	
	CAUSE
	=====
	
	When the System Policy Editor is used to define a common Programs folder for
	multiple users, those users will often not have the necessary permissions to
	modify this directory structure.
	
	Because PGC runs under the context of the user, it may fail to configure the
	program groups. Given the proper permissions, PGC will successfully configure
	the Programs folder even if it is located on a server.
	
	WORKAROUND
	==========
	
	To deliver a custom desktop through system policies and also use PGC, use the
	Custom Start Menu option instead of the Custom Programs Folder.
	
	NOTE: When using the Custom Start Menu, the Hide Start Menu Subfolders option
	must be disabled. Otherwise, the custom group under the Start button will not
	appear.
	
	To use the Custom Start Menu option, perform the following steps:
	
	1. Create a custom Start menu at a server location and create an Applications
	  folder directly beneath the Start menu. It is best to use a structure similar
	  to the following:
	
	  \\<server_name>\<share>\Start Menu\Applications
	
	  You can then add other folders and shortcuts underneath the Applications
	  folder.
	
	2. From the System Policy Editor, click to select the Custom Start Menu option
	  and define the common location for the custom Start menu. To continue the
	  previous example, this would be:
	
	  \\<server_name>\<share>\Start Menu
	
	When the user's desktop is configured as a result of the system policy, he or she
	will have an Applications group above the Programs group in the Start menu.
	
	This configuration allows an administrator to use system policies to deliver
	custom desktop applications to their users while maintaining a local Programs
	folder that PGC can modify successfully.
	
	Additional query words: prodsms appctl32 appctl95 win95 winnt zak
	
	======================================================================
	Keywords          : kbusage kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
