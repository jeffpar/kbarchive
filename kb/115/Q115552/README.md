---
layout: page
title: "Q115552: MHS: Running the MHS Gateway from Within MS-DOS"
permalink: kb/115/Q115552/
---

## Q115552: MHS: Running the MHS Gateway from Within MS-DOS

	Article: Q115552
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although version 3.0 of Microsoft Mail Gateway to MHS is normally spawned from
	within the MHS Host, the gateway can be run from a command line as long as the
	parameters used are the same as those from MHS.
	
	The MHS gateway has two active components:
	
	  Component     Description
	  -------------------------------------------------------------------
	
	  INPOST.EXE    Gets messages from the Microsoft Mail database and puts
	                them into MHS
	
	  OUTPOST.EXE   Gets messages from MHS and puts them into Microsoft Mail
	
	MORE INFORMATION
	================
	
	When a gateway is defined in MHS, a subdirectory is created in the
	MHS\MAIL\GATES directory. This subdirectory has the same name as the gateway and
	contains the following five subdirectories:
	
	  Directory   Description
	  -------------------------------------------------------------------
	
	  IN          Where INPOST.EXE places messages going from Microsoft Mail
	              to MHS
	
	  IPARCEL     Where corresponding incoming attachments are placed
	
	  OUT         Where OUTPOST.EXE places messages going from MHS to
	              Microsoft Mail
	
	  OPARCEL     Where corresponding outgoing attachments are placed
	
	  PUBLIC      Where the INPOST.EXE and OUTPOST.EXE files are kept
	
	The directory structure looks like this:
	
	  MHS - MAIL - GATES - MSMAIL - IN
	
	                              - IPARCEL
	                              - OUT
	                              - OPARCEL
	                              - PUBLIC  - INPOST.EXE
	                                        - OUTPOST.EXE
	
	Use the following command to run INPOST.EXE or OUTPOST.EXE from the directory
	F:\MHS\MAIL\GATES\MSMAIL\PUBLIC
	
	  INPOST -DM F:\MHS\MAIL\GATES\MSMAIL\ F:\MHS\SW\
	  OUTPOST -DM F:\MHS\MAIL\GATES\MSMAIL\ F:\MHS\SW\
	
	where:
	
	  -DM is the command-line switch described on pages 19-21 in the "MHS Gateway
	  Administrator's Guide" (pp. 19 - 21).
	
	  F:\MHS\MAIL\GATES\MSMAIL\ is a full path to the gateway directories.
	
	  F:\MHS\SW\ is a path to the MHS directory so INPOST or OUTPOST knows where to
	  create its temporary files. This location is normally set with the MV
	  variable.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
