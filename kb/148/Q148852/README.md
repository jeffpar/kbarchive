---
layout: page
title: "Q148852: PC NTMMTA: Dynamic Connections Fail with Dynadmin and Novell"
permalink: kb/148/Q148852/
---

## Q148852: PC NTMMTA: Dynamic Connections Fail with Dynadmin and Novell

	Article: Q148852
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Multitasking MTA for Windows NT (NT MMTA) as a service, and you
	connect to Novell NetWare version 3.x and 4.x postoffices, the Dynadmin table
	cannot be used to specify dynamic connections. The DrivesUNC options must be
	specified in the External.ini file for the Novell postoffices.
	
	NOTE: The Dynadmin table may be used successfully for dynamically connecting to
	Microsoft-compatible postoffices or when you run the NT MMTA as an application
	from the command prompt.
	
	RESOLUTION
	==========
	
	Use the following password statements in the External.ini file for each Novell
	postoffice that the NT MMTA will be dynamically connecting to when it is run as
	a service,
	
	  DrivesUNC=\\server\volume\directory username
	
	In addition, you can remove any DrivesDynamic lines from an External.ini file
	instance that is going to be used to run the NT MMTA as a service, or rename the
	Server.glb file.
	
	MORE INFORMATION
	================
	
	Use the Dynadmin table to connect to both Microsoft-compatible and Novell
	postoffices when you run the NT MMTA as an application from the command line
	(refer to Microsoft Mail Multitasking MTA for Windows NT version 3.5
	"Administrator's Guide", Page 215).
	
	If you run the NT MMTA as a service, and you have declared Novell postoffices in
	the Dynadmin table, you will see one of the following errors on the screen and
	in the session log:
	
	  Dynamically connecting to ...
	  Network name not found, or Unknown error code 901:2
	  Reading master file. Could not connect to drive.
	
	Additional query words: 3.50 windows nt
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
