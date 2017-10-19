---
layout: page
title: "Q196415: XADM: Move Server &amp; Move Failure when DN Longer than 256 Chars"
permalink: /kb/196/Q196415/
---

## Q196415: XADM: Move Server &amp; Move Failure when DN Longer than 256 Chars

	Article: Q196415
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a stand-alone server, S1, in a site called Site, has an object (mailbox)
	whose Distinguished Name (DN) is 256 characters, and you run the Move Server
	wizard on S1 to move the server into a site called Site1, the mailbox in
	question will now have a DN with 257 characters (by virtue of the fact that the
	site name is now a single character longer--Site1 instead of Site).
	
	As the Move Server wizard imports mailboxes, when it encounters this mailbox, a
	fatal error will occur with the following message:
	
	  One or more errors were encountered while importing objects into the
	  directory. Please see the Application Event Log for details.
	
	When you click OK, a new error dialog box appears with the following message:
	
	  An error occurred. Your server has not been moved. Error code c103757c
	  The server is recovered.
	
	Looking in the Windows NT Event Viewer, you find a corresponding log entry whose
	description reads:
	
	  Could not create object 1234567890123456789012345678901234567890123456
	  because the directory service reported the following error: An internal
	  processing error has occurred: invalid name. Try restarting the application
	  or the Microsoft Exchange Server computer, or both.
	
	Restarting the application or the computer does not resolve the problem.
	
	CAUSE
	=====
	
	This problem occurs because the length of the object's DN exceeds the 256-
	character limit.
	
	RESOLUTION
	==========
	
	
	The issue has been noted in the Release Notes for Move Server wizard. The entry
	in the Release Notes reads:
	
	  It is possible that by changing organization and site information, or
	  resolving duplicate e-mail addresses, the directory name for an object
	  can exceed the 256 character limit. If a directory name exceeds the
	  character limit, the move will fail. Check for directory names in the
	  original site that are close to the character limit prior to the move.
	  If you have multiple nested containers, the directory name could be
	  close to the limit. Also, this could happen if the directory name is
	  close to the character limit and one of the following conditions made
	  the directory name exceed
	  the limit:
	
	   - New organization name was longer than the previous organization name.
	   - New site name was longer than the previous organization name.
	   - Resolved duplicate objects have names that are longer than the
	     previous names.
	
	WORKAROUND
	==========
	
	There is no workaround for this problem. The administrator in charge of the move
	should ascertain that the DNs are not close to the 256-character limit before
	the move. This is most possible when there are several layers of nesting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Move Server wizard component
	for Exchange Server version 5.5.
	
	MORE INFORMATION
	================
	
	The information that the Move Server wizard considers as "the" Distinguished
	Name of the user includes ALL the default forms of address for each user. To
	view all these forms of address, export the directory to a CSV file and examine
	the contents of the EMail Addresses field. This is a multi-valued field and
	normally includes Microsoft Mail, SMTP, X.400, and Lotus cc:Mail address
	formats. In cases where DMS is in use, this field may also contain an X.500
	version of the address. If the total number of characters in the EMail Addresses
	field for ANY user exceeds 256 characters, the Move Server wizard stops running.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
