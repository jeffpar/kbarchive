---
layout: page
title: "Q84351: Windows Resource Kit 3.1 Adds Info Command to File Manager"
permalink: /kb/084/Q84351/
---

## Q84351: Windows Resource Kit 3.1 Adds Info Command to File Manager

{% raw %}

	Article: Q84351
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Resource Kit version 3.1 adds the Info command to the menu bar in
	the Windows operating system version 3.1 File Manager. Other applications may
	also add additional options to the File Manager through the [AddOns] section of
	WINFILE.INI.
	
	MORE INFORMATION
	================
	
	When Info is chosen in File Manager, there are three options:
	
	1. Show File Size Information: This option displays the total file size for
	  selected files and subdirectories. For example, selecting a directory in File
	  Manager, choosing Info, then selecting Show File Size Information shows
	  information similar to the following:
	
	  The specified selection contains...
	
	  Number of Files: 170
	  Number of directories: 3
	  Total File Size: 6,672 bytes
	
	2. Display Bytes As KB: This option displays in kilobytes the total file size
	  displayed in the Show File Size Information option. The file size is
	  displayed in kilobytes instead of bytes, as in the above example.
	
	3. About File Size Information: This option gives limited information about the
	  utility.
	
	When the Windows Resource Kit is installed, the following changes are made to the
	[AddOns] section of the WINFILE.INI file to allow the Info command to be
	available in File Manager:
	
	     [AddOns]
	     File Size Extension=C:\WINDOWS\FILESIZE.DLL
	
	For more information on File Manager extension DLLs (dynamic link libraries),
	query on the following words:
	
	  Windows and DLL and add-ons
	
	Additional query words: 3.10 3.11 info windows resource kit file manager wrk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
