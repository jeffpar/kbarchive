---
layout: page
title: "Q77456: NET5.COM Requires /C= Switch to Use SHELL.CFG"
permalink: /kb/077/Q77456/
---

## Q77456: NET5.COM Requires /C= Switch to Use SHELL.CFG

{% raw %}

	Article: Q77456
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS version 5.0 requires an upgraded NET5.COM file to operate
	correctly on a Novell network. Parameters for the NET5.COM file are stored in a
	SHELL.CFG or NET.CFG file.
	
	This non-formatted text file created by the user or network administrator could
	include options for preferred server=, File Handles=, and Show Dots=. The
	SHELL.CFG or NET.CFG file will not be recognized with NET5.COM unless the
	program switch /C is added to the end of the NET5.COM command line.
	
	MORE INFORMATION
	================
	
	In previous versions, the SHELL.CFG or NET.CFG file would be read automatically
	if found in the same directory as NET3.COM or NET4.COM file when executed. To
	have NET5.COM use the SHELL.CFG or NET.CFG file, it requires the program switch
	
	  /C=[path\]<filename.ext>
	
	on the command line (where [path\] is the drive and directory location, and
	<filename.ext> is the specified filename).
	
	Example
	-------
	
	  NET5 /C=C:\Novell\Shell.CFG
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	"Getting Started: Supervisor's Guide"
	
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
