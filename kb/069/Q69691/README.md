---
layout: page
title: "Q69691: Using Lotus 1-2-3 Release 3.1 with Windows"
permalink: /kb/069/Q69691/
---

## Q69691: Using Lotus 1-2-3 Release 3.1 with Windows

{% raw %}

	Article: Q69691
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set aside virtual memory for Lotus 1-2-3 to use when running under Microsoft
	Windows in enhanced mode, add the following line to the AUTOEXEC.BAT file
	
	  SET 123MEMSIZE=<m>
	
	where <m> is the amount of memory in kilobytes you want Windows to allocate
	for Lotus 1-2-3.
	
	MORE INFORMATION
	================
	
	When you install Lotus 1-2-3 release 3.1, a PIF file called 123.PIF is copied
	into the directory in which Lotus resides. If you do not install Lotus into the
	default directory (C:\123R3), you must change the path in the Program Filename
	entry in the 123.PIF file to the path specified when you installed Lotus.
	
	If you have problems with an invalid path error, make sure the correct path to
	the Lotus directory has been added to the path statement in the AUTOEXEC.BAT.
	
	The Lotus product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	REFERENCES
	==========
	
	"Lotus 1-2-3 Release 3.1 Setting Up," chapter 2, "Preparing to Use 1-2-3."
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11 xms expanded 123 1 2 3 ems extended 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
