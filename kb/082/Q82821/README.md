---
layout: page
title: "Q82821: Registration Info Editor (REGEDIT) Command-Line Switches"
permalink: /kb/082/Q82821/
---

## Q82821: Registration Info Editor (REGEDIT) Command-Line Switches

{% raw %}

	Article: Q82821
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbenv kbole
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows operating system version 3.1 Registration Information
	Editor (REGEDIT.EXE) can help to set up shell (for example, Program Manager) and
	OLE information, but the only documentation for REGEDIT.EXE is in the Windows
	Help files, REGEDIT.HLP and REGEDITV.HLP. This article describes the
	command-line switches for REGEDIT.EXE.
	
	MORE INFORMATION
	================
	
	Syntax for REGEDIT.EXE
	----------------------
	
	  REGEDIT [/v|-v] [/s|-s] <FILENAME>
	
	<FILENAME>
	----------
	
	This is a .REG-formatted file, which can be produced with the Save Registration
	File command in the File menu of REGEDIT.EXE in advanced mode.
	
	[/v|-v]
	-------
	
	This switch opens REGEDIT.EXE in advanced mode, where the registration database
	is displayed in a tree structure (similar to the tree window in Windows 3.1 File
	Manager). Any part of the database can be edited.
	
	[/s|-s]
	-------
	
	When a filename is specified on the command line, this switch is used to suppress
	any informational dialog boxes that would normally be displayed. This is useful
	when the Setup program for an application wants to execute REGEDIT.EXE with a
	.REG file, but does not want the user to be confused by any dialog boxes that
	are displayed.
	
	Syntax for Switches
	-------------------
	
	Either "/" or "-" can be used to signify the optional switches. The switches can
	be combined (for example, -vs) and be typed in either uppercase or lowercase.
	Unrecognized switches are ignored.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
