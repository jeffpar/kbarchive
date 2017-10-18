---
layout: page
title: "Q227032: SMS: Clients Are Using Wrong Instruction After Site Rebuild"
permalink: kb/227/Q227032/
---

## Q227032: SMS: Clients Are Using Wrong Instruction After Site Rebuild

	Article: Q227032
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbsms200bug kbAdvertisement kbAppMan kbCAP kbCollections kbPackage kb
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When advertising a program to a collection you may find other clients in your
	site executing the program even though they are not in the targeted collection.
	Not only will the clients execute the program but they will also create a status
	message stating the success or failure of the program that was executed. For
	example, if you advertise to a collection that contains fifty client machines
	and you receive over fifty status messages stating that the program was run, you
	can safely assume that clients that were not in the collection ran the program.
	
	MORE INFORMATION
	================
	
	The most plausible reason for this problem to occur is having clients that were
	installed under a previous site with the same site code. The Offer Data Provider
	(ODP) on the client looks for the existence of the following lookup files on the
	local machine during its polling cycle:
	
	- The lookup file for the System Resource type:
	  <WINDIR>\MS\SMS\CLICOMP\SWDIST32\CAP\<SiteCode>Systm.lkp
	
	- The lookup file for the User Resource type:
	  <WINDIR>\MS\SMS\CLICOMP\SWDIST32\CAP\<USERNAME>\<SiteCode>User.lkp
	
	- The lookup file for the User Group Resource type:
	  <WINDIR>\MS\SMS\CLICOMP\SWDIST32\CAP\<USERNAME>\<SiteCode>Usrgp.lkp
	
	If the ODP finds a lookup file on the local machine it will use it instead of the
	lookup file on the CAP. The lookup file contains information about which
	instruction file the client is to use. If the client was installed under a
	different site it would most likely use a different instruction file than the
	one it should be using under the new site. To verify if you have clients using
	the wrong instruction complete the following steps:
	
	- Open up the local lookup files located on the client in Notepad and note
	  which instruction files are being referenced.
	
	- Open up the lookup files on the CAP using Notepad to search for the same
	  resource (System, User or User Group) and reference which instruction file is
	  being used.
	
	- If the lookup files on the CAP list different instruction files for the same
	  resource than the lookup files on the client, the client is using an out of
	  date lookup file.
	
	To resolve this problem either delete all of the lookup files on the client or
	uninstall and then reinstall the Systems Management Server components on that
	particular machine.
	
	A package can be created that will search for and delete all files that have an
	.lkp extension in the <WINDIR>\MS\SMS\CLICOMP\SWDIST32 directory on the
	client. Advertise this package/program to all clients in your site. The next
	time you advertise a program to these clients a new local lookup file will be
	created that will point these clients to the correct instruction file.
	
	REFERENCES
	==========
	
	Please refer to the Systems Management Server Administrators Guide and the
	BackOffice Resource Kit version 4.5 for more information about the software
	distribution process.
	
	Additional query words: prodsms advertisements
	
	======================================================================
	Keywords          : kbClient kbsms200 kbsms200bug kbAdvertisement kbAppMan kbCAP kbCollections kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
