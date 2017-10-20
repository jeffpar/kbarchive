---
layout: page
title: "Q84589: Certain Phoenix BIOS Versions Hang System with CTRL+ALT+DEL"
permalink: /kb/084/Q84589/
---

## Q84589: Certain Phoenix BIOS Versions Hang System with CTRL+ALT+DEL

{% raw %}

	Article: Q84589
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information has been reported by Phoenix Technologies. Microsoft
	has not tested this and makes no warranty implied or otherwise as to the
	validity of the following problem and/or workaround.
	
	INFORMATION FROM PHOENIX TECHNOLOGIES
	-------------------------------------
	
	A problem has been reported when using certain versions of Phoenix BIOS and
	loading the MS-DOS or Windows 3.1 version of EMM386.EXE.
	
	CAUSE
	=====
	
	When pressing CTRL+ALT+DEL when using MS-DOS Prompt with the Windows 3.1 version
	of EMM386.EXE loaded, the system hangs. This problem also occurs when using the
	MS-DOS 5.0 version of EMM386.EXE with the RAM option, or if KEYB.COM is loaded
	with MS-DOS 5.0 EMM386.EXE.
	
	WORKAROUND
	==========
	
	This workaround should be used ONLY if the system displays the symptom described
	above. In those instances tested, the following workaround has been verified to
	resolve the problem. Edit the EMM386.EXE line in your CONFIG.SYS file to include
	the following parameter:
	
	  X=ffff-ffff
	
	For example: Original:
	
	  device=c:\windows\emm386.exe
	
	Modified:
	
	  device=c:\windows\emm386.exe x=ffff-ffff
	
	MORE INFORMATION
	================
	
	When the modified EMM386.EXE statement is executed, the following message is
	returned:
	
	  WARNING: User specified range overlaps. Press any key to continue....
	
	Aside from the inconvenience of the pause, which times out, allowing the computer
	to continue executing the CONFIG.SYS file, no other side effects have been
	observed.
	
	Additional query words: 3.10 3.11 3rdparty boot reboot re-boot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	

{% endraw %}
