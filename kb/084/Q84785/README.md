---
layout: page
title: "Q84785: IBM PS/2 Model 55SX Hangs at Start Up with Windows 3.1"
permalink: /kb/084/Q84785/
---

## Q84785: IBM PS/2 Model 55SX Hangs at Start Up with Windows 3.1

{% raw %}

	Article: Q84785
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running Microsoft Windows version 3.1 in 386 enhanced mode on an IBM PS/2 model
	55SX with a SCSI controller may cause your system to stop responding (hang) when
	you start Windows. When this happens, you briefly see the Windows logo, followed
	by a blank screen with a blinking cursor. The hard disk drive light stays on.
	
	To run Windows in 386 enhanced mode on a PS/2 model 55SX, add the line MCADMA=OFF
	to the [386Enh] section of the SYSTEM.INI file.
	
	MCADMA= Designed for PS/2 Model 55SX Only
	-----------------------------------------
	
	The MCADMA= switch is designed for use on IBM PS/2 model 55SX computers only; it
	should not be used with other PS/2 models.
	
	The SYSINI.WRI file defines the MCADMA= switch as follows:
	
	  MCADMA=<Boolean>
	
	  Default:   True for MCA computers; False for all other
	             computers
	
	  Purpose:   This specifies whether Windows should use the MCA
	             extensions to direct memory access (DMA). This
	             setting applies to MCA computers only. Disable
	             this setting if you are using an MCA computer but
	             the DMA extensions are not implemented.
	
	  To Change: Use Microsoft Windows Notepad to edit the SYSTEM.INI
	             file.
	
	
	The PS/2 model 55SX is manufactured by a IBM, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 ps2 mca lock freeze up stop ps-2 microchannel micro channel boot bootup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
