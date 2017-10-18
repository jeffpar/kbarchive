---
layout: page
title: "Q235526: Event ID 295 Error Message Importing Foreign Language Templates"
permalink: kb/235/Q235526/
---

## Q235526: Event ID 295 Error Message Importing Foreign Language Templates

	Article: Q235526
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you import a foreign language template to an Exchange Server computer, the
	following error message may be displayed:
	
	  <number> error descriptions were recorded in the system's application
	  event log.
	
	  The file <dir>:\Template.err contains copies of all object descriptions
	  containing errors.
	
	In the Windows NT Event Viewer application event log, events of the following
	type may be logged:
	
	  Event ID: 295
	  Source: MSExchangeDSImp
	  Type: Error
	  Category: None
	  Description: Unable to open or read the attribute value include file
	  <filename>.blt OR <filename>.scr
	
	CAUSE
	=====
	
	This problem occurs when you import the foreign language template file (the
	Template.csv file) from a directory or file location that does not contain the
	other files (the .blt and .scr files) that the Template.csv file references.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform a directory import from the
	Server\Setup\<platform>\Tpl\<language> directory on the Exchange
	Server CD for that language. In addition to the Template.csv file, this
	directory contains all the .blt and .scr files that the foreign language
	templates need to create localized addressing, details templates and addressing,
	and one-off address templates for that language.
	
	You can also copy the Template.csv file and all of the .blt and .scr files from
	the Exchange Server CD to a directory that you can perform the import to the
	Exchange Server computer from.
	
	MORE INFORMATION
	================
	
	For additional information about language templates, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q159721 XADM: How To Add Templates for Different Language Clients
	
	Additional query words: french outlook, spanish 295, id: template.csv
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
