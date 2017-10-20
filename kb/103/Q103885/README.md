---
layout: page
title: "Q103885: Overview: Interrupt 21 Hook Optimization"
permalink: /kb/103/Q103885/
---

## Q103885: Overview: Interrupt 21 Hook Optimization

{% raw %}

	Article: Q103885
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	OVERVIEW: INTERRUPT 21 HOOK OPTIMIZATION
	
	In Microsoft LAN Manager version 2.1, an important performance
	optimization was implemented in the DOS redirector--the Interrupt 21
	Hook. The redirector initialization software registers a handler at
	interrupt x21. Since the redirector loads after MS-DOS, the redirector
	handler gets control, before MS-DOS, when interrupt x21 is called.
	
	When an application wants to read from or write to a file, it loads
	selected CPU registers with information such as:
	
	- the file handle
	
	- the number of bytes to read/write
	
	- a pointer to a buffer that will accept the data to be read
	
	- a pointer to a buffer that contains the data to be written
	
	The application then passes the read/write request to MS-DOS by
	calling interrupt x21 with the appropriate function number.
	
	Before the Int 21 Hook
	----------------------
	
	The request is processed by MS-DOS. If the handle for the specified
	file has been designated as "remote," MS-DOS passes the read/write
	request to the redirector.
	
	With the Int 21 Hook
	--------------------
	
	The request goes directly to the redirector, which quickly determines
	whether the request is a repeated sequential read or write. If so, the
	redirector handles the request immediately. If not, the redirector
	passes control to the next registered interrupt x21 handler, and
	MS-DOS gets control. MS-DOS performs its standard check to determine
	if the request is local or remote. If remote, MS-DOS passes the
	request back to the redirector.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
