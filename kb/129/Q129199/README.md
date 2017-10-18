---
layout: page
title: "Q129199: File Sharing Problem with Open Lotus Approach File"
permalink: kb/129/Q129199/
---

## Q129199: File Sharing Problem with Open Lotus Approach File

	Article: Q129199
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are running Lotus Approach under Windows NT, and Approach is accessing a
	database file on your computer, the following error message appears on a Windows
	for Workgroups 3.11 client when it attempts to access the database file over the
	network:
	
	  Cannot open the database "<DBF filename>.APR" because it is open
	  exclusively.
	
	CAUSE
	=====
	
	The proper file sharing options are not specified for dBASE files that are being
	used in Lotus Approach.
	
	RESOLUTION
	==========
	
	To correct this problem on the Windows NT computer:
	
	1. Run Lotus Approach and select Open from the File menu.
	
	2. For List File Of Type:, select either dBASE III+ (*.DBF) or dBASE IV (*.DBF)
	  to list the *.DBF files that will be accessed by multiple users.
	
	3. Choose the Connect button.
	
	4. Select all three check boxes, including Local Databases Are Shared.
	
	5. Choose OK.
	
	Chapter 18 of the Lotus Approach Release 3.0 User's Guide discusses the file
	sharing options available in Lotus Approach.
	
	Additional query words: prodnt locking exclusive
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5
	
	=============================================================================
	
