---
layout: page
title: "Q96445: SYSTEM.INI and WIN.INI Entries Made by WSS 1.0x Setup"
permalink: /kb/096/Q96445/
---

## Q96445: SYSTEM.INI and WIN.INI Entries Made by WSS 1.0x Setup

	Article: Q96445
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Installing Windows Sound System results in the following changes to your
	SYSTEM.INI and WIN.INI files. Please note that before the changes are made,
	these .INI files are backed up and renamed SYSTEM.WSS and WIN.WSS.
	
	MORE INFORMATION
	================
	
	The following lines are added to SYSTEM.INI:
	
	     [386Enh]
	     device=vsndsys.386
	
	     [sndsys.drv]
	     Interrupt=<11,10,9,7>        (default=11)
	     IOAddress=<604,530,E80,F40>  (default=530 (in hex))
	     DMADAC=<0,1,3>               (default=0)
	     DMAADC=<0,1,3>               (same as DMADAC value)
	     DMABufferSize=<8-64>         (default=32)
	     DisableWarning=<0,1>         (default=1)
	     EnableAutoAcquireOPL3=<0,1>  (default=1)
	
	     [drivers]
	     wave=sndsys.drv
	     aux=sndsys.drv
	     midi=sndsys.drv
	
	     [MSACM]
	     install=msadpcm.acm
	
	     [MCI]
	     WaveAudio=mciwave.drv
	
	The following lines are added to the WIN.INI file:
	
	     [Embedding]
	     Qrecord=Quick Recorder Sound,Quick Recorder Sound,
	     C:\SNDSYS\QRECORD.EXE,picture
	
	     [Extensions]
	     WAV=C:\SNDSYS\SNDFINDR.EXE^.WAV
	     SND=C:\SNDSYS\SNDFINDR.EXE^.SND
	     AIF=C:\SNDSYS\SNDFINDR.EXE^.AIF
	     VOC=C:\SNDSYS\SNDFINDR.EXE^.VOC
	     MID=C:\SNDSYS\SNDFINDR.EXE^.MID
	     RMI=C:\SNDSYS\SNDFINDR.EXE^.RMI
	
	Additional query words: 1.00 1.0a changes
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
