---
layout: page
title: "Q124044: PC Adm: Replicating Postoffice Address List Groups Between POs"
permalink: /kb/124/Q124044/
---

## Q124044: PC Adm: Replicating Postoffice Address List Groups Between POs

	Article: Q124044
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how the Microsoft Mail Group Import program, GIMPORT.EXE,
	can be used to automate the process of creating Mail Postoffice Address List
	Groups. These groups can contain local postoffice users, external postoffice
	users, and certain gateway users.
	
	GIMPORT.EXE is a utility that is available as part of the "Database Maintenance
	Utilities" document. This document describes operational details for utilities
	used to repair and maintain the database for Microsoft Mail for PC Networks. The
	procedures described apply to versions 2.1 and later of Microsoft Mail except
	where noted.
	
	To obtain the document containing the Database Maintenance Utilities, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	MORE INFORMATION
	================
	
	GIMPORT.EXE can create groups based on information in an input text file. The
	format of this input file is very similar to that used with the IMPORT.EXE
	program that ships with Microsoft Mail. For more information on the format of
	this file, please refer to the documentation on GIMPORT.EXE available with the
	Database Maintenance Utilities. The GIMPORT.EXE input file can be created
	manually or can be automatically created by the GIMPORT.EXE program by
	extracting the group information from a Microsoft Mail postoffice.
	
	The following steps show how groups created by Mail Administrator can be
	replicated into other Mail postoffices. This is especially useful when trying to
	create groups spanning multiple postoffices. The example used in the steps shows
	how to create groups on postoffice A and replicate them to postoffice B.
	(Postoffice A is on drive M, and postoffice B is on drive N.)
	
	NOTE: Before proceeding, it is recommended that you read the information on
	GIMPORT.EXE available in Q99419.
	
	1. Create the groups for postoffice A you wish to replicate to postoffice B.
	  From Mail Administrator, select Local-Admin, Group, Create. Select the users
	  you wish to add to the group and enter the group name and group address.
	
	  NOTE: To add external postoffice or gateway users to a group, you need to
	  first add these users to the postoffice Address List by selecting Address,
	  Create.
	
	2. Use GIMPORT.EXE to extract the group information. Type the following command
	  at the MS-DOS prompt
	
	  " gimport -dm <admin> -p<password> -f<groups.ext> -x
	  -i<grpusers.dat> " (without the quotation marks)
	
	  where:
	
	   - <admin> is a Microsoft Mail mailbox with administrative privileges
	     on postoffice A.
	
	   - <password> is the password for the <admin> account.
	
	   - <groups.ext> is the name of a text file that will be created by the
	     GIMPORT.EXE program containing the group information.
	
	   - <grpusers.dat> is the name of a file that will contain only the
	     names of the members of all the groups extracted. This file is for use
	     with the IMPORT.EXE program.
	
	  In case you wish to extract information for only certain groups, replace the
	  -X in the above command with -X<GRPNAMES.INP> where
	  <GRPNAMES.INP> is a text file that contains the full (friendly) names
	  of the groups you wish to extract. You must create this file yourself and
	  place each name you want included on a separate line.
	
	3. To replicate the users in the groups extracted from postoffice A to the
	  Postoffice Address List on postoffice B, type the following command at an
	  MS-DOS prompt
	
	  " import -dn <admin> -p<password> -f<grpusers.dat> -a "
	  (without the quotation marks)
	
	  where:
	   - <admin> is a Microsoft Mail mailbox with administrative privileges
	     on postoffice B.
	
	   - <password> is the password for the <admin> account.
	
	   - <grpusers.dat> is the file created in Step 2.
	
	4. Replicate the groups into postoffice B by typing the following command at an
	  MS-DOS prompt.
	
	  " gimport -dn <admin> -p<password> -f<groups.ext> "
	  (without the quotation marks)
	
	The groups created on postoffice A should now be available in the Postoffice
	Address List on postoffice B. The groups will not be visible in the Global
	Address List until after the REBUILD.EXE program is run. If you have automatic
	Directory Synchronization configured, REBUILD.EXE will be automatically run the
	next time your directories are synchronized.
	
	Additional query words: 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	
