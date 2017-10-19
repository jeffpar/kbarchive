---
layout: page
title: "Q81522: Manually Reconstructing Windows Productivity Pack Groups"
permalink: /kb/081/Q81522/
---

## Q81522: Manually Reconstructing Windows Productivity Pack Groups

	Article: Q81522
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	- Microsoft Windows Productivity Pack, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows Productivity Pack version 1.0 creates two program groups
	and a total of 10 icons when you install this package under Windows version 3.0.
	There are two methods of recovery if you have inadvertently deleted the
	application icons and/or program groups. Because the icon properties for some of
	the Windows Productivity Pack modules are somewhat unusual, the normal method of
	manually setting up Windows icons or using the Windows Search For Applications
	feature doesn't work unless you have additional information about the required
	command line entries.
	
	This is because of the method Productivity Pack uses to create its icons. Each
	icon refers to an executable file and either a data file or a Windows Help file.
	If you choose Set Up Applications from the Options menu of Windows Setup, you
	can recover the executable files. The only way to recover a lost Troubleshooter
	Tools group and the associated icons is to reinstall the Productivity Pack.
	
	MORE INFORMATION
	================
	
	One way of recovering the Productivity Pack groups and icons is to run the
	Productivity Pack Setup program. This will re-create all the groups and icons.
	
	However, if you only deleted a few things, it may be easier to re-create them
	manually. Listed below are the contents of each program group and the correct
	properties that must be entered to create the icons that are normally generated
	by the Setup program.
	
	PRODUCTIVITY PACK GROUP CONTENTS
	--------------------------------
	
	Icon Description        Command Line
	----------------        ------------
	
	Learning Windows        C:\PRODPACK\LWIN.EXE
	
	Quick Troubleshooter    C:\PRODPACK\QT.EXE LWINHELP.EXE TROUBLES.HLP
	
	Working Smarter         C:\PRODPACK\LWINHELP.EXE SMARTER.HLP
	
	Note that the c:\prodpack portion of the paths listed above are simply the
	original program defaults. If you installed the Windows Productivity Pack to a
	different directory, insert the appropriate path.
	
	TROUBLESHOOTER TOOLS GROUP CONTENTS
	-----------------------------------
	
	Icon Description        Command Line
	----------------        ------------
	
	View WIN.INI            NOTEPAD.EXE C:\WINDOWS\WIN.INI
	View SYSTEM.INI         NOTEPAD.EXE C:\WINDOWS\SYSTEM.INI
	View AUTOEXEC.BAT       NOTEPAD.EXE C:\AUTOEXEC.BAT
	View CONFIG.SYS         NOTEPAD.EXE C:\CONFIG.SYS
	Control Panel           CONTROL.EXE
	File Manager            WINFILE.EXE
	PIF Editor              PIFEDIT.EXE
	
	Note that the C:\WINDOWS portion of the paths listed above are simply the
	original program defaults. If you installed Windows to a directory other than
	WINDOWS, insert the appropriate path.
	
	The name of the group in which these icons reside must be called "Troubleshooter
	Tools." You cannot shorten or change the name in any way because the Quick
	Troubleshooter is hard coded to look for that group name.
	
	You may receive the following messages when you select an icon created from the
	Set Up Applications command of Windows Setup:
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Icon Name             | Description of Problem or Message that Appears                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| MS Modified Help      | Starts the Windows Help engine, but doesn't
	                  load any file.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Windows
	Setup for WPP | Displays the error message 
	Setup is currently
	                  unable to continue. Insert the Setup disk
	                  and type setup again. Press ENTER to exit setup.
	
	                  Windows exits to MS-DOS if ENTER is chosen or if
	                  the OK button is chosen. The second time you use
	                  this icon, an error message appears stating
	                  
	Application Execution Error: Cannot find file;
	                  check to ensure the path and filename are correct. | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Quick
	Troublshooter   | Displays the error message 
	ERROR: Troubleshooter
	                  has not been set up correctly. Please insert the
	                  Setup disk and type setup.                                                                                                                                                                                                                                                                                                                                                              | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| WINCBT                | Display the message 
	Change Disk: Cannot find
	                  CBTLIB.DLL, Please insert in drive A:.
	If you
	                  choose Cancel, the message 
	Application Execution
	                  Error: Cannot find file; check to ensure the path
	                  and filename are correct
	appears on the screen.                                                                                                                                                                                                    | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Learning
	Windows 1.0  | This application works correctly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 
	+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	For information on setting up Windows icons, refer to pages 87-89 of the
	"Microsoft Windows User's Guide."
	
	Additional query words: 3.0 3.0a WPP1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWinProdPack100
	Version           : :1.0,3.0,3.0a
	
	=============================================================================
	
