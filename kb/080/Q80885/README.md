---
layout: page
title: "Q80885: Groups Are Missing in Windows Upon Startup"
permalink: /kb/080/Q80885/
---

## Q80885: Groups Are Missing in Windows Upon Startup

{% raw %}

	Article: Q80885
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An invalid PATH= statement in the AUTOEXEC.BAT file may result in the
	inaccessibility of the Microsoft Windows groups within Program Manager. This
	occurs when you start Windows from the root directory, but does not occur when
	you start Windows from the WINDOWS directory.
	
	To prevent this, verify that the PATH= line syntax is correct.
	
	MORE INFORMATION
	================
	
	If the path is set as follows, the groups within Program Manager will be
	inaccessible
	
	       PATH=C:WINDOWS
	
	where C is the drive and WINDOWS is the directory in which Windows 3.0 resides.
	
	To allow access to the groups within Program Manager, verify that the path
	statement reads as follows:
	
	       PATH=C:\WINDOWS
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  Program and Manager and PROGMAN.INI
	
	Additional query words: 3.00 3.00a Groups Path 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
