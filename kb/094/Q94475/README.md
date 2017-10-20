---
layout: page
title: "Q94475: Error When Playing Sample .AVI Files on CD-ROM"
permalink: /kb/094/Q94475/
---

## Q94475: Error When Playing Sample .AVI Files on CD-ROM

{% raw %}

	Article: Q94475
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to play back Audio-Video Interleaved (.AVI) files from the
	Microsoft Video for Windows CD-ROM, the error message
	
	  Can't Read From Drive <CD ROM Drive>
	
	may appear (where <CD ROM Drive> represents the drive letter assigned to
	the CD-ROM drive).
	
	This message may appear if the wrong version of the MSCDEX CD-ROM extender is in
	use. MSCDEX (usually supplied by the CD-ROM manufacturer) is the file that
	allows MS-DOS to access the CD-ROM drive. If the incorrect version of this file
	is being used, data transferred from the CD-ROM may be corrupted. If you are
	receiving the above error message (or one of a similar nature), try to play the
	sample file WINDSURF.AVI (installed during the setup of Video for Windows) from
	the hard drive. If this file plays back correctly, contact your CD-ROM drive
	manufacturer for help in installing the correct MSCDEX version.
	
	NOTE: In most cases, you will not be able to successfully copy the .AVI file from
	the CD-ROM to the local hard drive because the data transferred from the CD-ROM
	will be corrupted during this process as well.
	
	Additional query words: 1.00 audio video
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	

{% endraw %}
