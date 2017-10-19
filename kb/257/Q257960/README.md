---
layout: page
title: "Q257960: XCLN: Rules in Outlook Cannot Process Substrings in the Subject"
permalink: /kb/257/Q257960/
---

## Q257960: XCLN: Rules in Outlook Cannot Process Substrings in the Subject

	Article: Q257960
	Product(s): Microsoft Exchange
	Version(s): 8.01,8.02,8.03,8.04; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97, versions 8.01, 8.02, 8.03, 8.04 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Outlook, if you create a rule that processes messages based on a specific
	search string (such as a word or group of words) in the Subject line, the rule
	also processes any messages that have a string in the Subject line that contains
	the search string as a substring.
	
	For example, if you create a rule that process messages based on the presence of
	the following search string in the Subject line
	
	  age
	
	that rule also processes messages that contain the following strings in the
	Subject line:
	
	- message
	
	- ages
	
	- page
	
	- agenda
	
	This behavior occurs because the rule looks for the search string "age" (without
	the quotation marks) and processes a message if it finds that string anywhere in
	the message Subject line. A rule also does not distinguish between uppercase and
	lowercase letters.
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	You can force a rule to look for a specific search string by enclosing the search
	string in quotation marks. However, the rule treats the quotation marks as part
	of the search string. For example, if you create a rule that looks for the
	following search string (with the quotation marks)
	
	  "age"
	
	the Subject line of a message must contain the string "age" (with the quotation
	marks) for the rule to take effect for that message. (A message with a Subject
	line that contains the string "AGE" also causes the rule to take effect because
	the rule ignores the case of letters.) In this example, if you receive an e-mail
	message that has the following string in the Subject line
	
	  age
	
	the rule does not process the message because the rule is looking for messages
	that contain the following strings (with the quotation marks) and any other
	possible permutations of the search string:
	
	- "age"
	
	- "AGE"
	
	Another way to force a rule to look for a specific search string is to use the
	rich Microsoft Visual Basic for Applications development environment in Outlook
	2000 to create a custom rule. However, to do this, you need to do a certain
	amount of coding and you need to have expertise in Outlook programming.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q253277 XCLN: How to Delete Messages That Have a Blank Subject Line
	
	Additional query words: OL97 OL98 OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbOutlook804
	Version           : :8.01,8.02,8.03,8.04; WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
