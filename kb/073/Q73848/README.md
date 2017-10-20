---
layout: page
title: "Q73848: Time/Date Stamp Workaround for Notepad"
permalink: /kb/073/Q73848/
---

## Q73848: Time/Date Stamp Workaround for Notepad

{% raw %}

	Article: Q73848
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The time/date stamp in Windows Notepad does not display the time on the
	document.
	
	WORKAROUND
	==========
	
	To get the time and date to appear on the document:
	
	1. From the File menu, choose Page Setup.
	
	2. In the header or footer section, whichever you would like to use, enter the
	  following:
	
	  " &d, &t " (without the quotation marks)
	
	This prints the system date followed by a comma, a space, and then the system
	time. (This information does not appear on the screen.)
	
	This is a temporary workaround that functions only as long as Notepad is active
	(minimized, in a window, or in full-screen mode). Once Notepad is closed, the
	header defaults back to "&f" and the footer defaults back to "Page &p".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem does not occur in later versions of Windows.
	
	Additional query words: *time&date date stamp win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
