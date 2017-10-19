---
layout: page
title: "Q279320: XFOR: Msgs in Internet Mail Service Pickup Moved to Bad Mail"
permalink: /kb/279/Q279320/
---

## Q279320: XFOR: Msgs in Internet Mail Service Pickup Moved to Bad Mail

	Article: Q279320
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages that are put in the Internet Mail Service Pickup folder for delivery
	may be moved to the Pickup\Archive folder. These same messages may then be moved
	back to the Pickup folder, and be delivered.
	
	The Internet Mail Service generates the following Event log entry when this
	occurs.
	
	  Event ID 4164
	  Source MSExchangeIMS
	
	  Description:
	  The file <filename> in the Pickup directory could not be parsed to get
	  the originator and recipients due to error 0x80004005. It either contains no
	  recipients, or it is not a valid 822 message. It will be moved to the Archive
	  directory.
	
	CAUSE
	=====
	
	The Internet Mail Service may not acquire the correct size of the file that it
	is attempting to process. Therefore, the Internet Mail Service behaves as if
	there is not enough data in the file to make delivery.
	
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
	
	Component: Internet Mail Service
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Msexcimc.exe | 5.5.2654.25 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
