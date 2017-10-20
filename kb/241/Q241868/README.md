---
layout: page
title: "Q241868: XADM: How to Apply Mailbox Message Size Limits to Mailboxes"
permalink: /kb/241/Q241868/
---

## Q241868: XADM: How to Apply Mailbox Message Size Limits to Mailboxes

{% raw %}

	Article: Q241868
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the directory export function in the Microsoft Exchange Server
	Administrator program to limit the amount of storage used by messages sent to or
	from one or more mailboxes.
	
	MORE INFORMATION
	================
	
	To use the directory import function to apply storage limits, you create a Comma
	Separated Values (CSV) file, create new columns in the CSV file, and then import
	the CSV file into the Exchange Server directory. The values you include in the
	new columns are used to create new attributes for the existing mailbox objects
	in the directory.
	
	To apply mailbox message size limits to multiple mailboxes:
	
	1. Export the mailboxes from the directory to a CSV file.
	
	2. Using Microsoft Excel, open the CSV file, and add columns for the Incoming
	  Message Size Limit and Outgoing Message Size Limit, as needed. The titles of
	  the new columns must appear on row 1 of the spreadsheet, and spaces between
	  words in the titles are valid.
	
	3. Enter the values for the Incoming Message Size Limit and Outgoing Message
	  Size Limit in the appropriate cells. Exchange Server interprets the values
	  entered in the message size limit columns as kilobytes (KB). For example, a
	  value of 50 in an Incoming Message Size Limit cell is interpreted as a limit
	  of 50 KB.
	
	4. Save the CSV file.
	
	5. Use directory import to import the CSV file into the directory.
	
	Message limits are now set on the mailboxes, and may be verified on the Limits
	page of the mailbox properties.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
