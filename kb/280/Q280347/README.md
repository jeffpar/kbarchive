---
layout: page
title: "Q280347: XCON: MTA Journaling Does Not Work on Certain Days"
permalink: /kb/280/Q280347/
---

## Q280347: XCON: MTA Journaling Does Not Work on Certain Days

{% raw %}

	Article: Q280347
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
	
	Message journaling does not work on the day that is twenty-eight days before the
	last day of the month when you configure the Exchange Server 5.5 message
	transfer agent (MTA) message journaling component, and select a custom recipient
	as the journaling recipient. Depending on how many days are in the month, this
	behavior occurs on the second or third day of the month. For example, if there
	are 31 days in the month, message journaling does not work on third day of the
	month. If there are 30 days in the month, message journaling does not work on
	the second day of the month, and so on. The journaling recipient receives
	following non-delivery report (NDR):
	
	Your message
	
	 To:      User
	 Subject: TEST
	 Sent:    Sat, 2 Sep 2000 17:32:31 -0400
	
	did not reach the following recipient(s):
	
	MTA Journaling on Sat, 2 Sep 2000 17:32:31 -0400
	   Unable to deliver the message due to a communications failure
		The MTS-ID of the original message is: c=US;a=
	;p=MICROSOFT;l=TESTSERVER000902173231AE003300
	
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dbserver.sch | 5.5.2654.30 | 
	+----------------------------+
	| Dcprods.cat  | 5.5.2654.30 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.30 | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2654.30 | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2654.30 | 
	+----------------------------+
	| Infoplog.cfg | 5.5.2654.30 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.30 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2654.30 | 
	+----------------------------+
	| P42.tpl      | 5.5.2654.30 | 
	+----------------------------+
	| P772.tpl     | 5.5.2654.30 | 
	+----------------------------+
	| P2.xv2       | 5.5.2654.30 | 
	+----------------------------+
	| X400om.dll   | 5.5.2654.30 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about MTA message journaling, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q239427 XADM: How to Enable Message Journaling in Exchange Server 5.5
	
	Additional query words: mta journal smtp ndr
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
