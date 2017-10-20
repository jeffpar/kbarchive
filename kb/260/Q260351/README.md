---
layout: page
title: "Q260351: PRB:Final report shows approved even with one recipient rejected"
permalink: /kb/260/Q260351/
---

## Q260351: PRB:Final report shows approved even with one recipient rejected

{% raw %}

	Article: Q260351
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbEDK kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With the Routing Wizard sample that is provided by Exchange Server 5.5, if you
	install a Routing Agent to a folder with the Parallel Route routing type and
	then send mail to three recipients to accept or reject the message posted to the
	folder, the final report may show that the posted message was accepted, even
	though only two recipients accepted the message and the third rejected it.
	
	CAUSE
	=====
	
	The Routing Wizard uses the following map for the routing process:
	
	  .....
	  1010   Wait           0  10080
	  .....
	
	  5000   ORSplit        0  IsApprovedTable
	  5010   Goto           0  20000
	  5020   Goto           0  10000
	  10000  FinalizeReport 2  False           False
	  10010  Send           2  <BLANK>         <Unused>    True <FINALIZED> <ATTACH> False False
	  10020  Goto           0  20020
	  20000  FinalizeReport 2  True            False
	  20010  Send           2  XXX             abc@def.com True <FINALIZED> <ATTACH> False False
	  20020  Terminate      0  0
	  20030  Goto           0  20020
	  30000  Terminate      0  1
	
	  .....
	
	The final report is generated based on the result returned from the
	IsApprovedTable customer action. The IsApprovedTable action counts all
	acceptance or rejection e-mails and returns True if the number of acceptances is
	greater than the number of rejections, or False if rejections are greater than
	acceptances.
	
	RESOLUTION
	==========
	
	The Routing Wizard is just a sample tool that is used to demonstrate what you
	can do with Exchange Server Routing Objects. If a different behavior is desired,
	you must modify the script source code or change the routing map.
	
	REFERENCES
	==========
	
	For additional information on using the Routing Wizard, see the following
	Microsoft Developer Network (MSDN) articles:
	
	  Microsoft Exchange Server Routing
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/events_4uw7.htm
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/events_4uw7.htm)
	
	  About the Microsoft Exchange Routing Wizard
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/events_78tg.htm
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/events_78tg.htm)
	
	  Using the Routing Wizard Sample Application
	  http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/events_8ka6.htm
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/psdk/exchserv/events_8ka6.htm)
	
	Additional query words: Event Scripting Agent, Routing Wizard
	
	======================================================================
	Keywords          : kbEDK kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
