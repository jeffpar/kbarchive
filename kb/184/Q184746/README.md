---
layout: page
title: "Q184746: XFOR: Attendees Missing from Migrated Groupwise Meeting"
permalink: /kb/184/Q184746/
---

## Q184746: XFOR: Attendees Missing from Migrated Groupwise Meeting

{% raw %}

	Article: Q184746
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you migrate users and meetings from Novell GroupWise to Microsoft Exchange
	Server, no meeting attendees are migrated. The missing attendees may include
	user accounts and other resource accounts that were successfully migrated to
	Exchange Server.
	
	CAUSE
	=====
	
	When users and meetings are migrated from GroupWise to Exchange Server, the
	GroupWise source extractor is used to copy the desired information from the
	GroupWise post office to migration files. The Migration Wizard is then used to
	import the migration files to Exchange Server. Meeting attendees are not
	included in the migration files. Therefore, they are not migrated to Exchange
	Server when you import the migration files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The GroupWise source extractor migrates calendar information by creating a
	Schedule+ Interchange (.sc2) file for each user. Each .sc2 file contains the
	information from that user's calendar. When the Migration Wizard is used to
	import the migration files to Exchange Server, a Calendar Attachments folder is
	created in the user's Inbox folder. This new folder contains a message for each
	meeting that has been accepted. If a meeting contains an attachment, the
	attachment is included with the associated message in the Calendar Attachments
	folder. In addition, a message is created in the Inbox folder for each meeting
	that has not been accepted.
	
	When you apply the fix described in this article, the attendees that are listed
	on the To, From, Cc, and Bcc lines in the GroupWise meeting appear in the
	associated message in the Calendar Attachments or Inbox folder. Users and
	resources are both included and are listed separately. All invited users and
	resources are listed, even if they did not accept the meeting. Text indicating
	that some of the attendees that are listed may not have accepted the meeting is
	also included in the message.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
