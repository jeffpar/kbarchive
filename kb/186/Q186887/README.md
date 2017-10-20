---
layout: page
title: "Q186887: XWEB: OWA: Macintosh: No Default Selection for Unresolved Recipi"
permalink: /kb/186/Q186887/
---

## Q186887: XWEB: OWA: Macintosh: No Default Selection for Unresolved Recipi

{% raw %}

	Article: Q186887
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:4.01; WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Internet Explorer version 4.01 for Macintosh 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use the Outlook Web Access (OWA) client from a Macintosh computer using
	Internet Explorer to send a message in which a recipient is not resolved, the
	following error message will appear:
	
	  [Accept These Choices]
	  [Cancel]
	  All addresses must be resolved before this item can be sent. The address for
	  the following recipient(s) could not be resolved. Please choose an action for
	  each recipient. If you choose to ignore a recipient, that entry will remain
	  unchanged.
	
	  * Recipient_Name has no matches.
	  o Ignore this recipient
	  o Delete this recipient
	
	In this case, neither Ignore nor Delete options are selected.
	
	If you do not select an option and select [Accept These Choices], the message is
	cancelled and not sent.
	
	WORKAROUND
	==========
	
	To work around this problem, you must select either option for each unresolved
	recipient, or select cancel, and edit the recipient field(s).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: Active Server Pages Macintosh Mac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbIEsearch kbOWASearch kbIEMacSearch kbOWA550SP1 kbIE401Mac
	Version           : MACINTOSH:4.01; WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
