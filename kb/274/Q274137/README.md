---
layout: page
title: "Q274137: XCLN: GetAssociatedAppointment CDO Method Returns Error"
permalink: /kb/274/Q274137/
---

## Q274137: XCLN: GetAssociatedAppointment CDO Method Returns Error

{% raw %}

	Article: Q274137
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
	
	If you use the GetAssociatedAppointment method of Collaboration Data Objects
	(CDO), you may get the following error message:
	
	  MAPI_E_TOO_COMPLEX
	
	CAUSE
	=====
	
	This behavior occurs because CDO is looking for the date/time values on the
	meeting response message, and when it does not find a date/time value on a
	property, it uses the current date/time value as the default value. The values
	are then compared with the date/time values that are stamped by the meeting
	recipient. This date/time value is too old, and the MAPI_E_TOO_COMPLEX error
	message is returned.
	
	This behavior is more prevalent on Microsoft Outlook 2000 clients.
	
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
	
	Component: CDO
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Cdo.dll   | 5.5.2654.11 | 
	+-------------------------+
	
	
	
	For additional information on how to download the update for this problem, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q289606 XGEN: Exchange Server 5.5 Post-Service Pack 4 Collaboration Data
	  Objects Fixes Available
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
