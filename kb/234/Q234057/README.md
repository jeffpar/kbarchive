---
layout: page
title: "Q234057: XFOR: Command-Line Migration to Exchange Server Causes Error"
permalink: /kb/234/Q234057/
---

## Q234057: XFOR: Command-Line Migration to Exchange Server Causes Error

{% raw %}

	Article: Q234057
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Migration wizard (Mailmig.exe) for a batch-mode migration, the
	following error message may be displayed:
	
	  Required keyword 'mode', is missing in the control file.
	
	This message indicates that a required option is not supplied in the control
	file. This article cites different sources for information on using the
	Migration wizard.
	
	MORE INFORMATION
	================
	
	When you configure a custom source extractor to migrate from a foreign
	electronic mail system to Exchange Server, or when you create a command-line
	migration using the Migration wizard, refer to the online documents on the
	Microsoft Exchange Server 5.5 Enterprise Version CD-ROM. Insert the CD-ROM, and
	click Documentation, click Exchange Server, and then click Migration.
	
	The "Creating a Source Extractor" section is a guide to the options you need to
	design a custom source extractor. In this section, refer to the "Configuring
	Command-Line Options" topic:
	
	  Configuring Command-Line Options-
	
	  For automation, compatibility, and ease of use, configure the source extractor
	  to support the following command-line options:
	
	  Batch control file
	  Accounts file
	  Administrator account and password
	
	The appendix titled "Command-Line Options for the Migration Wizard" follows the
	"Creating a Source Extractor" section. It contains the options you need to
	include in the control file that is used when you run the Migration wizard
	command-line in batch mode; refer to this appendix when you migrate using the
	Migration wizard.
	
	For more information, please refer to the Help documentation on the Microsoft
	Exchange Server 5.5 Enterprise Version CD-ROM.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
