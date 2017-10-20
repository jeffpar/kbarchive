---
layout: page
title: "Q105753: &quot;Unable to Play Sound: Sound Blaster Is in Use by Another...&quot;"
permalink: /kb/105/Q105753/
---

## Q105753: &quot;Unable to Play Sound: Sound Blaster Is in Use by Another...&quot;

{% raw %}

	Article: Q105753
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start an MS-DOS-based application, you may receive the following error
	message:
	
	  Unable to Play Sound: Sound Blaster is In Use by Another Application.
	
	This error may occur if you have a Sound Blaster card installed, but its virtual
	sound device driver (Vsbpd.386) is not listed in the [386enh] section of the
	System.ini file.
	
	NOTE: This problem does not occur when using Windows 95 and the Windows 95 Sound
	Blaster driver.
	
	RESOLUTION
	==========
	
	To correct this problem, make sure that the driver Vsbpd.386 is installed and
	listed in the System.ini file as follows:
	
	  [386enh]
	  device=vsbpd.386
	
	To obtain this driver, contact Creative Labs.
	
	The Sound Blaster card and Vsbpd.386 driver are manufactured by Creative Labs, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	For more information, contact Creative Labs:
	
	- Technical support (405) 742-6655
	
	- Recorded answers to frequently asked questions (405) 742-6622
	
	Additional query words: multi media multimedia multi-media kbmm sbp soundblaster national anthem static fuzzy SoundBlaster viewer err msg mmtitles sound
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbZNotKeyword6 kbOSWin310 kbOSWin300
	
	=============================================================================
	

{% endraw %}
