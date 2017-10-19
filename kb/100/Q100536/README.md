---
layout: page
title: "Q100536: DBLSPACE.INI File Settings"
permalink: /kb/100/Q100536/
---

## Q100536: DBLSPACE.INI File Settings

	Article: Q100536
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 28-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22 and Windows 95, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	The DBLSPACE.INI file is a text file with Read-Only, Hidden, and System
	attributes. DoubleSpace stores this file in the root directory of your startup
	drive (either C or the host drive for C).
	
	The DBLSPACE.INI file contains variables that DoubleSpace uses when your computer
	starts. Although you can change these variables yourself, you should do so only
	if you understand what they do and what the results of your changes may be. When
	possible, you should let DoubleSpace change the DBLSPACE.INI file for you.
	
	NOTE: Before changing the DBLSPACE.INI file, be sure to make a backup copy of the
	file.
	
	The DBLSPACE.INI file may contain any of the following variables:
	
	  MaxRemovableDrives=n
	  FirstDrive=X
	  LastDrive=Y
	  MaxFileFragments=n
	  ActivateDrive=X,Yn
	
	
	  Automount=0|1|A...Z           (MS-DOS 6.2 and Windows 95)
	  DoubleGuard=0|1               (MS-DOS 6.2 Only)
	  RomServer=0|1                 (MS-DOS 6.2 Only)
	  Switches=/F|/N/FN             (MS-DOS 6.2 Only)
	
	
	These variables are described more fully in the following paragraphs.
	
	MORE INFORMATION
	================
	
	MaxRemovableDrives=n
	--------------------
	
	This specifies how many additional drives DoubleSpace should allocate memory for
	when your computer starts. DoubleSpace allocates a small amount of memory for
	each additional drive. This variable determines how many additional compressed
	drives you can create or mount without restarting your computer.
	
	To change this setting in versions up to MS-DOS 6.2, start DBLSPACE and choose
	Options from the Tools Menu. The MaxRemovableDrives setting corresponds to the
	"Number of removable media drives" option.
	
	To change this setting in later versions, edit the DBLSPACE.INI or DRVSPACE.INI
	file with a text editor.
	
	FirstDrive=X
	------------
	
	This specifies the lowest drive letter available for use by DoubleSpace.
	FirstDrive is set by DBLSPACE.EXE each time it modifies the DBLSPACE.INI file.
	Do not change the FirstDrive variable yourself.
	
	LastDrive=Y
	-----------
	
	This specifies the highest drive letter available for use by DoubleSpace.
	DoubleSpace assigns drive letters starting at LastDrive and works back to
	FirstDrive.
	
	NOTE: If another program uses one of the drive letters specified for DoubleSpace,
	the highest drive letter available to DoubleSpace will be higher than
	LastDrive.
	
	WARNING: If you change the DBLSPACE.INI file, do not set FirstDrive to a letter
	used by a physical or logical drive (such as drive C). Also, do not set
	LastDrive and FirstDrive more than 13 letters apart.
	
	To change this setting in versions up to MS-DOS 6.2, run DBLSPACE and choose
	Options from the Tools Menu. The LastDrive setting corresponds to the "Last
	drive reserved for DoubleSpace's use" option.
	
	To change this setting in later versions, edit the DBLSPACE.INI or DRVSPACE.INI
	file with a text editor.
	
	MaxFileFragments=n
	------------------
	
	This value is set by DoubleSpace to specify the degree of fragmentation to allow
	in all mounted compressed volume files (CVFs). After DoubleSpace is installed,
	the MaxFileFragments setting is changed to reflect the new number of file
	fragments in all CVFs each time a CVF is changed (deleted, mounted, or resized).
	The new value is the sum of file fragments in all mounted CVFs plus 110.
	
	For example, if the CVF on drive C has 6 fragments, and the CVF on drive D has 3
	fragments, then MaxFileFragments=119 (110+6+3). The new value is used to
	allocate memory the next time a CVF is mounted. Changes to DBLSPACE.INI that
	effect memory allocation take effect after you restart your computer.
	
	To change this setting, you must edit the DBLSPACE.INI file. However, with MS-DOS
	6.2 you can use the "DBLSPACE /MAXFILEFRAGMENTS=" command.
	
	NOTE: The initial MaxFileFragments setting (2600 for MS-DOS 6.0, or 10000 for
	MS-DOS 6.2) and the number added when a CVF is changed (110) are both read from
	the DBLSPACE.INF file. (Note that this information does not apply to Windows
	95.)
	
	WARNING: If you decrease the MaxFileFragments setting, DoubleSpace may not be
	able to mount your compressed drives.
	
	ActivateDrive=X,Yn
	------------------
	
	This specifies a CVF that DoubleSpace should mount automatically when your
	computer starts. The DBLSPACE.INI file can contain as many ActivateDrive lines
	as there are CVFs but only the first 15 ActivateDrive lines are processed by
	DoubleSpace.
	
	To change the ActivateDrive line, edit the DBLSPACE.INI file. However, with
	MS-DOS 6.2, you can use the DBLSPACE /HOST command.
	
	DoubleSpace uses the X,Y, and n parameters to determine which CVF to mount and
	how to assign drive letters. The way these parameters are used depends on
	whether the specified CVF was created by compressing existing files or created
	using free space on a drive, or if both types of CVFs exist on the same drive.
	
	The three options are explained below.
	
	  CVF Created by Compressing Existing Files
	-----------------------------------------
	
	If the specified CVF was created by compressing existing files, the CVF name is
	DBLSPACE.000. In this case, DoubleSpace uses the parameters for the
	ActivateDrive variable as follows:
	
	- X specifies the drive letter assigned to the uncompressed (host) drive where
	  the CVF is stored after it is mounted. This is the newly created drive
	  letter.
	
	- Y specifies the drive letter assigned to the compressed drive.
	
	- n specifies the filename extension of the DBLSPACE.00n CVF file, which is 0
	  in this case.
	
	For example, "ActivateDrive=H,C0" indicates that the CVF filename is
	DBLSPACE.000. When mounted, the CVF is assigned drive letter C, and the
	uncompressed (host) drive (which contains the CVF after startup) is assigned
	drive letter H. If the CVF is unmounted, the CVF exists on drive C, and drive H
	does not exist.
	
	  CVF Created by Compressing Free Space
	-------------------------------------
	
	If the specified CVF was created by compressing free space on an existing drive,
	the CVF filename is DBLSPACE.001 for the first drive created, DBLSPACE.002 for
	the second drive created, and so on. In this case, DoubleSpace uses the
	parameters for the ActivateDrive variable as follows:
	
	- X specifies the drive letter assigned to the compressed drive. This is the
	  newly created drive letter.
	
	- Y specifies the drive letter assigned to the uncompressed (host) drive.
	
	- n specifies the filename extension of the DBLSPACE.00n CVF file, which is set
	  to 1 for the first Create New CVF, 2 for the second Create New CVF, and so
	  on.
	
	For example, "ActivateDrive=G,D2" indicates that the CVF filename is DBLSPACE.002
	(the second CVF created by compressing free space). When mounted, the CVF is
	assigned drive letter G; the uncompressed (host) drive (which contains the CVF
	before and after startup) is assigned drive letter D. If not mounted, the CVF
	exists on drive D, and drive G does not exist.
	
	  Both Types of CVFs on the Same Drive
	------------------------------------
	
	If the specified CVF was created by compressing free space on an MS-DOS drive
	that also contains a DBLSPACE.000 CVF (created by compressing existing files),
	the CVF filename is the same as noted above (DBLSPACE.001, DBLSPACE.002, and so
	on), but DoubleSpace uses the parameters for the ActivateDrive statement
	differently. It doesn't matter which CVF was created first.
	
	- X specifies the drive letter assigned to the compressed drive. This is the
	  newly created drive letter.
	
	- Y specifies the drive letter of the DBLSPACE.000 CVF, when mounted, on the
	  same MS-DOS drive. If DBLSPACE.000 is not mounted, this is the drive letter
	  where both the DBLSPACE.000 CVF and the DBLSPACE.00n Create New CVF are
	  stored.
	
	- n specifies the filename extension of the DBLSPACE.00n CVF file, which is set
	  to 1 for the DBLSPACE.001, 2 for DBLSPACE.002, and so on.
	
	
	AutoMount=0|1|A...Z     (MS-DOS 6.2, Windows 95)
	------------------------------------------------
	
	Enables or disables the automatic mounting of removable drives, including floppy
	disk drives. By default, DoubleSpace automatically mounts all removable drives
	(AutoMount=1) and no entries are required in the DBLSPACE.INI file. DoubleSpace
	consumes 4K of additional memory with this setting enabled.
	
	To disable this setting, you must edit the DBLSPACE.INI file. However, in MS-DOS
	versions you can use the DBLSPACE /AUTOMOUNT=0 command.
	
	DoubleGuard=0|1         (MS-DOS 6.2 Only)
	-----------------------------------------
	
	This setting enables or disables DoubleGuard (tm) safety checking. When
	DoubleGuard is enabled, DoubleSpace will constantly check its memory for damage
	by some other program. By default, DoubleGuard is enabled (DoubleGuard=1) and no
	entries are required in the DBLSPACE.INI file.
	
	To disable this setting, type DBLSPACE /DOUBLEGUARD=0 at the MS-DOS command
	prompt.
	
	NOTE: DoubleSpace's DoubleGuard safety-checking feature detects when another
	program has violated DoubleSpace's memory, and immediately shuts down your
	computer to minimize the chance of data loss. If further disk activity were to
	occur, you could lose some or all of the data on your drive since the data
	DoubleSpace has in memory is probably invalid due to damage by the other
	program. Therefore, Microsoft recommends that you do not disable DoubleGuard.
	
	RomServer=0|1             (MS-DOS 6.2 Only)
	-------------------------------------------
	
	This setting enables or disables the check for a ROM BIOS Microsoft Real- time
	Compression Interface (MRCI) server. By default, the ROM MRCI check is disabled
	(RomServer=0) and no entries are required in the DBLSPACE.INI file.
	
	To enable this setting, type "DBLSPACE /ROMSERVER=1" (without the quotation
	marks) at the command prompt.
	
	NOTE: You should not enable the ROM MRCI check unless you are certain that your
	hardware supports this feature. Contact your hardware manufacturer for more
	information.
	
	Switches=/F|/N|/FN        (MS-DOS 6.2 Only)
	-------------------------------------------
	
	Controls the way the CTRL+F5 and CTRL+F8 keys work. Normally, you can press
	CTRL+F5 or CTRL+F8 to bypass DoubleSpace when your computer starts and no
	entries are required in the DBLSPACE.INI file.
	
	For more information on this setting and how to change it, type HELP DBLSPACE
	/SWITCHES at the command prompt.
	
	
	Editing the DBLSPACE.INI File
	-----------------------------
	
	To edit the DBLSPACE.INI file:
	
	1. Use the ATTRIB command to remove the Read-Only, System, and Hidden attributes
	  on the DBLSPACE.INI file. For example, type "attrib -s -h -r h:\dblspace.ini"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	2. Use a text editor, such as MS-DOS Editor, to edit the DBLSPACE.INI file.
	
	NOTE: The DBLSPACE.INI file may be modified by DoubleSpace when you restart your
	computer or anytime you run DoubleSpace to change a CVF. For more information on
	how DoubleSpace modifies the DBLSPACE.INI file, query on the following words in
	the Microsoft Knowledge Base:
	
	  dblspace.exe and dblspace.ini and modify and settings
	
	REFERENCES
	==========
	
	"Microsoft MS-DOS 6 Technical Reference," "MS-DOS 6 DoubleSpace Files and Their
	Functions: DBLSPACE.INI," pages 19-21
	
	Microsoft Windows 95 Resource Kit
	
	Additional query words: dblguard 6.00 6.20 6.22 msdos
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbGamesSearch kbPlusSearch kbZNotKeyword3 kbWin98 kbWin98SE kbPlus95 kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22; WINDOWS:95
	
	=============================================================================
	
