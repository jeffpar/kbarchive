---
layout: page
title: "Q245223: XFOR: Filter Rules for Lotus Notes and Exchange Server Dirsync"
permalink: /kb/245/Q245223/
---

## Q245223: XFOR: Filter Rules for Lotus Notes and Exchange Server Dirsync

{% raw %}

	Article: Q245223
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Filter rules are used to prevent specified directory entries from being
	propagated between Microsoft Exchange Server and Lotus Notes during directory
	synchronization (dirsync). For example, the Notes Address Book may contain users
	from multiple domains. By default, all of the users from all the domains are
	propagated from the Address Book during dirsync. You can set up a filter rule to
	prevent certain users from being propagated based on the domain in which they
	are located.
	
	MORE INFORMATION
	================
	
	Filter rules are defined in the following format:
	
	  filter_<rule_name> = <AttributeName>, <Operator>,
	  <Value>
	
	- filter_<rule_name>: The rule name can be called anything as long as it
	  is preceded by "filter_".
	
	- <AttributeName>: Any directory attribute that matches an Exchange
	  Server friendly name or a Notes friendly name.
	
	  NOTE: In the Amap.tbl files, this is the value after the equal sign (=).
	
	- <Operator>: EQ (equal) or NE (not equal).
	
	- <Value>: Specify the value based on what will be propagated.
	
	To implement filter rules, modify the Exchconn.ini file located in the
	Exchsrvr\Connect\Exchconn folder.
	
	IMPORTANT: Always make a backup copy of the original Exchconn.ini file before you
	make any changes to it.
	
	Implement the filter rules in the following sections of the Exchconn.ini file:
	
	Filter Rules for Exchange Server
	--------------------------------
	
	Add the filter rule to the [LME-NOTES-DXAMEX] section. For example, to add a
	filter rule that allows only Exchange Server users or custom recipients with
	last name of "Smith" to propagate to Notes, make the following changes:
	
	1. Open the Exchconn.ini file in Notepad.
	
	2. Locate the [LME-NOTES-DXAMEX] section of the file and at the bottom add:
	
	  "filter_Smith = Surname, EQ, Smith" (without the quotation marks)
	
	3. After you make the change, save the Exchconn.ini file, and then restart the
	  Notes connector service.
	
	4. Request a full immediate reload from Exchange Server to Notes.
	
	Results: The Exchange Address Book in Notes only contains users who have a last
	name of Smith.
	
	Filter Rules for Notes
	----------------------
	
	Add the filter rule to the [LME-NOTES-DXANOTES] section. For example, to add a
	filter rule that allows all Notes domains to propagate to Exchange Server except
	for a domain called Sales, make the following changes:
	
	1. Open the Exchconn.ini file in Notepad.
	
	2. Locate the [LME-NOTES-DXANOTES] section of the file and at the bottom add:
	
	  "filter_Sales = MailDomain, NE, Sales" (without the quotation marks)
	
	3. After you make the change, save the Exchconn.ini file, and then restart the
	  Notes connector service.
	
	4. Request a full immediate reload from Notes to Exchange Server.
	
	Results: The Exchange Server global address list contains Notes users from all
	domains except the Sales domain. The Sales domain is not propagated.
	
	For additional information about filter rules, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q241324 XFOR: DocErr: Filter Rules Only Support EQ and NE Operators
	
	Also see the following guide:
	
	  Microsoft Press, ISBN 0-7356-0529-7: "Notes from the field: Deploying
	  Microsoft Exchange Server 5.5"
	
	Additional query words: include, exclude, prevent, dxa, GAL
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
