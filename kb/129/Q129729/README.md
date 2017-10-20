---
layout: page
title: "Q129729: Duplicate Computer Names with Multiple Networks Not Supported"
permalink: /kb/129/Q129729/
---

## Q129729: Duplicate Computer Names with Multiple Networks Not Supported

{% raw %}

	Article: Q129729
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot access a computer on your Windows 95 network that has the same name
	as a computer on your Novell NetWare network.
	
	CAUSE
	=====
	
	The Microsoft Network does not support duplicate computer names, even if the
	computers with duplicate names are on different network architectures. IFSMGR
	passes connection requests to the installed redirectors until one of them
	succeeds. The first server to respond is the one you get connected to.
	
	While you can set the primary redirector (VREDIR or NWREDIR) for logon purposes,
	you cannot set the order in which the redirectors register with IFSMGR.
	
	RESOLUTION
	==========
	
	To work around this behavior, you must rename one of the computers.
	
	Additional query words: smb ncp netbios
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
