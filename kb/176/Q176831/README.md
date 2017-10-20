---
layout: page
title: "Q176831: Multimedia: Computer Stops Responding When Accessing Web Links"
permalink: /kb/176/Q176831/
---

## Q176831: Multimedia: Computer Stops Responding When Accessing Web Links

{% raw %}

	Article: Q176831
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbmmkbfaq
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Windows 
	- Microsoft Bookshelf 98 for Windows 
	- Microsoft Cinemania for Windows, 1992, 1993, 1994, 1995, 1996, 1997 editions 
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta Virtual Globe 1998 edition 
	- Microsoft Music Central for Windows, 1996, 1997 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a Web link from one of the programs listed in the
	applies to section of this article, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if the HyperText Transfer Protocol (HTTP) is not a
	registered file type.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Double-click My Computer.
	
	2. On the View Menu, click Options.
	
	3. Click the File Types tab.
	
	4. In the Registered File Types box, search for the following file type:
	
	  URL:HyperText Transfer Protocol
	
	If this file type does not exist, you must either install Microsoft Internet
	Explorer version 3.02 or later, or install another Web browser that correctly
	registers the HTTP file type.
	
	You can obtain Internet Explorer from the following Microsoft Web site:
	
	  http://www.microsoft.com/ie/download
	
	MORE INFORMATION
	================
	
	Installing Internet Explorer registers the HTTP file type and configures
	Internet Explorer to be your default Windows 95 Web browser. If you want to make
	another Web browser (such as Netscape Navigator) your default Web browser, start
	this browser from the Start menu. When you are prompted to make this browser
	your default Web browser, click Yes.
	
	Additional query words: multi-media mmtitles
	
	======================================================================
	Keywords          : kbenv kbmm kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbEncartaEncycSearch kbCineManiaSearch kbBookShelf1996 kbBookShelf1997 kbBookShelf1998 kbMusicCentral kbEncartaEnCyc1997 kbEncartaEnCyc1997Del kbEncartaEnCyc1998 kbEncartaVirtGlobe98 kbMusicCentral1996 kbMusicCentral1997
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
