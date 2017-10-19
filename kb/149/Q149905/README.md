---
layout: page
title: "Q149905: XFOR: Copying DXA Messages to a Mailbox"
permalink: /kb/149/Q149905/
---

## Q149905: XFOR: Copying DXA Messages to a Mailbox

	Article: Q149905
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When setting up Microsoft Exchange Server as a dirsync requestor, it is possible
	to specify a mailbox to get copies of the incoming and outgoing dirsync
	messages. This option is available through the Microsoft Exchange Administrator
	program if Microsoft Exchange Server is the dirsync server. It requires manual
	modification of a raw-property value when Microsoft Exchange Server is set up as
	a requestor.
	
	MORE INFORMATION
	================
	
	To get copies of dirsync messages in a particular mailbox:
	
	1. Start the Microsoft Exchange Administrator program (Admin.exe) in raw mode:
	  admin /r.
	
	2. Choose an administrator mailbox and view its raw properties: click File then
	  Raw Properties.
	
	3. Go to the Obj-Dist-Name attribute and copy its value to the clipboard.
	  Hit escape to exit from the mailbox raw-properties page.
	
	4. Go the Connections object and on the right hand side select the dirsync
	  requestor object you created.
	
	5. View the raw properties for this object.
	
	6. Set View Attibutes of Type: All.
	
	7. Scroll through the object attributes screen until you find DXA-Local- Admin.
	
	8. On the Edit-Value, paste the user's directory name you copied on step 3.
	
	9. Click Set, and then click Ok.
	
	You need to restart the Microsoft Exchange Directory Synchronization service
	after making this change.
	
	Additional query words: cc: cc admin administrator
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
