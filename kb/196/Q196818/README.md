---
layout: page
title: "Q196818: XFOR: How to Limit Recipients on Outbound SMTP Messages"
permalink: /kb/196/Q196818/
---

## Q196818: XFOR: How to Limit Recipients on Outbound SMTP Messages

	Article: Q196818
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The number of recipients specified in the To field of an SMTP message can not be
	limited by Microsoft Exchange Server 5.5. However, the manner in which the
	Exchange Server Internet Mail Service processes an SMTP message can be altered
	by specifying a maximum number of recipients in a registry entry. The registry
	entry setting affects only the outbound mail.
	
	After you implement the registry change, a message exceeding the maximum number
	of recipients will be sent by the Internet Mail Service to an SMTP host in
	batches. Each batch will include a number of recipients equal to or less than
	the maximum number of recipients allowed. See the following More Information
	section for details.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To modify how the Internet Mail Service processes messages based on the number of
	recipients, follow these steps:
	
	1. On the Microsoft Exchange Server computer, start Regedt32.exe.
	
	2. Find the following registry key:
	
	  HKEY_LOCAL_MACHINE/SYSTEM/CurrentControlSet/Services/MSExchangeIMC/ 
	  Parameters
	
	
	  NOTE: The above is one path; it has been wrapped for readability.
	
	3. On the Edit/Add value menu, add the following:
	
	  Value Name: MaxRecipients
	  Data Type: REG_DWORD
	  Data Value: Enter the maximum number of recipients that will be allowed
	  on a single transmission of an SMTP message.
	
	
	4. Exit Regedt32, and restart the Internet Mail Service.
	
	The MaxRecipients registry entry will affect the Internet Mail Service's behavior
	in the following way:
	
	- Suppose the MaxRecipients hex value is set to 0xFA. This translates to a
	  decimal value of 250, which is the maximum number of recipients that the
	  Internet Mail Service will process in an initial transmission of a message
	  which contains more than 250 recipients in the To field.
	
	- If a message is addressed to 500 users, the Internet Mail Service will
	  process the first 250 recipients in the RCPT TO commands.
	
	- It will then transmit the message data in a DATA command.
	
	- After the data is finished, the Internet Mail Service will process the final
	  250 recipients in the RCPT TO commands.
	
	- The message data is sent again in the DATA command.
	
	NOTE: Using this registry entry may have an adverse effect on the performance of
	high volume Exchange Server Internet Mail Service computers because a message
	may be transmitted multiple times. Typically, this registry entry is most useful
	when you need to work around the limitations set on the SMTP host to which the
	Internet Mail Service is sending mail.
	
	Additional query words: xfor, xims, restrict, unix
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	
	=============================================================================
	
