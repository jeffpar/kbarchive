---
layout: page
title: "Q151776: Err Msg: Unable to Find INF Source File during CPS Install"
permalink: kb/151/Q151776/
---

## Q151776: Err Msg: Unable to Find INF Source File during CPS Install

	Article: Q151776
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You try to use Uplodprf.exe to preinstall and configure Windows NT. After the
	upload to the distribution server completes, you restart, the process aborts,
	and the following error appears:
	
	  "Unable to find the inf source file, check the /i switch on the command line"
	
	MORE INFORMATION
	================
	
	The Windows NT Computer Profile Setup (CPS) utilities "make a profile of a fully
	installed Windows NT or Windows NT Advanced Server system, then load the profile
	onto identical target computers streamlining subsequent installations," page 103
	of the Windows NT 3.51 Resource Guide, volume 1.
	
	The process to create the CPS involves first creating a master system, then
	uploading the master system, copying the master system to target computers, and
	testing the systems. The steps to follow to upload the master system to the
	distribution server are detailed on page 103 of the Windows NT 3.51 Resource
	Guide. They include:
	
	1. On the master system computer, create a directory to hold the CPS utility
	  files, and then change the default to that directory.
	
	2. With the Windows NT resource kit CD-ROM in the CD-ROM drive of the master
	  system computer, copy the \I386\CPS directory from the CD-ROM to the
	  directory you created in step 1. For example, if your CD-ROM drive is D:,
	
	  type: "xcopy d:\i386\cps" (without the quotation marks)
	
	NOTE: The files on the CD-ROM are read-only.
	
	3. If you need to edit the PROFILE.INI, edit the copy you made in step 2 using a
	  text editor such as Windows Notepad.
	
	4. On the distribution server, create the directory that is to receive the
	  master system files, and share this directory.
	
	5. On the master system computer, type the following:
	
	  "uplodprf -s:<master> -i:profile.ini [\dir1] [\dir2]" (without the
	  quotation marks)
	
	RESOLUTION
	==========
	
	The CPS support file named ~profile.inf may be missing from CPS directory where
	you ran uplodprf.exe. Copy ~profile.inf from \i386\cps (or i386\setup\cps on
	3.51 Resource Kit CD-ROM) to the directory and run uplodprf.exe again.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
