---
layout: page
title: "Q84682: Microcom's Carbon Copy for Windows and Windows 3.1"
permalink: /kb/084/Q84682/
---

## Q84682: Microcom's Carbon Copy for Windows and Windows 3.1

{% raw %}

	Article: Q84682
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running version 1.0 of Microcom's Carbon Copy for Windows with
	Microsoft Windows version 3.1, you need to obtain the 1.0b upgrade patch to
	avoid Setup problems and to use all of the features of Windows 3.1, such as new
	video and sound drivers. This patch is available from Microcom Technical
	Support.
	
	
	MORE INFORMATION
	================
	
	If Microcom's Carbon Copy for Windows is installed, Setup may fail when you
	upgrade from Windows 3.0 to Windows 3.1 because of modifications made to several
	entries in the SYSTEM.INI file.
	
	This problem does not occur with the version 1.0b patch.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. At the MS-DOS command prompt, rename the SYSTEM.INI file to SYSTEM.XXX by
	  typing the following:
	
	  REN SYSTEM.INI SYSTEM.XXX
	
	2. At the MS-DOS command prompt, rename the SYSTEM.CCW file to SYSTEM.INI by
	  typing the following:
	
	  REN SYSTEM.CCW SYSTEM.INI
	
	3. Install Windows.
	
	4. Reinstall Carbon Copy for Windows.
	
	This problem does not occur with the version 1.0b patch.
	
	Carbon Copy for Windows is manufactured by Microcom, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 3rdparty remote hang fail lock third party
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
