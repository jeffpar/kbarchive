---
layout: page
title: "Q85949: Windows 3.1 Notepad Can Open Any File Type"
permalink: /kb/085/Q85949/
---

## Q85949: Windows 3.1 Notepad Can Open Any File Type

{% raw %}

	Article: Q85949
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows Notepad opens any file type, including executable files, and
	saves them in Notepad format. Saving a file type that Notepad does not directly
	support can make that file unreadable by its native application.
	
	MORE INFORMATION
	================
	
	Windows 3.1 Notepad was enhanced to be enable it to open files containing a
	CTRL+Z (end-of-file) character. This enhancement allows it to open any file that
	will fit in Notepad. Opening an .EXE file and saving it will make the file
	unusable because it will be in Notepad format, not in the format of an
	executable file. It may still have the same file size.
	
	Attempting to run an executable file viewed and saved from Notepad may result in
	the following error message:
	
	  Insufficient memory to run application; quit one or more applications, or
	  free up disk space to increase available memory and try again.
	
	Additional query words: 3.10 file type
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
