---
layout: page
title: "Q189586: XFOR: Dial-up Internet Mail Service Fails with Event 4106"
permalink: /kb/189/Q189586/
---

## Q189586: XFOR: Dial-up Internet Mail Service Fails with Event 4106

	Article: Q189586
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you set up a dial-up Internet Mail Service connector, the following stop
	events randomly appear in the application event log:
	
	  MSExchangeIMC Error SMTP Interface Events 4106 The Dial-up connection 'Phone
	  book entry' could not be made. The error reported was: [317] (317)
	
	  -OR-
	
	  MSExchangeIMC Error SMTP Interface Events 4106 The dial-up connection 'Phone
	  book entry' could not be made. The error reported was: [4264763456]
	  (4264763456)
	
	When this event occurs, the modem fails to dial. The modem eventually recovers
	and successfully dials. This event can cause the Internet Mail Service connector
	to miss its scheduled dial-up session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces): S E R V P A C K
	
	Additional query words: sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
