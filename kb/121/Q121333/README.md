---
layout: page
title: "Q121333: Bookshelf: No Pronunciations in Dictionary"
permalink: kb/121/Q121333/
---

## Q121333: Bookshelf: No Pronunciations in Dictionary

	Article: Q121333
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition,1995 edition
	Operating System(s): 
	Keyword(s): kbmm kbsound kbimukbfaq
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows versions 1994 edition, 1995 edition 
	- Microsoft Bookshelf for Windows, 1995 Intro Edition 
	- Microsoft Bookshelf '95 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a pronunciation in Bookshelf for Windows, the program may not
	play the sound.
	
	CAUSE
	=====
	
	This behavior can occur if the audio codec that Bookshelf uses to play
	pronunciation sound clips is not properly configured.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your version of Microsoft
	Windows.
	
	Windows 98
	----------
	
	To resolve this issue in Microsoft Windows 98, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Devices tab, double-click Audio Compression Codecs.
	
	4. Double-click Microsoft GSM 6.10 Audio Codec.
	
	5. Click Settings.
	
	6. Click Auto-Config, and then click OK.
	
	  NOTE: Pronunciations do not play if the value in the Decompression box is
	  8000Hz or less.
	
	7. Click OK, and then click OK again.
	
	8. Close Control Panel.
	
	Windows 95
	----------
	
	To resolve this issue in Microsoft Windows 95, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Advanced tab, double-click Audio Compression Codecs.
	
	4. Double-click Microsoft GSM 6.10 Audio Codec.
	
	5. Click Settings.
	
	6. Click Auto-Config, and then click OK.
	
	  NOTE: Pronunciations do not play if the value in the Decompression box is
	  8000Hz or less.
	
	7. Click OK, and then click OK again.
	
	8. Close Control Panel.
	
	Windows 3.1x
	------------
	
	To resolve this issue in Microsoft Windows 3.1x, follow these steps:
	
	1. In the Main Group in Program Manager, double-click Control Panel.
	
	2. Double-click the Drivers icon.
	
	3. In the list of drivers, click Microsoft GSM 6.10 Audio Codec, and then click
	  Setup.
	
	4. Click Auto-Config.
	
	  NOTE: Pronunciations do not play if the value in the Maximum Realtime Decode
	  Rate box is 8000Hz or less.
	
	5. Click Apply Now.
	
	6. Restart Windows.
	
	For more information about how to resolve this issue, see the following article
	in the Microsoft Knowledge Base:
	
	  Q112554 No Pronunciations or Foreign Language Sounds
	
	Additional query words: msn_bookshelf multi-media pronounce pronunciation no sound
	
	======================================================================
	Keywords          : kbmm kbsound kbimu kbfaq
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1994 kbBookShelf1995 kbBookShelf1995Intro
	Version           : :1994 edition,1995 edition
	Issue type        : kbhowto
	
	=============================================================================
	
