---
layout: page
title: "Q91093: Quattro Pro 4.0 and NetWare Printing under WFWG"
permalink: /kb/091/Q91093/
---

## Q91093: Quattro Pro 4.0 and NetWare Printing under WFWG

{% raw %}

	Article: Q91093
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Quattro Pro to a NetWare Print Server using a network queue,
	the print job may fail. The print output may be written to the video screen.
	
	CAUSE
	=====
	
	This problem is caused by the error handling in Quattro Pro. If an error is
	reported when it tries to open the NetWare print queue (NETQ), it sends the
	print output to the wrong file handle, which can be the video screen.
	
	Additional query words: wfw 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
