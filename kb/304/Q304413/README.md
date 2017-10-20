---
layout: page
title: "Q304413: Veritas Storage Replicator 2.1 for Windows NT Causes a Hang"
permalink: /kb/304/Q304413/
---

## Q304413: Veritas Storage Replicator 2.1 for Windows NT Causes a Hang

{% raw %}

	Article: Q304413
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 28-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a server with Veritas Storage Replicator 2.1 installed and a high network
	load, the server may seem to stop responding (hang) although you can still move
	the mouse pointer. If you press CTRL+ALT+DELETE, the screen may go blank. When
	this issue occurs, the server still responds to ping commands, but is not
	accessible from the network for any resources.
	
	CAUSE
	=====
	
	This issue occurs because two process threads loop by waiting for each other to
	release a resource that is owned by the other thread.
	
	RESOLUTION
	==========
	
	If you face similar issues contact Veritas for a fix or a workaround.
	
	WORKAROUND
	==========
	
	If you cannot install an update from Veritas, you can remove the drivers or
	program until you can install the update.
	
	MORE INFORMATION
	================
	
	The following Kernel-mode drivers from Veritas Storage Replicator 2.1 exhibit
	this problem:
	
	  Rxfsrec.sys Friday, Dec. 15, 18:58:23, 2000
	  Rxfsfltr.sys Friday, Dec. 15, 18:58:23, 2000
	  Rxjnlwrt.sys Friday, Dec. 15, 18:58:23, 2000
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: VSR freeze
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
