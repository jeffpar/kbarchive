---
layout: page
title: "Q165819: Error 3 -- The Specified Path Could Not Be Found"
permalink: kb/165/Q165819/
---

## Q165819: Error 3 -- The Specified Path Could Not Be Found

	Article: Q165819
	Product(s): Microsoft Windows NT
	Version(s): MSDOS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbother
	Last Modified: 13-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You are running Microsoft Network Client for MS-DOS on a computer running MS-DOS
	from a diskless workstation (for example, you start the computer with a disk in
	drive A), and you receive the following error message during startup:
	
	  Error 3 -- The specified path could not be found. An error occurred accessing
	  the Security-Settings file.
	
	RESOLUTION
	==========
	
	Check the System.ini file on the disk for entries that reference drive C, in
	particular lanroot= in the [network] section and devdir= in the [network
	drivers] section. Change these references to reflect drive A instead of drive C.
	Save the file and restart the computer with the disk in the drive.
	
	Additional query words: err msg errmsg
	======================================================================
	Keywords          : kbnetwork kbother 
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : MSDOS:3.0
	Issue type        : kbinfo
	
	=============================================================================
	
