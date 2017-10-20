---
layout: page
title: "Q60317: Cannot Associate to a File with No Extension"
permalink: /kb/060/Q60317/
---

## Q60317: Cannot Associate to a File with No Extension

{% raw %}

	Article: Q60317
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows File Manager, you cannot associate an application with a
	file that has no extension (by choosing Associate from the File menu). This
	behavior is by design. The Associate command associates an extension to a
	particular program. If there is no extension, there can be no association.
	
	MORE INFORMATION
	================
	
	A common use of the Associate command is to associate the WIN.INI file to
	Notepad (NOTEPAD.EXE). Use the following procedure to do this:
	
	1. In the File Manager, select WIN.INI.
	
	2. Choose Associate from the File menu.
	
	3. If you are running Windows 3.1, select Text File (notepad.exe) from the
	  Associate With list box. If you are running Windows 3.0 or 3.0a, type
	  "notepad.exe" (without the quotation marks) in the Associate dialog box.
	  Choose the OK button.
	
	The next time a file with the INI extension is executed, it will be loaded into
	Notepad.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11 win30 win31 wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
