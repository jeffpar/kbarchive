---
layout: page
title: "Q121272: Can No Longer Access .CAL Filename That Includes a Space"
permalink: kb/121/Q121272/
---

## Q121272: Can No Longer Access .CAL Filename That Includes a Space

	Article: Q121272
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You create a .CAL file that includes a space in the filename (for example, JOHN
	DOE.CAL), and later Schedule+ does not allow access to this file. The following
	error message is displayed
	
	  <JOHN DOE.CAL>
	  This filename is invalid.
	
	where <JOHN DOE.CAL> is the filename containing a space.
	
	CAUSE
	=====
	
	Schedule+ allows the creation of a .CAL file with a space in the filename if you
	are working offline and if you have not yet set up Mail. (Mail does not allow a
	Mailbox entry that includes a space to be established.) When you start Schedule+
	for the first time, it prompts you for a Mailbox entry. It is possible to
	include a space in this entry. Schedule+ continues to work; however, if Mail is
	later installed, Schedule+ cannot access the .CAL file.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Rename the file at the MS-DOS command prompt. For example:
	
	  REN JOHN?DOE.CAL JOHNDOE.CAL
	
	  -or-
	
	- If the .CAL file contains no data, delete the file. For example:
	
	  DEL JOHN?DOE.CAL
	
	If information is needed from this file, export the file and re-import the file
	under the new mailbox name, which does not contain a space.
	
	If Mail has been started and Schedule+ no longer allows access to the .CAL file,
	you must rename the MSMAIL.INI and MSMAIL.MMF files, restart Schedule+, and
	export the .CAL file.
	
	Additional query words: schedule plus sched
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
