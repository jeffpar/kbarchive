---
layout: page
title: "Q92902: Media Player Cannot Play Audio CD If CDAudio=0 in MPLAYER.INI"
permalink: /kb/092/Q92902/
---

## Q92902: Media Player Cannot Play Audio CD If CDAudio=0 in MPLAYER.INI

	Article: Q92902
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbhw kbmm
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Media Player cannot play an audio compact disc (CD) if the line CDAudio=0
	appears in the MPLAYER.INI file. This line may be present if a problem occurs
	when the SYSTEM.INI file, if the MPLAYER.INI file is updated, or if there is a
	problem with the CD-ROM drivers.
	
	MORE INFORMATION
	================
	
	The CD Audio driver can be disabled if the CD-ROM drivers (including MSCDEX) are
	not loaded when Media Player is started or if there is a hardware problem when
	the SYSTEM.INI is updated. Media Player updates the MPLAYER.INI file after any
	changes are made to the SYSTEM.INI file and changes the CDAudio=17 (enabled)
	line to CDAudio=0 (disabled) if Windows is unable to detect the presence of the
	CD-ROM player. If the problem persists, rename MPLAYER.INI to MPLAYER.PSS, put
	an audio disk in the drive, and restart Media Player.
	
	On some systems, if there is no disk in the CD-ROM drive, CDAudio=0 appears in
	the MPLAYER.INI file when the SYSTEM.INI file is updated. The SYSTEM.INI file
	may be updated this way if you use the Windows Setup program to install a new
	driver when there is no disk in the CD-ROM drive. If this occurs, the CD Audio
	is disabled.
	
	Note that this problem does not occur with all CD-ROM players.
	
	
	Additional query words: 3.10 cdrom "no drives were detected" multimedia multi-media mmtitles beethoven msbocean msboceans oceans homekids homekid
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
