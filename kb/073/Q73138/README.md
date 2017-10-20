---
layout: page
title: "Q73138: Loading Lotus 1-2-3 Files Using File Associate from Windows"
permalink: /kb/073/Q73138/
---

## Q73138: Loading Lotus 1-2-3 Files Using File Associate from Windows

{% raw %}

	Article: Q73138
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot load files directly into Lotus 1-2-3 versions 3.0 and 3.1 using the
	File Associate command in Windows File Manager.
	
	MORE INFORMATION
	================
	
	Some applications accept command line parameters to load a specific file. For
	example, typing
	
	  c:>word test.doc
	
	loads a document file named TEST into Microsoft Word.
	
	Lotus 1-2-3 versions 3.0 and 3.1 do not support filenames as a command line
	parameter to load files directly. Attempting to load a file called TEST.WK3 into
	Lotus 1-2-3 version 3.0 or 3.1 by typing
	
	  c:>123 test.wk3
	
	produces the following error:
	
	  Cannot load DCF file-run Install
	
	A similar MS-DOS-based error occurs if you attempt to load .WK3 files from
	Windows File Manager using the File Associate Command. This is a limitation of
	Lotus 1-2-3 versions 3.0 and 3.1 and is not a Windows problem.
	
	Lotus works around this problem with the use of a 123.BAT batch file and an
	AUTO123.WK3 auto-execute macro. The 123.BAT file creates a text file with the
	name and path of the file to be loaded and then loads 123.EXE. The AUTO123.WK3
	file reads the filename and path information from the text file and loads the
	desired file.
	
	In Windows File Manager, the File Associate command associates .WK3 files with
	123.BAT instead of 123.EXE.
	
	Specific information on the creation of the 123.BAT file and the AUTO123.WK3 is
	available from Lotus in a technical note called "Loading a 123 3.0 File from the
	Command Line".
	
	For more information, contact Lotus technical support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
