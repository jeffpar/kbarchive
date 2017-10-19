---
layout: page
title: "Q135732: PC NTMMTA: Doc Err: No WINNT Directory Created at Setup"
permalink: /kb/135/Q135732/
---

## Q135732: PC NTMMTA: Doc Err: No WINNT Directory Created at Setup

	Article: Q135732
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following text has been documented incorrectly in the Microsoft Mail
	Multitasking MTA for Windows NT Server "Administrator's Guide":
	
	Item 1
	------
	
	In Chapter 1 on page 4, the following text is displayed:
	
	  The executable files will be placed in subdirectories called EXTERNAL.NT,
	  DIRSYNC.NT, and WINNT in the directory you specify. By default, they are
	  installed in C:\MAILEXE\EXTERNAL.NT, C:\MAILEXE\DIRSYNC.NT, and
	  C:\MAILEXE\WINNT.
	
	This should read:
	
	  The executable files will be placed in subdirectories named EXTERNAL.NT and
	  DIRSYNC.NT in the directory you specify. By default, they are installed in
	  C:\MAILEXE\EXTERNAL.NT and C:\MAILEXE\DIRSYNC.NT.
	
	Item 2
	------
	
	The following text appears in the section "Copying the Files to the Windows NT
	Directory":
	
	  After Setup is complete, you need to copy the files into the Windows NT
	  directory structure. Assuming Windows NT is in the C:\WINNT35 directory, do
	  the following:
	
	  To copy the files into the Windows NT directory
	
	  Type xcopy c:\mailexe\winnt c:\winnt35 /s
	
	The information regarding the WINNT directory should be removed or a note added
	that states that this directory is not created during the NT MMTA installation.
	
	STATUS
	======
	
	Microsoft has confirmed these to be documentation errors in version 3.5 of
	Microsoft Mail Multitasking MTA for Windows NT "Administrator's Guide." These
	errors were corrected in a reprint of the manuals in July 1995.
	
	Additional query words: 3.50 service setup nt mmta
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
