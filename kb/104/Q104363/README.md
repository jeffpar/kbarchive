---
layout: page
title: "Q104363: PC Forms: MAPI_FAILURE Forwarding from Shared Folder"
permalink: /kb/104/Q104363/
---

## Q104363: PC Forms: MAPI_FAILURE Forwarding from Shared Folder

{% raw %}

	Article: Q104363
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to forward or reply to a custom message created using version 1.0
	of Microsoft Electronic Forms Designer, you may receive the following error
	code:
	
	  MAPI_FAILURE
	
	CAUSE
	=====
	
	This error can occur when messages are stored in shared folders and E-Form
	caching is turned on.
	
	RESOLUTION
	==========
	
	When you forward or reply to messages stored in shared folders, you must have
	E-Form caching turned off. To do so, make the following modification to the
	[E-Form Cache] section of the MSMAIL.INI file:
	
	  [E-Form Cache]
	  Maximum=0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 3.00 3.00b 3.20 PC Win
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	

{% endraw %}
