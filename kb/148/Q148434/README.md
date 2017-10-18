---
layout: page
title: "Q148434: File and Print Services Service Not Started in File Manager"
permalink: kb/148/Q148434/
---

## Q148434: File and Print Services Service Not Started in File Manager

	Article: Q148434
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A warning message stating "The File and Print Services for NetWare service is
	not started on \\<computer name>" appears after you:
	
	1. Install the administrative tools for File and Print Services for NetWare
	  (FPNW) on a Windows NT Server or Workstation,
	
	2. Run File Manager and call up the FPNW menu,
	
	3. Choose the menu option Volumes and Volume Properties,
	
	and
	
	4. Click any of the options in that menu.
	
	CAUSE
	=====
	
	The warning message appears because the drive that the user is attached to and
	that the user is trying to manage does not contain any NetWare volumes.
	
	RESOLUTION
	==========
	
	This problem can be resolved through the following procedure:
	
	1. Connect to a Windows NT Server that is running the full installation of FPNW
	  and that has either a SYSVOL subdirectory or the FPNW NetWare volumes.
	
	2. Create a new FPNW volume by clicking anywhere in the directory tree,
	  selecting FPNW from the menu bar, and selecting Create Volume.
	
	NOTE: When you select FPNW from the menu bar, you can also use the Manage Volumes
	option; however, if you select Volume Properties or Delete Volume, you will get
	an error message stating: "The directory is not shared as a volume." This occurs
	because the selected subdirectory is not an FPNW volume. Clicking on an FPNW
	volume, such as SYSVOL, will allow the user to use these two menu commands.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
