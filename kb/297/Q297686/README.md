---
layout: page
title: "Q297686: XADM: Mbclean Cleans Msgs. by PR_LAST_MODIFICATION_TIME in SP4"
permalink: kb/297/Q297686/
---

## Q297686: XADM: Mbclean Cleans Msgs. by PR_LAST_MODIFICATION_TIME in SP4

	Article: Q297686
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
	
	In Exchange Server 5.5 Service Pack 3 (SP3), Mailbox Manager deleted mail based
	on the delivery date and time of the mail in a mailbox. In Exchange Server 5.5
	Service Pack 4 (SP4), mail is deleted based on the last modified date and time.
	Therefore, mail that has been moved around is not being deleted even though the
	delivery date and time is past the age limit.
	
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
	
	Component: Mailbox Manager
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Mbclean.exe | 5.5.2654.98 | 
	+---------------------------+
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Exchange
	Server version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
