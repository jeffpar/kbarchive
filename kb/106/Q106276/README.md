---
layout: page
title: "Q106276: WFWG Err Msg: The 32-Bit File System Is Incompatible...SUBST"
permalink: kb/106/Q106276/
---

## Q106276: WFWG Err Msg: The 32-Bit File System Is Incompatible...SUBST

	Article: Q106276
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enable 32-bit file access and you use the MS-DOS substitute command
	(SUBST), one of the following symptoms occurs when you start your system:
	
	- Your system stops responding (hangs) at a black screen after displaying the
	  Windows for Workgroups logo.
	
	  -or-
	
	- You receive the following error message:
	
	  The 32-bit file system is incompatible with the SUBST utility. To use 32-bit
	  file access, do not use the SUBST utility before starting Windows for
	  Workgroups.
	
	CAUSE
	=====
	
	The SUBST utility from MS-DOS allows you to substitute drive letters for
	directory names. This method of redirection is incompatible with 32-bit file
	access. When IFSMGR.386 detects SUBST, it prevents 32-bit file access from
	loading to protect against data loss.
	
	IMPORTANT: It is important to note that 32-bit file access is disabled for all
	drives, not just the substituted drive.
	
	RESOLUTION
	==========
	
	This error message is by design.
	
	If you use 32-bit file access, you cannot use the SUBST command. To use the SUBST
	command, you must first disable 32-bit file access.
	
	Note that the following message is displayed if SUBST is used in an MS-DOS
	virtual machine (VM) with 32-bit file access enabled:
	
	  Cannot SUBST a network drive
	
	This error message appears regardless of whether you are using a stand- alone
	machine or one on a network.
	
	Additional query words: 3.11 vfat 32-bit blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
