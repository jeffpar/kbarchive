---
layout: page
title: "Q104517: PC MAPI: Err: Out of Memory Error with MAPIAddress() Function"
permalink: /kb/104/Q104517/
---

## Q104517: PC MAPI: Err: Out of Memory Error with MAPIAddress() Function

{% raw %}

	Article: Q104517
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Messaging Application Programming Interface (MAPI) from
	versions 3.0 and 3.0b of Microsoft Mail for PC Networks to run the MAPIAddress()
	function, you may receive the following error message:
	
	  Out of Memory
	
	CAUSE
	=====
	
	This error occurs if a second MAPI session is started and closed, and the
	MAPIAddress() function is then executed in the first session. The window class
	of the first session is destroyed because its window class is duplicated by the
	second session.
	
	RESOLUTION
	==========
	
	Upgrade to version 3.2 of Microsoft Mail for Windows to obtain the new
	FRAMEWRK.DLL file.
	
	FRAMEWRK.DLL is also available with version 1.0 of Microsoft Electronic Forms
	Designer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the FRAMEWRK.DLL file included
	with versions 3.0 and 3.0b of Microsoft Mail for Windows. This problem was
	corrected in version 3.2 of Microsoft Mail for Windows.
	
	Additional query words: 3.00 3.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
