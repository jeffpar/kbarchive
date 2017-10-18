---
layout: page
title: "Q89832: Clipboard Files Don't Display at a Different Resolution"
permalink: kb/089/Q89832/
---

## Q89832: Clipboard Files Don't Display at a Different Resolution

	Article: Q89832
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Clipboard files (*.CLP) are saved, they are dependent on the number of
	colors the video driver can support. Files that are saved with Clipboard using
	Windows 3.1 open correctly only if the video driver being used supports the same
	number of colors as it did when the files were saved.
	
	MORE INFORMATION
	================
	
	Clipboard files can be created by choosing Save from the File menu in Microsoft
	Windows Clipboard. If you are using a 16-color video driver and save a .CLP
	file, it will open correctly, only on a system with a video driver that supports
	16 colors. The video driver resolution (640 x 480, 800 x 600, 1024 x 768) does
	not matter. Clipboard files created using a video driver that supports a greater
	number of colors, such as 256, only opens on a system that supports that same
	number of colors.
	
	If you attempt to open a .CLP file that was saved with more colors than the
	current video driver supports, the image may not appear. Attempting to paste the
	invisible image to another application may result in corrupted input.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Change the video driver to support the same number of colors as the .CLP
	  file.
	
	  -or-
	
	- Use another application to transfer the data, such as Paintbrush, which uses
	  bitmap (.BMP) format, or Notepad, which uses text (.TXT) format.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
