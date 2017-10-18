---
layout: page
title: "Q280325: XCON: Text Wraps Unexpectedly in P772 Message"
permalink: kb/280/Q280325/
---

## Q280325: XCON: Text Wraps Unexpectedly in P772 Message

	Article: Q280325
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you compose a Military Message Content protocol standard (P772) message
	with text in one or more of the following fields, and then send the message
	through an X.400 Connector, the text in the following fields may wrap
	unexpectedly:
	
	- The To or Cc box on the Recipients tab in the properties for the new message.
	- The Message Instructions or Handling Instructions field.
	
	This problem may occur inconsistently with various characters in the text, but it
	most commonly occurs with the uppercase A, B, K, Q, or Y.
	
	CAUSE
	=====
	
	This problem occurs when the Defense Message System (DMS) Exchange Server
	message transfer agent (MTA) incorrectly interprets one or more characters in
	the text as a carriage return/line feed (CR/LF), causing the text to wrap where
	that character appears.
	
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
	
	Component: Message Transfer Agent (MTA)
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2654.28 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.28 | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2654.28 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.28 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2654.28 | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	| X400om.dll   | 5.5.2654.28 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: other recipients crlf
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
