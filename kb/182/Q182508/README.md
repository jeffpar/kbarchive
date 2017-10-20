---
layout: page
title: "Q182508: XADM: How to Delete a User Using a .csv File Import"
permalink: /kb/182/Q182508/
---

## Q182508: XADM: How to Delete a User Using a .csv File Import

{% raw %}

	Article: Q182508
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to delete a user by using a .csv file, and the
	Directory Import command.
	
	MORE INFORMATION
	================
	
	To delete a user by using the .csv file, follow these steps:
	
	1. Edit the .csv file, and add the "Mode" (without the quotation marks) field
	  header to the immediate right of the Obj-Class field.
	
	2. Add "Delete" (without the quotation marks) in the Mode field next to the name
	  that you are removing.
	
	3. Import the modified .csv file by using the Directory Import command from the
	  Tools menu of the Microsoft Exchange Server Administrator program.
	
	After importing the file, the user with the "Delete" transaction is removed.
	
	NOTE:You can also use the Mode command to create, modify, and update entries.
	
	To generate the .csv file, you can use the Header.exe file from the resource kit.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
