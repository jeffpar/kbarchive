---
layout: page
title: "Q120749: Mitsumi CD-ROM Disrupts Video/Audio Playback"
permalink: kb/120/Q120749/
---

## Q120749: Mitsumi CD-ROM Disrupts Video/Audio Playback

	Article: Q120749
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT Workstation or Server computer with a Mitsumi CD-ROM exhibits
	disruptions in video playback: images stop moving, sounds repeat or have gaps.
	Files can still be read from the drive as normal.
	
	CAUSE
	=====
	
	The Mitsumi CD-ROM driver spends up to a third of a second at the DPC level,
	where it has complete control of the computer and locks out all other programs.
	This freezes video and fragments audio. When sounds clips are playing and the
	hardware does not receive the data for the next part of the clip, the system can
	neither complete nor stop the sound, so the drive just repeats the last data it
	received.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information in the
	Microsoft Knowledge Base as it becomes available.
	
	The CD-ROM mentioned here is manufactured by Mitsumi, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
