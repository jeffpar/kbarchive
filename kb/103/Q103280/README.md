---
layout: page
title: "Q103280: Using an Emergency Repair Disk Created by Windows NT"
permalink: kb/103/Q103280/
---

## Q103280: Using an Emergency Repair Disk Created by Windows NT

	Article: Q103280
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Windows NT installation, an Emergency Repair Disk (ERD) is created that
	includes the following:
	
	- System Registry hive (SYSTEM._).
	
	- Software Registry hive (SOFTWARE._).
	
	- The Security Account Manager (SAM) and Security database registry hives
	  (SAM._ and SECURITY._).
	
	- Default user profile (default._).
	
	- New user profile (ntuser.da_) Windows NT version 4.0 only.
	
	- The Setup.log file.
	
	- The Autoexec.nt file.
	
	- The Config.nt file.
	
	MORE INFORMATION
	================
	
	If something happens to your computer's hard disk drive to corrupt or change
	your startup system files or Windows NT registry, you can use the ERD to get the
	system back into a bootable state. After you restart the Windows NT operating
	system, you can then perform a full recovery by restoring from your last system
	backup.
	
	For example, you have a computer running Windows NT that allows you to specify
	which operating system to start (MS-DOS or Windows NT) by using the boot loader
	menu. If the MS-DOS SYS command is inadvertently run on drive C, you will no
	longer be able to start (boot) Windows NT. You will only be able to start
	MS-DOS.
	
	The boot loader is a small program that resides in the first physical sector(s)
	of the active partition. Windows NT stores the old boot loader code into a new
	file called Bootsect.dos. Windows NT replaces the boot loader sector with a new
	loader program stub. This new loader finds the NTLDR program and runs it. NTLDR
	switches into protected mode operation and loads a mini-file system, which then
	reads Boot.ini. Boot.ini presents the boot loader information used to start your
	system with Windows NT or MS-DOS. In the above example, when the SYS command was
	run from MS-DOS, the boot loader sector was overwritten by MS-DOS's boot sector.
	This MS-DOS boot sector does not know anything about Windows NT or boot loader.
	
	Sample Repair Procedure
	-----------------------
	
	The procedure below explains how to recreate the Windows NT boot sector
	information, allowing the dual boot features to be reactivated using the ERD
	created during installation:
	
	1. Start your computer using Windows NT Setup Disk 1, and then Disk 2.
	
	2. At the first screen, press "R" for Repair.
	
	3. You will see four selections. All four will be selected by default. Move the
	  selector bar with the arrow keys to highlight the options. Press ENTER to
	  select/clear the options.
	
	  [ ]  Inspect registry files
	  [ ]  Inspect startup environment
	  [ ]  Verify Windows NT system files
	  [X]  Inspect Boot Sector
	
	4. Select only the option "Inspect boot Sector" option. Move the selector bar to
	  the line that says to Continue, and then press ENTER.
	
	5. Let Windows NT perform the mass storage detection. If necessary select "S" to
	  specify additional drivers if your computer requires Original Equipment
	  Manufacturer drivers.
	
	6. When prompted to do so, insert the ERD that was originally created for this
	  computer. (Or press Esc to let Windows NT search for Windows NT 3.51 or 4.0
	  repair information)
	
	7. Repair will run the CHKDSK utility, verify the boot sector, and then rebuild
	  it if necessary.
	
	8. You will be prompted to restart your computer when the process is complete.
	
	When you restart your system, the Windows NT Boot Loader screen appears, allowing
	you to choose between MS-DOS or Windows NT.
	
	Additional Sources of Information
	---------------------------------
	
	For more information about using the Emergency Repair Disk, see:
	
	  Q129037 Windows NT 3.5x and 4.0 Emergency Repair Process Screens
	
	  Q150497 How to Repair Windows NT System Files Without a CD-ROM Attached
	
	  Q126464 Repair Disk Utility Does Not Update SAM and Security Hives
	
	  Q122857 RDISK /S and RDISK /S- Options in Windows NT
	
	Additional query words: prodnt tshoot repair ERD
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51 4.0
	
	=============================================================================
	
