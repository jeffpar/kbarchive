---
layout: page
title: "Q135734: PC NTMMTA: Err Msg: Can't Open Service Control Manager..."
permalink: kb/135/Q135734/
---

## Q135734: PC NTMMTA: Err Msg: Can't Open Service Control Manager...

	Article: Q135734
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Microsoft Mail Service Manager for the Mail Multitasking MTA for
	Windows NT (NT MMTA), the \\<servername> field cannot be longer than 14
	characters. If the entire field exceeds 14 characters, including the universal
	naming convention (UNC), the following error may occur:
	
	  Error: Can't open Service Control Manager. Check your access privileges on
	  the specified server.
	
	CAUSE
	=====
	
	The Remote Server text box accepts more than 14 characters; however, when you
	press the Refresh button, the name is truncated to 14 characters.
	
	If you use Network Monitor to trace what is send out on the network you will see
	that there are only 14 characters in the broadcast.
	
	WORKAROUND
	==========
	
	- If the <servername> has up to 14 characters, do not enter the double
	  backslash (UNC); only enter the Server Name, as demonstrated on page 12 of
	  the NT MMTA "Administrator Guide."
	
	-or-
	
	- Rename your servername to something less than 14 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of Microsoft Mail
	Multitasking MMTA for Windows NT. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
