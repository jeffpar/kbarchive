---
layout: page
title: "Q150479: Mac Bookshelf '96-'97: Cannot Change Memory Allocation"
permalink: /kb/150/Q150479/
---

## Q150479: Mac Bookshelf '96-'97: Cannot Change Memory Allocation

{% raw %}

	Article: Q150479
	Product(s): Microsoft Home Multimedia Titles
	Version(s): MACINTOSH:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 1996-97 for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start and then quit Bookshelf '96-'97 for the Power Macintosh, it is
	not possible to change the programs memory allocation or to throw the file away.
	
	CAUSE
	=====
	
	To minimize the number of extensions that Microsoft Bookshelf must install into
	the Extensions folder, a number of PowerPC shared libraries have been built into
	the Bookshelf itself. Because these libraries can stay open even after the
	application has quit, you are not able to change the memory allocated to the
	application in the Get Info window.
	
	RESOLUTION
	==========
	
	To change the memory allocated to the program, or to throw the file away, you
	must first restart the computer.
	
	MORE INFORMATION
	================
	
	The behavior only occurs with the Power Macintosh version of Bookshelf. It will
	not happen with the non-Power Macintosh (680x0 version) that is also included on
	the Bookshelf '96-'97 compact disc.
	
	Additional query words: 1996 multi media multimedia multi-media mmtitles kbmm power powermac mem partition ppc
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeMMsearch kbBookshelfSearch kbBookShelf1996Mac kbBookShelf1997Mac
	Version           : MACINTOSH:
	
	=============================================================================
	

{% endraw %}
