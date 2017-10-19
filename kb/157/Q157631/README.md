---
layout: page
title: "Q157631: XFOR: Cannot Import Bulletin Board Information from cc:Mail"
permalink: /kb/157/Q157631/
---

## Q157631: XFOR: Cannot Import Bulletin Board Information from cc:Mail

	Article: Q157631
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kb3rdparty exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import bulletin board information from Lotus cc:Mail to
	Microsoft Exchange Server, several error messages may be displayed and a public
	folder may not be created, indicating that the import did not finish
	successfully. If you view the application log, the following events appear:
	
	  Source: MS Exchange Migration
	  Event: 98
	  Description: Parser Error on line <x>. An error occurred in processing
	  of line #<x>.
	
	  Source: MS Exchange Migration
	  Event: 122
	  Description: Parser Error on line <x>. Failure to open/create public
	  Folder.
	
	CAUSE
	=====
	
	This problem can occur when the service account does not have permission to
	create a top-level folder.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. Click Start, point to Programs, point to Microsoft Exchange, and then click
	  Microsoft Exchange Administrator.
	
	2. Click Configuration in the left pane, click Information Store Site
	  Configuration in the right pane, and then click Properties on the File menu.
	  Note that you may need to expand the server's branch in the left pane by
	  double-clicking the branch, or by clicking the plus sign (+) to the left of
	  the branch, before you can click Configuration.
	
	3. Click the Top Level Folder Creation tab. If a list of names appears in the
	  Allowed To Create Top Level Folders box, delete the names and then select
	  All.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	There is no mailbox associated with the service account. Therefore, if you
	specify a list of names in the Allowed To Create Top Level Folders box instead
	of selecting All, you are unable to include the service account in the list and
	the service account is unable to create top-level folders.
	
	When you import bulletin board information from Lotus cc:Mail, Microsoft Exchange
	Server creates a new public folder called Lotus cc:Mail Bulletin Boards
	(<server>), where <server> is the name of the server from which you
	are importing. The contents of the bulletin board are copied to this folder. If
	you import multiple bulletin boards, additional folders for each bulletin board
	are created below this folder.
	
	cc:Mail is manufactured by Lotus, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: migrate
	
	======================================================================
	Keywords          : kb3rdparty exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
