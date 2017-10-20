---
layout: page
title: "Q123612: Support for CD-ROM Changers in Windows 95"
permalink: /kb/123/Q123612/
---

## Q123612: Support for CD-ROM Changers in Windows 95

{% raw %}

	Article: Q123612
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows 95 supports the use of CD-ROM changers (also known as
	jukeboxes). Although the protected-mode CD-ROM drivers should allow you access
	to your CD-ROM changer, the real-mode CD-ROM drivers are likely to be more
	reliable.
	
	MORE INFORMATION
	================
	
	The reason real-mode drivers may be more reliable is because the CD-ROM File
	System (CDFS) virtual device drivers (VxDs), such as Volume Tracker
	(VOLTRACK.VXD), need to know whether each CD is accessible at boot. Each time a
	shell operation queries the system (for example, whenever you run My Computer or
	Explorer), you experience a time delay. The length of this delay depends on the
	number of CDs in the changer.
	
	To work around this delay, you can set up a large CD-ROM cache. This is helpful
	only if you have large amounts of physical RAM. Please note that your cache may
	be used by something else, thus causing the CD shuffling to be slow anyway.
	Another workaround is to use the real-mode drivers.
	
	If you are uncertain whether your CD-ROM is using real- or protected-mode
	drivers, check the Properties of the CD-ROM drive through My Computer. If the
	Capacity value of the CD is 127 MB, you are probably using real-mode drivers. If
	the Capacity value is an actual value (such as 370.9 MB), you are probably using
	protected-mode drivers. The Microsoft CD-ROM Extensions (MSCDEX) driver shows a
	capacity of 127 MB while in Windows regardless of the actual capacity. Also, if
	you are loading a CD-ROM driver in your CONFIG.SYS file and MSCDEX in your
	AUTOEXEC.BAT file, you are using real- mode drivers.
	
	
	NOTE: Another issue experienced with CD-ROM changers is that a drive letter is
	used for each CD. This limits the number of network drives you can have.
	
	
	Additional query words: 3rdparty jukebox winnt w95hw w95hwfaq
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : Win2000:95; winnt:4.0
	
	=============================================================================
	

{% endraw %}
