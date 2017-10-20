---
layout: page
title: "Q85963: Lotus 1-2-3 for Windows Allows Spaces in Filenames"
permalink: /kb/085/Q85963/
---

## Q85963: Lotus 1-2-3 for Windows Allows Spaces in Filenames

{% raw %}

	Article: Q85963
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lotus Development Corporation has confirmed that 1-2-3 for Windows allows you to
	save a file with a space in the filename. However, File Manager cannot work with
	these files because they do not follow MS-DOS guidelines on filenames.
	
	An error message will be displayed if one of these files is manipulated in File
	Manager.
	
	MORE INFORMATION
	================
	
	File Manager operations cannot be used on a file that does not follow MS-DOS
	guidelines for filenames. Deleting a file with a space, for example "MY
	FILE.WK1", may give the following error message:
	
	  Cannot delete file C:\123W\MY_FILE.WK1: Cannot find file. Make sure the
	  correct path and filename are specified.
	
	A similar error message may appear in File Manager if the file is renamed or
	copied.
	
	MS-DOS requires that a filename not contain a space, comma, backslash, or period
	(except the period that separates the name from the extension). A complete list
	of MS-DOS filename restrictions can be found on page 69 of the "Microsoft MS-DOS
	User's Guide and Reference" version 5.0 manual.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
