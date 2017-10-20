---
layout: page
title: "Q95575: How Windows Handles Bad Permanent Swap Files"
permalink: /kb/095/Q95575/
---

## Q95575: How Windows Handles Bad Permanent Swap Files

{% raw %}

	Article: Q95575
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbusage kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the process Windows follows to find or re-create an
	existing permanent swap file if a swap file problem is detected.
	
	The swap file is an element of the memory management services Windows provides.
	It is used to swap application code and data that is not being used from RAM to
	the hard disk. In this manner, Windows can provide more memory to your
	applications than is physically installed on your computer.
	
	MORE INFORMATION
	================
	
	After you type "win" (without the quotation marks) at the MS-DOS prompt, Windows
	reads the SYSTEM.INI file for various startup information, including the size,
	type and whereabouts of the swap file. If Windows finds a reference to a swap
	file, it looks for it (386SPART.PAR) on the hard disk.
	
	If 386SPART.PAR is the wrong size (zero bytes, for example), Windows (WIN386.EXE)
	deletes and recreates 386SPART.PAR. If 386SPART.PAR does not exist at all, the
	following error message is displayed on a blue screen:
	
	  Corrupt Swap-File Warning
	
	This error message asks if you would like to delete the corrupted swap file. If
	you choose No, Windows does not attempt to correct the bad permanent swap file,
	and starts normally. Until you choose Yes, every time you start Windows, you
	will receive this error message.
	
	If you choose Yes, the next time you start Windows, CPWIN386.CPL (the 386
	Enhanced portion of Control Panel) is used to create a new swap file. If the
	permanent swap file is created successfully, no further problems occur and all
	the settings in your Windows configuration should be the same as they were
	before you had swap file problems.
	
	If Windows cannot find CPWIN386.CPL or if there is a problem with the file, the
	following error message is displayed:
	
	  The CPWIN386.CPL utility could not be run. Either CPWIN386.CPL could not be
	  found, an access error occurred on the file, or there was insufficient memory
	  to run the utility. The permanent swap file can not be set up.
	
	If you receive this error message, make sure the file, CPWIN386.CPL, is in your
	SYSTEM subdirectory.
	
	If CPWIN386.CPL loads successfully but fails to create a permanent swap file, the
	following error message is displayed:
	
	  The CPWIN386 utility was not able to set up the permanent swap file.
	
	This error message could be caused by insufficient disk space or other problems
	that normally prevent permanent swap file creation.
	
	For more information about creating a permanent swap file, query on the following
	words in the Microsoft Knowledge Base:
	
	  permanent and swap and kbtshoot
	
	Additional query words: tshoot 3.00 3.00a 3.10 3.11 unsuccessful change swap file err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
