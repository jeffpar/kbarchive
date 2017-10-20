---
layout: page
title: "Q74046: Setver /? &#91;Drive:Path&#93; Refers to SETVER, Not Executable"
permalink: /kb/074/Q74046/
---

## Q74046: Setver /? &#91;Drive:Path&#93; Refers to SETVER, Not Executable

{% raw %}

	Article: Q74046
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The syntax for the SETVER command is as follows:
	
	  setver [drive:path] filename version
	
	Where [drive:path] refers to the drive and the path of SETVER, not the filename
	that will follow it. When using the SETVER /? help menu, this syntax is not at
	first apparent. The following example adds the file C:\PROGRAM.EXE:
	
	  setver c:\dos c:\program.exe 4.01
	
	MORE INFORMATION
	================
	
	SETVER may return the error:
	
	  ERROR: Missing parameter.
	
	  Use "SETVER /?" for help
	
	Typing "setver /?" (without the quotation marks) at the DOS prompt will give the
	following help screen:
	
	Sets the version number that MS-DOS reports to a program.
	
	Display current
	version table:      SETVER [drive:path]
	Add entry:          SETVER [drive:path] filename n.nn
	Delete entry:       SETVER [drive:path] filename /DELETE [/QUIET]
	
	 [drive:path]      Specifies location of the SETVER.EXE file.
	 filename          Specifies the filename of the program.
	 n.nn              Specifies the MS-DOS version to be reported to the 
	                   program.
	
	 /DELETE or /D     Deletes the version-table entry for the specified
	                   program.
	
	 /QUIET            Hides the message typically displayed during
	                   deletion of version-table entry.
	
	Additional query words: 6.22 5.x 6.00 6.20 online help
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
