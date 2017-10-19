---
layout: page
title: "Q310797: XCON: Messages to Fax Recipients Return an NDR; Fix Req. 5.5 SP4"
permalink: /kb/310/Q310797/
---

## Q310797: XCON: Messages to Fax Recipients Return an NDR; Fix Req. 5.5 SP4

	Article: Q310797
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	After you send a message to a fax recipient, you may receive a non-delivery
	report (NDR) that indicates that the address was incorrect. The text of the NDR
	shows that the area code was changed to an ASCII character. This problem occurs
	with area codes that are contained in parentheses that are in the range from
	(000) through (299).
	
	CAUSE
	=====
	
	This problem can occur because the X.400 specification dictates that only
	certain types of characters are allowed in the address of a message. Extended
	characters, such as accented characters, do not fit this description. To allow
	for extended characters such as these, the X.400 specification specifies the
	encoding of these characters by using a syntax that is very similar to United
	States area codes (this is referred to as "escaping" a character). For example,
	the O circumflex character is escaped as (212), which is also a New York area
	code.
	
	While the information store is parsing data that it received from the MTA, the
	information store determines whether the address contains any escaped
	characters, and then "unescapes" those characters.
	
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
	
	Component: Information store
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Escprint.dll | 5.5.2655.62 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	After this fix is applied, if the information store determines that the address
	contains a sequence that is part of the range that is described in the
	"Symptoms" section of this article, a further check is made to determine whether
	the remaining characters are part of a phone number. If the characters are part
	of a phone number, no unescaping is performed. If the characters are not part of
	a phone number, unescaping is performed as described in the "Cause" section of
	this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
