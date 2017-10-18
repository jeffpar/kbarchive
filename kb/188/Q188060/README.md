---
layout: page
title: "Q188060: SMS: Long Program Item Description May Cause NAD Corruption"
permalink: kb/188/Q188060/
---

## Q188060: SMS: Long Program Item Description May Cause NAD Corruption

	Article: Q188060
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPGC smsappman smspgc kbSMSAppMan
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program item description exceeds 40 characters in length, you receive the
	following error in the AppMan.log file of a child site that receives the package
	update:
	
	  NAD ##> Error setting program item 'I000003B' (package I000002E). (10)
	
	After the error occurs, it is possible that a sequence of corruption can spread
	through the secondary site. This does not always occur, but when it does, it can
	result in some very strange behavior from Program Group Control (PGC) on Systems
	Management Server clients.
	
	NOTE: It is only possible to create a program item description that exceeds 40
	characters by importing a package definition file (PDF) where the description is
	greater than 40 characters.
	
	WORKAROUND
	==========
	
	To quickly locate any program item that can potentially cause a problem, run the
	following use ISQL/W against the SMS database to run the following query:
	
	     select * from ProgramItems where datalength(Description) > 40
	
	For any items that are returned, make note of the package ID and then do the
	following:
	
	1. Use the Systems Management Server Administrator program to shorten any
	  program item descriptions so that they do not exceed 40 characters.
	
	2. Stop and restart the SMS Executive service on each child site. This ensures
	  that the SMS Application Manager service does not remain in an unstable
	  state.
	
	3. Use either of the following commands to reset the network applications
	  database (NAD) at each child site (the second command below targets specific
	  sites that were affected):
	
	        RSAPPCTL /ALL
	
	  -or-
	
	        RSAPPCTL /SITE:xxx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Sites that are affected by this problem can experience the following problems
	after the error occurs:
	
	- The Application Manager may corrupt the registry in the following registry
	  keys:
	
	     HKLM\SOFTWARE\Microsoft\SMS\Components\Application Manager\Package
	     Keys\<package_ID>\<program_item_ID>
	
	  The program item IDs listed under each Package ID will all be set to the same
	  value. In this example, each package that followed package ID "I000002E"
	  would contain "I000003B" for the program item.
	
	- Subsequent work cycles by the Application Manager will incorrectly detect
	  that the "server list has changed" for certain packages. When this occurs,
	  the following text can be found in the Appman.log file:
	
	        Server list has changed for package I0000049.  Updating program
	        items.~
	
	- The Application Manager may then "corrupt" the program items (*.haf files)
	  located in the SMS\Site.srv\Maincfg.box\Appctl.src\database directory.
	
	- The Application Manager may reach an unstable state where the Nadctrl.nad
	  file is deleted from the \database directory and is not re-created. This will
	  have serious effect on the Systems Management Server clients. When the
	  Nadctrl.nad file does not exist in the NAD directory, Appctrl.exe does not
	  access this NAD, but will try to find another NAD in the SMS hierarchy.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPGC smsappman smspgc kbSMSAppMan 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
