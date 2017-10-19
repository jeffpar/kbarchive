---
layout: page
title: "Q192519: XFOR: Cc: Field Moved to To: Field with MHS Extended Addressing"
permalink: /kb/192/Q192519/
---

## Q192519: XFOR: Cc: Field Moved to To: Field with MHS Extended Addressing

	Article: Q192519
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is sent using the message handling system (MHS) Extended
	Addressing format, the address specified on the Cc: field is moved to the To:
	field.
	
	The problem only occurs when MHS Extended Addressing style is used; for example,
	user@host {<e-mail type>:<e-mail address>}; that is, user@host
	{CCMAIL:test,user}. If another style of addressing is used, the problem does not
	occur; for example, [mhs:user@gtwy{net/po/user}].
	
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Goalline
	
	  File Name   Version
	  -----------------------
	  Mt.exe      5.0.1461.53
	  Mtmsg.dll   5.0.1461.53
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Goalline
	
	  File Name   Version
	  ----------------------
	  Mt.exe      5.5.2348.0
	  Mtmsg.dll   5.5.2348.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	Additional query words: extended MHS MSMI
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
