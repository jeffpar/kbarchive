---
layout: page
title: "Q68604: Mac Wkst: Mail Recipients on Server List Appear in Italics"
permalink: /kb/068/Q68604/
---

## Q68604: Mac Wkst: Mail Recipients on Server List Appear in Italics

	Article: Q68604
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Mail, a recipient's name will appear italicized in the Address Mail
	window if the recipient is located on a server that has not been seen by the
	user's server for half of the "give-up" time. The give-up time is the value (X)
	in the Server Settings window for "Remove users of servers not seen for X
	days."
	
	When the Mail server changes the recipient names to italics, it sends a
	notification message to the Network Manager to inform the Network Manager that
	the server on which the italicized recipients are located has not been seen for
	half of the give-up time.
	
	MORE INFORMATION
	================
	
	The default give-up time in Mail version 3.00 is 7 days. If the default give-up
	time is used, recipients will appear in italics if they are on a server that has
	not been seen for 3.5 days. This allows the server enough time to be shut off
	for the weekend without causing messages to be sent to Network Managers. The
	minimum give-up time is 1 day.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
