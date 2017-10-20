---
layout: page
title: "Q168857: XFOR: Err Msg: MSMI Service Returned Service-Specific Error 105"
permalink: /kb/168/Q168857/
---

## Q168857: XFOR: Err Msg: MSMI Service Returned Service-Specific Error 105

{% raw %}

	Article: Q168857
	Product(s): Microsoft Exchange
	Version(s): WinNT: 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Mail Connector Interchange (MSMI) service, the
	following error message may appear:
	
	  The MS Mail Connector Interchange service returned service-specific
	  error 105.
	
	The following event appears in the Event Viewer Application log:
	
	  Event ID: 2302
	  Source: Service Control Manager
	  Category: None
	  Type: Error
	  Description:
	  MS Mail Connector Interchange has failed to start the mailer component.
	  Return code from mailer is 0x2 and the return code Win32 is 0x20.
	
	The description may also state:
	
	  The MS Mail Connector Interchange service terminated with service-
	  specific error 105.
	
	  Check that MSMI Service Account has access permission on the Microsoft
	  Mail Connector postoffice share.
	
	CAUSE
	=====
	
	The files Inqueue3.key and/or Inqueue3.mbg may be locked.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Verify that the file Inqueue3.key or Inqueue3.mbg (or both) is locked. Shut
	  down the Microsoft Mail Connector Interchange (MSMI) and all other PCMTA
	  services (PCMTA and AppleTalk or ATMTA). Check the files Inqueue3.key and
	  Inqueue3.mbg on the shadow postoffice located at
	  <drive>:\Exchsrvr\Connect\Msmcon\Maildata in the Key and Mbg
	  subdirectories respectively, to see if the file or files can be copied or
	  renamed.
	
	  NOTE: If the files cannot be copied or renamed, proceed to the next step.
	
	2. Set the MSMI and all PCMTA services to manual, and restart the server.
	
	3. Verify that the files Inqueue3.key and/or Inqueue3.mbg are not locked.
	
	4. Start the MSMI and all other PCMTA services, and set the Startup Type on
	  these services to Automatic.
	
	NOTE: The MS Mail PCMTA services are named by the Exchange Server Administrator
	operator. To determine what the PCMTA services were named, in the Exchange
	Server Administrator program open the MS Mail Connector properties and select
	the Connector MTAs tab. The PCMTA services are located in the MS Mail Connector
	(PC) MTA Services field.
	
	MORE INFORMATION
	================
	
	Recycling or restarting the server will unlock the Inqueue3.key and Inqueue3.mbg
	files.
	
	
	Additional query words: terminated service-specific
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT: 4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
