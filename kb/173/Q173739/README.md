---
layout: page
title: "Q173739: XADM: How to View Deleted Items Space Usage in Administrator"
permalink: /kb/173/Q173739/
---

## Q173739: XADM: How to View Deleted Items Space Usage in Administrator

{% raw %}

	Article: Q173739
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server, it is possible to view the amount of space being
	used by Item Retention. This article details how to enable viewing this
	information in the Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	Follow these steps to display the Deleted Items K column for the Microsoft
	Exchange Private Information Store in the Microsoft Exchange Administrator
	program:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Expand the Site, the Configuration, and the Servers container that contains
	  the Exchange Server you wish to view.
	
	3. Select the Exchange Server.
	
	4. Select the Private Information Store and open its properities page.
	
	5. Click the Mailbox Resources tab.
	
	6. Click the Columns button and add the Deleted Items K column to the Show the
	  Following Columns list.
	
	7. Click OK twice.
	
	The Deleted Items K column will now appear on the Mailbox Resources tab of the
	Private Information Store's properties page.
	
	Follow these steps to display the Deleted Items K column for the Public
	Information Store:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Expand the Site, the Configuration, and the Servers container that contains
	  the Exchange Server you wish to view.
	
	3. Select the Exchange Server.
	
	4. Select the Public Information Store and open its properties page.
	
	5. Click the Public Folder Resources tab.
	
	6. Click the Columns button and add the Deleted Items K column to the Show the
	  Following Columns list.
	
	7. Click OK twice.
	
	The Deleted Items K column will now appear on the Public Folder Resources tab of
	the Public Information Store's properties page.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
