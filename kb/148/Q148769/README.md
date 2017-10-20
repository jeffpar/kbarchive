---
layout: page
title: "Q148769: PC MMTA: General Protection Fault in X25EICON.OVL"
permalink: /kb/148/Q148769/
---

## Q148769: PC MMTA: General Protection Fault in X25EICON.OVL

{% raw %}

	Article: Q148769
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Windows NT Multitasking MTA (MMTA) from the command
	line, and you use an Eicon card, the following error message may be displayed:
	
	  General Protection Fault in X25EICON.OVL
	  An OS/2 program called Dos32Dispatch() with a bad pointer argument.
	  The program will be terminated.
	
	RESOLUTION
	==========
	
	Obtain the latest version of the following two files from Microsoft Product
	Support Services (PSS):
	
	- X25.dll
	
	- X25t32.dll
	
	Contact the Microsoft Support Network Sales and Information group at (800)
	936-3500, from 6:00 a.m. until 6:00 p.m. Pacific time, Monday through Friday,
	excluding holidays.
	
	MORE INFORMATION
	================
	
	When you run the Mail External program as a service and have an opened monitor
	window, the error message does not have time to appear on the screen. The
	instance does not respond to the ESC key.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
