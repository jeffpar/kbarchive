---
layout: page
title: "Q202514: XFOR: Notes Application Connector Not Replicating Responses"
permalink: kb/202/Q202514/
---

## Q202514: XFOR: Notes Application Connector Not Replicating Responses

	Article: Q202514
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the Notes Application Conversion Assistant to convert Lotus Notes
	database information to Exchange Server public folder information, the Notes
	Application Connection utility replicates content between Notes and Exchange
	Server. Replies from Exchange Server users may not be replicated correctly to
	the Notes database. When Notes users view the replies the Notes users may
	receive a message that states, "No default form found."
	
	CAUSE
	=====
	
	This problem can occur because the Application Connector needs to determine
	which form to use when it imports the data to Notes. The Application Connector
	uses the default form for the public folder that the Application Connector is
	replicating.
	
	RESOLUTION
	==========
	
	To resolve this problem, open the public folder, and then select the form that
	the Application Conversion Assistant created as the default form for the public
	folder. Run the Application Connection utility again to make the data viewable
	by the Notes users.
	
	Additional query words: MESA
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
