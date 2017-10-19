---
layout: page
title: "Q185180: XFOR: Carriage Returns Not Preserved by Notes Connector"
permalink: /kb/185/Q185180/
---

## Q185180: XFOR: Carriage Returns Not Preserved by Notes Connector

	Article: Q185180
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a message that contains carriage returns/line feeds from a Lotus
	Notes Web client through the Microsoft Exchange Connector for Lotus Notes, the
	message is incorrectly formatted when it is received by the Microsoft Exchange
	client.
	
	For example, if you compose the following message in the Lotus Notes Web Client:
	
	  One.
	  Two.
	  Three.
	  Four.
	
	The message is received by the Microsoft Exchange client as follows:
	
	  One.Two.Three.Four.
	
	CAUSE
	=====
	
	The non-Web based Notes client emits a "/par /pard" in its RTF (Rich Text
	Format) exporter to signify an end of paragraph marker (carriage return). The
	Web-based client emits only a "/pard" in the RTF exporter to signify the end of
	paragraph marker. Therefore, the Notes Connector interprets the RTF output as
	containing no end of paragraph markers, resulting in the incorrectly formatted
	text.
	
	
	RESOLUTION
	==========
	
	Apply the fix described below. The Microsoft Exchange Connector for Lotus Notes
	has been corrected to explicitly check the RTF output stream for an end of
	paragraph marker, followed by text. This ensures that the carriage returns
	contained in messages sent from the Lotus Notes Web client will be preserved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information about obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Domino IBM
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
