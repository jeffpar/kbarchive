---
layout: page
title: "Q175115: XADM: Err Msg: There is Something Wrong with the INI File"
permalink: /kb/175/Q175115/
---

## Q175115: XADM: Err Msg: There is Something Wrong with the INI File

{% raw %}

	Article: Q175115
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you run the Microsoft Exchange Server Setup program in batch mode using:
	
	  Setup /q [batchfile]
	
	the following error may be displayed:
	
	  There is something wrong with the INI file. Make sure the command line
	  specifies a full path to a valid INI file.
	
	This error occurs when the batch file contains PerServer licensing information.
	Licensing mode was changed to only allow PerSeat mode for Exchange Server. To
	correct this problem, edit the batch file and change the licensing mode to be
	PerSeat and remove the PerServer information.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
