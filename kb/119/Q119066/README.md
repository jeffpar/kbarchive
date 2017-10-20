---
layout: page
title: "Q119066: BOOTLOG.TXT Failure Codes"
permalink: /kb/119/Q119066/
---

## Q119066: BOOTLOG.TXT Failure Codes

{% raw %}

	Article: Q119066
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbsetup kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create a BOOTLOG.TXT file by typing "win /b" (without the quotation
	marks) when you are troubleshooting problems starting Windows or Windows for
	Workgroups. The /B switch creates the file in the Windows directory. You can
	view BOOTLOG.TXT in a text editor, such as Windows Notepad. This file includes a
	list of the basic Windows drivers as they are loaded. If there is a problem
	loading a driver, a statement appears in the BOOTLOG.TXT file indicating which
	driver could not load.
	
	NOTE: This switch appends new information to the end of an existing BOOTLOG.TXT
	file. Therefore, you may want to rename or delete any existing BOOTLOG.TXT file
	in the Windows directory before using the /B switch.
	
	MORE INFORMATION
	================
	
	In BOOTLOG.TXT, a line reporting a loading failure appears as follows
	
	  LoadFail = <xxxxxxx.xxx> Failure code is <##>
	
	where <xxxxxxx.xxx> is the name of the device that failed to load, and
	<##> is the numeric failure code.
	
	The following is a list of failure codes that may appear in the BOOTLOG.TXT file
	and their corresponding descriptions:
	
	  Code  Description
	  -----------------
	
	   0     Out of memory
	   2     File not found
	   3     Path not found
	   5     Attempt to dynamically link to a task
	   6     Library requires separate data segments for each task
	   8     Insufficient memory to start application
	  10     Incorrect Windows version
	  11     Invalid .EXE file (non-Windows .EXE file or error in .EXE file
	         image)
	  12     OS/2 application
	  13     MS-DOS 4.0 application
	  14     Unknown .EXE file type
	  15     Attempt in protected (standard or 386 enhanced) mode to load an
	         .EXE file created for an earlier version of Windows
	  16     Attempt to load a second instance of an .EXE file containing
	         multiple writeable data segments
	  17     Attempt in a large-frame EMS mode to load a second instance
	         of an application that links to certain nonshareable DLLs already
	         in use
	  18     Attempt in real mode to load an application marked for protected
	         mode only
	
	Additional query words: error code 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
