---
layout: page
title: "Q136380: PROFS: Propagating Existing PROFS Nodes to a New Postoffice"
permalink: kb/136/Q136380/
---

## Q136380: PROFS: Propagating Existing PROFS Nodes to a New Postoffice

	Article: Q136380
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Gateway to PROFS access component is installed on a new Microsoft Mail
	for PC Networks postoffice in a PROFS environment, you can create PROFS nodes
	and associated lists by using IMPORT.EXE to extract an address list from any
	PROFS installation and running the same application against the new installation
	with the -c option added to the command line.
	
	NOTE: This same technique can be applied to any supported Mail for PC Networks
	gateway that uses DGNs and nodes.
	
	MORE INFORMATION
	================
	
	Run the following command against any existing PROFS gateway installation:
	
	  import admin -ppassword -d<driveletter> -x -gprofs
	  -f<drive>:\<path>\profs.lst
	
	where:
	
	  ADMIN is the administrator account for the source postoffice.
	  PASSWORD is the password for that account.
	  driveletter points to the mail database of the source postoffice.
	  GPROFS declares the gateway type.
	  PROFS.LST can be any 8.3 file name.
	
	Now run IMPORT.EXE against the target installation:
	
	  import admin -ppassword -d<driveletter> -f<drive>:\<path>\profs.lst -c
	
	where:
	
	  driveletter refers to the drive letter mapped to the mail database
	  of the target postoffice.
	  -c to create the node definitions and install the associated address
	  list.
	
	To include the newly installed PROFS list into the Global Address List (GAL), run
	the following command:
	
	  REBUILD -d<driveletter> -f
	
	For more information on IMPORT.EXE options, please see pages 319-321 of the
	version 3.2 Microsoft Mail for PC Networks "Administrator's Guide" and pages
	276-278 of the version 3.0 Microsoft Mail for PC Networks "Administrator's
	Guide."
	
	For more information on REBUILD.EXE options, please see pages 318 of the version
	3.2 Microsoft Mail for PC Networks "Administrator's Guide" and pages 275-276 of
	the version 3.0 Microsoft Mail for PC Networks "Administrator's Guide."
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3
	Version           : :3.2
	
	=============================================================================
	
