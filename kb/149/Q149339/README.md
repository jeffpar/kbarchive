---
layout: page
title: "Q149339: Memory leak in RPCSS Running Exchange 4.0 on Windows NT 3.51"
permalink: /kb/149/Q149339/
---

## Q149339: Memory leak in RPCSS Running Exchange 4.0 on Windows NT 3.51

{% raw %}

	Article: Q149339
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While running Microsoft Exchange 4.0 Service Pack 3 on Windows NT 3.51 Service
	Pack 4 or 5 you may experience error messages when the server is running for
	several days. You may also receive the following error message:
	
	  The system is out of virtual memory.
	
	When you examine the virtual bytes of the running processes, you notice the value
	for RPCSS is increasing continuously.
	
	This problem has been observed on a server running a third party connector, but
	it also appeared when the connector was stopped.
	
	CAUSE
	=====
	
	Microsoft has found and fixed memory leaks in RPCSS while working on Windows NT
	4.0.
	
	STATUS
	======
	
	This problem is fixed in Windows NT 4.0.
	
	Additional query words: prodnt oem opk unattended
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
