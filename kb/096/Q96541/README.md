---
layout: page
title: "Q96541: Setup Leaves Windows .INI Files in Root of the Novell Server"
permalink: /kb/096/Q96541/
---

## Q96541: Setup Leaves Windows .INI Files in Root of the Novell Server

	Article: Q96541
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run MS-DOS 6 Setup when you are logged onto a Novell server, Setup may
	leave your Windows initialization (.INI) files in the root directory.
	
	CAUSE
	=====
	
	This problem occurs when all the following conditions are exist:
	
	- You are logged on as a supervisor or a user with full access privileges to
	  the root of the file server.
	
	- You are using a shared installation of Windows (installed with the SETUP /N
	  command).
	
	- Your Windows initialization files are in a user directory that is being
	  accessed with a search drive.
	
	- You have installed the Windows-based optional utilities.
	
	If these conditions exist, MS-DOS 6 Setup leaves the following initialization
	files in the root of the Novell file server:
	
	  PROTMAN.INI
	  SYSTEM.INI
	  WINFILE.INI
	
	Setup also leaves the backup (.BAK) files for those files in the root of the
	Novell file server.
	
	WORKAROUND
	==========
	
	Use one of the following techniques to correct this situation:
	
	- If this is the only installation of MS-DOS 6 you plan to perform when you are
	  logged in as supervisor, you can simply move these six files back to the user
	  directory.
	
	- If you plan to do multiple installations of MS-DOS 6 when you are logged in
	  as supervisor, temporarily override the search drive before beginning the
	  MS-DOS 6 Setup on each subsequent computer. For example, if your Windows
	  initialization files are accessed on Search drive W:\USER\JOEB. Before
	  beginning the MS-DOS 6 Setup type these two commands at the MS-DOS command
	  prompt:
	
	  " map del w:
	  map w:=sys:user\joeb" (without the quotation marks)
	
	  When MS-DOS 6 Setup prompts you for the location of Windows directory, use
	  W:\USER\JOEB for the path.
	
	  NOTE: If desired, you may substitute the second command above with the
	  following:
	
	  " map root w:=sys:user\joeb" (without the quotation marks)
	
	  When MS-DOS 6 Setup prompts you for the location of Windows, use W:\ for the
	  path.
	
	MORE INFORMATION
	================
	
	Do not use a search drive to specify the location of your Windows initialization
	files. A search drive represents its drive letter as "<drive>:." instead
	of "<drive>:\<pathname>." MS-DOS 6 looks at "<drive>:.",
	changes to the root of the drive, and then looks for the current (.) directory.
	This is why MS-DOS 6 writes the files to the root of the server.
	
	If you are logged on as a user without write access privileges to the root of the
	file server (as is generally the case with a user on a Novell network), the same
	approach as described in the second technique applies. If you don't have
	privileges in the root directory, the temporary initialization files (.$$$) are
	written to your user directory. No changes are been made to your original
	initialization files. You can safely delete these .$$$ files. Use the second
	technique and then restart the MS-DOS 6 Setup program.
	
	The following three .$$$ files may be left in your user directory:
	
	  __SYS__.$$$
	  __PGI__.$$$
	  __WFI__.$$$
	
	If Setup detects that it did not need to modify one or more of the initialization
	files, you may not have all three of these in your user directory.
	
	NOTE: This information applies to both the SETUP and SETUP /E commands. (SETUP /E
	is used to install the optional components.)
	
	Additional query words: netware net ware 286 386 2.15 2.2 3.10 3.11 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
