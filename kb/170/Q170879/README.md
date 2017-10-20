---
layout: page
title: "Q170879: XADM: How to Use Multiple Offline Address Books in Exchange 5.0"
permalink: /kb/170/Q170879/
---

## Q170879: XADM: How to Use Multiple Offline Address Books in Exchange 5.0

{% raw %}

	Article: Q170879
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server 5.0 Service Pack (SP) 1 it is now possible for
	administrators to create multiple offline Address Books that remote users can
	use to obtain information about other users in their organization.
	
	MORE INFORMATION
	================
	
	The Offline Address Book property page on the DS Site Configuration object has
	been enhanced to allow generation and manipulation of multiple offline Address
	Books.
	
	NOTE: You must use a computer running Microsoft Exchange Server 5.0 Service Pack
	
	1. In the Exchange Administrator program, choose Configuration, and then
	  double-click DS Site Configuration.
	
	2. Select the Offline Address Book tab.
	
	3. In the Offline Address Book Server box, select one of the servers in your
	  site.
	
	4. To add containers for more offline Address Books, click Add.
	
	5. To generate multiple offline Address Books, click Generate All.
	
	To use multiple offline Address Books in the client, follow these steps:
	
	NOTE: The use of multiple offline Address Books requires at least Microsoft
	Exchange Client 5.0 SP1 or Microsoft Outlook version 8.02.
	
	1. Open the client offline.
	
	2. From the Tools Menu, choose Synchronize and then Download Address Book.
	
	3. Choose the level of detail you want with the Address Book and click the OK
	  button.
	
	4. Choose from the list of Offline Address Books that you want to view.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
