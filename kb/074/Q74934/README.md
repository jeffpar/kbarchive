---
layout: page
title: "Q74934: DELL 486 Computers and Windows 3.0"
permalink: /kb/074/Q74934/
---

## Q74934: DELL 486 Computers and Windows 3.0

{% raw %}

	Article: Q74934
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Dell Technical Support, Dell 486 machines have been tested (by
	Dell) with Microsoft Windows 3.0. If Windows does not install or run properly on
	a Dell 486 computer, the hardware cache and BIOS shadowing should be turned off
	through the CMOS setup. To access the CMOS setup, press CTRL+ALT+ENTER at the
	MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	On 486 E, TE, DE, and SE models, the CMOS settings to disable are FAST VIDEO and
	486 CACHE. On 433P models, the settings to disable are FAST SYSTEM and FAST
	VIDEO.
	
	Dell 486 systems shipped with MS-DOS 3.3 or 4.01 may also include PC-KWIK
	software for disk caching. If PC-KWIK is being used, it should be disabled.
	
	Dell Technical Support reports that Dell systems shipped with MS-DOS 4.01 or
	later do not have FASTOPEN.EXE or APPEND.EXE loading in the AUTOEXEC.BAT or
	CONFIG.SYS files. If these files are being loaded, they should be commented out,
	but not deleted.
	
	For further information about these, or any other Dell products, please contact
	Dell Technical Support.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.00 win30 3rdparty KBHW 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
