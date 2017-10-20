---
layout: page
title: "Q60716: Reading Data from the Communications Port to a File"
permalink: /kb/060/Q60716/
---

## Q60716: Reading Data from the Communications Port to a File

{% raw %}

	Article: Q60716
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using Microsoft MS-DOS Packaged Product Versions 3.x, 4.x, and 5.0, you can
	capture data from a communications port to a file by using any of the following
	commands:
	
	  COPY COMn: /A <file>
	  COPY COMn: <file> /A
	  COPY COMn: <file>
	
	An end-of-file (EOF) character (CTRL+Z or ASCII 26) is used to mark the end of
	the file. The file will have a terminating EOF character only if you use the /A
	switch of the COPY command.
	
	If you use the /B switch for the COPY command, the message "Cannot do binary
	reads from a device" is displayed, and COPY terminates.
	
	While the file is being transmitted, spurious characters may be captured before
	the start of the data stream, due to the asynchronous nature of the COPY
	command. It is your responsibility to ensure that the data is checked for
	usability.
	
	
	Additional query words: 3.x 4.00 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.x,4.x,5.0
	
	=============================================================================
	

{% endraw %}
