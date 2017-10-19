---
layout: page
title: "Q108840: PC Adm: Err Msg: Notice 37 Disk Directory Full or Error"
permalink: /kb/108/Q108840/
---

## Q108840: PC Adm: Err Msg: Notice 37 Disk Directory Full or Error

	Article: Q108840
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With versions 2.1x, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks, you
	may encounter the following error when logging into the Mail Administrator
	(ADMIN.EXE) program:
	
	  Notice 37
	  Disk directory full or error opening file
	
	NOTE: This error will also occur if the operating system or network operating
	system has the files in question locked open.
	
	CAUSE
	=====
	
	This error may occur if any of the following sets of files are inaccessible
	(locked open, corrupted, improper rights, etc.):
	
	  ADMIN.NME and ADMINSHD.NME (in the NME directory)
	  ADMIN.GRP and ADMINSHD.GRP (in the GRP directory)
	
	RESOLUTION
	==========
	
	NOTE: Before re-creating these files, you should check the operating system or
	network operating system to ensure that the files are not locked open.
	
	You have two options:
	
	Option 1
	--------
	
	NOTE: All users must be logged off of the postoffice before any of the files are
	changed.
	
	Restore the following files from a backup copy:
	
	  ADMIN.NME
	  ADMINSHD.NME
	  ADMIN.GRP
	  ADMINSHD.GRP
	  GROUP.GLB
	
	Restoring older versions of files can produce inconsistencies in the Mail system
	database because you will lose any changes made to these files after the last
	backup. This can cause problems such as making it impossible to send mail to
	users created after the last backup. To prevent such errors, restore the
	following files also:
	
	  ACCESS.GLB
	  ACCESS2.GLB
	  ACCESS3.GLB
	
	If you restore these files, users created after the last backup will not be able
	to log in to Mail until you re-create their mailboxes, and they will not have
	access to any old mail in their Inbox or private folders.
	
	Before you re-create the ACCESS files, you should save the user's mail.
	
	Microsoft Mail for Windows version 3.0a and 3.2 users can export their folders
	using the Export Folder option under the File menu. Microsoft Mail MS-DOS client
	users must move all mail from their Inbox into a private folder and then archive
	it by selecting Options, Folders, Folders, Archive.
	
	Once the users have been re-created, Microsoft Mail for Windows 3.0a and 3.2
	users can import the folders into their new Mail message files (MMFs) by
	choosing Import Folders from the File menu. Microsoft Mail MS-DOS client users
	must de-archive their old folders by selecting Options, Folders, Folders,
	De-Archive.
	
	Option 2
	--------
	
	NOTE: All users must be logged off of the postoffice before any of the files are
	changed.
	
	If a recent backup copy is not available, you must re-create the .NME and .GRP
	files. These two file groups point to each other, so if you re-create one of
	these groups, you also must re-create the other in order to maintain the
	consistency of the Mail database.
	
	You can create the ADMIN.NME file with the ACCTONME.EXE utility, which is
	available from Microsoft Product Support Services. ADMINSHD.NME is a copy of
	ADMIN.NME.
	
	Notes:
	
	- Running ACCTONME.EXE does not restore any groups, external postoffice users,
	  or gateway users that were present in the Postoffice Address List.
	
	- The resetting of group files can be automated. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q129500 Automating the Resetting of Group Files using GIMPORT
	
	After you re-create the ADMIN.NME and ADMINSHD.NME files, re-create the .GRP
	files as follows:
	
	1. Change the directory to the GRP subdirectory of the Mail database.
	
	2. Run the MS-DOS DEBUG command as follows:
	
	  a. At the MS-DOS prompt, type:
	
	  " debug" (without the quotation marks)
	
	  b. At the DEBUG hyphen (-) prompt, type the following and press ENTER after
	     each line:
	
	  "n admin.grp
	  rcx" (without the quotation marks)
	
	  c. The following lines are displayed:
	
	  CX 0000
	     :
	
	     After the colon (:), type the following and press ENTER:
	
	  "8" (without the quotation marks)
	
	  d. At the hyphen prompt, type the following and press ENTER:
	
	  "f100,107,0" (without the quotation marks)
	
	  e. At the hyphen prompt, type the following and press ENTER:
	
	  "w" (without the quotation marks)
	
	     You will now see:
	
	  writing 00008 bytes
	
	  f. At the hyphen prompt, type the following and press ENTER:
	
	  "q" (without the quotation marks)
	
	     This returns you to the MS-DOS prompt.
	
	3. Copy ADMIN.GRP to ADMINSHD.GRP.
	
	4. To maintain the consistency of the Mail data files, you must reset the
	  GROUP.GLB file in the Microsoft Mail postoffice GLB subdirectory:
	
	  a. Run the MS-DOS DEBUG command as follows:
	
	  debug group.glb
	
	  b. At the DEBUG hyphen prompt, type the following and press ENTER:
	
	  " f,100,103,00" (without the quotation marks)
	
	  c. At the DEBUG hyphen prompt, type the following and press ENTER:
	
	  "rcx" (without the quotation marks)
	
	  d. The following lines are displayed:
	
	  CX 0000
	     :
	
	     After the colon, type the following and press ENTER:
	
	  "4" (without the quotation marks)
	
	  e. At the hyphen prompt, type the following and press ENTER:
	
	  " w" (without the quotation marks)
	
	     You will now see:
	
	  writing 00004 bytes
	
	5. At the hyphen prompt, type the following and press ENTER:
	
	  "q" (without the quotation marks)
	
	  This returns you to the MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	ACCTONME.EXE is available as part of the "Database Maintenance Utilities"
	document. To obtain these utilities, lease see the following article in the
	Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	Additional query words: 2.1x 3.00 3.00a 3.20 admin mmf
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
