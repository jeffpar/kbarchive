---
layout: page
title: "Q152489: Inventory Fails to Inventory a Package"
permalink: kb/152/Q152489/
---

## Q152489: Inventory Fails to Inventory a Package

	Article: Q152489
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Inventory Packages on Systems Management Server (SMS) clients fails to return a
	positive value if the package is searching for files in separate directories.
	The Inventory Agent will find the files on the disk, but because they are not in
	the same directory, SMS does not report the package. This affects "add AND"
	packages. Invdos.exe in verbose mode shows that it does find the file, but then
	states, "number of matches 1 not equal to requested matches 2".
	
	"Add OR" packages are not affected, because it only requires ONE file for a
	match. "Add OR" packages will report normally.
	
	CAUSE
	=====
	
	SMS does not take into account the possibility that the files may be in
	different directories. Because it does not walk the hashed hit list looking for
	the file names, it considers the package as not found, even though it has found
	the files individually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms software
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	
	=============================================================================
	
