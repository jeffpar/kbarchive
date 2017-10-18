---
layout: page
title: "Q156813: HOWTO: Controlling Which Accessories Are Installed in Unattended"
permalink: kb/156/Q156813/
---

## Q156813: HOWTO: Controlling Which Accessories Are Installed in Unattended

	Article: Q156813
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, unattended setup does not provide a way to control what accessory
	applications are installed in the Accessories program group.
	
	MORE INFORMATION
	================
	
	To control which accessory applications are installed in the Accessories program
	group, you must modify the application's information (.inf) file.
	
	WARNING: Microsoft does not encourage or support changes to .inf files;
	therefore, Microsoft Technical Support does not support the procedure in this
	article. Although we have tested the following procedure and it appears to
	function as described, make a backup copy of your .inf file before you proceed.
	
	Each application or group of applications on the Accessories menu has an
	associated information (.inf) file. Each .inf file uses the InstallType variable
	to determine whether or not the application is to be installed. The InstallType
	variable has three possible values:
	
	   0 = Manual only
	  10 = Typical or Custom
	  14 = Typical, Custom, or Portable
	
	The following .inf files use the InstallType variable. You can find the list of
	.inf files in the [BaseWinOptionsInfs] section of the Syssetup.inf file.
	
	  accessor.inf
	  communic.inf
	  games.inf
	  imagevue.inf
	  mmopt.inf
	  multimed.inf
	  optional.inf
	  pinball.inf
	  wordpad.inf
	
	The following example is the section for FreeCell from the Games.inf file for
	Windows NT Server 4.0. By default, games are not installed on the server.
	Because unattended setup uses Typical as the installation type, you can specify
	a value of 10 can be used for FreeCell's InstallType. By default, the
	InstallType for Free Cell is 0.
	
	  [Freecell]
	  OptionDesc              = %Freecell_DESC%
	  Tip                     = %Freecell_TIP%
	  IconIndex               = 62 ;Windows mini-icon for dialogs
	  Parent                  = Games
	  ;
	  ; The following value is the one to change.
	  ; To install FreeCell, change InstallType from 0 to 10.
	  ;
	  InstallType             = 0 ;Manual only
	  CopyFiles               = FreecellCopyFilesSys, FreecellCopyFilesHelp
	  AddReg                  = FreecellAddReg
	  UpdateInis              = FreecellInis
	  Uninstall               = FreecellUninstall
	  Upgrade                 = FreecellUpgrade
	  Detect                  = %11%\freecell.exe
	
	To take advantage of the InstallType variable for manual or unattended
	installations of Windows NT, a certain amount of preparation is needed.
	
	1. Copy the contents of the I386 directory from the Windows NT 4.0 compact disc
	  to a distribution share.
	
	2. For each .inf file that you need to modify, first expand the original .inf
	  file and rename the compressed .in_ file, using the following commands:
	
	  EXPAND GAMES.IN_ GAMES.INF
	  RENAME GAMES.IN_ GAMES.SAV
	
	  NOTE: You need to use the Windows NT version of Expand.exe.
	
	3. Edit the .inf file and change the InstallType value, as outlined above.
	
	      0 = Manual only
	     10 = Typical or Custom
	     14 = Typical, Custom, or Portable
	
	Additional query words: prodnt Unattended Setup Install
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
