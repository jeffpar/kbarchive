---
layout: page
title: "Q272923: SMS: Documentation Incorrectly States NTFS Permissions"
permalink: /kb/272/Q272923/
---

## Q272923: SMS: Documentation Incorrectly States NTFS Permissions

	Article: Q272923
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Systems Management Server Resource Guide Version 1.2, Chapter
	1, under the Package Distribution Servers topic, the <PackageId> folder
	permissions are incorrectly listed as shown:
	
	  Administrator's Local Group - Full Control
	  Users/Everyone - Read (R)
	
	After the despooler creates a package for distribution using the default
	permissions, it creates folders under the distribution share PackageId folder
	with the following permissions:
	
	  Administrators - Full Control
	  Users/Everyone - Special Access (RWX)
	
	MORE INFORMATION
	================
	
	You can maintain package folder security by editing options located in the
	"Setup Packages for Workstations" dialog box in the SMS 1.2 Administrator
	console.
	
	To modify the folder security settings, follow these steps:
	
	1. Click the package in the list of packages.
	
	2. Click Workstations.
	
	3. Click Access, and then set the desired access permissions.
	
	REFERENCES
	==========
	
	For additional information about file and directory permissions, see the
	Microsoft Systems Management Server Resource Guide Version 1.2, Chapter 1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbinfo
	
	=============================================================================
	
