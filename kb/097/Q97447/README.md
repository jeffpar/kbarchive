---
layout: page
title: "Q97447: NETLOGON Fails with Valid Directory, Correct Permissions"
permalink: /kb/097/Q97447/
---

## Q97447: NETLOGON Fails with Valid Directory, Correct Permissions

{% raw %}

	Article: Q97447
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	NETLOGON can sometimes fail to load, even though the path specified for scripts
	points to a valid directory, permissions are correctly set, and there are no bad
	disk sectors. It fails because the userpath must have a directory under it
	called scripts.
	
	SYMPTOMS
	========
	
	When the primary domain controller tries to load the NETLOGON service, it causes
	error NET3056, followed by a message that the path specified in the userpath or
	scripts does not match (NET5600).
	
	During a boot, if you try to start the Server service and NETLOGON fails, then
	Server fails also. Trying to start NETLOGON first brings up a message that the
	Server is not started and a prompt to enter (Y/N) for starting it. If you enter
	Y, Server service starts but NETLOGON continues to fail.
	
	This problem has been reported when the path specified for scripts in the
	LANMAN.INI file points to a valid directory with proper permissions according to
	the manual, and when CHKDSK does not locate any bad disk sections.
	
	CAUSE
	=====
	
	The path specified in userpath must have a directory under it called "scripts,"
	or NETLOGON will not start.
	
	RESOLUTION
	==========
	
	Create the necessary subdirectory. For example, if
	
	  userpath = accounts\users
	
	then you must create a subdirectory called
	
	  <lanroot>\accounts\users\scripts
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2 3056 5600
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
