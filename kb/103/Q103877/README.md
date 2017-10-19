---
layout: page
title: "Q103877: DBLSPACE.LOG May Point to Hidden Directory or File"
permalink: /kb/103/Q103877/
---

## Q103877: DBLSPACE.LOG May Point to Hidden Directory or File

	Article: Q103877
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you have duplicate directories on your DoubleSpace-compressed drive and your
	host drive, DoubleSpace displays an error message directing you to check the
	DBLSPACE.LOG file on the host drive when you try to uncompress the drive. If you
	cannot identify the duplicate filename, the file or directory may be hidden.
	
	CAUSE
	=====
	
	Some programs create hidden directories or files on your drive. For example,
	Microsoft Undelete Delete Sentry (UNDELETE /S) and Delete Tracker (UNDELETE /T),
	create a hidden SENTRY directory or a hidden PCTRACKR.DEL file to track deleted
	files. If you have hidden directories or files on both your
	DoubleSpace-compressed drive and its host drive, you cannot uncompress the
	DoubleSpace-compressed drive.
	
	RESOLUTION
	==========
	
	Use the TYPE command or MS-DOS Editor to view the DBLSPACE.LOG file that is
	located on your host drive. Once you have determined the duplicate filenames,
	use the DIR /A command to look for the files. You can use the ATTRIB command to
	remove the Hidden or System attribute from the file, and then you can rename or
	delete the file.
	
	If DBLSPACE.LOG lists duplicate directories, you can use the MOVE command to
	rename one of the duplicates. For example, type the following at the MS- DOS
	command prompt and then press ENTER:
	
	  " move h:\sentry h:\xsentry" (without the quotation marks)
	
	If the Undelete SENTRY directory or PCTRACKR.DEL file is causing the problem, you
	can remove that directory or file from the host drive using the steps outlined
	below.
	
	WARNING: If you delete the SENTRY directory or the PCTRACKR.DEL file, you cannot
	recover files that are being protected by Delete Sentry or Delete Tracker. Be
	sure you do not need to recover any files before you issue the DELTREE command.
	
	1. Start your computer without loading Undelete. To do this, press F8 when the
	  "Starting MS-DOS..." prompt is displayed. Respond Yes (press Y) for each
	  prompt EXCEPT the prompt to process the UNDELETE command.
	
	2. Delete the SENTRY directory or PCTRACKR.DEL file from your host drive. For
	  example, if your DoubleSpace-compressed drive is C and your host drive is H,
	  type "deltree h:\sentry /y" (without the quotation marks) or "deltree
	  h:\pctrackr.del /y" (without the quotation marks) at the MS-DOS command
	  prompt and then press ENTER.
	
	  NOTE: To determine which drive is your host drive, type "dblspace /list"
	  (without the quotation marks) at the MS-DOS command prompt and then press
	  ENTER.
	
	3. Run DoubleSpace and choose Uncompress from the Tools menu.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
