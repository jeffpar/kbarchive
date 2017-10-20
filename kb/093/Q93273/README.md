---
layout: page
title: "Q93273: VFW: Setup - Run-time Installation Changes to Windows"
permalink: /kb/093/Q93273/
---

## Q93273: VFW: Setup - Run-time Installation Changes to Windows

{% raw %}

	Article: Q93273
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The release notes for Video for Windows (VFW1.WRI) decribes the procedure for
	installing the run-time files. Installation of the run-time files makes several
	changes to the Windows files and directories.
	
	The contents of the WIN.INI, SYSTEM.INI, and REG.DAT files are modified as
	follows:
	
	WIN.INI
	-------
	
	  [mci extensions]
	  avi=AVIVideo
	
	  [embedding]
	  MPlayer=Media Clip,Media Clip,mplayer.exe,picture
	
	  [drawdib]
	  display.drv=
	  Result8=
	  Result16=
	  Result24=
	
	NOTE: the entries to the right of the equal (=) sign in each of the lines in the
	[drawdib] section will depend on the video driver being used.
	
	SYSTEM.INI
	----------
	
	  [mci]
	  AVIVideo=mciavi.drv
	
	  [drivers]
	  VIDC.MSVC=msvidc.drv
	  VIDC.RT21=indeo.drv
	
	REG.DAT
	-------
	
	The MPLAYER.REG file is merged with the existing REG.DAT file.
	
	Files that are added in the WINDOWS directory:
	
	  MPLAYER.EXE     113472 10-28-92  12:00a
	  MPLAYER.HLP      78201 10-28-92  12:00a
	  MPLAYER.REG        667 10-28-92  12:00a
	  MCIOLE.DLL        8604 10-28-92  12:00a
	
	NOTE: The MPLAYER.EXE and MPLAYER.HLP files replace the files with the same name
	that ship with Windows version 3.1.
	
	Files that are added in the SYSTEM directory:
	
	  DISPDIB  DLL      5744 10-28-92  12:00a
	  MSVIDEO  DLL     39584 10-28-92  12:00a
	  MCIAVI   DRV     61136 10-28-92  12:00a
	  MSVIDC   DRV     38432 10-28-92  12:00a
	  INDEO    DRV    115552 10-28-92  12:00a
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
