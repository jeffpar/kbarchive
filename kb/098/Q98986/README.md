---
layout: page
title: "Q98986: Microsoft Diagnostics (MSD) Does Not Print DBLSPACE.INI File"
permalink: kb/098/Q98986/
---

## Q98986: Microsoft Diagnostics (MSD) Does Not Print DBLSPACE.INI File

	Article: Q98986
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Diagnostics (MSD) utility provided with MS-DOS 6.0 does not print
	the DBLSPACE.INI file when you choose Print Report from the File menu. However,
	you can get MSD to print the DBLSPACE.INI file if you clear the System and
	Hidden file attributes on this file.
	
	MORE INFORMATION
	================
	
	MSD is a utility for obtaining system information such as:
	
	- BIOS brand and date
	
	- Memory configuration
	
	- .INI file information (including DBLSPACE.INI)
	
	When you choose Print Report from the File menu, you can select Report All to
	print all information available from MSD except the DBLSPACE.INI file.
	
	Workaround
	----------
	
	You can get MSD to print the DBLSPACE.INI file by clearing the System and Hidden
	file attributes on DBLSPACE.INI. To do this, use the following steps:
	
	1. The DBLSPACE.INI file is located on the host drive for your
	  DoubleSpace-compressed drive. To find the DBLSPACE.INI file, type "dblspace
	  /list" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	2. Clear the System and Hidden file attributes on the DBLSPACE.INI file. To do
	  this, type the following at the MS-DOS command prompt and then press ENTER:
	
	  "attrib -s -h dblspace.ini" (without the quotation marks)
	
	3. Copy the DBLSPACE.INI file to your printer. For example, if your printer is
	  connected to LPT1, type the following at the MS-DOS command prompt and then
	  press ENTER.
	
	  " copy dblspace.ini lpt1" (without the quotation marks)
	
	4. After the file has printed, reset the file attributes on the DBLSPACE.INI
	  file. To do this, type the following at the MS-DOS command prompt and then
	  press ENTER:
	
	  " attrib +s +h dblspace.ini" (without the quotation marks)
	
	Additional query words: 6.00 double space dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
