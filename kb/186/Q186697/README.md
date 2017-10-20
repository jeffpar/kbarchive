---
layout: page
title: "Q186697: XCLN: Inbox Assistant Does ORing Instead of ANDing on Rules"
permalink: /kb/186/Q186697/
---

## Q186697: XCLN: Inbox Assistant Does ORing Instead of ANDing on Rules

{% raw %}

	Article: Q186697
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Inbox Assistant rules (Rules Wizard in Outlook 8.5) use an ANDing process,
	meaning all the conditions on the rule must be met for the rule to function.
	However, if you click Advanced on the Edit Rule dialog box, and select the "Only
	Items that do not Match These Conditions" option, then an ORing process on
	conditions will be used, and the rule will function if any of the conditions are
	not true instead of if all of the conditions are not true.
	
	MORE INFORMATION
	================
	
	This is by product design.
	
	When adding conditions for an Inbox Assistant rule, all are considered AND
	conditions for the rule to be met. By selecting the "Only Items that do not
	Match These Conditions" option on the Advanced button, you will create a NOT
	condition for the rule. A NOT condition of a collection of ANDs is an OR
	condition.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.03
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
