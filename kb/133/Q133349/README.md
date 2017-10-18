---
layout: page
title: "Q133349: How to Set Up a Floppy-Disk-Boot Server-Based Installation"
permalink: kb/133/Q133349/
---

## Q133349: How to Set Up a Floppy-Disk-Boot Server-Based Installation

	Article: Q133349
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to set up a floppy disk boot server-based
	installation of Windows 95 using any of the following networks:
	
	- Microsoft LAN Manager
	
	- Microsoft Windows NT
	
	- Novell NetWare
	
	NOTE: This article applies to only the retail version of Windows 95.
	
	MORE INFORMATION
	================
	
	Before you can set up a floppy disk boot server-based installation of Windows
	95, you must accomplish the following items:
	
	- All the Windows 95 files must be copied to the server using the Netsetup.exe
	  tool.
	
	- You must have a real-mode connection to the server.
	
	- You must have a drive mapped to the Windows 95 folder on the server.
	
	- You must have a drive mapped to a home directory on the server where
	  individual user folders and files are to be placed.
	
	- You must have full access rights to the home directory.
	
	To set up a floppy disk boot server-based installation, use the following steps:
	
	1. Create an Msbatch.inf file and store it in any accessible location. You can
	  create an Msbatch.inf file using Netsetup.exe or Batch.exe. To create an
	  Msbatch.inf file using Batch.exe, follow these steps:
	
	  a. Run Batch.exe from the Netsetup folder on the Windows 95 CD-ROM.
	
	  b. Click Network Options.
	
	  c. Click Enable Server Based Setup, then click Floppy Disk Boot.
	
	  d. Click Done. Save the file with an .inf extension.
	
	  NOTE: You can store the Msbatch.inf file in any location that is accessible to
	  users. You can choose any other options to automate Setup, but users who use
	  such an .inf file will have no choice but to use the parameters specified in
	  the file.
	
	  To create an Msbatch.inf file using Netsetup.exe, follow these steps:
	
	  a. Run Netsetup.exe from the Netsetup folder on the Windows 95 CD-ROM.
	
	  b. Click the Make Script button.
	
	  c. Enter a filename and location for the .inf file, then click OK.
	
	  d. Click Install Location.
	
	  e. Click the Server Based Setup check box to select it.
	
	  f. Click the Store Windows dialog box, then click On The Server.
	
	  g. Click Boot Device, then click Floppy Boot.
	
	  h. Click any other options you want to use to automate Setup.
	
	  i. Click OK.
	
	  NOTE: You can choose any other options to automate Setup. However, any user
	  who runs Setup pointing to such an .inf file will have no choice but to use
	  the parameters specified in the file. You can save the file with any
	  eight-character name, but the extension must be .inf.
	
	2. Change to the Windows 95 folder on the network server and run Setup.exe
	  specifying the script file you want to use. Use the syntax
	
	  setup <path>:\<filename>.inf
	
	  where <path> is the path for the script file, and <filename> is
	  the name for the script file.
	
	  NOTE: The .inf file can be in any location. If you do not specify an .inf
	  file, Setup uses the default .inf file located in the Windows 95 directory on
	  the server.
	
	  During the installation process, Setup prompts you to enter the location of
	  the machine folder. Enter a path from your home directory. For example, if
	  you have mapped drive E to your home directory on the server, you could
	  enter:
	
	  e:\<username>
	
	
	  If prompted, choose Custom Setup, and then choose to specify your network
	  adapter and network adapter settings when you are prompted by Setup.
	
	  After Setup finishes copying files, you are prompted to insert a blank disk
	  for the startup files. After you do so and the startup files are copied,
	  Windows 95 restarts from the startup disk. When Windows 95 starts, you
	  receive the following error message:
	
	  Error: 0001 The section corresponding to this workstation could not be found
	  in the MACHINES.INI
	
	1. Edit the Autoexec.bat file on the startup disk. Map a drive to your home
	  directory on the network server in the Autoexec.bat file.
	
	2. Edit the Machines.ini file located in the Windows 95 folder on the network
	  server. Add the following lines to the file:
	
	     [node address]         - This is the 12-digit node address listed
	                              when you boot from the startup disk.
	
	     Sysdatpath=<path>      - This is the path to the machine folder
	                              in your home directory that you created
	                              in step 2.
	
	     <X>=\\<server>\<share> - This is the path to the Windows 95
	                              directory on the server.
	
	3. Reboot your computer using the startup disk. Setup will finish.
	
	Additional query words: diskless workstation rpl
	
	======================================================================
	Keywords          : kbsetup 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
