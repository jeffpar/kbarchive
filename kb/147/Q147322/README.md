---
layout: page
title: "Q147322: Cinemania/ Music Central ErrMsg: Unknown Error When Starting"
permalink: /kb/147/Q147322/
---

## Q147322: Cinemania/ Music Central ErrMsg: Unknown Error When Starting

	Article: Q147322
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbhw kbmm kbprb kbHardwarekbfaq
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the top of this article, you may
	receive an error message similar to the following:
	
	  Cinemania 96
	  Cinemania is unable to proceed due to an unknown error.
	  To correct the problem, try restarting Cinemania.
	
	This can occur after the Home logo appears. Additionally, the program does not
	start and reinstalling the program does not correct the problem.
	
	CAUSE
	=====
	
	This problem can occur for any of the following reasons:
	
	- The Windows MCI Motion Video device is disabled or not installed.
	
	- The Windows Audio codecs are not installed.
	
	- The SoundBlaster 16 HDMA setting is incorrect.
	
	- The system clock is set to the wrong date.
	
	RESOLUTION
	==========
	
	To resolve this problem, enable or add the Motion Video device driver or add the
	Audio codecs.
	
	For information about how to change your SoundBlaster 16 HDMA settings, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q136675 Changing SoundBlaster 16 HDMA Settings in Windows 95
	
	To Enable the Motion Video Device Driver
	----------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Click the Advanced or Devices tab.
	
	4. Double-click Media Control Devices, and then double-click Motion Video Device
	  (Media Control).
	
	  If this device is not listed, see the "To Add the Missing Motion Video Device
	  Driver" section later in this article.
	
	5. Click Use This Media Control Device.
	
	6. Click OK, and then click OK.
	
	To Add the Missing Motion Video Device Driver
	---------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add New Hardware, and then click Next.
	
	  NOTE: If you are using Windows 98, double-click Add New Hardware, click Next,
	  and then click Next.
	
	3. When you are asked if you want Windows to detect your hardware, Click No, and
	  then click Next.
	
	4. In the list of Hardware types, click Sound, Video And Game Controllers, and
	  then click Next.
	
	5. In the Manufacturers box, click Microsoft MCI.
	
	6. In the Models box, click Motion Video Device (Media Control).
	
	7. Click Next, and then click Finish. Follow the instructions on the screen.
	
	8. Restart Windows.
	
	Installing/Reinstalling Windows Audio Compression
	-------------------------------------------------
	
	If the Audio Compression option is not installed properly, you receive error
	messages when compressed sound (.wav) files are played. Uncompressed sound files
	(such as Ding.wav or Chimes.wav) are unaffected by missing Audio Compression
	(MSACM codecs).
	
	You need to remove, then reinstall, the Windows Audio Compression, using the
	following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Click the Windows Setup tab.
	
	4. In the Components box, click Multimedia.
	
	5. Click Details.
	
	6. If the Audio Compression option is checked, it may not be installed properly,
	  and needs to be removed. To remove Audio Compression, follow these steps:
	
	  a. Click the Audio Compression check box to clear it, and then click OK.
	
	  b. Click OK again to complete the removal.
	
	  c. Repeat steps 2-5 to return to the Audio Compression option in Add/Remove
	     Programs.
	
	7. Click the Audio Compression check box to select it.
	
	8. Click OK, and then click OK again. Follow the instructions on the screen.
	
	Additional query words: 1996 96 multi media multimedia multi- mmtitles kbmm
	
	======================================================================
	Keywords          : kberrmsg kbhw kbmm kbprb kbHardware kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbMusicCentral kbMusicCentral1996 kbMusicCentral1997
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
