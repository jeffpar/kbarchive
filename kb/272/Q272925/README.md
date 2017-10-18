---
layout: page
title: "Q272925: XFOR: Notes Connector Quits with Messages in the Browser Log"
permalink: kb/272/Q272925/
---

## Q272925: XFOR: Notes Connector Quits with Messages in the Browser Log

	Article: Q272925
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus Notes quits and the following
	messages are reported in the browser log:
	
	  2000/08/15 02:11:07- LME-NOTES-MEXIN(0044) 3 31500:Sender: user name, Size:
	  4356, Message ID: C=US;a= ;p=PRMD;l=A2F3C19E0772D411AA0900D0B774DAC1
	  2000/08/15 02:11:06 Microsoft Exchange >> mexe(3677)
	  2000/08/15 02:13:21- LME-NOTES-NTSMEX(017a) 2 54006:Error {Security
	  violation}: Notes to Exchange Attachment XFM failed >> nts2mex(2382)
	  2000/08/15 02:13:21- LME-NOTES-NTSMEX(017a) 2 00500:An ABNORMAL SHUTDOWN
	  request has been received >> stdmain(920)
	  2000/08/15 02:13:21- LME-NOTES-NTSMEX(017a) 3 00505:LME-NOTES-NTSMEX is
	  ending, last return code was {A shutdown request was made} >>
	  stdmain(958)
	
	CAUSE
	=====
	
	This issue occurs when a message that contains an attachment that is encrypted
	is sent from Lotus Notes to Exchange Server.
	
	WORKAROUND
	==========
	
	To work around this issue, remove the message that matches the last one logged
	in Exchange.box; this message causes Exchange Notes Connector to quit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
