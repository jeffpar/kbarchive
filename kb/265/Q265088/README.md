---
layout: page
title: "Q265088: XCLN: Free and Busy Details Unavailable from Different Time Zone"
permalink: /kb/265/Q265088/
---

## Q265088: XCLN: Free and Busy Details Unavailable from Different Time Zone

{% raw %}

	Article: Q265088
	Product(s): Microsoft Exchange
	Version(s): 2000
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to view the details of free and busy data on the Attendee
	Availability tab of an open Calendar item, you may receive the following
	message:
	
	  Details for this appointment are not available
	
	This occurs when the Outlook workstation is on a different side of the Greenwich
	mean time time zone than the Exchange Server computer that houses the free and
	busy public folder (for example, when the Exchange Server free and busy server
	is in the Pacific time zone [GMT-08:00] and the Outlook workstation is in the
	Brussels, Copenhagen, Madrid, Paris time zone [GMT+01:00]).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Outlook 2000 service release that contains this fix.
	
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
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Outllib.dll  | 9.0.0.4207 | 
	+---------------------------+
	| Outllibr.dll | 9.0.0.4207 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: OL2K
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :2000
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
