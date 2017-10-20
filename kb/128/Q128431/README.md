---
layout: page
title: "Q128431: MHS: Err Msg: Gateway Doesn't Support Gateway &quot;{}&quot; Originators"
permalink: /kb/128/Q128431/
---

## Q128431: MHS: Err Msg: Gateway Doesn't Support Gateway &quot;{}&quot; Originators

{% raw %}

	Article: Q128431
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send mail from Microsoft Mail for PC Networks through the MHS gateway
	to CompuServe and then on to the Internet, the following error appears:
	
	  The message you sent on <date> <time> could not be delivered to:
	
	  mail @ cserve {internet:<userid>@<site>},
	
	  The MHS gateway does not support gateway "{}" originators.
	
	CAUSE
	=====
	
	The CompuServe to Internet gateway does not support curly braces ({}). When you
	send a message from MHS through CompuServe to the Internet, the CSERVE/Internet
	gateway tries to build a return address. The gateway cannot build the return
	address because the Microsoft Mail addresses are in the following format:
	
	  <user>@MSMail {<network>/<postoffice>/<user>}
	
	RESOLUTION
	==========
	
	If you have a single postoffice, you can use simple addressing, which allows you
	to send mail to <user>@MSMail. To configure the gateway for simple
	addressing, add the -SF switch to the gateway command line. This command-line
	option is configured within the MHS administrator program (MHS.EXE for version
	1.5, and NGMADM for NGM). You should still send outgoing mail using the same
	addressing; for example, [MHS:MAIL@CSERVE
	{INTERNET:<USERID>@<SITE>}. Simple addressing does not work for
	downstream postoffices.
	
	MORE INFORMATION
	================
	
	If you have multiple postoffices, the only solution is to purchase multiple
	copies of the gateway and set up each postoffice as a gateway postoffice.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
