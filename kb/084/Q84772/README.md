---
layout: page
title: "Q84772: WRK Err Msg: One of the Library Files Needed to Run This..."
permalink: /kb/084/Q84772/
---

## Q84772: WRK Err Msg: One of the Library Files Needed to Run This...

{% raw %}

	Article: Q84772
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error may occur when you try to run the Graphics Viewer, Network
	Assistant, and TopDesk Tour from the Microsoft Windows Resource Kit for
	operating system version 3.1:
	
	  Application Execution Error One of the library files needed to run this
	  application is damaged. Please reinstall the application.
	
	MORE INFORMATION
	================
	
	The error message will occur if the VBRUN100.DLL file is corrupted. The
	VBRUN100.DLL file is the Visual Basic run-time dynamic-link library (DLL)
	required to run programs written in Visual Basic.
	
	The correct file size and date for the VBRUN100.DLL file from the Windows
	Resource Kit is 271264 bytes and 11-25-91, respectively. The VBRUN100.DLL file
	can be found in the WRK directory on the Windows Resource Kit 3.1 disk and is
	named VBRUN100.DL$ (compressed file). Both the 3.5-inch and 5.25-inch versions
	of the Windows Resource Kit 3.1 contain only one disk labeled Setup and
	Utilities.
	
	To uncompress the VBRUN100.DLL file, first copy the DECOMP.EXE file from the root
	directory of the Windows Resource Kit disk. Then use the DECOMP.EXE program to
	uncompress the VBRUN100.DLL file.
	
	Steps to Uncompress VBRUN100.DLL
	--------------------------------
	
	The following steps will uncompress the VBRUN100.DLL file and allow the Graphics
	Viewer, Network Assistant, and TopDesk Tour to run properly:
	
	1. Copy the DECOMP.EXE file from the source drive to the Windows 3.1 directory.
	  For example, type the following:
	
	  copy a:\decomp.exe c:\windows
	
	2. Change directories to the Windows 3.1 directory. For example, type the
	  following:
	
	  cd \windows
	
	3. Type the following command:
	
	  decomp vbrun100.dl$ vbrun100.dll
	
	Additional query words: 3.10 3.11 dynalink dynamic linked link
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
