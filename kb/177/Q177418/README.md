---
layout: page
title: "Q177418: XFOR: Migrating Data Containing DBCS Characters to Exchange"
permalink: /kb/177/Q177418/
---

## Q177418: XFOR: Migrating Data Containing DBCS Characters to Exchange

	Article: Q177418
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When migrating data containing double-byte character set (DBCS) characters to
	Microsoft Exchange Server, the DBCS characters may be illegible after the
	migration is complete. The characters appear correct in the migration files, but
	when the message is opened, the characters are not legible.
	
	MORE INFORMATION
	================
	
	To migrate data in different languages to Microsoft Exchange Server, run the
	Migration Wizard once for each language. It is easiest if the Microsoft Exchange
	Server computer that is used to perform the migration uses the same code page as
	the language used in the data to be migrated. For example, if migrating Japanese
	data, the server should be a Japanese language server. Microsoft Exchange Server
	uses the code page for the language that is used for the Microsoft Windows NT
	Server software installed on the server.
	
	If the correct code page is not installed on the Microsoft Exchange Server
	computer, the import file created during migration can be modified to specify
	the correct code page. The following steps detail how to do this:
	
	1. Run the Migration Wizard and perform the first step in a two-step migration
	  to create an import file. This will create a .pkl file. Complete step 2
	  before running the second part of the migration.
	
	2. Using a text editor, edit the .pkl file to specify the code page for the
	  language that you are migrating. For example, if you are migrating Japanese
	  data, the following entry for the Japanese code page should be entered at the
	  beginning of the import file:
	
	        ! CodePage
	        932
	
	3. Complete the migration by running the Migration Wizard and performing the
	  second step in the two-step migration.
	
	Additional query words: MIGRATION DBCS MAC CODEPAGES
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
