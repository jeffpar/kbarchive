---
layout: page
title: "Q159184: XADM: No Messages from MTA with High Directory Service Activity"
permalink: /kb/159/Q159184/
---

## Q159184: XADM: No Messages from MTA with High Directory Service Activity

	Article: Q159184
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may have difficulty delivering messages with the Microsoft Exchange Server
	message transfer agent (MTA). The symptoms for this problem are as follows:
	
	- The directory service is consistently very busy (processor use is 20 percent
	  or greater).
	
	- MTA processor usage is quite low.
	
	- The MTA work queue consistently has a backlog of messages.
	
	- Messages are not delivered to the server.
	
	- The global address list is very large (20,000 users or more).
	
	CAUSE
	=====
	
	This problem is caused by time consuming fuzzy proxy directory service searches
	on large global address lists.
	
	RESOLUTION
	==========
	
	Apply the fix mentioned in the "Status" section of this article. If this fix
	does not correct the problem, perform one of the following steps:
	
	- Create the "Allow fuzzy proxy search" registry value and set it to 0. To do
	  this, you need to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	  3. Define the following registry value:
	
	  Allow fuzzy proxy search
	
	     Set this value to 0. This case-sensitive registry value is a DWORD value
	     type. If you set the "Allow fuzzy proxy search" value to 0, you disable
	     the fuzzy proxy search. If this registry value does not exist, the MTA
	     assumes that this setting has a value of 1, and enables fuzzy proxy
	     searches.
	
	  4. Quit Registry Editor.
	
	- If the problem persists, disable the alternate recipient Redirect and Deliver
	  option for every mailbox on the server. To do this, in each mailbox, click
	  the Delivery Options tab, and under Alternate Recipient, click None.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This behavior may occur if the MTA attempts to deliver a message addressed to an
	X.400 proxy that does not exactly match an address in the global address list,
	and the proxy contains a substring that is similar to other addresses in the
	global address list. For example, message delivery may be slow if a message is
	addressed to an X.400 proxy that is similar to the following:
	
	  X400:C=US;A= ;P=Microsoft;CN=PaulBon
	
	This address does not fully match the defined X.400 address for that mailbox. The
	MTA makes a request for the DS to resolve the address if there are thousands of
	other X.400 proxies in the global address list that contain the following
	substring:
	
	  X400:C=US;A= ;P=Microsoft
	
	If the directory service is unable to resolve the full address by means of an
	exact match, the directory service attempts to perform a fuzzy proxy search
	based on the parsed substrings.
	
	By default, the MTA attempts to perform a fuzzy proxy search if it is unable to
	match the O/R address when it performs a DS_Search. To disable the fuzzy proxy
	search, add the "Allow fuzzy proxy search" registry value and set it to 0.
	
	For additional information about the fuzzy proxy search in Microsoft Exchange
	Server versions 5.0 and 5.5, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q176046 XCON: Routing Issues with Microsoft Exchange Server, Version 5.0
	
	
	Additional query words: DS
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
