---
layout: page
title: "Q199135: SMS: Using DeletePDF to Delete Imported PDFs"
permalink: /kb/199/Q199135/
---

## Q199135: SMS: Using DeletePDF to Delete Imported PDFs

	Article: Q199135
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsUtil kbSoftwareDist
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0, administrators have the ability to use
	Package Definition Files (PDF) to ease the setup of packages for software
	distribution. The ability to add and/or modify PDFs can be found by
	right-clicking the packages node under Site Database in the SMS Administrator.
	Once PDFs have been imported, they can not be deleted from within the SMS
	Administrator. Instead, you can use the DeletePDF utility located in the
	\Support directory of the SMS 2.0 CD-ROM.
	
	MORE INFORMATION
	================
	
	DeletePDF requires either Windows 9x or Windows NT 4.0 with the SMS client
	software installed. Clients do not need to be a member of the site you are
	working against.
	
	NOTE: You may not want to install DeletePDF on the site server. DeletePDF
	installs system files and may require a reboot to complete installation.
	
	Once installed, you can launch DeletePDF by clicking Start, point to Programs,
	then select DeletePDF. You will be prompted for the following information:
	
	  SMS Site Server: (Name of computer with SMS Provider installed.)
	  Sitecode:   (3 character code that identifies the SMS site.)
	
	  Credentials
	  ===========
	
	  User:  (That is, DomainA\UserA) 
	
	NOTE: This user id needs delete permissions on packages.
	
	  Password: (The supplied users password).
	
	Additional query words: prodsms softdist32
	
	======================================================================
	Keywords          : kbsms200 kbsmsUtil kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
