---
layout: page
title: "Q121376: PC Win: Inbox Missing on Login"
permalink: /kb/121/Q121376/
---

## Q121376: PC Win: Inbox Missing on Login

{% raw %}

	Article: Q121376
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you exit and sign out of Mail while you are in the shared folders view and
	then re-enter Mail using the Check MMF utility, you lose your Inbox.
	
	CAUSE
	=====
	
	This is by design. The Check MMF utility doesn't know how to work with shared
	folders, and it doesn't know which Mail message file (MMF) folder you were
	looking at before you entered the shared folders view; therefore, the Inbox
	window is lost.
	
	RESOLUTION
	==========
	
	To restore your Inbox, choose New Windows from the Window menu.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
