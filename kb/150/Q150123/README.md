---
layout: page
title: "Q150123: Migrated Schedule+ 1.0 Users Are Prompted for Password"
permalink: kb/150/Q150123/
---

## Q150123: Migrated Schedule+ 1.0 Users Are Prompted for Password

	Article: Q150123
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	7.00
	WINDOWS
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Migration Wizard to migrate Microsoft Mail
	users to Microsoft Exchange, you have the option to migrate Microsoft Schedule+
	files. After the migration is completed and your users log into Microsoft
	Schedule+ 7.0 for the first time, they will be prompted for a password. This is
	the password from the cal file that was on the PC Mail Postoffice.
	
	CAUSE
	=====
	
	The 1.0 cal file contains a password. When Microsoft Schedule+ information is
	migrated, this password is merged into the Pub.edb file. Users will only be
	prompted for this password the first time they log into Microsoft Schedule+.
	
	RESOLUTION
	==========
	
	You need to confirm that all of your users know their password before migrating
	them.
	
	For information about how to perform a manual migration, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q147490 How to Import a 1.0 Cal File Into 7.0
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
