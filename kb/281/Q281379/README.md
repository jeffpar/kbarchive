---
layout: page
title: "Q281379: Cannot Define New Inbox Assistant Rules w. Outlook for Macintosh"
permalink: /kb/281/Q281379/
---

## Q281379: Cannot Define New Inbox Assistant Rules w. Outlook for Macintosh

{% raw %}

	Article: Q281379
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.1,8.2,8.2.1,8.2.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1, 8.2, 8.2.1, 8.2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to manage rules by using the Inbox Assistant with Outlook for
	Macintosh, you may no longer be able to create, edit, or delete rules.
	
	CAUSE
	=====
	
	This issue can occur if an installation of Outlook 2000 that has been updated
	with Microsoft Office 2000 Service Pack 2 (SP 2) has gained access to the
	mailbox that you use on the Microsoft Exchange Server computer.
	
	WORKAROUND
	==========
	
	IMPORTANT: If you need to use Outlook for Macintosh and Outlook 2000 SP 2 on the
	same mailbox, Microsoft recommends that you use Microsoft Outlook 2000 Service
	Release 1a (SR 1a) instead of Outlook 2000 SP 2.
	
	After you run Outlook 2000 SP 2 on an Exchange Server mailbox, the Inbox
	Assistant rules cannot be retrieved. To work around this issue, you must delete
	the upgraded rules from the Outlook 2000 SP 2 Rules Wizard, and then recreate
	your Inbox Assistant rules in Outlook for Macintosh. If you subsequently use
	Outlook 2000 SP 2 again to gain access to this Exchange Server mailbox, the
	rules are deleted and you need to perform the workaround steps again.
	
	NOTE: Before you delete your rules, you may want to write them down so that you
	can recreate them later.
	
	Deleting Rules from Outlook 2000 SP 2
	-------------------------------------
	
	To delete rules from the Outlook 2000 SP 2 Rules Wizard:
	
	1. On the Tools menu, click Rules Wizard.
	
	2. Select the rules that you want to delete, and then click Delete.
	
	3. Click OK to close the Rules Wizard.
	
	Recreating Rules with Outlook for Macintosh
	-------------------------------------------
	
	To recreate your rules with the Outlook for Macintosh Inbox Assistant:
	
	1. On the Tools menu, click Inbox Assistant.
	
	2. Click Add Rule to create your rules.
	
	3. Click OK to close the Inbox Assistant.
	
	MORE INFORMATION
	================
	
	Every time that a user uses Outlook 2000 SP 2 to gain access to an Exchange
	Server mailbox, Outlook silently upgrades the rules from the Inbox Assistant
	format that Outlook for Macintosh uses to the Rules Wizard format that Outlook
	2000 uses. As a part of this upgrade process, the Inbox Assistant rules are
	deleted from the server. Although the rules continue to function as Rules Wizard
	rules, you can no longer add, remove, or change rules in Outlook for Macintosh
	after you use Microsoft Outlook 2000 SP 2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac kbOutlook810Mac kbOutlook820Mac kbOutlook821Mac kbOutlook822Mac
	Version           : :8.0,8.1,8.2,8.2.1,8.2.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
