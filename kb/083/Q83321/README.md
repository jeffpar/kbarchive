---
layout: page
title: "Q83321: Some Applications Won't Print from File Manager Version 3.1"
permalink: /kb/083/Q83321/
---

## Q83321: Some Applications Won't Print from File Manager Version 3.1

{% raw %}

	Article: Q83321
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use File Manager to print from Microsoft Windows version 3.1, various
	error messages may occur if you are using accessory applications packaged with
	Windows versions 2.x, 3.0, or 3.0a (such as Calculator, Write, and so on).
	Errors are produced if you print with File Manager using either the FILE option
	or by dragging the filename and dropping it on the Print Manager desktop or
	minimized icon.
	
	MORE INFORMATION
	================
	
	File Manager uses the information stored in the registration database to both
	open and print files. The registration information editor provides information
	on how an application prints. The following Windows 3.1 applications contain
	printing method information in the registration database and use the /p option
	to print:
	
	  Calendar
	  Cardfile
	  Notepad
	  Paintbrush
	  Write
	
	Earlier versions of these Windows accessory applications do not use the /p
	switch, and therefore produce error messages or will not print when attempting
	to use File Manager to print. Install or use the Windows 3.1 programs to correct
	the problem. For example, when you print a text file in Windows 3.1 with the
	Windows 3.0 Notepad, the following message occurs:
	
	  
	
	  /P <filename> not found;
	  create a new file?
	  Yes       No
	
	Additional query words: calc 3.00 3.1 Windows/286 Windows/386
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
