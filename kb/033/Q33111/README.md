---
layout: page
title: "Q33111: Loading and Using COMMAND.COM from a RAMDrive"
permalink: /kb/033/Q33111/
---

## Q33111: Loading and Using COMMAND.COM from a RAMDrive

	Article: Q33111
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When some programs exit, or shell out to MS-DOS, they need to reload the command
	interpreter, COMMAND.COM. To make the process of reloading the command
	interpreter more efficient, you can place COMMAND.COM on a RAMDrive. To do this,
	follow these steps:
	
	1. In your AUTOEXEC.BAT batch file, copy the file COMMAND.COM to the RAMDrive.
	
	2. Set the COMSPEC environment variable to point to the copy of COMMAND.COM on
	  the RAMDrive.
	
	3. Set the PATH environment variable to include COMMAND.COM's location on the
	  RAMDrive.
	
	MORE INFORMATION
	================
	
	The following is an example of copying COMMAND.COM to a RAMDrive called E:
	
	  COPY C:\COMMAND.COM E:\ 
	  SET COMSPEC=E:\COMMAND.COM
	  SET PATH=E:\;...  <---  Fill in the rest of your PATH
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
