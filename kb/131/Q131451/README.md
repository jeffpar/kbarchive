---
layout: page
title: "Q131451: How to Upgrade SourceSafe Manually"
permalink: kb/131/Q131451/
---

## Q131451: How to Upgrade SourceSafe Manually

	Article: Q131451
	Product(s): Microsoft SourceSafe
	Version(s): 3.04 3.10 | 3.04 3.10 | 3.04 3.
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the SourceSafe upgrade installation fails it may be necessary for the user to
	manually convert the database.
	
	MORE INFORMATION
	================
	
	The following steps are needed to complete the upgrade:
	
	NOTE: For the following examples to work, SourceSafe must be in the \SS directory
	and the data in the \SS\DATA directory. If the user is upgrading to a version
	prior to version 3.1, make sure that all of the SourceSafe serial numbers are
	available prior to upgrading.
	
	1. Run the DDCONV.EXE utility located in the \SS\ADMIN directory with the
	  following syntax:
	
	  DDCONV -s \SS\DATA
	
	** If installing version 3.04 or greater ignore step 2 **
	
	1. Run the following command for all of the serial number in the system:
	
	  SERIALIZ -s<serial number> \SS\DATA
	
	2. If upgrading from version 2.2:
	
	  To upgrade the SYSTEM.INI to SRCSAFE.INI, run this command:
	
	  UPDINI -m\SS\DATA
	
	  To upgrade each user's SS.INI file, run the following command for each user in
	  the system:
	
	  UPDINI \SS\USERS\<user name>\SS.INI
	
	Additional query words: ss3 vbwin SS SRCSAFE
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe304NT kbSSafe310NT
	Version           : 3.04 3.10 | 3.04 3.10 | 3.04 3.
	
	=============================================================================
	
