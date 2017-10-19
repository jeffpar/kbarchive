---
layout: page
title: "Q198651: SMS: How to Create a New SMS Console Window in the MMC"
permalink: /kb/198/Q198651/
---

## Q198651: SMS: How to Create a New SMS Console Window in the MMC

	Article: Q198651
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server is administered using the SMS Administrator Console,
	which is an instance of the Microsoft Management Console (MMC). The information
	you see in the SMS Administrator Console is stored in a Microsoft Management
	Console file that has a .msc extension. By default, the SMS Administrator
	console starts with the file Sms.msc, which is located in the Sms\Bin\I386
	directory.
	
	The file containing the Systems Management Server management window may become
	corrupted or deleted, or you may want to customize it. This article describes
	how to create a new Microsoft Management Console file and how to customize it
	for use with Systems Management Server.
	
	If your SMS Administrator Console becomes corrupted and you just want to restore
	it, you can copy the Sms.msc file from your original Systems Management Server
	CD to the Sms\Bin\I386 directory.
	
	MORE INFORMATION
	================
	
	To begin creating a new Microsoft Management Console file, you must open a blank
	MMC window. You can do this by running Mmc.exe, which is usually located in the
	<Winroot>\System32 directory.
	
	When the MMC first starts, it has a blank Console Root window. To add Systems
	Management Server functionality to the MMC, you must load the Systems Management
	Server Snap-in. To do this, perform the following steps:
	
	1. On the Console menu, click Add/Remove Snap-In.
	
	2. On the Standalone tab, click Add. A list of avalable Snap-ins is generated.
	
	3. Select the Systems Management Server Snap-in and then click Add.
	
	A wizard will walk you through connecting to your SMS database. You will also be
	given the option to customize your console tree items. Choose this if you want
	to customize which items are shown in your console tree and which ones are not.
	If you want to create a console with the tree items seen in the original SMS
	Administrator Console, choose the default and load all items into your tree.
	
	When the Snap-in for Systems Management Server is loaded, you will see your
	Systems Management Server tree in the Console Root window. If you want to set up
	your console window for Systems Management Server use only, you will want to set
	Systems Management Server to be the root of the tree. This is how the original
	SMS Administrator Console is configured. To do this, perform the following
	steps:
	
	1. Select Systems Management Server from the second level of the tree in the
	  Console Root window.
	
	2. On the Action menu, click New Window From Here. The result will be a new
	  window that has Systems Management Server as its root.
	
	The final step in setting up the MMC to look like the SMS Administrator Console
	is to set the MMC in to Single Window User Mode. To do this, perform the
	following steps:
	
	1. On the Console menu, click Options.
	
	2. On the Console tab, set the Console Mode to User Mode - Delegated Access,
	  Single Window.
	
	You can now save the MMC configuration to a .msc file. Use Sms.msc if you are
	re-creating the SMS Administrator Console. The next time you load this new .msc
	file, it will come up looking like the SMS Administrator Console and will have
	any customizations you made.
	
	Additional query words: prodsms MMC Console SMS.MSC corrupt
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
