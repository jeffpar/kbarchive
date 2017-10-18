---
layout: page
title: "Q228601: XFOR:How to Exchange Templates between Exchange Server &amp; MS Mail"
permalink: kb/228/Q228601/
---

## Q228601: XFOR:How to Exchange Templates between Exchange Server &amp; MS Mail

	Article: Q228601
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, template information is not exchanged between Microsoft Mail and
	Exchange Server through directory synchronization (dirsync). Exchange Server
	must also be a dirsync requestor. To synchronize template information such as
	Department or Phone number between Exchange Server and MS Mail, follow the steps
	outlined in the "More Information" section.
	
	MORE INFORMATION
	================
	
	1. In the Exchange Server Administrator program, set up outgoing template
	  definitions on the Exchange Server Directory Synchronization object.
	
	  a. In the Configuration container, expand Servers, expand Server Name,
	     double-click on the Directory Synchronization object, select the Outgoing
	     Templates tab, and then click the New button.
	
	  b. In the "Mapped the Attribute" field, select Department from the drop-down
	     list.
	
	  c. In the "To the String" field, type, Department: (include the colon).
	
	     Repeat these steps for other template information such as address and
	     city.
	
	     NOTE: Be sure to include the colon after each string entry.
	
	2. If the Exchange Server computer is a dirsync requestor, click to select the
	  "Send local template information" and "Export on Next Cycle" check boxes on
	  the Setting tab of the Requestor object's properties page. If the Exchange
	  Server computer is the dirsync server, click to select the "Export on Next
	  Cycle" check box on the General tab of the Remote Requestor object's
	  properties page.
	
	3. Stop and restart the Microsoft Exchange Directory Synchronization Service.
	
	4. Start the MS Mail Admin program.
	
	5. On the Config menu, click Dirsync, click Requestor, click Options, and enable
	  "Receive template information" by selecting Yes.
	
	6. Exit the MS Mail Admin program.
	
	7. Perform manual or automatic directory synchronization between MS Mail and
	  Exchange Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
