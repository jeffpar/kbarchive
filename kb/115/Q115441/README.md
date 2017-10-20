---
layout: page
title: "Q115441: X400: Cursor Disappears When Tabbing From Facilities to Help"
permalink: /kb/115/Q115441/
---

## Q115441: X400: Cursor Disappears When Tabbing From Facilities to Help

{% raw %}

	Article: Q115441
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you TAB from Facilities to Help, the cursor disappears when you press TAB
	once, then reappears at Help if you press it a second time. The cursor also
	disappears when you move from Cancel to Country and vice versa in Routing.
	
	If the cursor is at X.121 Address, pressing TAB takes you to SSAP. Pressing it
	again moves the cursor to TSAP. Pressing it again moves the cursor to User Data.
	The next TAB moves the cursor to Facilities. The next TAB simply makes the
	cursor disappear, and the next TAB makes it reappear at Help. One final TAB
	moves the cursor to OK.
	
	The program is written in Visual Basic, and a space was inserted between
	Facilities and Help. One TAB from Facilities moves the cursor to that space, and
	another TAB moves it back into the menu.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
