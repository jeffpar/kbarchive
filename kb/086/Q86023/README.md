---
layout: page
title: "Q86023: Control Panel .CPL Files and Icon Installation"
permalink: /kb/086/Q86023/
---

## Q86023: Control Panel .CPL Files and Icon Installation

{% raw %}

	Article: Q86023
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the relationship of .CPL files and the icons that appear
	in the Microsoft Windows and Microsoft Windows for Workgroups Control Panel.
	This article includes information on the following:
	
	- A general description of .CPL files
	
	- How to replace Control Panel icons
	
	- A list of the default .CPL files shipped with Windows
	
	- What to do if you receive a "Cannot Find Components" message
	
	- How to use the Windows 3.1 icons elsewhere
	
	- Multimedia settings in the CONTROL.INI file
	
	- Possible general protection (GP) faults in the Control Panel
	
	MORE INFORMATION
	================
	
	Description of .CPL Files
	-------------------------
	
	You can add additional icons and functionality to the Control Panel in Windows
	3.1 and Windows for Workgroups versions 3.1 and 3.11 by adding "installable"
	.CPL files. These .CPL files must be located in the Windows SYSTEM directory or
	the corresponding icon does not appear in the Control Panel. However multimedia
	.CPL files can be referenced in another directory by specifying a new path in
	the [MMCPL] section of the CONTROL.INI file.
	
	You should design and structure the .CPL file to conform to the CPLINFO
	specification as outlined in the Microsoft Windows Programmer's reference.
	Simply attaching a .CPL extension to a file of unspecified format doesn't work.
	The CPLINFO specification contains information concerning the icon, application
	or device name, identification numbers, and other data.
	
	NOTE: If VER.DLL is missing from the WINDOWS or Windows SYSTEM directory, only
	the 386 Enhanced icon and the Sound icon appear in Control Panel.
	
	Replacement of Control Panel Icons
	----------------------------------
	
	When you run the Control Panel in Windows 3.1 or Windows for Workgroups (WFWG),
	some of the icons may not display if the corresponding .CPL file is corrupt or
	missing. To correct this problem, you must expand the files from the Windows
	disks back to the Windows SYSTEM directory. Note that the network icon does not
	display if the network is not properly installed. This is not a problem with the
	MAIN.CPL, but with the network installation.
	
	Use the following steps to add a missing Control Panel icon:
	
	1. Exit Windows.
	
	2. Copy EXPAND.EXE from your Windows or WFWG disk to your WINDOWS directory.
	
	  NOTE: EXPAND.EXE is located on Windows 3.1 disk 3 (both disk sizes), on WFWG
	  3.1 disk 8 (5.25) or disk 6 (3.5), and on WFWG 3.11 disk 6 (both disk sizes).
	
	3. Put the Windows disk with the correct *.CP_ file in your floppy disk drive.
	  Depending on the Windows version and disk size you have, *.CPL files are
	  located on the following disks:
	
	     Windows 3.1    3.5" Disk   5.25" Disk
	     -------------------------------------
	     CPWIN386.CP_   Disk 1      Disk 1
	     DRIVERS.CP_    Disk 4      Disk 5
	     MAIN.CP_       Disk 4      Disk 5
	     SND.CP_        Disk 4      Disk 6
	
	     WFWG 3.1       3.5" Disk   5.25" Disk
	     -------------------------------------
	     CPWIN386.CP_   Disk 2      Disk 2
	     DRIVERS.CP_    Disk 6      Disk 7
	     MAIN.CP_       Disk 3      Disk 5
	     SND.CP_        Disk 7      Disk 8
	     WFWSETUP.CP_   Disk 2      Disk 2
	
	     WFWG 3.11      3.5" Disk   5.25" Disk
	     -------------------------------------
	     CPWIN386.CP_   Disk 2      Disk 2
	     DRIVERS.CP_    Disk 5      Disk 6
	     FAX.CP_        Disk 6      Disk 4
	     MAIN.CP_       Disk 3      Disk 3
	     SND.CP_        Disk 6      Disk 8
	
	4. Type the following at the MS-DOS command prompt
	
	  expand A:\xxxxx.CP_ C:\WINDOWS\SYSTEM\xxxxx.CPL
	
	  where xxxxx is the name of the file and drive A is the drive containing the
	  floppy disk with the .CPL files.
	
	5. Reopen the Control Panel (it is not necessary to exit Windows because the
	  Control Panel performs its search for .CPL files when it initializes).
	
	Default .CPL Files Shipped with Windows 3.1
	-------------------------------------------
	
	Windows 3.1 ships with the following four "installable" Control Panel objects.
	
	  Compressed            Expanded
	  Name          Size    Name          Size     Icon
	  --------------------------------------------------------------------
	  CPWIN386.CP_  48841   CPWIN386.CPL  104816   Control Panel's 386
	                                               Enhanced Mode icon
	
	  DRIVERS.CP_   21385   DRIVERS.CPL   41440    Control Panel's Drivers
	                                               icon for installing and
	                                               removing Multimedia
	                                               drivers
	
	  MAIN.CP_      89396   MAIN.CPL      148560   Control Panel's
	                                               Color, Fonts,
	                                               Ports, Mouse,
	                                               Desktop, Keyboard,
	                                               Printers,
	                                               International Date/Time,
	                                               Network (if installed)
	                                               icons
	
	  SND.CP_       4986    SND.CPL       8192     Control Panel's Sound
	                                               icon, which allows you
	                                               to assign sounds to
	                                               many system events
	
	NOTE: The Windows Driver Library disks include an additional .CPL file,
	SBPMIXER.CPL (file size 25792, dated 2/1/92), for computers with Creative Labs
	Sound Blaster Pro sound cards. This icon is an audio-mixing board for the Sound
	Blaster Pro.
	
	"Cannot Find Control Panel Components" Error Message
	----------------------------------------------------
	
	The Windows 3.1 or Windows for Workgroups 3.1 and 3.11 Control Panel
	(CONTROL.EXE) may return the following message upon execution:
	
	  Cannot find the Control Panel components (files with .CPL extension).
	
	  Verify that they are installed in your Windows SYSTEM directory. <OK>
	
	This error usually occurs when the .CPL files cannot be found in the SYSTEM
	directory, or if the files have become corrupt. First, you should confirm
	existence of the following .CPL files in your Windows SYSTEM directory:
	
	  CPWIN386.CPL
	  DRIVERS.CPL
	  MAIN.CPL
	  SND.CPL
	  WFWSETUP.CPL <=== Windows for Workgroups version 3.1 only.
	
	If any file is missing, you need to expand it from your Windows disks. If all
	files are there, then it is possible that the files are corrupted. In this case
	you should exit Windows, delete all of the SYSTEM\*.CPL files, then expand each
	.CPL from your Microsoft Windows disks into your Windows SYSTEM subdirectory, as
	described in this article.
	
	Using a .CPL File Icon Elsewhere
	--------------------------------
	
	The Windows version 3.1 Control Panel contains only one icon embedded in the
	executable file CONTROL.EXE. If an embedded icon from the Windows 3.0
	CONTROL.EXE file is used as a replacement icon for a program item, a similar
	Windows 3.1 icon may be located in one of the Control Panel data files (*.CPL).
	
	Because of the modular structure of the Windows 3.1 Control Panel, most icons
	that were embedded in earlier versions of the CONTROL.EXE file have been moved
	to different associated data files located in the SYSTEM subdirectory. These
	files include CPWIN386.CPL, DRIVERS.CPL, MAIN.CPL, and SND.CPL. To use one of
	the icons placed in the .CPL files for a program item in Windows 3.1, use the
	following steps:
	
	1. In Program Manager, select the program item whose icon needs to be changed.
	
	2. From the File menu, choose Properties to open the Program Item Properties
	  dialog box.
	
	3. Choose the Change Icon button.
	
	4. Type the appropriate .CPL filename in the File Name box, then choose the OK
	  button.
	
	Multimedia Settings in the CONTROL.INI
	--------------------------------------
	
	The [MMCPL] section of the CONTROL.INI file contains information which concerns
	the size and placement of the Control Panel window, the number of iconized
	applications in the Control Panel, and a path setting for multimedia .CPL files
	residing outside of the Windows SYSTEM subdirectory. The settings include:
	
	  Setting                 Description
	  --------------------------------------------------------
	  x=<number>              Horizontal window coordinate
	
	  y=<number>              Vertical window coordinate
	
	  h=<number>              Height in pixels
	
	  w=<number>              Width in pixels
	
	  numapps=<number>        The number of applications in the
	                         Control Panel
	
	In addition Microsoft Windows for Pen Computing may add the following lines to
	the [MMCPL] file:
	
	     cppen=c:\windows\cppen.cpl
	     cphw=c:\windows\cphw.cpl
	     cprot=c:\windows\cprot.cpl
	     cpcal=c:\windows\cpcal.cpl
	
	These entries allow the Control Panel to find .CPL file in subdirectories other
	than the Windows SYSTEM subdirectory.
	
	GP Faults in Control Panel
	--------------------------
	
	If you experience general protection (GP) faults when opening Control Panel, it
	is likely that one of the .CPL files is corrupted or damaged. Please follow the
	instructions in the previous section of this article to replace the icon.
	
	Missing Control Panel Icons
	---------------------------
	
	If KRNL386.EXE is in the Windows directory instead of, or in addition to, the
	Windows\SYSTEM subdirectory, one or more of the Control Panel icons may not
	appear. KRNL386.EXE should be in only the Windows\SYSTEM subdirectory.
	
	REFERENCES
	==========
	
	"Microsoft Windows Programmer's Reference, Volume3: Messages, Structures, and
	Macros," version 3.1, pgs. 260, 543-549.
	
	"Microsoft Windows for Pen Computing: Programmer's Reference, Windows Software
	Development Kit," version 3.1, pgs. 288-289.
	
	Additional query words: gpf 3.0 3.10 lost loss gone penwin *.cpl program item properties adding soundblaster
	
	======================================================================
	Keywords          : win31 
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
