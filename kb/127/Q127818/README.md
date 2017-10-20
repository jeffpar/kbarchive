---
layout: page
title: "Q127818: Clients Fail to Connect to Windows NT Server"
permalink: /kb/127/Q127818/
---

## Q127818: Clients Fail to Connect to Windows NT Server

{% raw %}

	Article: Q127818
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are intermittently not able to connect to Windows NT Server version 3.5 from
	your network client. If you attempt to connect from a Windows NT client, a
	"Semaphore Time Out" error message appears, but no events are logged in the
	System Log.
	
	
	CAUSE
	=====
	
	The client computer is incorrectly sending a Session End frame in response to a
	Receive Outstanding frame. This appears to happen when the client computer is in
	an error condition prior to the transmission.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 2.2 2.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
