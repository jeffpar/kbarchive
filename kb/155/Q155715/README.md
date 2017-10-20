---
layout: page
title: "Q155715: XADM: How to Resolve an Address Based on First Name"
permalink: /kb/155/Q155715/
---

## Q155715: XADM: How to Resolve an Address Based on First Name

{% raw %}

	Article: Q155715
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible for users to search the global address list based on First Name.
	This article explains how to include additional attributes in searches and
	Address Name Resolutions (ANRs).
	
	MORE INFORMATION
	================
	
	1. Start the Microsoft Exchange Administrator program in raw mode by typing
	  "admin /r" (without the quotation marks) at the command prompt.
	
	2. On the View menu, click Raw Directory. This should add a container in the
	  left pane called Schema.
	
	3. Double-click the Schema object and press the F5 key to refresh the screen.
	
	4. Get the properties of the First Name object by double-clicking the object;
	  or, on the File menu, click Properties. A dialog box appears.
	
	5. Click Yes to view the raw properties of the object.
	
	6. In the Object attributes list, click to select the Search-Flags attribute.
	
	7. In the Edit value box, enter the value 2, and then click Set.
	
	8. Click OK to close the dialog box.
	
	9. Restart the server.
	
	NOTE: Schema updates are not replicated between sites. Therefore schema changes
	must be performed for each site where you want the change to take effect.
	
	Additional query words: raw anr resolve check ambiguous resolution nickname alias
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
