---
layout: page
title: "Q234395: XADM: Folder with Slash Mark (/) Cannot Be Seen By IMAP4 Clients"
permalink: kb/234/Q234395/
---

## Q234395: XADM: Folder with Slash Mark (/) Cannot Be Seen By IMAP4 Clients

	Article: Q234395
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use an IMAP4 e-mail client, not all of the public folders are displayed
	in the list of public folders.
	
	CAUSE
	=====
	
	The public folders that aren't visible contain a slash mark (/) in the public
	folder name. The slash mark is designed as hierarchy delimiter in IMAP and is
	used to delimit levels of hierarchy in a mailbox name.
	
	RESOLUTION
	==========
	
	Change the folder name to eliminate the slash mark. The following characters are
	valid in public folder names:
	
	  Tilde ~
	  Exclamation point !
	  At sign @
	  Number sign #
	  Dollar sign $
	  Percent %
	  Caret ^
	  Ampersand &
	  Asterisk *
	  Parentheses ()
	  Braces {}
	  Brackets []
	  Apostrophe '
	  Underscore _
	  Hyphen -
	  Equal sign =
	  Plus sign +
	  Vertical bar |
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a public folder whose name contains the slash mark.
	
	2. Use an IMAP client or telnet command to download the folder list.
	
	3. Log on to a MAPI e-mail client and view the folder list.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : OE
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
