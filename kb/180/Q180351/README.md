---
layout: page
title: "Q180351: XWEB: Error Message: Unable to Delete Message"
permalink: /kb/180/Q180351/
---

## Q180351: XWEB: Error Message: Unable to Delete Message

	Article: Q180351
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Active Server Components to access the
	Exchange Server computer via a Web browser, the sample scripts allow you to mark
	a message to be deleted by selecting the box next to the message.
	
	After you select the button to delete the marked messages, you may receive the
	following error message in a pop-up box in version 5.0:
	
	  Unable to Delete Message
	
	Or, in Exchange Server version 5.5, you may see this error message:
	
	  Unable to Delete this Special Folder
	
	Or, in Exchange Server version 5.5 with SP1, you may see this error message:
	
	  Unable to Delete Item
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5. Microsoft is researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you read a message via the Web, you can choose to delete the message while
	the message window is open. After you click Delete, the message window will
	close, but the message list will not refresh.
	
	If you mark the same message for deletion that you previously selected to delete
	while the message window was open, you will get this error.
	
	To verify that this is the case, select the Refresh button to reload the folder
	contents. If the message is gone, you have previously deleted it.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
