---
layout: page
title: "Q242269: XCLN: Moderators don't receive new items posted by some users"
permalink: /kb/242/Q242269/
---

## Q242269: XCLN: Moderators don't receive new items posted by some users

	Article: Q242269
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,4.0,5.0,8.0,98
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moderators don't receive new items from some users when posted to a moderated
	public folder.
	
	CAUSE
	=====
	
	The sensitivity of the new items is set to Private. When users post items to a
	moderated public folder, the new items will be forwarded to moderators for
	review. Since items marked Private can not be forwarded, moderators do not
	receive the posted items, but users still receive a response.
	
	RESOLUTION
	==========
	
	Change the posted items' sensitivity to Normal.
	
	MORE INFORMATION
	================
	
	With diagnostic logging set to Maximum on "rules" in the properties of
	<Exchange Server Name>/Diagnostic Logging/MSExchangeIS/Public, the
	following event is logged:
	
	Event ID: 1066
	Source: MSExchangeIS Public
	Category: Rules
	Description:
	Action 0 in rule ID # was canceled. The forward rule will not be triggered on
	messages with Sensitivity set to Private.
	
	For additional information on how to set up moderated public folders, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q182904 How to Set Up a Moderated Public Folder
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:2000,4.0,5.0,8.0,98
	Issue type        : kbinfo
	
	=============================================================================
	
