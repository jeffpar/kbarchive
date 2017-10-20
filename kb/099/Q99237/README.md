---
layout: page
title: "Q99237: QuicKeys Intercepts Keystrokes Before Applications with Focus"
permalink: /kb/099/Q99237/
---

## Q99237: QuicKeys Intercepts Keystrokes Before Applications with Focus

{% raw %}

	Article: Q99237
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1993 edition,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1993 edition 
	- Microsoft Multimedia Viewer, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	QuicKeys is an application-independent search tool that allows you to select
	text or phrases within an application and search Bookshelf with defined
	keystrokes. As an installable driver, QuicKeys is continually monitoring the
	keyboard for a potential accelerator key combination. QuicKeys has no way of
	determining if the accelerator is for Bookshelf or the application.
	
	If a QuicKey combination matches an accelerator defined in another application,
	QuicKeys will intercept the keystrokes before the application. As a result,
	Bookshelf will load with Index or Find set to the defined book.
	
	RESOLUTION
	==========
	
	To avoid accelerator conflicts, define QuicKeys with two or more of the
	following accelerator keys: CTRL, SHIFT, and ALT.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Microsoft Bookshelf 1993.
	
	2. From the Options menu, select QuicKeys.
	
	3. Define All Books with the key combination CTRL+Z.
	
	4. Exit Bookshelf 1993.
	
	5. Start Microsoft Excel.
	
	6. Press CTRL+Z (The Excel accelerator for Undo).
	
	Result: Bookshelf is loaded with the Index set to All Books.
	
	Additional query words: KBPRIORITY1 1993 Intercepts Bookshelf 93 '93 multimedia multi media multi-media books start run usage quickie quickkey quick key keys
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbBookshelfSearch kbBookShelf1993 kbMMViewer200
	Version           : :1993 edition,2.0
	
	=============================================================================
	

{% endraw %}
