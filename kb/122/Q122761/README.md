---
layout: page
title: "Q122761: PC Win: Error Messages Associated with STORE.DLL &amp; MSMAIL.EXE"
permalink: /kb/122/Q122761/
---

## Q122761: PC Win: Error Messages Associated with STORE.DLL &amp; MSMAIL.EXE

	Article: Q122761
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows for Workgroups version 3.11 Mail users may encounter various
	error messages if they have a combination of Windows for Workgroups Mail and
	Microsoft Mail for Windows files installed on their computer.
	
	Two errors can result from the mixed files:
	
	  Application Error - Call to an Undefined Dynalink
	
	  -or-
	
	  This version of mail is too old to access your message file.
	
	CAUSE
	=====
	
	The first error message can occur if the STORE.DLL file is updated to version
	3.2 or 3.2a of Microsoft Mail for Windows, but the MSMAIL.EXE file remains a
	Windows for Workgroups version. In this circumstance, if the user chooses
	Options from the Mail menu, the first error message will appear, and Mail will
	terminate.
	
	This error message can also be generated if the MSSFS.DLL did not get updated
	from the Windows for Workgroups Mail version. To ensure you have the correct
	version, check the date of the MSSFS.DLL. It should be dated 11- 1-93 or later.
	
	The second error message can occur if the user picked the DoubleSpace option
	(from the Mail menu, choose Options. Then choose Optimize Local Mail File) in
	Windows for Workgroups Mail and the user updated the Windows for Workgroups
	versions of STORE.DLL and MSMAIL.EXE to version 3.2 or 3.2a of Mail for
	Windows.
	
	The second error can also be an indication of a corrupt mail message file (MMF).
	
	RESOLUTION
	==========
	
	To resolve the first error, replace any copy of MSMAIL.EXE on the hard disk
	dated 11-1-93 (Windows for Workgroups version) with a Microsoft Mail 3.2 or 3.2a
	version. (These files can be dated 3-9-93, 3-24-93, 4-6-93, or 5-26-93.)
	
	To resolve the second error, restore the .MMF file to a format compatible with
	Microsoft Mail 3.2 and 3.2a, as follows:
	
	1. Temporarily return the user to using the Windows for Workgroups Mail files:
	
	     STORE    DLL       235,072 11-01-93   4:11a
	     MSMAIL   EXE       302,528 11-01-93   4:11a
	
	2. Exit and Sign Out of Mail.
	
	3. Exit Windows for Workgroups.
	
	4. Scan the user's hard disk for the above filenames. Note the location and
	  rename both files.
	
	  Typically, the STORE.DLL file is located in the WINDOWS\SYSTEM subdirectory.
	  The MSMAIL.EXE file can be in the WINDOWS, WINDOWS\MSMAIL\..., or MSMAIL
	  subdirectory.
	
	5. Install a copy of the Windows for Workgroups version of MSMAIL.EXE to the
	  client computer's WINDOWS subdirectory. A copy may be available from another
	  Windows for Workgroups machine, or you can expand a new copy from the
	  original Windows for Workgroups disks by completing the following steps:
	
	  a. Insert the Windows for Workgroups disk containing MSMAIL.EX_ in the floppy
	     disk drive. (MSMAIL.EX_ is located on Disk 3 for 3.5-inch disks.)
	
	  b. At the MS-DOS prompt, change to the WINDOWS subdirectory and type:
	
	  "expand a:\msmail.ex_ c:\windows\msmail.exe" (without the quotation marks)
	
	     (This example assumes drive A is the source, and drive C is the
	     destination.)
	
	6. Install a copy of the Windows for Workgroups version of STORE.DLL to the
	  client computer's WINDOWS subdirectory. A copy may be available from another
	  Windows for Workgroups machine, or you can expand a new copy from the
	  original Windows for Workgroups disks by completing the following steps:
	
	  a. Insert the Windows for Workgroups disk containing STORE.DL_ in the floppy
	     disk drive. (STORE.DL_ is located on Disk 3 for 3.5-inch disks.)
	
	  b. At the MS-DOS prompt, change to the WINDOWS subdirectory and type:
	
	  "expand a:\store.dl_ c:\windows\store.dll" (without the quotation marks)
	
	     (This example assumes drive A is the source, and drive C is the
	     destination.)
	
	7. Start Windows for Workgroups. From File Manager, double-click the MSMAIL.EXE
	  file in the Windows folder. This will start Mail using the Windows for
	  Workgroups version of MSMAIL.EXE.
	
	8. Sign in to Mail.
	
	9. From the Mail menu, choose Options. Select the Highest Security option under
	  Optimize Local Mail File.
	
	  Mail will convert the .MMF file to the security format required by Microsoft
	  Mail 3.2 and 3.2a.
	
	10. Exit and Sign Out of Mail.
	
	11. Exit Windows for Workgroups.
	
	12. Delete or rename the MSMAIL.EXE and STORE.DLL files in the WINDOWS
	  subdirectory.
	
	13. Restore the original names of the files renamed in step 2.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups Mail has three features that are unsupported by versions
	3.2 and 3.2a of Mail for Windows:
	
	1. Microsoft At Work PC Fax technology is designed for use with Windows for
	  Workgroups Mail.
	
	2. The Windows for Workgroups Mail user's password can be cached in the Windows
	  for Workgroups user's USERNAME.PWL file. This prevents the user from having
	  to enter a password when Mail is started.
	
	3. The local mail file can be optimized in Windows for Workgroups Mail. This is
	  used for optimizing performance when the .MMF file is stored locally (the
	  Windows for Workgroups default) on a compressed volume, such as DoubleSpace,
	  Drivespace, or Stacker.
	
	The combination of Windows for Workgroups Mail files and Microsoft Mail 3.2 or
	3.2a files is not supported. For a list of the files Microsoft Mail installs
	under Windows for Workgroups, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q110467 PC Win: Description of 3.2 Setup Process
	
	Additional query words: 3.20 WFW Mail error
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
