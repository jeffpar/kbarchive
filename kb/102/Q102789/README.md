---
layout: page
title: "Q102789: Mac Srv: Description of Gateway Services"
permalink: /kb/102/Q102789/
---

## Q102789: Mac Srv: Description of Gateway Services

	Article: Q102789
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks, Gateway
	Services (GWS) manages Mail's interaction with gateways.
	
	GWS is installed when MS Mail GW is loaded at startup time. GWS schedules when
	each of the gateways installed on the Mail server is to run. When you choose the
	Update button in the Gateway Connect Times screen, a mail message containing the
	selected times/options is sent to GWS.
	
	When it is time for a gateway to run, GWS creates an environment in which the
	gateway code will run, downloads the gateway code from the Mail server, and then
	gives control to the gateway code.
	
	GWS has its own mail inbox. The Outbound Gateway Queue, which you can view from
	the Mail Network Administrator program Global Server Report, is the inbox for
	GWS.
	
	All outgoing gateway messages are first put in the GWS inbox. GWS then puts a
	copy of the mail message in the outgoing queue for each appropriate gateway and
	then runs each gateway at the proper time. When the last gateway has deleted an
	outgoing gateway message, GWS deletes the copy in its inbox.
	
	When you view the Outbound Gateway Queue in the Mail Network Administrator
	program, you are looking at the current outbound gateway messages.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
