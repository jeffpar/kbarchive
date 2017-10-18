---
layout: page
title: "Q187174: Messenger Messages Are Lost If Desktop at Screen Saver"
permalink: kb/187/Q187174/
---

## Q187174: Messenger Messages Are Lost If Desktop at Screen Saver

	Article: Q187174
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your computer receives a Messenger message while the desktop is not the
	foreground application (for example, a screen saver is running), the message is
	not displayed.
	
	CAUSE
	=====
	
	With Microsoft Windows NT, the Messenger service attempts to display a message
	box, and, if it fails because of an incorrect desktop, the thread goes to sleep,
	and will be displayed after the next desktop switch by Winlogon.
	
	With Terminal Server, Messenger messages are not displayed by the Messenger
	service, but a special Terminal Server mechanism is used to display it on the
	correct session. But the errors are not tested, so if the messages cannot be
	displayed because of a wrong desktop, they are lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0, Terminal Server Edition.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
