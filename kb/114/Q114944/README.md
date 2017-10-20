---
layout: page
title: "Q114944: Using WSSCNFG.EXE with Multiple-Configuration System Files"
permalink: /kb/114/Q114944/
---

## Q114944: Using WSSCNFG.EXE with Multiple-Configuration System Files

{% raw %}

	Article: Q114944
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Sound System MS-DOS Configuration program (WSSCNFG.EXE) provides
	dual-boot capability for your computer system; it provides a menu with both
	default configuration and Sound Blaster compatibility selections. WSSCNFG.EXE
	changes your CONFIG.SYS file by creating two sections; however, it does not
	change your AUTOEXEC.BAT file. You can modify your AUTOEXEC.BAT file to create
	two sections, which will improve the performance of your computer. Depending on
	which menu selection you choose, specific files either load or do not load. Your
	MS-DOS 6.0 "User's Guide" provides more information about using multiple
	configurations.
	
	MORE INFORMATION
	================
	
	Sample System Files Before Running WSSCNFG.EXE
	----------------------------------------------
	
	  CONFIG.SYS:
	
	    DEVICE=C:\DOS\HIMEM.SYS
	    DEVICE=C:\DOS\EMM386.EXE NOEMS
	    DEVICEHIGH=C:\DOS\SETVER.EXE
	    FILES=60
	    BUFFERS=30
	    DOS=HIGH,UMB
	    SHELL=C:\DOS\COMMAND.COM C:\ /P /E:1024
	
	  AUTOEXEC.BAT:
	
	    SET TEMP = C:\TEMP
	    PROMPT $P$G
	    PATH = C:\DOS;C:\WINDOWS
	    LH C:\DOS\DOSKEY
	    WIN
	
	Sample CONFIG.SYS File After Running WSSCNFG.EXE
	------------------------------------------------
	
	    [Menu]
	    menuitem=default, default configuration
	    menuitem=Soundblastercompat,Sound Blaster Compatibility
	
	    [SoundBlastercompat]
	    DEVICE=C:\WINDOWS\HIMEM.SYS
	    DEVICE=C:\SNDSYS\EMM386.EXE 512 RAM
	    DEVICE=C:\SNDSYS\WSSXLAT.EXE SBIO=220 IRQ=7 DMA=1 WAVE=7 LINEIN=7
	    DOS=HIGH,UMB
	    BUFFERS=20
	    FILES=30
	
	    [Default]
	    DEVICE=C:\DOS\HIMEM.SYS
	    DEVICE=C:\DOS\EMM386.EXE NOEMS
	    DEVICEHIGH=C:\DOS\SETVER.EXE
	    FILES=60
	    BUFFERS=30
	    DOS=HIGH,UMB
	    SHELL=C:\DOS\COMMAND.COM C:\ /P /E:1024
	
	To make more memory available and keep Windows from automatically loading when
	you select the Sound Blaster compatibility selection (assuming you have the WIN
	command at the end of the AUTOEXEC.BAT file), you can make changes to your
	AUTOEXEC.BAT file so that only specific files are loaded depending on the option
	selected from the startup menu.
	
	Sample AUTOEXEC.BAT File After Making Manual Changes
	----------------------------------------------------
	
	    goto %config%
	
	    :SoundBlasterCompat
	    rem lines in this section are only available in Sound Blaster Mode.
	    goto end
	
	    :Default
	    SET TEMP = C:\TEMP
	    PROMPT $P$G
	    PATH = C:\DOS;C:\WINDOWS
	    LH C:\DOS\DOSKEY
	    WIN
	
	    :goto end
	    :end
	
	The above AUTOEXEC.BAT file provides only a small sample of what you can do using
	Microsoft MS-DOS version 6.0 or later. For complete instructions about how to
	alter your system files for multiple configurations, refer to page 105 of the
	Microsoft DOS 6.0 "User's Guide."
	
	Additional query words: 2.00 multi-config configure start Windows automatically
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	
	=============================================================================
	

{% endraw %}
