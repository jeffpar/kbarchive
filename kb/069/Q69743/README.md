---
layout: page
title: "Q69743: PC DOS: Using the NEWMAIL Utility with Mail"
permalink: /kb/069/Q69743/
---

## Q69743: PC DOS: Using the NEWMAIL Utility with Mail

{% raw %}

	Article: Q69743
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for PC Networks NEWMAIL utility allows you to check the
	postoffice for new mail. It tells you how many new mail messages and how many
	unread mail messages you have.
	
	To run the NEWMAIL utility, connect to the drive where the Mail executable files
	are located (if you do not know, contact your network administrator). From the
	MS-DOS command prompt, type the following and press ENTER:
	
	  "newmail <mailbox name>" (without the quotation marks)
	
	The new mail information for the person with <mailbox name> will be
	displayed on the screen. The NEWMAIL utility has no provision for passwords;
	therefore, any user can run NEWMAIL on any other user's mailbox, including the
	mailbox of the Mail administrator.
	
	MORE INFORMATION
	================
	
	The above example assumes that the Mail database is located on drive M. If your
	Mail database is located on a different drive, the line to invoke the NEWMAIL
	utility should look like this:
	
	  newmail -d<x> <mailbox name>
	
	The -D parameter tells Newmail to look on drive X for the Mail database.
	
	For more information about the NEWMAIL utility, see the following documentation:
	
	- Appendix D of the Microsoft Mail 2.1 "Administrator's Guide"
	
	- Appendix A of the Microsoft Mail 3.0 "Administrator's Guide"
	
	Additional query words: 2.10 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
