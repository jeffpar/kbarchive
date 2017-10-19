---
layout: page
title: "Q132913: How to Use EXTRACT.EXE to Copy Files from DMF Disks"
permalink: /kb/132/Q132913/
---

## Q132913: How to Use EXTRACT.EXE to Copy Files from DMF Disks

	Article: Q132913
	Product(s): Microsoft Product Support Information
	Version(s): WINDOWS:5.0c,6.0c,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows, version 6.0c 
	- Microsoft Office 
	- Microsoft Excel for Windows, version 5.0c 
	- Microsoft Excel for Windows 95, version 7.0 
	- Microsoft Works for Windows 95, version 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: The Extract program requires that you load Himem.sys into memory in order to use it.
	
	SUMMARY
	=======
	
	Files on all but the first disk of the programs listed at the beginning of this
	article are combined in cabinet form, and as such cannot be copied individually
	to other disks or hard drives.
	
	This article explains how to use the Extract utility to locate or copy any
	individual files from the cabinet files.
	
	MORE INFORMATION
	================
	
	This article is organized as follows:
	
	- Where to get the Extract utility
	
	- How to interrupt the Extract program
	
	- Copying an entire CAB file
	
	- Extracting all files from a CAB file
	
	- Displaying all files in a particular CAB file
	
	- Locating a particular file in particular CAB file
	
	- Locating a particular file in an unknown CAB file
	
	- Extracting a single file from a particular CAB file
	
	- Extracting a single file from an unknown CAB file
	
	- Extracting certain types of files from a particular CAB file
	
	- Syntax of the EXTRACT utility
	
	Where to Get the Extract Utility
	--------------------------------
	
	The Extract utility is located on Disk 1 of each of the disk sets listed above,
	except for Works 4.0 for Windows 95. Copy the file Extract.exe from Disk 1 to
	your computer and place it in a directory on your path. To extract files from
	the CAB files on the Works 4.0 disks, use the copy of Extract.exe in your
	<Windows 95>\Command directory.
	
	In order to make best use of space, certain large files are spread among the
	disks.
	
	How to Interrupt the Extract Program
	------------------------------------
	
	You can cancel a running Extract program by pressing CTRL+C.
	
	Copying an Entire CAB File
	--------------------------
	
	The syntax of this command is
	
	  extract /c <drive>:\<cabinetname> <destination>
	
	where <drive> is the drive letter, <cabinetname> is the name of the
	cabinet file you want to copy, and <destination> is the full path and
	filename of where you want the cabinet file to end up.
	
	This command is necessary when you are copying an entire cabinet file from floppy
	disks to a hard drive or network drive. If the cabinet file is already on the
	hard drive or network drive, you can copy files to any hard drive or network
	drive with a simple COPY command. The Extract utility is necessary only when you
	are copying the file from floppy disks, because the floppy disks are formatted
	in a new way, and require a special utility to read them.
	
	For example, to copy a cabinet file named EXCEL2.CAB from drive A to the
	directory C:\DISK2, use the following syntax:
	
	  extract /c a:\excel2.cab c:\disk2\excel2.cab
	
	Extracting All Files from a CAB File
	------------------------------------
	
	The syntax of this command is
	
	  extract /e /a /l <destination> <drive>:\<cabinetname>
	
	The /E switch extracts all files on the specified cabinet(s).
	
	The /A switch extracts all files on all disks, beginning with the first cabinet
	specified. You can specify any cabinet file, and Extract will search that
	cabinet file and all files that come after it. Be sure to place the disk
	specified in the command line in the drive before executing this command.
	
	The /L switch lists the locations of the files. First the destination of the
	files expanded files is given, followed by a space and the source of the cabinet
	files. If you omit this switch, Extract expands files into the current
	directory.
	
	For example, to copy all of the files from all cabinets on all disks to the
	directory C:\FLAT, use the following command (and place disk 1 in drive A:):
	
	  extract /e /a /l c:\flat a:\excel1.cab
	
	To copy all of the files from the EXCEL4.CAB cabinet to the current directory,
	use the following command:
	
	  extract /e a:\excel4.cab
	
	To copy all of the files from the WORD5.CAB file to the directory C:\DISK5, use
	the following command:
	
	  extract /e /l c:\disk5 a:\word5.cab
	
	To copy all of the files from Word disks 5 through 7 to the directory C:\DISKS,
	use the following command:
	
	  extract /e /a /l c:\disks a:\word5.cab
	
	Displaying All Files in a Particular CAB File
	---------------------------------------------
	
	The syntax of this command is
	
	  extract /d <drive>:\<cabinetname>
	
	For example, to list all the files in EXCEL2.CAB, use the following command:
	
	  extract /d a:\excel2.cab
	
	Locating a Particular File in a Particular CAB File
	---------------------------------------------------
	
	The syntax of this command is
	
	  extract /d <drive>:\<cabinetname> <filename>
	
	For example, to see if ODBC.DLL is located in the WORD7.CAB file, use the
	following command:
	
	  extract /d a:\word7.cab odbc.dll
	
	For example, to list all *.DLL files in the WORD7.CAB file, use the following
	command:
	
	  extract /d a:\word7.cab *.dll
	
	Locating a Particular File in an Unknown CAB File
	-------------------------------------------------
	
	The syntax of this command is
	
	  extract /a <drive>:\<firstcabinetname> /d <filename>
	
	For example, to find the file SOLVER.XLA when you don't know which cabinet it's
	in, use the following command to look on all disks, starting with Disk 1 (be
	sure to place Disk 1 in the drive before you start):
	
	  extract /a a:\excel1.cab /d solver.xla
	
	As Extract views the contents of each disk, it displays the name of the cabinet
	file on the screen. When it finds the filename you are looking for, it displays
	the file information on the screen.
	
	NOTE: Extract will continue to search the remaining disks to see if there is a
	duplicate filename. You must watch the screen carefully to see when the file
	information is displayed, and note the cabinet name that was displayed above
	it--this is the cabinet you are looking for.
	
	HINT: If the cabinet files are all stored on a network drive or a hard drive, the
	cabinet names may scroll off the screen before you can read them. Redirect the
	Extract output to a file, and scroll through the file using Notepad or another
	text editor.
	
	NOTE: This method is not suitable for use with disks, as you receive no prompting
	that Extract is waiting for the next disk.
	
	Redirecting results to a text file
	----------------------------------
	
	1. Type the command above, adding a greater-than symbol (>) and a text
	  filename:
	
	  EXTRACT /A A:\EXCEL1.CAB /D SOLVER.XLA > LIST.TXT
	
	2. Press ENTER.
	
	3. The command-line prompt appears and a new file has been created in the
	  current directory. The file LIST.TXT can be opened and read with any text
	  editor.
	
	Extracting a single file from a particular CAB file
	---------------------------------------------------
	
	The syntax of this command is
	
	  extract <drive>:\<cabinetname> filename /l <destination>
	
	For example, to extract the file CALENDAR.WIZ and copy it to the
	C:\WINWORD\TEMPLATE directory, use the following command:
	
	  extract a:\word6.cab calendar.wiz /l c:\winword\template
	
	Extracting a Single File from an Unknown CAB File
	-------------------------------------------------
	
	The syntax of this command is
	
	  Extract /A <Drive>:\<Cabinetname> <Filename> /L
	  <Destination>
	
	Extract searches all the cabinet files in sequential order and then extracts the
	file once it is found.
	
	For example, to extract the MSSPEL2.DLL file from disks in drive A into the
	WINDOWS\MSAPPS\PROOF directory on drive C, use the following command:
	
	  extract /a a:\word1.cab msspel2.dll /l c:\windows\msapps\proof
	
	Extract will look at every cabinet file, beginning with the first cabinet file
	you specified. When Extract finds the file, it extracts it, and continues
	looking through the rest of the disks.
	
	Extracting Certain Types of Files from a Particular CAB File
	------------------------------------------------------------
	
	The syntax of this command is
	
	  extract <drive>:\<cabinetname> <filetype>
	  <destination>
	
	For example, to extract all the *.DLL files on Word's Disk 7, use the following
	command:
	
	  EXTRACT A:\WORD7.CAB *.DLL D:\WINWORD
	
	Syntax of the EXTRACT Utility
	-----------------------------
	
	To obtain a complete list of command options for the EXTRACT, insert Disk 1 and
	switch to the drive containing the disk. For example, type "A:" without the
	quotation marks if the disk is in drive A. Then type EXTRACT or EXTRACT /? at
	the command prompt to obtain a list of commands for EXTRACT. You will see the
	list below:
	
	EXTRACT [/Y] [/A] [/D | /E] [/L dir] cabinet [filename ...]
	EXTRACT [/Y] source [newname]
	EXTRACT [/Y] /C source destination
	
	 cabinet  - Cabinet file (contains two or more files).
	 filename - Name of the file to extract from the cabinet. Wild cards and
	            multiple filenames (separated by blanks) may be used.
	 source   - Compressed file (a cabinet with only one file).
	 newname  - New filename to give the extracted file. If not supplied, the
	            original name is used.
	 /A         Process ALL cabinets.  Follows cabinet chain starting in first
	            cabinet mentioned.
	 /C         Copy source file to destination (to copy from DMF disks).
	 /D         Display cabinet directory (use with filename to avoid
	            extract).
	 /E         Extract (use instead of *.* to extract all files).
	 /L dir     Location to place extracted files (default is current
	            directory).
	 /Y         Do not prompt before overwriting an existing file.
	
	Additional query words: winword diamond dmf finding distribution media format compression compressed copied
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbOfficeSearch kbExcelSearch kbHomeProdSearch kbWorksSearch kbExcel95 kbZNotKeyword2 kbExcel95Search kbZNotKeyword3 kbExcel500c kbWord600c
	Version           : WINDOWS:5.0c,6.0c,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
