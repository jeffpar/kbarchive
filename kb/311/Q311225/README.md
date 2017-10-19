---
layout: page
title: "Q311225: Encarta Stops Responding When You Play a Multimedia Clip"
permalink: /kb/311/Q311225/
---

## Q311225: Encarta Stops Responding When You Play a Multimedia Clip

	Article: Q311225
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Library 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002 - DVD Edition 
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play an audio or video clip in one of the Microsoft Encarta
	programs listed at the beginning of this article, the program may stop
	responding (hang).
	
	You may also see get the following Watson Error:
	
	  AppName: ENC2002
	  AppVer: 11.0.1013.809
	  ModName: Unknown
	  ModVer: 0.0.0.0
	  Offset: 009fd93e
	
	CAUSE
	=====
	
	This behavior can occur if all of the following conditions are true:
	
	- You install Microsoft Internet Explorer 6.0 on a computer on which Microsoft
	  Windows Media Player 7 is not currently installed.
	
	  -and-
	
	- You configure Internet Explorer to play media content (you control media play
	  by using the Media Bar).
	
	  -and-
	
	- You install one of the Microsoft Encarta programs that are listed beginning
	  of this article.
	
	When you configure Internet Explorer to play media content in the Media bar, it
	automatically installs Windows Media Player 7.1.
	
	Version 7.01.00.3056 of Windows Media Player 7.1, which is included with some
	early releases of Microsoft Internet Explorer 6.0, is incompatible with the
	Microsoft Encarta 2002 programs.
	
	To determine the version of Windows Media Player installed on your computer,
	follow these steps:
	
	1. Click Start, point to Programs, and then click Windows Media Player.
	
	2. On the Help menu, click "About Windows Media Player".
	
	3. Note the number displayed next to Version.
	
	RESOLUTION
	==========
	
	An update is available to resolve this issue. To download this update, click the
	following link:
	
	  Download Wm308106.exe 4.46 MB
	  (http://download.microsoft.com/download/winmediaplayer/Update/308106/W982KMe/EN-US/wm308106.exe)
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002 kbEncartaEncyc2002 kbEncartaEnCyc2002Del kbEncartaRef2002DVD
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
