---
layout: page
title: "Q257423: XFOR: Meeting Request NDR When Sent to Multiple Recipients"
permalink: /kb/257/Q257423/
---

## Q257423: XFOR: Meeting Request NDR When Sent to Multiple Recipients

{% raw %}

	Article: Q257423
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a meeting request from a Microsoft Outlook client and you select
	multiple Lotus Notes recipients or a distribution list (DL) that contains
	multiple Notes recipients, you may receive a non-delivery report (NDR). The
	description of that NDR contains the following string:
	
	  Unable to convert message to format suitable for target system
	
	In the Microsoft Windows NT application event log or the Log Browser (visible
	through the Exchange Connectivity Administrator utility), the following is
	displayed:
	
	  41300: Notes Package ID: Notes Store Facility (NSF). Extended Reason String:
	  Database already contains a document with this ID (UNID)
	
	CAUSE
	=====
	
	This problem can occur because the meeting request has been split into multiple
	messages. These messages are then placed in the Mail.box file on the Notes
	server. The first message is placed properly, but subsequent messages may not be
	placed properly because the messages are all given the same document ID (because
	the messages are sourced from the same meeting request). Notes only allows
	unique document IDs in the Mail.box file at any point in time.
	
	WORKAROUND
	==========
	
	To work around this problem, make sure that the manner in which the distribution
	list is expanded is correct. Ensure that the Notes custom recipients all reside
	on the same Exchange Server computer, or that the distribution list is expanded
	by only one Exchange Server computer.
	
	MORE INFORMATION
	================
	
	This problem can also occur if you send a message to a distribution list that
	contains Exchange Server mailboxes with Notes custom recipients listed as
	alternate recipients.
	
	Additional query words: convert format
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
