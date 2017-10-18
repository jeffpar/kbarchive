---
layout: page
title: "Q120746: Default Disk Letters Incorrectly Listed During Installation"
permalink: kb/120/Q120746/
---

## Q120746: Default Disk Letters Incorrectly Listed During Installation

	Article: Q120746
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbsetup kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Workstation or Server version 3.5 on a computer
	where Disk Administrator has been used to assign non-default drive letters to
	externally connected disks, Windows NT installation offers only the default
	drive letters as options on which to install the system, NOT the assigned
	letters. The volume labels are listed correctly.
	
	CAUSE
	=====
	
	During initial installation, the complete file system is not yet installed, so
	assigned disk letters are unavailable.
	
	RESOLUTION
	==========
	
	Use volume labels (which the installation software lists correctly) instead of
	disk letters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
