---
layout: page
title: "Q69581: Updating the Date and Time Stamps on Files"
permalink: /kb/069/Q69581/
---

## Q69581: Updating the Date and Time Stamps on Files

{% raw %}

	Article: Q69581
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
	
	The following MS-DOS command updates the date and time stamps of a file named
	"EXAMPLE" without altering the contents of the file. This is similar to the
	TOUCH utility found in XENIX and in some third-party MS-DOS toolkits.
	
	  COPY /B EXAMPLE +,,
	
	MORE INFORMATION
	================
	
	The COPY command can concatenate a file onto an existing file when used in the
	form:
	
	  COPY FILE1+FILE2
	
	In this example, the contents of FILE2 are appended to FILE1, leaving FILE2
	unchanged. When copying in this mode, the COPY command switches to ASCII mode
	where the ^Z (0x01A) end-of-file marker is honored.
	
	Therefore, with the above command, the /b forces the COPY command into binary
	mode, the filename is the file to be updated, the + (plus sign) indicates that a
	file is to be appended, and the ,, (commas) are placeholders for the remaining
	parameters (which are not included in this example). Because the file to be
	appended is not specified, the COPY command will append nothing and only update
	the time and date stamps for the file.
	
	The following batch file, TOUCH.BAT, can be used to automate the process:
	
	  @echo off
	  if %1.==. goto end
	  if not exist %1 goto end
	  copy /b %1 +,, > nul
	  echo %1 touched!
	  :end
	
	This batch file requires one parameter, the file to be "touched." If the
	parameter is not supplied, line 2 will cause the batch file to exit without
	doing anything. If the specified file does not exist, line 3 will cause the
	batch file to exit also.
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 stamp
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
