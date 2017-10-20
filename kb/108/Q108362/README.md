---
layout: page
title: "Q108362: Changes Made by Video for Windows 1.1 Run-Time Installation"
permalink: /kb/108/Q108362/
---

## Q108362: Changes Made by Video for Windows 1.1 Run-Time Installation

{% raw %}

	Article: Q108362
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is a complete listing of files that are copied and modified during the
	installation of the run-time Video for Windows 1.1.
	
	Files Copied to WINDOWS Directory
	---------------------------------
	
	MPLAYER.REG
	MCIOLE.DLL
	MPLAYER.HLP
	MPLAYER.EXE
	INDEO.INI
	
	File Copied to WINDOWS\SYSTEM Directory
	---------------------------------------
	
	DVA.386
	DISPDIB.DLL
	ACMCMPRS.DLL
	CTL3D.DLL
	AVICAP.DLL
	MCIAVI.DRV
	AVIFILE.DLL
	COMPOBJ.DLL
	MSVIDEO.DLL
	IMAADPCM.ACM
	MAP_WIN.HLP
	MSADPCM.ACM
	MSACM.DRV
	MSACM.DLL
	MSRLE.DRV
	INDEOV.DRV
	MSVIDC.DRV
	IR21_R.DLL
	ICCVID.DRV
	IR30.DLL
	CLEANUP.REG
	OLE2.REG
	OLE2PROX.DLL
	OLE2CONV.DLL
	OLE2NLS.DLL
	OLE2DISP.DLL
	TYPELIB.DLL
	STORAGE.DLL
	OLE2.DLL
	
	Files Modified in WINDOWS Directory
	-----------------------------------
	
	ACCESSOR.GRP
	CONTROL.INI
	REG.DAT
	SYSTEM.INI
	WIN.INI
	
	Changes to WIN.INI
	------------------
	
	[drawdib]
	vga.drv 640x480x4(0)=1,0,0,0
	
	[embedding]
	MPlayer=Media Clip,Media Clip,mplayer.exe,picture
	
	[mci extensions]
	avi=AVIVideo
	
	Changes to SYSTEM.INI
	---------------------
	
	[386Enh]
	device=dva.386
	
	[drivers]
	VIDC.CVID=iccvid.drv
	VIDC.MSVC=msvidc.drv
	VIDC.IV31=indeov.drv
	VIDC.MRLE=MSRLE.drv
	VIDC.RT21=indeov.drv
	VIDC.YVU9=indeov.drv
	WaveMapper=msacm.drv
	MSACM.msadpcm=msadpcm.acm
	MSACM.imaadpcm=imaadpcm.acm
	
	[mci]
	AVIVideo=mciavi.drv
	
	Changes to CONTROL.INI
	----------------------
	
	[drivers.desc]
	msacm.drv=Microsoft Sound Mapper V2.00
	msadpcm.acm=Microsoft ADPCM Codec V2.00
	imaadpcm.acm=Microsoft IMA ADPCM Codec V2.00
	mciwave.drv=[MCI] Sound
	mciseq.drv=[MCI] MIDI Sequencer
	mciavi.drv=[MCI] Microsoft Video for Windows
	timer.drv=Timer
	midimap.drv=MIDI Mapper
	iccvid.drv=SuperMatch Cinepak Codec
	msvidc.drv=Microsoft Video 1 Compressor
	indeov.drv=Intel Indeo(TM) Video Driver
	MSRLE.drv=Microsoft RLE Compressor
	
	Additional query words: 1.1 video runtime run time
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo110
	Version           : WINDOWS:1.1
	
	=============================================================================
	

{% endraw %}
