---
layout: page
title: "Q288967: XFOR: DocLinks That Point to Lotus Notes (Domino) R5 UNIX Hosts"
permalink: kb/288/Q288967/
---

## Q288967: XFOR: DocLinks That Point to Lotus Notes (Domino) R5 UNIX Hosts

	Article: Q288967
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
	
	Lotus Notes users can send messages that contain document links (DocLinks),
	which are pointers to source documents that can be located on any Domino server,
	to other mail users. When messages that contain DocLinks traverse across the
	Microsoft Exchange Connector for Lotus Notes to an Exchange Server environment,
	the connector converts the source documents to Rich Text Format (RTF) documents
	by default.
	
	If a Notes user sends a message that contains a DocLink to an Exchange Server
	user, and the DocLink points to a document that is homed on a Domino server that
	is running on a UNIX operating system (such as AIX, Solaris, or Linux), the
	DocLink may not be converted to RTF successfully. DocLinks that Notes users send
	to other Notes users in same Domino environment are interpreted without
	problems.
	
	When the Exchange Server client receives the message from Notes, an RTF file that
	contains the following text is attached to the message:
	
	  Notes Link Description:
	  Database_Name
	  Notes Server:
	  CN=Name_of_UNIX_Domino_Server/O=Notes_Domain_Name
	  Notes Document Link was not accessible at processing time. Contact sender or
	  message source to obtain document link information.
	
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
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Lsntshc.dll | 5.5.2654.89 | 
	+---------------------------+
	
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, create a database replica on a Domino server that
	is running on Microsoft Windows NT. If the Exchange Notes Connector cannot
	access the source document on the UNIX Domino server, the Exchange Notes
	Connector then searches other Windows NT-based Domino servers for replica
	databases that contain the same source documents.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: doclink lotus notes domino r5 5.05
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
