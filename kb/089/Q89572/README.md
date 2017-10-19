---
layout: page
title: "Q89572: The Microsoft Setup Toolkit for Windows -- A Tutorial"
permalink: /kb/089/Q89572/
---

## Q89572: The Microsoft Setup Toolkit for Windows -- A Tutorial

	Article: Q89572
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below demonstrates the basic functionality of the Microsoft
	Setup Toolkit for Windows that is included with version 3.1 of the Microsoft
	Windows Software Development Kit (SDK). The Setup Toolkit is a collection of
	tools and programs designed to build a "setup" disk, that is, a disk (or group
	of disks) that install one or more files onto a client's computer system.
	
	Because the Setup program itself is designed for the Microsoft Windows graphical
	environment, the Toolkit is primarily aimed at building installation disks for
	the Windows environment. Functions in the Toolkit copy software and other data
	files to the target disk, add groups and items to the Microsoft Windows Program
	Manager, and create or modify initialization (.INI) files. This tutorial does
	not discuss all of these features; it concentrates on using the setup disk
	layout tools and on creating a "basic" setup disk.
	
	This tutorial covers the following topics:
	
	- Selecting the files to install on the client's system
	
	- Including the required Toolkit files on the setup disks
	
	- Creating the required directory structure on the client's system
	
	- Controlling file compression
	
	- Using the Dsklayt and Dsklayt2 utilities in the Setup Toolkit
	
	This tutorial, which uses the sample script file included with the Toolkit (with
	minor modifications), is designed to provide an overview of the capabilities of
	the Toolkit. Before applying the Toolkit to any particular task, additional
	information and preparation is required.
	
	This tutorial does not discuss the following tasks:
	
	- Modifying the dialog boxes in Setup.
	
	- Modifying the setup scripts (beyond the minimum changes required to
	  accomplish the tutorial's objectives).
	
	- Using the Setup procedures. (Even though the tasks in this tutorial use Setup
	  procedures, the tutorial does not discuss them in any detail.)
	
	MORE INFORMATION
	================
	
	The Setup Toolkit contains three major component groups:
	
	1. The disk layout utilities that create "setup" disks. A client uses the setup
	  disks to install software onto a target system. The primary focus of this
	  tutorial is these utilities and how to use them.
	
	2. The setup tools required to install the software. Microsoft provides the
	  setup tools in the SDK. The setup tools must be included on the setup disks.
	  This tutorial discusses the setup tools only briefly.
	
	3. Dialog boxes, sample setup scripts, and other files that control the
	  appearance and operation of the Setup program. These factors are either
	  ignored by this tutorial or are discussed at only the most basic level.
	
	The Setup Toolkit directory (by default, C:\WINDEV\MSSETUP or C:\C700\MSSETUP)
	contains two information files in Microsoft Windows Write format: README.WRI and
	FILEDESC.WRI. These files provide a great deal of reference information.
	
	As outlined in the "Setup Toolkit for Windows" manual provided with the Windows
	SDK, using the Setup Toolkit involves seven steps, as follows:
	
	1. Identify the files to install.
	
	2. Design a directory structure for those files.
	
	3. Identify all user-defined parameters.
	
	4. Design the required dialog boxes.
	
	5. Modify the sample script files.
	
	6. Create images of the installation disks.
	
	7. Test the setup disks.
	
	This tutorial concentrates on steps 1, 2, and 6.
	
	The remainder of this article is organized as follows:
	
	- Discuss steps 1 and 2 (identify files and directories)
	
	- Exercise 1: Create a directory of files to install
	
	- Briefly discuss steps 3, 4, and 5 (parameters, dialog boxes, script files)
	
	- Discuss step 6 (create disk images)
	
	- Exercise 2: Use the Dsklayt utility
	
	- Exercise 3: Modify the setup list file
	
	- Exercise 4: Modify the script file
	
	- Exercise 5: Use the Dsklayt2 utility
	
	- Exercise 6: Create and test the setup disks
	
	Identify the Files to Install
	-----------------------------
	
	To build setup disks, it is necessary to determine the files to install on the
	target system. This tutorial outlines the procedures to install the Generic
	application, one of the sample applications discussed in the Windows SDK "Guide
	to Programming" manual. Feel free to substitute other files if Generic is not
	readily available. Under normal circumstances, installing an application would
	not involve installing source code (source code might be an optional item).
	However, the steps outlined below install the source code to Generic along with
	its executable file. The source files are listed below in the discussion of
	directory structure.
	
	NOTE: Make sure that you build the Generic executable before the first exercise.
	For more information, see Chapter 1 of the "Guide to Programming" manual.
	
	In addition to the installed files, you must include some Setup Toolkit files on
	the setup disks. The process marks these files to prevent them from being
	installed on the client's system.
	
	Design a Directory Structure
	----------------------------
	
	Given the list of files to install, determine where the files belong on the
	client's system. As a practical matter, it helps to build the directory
	structure and to copy the files into it. Then you can build setup disks from
	these files. If disk space is very tight, you may not be able to build the
	complete tree structure. In that case, remember that the Dsklayt utility cannot
	change directories. Therefore, you must start it in a directory that can access
	all the needed files, including the Toolkit files. This tutorial discusses these
	considerations in more detail below.
	
	Exercise 1: Files and Directories
	---------------------------------
	
	This exercise uses the following directory structure:
	
	  Root
	   |
	   +Generic
	      |
	      +Sources
	
	In other words, the GENERIC directory is a child of the root and it has a
	subdirectory named SOURCES. Copy all the files from the SDK Guide samples
	GENERIC directory into the GENERIC\SOURCES directory. Move GENERIC.EXE from the
	SOURCES directory to the GENERIC directory. Copy the following files from the
	SDK Setup Toolkit directory into the GENERIC directory: all .EXE files, all .DLL
	files, all .INC files, SAMPLE1.MST, and SETUP.LST. The files marked with
	"<<<" in the list below are not required for all installations. The
	FILEDESC.WRI file details when these files are needed. Although it is always
	safe to include these files, they consume space on the setup disks.
	
	If you create the GENERIC directory from the root of the C drive, the MS-DOS TREE
	utility (tree \generic /f /a) shows the directory structure as follows:
	
	  C:GENERIC
	  |   GENERIC.EXE
	  |   _MSSETUP.EXE
	  |   _MSTEST.EXE
	  |   MSCOMSTF.DLL
	  |   MSCUISTF.DLL
	  |   MSDETECT.INC
	  |   MSDETSTF.DLL
	  |   MSINSSTF.DLL
	  |   MSREGDB.INC      <<<
	  |   MSSHARED.INC     <<<
	  |   MSSHLSTF.DLL
	  |   MSUILSTF.DLL     <<<
	  |   SAMPLE1.MST
	  |   SETUP.EXE
	  |   SETUP.LST
	  |   SETUPAPI.INC
	  |
	  \---SOURCES
	          GENERIC.C
	          GENERIC.DEF
	          GENERIC.H
	          GENERIC.MAK
	          GENERIC.OBJ
	          GENERIC.RC
	          GENERIC.RES
	          GENERIC.STS
	          MAKEFILE
	
	User Parameters, Dialog Boxes, and Scripts
	------------------------------------------
	
	During the process of designing how to install an application, it is necessary to
	determine items that the user must select or specify. These could include
	optional files (such as the source directory in this example), the drive and
	directory to install to, the registered owner's name, and so forth. After
	gathering this information, the next step is to modify the dialog boxes and
	rebuild the resource dynamic- link library (DLL) that Setup uses. Choose one of
	the sample setup scripts and modify it as required. The exercises below involve
	some minor modifications to the SAMPLE1.MST script.
	
	For more information on the resource DLL, see the Setup BDLCUI (build customer
	interface) directory.
	
	Creating the Setup Disk Images
	------------------------------
	
	The user runs the Setup program from floppy disks. The Toolkit provides two
	programs that arrange the files and create floppy disks. Dsklayt, the first
	layout program, runs in the Windows environment. Use this tool to specify the
	files to include in the setup disk images and the characteristics of the files.
	Dsklayt2, the second layout program, runs in the MS-DOS environment (outside
	Windows) and reads the layout (.LYT) file that Dsklayt creates. Dsklayt2 creates
	disk images and the information (.INF) file the Setup program uses to install
	files from the floppy disks to the target system.
	
	Because the Toolkit program files must be on the first setup disk but should not
	be installed on the target system, you must edit the information file that
	Dsklayt2 creates.
	
	Note the following considerations when building the file layout and disk images:
	
	- Because Dsklayt cannot change directories, all Toolkit files must be in the
	  same directory as the project code. Although Dsklayt reads subdirectories, it
	  does not read parent directories. The GENERIC directory was designed as
	  outlined above to address this limitation.
	
	- In the Dsklayt utility, place the Toolkit files on disk 1. The default file
	  settings specify compressed files. Two of the Toolkit files, SETUP.EXE and
	  SETUP.LST, must not be compressed. If you compress the other files, you must
	  edit the SETUP.LST file to account for the compression. The exercises below
	  show how to do this.
	
	- Dsklayt2 builds an .INF file, which is required by the Setup program. When
	  you run Dsklayt to specify the files to include in the disk images, the .INF
	  file has not yet been created, which prevents you from listing it in the disk
	  images. Dsklayt2 compensates for this and places the .INF file on setup disk
	  1 as required. However, Dsklayt2 compresses the .INF file and places a
	  compressed copy of the .INF file with the extenxion .IN_ in the disk image
	  directory. To work around this, copy the .INF file to the disk image
	  directory before copying the files to the floppy disks.
	
	- The .INF file that Dsklayt2 creates instructs the Setup program to copy all
	  the files. The only method of preventing the Setup program from copying the
	  Toolkit files (SETUP.EXE and so forth) along with the program is to edit the
	  INF file. Instructions on modifying the .INF file are presented in the
	  exercises below.
	
	- The Dsklayt2 program provides the /k option to build 360K setup disks.
	  However, most of the Toolkit files must be compressed to fit on a 360K disk.
	
	Exercise 2: Using the Dsklayt Program
	-------------------------------------
	
	The Dsklayt utility runs in the Windows environment. If you use the Toolkit
	often, you might find it convenient to create an icon in the Program Manager
	that runs the Dsklayt utility.
	
	When the program first starts, Dsklayt determines if you want to create a new
	layout or open an existing layout. For this exercise, create a new layout. For
	the source directory, specify the GENERIC directory created in Exercise 1.
	
	Dsklayt displays all the files in the specified directory, including all the
	files in all the subdirectories. Initially, each file is selected to be included
	on the setup disks and each has the following attributes:
	
	- Install on any disk
	
	- Vital file (this file must be present or the Setup program fails)
	
	- Compress file when laying out setup disks
	
	- Check for version information
	
	- Always overwrite existing file on target disk
	
	- Decompress file when installing on target disk
	
	- Mark file as read-only on target disk
	
	These options are not the best for most situations. They cause particular
	problems when they are applied to the Toolkit files. Therefore, change these
	default attributes as follows:
	
	1. Select all the files by clicking the mouse on the first file in the files
	  list box and dragging to the last file. Alternatively, use the arrow keys to
	  place the cursor on the first file, press the SPACEBAR to select the file,
	  and press SHIFT+END to select all the files.
	
	2. Cancel the selection for the following options:
	
	   - Check For Version
	
	   - Mark As Read-Only
	
	3. Select SETUP.EXE and clear the Compress check box.
	
	4. Select SETUP.LST and clear the Compress check box.
	
	5. Select all the Toolkit files. (In this exercise, these are all the files in
	  the GENERIC directory except for GENERIC.EXE.) Mark these files for setup
	  disk 1.
	
	6. To create the SOURCES directory on the target disk and place the source files
	  in this new directory, each file in the SOURCES directory must be renamed
	  when the Setup program copies it from the setup disks. To rename the files:
	
	  a. Select the first file in the SOURCES directory.
	
	  b. Select the Rename Copied File check box.
	
	  c. In the Edit box, type "sources\" (without the quotation marks) followed by
	     the name of the file.
	
	  d. Repeat steps a-c for each file in the SOURCES directory.
	
	  For example:
	
	  a. Select the GENERIC.C file in the Sources directory.
	
	  b. Select the Rename Copied File check box.
	
	  c. Type the following in the Edit box:
	
	  " sources\generic.c " (without the quotation marks)
	
	7. From the File menu, choose Save to store the layout. Give it the name
	  SAMPLE1.LYT. Be sure to specify the GENERIC directory. The default in Dsklayt
	  is to save the file in the MSSETUP\DISKLAY directory.
	
	8. Close Dsklayt.
	
	Exercise 3: Modifying the SETUP.LST File
	----------------------------------------
	
	The SETUP.LST file is included with the Toolkit. It lists the files that the
	Setup program copies into a temporary directory. The default SETUP.LST file
	assumes that the other Toolkit files are not compressed. To correct this
	assumption, you must edit the file. SETUP.LST contains two sections, labeled
	[Params] and [Files]. The [Files] section of the default SETUP.LST file is as
	follows:
	
	  [Files]
	      sample1.mst  = sample1.mst
	      sample1.inf  = sample1.inf
	      setupapi.inc = setupapi.inc
	      msdetect.inc = msdetect.inc
	      mscomstf.dll = mscomstf.dll
	      msinsstf.dll = msinsstf.dll
	      msuilstf.dll = msuilstf.dll
	      msshlstf.dll = msshlstf.dll
	      mscuistf.dll = mscuistf.dll
	      msdetstf.dll = msdetstf.dll
	      _mstest.exe  = _mstest.exe
	      _mssetup.exe = _mssetup.exe
	
	It is necessary to modify entries in this section to indicate that some of the
	files are compressed. To ease the process of identifying a compressed file, the
	last character of the filename extension of a compressed file is replaced with
	an underscore (_) character. Use any file editor (for example, the Edit
	application for MS-DOS or the Notepad application for Windows) to change the
	[Files] section as follows:
	
	  [Files]
	      sample1.ms_  = sample1.mst
	      sample1.inf  = sample1.inf
	      setupapi.in_ = setupapi.inc
	      msdetect.in_ = msdetect.inc
	      mscomstf.dl_ = mscomstf.dll
	      msinsstf.dl_ = msinsstf.dll
	      msuilstf.dl_ = msuilstf.dll
	      msshlstf.dl_ = msshlstf.dll
	      mscuistf.dl_ = mscuistf.dll
	      msdetstf.dl_ = msdetstf.dll
	      _mstest.ex_  = _mstest.exe
	      _mssetup.ex_ = _mssetup.exe
	
	The SAMPLE1.INF file (the information file created with Dsklayt2 in Exercise 5
	below) will not be compressed. You will edit this file later in Exercise 5.
	
	Exercise 4: Modifying the SAMPLE1.MST Script File
	-------------------------------------------------
	
	The SAMPLE1.MST script file performs a few steps that are not necessary for this
	example. SAMPLE1.MST creates an initialization (.INI) file for the installed
	application and it adds a program group and icon to the Windows Program Manager.
	Although these steps are useful for an actual Setup program, they create
	unnecessary work for testing purposes. This exercise modifies the setup script
	to eliminate these unnecessary steps.
	
	Instead of removing lines from the setup script, this exercise involves inserting
	the comment character at the beginning of the unnecessary lines of the file. (In
	an actual setup script, removing lines is more efficient and uses less disk
	space.) An apostrophe (') character at the beginning of a line marks the line as
	a comment. Using a file editor, comment out lines 182 and 184-197. After
	inserting the comment characters, lines 182 through 198 appear as follows:
	
	  <line 181 follows>
	      AddSectionFilesToCopyList "Files", SrcDir$, DEST$
	  '    AddSectionKeyFileToCopyList "Options", OPTCUR$, SrcDir$, DEST$
	      CopyFilesInCopyList
	
	  '    ini$ = MakePath(DEST$, "DEMO.INI")
	  '    CreateIniKeyValue "WIN.INI", "MSSetup Sample 1", "Option",
	  OPTCUR$, cmoNone
	  '    CreateIniKeyValue ini$, "Section 1", "Key 1", "Value 1" , cmoNone
	  '    CreateIniKeyValue ini$, "Section 2", "Key 2", "Value 2" , cmoNone
	  '    CreateIniKeyValue ini$, "Section 3", "Key 3", "Value 3" , cmoNone
	
	  '    CreateProgmanGroup "MSSetup Sample 1", "", cmoNone
	  '    ShowProgmanGroup  "MSSetup Sample 1", 1, cmoNone
	  '    CreateProgmanItem "MSSetup Sample 1", "dialogs", "dlgedit.exe"
	  +MakePath(DEST$,"dialogs.res"), "", cmoOverwrite
	  '    CreateProgmanItem "MSSetup Sample 1", "dlgprocs.c", "notepad.exe"
	  +MakePath(DEST$,"dlgprocs.c"), "", cmoOverwrite
	
	  '    AddDos5Help "YOURAPP", "A brief help text for your Windows-based
	  application."+chr$(10)+"It can be continued on another line with
	  chr$(10).", cmoNone
	
	      CloseLogFile
	
	  <last line was 198>
	
	NOTE: Due to the margins of this document, a few of the lines in the file
	"wrapped" and require more than one line above.
	
	Exercise 5: Using the Dsklayt2 program
	--------------------------------------
	
	Dsklayt2 is an application for MS-DOS that reads the layout information file that
	Dsklayt creates (in this case SAMPLE1.LYT) and creates two items: a set of disk
	images and an information file. The disk images are used to build setup disks.
	The Setup program uses the information file to place the files on the target
	disk.
	
	The Dsklayt2 program accepts several parameters, some of which are required for
	the application to work. For this exercise, set the current directory to the
	GENERIC directory created in Exercise 1 and issue the following command:
	
	  dsklayt2 sample1.lyt c:\disk1\sample1.inf /k144 /f /dc:\ /cc:\comp
	
	The individual terms of this command line are as follows:
	
	- "dsklayt2": The filename of the Dsklayt2 application. Because the Toolkit
	  installs Dsklayt2 in the Windows SDK MSSETUP\DISKLAY directory, the full path
	  to this file is required unless this directory is in the MS-DOS PATH
	  environment variable. If you use this utility often, you might want to add
	  the directory to the PATH or place the full command into a batch file.
	
	- "sample1.lyt": The layout file produced by the Dsklayt utility.
	
	- "c:\disk1\sample1.inf": The filename for the created information file.
	  Specifying this path ensures that Dsklayt2 places the information file on
	  setup disk 1 (see the discussion of the /d parameter, below).
	
	- "/k144": The size of the setup disks. Valid options are 360 (for 360K disks),
	  720 (for 720K disks), 12 (for 1.2 MB disks), 144 (for 1.44 MB disks), and N
	  (for a network installation).
	
	- "/f": Overwrite the .INF file if one already exists. This parameter is not
	  required unless you run Dsklayt2 more than once and specify the same
	  destination directory.
	
	- "/dc:\": The destination directory for the disk images. If you omit the /d
	  option, Dsklayt2 creates only an .INF file (no disk images). Specifying "c:\"
	  causes Dsklayt2 to create the disk images in directories named "disk1,"
	  "disk2," and so forth in the root directory of drive C.
	
	- "/cc:\comp": Storage for compressed files before they are copied into the
	  disk images. This parameter is optional. However, if it is necessary to build
	  the disk images more than once, specifying a location to store the compressed
	  files speeds the process considerably.
	
	After running Dsklayt2, you must edit the information file (C:\DISK1\SAMPLE1.INF)
	to prevent the Toolkit files from being copied to the target disk. Use a file
	editor to remove the lines in the [Files] section that refer to the Toolkit
	files. The resulting file contains only references to the files in the Generic
	sample application and look like the text below. Note that the lines in the
	[Files] section have been edited to fit the margins of this document.
	
	[Source Media Descriptions]
	   "1", "disk1", "_mstest.exe", "..\disk1"
	
	[Default File Settings]
	"STF_BACKUP"     = ""
	"STF_COPY"       = "YES"
	"STF_DECOMPRESS" = "YES"
	"STF_OVERWRITE"  = "ALWAYS"
	"STF_READONLY"   = "YES"
	"STF_ROOT"       = ""
	"STF_SETTIME"    = "YES"
	"STF_TIME"       = "0"
	"STF_VITAL"      = "YES"
	
	[Files]
	1, generic.h,,,, 1992-03-23,,,, !READONLY,, sources\generic.h
	1, generic.rc,,,, 1992-03-23,,,, !READONLY,, sources\generic.rc
	1, generic.res,,,, 1992-06-04,,,, !READONLY,, sources\generic.res
	1, generic.def,,,, 1992-03-23,,,, !READONLY,, sources\generic.def
	1, generic.mak,,,, 1992-05-21,,,, !READONLY,, sources\generic.mak
	1, makefile,,,, 1992-03-23,,,, !READONLY,, sources\makefile
	1, generic.sts,,,, 1992-06-30,,,, !READONLY,, sources\generic.sts
	1, generic.c,,,, 1992-03-23,,,, !READONLY,, sources\generic.c
	1, generic.obj,,,, 1992-06-04,,,, !READONLY,, sources\generic.obj
	1, generic.exe,,,, 1992-06-04,,,, !READONLY,,,,,, 30456,,,,,
	
	Exercise 6: Create Setup Disks and Test
	---------------------------------------
	
	At this stage of the process, an installation disk image is available in the
	C:\DISK1 directory. (If you chose to specify 720K disks, you probably have two
	disk image directories: C:\DISK1 and C:\DISK2.) To create installation disks,
	copy all the files from each disk image directory to a corresponding floppy disk
	(label the disks to keep them in order).
	
	To test the installation, place the first disk in a floppy disk drive and run the
	Setup program from the Program Manager or the File Manager. Because these
	exercises did not change the setup script (in any major way) or modify the
	dialog boxes, the Setup program includes some screens that are not required by
	this particular demonstration. Specify any desired target drive and directory.
	If you choose the default, C:\DEMO, SETUP creates a DEMO directory that contains
	two files, GENERIC.EXE and a .LOG file, and a SOURCES subdirectory with the
	other files.
	
	Summary
	-------
	
	This tutorial covered the following topics:
	
	- Creating a target directory structure for files to install and placing the
	  files into the structure
	
	- Using the Dsklayt utility to map the files onto setup disks
	
	- Using the Dsklayt2 utility to create disk images
	
	- Modifying the setup script and information file to make the setup process
	  flow smoothly and to prevent extra files from being created
	
	- Copying the disk images onto floppy disks
	
	- Testing the setup disks to verify that the disks work correctly
	
	The following directories were created by the exercises in this tutorial if the
	directory names listed were used: COMP, DEMO, DEMO\SOURCES, DISK1, GENERIC, and
	GENERIC\SOURCES. (If you selected 720K disks, a DISK2 directory was created as
	well). Delete the files in these directories and the directories themselves, if
	desired.
	
	Additional query words: 3.10 MSSetup tool kit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
