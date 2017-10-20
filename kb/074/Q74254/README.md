---
layout: page
title: "Q74254: Norton's NCACHE.EXE Version 6.0 Disk Cache and Windows 3.0"
permalink: /kb/074/Q74254/
---

## Q74254: Norton's NCACHE.EXE Version 6.0 Disk Cache and Windows 3.0

{% raw %}

	Article: Q74254
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
	
	According to Symantec technical support, the Norton Cache (NCACHE.EXE) that
	comes with Norton Utilities version 6.0 is compatible with most versions of DOS,
	including IBM PC-DOS, Microsoft MS-DOS versions 3.0 through 5.0, and Digital
	Research DR-DOS 5.0. Symantec also claims compatibility with Windows 3.0 and
	Desqview versions 2.25 and later. Norton Cache must NOT be installed in a
	virtual machine, and it also cannot be loaded from within Windows 3.0.
	
	To use Norton Cache with IntelliWrites enabled (under Windows 3.0 in 386 enhanced
	mode), the following line may need to be added to the [386enh] section of the
	SYSTEM.INI file:
	
	     VirtualHDIRQ=false
	
	This will ensure that Norton Cache will perform as expected when writing data to
	disk.
	
	The following is an example of the syntax used in enabling IntelliWrites:
	
	     Device=c:\norton\ncache.exe /ext=384 c:/+I
	
	In this example, 384K of extended memory will be used and IntelliWrites has been
	enabled from drive C. There are other ways to enable Intelliwrites; for more
	information, see "The Norton Utilities User's Guide" for version 6.0.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 3rdparty win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
