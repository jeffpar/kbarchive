---
layout: page
title: "Q87201: PROFS: Changes Made to Database During Installation"
permalink: /kb/087/Q87201/
---

## Q87201: PROFS: Changes Made to Database During Installation

	Article: Q87201
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the PROFS gateway or Gateway Access components are installed, several
	changes are made to the mail system database.
	
	When installing the Gateway component, the Install program creates a VMGATE
	directory at the same level as the other mail system subdirectories (such as
	ATT, FOLDERS, MBG, and so forth). Within VMGATE, the Install program creates a
	subdirectory call ERR. The VMGATE directory is used to store all temporary files
	created during the exchange of mail with the host. The ERR directory is used to
	store all mail files that cannot be delivered or returned.
	
	The gateway executable program (HOSTDISP.EXE or VMGATE.EXE) is created by the
	Install program in the mail executables directory. A help file for the gateway
	program is copied to the HLP directory.
	
	When installing the Gateway Access component, three template files are copied to
	the TPL subdirectory of the mail system database, and a help file (PROFS.HLP) is
	copied to the HLP subdirectory.
	
	
	Additional query words: 3.00 pcmail profslan install
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	
