---
layout: page
title: "Q175467: Bookshelf: Can't Install on Workstation from Network Drive"
permalink: kb/175/Q175467/
---

## Q175467: Bookshelf: Can't Install on Workstation from Network Drive

	Article: Q175467
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbimu
	Last Modified: 23-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	- Microsoft Bookshelf 99 
	- Microsoft Bookshelf 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Bookshelf on a workstation from a network
	drive, you may receive the following error message:
	
	  The file <drive>:\Office\Msreftl.dll could not be opened.
	
	CAUSE
	=====
	
	The server may be running network operating system software that does not
	support long filenames.
	
	RESOLUTION
	==========
	
	Upgrade your network operating system software to a version that supports long
	filenames.
	
	MORE INFORMATION
	================
	
	This error occurs because the file Msreftl.dll is normally installed to the path
	Program Files\Common Files\Microsoft Shared\Reference Titles. Because this path
	contains long filenames, the file cannot be installed.
	
	For more information on using Bookshelf on networks and servers, please see the
	Bookshelf Network Administrator's Guide.
	
	
	Additional query words: multi multi-media media mm diskless
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbimu 
	Technology        : kbHomeMMsearch kbBookshelfSearch kbBookShelf1998 kbBookShelf2000 kbBookShelf1999
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
