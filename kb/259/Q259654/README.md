---
layout: page
title: "Q259654: XCLN: Outlook 2000 Constantly Prompts Regarding Offline Rules"
permalink: /kb/259/Q259654/
---

## Q259654: XCLN: Outlook 2000 Constantly Prompts Regarding Offline Rules

	Article: Q259654
	Product(s): Microsoft Exchange
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you activate the Large Messages rule for offline folders, you receive a
	message that states that the offline rule is active every time that you start
	Outlook. You can turn off the Large Messages rule from this message. If you turn
	it off, it remains inactive until you manually reactivate it by using the Rules
	Wizard.
	
	There is no way to prevent this message from being displayed during startup in
	the user interface.
	
	CAUSE
	=====
	
	This issue can occur because Outlook always notifies the user of offline rules
	that are active during startup. This behavior is by design.
	
	RESOLUTION
	==========
	
	To resolve this issue, click either OK or Cancel (without making any changes) in
	the message that states that the offline rule is active to preserve the rule.
	
	MORE INFORMATION
	================
	
	The Large Message rule is created when you enable filtered synchronization.
	Filtered synchronization is a new feature in Outlook 2000. If you are connected
	over a dial-up session, filtered synchronization allows you to select the
	folders that you want to synchronize and also to set a maximum size for messages
	that are synchronized. To enabled filtered synchronization:
	
	1. On the Tools menu, click Synchronize, and then click Off-Line Folder
	  Settings.
	
	2. Click Download Options.
	
	3. Make sure that the "Don't download messages larger than" check box is
	  selected.
	
	4. Click OK, and then click OK again.
	
	After you finish this procedure, if you click Rules Wizard on the Tools menu,
	"Large Message Rule (client-only)" is listed as one of the rules.
	
	Additional query words: OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
