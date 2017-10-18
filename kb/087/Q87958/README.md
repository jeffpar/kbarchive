---
layout: page
title: "Q87958: README.WRI from WinLogin 1.0"
permalink: kb/087/Q87958/
---

## Q87958: README.WRI from WinLogin 1.0

	Article: Q87958
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the WinLogin 1.0 README.WRI file.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	More Information About Microsoft WinLogin
	-----------------------------------------
	
	This document contains important information that is not included in
	the Microsoft WinLogin User's Guide or in online Help.
	
	Contents
	--------
	
	This document contains additional information on the following topics:
	
	1.0     Supported Networks
	1.1     List of Supported Networks
	1.2     LANMan version 2.1
	1.3     3Com 3+Share
	2.0     File Locking and File Sharing
	2.1     SHARE.EXE
	2.2     MS-DOS Based Network Servers
	2.3     Sharing Violations
	3.0     Other Information
	3.1     Installation
	3.2     Running WinLogin
	3.3     Backing up your data
	3.4     Using Shells other than Program Manager
	3.5     Removing WinLogin
	4.0     Other Online Documents
	
	1.0 Supported Networks
	
	1.1 List of Supported Networks
	
	The following networks have been tested and are compatible with
	WinLogin:
	
	NetWare - workstation shell version 3.01 and above
	Microsoft LANMan and 100% compatible - versions 1.0 and
	         above
	Banyan VINES - versions 4.0 and above
	DEC Pathworks - versions 4.0 and above
	3Com 3+Share - versions 1.3 and above
	3Com 3+Open - all versions
	IBM DOS LAN Server - versions 1.2 and above
	Artisoft LANtastic - versions 3.0 and above
	
	1.2 LANMan version 2.1
	
	The client software will not operate properly under Microsoft LAN
	Manager version 2.1. It will be necessary for you to obtain updated
	LAN Manager components. If you are using Microsoft LAN Manager 2.1 on
	your workstations, please contact Microsoft Product Support for
	additional information and updated software
	
	1.3 3Com 3+Share
	
	If you encounter problems when multiple users attempt to access the
	database, such as with multiple clients simultaneously attempting to
	logon or in attempting to access the database using the Admin tools
	while clients are attempting to logon, you may need to increase the
	number of concurrent file range locks supported by your server. These
	errors may show up as any form of "Error opening the  database",
	"Error initializing the database" or "Error accessing <one of the
	tables; user, wksta, etc.>".
	
	2.0 File Locking and File Sharing
	
	2.1 SHARE.EXE
	
	MS-DOS based networks often use SHARE.EXE to provide file locking and
	sharing capabilities. SHARE must be loaded on both the client and the
	server when using these networks.
	
	The default number of files and locks that SHARE.EXE uses may need to
	be increased in order for WinLogin to operate properly. We recommend
	that you edit the line that you use to load SHARE to read:
	
	    SHARE /L:200 /F:4096.
	
	This line will provide sufficient files and locks for most WinLogin
	installations.
	
	2.2 MS-DOS Based Network Servers
	
	Some MS-DOS based networks, including IBM PC LAN Program, do not fully
	support the file locking (byte range locking) necessary to use some
	types of databases. WinLogin will not work with these networks.
	
	2.3 Sharing Violations
	
	A "Sharing Violation on Drive C:" error may occur after the client
	installation has completed. This is due to the file VER.DLL being in
	use by both Windows and the WinLogin setup program. Simply OK the
	error dialog then close and re-start Windows to boot as a WinLogin
	client.
	
	A "Sharing Violation on Drive C:" error may occur if the SETUP does
	not complete normally. Check for the existence of the directory "\MS-
	SETUP.T" that may have been left on the local hard disk. If this
	directory exists, it will most likely contain the file VER.DLL, and
	subsequent attempts to setup will result in sharing violations. If
	this occurs, delete this directory and re-run SETUP.
	
	3.0 Other Information
	
	3.1 Installation
	
	You must have two floppy disk drives in order to create the client
	setup disk on a floppy disk. We recommend that you create the client
	setup disk on a network drive and transfer the image to a floppy disk
	if you wish to install the WinLogin client from floppy disk.
	
	If you receive the error message "WinLogin Client Setup could not
	access the WinLogin Database as described in the WINLOGIN.INI." There
	are several possible causes of this error:
	
	    There may be insufficient space on the WinLogin client
	    hard disk to initialize SETUP. (You must have a
	    minimum of 500Kb free disk space in order to setup a
	    WinLogin client.)
	
	The client may not have access to the remote network resource. Make
	sure the client has full read-write access to the database, and that
	the network share is not password protected.
	
	3.2 Running WinLogin
	
	Do not run the administrative tools on a workstation that is
	concurrently running the WinLogin client. Attempting to do so may
	result in database corruption. We recommend that you install the
	administrative tools on a machine that is not configured as a WinLogin
	client.
	
	Do not set the parameter "fallbackdir=" in the WINLOGIN.INI file to
	the Windows directory of the client installation. Doing so may cause
	the .INI files on the WinLogin workstation to become corrupted, or be
	written as 0 byte files.
	
	The WinLogin database must be installed onto a network drive. Do not
	attempt to install the database to a local drive.  Doing so will cause
	the error message "Cannot connect to remote resource" to be displayed.
	
	3.3 Backing up your data
	
	It is highly recommended that you backup the WinLogin database after
	creation and regularly thereafter. You should also backup your
	WinLogin installation disks prior to installing to prevent possible
	disk corruption.
	
	3.4 Using Shells other than Program Manager
	
	WinLogin defaults to loading the Windows 3.1 Program Manager as the
	shell. If you wish to use any other shell, it will be necessary to
	edit the client installation disk. Refer to the ADMIN.WRI file for
	instructions on editing the client installation disk.
	
	3.5 Removing WinLogin
	
	To remove the WinLogin client software:
	
	1. Copy the *.INI files from the fallback directory to the Windows
	  directory.
	
	2. Replace the "SHELL=WINLOGIN.EXE" line in the SYSTEM.INI with
	  "SHELL=PROGMAN.EXE" (or other Windows shell).
	
	3. Delete WIN.COM from the Windows directory.
	
	4. Rename W31.COM in the Windows directory to WIN.COM.
	
	5. Delete the *.LGN files.
	
	6. Delete WINLOGIN.*, WLMERGE.DLL, MSINIMRG.DLL, COPYMRG.DLL,
	  WLMERGE.INI, WLDAPI.DLL, WLUSERFN.DLL, WLPLATFN.DLL, WLDNET.DLL and
	  JET.DLL from the Windows directory
	
	4.0 Other Online Documents
	
	The following table describes other online documents that contain
	important information about WinLogin that is not included in the
	Microsoft WinLogin User's Guide or in online Help:
	
	Document     Contains
	
	ADMIN.WRI    Detailed technical information about how
	            WinLogin works.
	
	CLIENT.WRI   Information about using WinLogin, for end
	            users.  You can modify this template document
	            as appropriate for your end users
	
	For further information about WinLogin, query on the following word in
	the Microsoft Knowledge Base:
	
	    WinLogin
	
	Additional query words: 1.00 1.0 3.10 3.1 LAN Manager novell network winlog LANMan win31
	
	======================================================================
	Keywords          :  
	Technology        : kbWinLoginSearch kbWinLogin100
	Version           : :1.0
	
	=============================================================================
	
