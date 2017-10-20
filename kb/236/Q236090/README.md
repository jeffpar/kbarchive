---
layout: page
title: "Q236090: XCLN: Optional Attendee Displayed as Required to Delegate"
permalink: /kb/236/Q236090/
---

## Q236090: XCLN: Optional Attendee Displayed as Required to Delegate

{% raw %}

	Article: Q236090
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a meeting request, Outlook allows you to specify the intended
	recipients that are required for the meeting and the recipients that are
	optional. After you generate the meeting request and send it to the recipients,
	the intended recipients can examine the meeting request to determine if they are
	required or optional for the meeting. However, if an intended recipient has a
	delegate user who receives the meeting request, the delegate cannot discern from
	the request who is optional and who is required.
	
	CAUSE
	=====
	
	If an intended recipient has a delegate user declared when you send a meeting
	request to that intended recipient, delegate mail is also sent to the delegate.
	However, the delegate mail does not contain the same information that the
	meeting request contains. The mail that is passed to the delegate contains the
	list of intended recipients, but it does not contain information about which
	recipients are optional and which recipients are required. For this reason, all
	of the recipients are displayed as required.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Outlook 2000:
	
	  File Name       Size            Date     File Version   Language	
	  --------------------------------------------------------------------------------------
	  Outllibr        1,667,123       8/18/99  9.00.00.3216   001033 English (United States)	
	  Outllib         5,279,794       8/18/99  9.00.00.3216   000000 Language Neutral	
	
	Outlook 98:
	
	 File Name        Size            Date     File Version   Language	
	 ---------------------------------------------------------------------------------------
	 Outllib.dll      6,604,048       8/17/99  8.05.6810.0000 001033 English (United States)	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
