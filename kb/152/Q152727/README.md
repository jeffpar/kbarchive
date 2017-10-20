---
layout: page
title: "Q152727: XADM: Importing Blank Value Won't Modify Mailbox Value"
permalink: /kb/152/Q152727/
---

## Q152727: XADM: Importing Blank Value Won't Modify Mailbox Value

{% raw %}

	Article: Q152727
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you import a comma delimited file into Microsoft Exchange Server by using
	the Microsoft Exchange Administrator program, and a blank value is included, the
	existing value on the General tab of the Mailbox properties page will not be
	replaced.
	
	MORE INFORMATION
	================
	
	If there is a value on the General tab, the comma comma value (,,) import will
	not change the value to blank. The same will occur if a comma space comma is
	used (, ,). To replace a value on the General tab of the Mailbox properties
	page, the imported file must contain a comma double-quote space double-quote
	comma value (," ",).
	
	For additional information on removing fields, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q152854 XADM: Using Bulk Import to Remove Data
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
