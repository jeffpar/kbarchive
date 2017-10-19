---
layout: page
title: "Q84973: Artisoft Sounding Board Installation Conflicts with PC-Speaker"
permalink: /kb/084/Q84973/
---

## Q84973: Artisoft Sounding Board Installation Conflicts with PC-Speaker

	Article: Q84973
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Artisoft Sounding Board installation program may detect the PC-Speaker
	driver and generate the following error message:
	
	  Install cannot run while the Sounding Board driver is loaded. Remove the
	  driver and restart Windows.
	
	RESOLUTION
	==========
	
	To avoid this error message, do the following:
	
	1. Run Control Panel.
	
	2. Choose the Drivers icon.
	
	3. Select Sound Driver For PC-Speaker, and choose the Remove button.
	
	4. Choose the OK button.
	
	MORE INFORMATION
	================
	
	The PC-Speaker driver can be reinstalled after the Sounding board software has
	been successfully installed; however, .WAV files will play through the Sounding
	Board, not through the PC-Speaker driver.
	
	Artisoft manufactures the Sounding Board, which is designed to allow users to
	communicate on a LANtastic network through voice mail. The board also allows
	machines not running LANtastic to record voice messages in several audio
	formats, including the .WAV format supported by Windows 3.1.
	
	The Sounding Board is manufactured by Artisoft, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
