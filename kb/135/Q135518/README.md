---
layout: page
title: "Q135518: HOWTO: Copy Files from Cabinets on DMF-Formatted Disks"
permalink: /kb/135/Q135518/
---

## Q135518: HOWTO: Copy Files from Cabinets on DMF-Formatted Disks

{% raw %}

	Article: Q135518
	Product(s): Microsoft FoxPro
	Version(s): WIN3.X:3.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The files on Disks 2 through 7 of the Standard Edition and 2 through 16 of the
	Professional Edition of the Setup program for Microsoft Visual FoxPro for
	Windows are stored in cabinet files on DMF-formatted disks. If you need to copy
	the files from the disks to a network server or other permanent storage drive,
	you must use the /C copy switch with the Extract.exe utility located on Disk 1
	to copy the application files to the target location.
	
	Extract.exe allows you to copy the entire cabinet file (*.CAB) or extract and
	decompress individual files contained in the cabinet file. You can also use the
	Extract utility to search a cabinet file and list its contents.
	
	To obtain a complete list of command options for the Extract utility, insert Disk
	1 and switch to the drive containing the disk. For example, type A: if the disk
	is in drive A. Type EXTRACT or EXTRACT /? at the command prompt to obtain the
	list of available command options.
	
	MORE INFORMATION
	================
	
	A cabinet (*.CAB) file contains many files stored as a single file. The
	following examples show how to use the Extract utility to copy and extract files
	from a cabinet file and how to locate the files contained in a cabinet file.
	
	Copying an Entire *.CAB File
	----------------------------
	
	The following examples show how to use Extract to copy the entire cabinet file to
	another location. To copy a cabinet file named VFP2.CAB to the current
	directory, use this syntax:
	
	     EXTRACT /C A:\VFP2.CAB VFP2.CAB
	
	To copy a cabinet file named VFP2.CAB to the C:\DISK2 directory, use this
	syntax:
	
	     EXTRACT /C A:\VFP2.CAB C:\DISK2\VFP2.CAB
	
	Copying Files from a *.CAB File
	-------------------------------
	
	To copy all files from all cabinets on all disks to the C:\FLAT directory, use
	this syntax::
	
	     EXTRACT /E /A /L C:\FLAT A:\VFP1.CAB
	
	NOTE: The /A switch extracts all files beginning with the first cabinet, so Disk
	1 should be in drive A when you use Extract with this switch.
	
	To copy all files from the VFP4.CAB cabinet to the current directory, use this
	syntax:
	
	     EXTRACT /E A:\VFP4.CAB
	
	Locating a File in a *.CAB File
	-------------------------------
	
	If you need only a single file that is contained in one of the cabinet files, you
	can search for it using the /D switch with Extract.exe. Once you find the file,
	you can use Extract.exe again to copy the file to the desired location. The
	following examples show how to use the Extract to find files.
	
	To list all files in a cabinet file, use this syntax:
	
	     EXTRACT /D A:\<cabinet filename>
	
	To list all *.exe files in a cabinet file, use this syntax:
	
	     EXTRACT /D A:\<cabinet filename> *.EXE
	
	Copying a Single File from a *.CAB File
	---------------------------------------
	
	The following examples show how to use Extract to copy a single file from a
	cabinet file.
	
	To extract Any.exe to the current directory, use this syntax:
	
	     EXTRACT A:\<cabinet filename> ANY.EXE
	
	To extract Any.exe to C:\VFP, use this syntax:
	
	     EXTRACT A:\<cabinet filename> /L C:\VFP ANY.EXE
	
	Copying Contents of Distribution disks to Hard Disk for Installation
	--------------------------------------------------------------------
	
	If you are experiencing errors extracting files from the original distribution
	diskettes, you can copy Disk1 to a clean (empty) subdirectory.
	
	Using the extract command, extract the remaining CAB files into the same
	directory, then run setup from that directory.
	
	Additional query words: compress decompress dmf disk 2
	
	======================================================================
	Keywords          : kbsetup kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WIN3.X:3.0
	
	=============================================================================
	

{% endraw %}
