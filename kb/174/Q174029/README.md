---
layout: page
title: "Q174029: XCLN: Received Time Shows as None in Outlook Client"
permalink: /kb/174/Q174029/
---

## Q174029: XCLN: Received Time Shows as None in Outlook Client

{% raw %}

	Article: Q174029
	Product(s): Microsoft Exchange
	Version(s): 8.01,8.02,8.03,8.04
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03, 8.04 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Outlook 97, messages have a Received time of None, instead of the
	usual date and time values.
	
	CAUSE
	=====
	
	This behavior may occur if the message was sent while working with a Personal
	Folder (PST) file as the primary information store or while working offline with
	an Offline Folder (OST) file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Microsoft
	Outlook 97 listed at the beginning of this article.
	
	This problem has been corrected in Microsoft Outlook 98.
	
	MORE INFORMATION
	================
	
	This behavior may cause problems, such as sorting messages by the Received
	field. Because these messages have a value of None in the Received field, they
	are automatically sorted to the top or bottom (depending on the sort order) of
	the message list.
	
	If a message is moved to the Sent Items folder under the conditions in the CAUSE
	section above, the message will be properly archived. Messages with None as
	Received Date that are moved to any folder other than the Sent Items folder will
	not be archived.
	
	Note: In this scenario, the Received time for a message sent by the user is
	essentially the equivalent to the Sent time. This is due to the fact that the
	message is "received" in the Sent Items folder at approximately the same time
	the message is sent by the user.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbOutlook804
	Version           : :8.01,8.02,8.03,8.04
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
