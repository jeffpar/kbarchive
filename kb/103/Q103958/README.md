---
layout: page
title: "Q103958: PC Win: Header Fields May Be Misaligned When Redrawn"
permalink: /kb/103/Q103958/
---

## Q103958: PC Win: Header Fields May Be Misaligned When Redrawn

{% raw %}

	Article: Q103958
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows may display misaligned
	edit boxes--the To: box is where the Cc: box should be, the Cc: box is where the
	Subject: box should be, the Subject: box is one line below its usual position,
	and there is nothing where the To: box should be.
	
	CAUSE
	=====
	
	This is a FRAMEWRK.DLL problem that can occur with bottomless forms (such as the
	Send/Read note). When you edit a message and then scroll to the top of the
	screen, the repositioning algorithm misaligns the edit boxes.
	
	RESOLUTION
	==========
	
	To correct the positioning of the edit boxes, you must close and reopen the form
	(message). Minimizing and maximizing the form does not redraw the screen
	properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20 painting messed wrong improper low different moved repositioned
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	

{% endraw %}
