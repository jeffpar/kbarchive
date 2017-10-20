---
layout: page
title: "Q260015: PC DirSync: Dispatch Does Not Work on Windows 2000"
permalink: /kb/260/Q260015/
---

## Q260015: PC DirSync: Dispatch Does Not Work on Windows 2000

{% raw %}

	Article: Q260015
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.x 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Dispatch program runs until it tries to initiate NSDA to start the directory
	synchronization (dirsync) process. Then the Dispatch program stops, and
	generates an OS/2 subsystem error message.
	
	RESOLUTION
	==========
	
	To resolve this problem, run a forcedos command that precedes the normal command
	line, for example:
	
	  forcedos dispatch -dmo
	
	MORE INFORMATION
	================
	
	You are attempting to start a bound MS-DOS-based OS/2 application. This
	application uses an unsupported OS/2 application programming interface (API),
	and therefore cannot be started by the OS/2 subsystem. After the application
	stops, you can try to restart it by using the forcedos command, because the
	MS-DOS-based subsystem supports the application.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN3xSearch
	Version           : WINDOWS:3.x
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
