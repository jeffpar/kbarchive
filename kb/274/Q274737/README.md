---
layout: page
title: "Q274737: XADM: Verifying If ForestPrep and DomainPrep Have Completed"
permalink: /kb/274/Q274737/
---

## Q274737: XADM: Verifying If ForestPrep and DomainPrep Have Completed

	Article: Q274737
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to verify that changes that occur when you run the
	commands setup /forestprep and setup /domainprep have been replicated throughout
	the forest or domain.
	
	MORE INFORMATION
	================
	
	The following Microsoft Knowledge Base article outlines the procedure for
	upgrading from Exchange 2000 Release Candidate 2 (RC2) to Release to
	Manufacturing (RTM) code:
	
	  Q272082 XADM: How to Upgrade from Exchange 2000 RC2 to RTM
	
	After the instructions that describe how to run setup /forestprep and setup
	/domainprep, Knowledge Base article Q272082 contains the following information:
	
	  "Wait for the new schema changes to be replicated throughout your forest.
	  This can take an extended period of time depending on the complexity of your
	  Active Directory deployment. Because of the schema updates made during
	  ForestPrep, your global catalogs will also be rebuilt at this time."
	
	  -and-
	
	  "Wait for the DomainPrep changes to be replicated throughout your domain."
	
	ForestPrep
	----------
	
	WARNING: If you use the ADSI Edit snap-in, the LDP utility, or any other LDAP
	version 3 client, and you incorrectly modify the attributes of Active Directory
	objects, you can cause serious problems. These problems may require you to
	reinstall Microsoft Windows 2000 Server, Microsoft Exchange 2000 Server, or
	both. Microsoft cannot guarantee that problems that occur if you incorrectly
	modify Active Directory object attributes can be solved. Modify these attributes
	at your own risk.
	
	To verify that the changes from setup /forestprep have been replicated throughout
	the forest, use either of the following methods:
	
	- Look for event ID 1575 in the directory event log on each domain controller.
	
	  -or-
	
	- Follow these steps:
	
	  1. Start the ADSI Edit snap-in that is located in <root>/Program
	     Files/Support Tools.
	
	     NOTE: Before you start the ADSI Edit snap-in, you must first manually
	     register Adsiedit.dll after you run Setup.exe from the Support\Tools
	     folder on the Windows 2000 CD-ROM.
	
	  2. Navigate to Schema and look for the following entry:
	     cn=ms-Exch-Schema-Version-Pt.
	
	  3. In the "Select a property to view" box, click rangeUpper and type the
	     value "4397" (without the quotation marks). Any value that is less than
	     4397 represents an earlier version of Exchange 2000.
	
	DomainPrep
	----------
	
	To verify that setup /domainprep has completed, run the Policytest utility on the
	domain controller. This utility is found in the Support/Utils/<platform>
	folder on the Exchange 2000 Server Enterprise Edition CD-ROM. When you run this
	utility from a command prompt, all domain controllers report with the same
	security settings.
	
	Additional query words: orgprep
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange2000Search kbExchange2000Serv
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
