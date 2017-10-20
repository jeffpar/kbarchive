---
layout: page
title: "Q108784: Net Statistics Workstation Incorrectly Refers to Reqbuf"
permalink: /kb/108/Q108784/
---

## Q108784: Net Statistics Workstation Incorrectly Refers to Reqbuf

{% raw %}

	Article: Q108784
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Under the category "Times Buffers Exhausted," Net Statistics Workstation
	indicates that it is reporting on how many times work buffers were exhausted on
	the server, but it actually is reporting on request buffers.
	
	CAUSE
	=====
	
	NetStatisticsGet2 API data structure (workstation) has a parameter for
	stw0_reqbufneed.
	
	The OS/2 redirector uses a server message block heap buffer composed of
	(basically) numworkbuf*sizworkbuf. The redirector allocates out of this buffer,
	and increments the reqbufneed statistic when the buffer gets exhausted. It
	should increment the workbufneed statistic, since only the server uses reqbufs.
	
	RESOLUTION
	==========
	
	Tune NumWorkBuf in the [workstation] section of LANMAN.INI.
	
	STATUS
	======
	
	
	Additional query words: 2.20 2.2 reqbuf workbuf
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
