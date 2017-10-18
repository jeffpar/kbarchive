---
layout: page
title: "Q225243: Err Msg: A Device That Is Required to Play This Type of Media..."
permalink: kb/225/Q225243/
---

## Q225243: Err Msg: A Device That Is Required to Play This Type of Media...

	Article: Q225243
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0; :; Win2000:95
	Operating System(s): 
	Keyword(s): kberrmsg kbsound kbtool kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Bookshelf 2000 
	- Microsoft Encarta Encyclopedia 99 
	- Microsoft Encarta Encyclopedia Deluxe 99 
	- Microsoft Encarta Encyclopedia 2000 
	- Microsoft Encarta Encyclopedia Deluxe 2001 for Windows 
	- Microsoft Encarta Encyclopedia Standard 2001 for Windows 
	- Microsoft Encarta Reference Suite 99 
	- Microsoft Encarta Reference Suite 2000 
	- Microsoft Encarta Reference Suite 2001 
	- Microsoft Encarta Virtual Globe 99, version 1.0 
	- Microsoft Encarta Interactive World Atlas 2000 
	- Microsoft Encarta Interactive World Atlas 2001 
	- Microsoft Encarta World English Dictionary 
	- Microsoft Encarta World English Dictionary 2001 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play the MPEG Layer 3 (MPEG3) sample media file using the
	Media Test Tool included with the programs listed at the beginning of this
	article, you may receive the following error message:
	
	  Media Test Control
	
	  A device that is required to play this type of media was not detected on your
	  computer.
	
	CAUSE
	=====
	
	This behavior can occur if the software installed on your computer does not
	support MPEG3 playback.
	
	NOTE: This behavior occurs only on Microsoft Windows 95-based computers.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Microsoft Internet Explorer 4.0 or later.
	
	To work around this issue, use Media Player to play the sample media file. To do
	this, follow these steps:
	
	1. Click Start, point to Accessories, point to Multimedia, then click Media
	  Player.
	
	2. Click Device, and then click Sound.
	
	3. Navigate to and open the following folder on your hard disk
	
	  <drive>:\Program Files\Common Files\MTSTool\Media
	
	  where <drive> is the drive letter of the hard disk on which Windows is
	  installed.
	
	4. Click the Mpeg3.wav file, and then click Open.
	
	5. Click the Play button.
	
	NOTE: If you receive the following error message, MPEG3 playback is not
	configured properly on your computer.
	
	  Media Player
	
	  MMSYSTEM326 No wave device that can play files in the current format is
	  installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Media Test Tool.
	
	MORE INFORMATION
	================
	
	The Media Test Tool is intended to assist you in troubleshooting problems
	playing various media formats.
	
	This utility uses Media Control Interface (MCI) Application Programming Interface
	(API) calls to attempt to play pre-selected media items. This reduces the amount
	of time needed to test your computer's ability to play various media formats.
	
	Additional query words: multi multi-media media mm bs99 bs2000 bs2k enc99 evg99
	
	======================================================================
	Keywords          : kberrmsg kbsound kbtool kbimu 
	Technology        : kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbBookShelf2000 kbBookShelf1999 kbEncartaEnCyc2000 kbEncartaEnCyc1999 kbEncartaEnCyc1999Del kbEncartaReference99 kbEncartaReference2000 kbEncartaReference2001 kbEncartaVirtGlobe99 kbEncartaWorldAtlas2001 kbEncartaWorldAtlas2000 kbEncartaWorldEngDict2001
	Version           : WINDOWS:1.0; :; Win2000:95
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
