---
layout: page
title: "Q262691: XCON: X.400 Address Received Over MIXER Gets SMTP Address Type"
permalink: /kb/262/Q262691/
---

## Q262691: XCON: X.400 Address Received Over MIXER Gets SMTP Address Type

	Article: Q262691
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you receive a message from a remote X.400 system that is also addressed to
	another remote X.400 user, the address of the remote X.400 user may be correctly
	displayed but the address type may be displayed as Simple Mail Transfer Protocol
	(SMTP). You cannot reply to this other recipient.
	
	CAUSE
	=====
	
	This problem can occur if the message entered the organization over an X.400
	Connector that has the HEUR_MIXER_TO_SMTP heuristic (0x20000000) set. A logic
	error in the code causes this X.400 address, which is not resolved against the
	global address list, to be given the SMTP address type.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
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
	
	Component: Message Transfer Agent
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2652.44 | 
	+----------------------------+
	| X400om.dll   | 5.5.2652.44 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2652.44 | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | 5.5.2652.44 | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	Additional query words: mixer rfc2156 addrtype
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
