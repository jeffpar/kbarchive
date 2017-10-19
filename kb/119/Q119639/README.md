---
layout: page
title: "Q119639: PC WRmt: Can't Start Mail Remote Automatically w/ AT&amp;T Driver"
permalink: /kb/119/Q119639/
---

## Q119639: PC WRmt: Can't Start Mail Remote Automatically w/ AT&amp;T Driver

	Article: Q119639
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 17 of the Microsoft Mail Remote for Windows "User's Guide" lists the
	procedure to start Mail Remote automatically by including the mailbox name and
	password in the Program Item Properties command line. For example:
	
	  c:\msmail\msmail.exe johndoe password
	
	If you start Mail Remote with the AT&T Mail driver selected as the active
	transport, the above command does not work as expected. The mailbox information
	is passed on, but you are still prompted for the password even though it is
	supplied on the command line.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
