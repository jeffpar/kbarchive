---
layout: page
title: "Q103535: Cannot Manually Mount Fragmented DoubleSpace-Compressed Drive"
permalink: /kb/103/Q103535/
---

## Q103535: Cannot Manually Mount Fragmented DoubleSpace-Compressed Drive

	Article: Q103535
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If DoubleSpace cannot mount a compressed volume file (CVF) at startup because
	the CVF is too fragmented, DoubleSpace increases the MaxFileFragments setting in
	the DBLSPACE.INI file and restarts your computer.
	
	However, when you try to manually mount a DoubleSpace-compressed drive (from the
	command line or using the DoubleSpace maintenance program), DoubleSpace does not
	mount the CVF if it is too fragmented.
	
	RESOLUTION
	==========
	
	To work around this situation, use the DBLSPACE /MAXFILEFRAGMENTS command to
	increase the MaxFileFragments setting in your DBLSPACE.INI file. To do this:
	
	1. Use the TYPE command to view the current DBLSPACE.INI settings. For example:
	
	  type h:\dblspace.ini
	
	  NOTE: The DBLSPACE.INI file is hidden in the root directory of the host drive.
	  To find the host drive for your DoubleSpace-compressed drive, type "dblspace
	  /list" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	2. Increase the MaxFileFragments setting by at least 1000. For example, if the
	  current setting is 1000, type the following at the MS-DOS command prompt, and
	  then press ENTER:
	
	  " dblspace /maxfilefragments=2000" (without the quotation marks)
	
	3. Press CTRL+ALT+DEL to restart your computer.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
