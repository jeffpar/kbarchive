---
layout: page
title: "Q188642: XADM: Monitoring Client Actions from the Administration Program"
permalink: kb/188/Q188642/
---

## Q188642: XADM: Monitoring Client Actions from the Administration Program

	Article: Q188642
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information can be used to view the number of messaging or public
	folder operations. This information can be viewed in the Microsoft Exchange
	Server Administration program.
	
	For the private information store, expand on Configuration, Servers, <server
	name>, Private Information Store, Logons, and select the Columns tab on the
	Logons Properties page.
	
	For the Public Information Store, expand on Configuration, Servers, <server
	name>, Public Information Store, Logons, and select the Columns tab on the
	Logons Properties page.
	
	MORE INFORMATION
	================
	
	Individual Ops can be selected or Total Ops can be selected to include all
	operations. Click Refresh to receive current information about the server
	operations.
	
	The list of available options are as follows:
	
	Folder Ops
	The total number of folder operations performed in the last 60 seconds, such as
	opening or closing a folder.
	
	Messaging Ops
	The total number of messaging operations performed in the last 60 seconds, such
	as opening or closing a message.
	
	Other Ops
	The total number of miscellaneous operations performed in the last 60 seconds.
	
	Progress Ops
	The total number of progress operations performed in the last 60 seconds.
	Progress operations inform the user about how long it will take to complete a
	task.
	
	Stream Ops
	The total number of stream operations performed in the last 60 seconds, such as
	viewing or changing an attachment.
	
	Table Ops
	The total number of table operations performed in the last 60 seconds, such as
	viewing the contents of a folder.
	
	Total Ops
	The total number of operations performed in the last 60 seconds.
	
	Transfer Ops
	The total number of transfer operations performed in the last 60 seconds, such as
	copying or moving a message.
	
	Additional query words: xcln
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
