---
layout: page
title: "Q279175: XFOR: Japanese Characters in Subject Line Are Question Marks"
permalink: /kb/279/Q279175/
---

## Q279175: XFOR: Japanese Characters in Subject Line Are Question Marks

{% raw %}

	Article: Q279175
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you migrate from a Lotus cc:Mail archive to a Microsoft Outlook personal
	folder (.pst) file by using the Japanese-language version of the Microsoft
	Importer for Lotus cc:Mail Archives (Ccmarch.exe), the Japanese characters in
	the subject line may be replaced with question marks (???).
	
	CAUSE
	=====
	
	This problem occurs because the code page that is used in the translation
	function is not correct, which renders Japanese characters unreadable. The
	unreadable Japanese characters are displayed as question marks (???) in the
	subject line of the message.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server 5.5 service pack that contains this fix.
	
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
	
	This fix should have the following file attributes or later:
	
	Component: Microsoft Exchange Connector for Lotus cc:Mail
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Ccmarch.exe | 5.5.2654.41 | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5
	Service Pack 2, Service Pack 3, and Service Pack 4.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
