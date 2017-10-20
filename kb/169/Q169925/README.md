---
layout: page
title: "Q169925: Cannot Delete, Rename, or Move 386spart.par File"
permalink: /kb/169/Q169925/
---

## Q169925: Cannot Delete, Rename, or Move 386spart.par File

{% raw %}

	Article: Q169925
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to delete, rename, or move the 386spart.par file.
	
	CAUSE
	=====
	
	The previous version of Windows installed on your computer used a permanent swap
	file named 386spart.par. This file is often retained when you upgrade to Windows
	95.
	
	RESOLUTION
	==========
	
	To delete the 386spart.par file and allow Windows 95 to use a dynamic swap file,
	follow these steps:
	
	1. Restart the computer. Press the F8 key when you see the "Starting Windows 95"
	  message, and then choose Safe Mode Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type the following lines, pressing ENTER after each
	  line:
	
	  " cd windows
	  edit system.ini " (without the quotation marks)
	
	3. Disable any of the following lines you find in the [386Enh] section by
	  placing a semicolon (;) at the beginning of the line:
	
	  " Pagingfile=<drive>386spart.par
	  PermSwapDOSDrive=C
	  PermSwapSizeK=<kilobytes> " (without the quotation marks)
	
	  Make sure to note the drive specified for the "Pagingfile=" line.
	
	4. Save and then close the System.ini file.
	
	5. Type the following lines, pressing ENTER after each line:
	
	  " cd\
	  deltree 386spart.par " (without the quotation marks)
	
	  NOTE: If the 386spart.par file is located on a different drive from the
	  Windows folder, first change to the drive specified on the "Pagingfile=" line
	  by typing the following line and then pressing ENTER
	
	  " <drive>: " (without the quotation marks)
	
	  where <drive>: is the drive letter. Then, type the two lines above.
	
	6. Restart your computer normally.
	
	When you restart the computer, Windows 95 creates and uses the standard Windows
	95 swap file, which is dynamic.
	
	To rename or move the 386spart.par file, follow these steps:
	
	1. Restart the computer. Press the F8 key when you see the "Starting Windows 95"
	  message, and then choose Safe Mode Command Prompt Only from the Startup menu.
	
	2. At the command prompt, if the 386spart.par file is located on a drive other
	  than drive C, type the following line and then press ENTER
	
	  " <drive>: " (without the quotation marks)
	
	  where <drive>: is the drive on which the 386spart.par file is located.
	
	3. Type the following line, and then press ENTER:
	
	  " attrib -r -h -s 386spart.par " (without the quotation marks)
	
	4. To rename or move the 386spart.par file, use the appropriate method:
	
	Rename
	------
	
	To rename the 386spart.par file, type the following line, and then press ENTER:
	
	  " ren 386spart.par 386spart.paa " (without the quotation marks)
	
	NOTE: This command assumes you do not have a file named 386spart.paa. If you do
	have a file named 386spart.paa, select a file name extension that is not
	currently in use.
	
	Move
	----
	
	To move the 386spart.par file, type the following line, and press then ENTER
	
	  " move 386spart.par <drive>: <path>\<filename> " (without
	  the quotation marks)
	
	where <drive>: is the drive on which the 386spart.par file is located.
	
	MORE INFORMATION
	================
	
	The 386spart.par file is the Windows 3.x permanent swap file. The 386spart.par
	file has a fixed size and must occupy contiguous clusters at a fixed location on
	the drive. The Spart.par file located in the Windows folder is the pointer file
	that tells Windows on which drive the 386spart.par file is located and how large
	it is. These two files provide virtual memory for Windows 3.x, which can be
	inherited by Windows 95 when you upgrade.
	
	The default Windows 95 swap file (Win386.swp) is located in the Windows folder
	and can be non-contiguous. The Win386.swp file size changes dynamically with the
	demands from the system. Windows 95 creates this file at startup if the file is
	not found.
	
	When you upgrade a Windows 3.x installation that uses a permanent swap file,
	Windows 95 may use the existing 386spart.par file as its swap file instead of
	creating the Win386.swp file. When Windows 95 uses the 386spart.par file, the
	file can grow in size if the system requires more virtual memory, but it can
	never shrink below the size defined by the "PermSwapSizeK=" line.
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
