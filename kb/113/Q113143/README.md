---
layout: page
title: "Q113143: WT1230: Batch File Converter for PowerPoint for Windows 95"
permalink: /kb/113/Q113143/
---

## Q113143: WT1230: Batch File Converter for PowerPoint for Windows 95

	Article: Q113143
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbappnote kbfile kbinterop kbconversion kbGraphxLink
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft offers an Application Note that contains a batch converter program
	that you can use to convert multiple PowerPoint version 3.0 or 4.0 for Windows
	files to PowerPoint for Windows 95 format. This Application Note is WT1230:
	"PowerPoint for Windows 95 Batch Converter."
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Wt1230.exe now (
	  http://download.microsoft.com/download/powerpoint95/utility1/1/WIN98/EN-US/wt1230.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	THE TEXT OF WT1230
	------------------
	
	======================================================================
	 Microsoft(R) Product Support Services Application Note (Text File)
	       WT1230: POWERPOINT(R) FOR WINDOWS(R) 95 BATCH CONVERTER
	======================================================================
	                                                 Revision Date: 12/95
	                                                      1 Disk Included
	
	The following information applies to Microsoft PowerPoint for Windows
	95, version 7.0.
	
	---------------------------------------------------------------------
	INFORMATION PROVIDED IN THIS DOCUMENT AND ANY SOFTWARE THAT MAY
	ACCOMPANY THIS DOCUMENT (collectively referred to as an Application
	Note) IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
	EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
	WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR
	PURPOSE. The user assumes the entire risk as to the accuracy and
	the use of this Application Note. This Application Note may be
	copied and distributed subject to the following conditions:  1) All
	text must be copied without modification and all pages must be
	included;  2) If software is included, all files on the disk(s)
	must be copied without modification (the MS-DOS(R)  utility
	diskcopy is appropriate for this purpose);  3) All components of
	this Application Note must be distributed together;  and  4) This
	Application Note may not be distributed for profit.
	
	Copyright (C) 1995 Microsoft Corporation.  All Rights Reserved.
	Microsoft, MS-DOS, PowerPoint, and Windows are registered trademarks
	of Microsoft Corporation.
	---------------------------------------------------------------------
	
	Purpose
	-------
	
	This Application Note includes a batch converter program that you can
	use to convert multiple PowerPoint version 3.0 or 4.0 for Windows
	files to PowerPoint for Windows 95 format. When you run the batch
	converter, you can select an unlimited number of PowerPoint files from
	different folders, drives, and shares. The batch converter translates
	all the files in the batch and copies them to the destination folder
	you specify, giving the files a common extension (.ppt). The original
	files remain intact in their source locations.
	
	Setting Up the Batch Converter
	------------------------------
	
	The PowerPoint for Windows 95 Batch Converter consists of three files:
	
	  Ppconv.exe
	  Threed.vbx
	  Vboa300.dll
	
	To set up the PowerPoint for Windows 95 Batch Converter, follow these
	steps:
	
	1. Copy the Ppconv.exe file from the enclosed WT1230 disk to any
	  folder on your hard disk.
	
	  If you downloaded the Wt1230.exe file from an online service and
	  extracted it, copy the Ppconv.exe file from the folder where you
	  extracted it to any folder on your hard disk.
	
	2. Copy the Threed.vbx and Vboa300.dll files from the enclosed WT1230
	  disk (or download folder) to your Windows\System subfolder. (If
	  these files already exist in this folder and are newer than the new
	  ones you're moving, do not replace the files.)
	
	  NOTE: For more information about copying or moving files in
	  Windows 95, click the Start button, click Help, and then query on
	  the words "files copying" or "files moving" (without the quotation
	  marks).
	
	Using the Batch Converter
	-------------------------
	
	To convert multiple PowerPoint version 3.0 or 4.0 for Windows files to
	PowerPoint for Windows 95 format, do the following:
	
	1. Run Ppconv.exe.
	
	  The PowerPoint for Windows 95 Batch Converter dialog box appears.
	
	2. In the Source File Selection window, switch to the folder you want
	  to copy files from by double-clicking the appropriate folder name.
	
	  NOTE: For more information on finding files and folders, click the
	  Start button, click Help, and then query on the words "find file" or
	  "find folder" (without the quotation marks).
	
	3. Specify a destination drive and folder for the converted files by
	  entering the fully qualified path in the Target Directory box.
	
	  NOTE: You cannot specify a network location for the target
	  directory using universal naming convention (UNC). To specify a
	  network location, see the "More Information" section of this
	  Application Note.
	
	4. In the box to the right of the Source File Selection list, select
	  the files you want to convert, and then click Add. The full path
	  and file name (for both source and destination) for each file you
	  add is listed in the Destination section.
	
	  NOTE: If you want to convert all the files in a given folder at one
	  time, click Select All, and then click Add.
	
	5. Repeat this process until all the files you want to convert are
	  listed.
	
	  NOTE: You can select files from different folders or different
	  network locations, add them to the list, and convert them in the
	  same batch process.
	
	6. The Target Extension box defaults to "ppt." This is the target
	  extension for PowerPoint files. Changing the Target Extension may
	  produce unexpected results and is not recommended.
	
	7. Click Convert.
	
	PowerPoint will start, and the Batch Converter will open, convert, and
	close each file you added to the list. After completion, the Batch
	Converter will display a message asking if you want to close
	PowerPoint for Windows 95. If you have no other work to perform in
	PowerPoint, click Yes.
	
	More Information
	----------------
	
	The PowerPoint for Windows 95 Batch Converter does not support
	universal naming convention (UNC). If you attempt to specify a target
	directory using UNC, the converter prompts you with an alert that
	states it does not support UNC.
	
	UNC is used in networking and is a way of naming or addressing a
	particular entity by following the naming convention:
	
	  \\<Server Name>\<Share name>
	
	This is different from the usual method of addressing a network
	location, which is mapping a designated drive letter to a network
	location.
	
	To specify a network target directory location, you must first map the
	location to a designated drive letter (using Windows Explorer, for
	example), and then specify the fully qualified path, including the
	drive letter, in the Target Directory box.
	
	--------------------------------------------------------------------------
	
	Additional query words: 7.00 ppt7 ppt95 wt1230 exe
	
	======================================================================
	Keywords          : kb3rdparty kbappnote kbfile kbinterop kbconversion kbGraphxLink 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
