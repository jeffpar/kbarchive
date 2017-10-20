---
layout: page
title: "Q264587: XADM: Error with Import of the Home-MDB and Home-MTA Attributes"
permalink: /kb/264/Q264587/
---

## Q264587: XADM: Error with Import of the Home-MDB and Home-MTA Attributes

{% raw %}

	Article: Q264587
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to import a .csv file into an Exchange Server folder with the
	Home-MDB attribute, you may receive the following error message:
	
	  The Home-MDB attribute is not directly importable.
	
	Also, the following event is logged in the application event log:
	
	  Event ID: 154
	  Source: MSExchangeDSImp
	  Category: none
	  Type: Error
	  Description: The attribute Home-MDB is not directly importable
	
	Also, the following event is logged in the application event log:
	
	  Event ID: 154
	  Source: MSExchangeDSImp
	  Category: none
	  Type: Error
	  Description: The attribute Home-MTA is not directly importable.
	
	CAUSE
	=====
	
	If you use the Headers.exe utility to export your Exchange Server folder
	attributes to a .csv file and select all attributes, the Home-MDB and Home-MTA
	attributes are created in the .csv file. If you then export your folder to the
	.csv file and later use the .csv file to import, the import procedure does not
	work because you cannot import the Home-MDB and Home-MTA attributes.
	
	RESOLUTION
	==========
	
	Before you perform the import procedure, edit the .csv file that you created
	from the Headers.exe utility, and then delete the columns of the Home-MDB and
	Home-MTA attributes.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
