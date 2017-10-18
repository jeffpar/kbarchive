---
layout: page
title: "Q178933: XADM: Using Non-U.S. Clients on Domestic (U.S.) Server"
permalink: kb/178/Q178933/
---

## Q178933: XADM: Using Non-U.S. Clients on Domestic (U.S.) Server

	Article: Q178933
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In order for a domestic (U.S.) Exchange Server computer to accommodate non- U.S.
	English clients, each language must have files and templates specific to its
	nationality installed on the server.
	
	The user interface and administration of the server are not affected by these
	changes.
	
	MORE INFORMATION
	================
	
	In order for the foreign client to be able to communicate with the server, the
	Template.csv file and all associated files must be imported using the Exchange
	Administrator.
	
	The Microsoft Exchange Server 4.0 CD-ROM includes the files necessary for French,
	German, and Japanese in the \setup\<platform>\tpl\<language>
	folder.
	
	With the release of Exchange Server 5.0 and Exchange Server 5.5, these languages
	were moved to the corresponding non-U.S. English client CD-ROM. They may be
	found in the \tpl folder.
	
	The following is a procedure for importing the Template.csv file and all
	associated files, for all versions:
	
	1. Click Directory Import on the Tools menu.
	
	2. Click Import File, browse, and select the Template.csv for the appropriate
	  language. Click Open. All necessary files will be copied from the source to
	  the Exchange Server computer.
	
	3. Verify that the files were installed properly by checking for the language in
	  the following leaf objects in the Exchange Administrator program:
	
	  \configuration\addressing\details templates
	  \configuration\addressing\one-off address templates.
	
	If the client requires the support of special fonts or double byte characters not
	included in the non-U.S. English standard set (for example, Japanese), the code
	page for that country must also be installed. The foreign language code pages
	must be loaded before the following proceedures are performed.
	
	For additional information on using non-U.S. English clients on a U.S. English
	server, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q160028 Adding Code Pages to Windows NT Server 4.0
	
	  Q151701 How to Manually Add Code Pages For Mixed Languages
	
	Also see the Microsoft Exchange 5.0 Client Release Notes. This is the Readme.wri
	file on the Client CD-ROM.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
