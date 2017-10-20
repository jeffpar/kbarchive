---
layout: page
title: "Q147298: XCLN: Maximum Number of Rules Per Folder"
permalink: /kb/147/Q147298/
---

## Q147298: XCLN: Maximum Number of Rules Per Folder

{% raw %}

	Article: Q147298
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): WINDOWS
	Keyword(s): kbenv XCLN
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange has the capability to define rules to automatically operate
	on messages in the Inbox or a public folder. There is a 32K "packed data" limit
	for the rules on each folder, whether Inbox or public folders. The maximum
	number of rules depends on the size of the rules defined and the amount of data
	required for a rule varies depending on the rule. For example, a rule to move
	messages into a folder, for a single recipient, takes about 660 bytes. Hence
	there is no defined limit for the maximum number of rules that can be assigned
	to a folder. On the average it is between 40 and 50 rules per folder.
	
	The following error will be displayed when the number of rules exhaust the 32K
	memory limit:
	
	  Changes to the rule could not be saved. There is not enough memory or the
	  rules are too complex. Try deleting some rules.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbenv XCLN 
	Version           : WINDOWS:4.0,5.0
	Platform          : WINDOWS
	
	=============================================================================
	

{% endraw %}
