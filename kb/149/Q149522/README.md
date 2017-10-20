---
layout: page
title: "Q149522: System Error 71 and License Manager"
permalink: /kb/149/Q149522/
---

## Q149522: System Error 71 and License Manager

{% raw %}

	Article: Q149522
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients may receive the following error when they try to connect to a Windows NT
	3.51 server:
	
	  System Error 71
	
	  No more connections can be made to this remote computer at this time because
	  there are already as many connections as the computer can accept.
	
	CAUSE
	=====
	
	One possible cause for this error is that License Manager has not been set up to
	grant enough connections to meet the client's demands. In this case, go into the
	Control Panel's Licensing tool and set up License Manager with the appropriate
	number of client licenses per seat or per server.
	
	Another possible cause of this error message is that License Manager has a
	corrupted or incorrect purchase history record. The Cpl.cfg file in the
	%SystemRoot%\System32 directory is responsible for maintaining this
	information.
	
	
	Additional query words: 3.51 license prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
