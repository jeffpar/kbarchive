---
layout: page
title: "Q199313: &quot;Access Is Denied&quot; in License Manager Server Browser"
permalink: /kb/199/Q199313/
---

## Q199313: &quot;Access Is Denied&quot; in License Manager Server Browser

{% raw %}

	Article: Q199313
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to gain access to a server (either the local server or another
	server on the network) from the Server Browser tab in License Manager, you may
	receive the following error message:
	
	  Access is Denied
	
	CAUSE
	=====
	
	This error message can occur if the Admin$ share on the server has been
	disabled. The Admin$ share, along with the other default administrative shares,
	can be unintentionally disabled.
	
	RESOLUTION
	==========
	
	To resolve this issue, see the information in the following article in the
	Microsoft Knowledge Base:
	
	  Q156365 Hidden Shares Are No Longer Available After Using System Policy
	
	Additional query words: list open primary PDC backup BDC
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
