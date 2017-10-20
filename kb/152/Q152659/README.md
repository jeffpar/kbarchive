---
layout: page
title: "Q152659: XADM: Importing Exchange Accounts from Another Organization"
permalink: /kb/152/Q152659/
---

## Q152659: XADM: Importing Exchange Accounts from Another Organization

{% raw %}

	Article: Q152659
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can connect two Microsoft Exchange Server messaging systems that are in
	different Microsoft Exchange Server Organizations by using the Dynamic RAS or
	X.400 connectors. The drawback to this is that no directory information is
	replicated. To send mail to users in the other Organization, you need to create
	custom recipients for each account. This article explains how to create these
	custom recipients.
	
	MORE INFORMATION
	================
	
	To create custom recipients for accounts in another Organization, follow these
	steps (Microsoft Exchange Server 1 and 2 are just examples):
	
	1. Extract the users on Microsoft Exchange Server 1 by starting the Microsoft
	  Exchange Administrator program and on the Tools menu, clicking Directory
	  Export.
	
	2. Edit the CSV file that you just created and change the Obj-Class column from
	  Mailbox to Remote.
	
	3. Start Microsoft Excel, and open the CSV file in it. On the Data menu, click
	  Text to Columns.
	
	4. In the Convert Text to Columns Wizard - Step 1 of 3 dialog box, click
	  Delimited, and then click Next.
	
	5. In the Convert Text to Columns Wizard - Step 2 of 3 dialog box, in the
	  Delimiters area, click to clear all the check boxes except the Other check
	  box, click to select the Other check box, and in the space provided, type "%"
	  (without the quotation marks), and then click Next.
	
	6. In the Convert Text to Columns Wizard - Step 3 of 3 dialog box, for each
	  address class except the X.400 address, click "Do not import column (skip)"
	  and then click Finish. You now have a column labeled E-mail Addresses that
	  contains the X.400 addresses of all your users.
	
	7. Cut and paste the addresses under the column labeled E-mail Address.
	
	8. Remove the E-Mail Addresses column from the CSV file.
	
	9. Import this file into Microsoft Exchange Server 2 by starting the Microsoft
	  Exchange Server Administrator program, and on the Tools menu, clicking
	  Directory Import.
	
	Additional query words: Import Export XSRVAdm
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
