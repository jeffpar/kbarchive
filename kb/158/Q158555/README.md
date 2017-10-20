---
layout: page
title: "Q158555: Encarta 97: Windows 3.1x Won't Restart After Installation"
permalink: /kb/158/Q158555/
---

## Q158555: Encarta 97: Windows 3.1x Won't Restart After Installation

{% raw %}

	Article: Q158555
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you've installed Encarta 97 in Windows 3.x, Windows does not restart.
	
	CAUSE
	=====
	
	Some S3 video drivers conflict with the WIN32S components that Encarta 97
	installs. This prevents Windows from running correctly.
	
	WORKAROUND
	==========
	
	Edit the System.ini file and to comment out the reference to W32s.386. To edit
	the file, do the following:
	
	1. From the MS-DOS prompt, type the following and then press Enter:
	
	  "Edit C:\Windows\System.ini" (without the quotation marks)
	
	2. To comment out the line, type a semicolon in front of the following line,
	  located in the [386 enh] section of the System.ini.:
	
	        DEVICE=C:\WINDOWS\SYSTEM\WIN32S\W32S.386
	
	So that the line reads:
	
	       ;DEVICE=C:\WINDOWS\SYSTEM\WIN32S\W32S.386
	
	NOTE: This workaround allows you to get back in to Windows. To fully resolve this
	problems, obtain an updated video driver for your video card from the
	manufacturer of your video card.
	
	NOTE: If the new video driver does not correct the problem, you will need to use
	the steps above to comment out the reference to W32S.386 again.
	
	Additional query words: 1997multi media multimedia multi-media mmtitles kbmm
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbOSWin310 kbOSWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
