---
layout: page
title: "Q85981: Sound Device Error Using After Dark Version 2.0"
permalink: /kb/085/Q85981/
---

## Q85981: Sound Device Error Using After Dark Version 2.0

{% raw %}

	Article: Q85981
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using After Dark version 2.0 by Berkeley Systems Inc. with Microsoft
	Windows operating system version 3.1, or Windows 3.0 with Multimedia Extensions,
	the following error may occur:
	
	  The sound device cannot be used, because the driver cannot be used with
	  Multimedia Extensions installed.
	  Select another device.
	
	To correct the error, configure the Sound Blaster card as a Multimedia Windows
	sound device.
	
	MORE INFORMATION
	================
	
	The above error occurs when the "Sound Blaster Card" is selected as the output
	device in the After Dark setup, even if a Sound Blaster card is installed on the
	machine. In order to use a Sound Blaster card with After Dark 2.0 and Windows,
	set up the Sound Blaster card as a "Multimedia Windows Sound Device."
	
	To set up the Sound Blaster card as a Multimedia Windows sounds device, do the
	following:
	
	1. Start After Dark.
	
	2. Choose the Setup button.
	
	3. Choose the Sound button.
	
	4. Click on the DOWN ARROW beside the Output Device option.
	
	  The following options are available:
	
	  Multimedia Windows Sound Device
	  PC Internal Speaker
	  Sound Blaster Card
	
	5. Select the option for "Multimedia Windows Sound Device."
	
	The products included here, Sound Blaster and After Dark, are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: 3.10 soundblaster pro screen saver screensaver after dark 3rdParty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	

{% endraw %}
