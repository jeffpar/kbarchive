---
layout: page
title: "Q70045: PROGMAN.INI [GROUPS] Section Requires Sequential Order"
permalink: kb/070/Q70045/
---

## Q70045: PROGMAN.INI [GROUPS] Section Requires Sequential Order

	Article: Q70045
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have group files ordered incorrectly within the [Groups] section of the
	file PROGMAN.INI, only some or no groups may appear in Program Manager.
	
	There are two possible causes why the contents of the [Groups] section in the
	PROGMAN.INI file can become invalid:
	
	1. The PROGMAN.INI file was manually modified incorrectly.
	
	2. The PROGMAN.INI file was corrupted.
	
	In PROGMAN.INI, group files (that is, "Group(number)=" statements must be in
	sequential order within the [Groups] section; however, the associated files
	("group path" statements) may appear in any order.
	
	The PROGMAN.INI file is an ASCII text file and can be viewed using Windows
	Notepad, any standard text editor, or by using the MS-DOS TYPE command at the
	command line [that is, type "type progman.ini" (without the quotation marks),
	then press ENTER].
	
	MORE INFORMATION
	================
	
	The [Groups] section contains the information necessary for Program Manager to
	locate the group files that are currently being used in Program Manager. Below
	is a list of the default [Groups] section that is created during installation
	without scanning the hard drive for existing applications:
	
	     [Groups]
	
	     Group1=C:\WINDOWS\ACCESSOR.GRP
	     Group2=C:\WINDOWS\GAMES.GRP
	     Group3=C:\WINDOWS\MAIN.GRP
	
	The following examples illustrate a valid [Groups] section, where <group
	path> represents the path to the group file:
	
	     Group1=<group path>
	     Group2=<group path>
	     Group3=<group path>
	     Group4=<group path>
	
	-or-
	
	     Group1=<group path>
	     Group3=<group path>
	     Group2=<group path>
	     Group4=<group path>
	
	The following example illustrates an invalid [Groups] section that causes the
	Main group not to appear. Note this example does NOT produce an error message
	when Windows starts.
	
	     [Groups]
	     Group1=C:\WINDOWS\ACCESSOR.GRP
	     Group2=C:\WINDOWS\GAMES.GRP
	     Group4=C:\WINDOWS\MAIN.GRP
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
