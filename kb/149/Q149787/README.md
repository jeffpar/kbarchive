---
layout: page
title: "Q149787: 3Com 3C59x Causes Windows NT Server to Stop Responding"
permalink: /kb/149/Q149787/
---

## Q149787: 3Com 3C59x Causes Windows NT Server to Stop Responding

{% raw %}

	Article: Q149787
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
	
	Under certain circumstances, your Windows NT Server freezes completely when you
	use a 3Com 3C59x network card with Bus Mastering enabled.
	
	CAUSE
	=====
	
	The hang of the server is caused by a loop in the Windows NT 3.51 3Com 3C59x
	driver (from the Drvlib directory).
	
	
	RESOLUTION
	==========
	
	3Com provides a fix for the 3C59x network card driver (version 1.10.00).
	
	The new driver, EL59x.sys (version 1.10), is available at the following WWW
	location as 3c59xx.exe (a self extracting file):
	
	http://infodeli.3com.com/infodeli/swlib/shipping_adapter_files.htm
	
	The driver is also available from 3COM's Bulletin Board Service (BBS) at (408)
	980-8204.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
