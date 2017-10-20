---
layout: page
title: "Q148284: XCON: When and How to Use the Mtacheck Utility"
permalink: /kb/148/Q148284/
---

## Q148284: XCON: When and How to Use the Mtacheck Utility

{% raw %}

	Article: Q148284
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 27-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Message Transfer Agent check utility (Mtacheck) is designed to provide a
	soft recovery of a corrupted MTA database. It is automatically installed when
	Microsoft Exchange Server is installed and can be found in the
	%Exchange_Root%\Bin directory. This utility should be used when the MTA service
	will not start due to corruption or suspected corruption in the MTA database.
	
	MORE INFORMATION
	================
	
	Mtacheck must be run from a DOS VDM on the Microsoft Exchange Server. It is very
	simple to use and only has 2 parameter, /v and /f. The parameters and the
	results of their use are as follows:
	
	Mtacheck.                  minimum logging.
	Mtacheck /v                verbose logging.
	Mtacheck /f <filename>     minimum logging that is saved to a text file.
	Mtacheck /v /f <filename>  verbose logging that is saved to a text file.
	
	For more information about the Mtacheck utility, please see pages 614-617 of the
	Microsoft Exchange Administrator's Guide and the following article in the
	Microsoft Knowledge Base:
	
	  Q149017 XCON: MTACheck Event IDs and Command Line Syntax
	
	In Microsoft Exchange version 4.0 Service Pack 4 and Microsoft Exchange version
	5.0, two switches were added to Mtacheck.
	
	Mtacheck /rd            removes directory replication messages.
	Mtacheck /rp            removes public folder replication messages.
	
	
	In Microsoft Exchange version 5.0, another switch was added:
	
	Mtacheck /RL            removes unwanted Link Monitor messages
	
	Additional query words: 4.00 corrupt mtadata db dat
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
