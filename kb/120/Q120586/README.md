---
layout: page
title: "Q120586: Encarta/Golf/MSB Ocean ErrMsg: Unhandled Exception Detected"
permalink: /kb/120/Q120586/
---

## Q120586: Encarta/Golf/MSB Ocean ErrMsg: Unhandled Exception Detected

{% raw %}

	Article: Q120586
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbsoundkbbuglist kbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Golf for Windows, version 2.0 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the top of this article, the
	following error message may occur when certain S3 video drivers are being used
	by Windows 3.x:
	
	GOLF
	----
	
	  Win32s - Error in GLFMOD20.EXE
	  Unhandled Exception detected. (Code: 0xC0000005)
	  Application will be terminated
	
	ENCARTA
	-------
	
	  Win32s - Error in ENC97.EXE
	  Unhandled Exception detected. (Code: 0xC0000005)
	  Application will be terminated
	
	MSB OCEAN
	---------
	
	  Win32s - Error in MSBSEA.EXE
	  Unhandled Exception detected. (Code: 0xC0000005)
	  Application will be terminated
	
	CAUSE
	=====
	
	This error message is a result of a conflict between the Win32s system files and
	the S3 video driver.
	
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed that the S3 video driver version 2.1 provided by Dell
	Computer Systems causes conflicts with the programs listed at the top of this
	article.
	
	Microsoft recommends that version 1.2 or a prerelease version 2.33 of the S3
	video driver be used with the above programs. Either of these drivers can be
	obtained by contacting Dell Computer Systems.
	
	NOTE: The prerelease version of the S3 video driver will not provide the 1024 x
	768 video resolution usually found in other high resolution drivers. Dell
	Computer System may correct this problem prior to a full release of the driver.
	
	The Dell products included here are manufactured by Dell Computer Systems, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability. For more information about
	Dell Computer Systems' products, contact the company at:
	
	  Dell technical support: (800) 624-9896
	  Dell BBS: (512) 728-8528
	
	
	Additional query words: unhandled exception win32s encarta 97 kbmm homemm
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbsound kbbuglist kbfaq
	Technology        : kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbZNotKeyword6 kbEncartaSearch kbGamesSearch kbZNotKeyword kbGolfSearch kbKidsSearch kbEncartaEncycSearch kbScholasticOcean kbGolf200 kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbMSBSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
