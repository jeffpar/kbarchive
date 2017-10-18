---
layout: page
title: "Q199745: SMS: Ensuring SW Metering Does Not Start Out of License Apps"
permalink: kb/199/Q199745/
---

## Q199745: SMS: Ensuring SW Metering Does Not Start Out of License Apps

	Article: Q199745
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) version 2.0, the Software Metering component
	can be configured to monitor the use of applications and restrict use when
	necessary. When configuring Software Metering, you can set it to block any
	attempts to open a file after a set number have been opened. For example, if you
	have 100 licenses for Notepad and you currently have 100 users using Notepad,
	then the next user that attempts to open Notepad will not be able to. However,
	if the user renames Notepad.exe to N.exe either by way of copying or by
	renaming, they can circumvent the license restriction.
	
	If, on the other hand, you have selected under "Program Name Policy" the
	"Original" name, your users will not be able to rename the .exe file to get
	around the license enforcement. This method pulls information from the
	executable's header, which can not be modified by the end user. This method will
	stop the 101st user attempting to open Notepad.exe regardless of what it has
	been renamed to.
	
	Also, check the Software Metering server itself. There are two options to select
	when specifying the Software Metering Properties in the Systems Management
	Server MMC Administrator console under the following:
	
	Site Database\Site Hierarchy\site name\Site Settings\Component Configuration\Software Metering
	
	If you have chosen to monitor under "Program Name Policy" the "Standard" name of
	the application, then the name that appears in Explorer is what is monitored. If
	you have not set up your Software Metering server to monitor for N.exe, then
	your users will be able to rename Notepad.exe to anything and continue to use
	it.
	
	Software Metering can also be configured to handle applications such as virus
	checkers that have multiple executables. Software Metering monitors the task
	list for these .exe files as it does for Notepad.exe, so if the end user renames
	several of the .exe files and you have configured Software Metering to monitor
	based on the "Original" name, you will still be able to track the number of
	instances of an application that are running.
	
	Additional query words: prodsms swmeter
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
