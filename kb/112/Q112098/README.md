---
layout: page
title: "Q112098: PC MMTA: Err Msg: 999:55 Drive in Use. Attempting to Use..."
permalink: /kb/112/Q112098/
---

## Q112098: PC MMTA: Err Msg: 999:55 Drive in Use. Attempting to Use...

{% raw %}

	Article: Q112098
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use dynamic drive connections when you run version 3.2 of the Microsoft
	Mail Multitasking Message Transfer Agent (MTA) under OS/2 (version 1.3 or
	later), NetWare 3.11 or 3.12 file servers, or the Novell redirector for OS/2
	(version 1.3 or later), the following error message may appear:
	
	  999:55 Drive in use. Attempting to use local or mapped drive.
	
	CAUSE
	=====
	
	This error results from a problem in the Novell redirector for OS/2. The problem
	is that the drive connections are not closed properly.
	
	RESOLUTION
	==========
	
	To obtain the latest update to the NetWare Requestor for OS/2, contact Novell at
	(800) 638-9273.
	
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailMMTA320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
