---
layout: page
title: "Q93091: Setup: Changes Made to the Initialization (&#42;.INI) Files"
permalink: /kb/093/Q93091/
---

## Q93091: Setup: Changes Made to the Initialization (&#42;.INI) Files

{% raw %}

	Article: Q93091
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
	
	Installing version 1.0 of Microsoft Video for Windows makes additions and
	modifications to the Windows and the Windows System directories as well as the
	WIN.INI, SYSTEM.INI, CONTROL.INI, PROGMAN.INI, REG.DAT, and ACCESSO0.GRP files.
	The following is a listing of the specific additions made to the .INI files
	during the installation of Microsoft Video for Windows 1.0.
	
	MORE INFORMATION
	================
	
	WIN.INI changes:
	
	NOTE: The following entry is an addition to the mci extensions section:
	
	  [mci extensions]
	  avi=AVIVideo
	
	NOTE: The following entry is an addition to the embedding section:
	
	  [embedding]
	  MPlayer=Media Clip,Media Clip,mplayer.exe,picture
	
	NOTE: The following entries are added as a new section to the WIN.INI. The actual
	values associated with each entry vary with the video driver being used and the
	settings selected when installing the driver:
	
	  [drawdib]
	  display.drv=v7vga.drv 640x480x8
	  Result8=15
	  Result16=0
	  Result24=1
	
	SYSTEM.INI changes:
	
	The changes made to the SYSTEM.INI file vary with the choice of drivers installed
	with Microsoft Video for Windows 1.0. These changes are described below, each
	entry preceded by the driver name associated with the change.
	
	NOTE: The actual values associated with these entries will vary from system to
	system. If a user is unsure of the values that apply to his or her system they
	should be directed to their hardware manufacturer.
	
	NOTE: The following entry will appear regardless of which driver is installed:
	
	  [mci]
	  AVIVideo=mciavi.drv
	
	NOTE: The following entry appears only if the Pioneer 4200 driver has been
	installed:
	
	  Videodisc=mcipionr.drv com1
	
	NOTE: The following listing describes the possible entries found in the [drivers]
	section of the SYSTEM.INI. This section never includes more than one of the
	msvideo= entries:
	
	  [drivers]
	  VIDC.MSVC=msvidc.drv
	  VIDC.RT21=indeo.drv
	  msvideo=vblaster.drv
	  msvideo=bravado.drv
	  msvideo=targa16.drv
	  msvideo=svw_VCAP.drv
	  msvideo=indeo.drv
	
	NOTE: The following listing describes the possible entries that are added with
	the installation of the Intel Indeo (ActionMedia):
	
	  [386Enh]
	  device=VswitchD.386
	
	  [ActionMedia]
	  Playback option=803
	
	NOTE: The following listing describes the possible entries that are added with
	the installation of the Truevision Bravado driver:
	
	  [Bravado.drv]
	  Interrupt=9
	  MemoryBase=E
	  PortBae=224
	
	NOTE: The following listing describes the possible entries that are added with
	the installation of the Video Blaster.
	
	  Video Blaster
	  [VBlaster.drv]
	  Interrupt=10
	  MemoryBase=E
	  PortBase=2AD6
	
	NOTE: The following listing describes the possible entries that are added with
	the installation of the Truevision Targa 16+ driver:
	
	  [Targa16.drv]
	  Portbase=220
	  Interrupt=10
	  MemoryBase=E000
	  WaitStates=1
	
	NOTE: The following listing describes the possible entries that are added with
	the installation of the New Media SVW driver:
	
	  [SVW_VCap.drv]
	  Portbase=AD6
	  MemoryBase=E
	
	NOTE: The following listing describes the possible entries that are added with
	the installation of the Pioneer 4200 driver:
	
	  [mci]
	  Videodisc=mcipionr.drv com1
	
	NOTE: Only certain combinations of the above drivers may be installed at one
	time. For example, only one capture driver may be installed at one time, but
	multiple compression drivers are allowed.
	
	CONTROL.INI Changes:
	
	NOTE: The following listing describes the possible entries found in the
	[drivers.desc] section of the CONTROL.INI. The actual entries will include only
	one of the MSVIDEO capture drivers:
	
	  [drivers.desc]
	  mciavi.drv=[MCI] Microsoft MCI AVI Driver
	  msvidc.drv=Microsoft Video Compressor
	  indeo.drv=Intel Indeo(TM) Video Driver
	  vblaster.drv=Creative Labs VideoBlaster Video Capture
	  bravado.drv=Truevision Targa16 Plus Video Capture
	  SVW_VCAP.drv=New Media Graphics SVW Video Capture
	  mcipionr.drv=[MCI] Pioneer 4200 Videodisc
	  soft486.drv=486 1.0 Software Driver
	
	NOTE: The following listing describes the possible entries found in the
	[Userinstallable.drivers] section of the CONTROL.INI. The actual entry includes
	only one of the MSVIDEO capture drivers:
	
	  [Userinstallable.drivers]
	  VIDC.RT21=indeo.drv
	  VIDC.MSVC=msvidc.drv
	  msvideo=vblaster.drv
	  msvideo=bravado.drv
	  msvideo=targa16.drv
	  msvideo=svw_VCAP.drv
	  msvideo=indeo.drv
	  Videodisc=mcipionr.drv
	
	NOTE: The following listing describes the possible entries found in the
	[related.desc] section of the CONTROL.INI. The actual entries vary with drivers
	installed:
	
	  [related.desc]
	  msvideo=
	  Videodisc=
	  VIDC.RT21=
	  VIDC.MSVC=
	  AVIVideo=msvidc.drv
	
	PROGMAN.INI Changes:
	
	NOTE: The following listing describes the entries found in the [Groups] section
	of the PROGMAN.INI. The # indicates an integer value assigned by Windows,
	<Drive> indicates the logical drive containing the Windows directory and
	<Path> indicates the fully qualified path to the Windows directory.
	
	  [Groups]
	  Group#=<Drive>:\<Path>\VIDEOFOR.GRP
	  Group#=<Drive>:\<Path>\MULTIMED.GRP
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
