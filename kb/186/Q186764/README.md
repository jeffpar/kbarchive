---
layout: page
title: "Q186764: XCLN: Cannot Search For Names That Contain Swedish Characters"
permalink: kb/186/Q186764/
---

## Q186764: XCLN: Cannot Search For Names That Contain Swedish Characters

	Article: Q186764
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you type a character from a Swedish character set in the "Type Name or Select
	from List:" box in the Address Book or Select Names dialog box, you may not
	automatically scroll down to the mailboxes and distribution lists whose display
	names start with that character. This problem occurs when you are using a U.S.
	Microsoft Exchange client to connect to a Microsoft Mail postoffice that meets
	the following criteria:
	
	- The postoffice is located on a Microsoft Windows NT Server computer that is
	  configured to use a Swedish code page.
	
	- The address list on the postoffice has been sorted using Scandinavian sort
	  order.
	
	Note that this problem occurs when you select the global address list or
	postoffice address list, but it does not occur when you select the personal
	address book (PAB). In addition, note that this problem does not occur if you
	use a Microsoft Mail client to connect to the Microsoft Mail postoffice.
	
	CAUSE
	=====
	
	This problem occurs because the Exchange Server address list provider for
	Microsoft Mail (Msfs32.dll) and the Microsoft Mail Resort.exe utility that is
	used to sort the address list on the postoffice do not use the same sort order.
	The Exchange Server address list provider uses a static sort table, while the
	Resort.exe utility uses a sort order based on the C850sort.glb file located on
	the postoffice.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To view the Address Book dialog box, click Address Book on the Tools menu in the
	Exchange client. To view the Select Names dialog box, compose a new message, and
	then click To, or click Address Book on the Tools menu.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
