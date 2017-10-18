---
layout: page
title: "Q159721: XADM: How to Add Templates for Different Language Clients"
permalink: kb/159/Q159721/
---

## Q159721: XADM: How to Add Templates for Different Language Clients

	Article: Q159721
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup exc4 exc5 exc55
	Last Modified: 30-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The English version of Microsoft Exchange Server can support non-English
	Microsoft Exchange Clients.
	
	To see details on mailboxes, custom recipients, or distribution lists from a
	non-English client, the corresponding details templates in the same language as
	the client need to be installed on the computer running Exchange Server. This
	article describes how to add the localized templates to Microsoft Exchange
	Server.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server, version 4.0
	--------------------------------------
	
	The location of the Template.csv file is on the Microsoft Exchange Server,
	version 4.0 compact disk. This location will vary depending on the platform and
	language needed. The directory structure of the compact disk is as follows:
	
	  \SETUP
	     \ALPHA
	        \TPL
	           \FRN
	           \GER
	           \JPN
	           \USA
	     \I386
	        \TPL
	           \FRN
	           \GER
	           \JPN
	           \USA
	     \MIPS
	        \TPL
	           \FRN
	           \GER
	           \JPN
	           \USA
	     \PPC
	        \TPL
	           \FRN
	           \GER
	           \JPN
	           \USA
	
	Select the platform type; Alpha, I386, or MIPS. Under this directory, change to
	the TPL directory. Under the TPL directory, you will have the choice of FRN,
	GER, JPN, and USA. Within these subdirectories you will find a file called
	Template.csv in each directory.
	
	Microsoft Exchange Server, version 5.0 and 5.5
	----------------------------------------------
	
	In Microsoft Exchange Server, versions 5.0 and 5.5, the location of the
	Template.csv files changed. These files are now located on the Client compact
	disk that comes with the Microsoft Exchange Server. The exact location of the
	Template.csv file will vary, depending on the language of the clients, but
	should be located in a location similar to this:
	
	  \ENG
	     \SUPPORT
	        \TPL
	  \FRN
	     \SUPPORT
	        \TPL
	
	The files are also available on the Exchange 5.5 SP3 CDROM under the path
	Drive:\Client\Template.
	
	The Template.csv file is located in the TPL subdirectory. If the language needed
	is not on the Client compact that came with the Microsoft Exchange Server, it
	will be located on the Client compact disk that has the appropriate language of
	the client.
	
	Steps to Import the Template.csv
	--------------------------------
	
	To import the localized templates, from the Microsoft Exchange Administrator
	program select the Directory Import command from the Tools menu. This should
	bring up the Directory Import dialog. Select the Template.csv file described
	above as the Import File and click OK.
	
	This should import all the required templates. After the import has completed,
	from the Administrator program the localized templates should be visible under
	Addressing, Details Templates and Addressing, One-Off Address Templates.
	
	The localized clients should now be able to bring up details on mailboxes, custom
	recipients, or distribution lists.
	
	Users of non-English clients should now be able to bring up details on mailboxes,
	custom recipients, or distribution lists.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
