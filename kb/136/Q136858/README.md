---
layout: page
title: "Q136858: COM Port failures with Digiboard mc/XEM"
permalink: /kb/136/Q136858/
---

## Q136858: COM Port failures with Digiboard mc/XEM

{% raw %}

	Article: Q136858
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Digiboard XEM/mc multiport serial board for dial in access to a
	network on an NCR 3430 running with Windows NT Server RAS Server, some ports
	drop the RTS line and fail to respond to incoming dial-up connections after
	approximately 3000 connections.
	
	CAUSE
	=====
	
	The cause of this problem is currently under investigation. It seems to be
	configuration specific to the NCR 3430 Microchannel architecture and the
	Digiboard mc/XEM board.
	
	WORKAROUND
	==========
	
	To work around this problem, stop and restart the RAS service to reset the
	ports. You will need to do this every 3000 connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Windows NT version 3.51. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
