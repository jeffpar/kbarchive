---
layout: page
title: "Q82072: Third-Party Applications May Need to Be Reinstalled"
permalink: /kb/082/Q82072/
---

## Q82072: Third-Party Applications May Need to Be Reinstalled

{% raw %}

	Article: Q82072
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some third-party, or independent software vendors (ISV), applications do not
	function correctly in Microsoft Windows version 3.1 if they were installed with
	an existing copy of Windows 3.0 on the hard drive and then Windows 3.10 was
	installed into a separate directory.
	
	Many applications modify the Windows WIN.INI file and other data files and copy
	their own .INIs, .DLLs, EXEs and other files into the current WINDOWS or SYSTEM
	directories when they install. The new installation of Windows isn't aware of
	any of these modifications and may not be able to run the existing applications.
	
	MORE INFORMATION
	================
	
	Follow these steps to solve the problem:
	
	1. Back up your current Windows 3.0 directory and subdirectories (SYSTEM, MSAPPS
	  and others).
	
	2. Install Windows 3.1 into the same directory as Windows 3.0 in order to update
	  the existing version of Windows to version 3.1.
	
	  -or-
	
	3. Reinstall third-party applications for the Windows 3.1 directory.
	
	4. During the installation of these applications make sure that they use the
	  same directories as were used in their original installation.
	
	  For example, if Wingz was original installed in a directory called C:\WINGZ,
	  then during the reinstallation choose that directory.
	
	Additional query words: 3.10 ISV break 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
