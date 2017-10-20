---
layout: page
title: "Q86674: Windows Err Msg: Standard-Mode Switcher Is Not Running"
permalink: /kb/086/Q86674/
---

## Q86674: Windows Err Msg: Standard-Mode Switcher Is Not Running

{% raw %}

	Article: Q86674
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message during Windows Setup or when running
	MS-DOS-based applications in standard or 386 enhanced mode:
	
	  Standard mode switcher is not running
	
	CAUSE
	=====
	
	Problem Occurs During Setup
	---------------------------
	
	If any programs are placed below the [run] section in the SETUP.INF file, Windows
	Setup starts the application after completing the installation of Windows. If an
	entry for an MS-DOS-based application appears here, you will receive the error
	message noted above.
	
	MS-DOS-based applications cannot be run if standard-mode Switcher (DSWAP.EXE) is
	not loaded. WIN.COM starts DSWAP.EXE, so when Windows is started, you can run
	MS-DOS-based applications. Because the graphical portion of Windows Setup is
	started by DOSX.EXE, not WIN.COM, DSWAP.EXE is not loaded during Setup.
	
	Problem Occurs When You Run MS-DOS-Based Applications
	-----------------------------------------------------
	
	If the problem occurs when running an MS-DOS-based application or MS-DOS Prompt,
	you will need to re-create WIN.COM.
	
	The standard-mode Switcher (DSWAP.EXE) is initialized by WIN.COM when you start
	Windows. If WIN.COM is corrupted or damaged, DSWAP.EXE may not be initialized
	properly. If DSWAP.EXE is not loaded, or is loaded incorrectly, you will get the
	error message noted above.
	
	RESOLUTION
	==========
	
	Re-creating WIN.COM
	-------------------
	
	You can re-create WIN.COM by reinstalling Windows, or by selecting a different
	video driver and then switching back to the original. To cause WIN.COM to be
	updated by switching video drivers:
	
	1. Run Windows Setup from MS-DOS Prompt at the WINDOWS directory.
	
	2. Change the Display to a different resolution, usually the next lowest option.
	  For example, if you are using VGA, install for EGA. The resolution you choose
	  does not matter because you will not actually be running Windows with the
	  driver.
	
	3. Follow the instruction on the screen to install the new display driver.
	
	4. Run Windows Setup again.
	
	5. Change the Display back to its original setting.
	
	When you change the Display setting, WIN.COM is re-created. The disadvantage of
	this procedure is the additional video driver and font files will remain on your
	hard drive in the Windows SYSTEM subdirectory, unless you manually delete them.
	
	Additional query words: 3.10 3.11 err msg network /n /a workstation novell banyan vines lan manager std
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
