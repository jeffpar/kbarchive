---
layout: page
title: "Q96454: PC WFW: Installing Extensions for Workgroups"
permalink: kb/096/Q96454/
---

## Q96454: PC WFW: Installing Extensions for Workgroups

	Article: Q96454
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail and Schedule+ Extensions for Microsoft Windows for Workgroups, version 3.1 
	-------------------------------------------------------------------------------
	
	This article explains the steps necessary to install version 3.0 of
	Microsoft Mail and Schedule+ Extensions for Microsoft Windows version 3.1
	for Workgroups.
	
	
	Postoffice/Server Upgrade
	-------------------------
	
	
	Working from the Windows for Workgroups (WFWG) workstation that contains
	the WFWG postoffice, follow the steps below to complete the Extension
	process.
	
	NOTE: Before you proceed, make sure all users on the postoffice have exited
	and signed out of Mail.
	
	
	1. To convert the existing WFWG postoffice to a full version 3.0 Microsoft Mail
	  for PC Networks postoffice, run the EXTEND.EXE program from the Server
	  Version - Disk 1 disk. Follow the instructions, inserting disks as prompted,
	  until the Extend process is complete.
	
	  a. You will be prompted to specify a directory for the mail executables.
	     WARNING: Do NOT specify the Windows directory. Microsoft suggests you use
	     the C:\MAILEXE directory.
	
	  b. You will be prompted to specify the location of the current WFWG
	     postoffice. The default is C:\WINDOWS\WGPO.
	
	2. Using the disks labeled Windows Based and OS/2 Presentation Manager Based
	  Workstation Version - Disk 1, run the INSTALL.EXE program. Follow the
	  instructions, inserting disks as prompted, until the Install process is
	  complete.
	
	  You will be prompted to specify the location of the Mail executables. Specify
	  the same directory location you specified in step 1a above.
	
	3. Using the disks labeled MS-DOS Based Workstation Version - Disk 1, run the
	  INSTALL.EXE program. Follow the instructions, inserting disks as prompted,
	  until the Install process is complete.
	
	  You will be prompted to specify the location of the Mail executables. Specify
	  the same directory location you specified in step 1a above.
	
	  NOTE: You should always install the MS-DOS-based workstation even if all your
	  users will be running different workstation software. The MS-DOS client
	  installation copies files needed by other Microsoft Mail components. It may
	  also be helpful when troubleshooting the Mail system.
	
	4. From the WFWG File Manager, share the Mail executables directory with full
	  rights.
	
	5. From File Manager, share the postoffice directory with full rights.
	
	6. For Macintosh users only: Use the disk labeled Apple Macintosh Workstation
	  Version and follow the steps listed in on page 10 in Chapter 1 of the
	  "Microsoft Mail Administrator's Guide."
	
	7. Use the Mail administrator program (ADMIN.EXE) on a nondedicated WFWG
	  server.
	
	  After the WFWG postoffice has been upgraded to a full Mail 3.0 postoffice, the
	  postoffice administration is handled through the MS-DOS based Administrator
	  (ADMIN.EXE) program. By default, the Administrator program looks for the
	  postoffice on the current directory of drive M. If you are using a
	  peer-to-peer network and the postoffice is located on a nondedicated server,
	  use the MS-DOS SUBST command to assign the M drive to the postoffice. For
	  convenience, you can add this SUBST command to the AUTOEXEC.BAT file. For
	  example:
	
	  subst m: c:\windows\wgpo
	
	  NOTE: The term "nondedicated" refers to a WFWG machine being used both as a
	  workstation and as the postoffice server.
	
	8. Create the Schedule+ Mail Administrator account "adminsch". For more
	  information, see page 7 in Chapter 2 of the "Microsoft Schedule+ for Windows
	  Administrator's Guide."
	
	9. Use the Schedule+ disks and follow the instructions on pages 7 and 8 of the
	  "Microsoft Schedule+ for Windows Administrator's Guide" to upgrade the server
	  portion of Schedule+.
	
	The Postoffice upgrade is now complete.
	
	
	Windows Mail Client Upgrade
	---------------------------
	
	
	From each user's workstation, complete the following steps:
	
	1. From the Windows File Manager, connect drive M to the shared postoffice
	  directory.
	
	2. Connect to the shared mail executables directory, using any drive letter.
	
	3. Double-click SETUP.EXE, which is located in the mail executables directory.
	  You will be prompted for a directory location to install Microsoft Mail.
	  Microsoft suggests you use the C:\MSMAIL directory.
	
	Follow the instructions until the Microsoft Mail Windows client upgrade is
	complete.
	
	
	Schedule+ Client Upgrade
	------------------------
	
	
	From each user's workstation, complete the following steps:
	
	
	1. From the Windows File Manager, connect drive M to the shared postoffice
	  directory.
	
	2. Connect to the shared Schedule+ directory, using any drive letter.
	
	3. Double-click SETUP.EXE, which is located in the shared Schedule+ directory.
	  You will be prompted for a directory location to install Schedule+.
	
	Follow the instructions until the Schedule+ client upgrade is complete.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbWFWSearch kbZNotKeyword3
	Version           : :3.1
	
	=============================================================================
	
