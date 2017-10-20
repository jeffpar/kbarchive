---
layout: page
title: "Q150438: XFOR: MS Mail Template Information is not Migrated"
permalink: /kb/150/Q150438/
---

## Q150438: XFOR: MS Mail Template Information is not Migrated

{% raw %}

	Article: Q150438
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Migration Wizard that comes with Microsoft Exchange Server to
	migrate accounts created with Microsoft Mail for PC Networks, version 3.x, no MS
	Mail template information will be migrated.
	
	MORE INFORMATION
	================
	
	When the Migration Wizard creates the .CSV file that it will later use to create
	the new Microsoft Exchange accounts, the following fields are listed:
	
	SFS_UserName      - populated with the MS Mail Mailbox name
	SFS_FullName      - populated with the MS Mail Full Name
	MigrateUser       - populated with Y by default
	Obj-Class         - set to Mailbox by default
	Mode              - set to Create by default to create the Exchange
	                   mailbox
	Common-Name       - populated with MS Mail Mailbox name
	Display-Name      - populated with MS Mail Full name
	Given-Name        - not populated by default
	Surname           - not populated by default
	Home-Server       - populated with ~SERVER by default (~SERVER is a
	                   variable for the servername that will be selected
	                   later. Do not change this selection.)
	Comment           - not populated by default
	Assoc-NT-Account  - populated with NT Account name (if Create NT Account
	                   is selected)
	
	If Two-Step Migration is selected, the user will be prompted for a location to
	put this file and they may open it with any text editor and edit as desired.
	Please be aware that any changes made to this file may affect how, and if, the
	users are migrated.
	
	Additional query words: Template Migration
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
