---
layout: page
title: "Q241325: XCLN: Out of Space Message When Creating or Importing Rules"
permalink: kb/241/Q241325/
---

## Q241325: XCLN: Out of Space Message When Creating or Importing Rules

	Article: Q241325
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, versions 5.0, 5.0 SP1, 5.0 SP2, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use rules in Outlook, you may receive the following error message:
	
	  There is not enough space on the Microsoft Exchange Server to store all of
	  your rules. The rules that failed to upload have been deactivated.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	- Create distribution lists (DLs) to group recipients in rules, instead of
	  using individual recipients.
	
	- Keep the number of recipients small in rules.
	
	- Keep the names of recipients as small as possible.
	
	MORE INFORMATION
	================
	
	Each rule is made up of seven parts. The rule properties themselves represent
	from 400 to 500 bytes of data without the recipients. Each recipient averages
	about from 400 to 500 bytes of space as well, and this data is stored in the
	conditions and restrictions portion of the rule. Distribution lists are
	considered one recipient and only take up from 400 to 500 bytes of space. The
	total amount of space that is allowed for each folder is 32 kilobytes (KB). Out
	of office e-mail messages are stored as rules, so they take up space as well.
	
	The following information is used to compile the space that is used by a rule:
	
	- Rule Sequence. The order of the rules in which this rule is fired.
	
	- Rules State. The value that determines whether the rule is turned on or off.
	
	- User State. Whether or not the user is logged on.
	
	- Provider Name. Generally the provider name is "RulesOrganizer."
	
	- Rule Name. This is stored in Unicode and ASCII.
	
	- Rule Level. Information about the version of the rule.
	
	- Rule Provider Data. Information specific to the Rules Wizard.
	
	- Conditions and Restrictions. The majority of the rule information, where size
	  is concerned. Data from the user interface (UI) of the Rules Wizard.
	
	- Distinguished Name. This is stored in Unicode and ASCII.
	
	- Display Name. This is stored in Unicode and ASCII, and it is stored twice.
	
	- Exceptions. Exceptions to the rule.
	
	- Conditions. Conditions for the rule.
	
	
	Additional query words: OL2000 OL98 OL97
	
	======================================================================
	Keywords          : exc5 exc55 exc5sp1 exc5sp2 exc55sp1 exc55sp2 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbExchange500SP1 kbExchange500SP2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.0,5.0 SP1,5.0 SP2,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
