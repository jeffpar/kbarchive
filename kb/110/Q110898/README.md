---
layout: page
title: "Q110898: Mac Gen: Summary List of Mail 3.1 Bug Fixes"
permalink: kb/110/Q110898/
---

## Q110898: Mac Gen: Summary List of Mail 3.1 Bug Fixes

	Article: Q110898
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a list of bugs fixed in version 3.1 of Microsoft Mail for
	AppleTalk Networks. This is not a comprehensive list; this list is current as of
	January 1, 1994.
	
	For more information on the fix listed, query in the Microsoft Knowledge Base on
	the article ID or the bug number.
	
	PROBLEMS FIXED IN VERSION 3.1
	=============================
	
	- Mac Wkst: Message Summary Screen Not Displayed
	
	- Mac Tool: Errors Saving Enclosures After Rebuild
	
	- Mac Admin: Lost Details of GWRecips in PAB
	
	- Mac GW: MS Mail GW Does Not Reselect Server on Restart
	
	Mac Wkst: Message Summary Screen Not Displayed
	----------------------------------------------
	
	  Q98782
	
	When using version 3.1 of Microsoft Mail for AppleTalk Networks, the Message
	Summary screen may disappear so that only the menu bar displays. This problem
	may occur after you click the zoom box or after you launch Mail.
	
	Mac Tool: Errors Saving Enclosures After Rebuild
	------------------------------------------------
	
	  Q99305
	
	When attempting to save an enclosure attached to a message with version 3.1 of
	Microsoft Mail for AppleTalk Networks, the following error message may be
	displayed:
	
	  Couldn't write file.
	
	It is also possible when transferring the mail message to a local folder for the
	following error message to be displayed:
	
	  Sorry, the server was unable to complete the transfer. Please try again.
	
	Mac Admin: Lost Details of GWRecips in PAB
	------------------------------------------
	
	  Q99689
	
	Either of the following messages may be displayed immediately after moving a user
	with the Move User feature of the Mail Network Administrator program with
	version 3.1a of Microsoft Mail for AppleTalk Networks.
	
	- When selecting a gateway recipient from the Personal Address Book and
	  clicking the Details button, the following error message appears:
	
	  Unable to retrieve details for that item
	
	- When mailing to a gateway recipient selected from the Personal Address Book,
	  the message is immediately returned undeliverable with the following
	  message:
	
	  Could not be delivered because the recipient(s) have been removed
	
	Mac GW: MS Mail GW Does Not Reselect Server on Restart
	------------------------------------------------------
	
	  Q101446
	
	When using version 3.1 of Microsoft Mail for AppleTalk Networks, the server may
	stop processing mail for a gateway. Mail will queue in the Microsoft Mail Data
	file, which can be viewed with the Mail Network Administrator program, and will
	not be transported to the gateway service. This problem will occur after any
	restart of the machine, most commonly after a backup has taken place
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
