---
layout: page
title: "Q86315: PC Win: Drag/Drop Makes Folder Hierarchy Display Incorrect"
permalink: /kb/086/Q86315/
---

## Q86315: PC Win: Drag/Drop Makes Folder Hierarchy Display Incorrect

{% raw %}

	Article: Q86315
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.0, 3.0b, or 3.2 of Microsoft Mail for Windows, the folder hierarchy
	display can become incorrect after you drag-and-drop folders from the top level
	to a lower level two or more times in succession. Scrolling the list up or down
	corrects the display.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for Windows
	versions 3.0, 3.0b, and 3.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Here is an example of the problem.
	
	NOTE: MCV stands for the Message Center Viewer window that displays your folders
	and messages.
	
	Beginning Folder Hierarchy
	--------------------------
	
	+Current
	Inbox         <-- This is open
	+Mine
	-Misc
	
	  Competit
	  Discuss
	  Intl        <-- This is the top folder in view in the MCV
	  Network
	
	 -Software
	
	    Applications
	    Misc
	    PCMail
	    PenWin
	
	  Stuff
	  UI
	
	SentMail
	Wastebasket
	+WinBall
	yyPorthole
	yyProject
	yyVisBasic
	yyWinWord     <-- This is the bottom folder in view in the MCV
	+zArchive
	
	Grab "yyPorthole" and drag it up to the folder "Software" and drop it. It is
	moved correctly. Next, grab "yyProject" and drag it up to "Software" and drop
	it. The MCV now displays:
	
	Ending Folder Hierarchy
	-----------------------
	
	  Intl
	  Network
	
	 -Software
	
	    Applications
	    Misc
	    PCMail
	    PenWin
	    yyPorthole
	
	+Current
	Inbox        <-- This is shown as open
	+Mine
	-Misc
	
	  Competit
	  Discuss
	
	yyVisBasic
	yyWinWord
	
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
