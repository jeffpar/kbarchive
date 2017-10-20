---
layout: page
title: "Q160926: XADM: Modifying Usage Quotas for All Users"
permalink: /kb/160/Q160926/
---

## Q160926: XADM: Modifying Usage Quotas for All Users

{% raw %}

	Article: Q160926
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Import/Export functionality in the
	Microsoft Exchange Administrator program to automatically modify the storage
	usage quotas of all Exchange mailboxes.
	
	MORE INFORMATION
	================
	
	To set the quotas on all mailboxes to use the information store defaults, use
	the following steps:
	
	1. From the Support\Samples\CSVs\Mailbox directory on the Microsoft Exchange
	  Server compact disc, copy the Mailbox.csv file to the hard disk.
	
	2. Remove the Read-only attribute on the file.
	
	3. In the Exchange Administrator program, click Directory Export on the Tools
	  menu. Select Mailbox.csv as the export file and the appropriate container,
	  and then click the Export button.
	
	4. Open the Mailbox.csv file in Microsoft Excel (or any spreadsheet).
	
	5. In the Mailbox.csv file, find the column titled "Use IS defaults".
	
	6. Set the value for all rows in this column to 1. NOTE: To turn off the setting
	  and not use the information store defaults, set the value to 0.
	
	7. Save the file and quit the spreadsheet.
	
	8. From the Exchange Administrator program, click Directory Import on the Tools
	  menu. Select the Mailbox.csv file as the import file and click Import. This
	  should modify all mailboxes to use the information store default storage
	  quotas.
	
	To set specific quotas on all mailboxes in a container, use the following steps:
	
	1. Follow steps 1-3 in the previous procedure to export all the mailbox
	  information to the Mailbox.csv file.
	
	2. Open the file in a spreadsheet and set the value of the "Use IS defaults"
	  column to 0.
	
	3. Set the value of the "Issue warning storage limit" column to the size at
	  which a warning should be sent. This value is in kilobytes (KB).
	
	4. Set the value of the "Prohibit send storage limit" column to the size at
	  which a the user will not be able to send any more mail. This value is in
	  kilobytes (KB).
	
	5. Save the file and quit the spreadsheet.
	
	6. From the Exchange Administrator program, click Directory Import on the Tools
	  menu. Select the Mailbox.csv file as the import file and click Import. This
	  should modify all mailboxes to use the specified quotas.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
