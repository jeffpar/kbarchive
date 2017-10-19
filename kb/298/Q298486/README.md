---
layout: page
title: "Q298486: XCON: Exchange Notes Connector Service Stops w. Message Backlog"
permalink: /kb/298/Q298486/
---

## Q298486: XCON: Exchange Notes Connector Service Stops w. Message Backlog

	Article: Q298486
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a message that contains more than 1,024 attachments is submitted to the
	Exchange.box on a Lotus Notes server, the Microsoft Exchange Connector for Lotus
	Notes service (Lsntsmex.exe) may stop. Messages may sit in the queue and may not
	be delivered. The Exchange Notes Connector does not mark the message that
	contains more than 1,024 attachments as a problem message, but no new mail is
	processed until you remove the message and you restart the service.
	
	CAUSE
	=====
	
	This problem can occur because the Exchange Server information store cannot
	process more than 1,024 attachments for each message; therefore, when the
	connector tries to create the 1,024th (0x400th) attachment, the information
	store stops responding. The connector calls fail, and the Lsntsmex.exe process
	stops, which causes subsequent messages from Notes to Exchange Server to be
	backlogged.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Notes Connector
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Ctreestd.dll | 5.5.2655.24 | 
	+----------------------------+
	| Dispatch.exe | 5.5.2655.24 | 
	+----------------------------+
	| Dxagwise.dll | 5.5.2655.24 | 
	+----------------------------+
	| Dxamex.dll   | 5.5.2655.24 | 
	+----------------------------+
	| Dxanotes.dll | 5.5.2655.24 | 
	+----------------------------+
	| Dxasnads.dll | 5.5.2655.24 | 
	+----------------------------+
	| Eab.dxa      | 5.5.2655.24 | 
	+----------------------------+
	| Exconmsg.dll | 5.5.2655.24 | 
	+----------------------------+
	| Files.txt    | 5.5.2655.24 | 
	+----------------------------+
	| Gw2mex.exe   | 5.5.2655.24 | 
	+----------------------------+
	| Gwhc.dll     | 5.5.2655.24 | 
	+----------------------------+
	| Gwrouter.exe | 5.5.2655.24 | 
	+----------------------------+
	| Lscms.dll    | 5.5.2655.24 | 
	+----------------------------+
	| Lsdiajcl.exe | 5.5.2655.24 | 
	+----------------------------+
	| Lsdiamex.exe | 5.5.2655.24 | 
	+----------------------------+
	| Lsdiavm.exe  | 5.5.2655.24 | 
	+----------------------------+
	| Lsdxa.exe    | 5.5.2655.24 | 
	+----------------------------+
	| Lsldew.dll   | 5.5.2655.24 | 
	+----------------------------+
	| Lsmexdia.exe | 5.5.2655.24 | 
	+----------------------------+
	| Lsmexhc.dll  | 5.5.2655.24 | 
	+----------------------------+
	| Lsmexif.dll  | 5.5.2655.24 | 
	+----------------------------+
	| Lsmexin.exe  | 5.5.2655.24 | 
	+----------------------------+
	| Lsmexnts.exe | 5.5.2655.24 | 
	+----------------------------+
	| Lsntshc.dll  | 5.5.2655.24 | 
	+----------------------------+
	| Lsntsmex.exe | 5.5.2655.24 | 
	+----------------------------+
	| Lsqview.dll  | 5.5.2655.24 | 
	+----------------------------+
	| Lsvmdia.exe  | 5.5.2655.24 | 
	+----------------------------+
	| Lsvmhc.dll   | 5.5.2655.24 | 
	+----------------------------+
	| Lsxfm.dll    | 5.5.2655.24 | 
	+----------------------------+
	| Mex2gw.exe   | 5.5.2655.24 | 
	+----------------------------+
	| Ntsperf.dll  | 5.5.2655.24 | 
	+----------------------------+
	| Ntspxgen.dll | 5.5.2655.24 | 
	+----------------------------+
	| Psab.dxa     |             | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	After this fix is applied, if there are more than 1,024 attachments, Exchange
	Server delivers the message with the attachments stripped out.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
