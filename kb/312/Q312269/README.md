---
layout: page
title: "Q312269: XADM: Duplicate Calendar Entries w Update Method &amp; Outlook 2002"
permalink: /kb/312/Q312269/
---

## Q312269: XADM: Duplicate Calendar Entries w Update Method &amp; Outlook 2002

	Article: Q312269
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 22-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	- Microsoft Outlook 2002 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After Microsoft Outlook 2002 receives a meeting request in the Inbox, Outlook
	2002 may create a duplicate calendar appointment. If a Collaboration Data
	Objects (CDO) application calls GetAssociatedAppointment and places a meeting in
	your calendar first, and then you click the meeting request in Outlook 2002 to
	open it, a duplicate appointment is created. Outlook 2000 does not create
	duplicate appointments in this scenario.
	
	CAUSE
	=====
	
	This problem can occur if CDO was not updated to reflect the way that Outlook
	2002 uses index PR_OWNER_APPT_ID to determine duplicate appointments.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Exchange Server 5.5 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: CDO
	
	+---------------------------------------------------------+
	| File name | Version     | Date        | Time  | Size    | 
	+---------------------------------------------------------+
	| Cdo.dll   | 5.5.2655.65 | 07-Nov-2001 | 10:34 | 801,404 | 
	+---------------------------------------------------------+
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	To ensure that conflicting appointments are not created, the CDO application
	should delete the meeting request from the Inbox after processing the meeting
	request.
	
	Additional query words: blackberry
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
