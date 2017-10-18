---
layout: page
title: "Q103155: Adding Musical Disc and Track Titles to Music Box"
permalink: kb/103/Q103155/
---

## Q103155: Adding Musical Disc and Track Titles to Music Box

	Article: Q103155
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Disc titles and track titles for individual audio compact discs (CDs) can be
	added to the Music Box program that comes with Windows Sound System.
	
	MORE INFORMATION
	================
	
	The CD titles and track titles added to Music Box are saved in the MUSICBOX.INI
	file and searched each time a new CD is placed into the CD-ROM drive.
	
	Valid MUSICBOX.INI Entries Are:
	
	  [General]
	  WindowXPosn = <X Position>
	  WindowXPosn = <X Position>
	
	  Shuffle= <1 shuffle is on, 0 shuffle is off>
	  Repeat= <1 repeat is on, 0 repeat is off>
	
	  [<disc ID #>]
	  DiskTItle= <Title>
	  Track1= <Track Title>
	  .
	  .
	  TrackN= <Track Title>
	  Playlist= <track #>...<track #>...<track #>
	
	Example:
	
	  [General]
	  WindowXPosn=103
	  WindowYPosn=39
	  Shuffle=0
	  Repeat=0
	
	  [25118464]
	  DiscTitle=Genesis - We Can't Dance
	  Track1=No Son of Mine
	  Track2=Jesus He Knows Me
	  Track3=Driving the Last Spike
	  Track4=I Can't Dance
	  Track5=This Is Elevator Music for Adults
	  Track6=Dreaming While You Sleep
	  Track7=Tell Me Why I Bought This CD
	  Track8=Living Forever
	  Track9=Hold on My Heart
	  Track10=Way of the World
	  Track11=Since I Lost You
	  Track12=Fading Lights
	  PlayList=1 2 3 4 5 6 7 8 9 10 11 12
	
	Additional query words: 1.0 2.0 Automatic CD CD's List's List CD- ROM musical songs disk disks
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a kbWinSoundSys200
	
	=============================================================================
	
