---
layout: page
title: "Q84525: Err Msg: &quot;There is a Multiple Entry...&quot; w/  TI Travelmate 3000"
permalink: /kb/084/Q84525/
---

## Q84525: Err Msg: &quot;There is a Multiple Entry...&quot; w/  TI Travelmate 3000

	Article: Q84525
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Texas Instruments (TI) Travelmate 3000 computer from
	Microsoft Windows version 3.0 to Windows version 3.1, the following error
	message may occur when you start Windows 3.1:
	
	  There is a multiple entry in system.ini. Please remove this multiple entry in
	  system.ini: device=vkd.386
	
	WORKAROUND
	==========
	
	The following is a temporary workaround for the problem:
	
	1. Using a text editor, edit the SYSTEM.INI file.
	
	2. Use a semicolon (;) to remark out the following line from the [386Enh]
	  section of the SYSTEM.INI file.
	
	        device=vkd.386
	
	  The line should now appear as follows:
	
	        ;device=vkd.386
	
	This causes Windows to ignore the PS/2 mouse port.
	
	To solve the problem permanently, do the following:
	
	1. Obtain an updated Windows 3.1 compatible version of VKD.386 from Texas
	  Instruments and install it following the instructions provided by Texas
	  Instruments.
	
	2. Remove the following line from the [386Enh] section of the SYSTEM.INI file:
	
	        keyboard=*vkd
	
	3. If you remarked out the DEVICE=VKD.386 line in step 2 of the temporary
	  workaround above, edit the SYSTEM.INI file and remove the semicolon.
	
	Additional query words: 3.10 Travel mate 3000
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
