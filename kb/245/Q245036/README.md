---
layout: page
title: "Q245036: Cannot Delete DHCP Reservations."
permalink: kb/245/Q245036/
---

## Q245036: Cannot Delete DHCP Reservations.

	Article: Q245036
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete reservations in DHCP (Dynamic Host Configuration
	Protocol) Manager, the option for deleting reservations and related settings may
	not be available. The DHCP service may not start. Also, when you attempt to use
	the Jetpack.exe utility to compress the DHCP database, you may not be able to do
	so, and Event Viewer may record the following event:
	
	  Event ID 1010: The DHCP server encountered the following error when cleaning
	  up the user database: The system cannot find the file specified.
	
	CAUSE
	=====
	
	This behavior can occur if you install an earlier version of the Dhcp.mdb file
	over a later version, or if DHCP scope settings in DHCP Manager are corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, if you have a backup copy of the Dhcp.mdb file, replace
	the damaged Dhcp.mdb file with the backup copy; if you do not have a backup copy
	of the file, re-create the database in Microsoft Windows NT Server 4.0.
	
	To replace the damaged Dhcp.mdb file with the backup copy, follow these steps:
	
	1. Locate the backup copy in the %SystemRoot%\System32\Dhcp\Backup\Jet\New
	  folder.
	
	2. Move the backup copy to the %SystemRoot%\System32\Dhcp folder to replace the
	  damaged Dhcp.mdb file.
	
	To re-create the database in Microsoft Windows NT Server 4.0, follow these
	steps:
	
	1. If possible, write down all of the scope settings (including reservations).
	
	2. Stop the DHCP service if it is running.
	
	3. Delete the Dhcp.mdb file from the %SystemRoot%\System32\Dhcp folder.
	
	  NOTE: When you delete the Dhcp.mdb file, any reservation and lease information
	  is lost. However, when you restart the DHCP service, the Dhcp.mdb file is
	  re-created. The registry restores certain scope settings, but you must
	  manually re-create reservations.
	
	4. Start the DHCP service.
	
	5. Reconcile the database:
	
	  a. Start DHCP Manager.
	
	  b. Double-click the DHCP server, and then click the correct scope.
	
	  c. On the Scope menu, click Active Leases.
	
	  d. Click Reconcile, and then click OK.
	
	6. Under Server Properties, set the value in the Conflict Detection box to a
	  value higher than the default value (3), and then click OK.
	
	7. Monitor the lease database. If you find any bad addresses, follow these
	  steps:
	
	  a. Delete the bad address entries.
	
	  b. Reconcile the database.
	
	  c. To test DHCP, on a client computer, type "ipconfig /release" (without the
	     quotation marks) at a command prompt, and then press ENTER.
	
	  d. Type "ipconfig /renew" (without the quotation marks) at the command
	     prompt, and then press ENTER.
	
	Additional query words: NT4.0 reconcile reservation
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
