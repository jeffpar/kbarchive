---
layout: page
title: "Q100378: Multimedia Err Msg: Filename Extension of the Specified..."
permalink: /kb/100/Q100378/
---

## Q100378: Multimedia Err Msg: Filename Extension of the Specified...

{% raw %}

	Article: Q100378
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Multimedia Beethoven for Windows, version 1.0 
	- Microsoft Bookshelf for Windows, 1991, 1992, 1993, 1994, 1995 editions 
	- Microsoft Bookshelf '95 for Windows 95 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia 
	- Microsoft Multimedia Mozart for Windows, version 1.0 
	- Microsoft Multimedia Schubert for Windows, version 1.0 
	- Microsoft Multimedia Strauss for Windows, version 1.0 
	- Microsoft Multimedia Stravinsky for Windows, version 1.0 
	- Microsoft Musical Instruments for Windows, version 1.0 
	- Microsoft SoundBits, Hanna-Barbera 
	- Microsoft SoundBits, MGM Movies 
	- Microsoft SoundBits, Musical Instruments 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the products listed at the top of this article, you receive the following
	error message:
	
	  
	
	  Multimedia Viewer MCI
	
	  Filename extension of the specified multimedia file
	  is not associated with any installed device.
	  file: <filename of file>
	
	This occurs if any of the following lines are missing from the [MCI extensions]
	section of the WIN.INI file and that Application accesses a file with that
	extension:
	
	mid=sequencer
	wav=waveaudio
	MMM=MMMovie
	AVI=AVIVideo
	
	RESOLUTION
	==========
	
	If any of the above lines are missing, you need to add them. If any of the lines
	has a semi-colon as the first character, you need to remove the semi- colon.
	
	For more information about editing the Windows initialization (.ini) files see
	your Windows documentation or online help.
	
	NOTE: The semi-colon at the front of the line has the effect of remarking out
	that line so that it is not read by Windows.
	
	Additional query words: multimedia sound wave midi CD-AUDIO cd audio movie avi play kbmm mmtitles art gallery bookshelf cinemania encarta sound-bits
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbSoundBitsSearch kbEncartaEncycSearch kbCineManiaSearch kbMMStrauss kbMMSchubert kbMMStravinsky kbMMMozart100 kbMMBeethoven100 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbDinosaurs100 kbMusicalInst kbSoundBits kbArtGallery kbEncarta1995 kbEncartaEnCyc1994
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
