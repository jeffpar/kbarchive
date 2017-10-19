---
layout: page
title: "Q100991: Microsoft SoundBits Browser Does Not Show Collections"
permalink: /kb/100/Q100991/
---

## Q100991: Microsoft SoundBits Browser Does Not Show Collections

	Article: Q100991
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0; MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Sound Bits (Hanna-Barbara) version 1.0 
	- Microsoft Sound Bits (Movie Clips) version 1.0 
	- Microsoft SoundBits, Musical Instruments, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft SoundBits Browser will not show any of the installed collections if
	the MBROWSER.INI file is either missing or corrupt.
	
	MORE INFORMATION
	================
	
	Reinstalling SoundBits usually corrects this problem. However if the problem
	continues, the MBROWSER.INI file can be manually reconstructed. In the following
	example of the file, all three collections are installed; however, any one of
	the three lines under [Collections] can be removed, depending on which
	collection(s) you do not have.
	
	Note there should be only three lines under [Collections]; however, due to the
	length of the lines, they are wrapped in this article.
	
	MBROWSER.INI FILE
	-----------------
	
	[Collections]
	MUSIC.MBR=MICROSOFT,C:\WINDOWS\SNDBITS\MUSIC\MUSIC.MBR,MUSIC.DIB, "SoundBits:
	Musical Sounds","Musical Sounds Disk 1"
	MOVIES.MBR=MICROSOFT,C:\WINDOWS\SNDBITS\MOVIES\MOVIES.MBR,MOVIES.DIB, "SoundBits:
	Hollywood Movies","SoundBits Hollywood Movies Disk"
	HB.MBR=MICROSOFT,C:\WINDOWS\SNDBITS\HB\HB.MBR,HB.DIB,
	"SoundBits:Hanna-Barbera","Hanna-Barbera Disk 1"
	
	[MBROWSER]
	DefaultSrc=MOVIES.MBR
	
	Additional query words: Sound bits multi media multimedia multi- blank empty HB movie 1.00
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbZNotKeyword kbSoundBitsSearch kbSoundBits
	Version           : :1.0; MACINTOSH:1.0
	
	=============================================================================
	
