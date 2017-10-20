---
layout: page
title: "Q85548: Sound Blaster Configuration Changes with ATI Stereo FX Board"
permalink: /kb/085/Q85548/
---

## Q85548: Sound Blaster Configuration Changes with ATI Stereo FX Board

{% raw %}

	Article: Q85548
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows version 3.1 with an ATI Stereo FX Board installed and you
	are using the Creative Labs Sound Blaster 1.0 Driver, you may receive the
	following error message:
	
	  A configuration or hardware problem has occurred. Use the Driver option in
	  Control Panel to reconfigure the Sound Blaster driver
	
	Attempts to change the Control Panel Setup information for the driver have no
	effect.
	
	WORKAROUND
	==========
	
	- Use the RESET.EXE file to reset the Stereo FX Board. The Reset command can be
	  placed in your AUTOEXEC.BAT file, run from MS-DOS Prompt under Windows, or
	  added as an icon in your Startup Group.
	
	- ATI's Setup program (SPX.EXE) can be used to reset the Stereo FX Board. This
	  can be done as follows:
	
	  1. Run SFX.EXE (either outside of Windows, or from the MS-DOS Prompt under
	     Windows).
	
	  2. Select Set Power-up Configuration.
	
	  3. Press F10 to save the settings.
	
	  4. Press the ESC key.
	
	According to ATI Technologies product support, ATI is aware of the problem.
	
	Additional query words: 3.10 3.1 3.11 reconfigure stereo*fx
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
