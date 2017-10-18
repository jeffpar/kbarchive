---
layout: page
title: "Q279214: XIMS: Exchange Server Cannot Communicate with IIS over SSL"
permalink: kb/279/Q279214/
---

## Q279214: XIMS: Exchange Server Cannot Communicate with IIS over SSL

	Article: Q279214
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Internet Information Server (IIS) SMTP Service does not recognize the
	STARTTLS command that the Exchange Server 5.5 computer issues. The SMTP Protocol
	log on the Exchange Server computer shows that Exchange Server is giving the
	STARTTLS command. Next, the IIS SMTP Service responds with "220 SMTP server
	ready" (which is normal). Exchange Server follows by issuing the MAIL FROM
	command to IIS. IIS immediately generates errors by returning a "505 Must issue
	a STARTTLS command first" error. Then Exchange Server issues a QUIT command, and
	the IIS SMTP Service closes the connection. The first message that is sent from
	an Exchange Server computer and forwarded to the IIS SMTP Service generates a
	non-delivery report (NDR). A second message sent from the same Exchange Server
	computer and forwarded to the same SMTP Service goes through. This problem does
	not occur until the 128-bit encryption is enabled on the IIS 4.0 Default SMTP
	Site Properties page on the SMTP Service.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Windows NT service pack that contains this fix.
	
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
	
	  Date      Time    Version       Size     File name     Platform
	  -------------------------------------------------------------
	  11/01/00  7:55PM   5.5.1877.51   464 KB   Smptsvc.dll   Intel
	
	  11/22/00  5:18PM   5.5.1877.64   522 KB   Smptsvc.dll   Intel
	
	  11/22/00  9:01PM   5.5.1877.64   771 KB   Smptsvc.dll   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: xmrp IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbiisSearch kbExchangeSearch kbExchange550 kbiis500 kbiis400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
