---
layout: page
title: "Q136905: Ventura Does Not Launch After Installing Multimedia"
permalink: /kb/136/Q136905/
---

## Q136905: Ventura Does Not Launch After Installing Multimedia

{% raw %}

	Article: Q136905
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0,1994 edition,1995 edition; WINDOWS:1.0,1.0a,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft 500 Nations for Windows, version 1.0 
	- Microsoft Ancient Lands for Windows, version 1.0 
	- Microsoft Art Gallery for Windows, version 1.0 
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Bookshelf for Windows 1995 edition 
	- Microsoft Complete Gardening for Windows, version 1.0 
	- Microsoft Cinemania for Windows 1995 edition 
	- Microsoft Dangerous Creatures for Windows, version 1.0 
	- Microsoft Dinosaurs for Windows, version 1.0 
	- Microsoft Dogs for Windows, version 1.0 
	- Microsoft Encarta 1994 The Complete Multimedia Encyclopedia 
	- Microsoft Encarta 95 The Complete Interactive Multimedia Encyclopedia for Macintosh 
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	- Microsoft Reader's Digest Complete Do-It-Yourself Guide for Windows, version 1.0 
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing one of the Microsoft multimedia titles listed at the top of
	this article, Corel Ventura version 5 no longer starts. When you double-click
	the Ventura icon, the program does not respond.
	
	RESOLUTION
	==========
	
	Use one the following resolutions:
	
	Windows 3.x, Windows for Workgroups 3.x and Windows 95
	------------------------------------------------------
	
	Upgrade to either the F1 or F2 version of Corel Ventura 5.
	
	-or-
	
	Windows 3.x and Windows for Workgroups 3.x Only
	-----------------------------------------------
	
	Copy the following files from the Redist folder located on the Ventura CD disk 1
	to the Windows\System folder on the hard disk:
	
	- Ole2.dll
	
	- Ole2.reg
	
	- Ole2conv.dll
	
	- Ole2disp.dll
	
	- Ole2nls.dll
	
	- Ole2prox.dll
	
	- Compobj.dll
	
	- Storage.dll
	
	- Typelib.dll
	
	NOTE: The problem occurs when another application is installed and key files are
	overwritten. To prevent this problem from reoccurring, use the third option
	noted.
	
	-or-
	
	Copy the following files from the Redist folder located on the Ventura compact
	disc 1 to the Corel50\Programs folder on the hard disk. (this should be the
	Ventura working directory):
	
	- Ole2.dll
	
	- Ole2.reg
	
	- Ole2conv.dll
	
	- Ole2disp.dll
	
	- Ole2nls.dll
	
	- Ole2prox.dll
	
	- Compobj.dll
	
	- Storage.dll
	
	- Typelib.dll
	
	MORE INFORMATION
	================
	
	Corel is aware of an incompatibility issue with the E2 version of Ventura 5 and
	newer versions of the OLE files. Corel has subsequently released two newer
	versions of Ventura 5, F1 and F2. The F1 and F2 versions do not exhibit the
	incompatibility if newer OLE2 files are on the system.
	
	For more information, contact Corel Technical Support.
	
	REFERENCES
	==========
	
	Corel Technical Support: (800) 818-1848.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: mac multi media multimedia multi- mmtitles object linking embedding OLE won't can't hangs freezes no reponse nothing happens
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbZNotKeyword kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbAncientLands kb500Nations100 kbBookShelf1995 kbBookShelf1996 kbBookShelf1997 kbCinemania1995 kbCompleteGardening kbDangerousCreatures kbDinosaurs100 kbDogs100 kbJuliaChild kbWine100 kbWine100a kbWine200 kbArtGallery kbEncartaEnCyc1994 kbEncartaEnCyc1995Mac kbDoItYourself
	Version           : :1.0,1994 edition,1995 edition; WINDOWS:1.0,1.0a,2.0
	
	=============================================================================
	

{% endraw %}
