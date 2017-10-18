---
layout: page
title: "Q103530: Criteria for ActivateDrive Entry for Removable Media"
permalink: kb/103/Q103530/
---

## Q103530: Criteria for ActivateDrive Entry for Removable Media

	Article: Q103530
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
	
	Since MS-DOS 6.2 can automatically mount floppy disk and other removable media,
	it is not always necessary for DoubleSpace to put an ActivateDrive entry in the
	DBLSPACE.INI file for all removable media.
	
	CAUSE
	=====
	
	DoubleSpace creates an activation line for removable media (so they are
	available at boot time) if the media is 5 megabytes (MB) or larger. This design
	allows DoubleSpace to support bootable removable hard disk drives.
	
	RESOLUTION
	==========
	
	If you want to have compressed removable media (smaller than 5 MB) available at
	boot time, you can edit the DBLSPACE.INI file and add a ActivateDrive line. To
	do this:
	
	1. Type "dblspace /list" (without the quotation marks) at the MS-DOS command
	  prompt (and then press ENTER) to determine which drives are available for
	  DoubleSpace. Make a note of these drive letters.
	
	  NOTE: If no drive letters are available, use the DBLSPACE /LASTDRIVE command
	  to increase the last drive letter available to DoubleSpace and then restart
	  your computer.
	
	2. Change to drive C. If drive C is compressed, change to the host drive for C.
	
	  To determine which drive is your host drive, type "dblspace /list" (without
	  the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	3. Use the ATTRIB command to change the file attributes on the DBLSPACE.INI
	  file. For example:
	
	     attrib \dblspace.ini -s -h -r
	
	4. Edit the DBLSPACE.INI file with a text editor, such as MS-DOS Editor.
	
	5. Add the ActivateDrive line for your removable media drive as follows:
	
	     ActivateDrive=<host>,<removable media>0
	
	  Use one of the drive letters you identified as available for DoubleSpace in
	  step 1 for <host>. Use the drive letter of your removable media for
	  <removable media>. The last value is a zero (0). For example:
	
	     ActivateDrive=G,B0
	
	6. Save the file and exit the text editor.
	
	7. Ensure that the media is in the removable media drive and restart your
	  computer.
	
	Additional query words: 6.20 floptical
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
