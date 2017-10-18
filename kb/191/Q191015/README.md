---
layout: page
title: "Q191015: Dirsync Administrator Does Not Receive Dirsync Messages"
permalink: kb/191/Q191015/
---

## Q191015: Dirsync Administrator Does Not Receive Dirsync Messages

	Article: Q191015
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.0,3.2,3.5; winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run directory synchronization (dirsync) between a Microsoft Mail
	Requestor and Microsoft Exchange Dirsync Server, the dirsync messages are not
	copied to the alias specified as the Dirsync Administrator. Both automatic
	dirsync and manual dirsync fail.
	
	CAUSE
	=====
	
	The dirsync address on the General Property page of the Remote Dirsync Requestor
	object is incorrect. This dirsync address represents the special mailbag on the
	MS Mail postoffice that receives all dirsync messages. The dirsync address must
	be a MS Mail Custom Recipient (<network name of the requestor> /
	<postoffice name of the requestor> / $SYSTEM).
	
	RESOLUTION
	==========
	
	1. In the Exchange Server Administrator program, select the Global Address List.
	  From the View menu, choose Hidden Recipients.
	
	2. Determine the MS Mail Custom Recipient as defined in the Cause section above.
	
	3. On the Property Page for the MS Mail Custom Recipient, click the Advanced
	  tab. In the Custom Recipient options, uncheck "Hide from address book." Close
	  the Property Page.
	
	4. Select the Remote Dirsync Requestor object in the Exchange Server
	  Administrator program. Display the Property Page for the Remote Dirsync
	  Requestor. On the General tab, click the Dirsync Address button. Select the
	  Custom Recipient from Step 2 and click OK.
	
	5. In the Global Address List, from the View menu, choose Hidden Recipients.
	
	6. Display the Property Page for the MS Mail Custom Recipient from Step 2 and
	  click the Advanced tab. In the "Custom recipient options", check "Hide from
	  address book." Close the Property Page.
	
	7. Run Dirsync. (Refer to Q147464, "XFOR: Manual Dirsync with Exchange Server as
	  Dirsync Server," for more information.)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5; winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
