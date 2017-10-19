---
layout: page
title: "Q199229: SMS: Extending an Existing Architecture Using IDMIFs"
permalink: /kb/199/Q199229/
---

## Q199229: SMS: Extending an Existing Architecture Using IDMIFs

	Article: Q199229
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms120 kbInventory
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can add custom groups to an existing architecture
	within the Systems Management Server database using IDMIFs, as opposed to
	NOIDMIFs.
	
	NOIDMIFs are Management Information Format files (MIFs) that do not contain
	identification or architecture information. These files are placed on the client
	and are appended to the machine inventory when it is reported up through normal
	inventory processing.
	
	IDMIFs, on the other hand, contain identification and architecture information.
	These files are placed directly in the Isvmif.box on a Systems Management Server
	logon server. Therefore, IDMIFs can be generated without ever interacting with
	client machines.
	
	One scenario in which you might choose to use an IDMIF rather than a NOIDMIF to
	extend inventory is when you want to add information from another data source,
	such as a human resources database, to an existing Systems Management Server
	architecture such as the "personal computer" architecture.
	
	MORE INFORMATION
	================
	
	IDMIFs contain identification information and architecture information that
	Systems Management Server uses to determine which architecture and which record
	within that architecture to work with. The sample below uses an IDMIF to add a
	new group to the personal computer architecture. (The personal computer
	architecture is the standard architecture for all client computer inventory in
	Systems Management Server.)
	
	Steps to Create the IDMIF
	-------------------------
	
	1. Query the vIdentification view in the Systems Management Server database to
	  obtain all the identification information to be put into the custom IDMIF. In
	  this scenario, Systems Management Server uses the identification information
	  to determine which computer the new group data will be added to.
	
	2. Place the architecture group in the IDMIF to identify which architecture you
	  are updating, in this case personal computer.
	
	3. Finally, add the desired custom groups and the corresponding attributes for
	  those groups to the file.
	
	4. Now that you have a completed IDMIF, place this MIF in the Isvmif.box on any
	  Systems Management Server logon server to process the information and add it
	  to the Systems Management Server database. Once new groups have been added to
	  the database, restart the SMS Administrator console to view new group classes
	  in the personal computer properties window for the clients that have this
	  group information.
	
	NOTE: In this scenario, one IDMIF is generated for every computer to which you
	want to add a group containing custom information. Once a group has been added
	to the database, any MIFs that attempt to update this group must conform to the
	definition that was used to create the group in the database. To remove the
	group from the database, use the Systems Management Server Database Manager
	utility. (See Help for instructions.)
	
	WARNING: When you delete a group class, all the data associated with that group
	class is also deleted.
	
	For more information on the MIF format used below, see chapter 4 of the Microsoft
	Systems Management Server Resource Guide, which is part of the BackOffice
	Resource Kit.
	
	Sample Code
	-----------
	
	  Start Component
	     Name = "Workstation"
	     Start Group
	        Name = "Identification"
	        ID = 1
	        Class = "MICROSOFT|IDENTIFICATION|1.0"
	        Key = 6,2,1
	        Start Attribute
	           Name = "Name"
	           ID = 1
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(64)
	           Value = "BILLYBOB"
	        End Attribute
	        Start Attribute
	           Name = "SMSID"
	           ID = 2
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(8)
	           Value = "C1200007"
	        End Attribute
	        Start Attribute
	           Name = "SMSLocation"
	           ID = 3
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(64)
	           Value = "C12|NCSMS12DOM|BILLYBOB"
	        End Attribute
	        Start Attribute
	           Name = "Site"
	           ID = 4
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(3)
	           Value = "C12"
	        End Attribute
	        Start Attribute
	           Name = "Domain"
	           ID = 5
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(16)
	           Value = "NCSMS12DOM"
	        End Attribute
	        Start Attribute
	           Name = "NetCardID"
	           ID = 6
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(18)
	           Value = "00:AA:00:60:D8:56"
	        End Attribute
	        Start Attribute
	           Name = "SystemRole"
	           ID = 7
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(12)
	           Value = "Workstation"
	        End Attribute
	        Start Attribute
	           Name = "SystemType"
	           ID = 8
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(32)
	           Value = "X86-based PC"
	        End Attribute
	        Start Attribute
	           Name = "LogOn Name"
	           ID = 9
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(48)
	           Value = "smsadmin"
	        End Attribute
	     End Group
	     Start Group
	        Name = "Architecture"
	        ID = 2
	        Class = "MICROSOFT|ARCHITECTURE|1.0"
	        Start Attribute
	           Name = "ArchitectureName"
	           ID = 1
	           Access = READ-ONLY
	           Storage = SPECIFIC
	           Type = String(18)
	           Value = "Personal Computer"
	        End Attribute
	     End Group
	     Start Group
	        Name = "Test Group"
	        ID = 3
	        Class = "DAVSTEW|TEST_GROUP|1.0"
	        Start Attribute
	           Name = "Stuff from other datasource"
	           ID = 1
	           Access = READ-ONLY
	           Storage = COMMON
	           Type = String(40)
	           Value = "This is the stuff"
	        End Attribute
	        Start Attribute
	           Name = "More Stuff"
	           ID = 2
	           Access = READ-ONLY
	           Storage = COMMON
	           Type = String(40)
	           Value = "This is more stuff"
	        End Attribute
	     End Group
	  End Component
	
	REFERENCES
	==========
	
	Microsoft Systems Management Server Resource Guide
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms120 kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	
