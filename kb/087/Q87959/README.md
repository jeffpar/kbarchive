---
layout: page
title: "Q87959: CLIENT.WRI from WinLogin 1.0"
permalink: kb/087/Q87959/
---

## Q87959: CLIENT.WRI from WinLogin 1.0

	Article: Q87959
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the WinLogin 1.0 CLIENT.WRI file.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	MORE INFORMATION
	================
	
	WinLogin Workstations
	---------------------
	
	This document contains information about using WinLogin, for end
	users. If you are looking for additional information about Windows
	version 3.1 that does not pertain to networks, see "Other Online
	Documents" at the end of this file for a description of the Windows
	3.1 online documents.
	
	Other Online Documents
	
	The following table describes other online documents that contain
	important information about WinLogin that is not included in the
	Microsoft WinLogin User's Guide or in online Help:
	
	Document     Contains
	
	README.WRI   Information about using WinLogin with a specific version
	            of your network, and information updated after the
	            administrator's guide was printed.
	
	ADMIN.WRI    Detailed technical information about how WinLogin works.
	
	**********************************************************************
	
	This document is designed for the system administrator's use as an aid
	in the preparation of a document for distribution to WinLogin clients.
	It should be used as a template and modified for the specific
	installation of WinLogin.
	
	WinLogin, a tool that allows central configuration of Windows 3.1
	workstations on a network, has been installed on this machine. This
	program allows .INI files to be created as Windows boots. Windows will
	use these newly created .INI files rather than the original .INI files
	that were created by Windows setup. Windows will look and act exactly
	as it did before WinLogin was installed, with only a few exceptions.
	
	Changes to your Windows Setup
	-----------------------------
	
	When WinLogin was setup, the Windows version 3.1 WIN.COM file was
	renamed W31.COM and the WLCOM.COM file was copied to the workstation
	and renamed WIN.COM.
	
	A FALLBACK subdirectory is created in the Windows directory on the
	workstation. Critical .INI files that were on the workstation when
	WinLogin was set up are copied to the FALLBACK directory. These files
	can be used to start Windows if there are problems with the network,
	or if there are problems in using the user, workstation, group, or
	default settings. (WinLogin also maintains another set of backup files
	in the Windows directory. The .INI files for the last user who logged
	on are renamed with the .LGN extension and saved in the Windows
	directory.) These files must not be deleted.
	
	Starting Windows using WinLogin
	-------------------------------
	
	You will still start Windows by typing "WIN". WinLogin checks the
	database for the location of the various configuration files it needs
	and builds the appropriate files by using the administrative settings
	and the settings for the user, workstation, and group that your system
	administrator has defined. You will notice a small dialog box appear
	in the upper left hand corner telling you which file WinLogin is
	building.
	
	You can also use the /u option to specify your name when you start
	Windows using WinLogin. If you were the last user logged on to this
	machine, the user backup files are used to start Windows. This
	decreases the time needed to start Windows because WinLogin does not
	have to build the configuration files--instead, it uses the backup
	.INI files stored in the Windows directory on the workstation.
	
	To start Windows by using the /u option, at the MS-DOS prompt, type
	win /u:username, where username is your name.
	
	If the name does not match the last user's name, WinLogin follows the
	usual procedure for building the configuration files for you and the
	workstation that you are using.
	
	Running Windows with WinLogin
	-----------------------------
	
	Windows looks the same as it did before WinLogin was setup on the
	workstation, except that when WinLogin is running on a workstation,
	the WinLogin icon appears on the desktop. You can use this application
	to save the current configuration settings to the directories on the
	server. To save the current settings to the files on the network, from
	the Configuration menu, choose Save.
	
	Every few seconds, WinLogin will check for logon status. If someone
	was logged on to the network, but now is not, WinLogin will display a
	dialog box asking whether the current user wants to continue with the
	current configuration or quit Windows and return to MS-DOS. If someone
	was logged on to the network and now someone else is logged on,
	WinLogin will display a dialog box asking whether the user wants to
	continue with the current configuration or restart Windows with
	configuration files built for the current user. If no one was logged
	on to the network and now someone is, WinLogin will display a dialog
	box asking whether the user wants to continue with the current
	configuration or restart Windows with configuration files built for
	the current user.
	
	In all of these cases, if you choose to continue with a configuration
	that was not built for you, the Save command is not available and the
	settings are not saved to the network server when you quit Windows.
	
	You can quit WinLogin by choosing Exit from the Configuration menu. If
	any changes have been made since Windows was started, a dialog box
	appears, asking whether to save the current configuration settings to
	the files on the network server. After you quit WinLogin, any
	configuration changes you make to Windows are not saved.
	
	Special Modifications to your Windows configuration
	---------------------------------------------------
	
	There may be other changes that your system administrator made to your
	Windows environment. This has been done either to ensure that all
	hardware settings remain with the workstation that WinLogin was
	installed on, or to prevent certain changes from being made. Your
	system administrator has defined which changes can and cannot be made
	to your Windows environment. If you are attempting to make changes to
	Windows, such as changing your desktop, colors, or install or modify
	an application that makes changes to your Windows configuration files
	and these changes are not saved between sessions, check with your
	system administrator to determine if you have been prevented from
	making these changes.
	
	For further information about WinLogin, query on the following word in
	the Microsoft Knowledge Base:
	
	    WinLogin
	
	Additional query words: 1.00 1.0 3.10 3.1 LAN Manager novell network winlog LANMan
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
