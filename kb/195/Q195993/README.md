---
layout: page
title: "Q195993: WD97: Invalid Parameter Error When Inserting Address"
permalink: /kb/195/Q195993/
---

## Q195993: WD97: Invalid Parameter Error When Inserting Address

{% raw %}

	Article: Q195993
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97; :4.0
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Exchange Client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the Insert Address button on the Standard toolbar, the following
	error message appears:
	
	  Address Book Failure "Invalid Parameter" (0x80070057/0x00000000). Check your
	  mail setup. You must have extended MAPI version 1.0 or higher to use this
	  feature.
	
	CAUSE
	=====
	
	You do not have a personal address book installed.
	
	WORKAROUND
	==========
	
	Add a personal address book to your default profile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	This problem was corrected in Microsoft Word 2000.
	
	MORE INFORMATION
	================
	
	By default, Exchange installs a personal address book file. This error occurs
	when the personal address book file has been deleted.
	
	Additional query words: error parameter invalid fails failed failure errmsg mapi message mail Messaging Application Programming Interface
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2
	Version           : WINDOWS:97; :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
