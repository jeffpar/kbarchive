---
layout: page
title: "Q196227: SMS: Scandisk Delayed During Windows 9x Client Installation"
permalink: kb/196/Q196227/
---

## Q196227: SMS: Scandisk Delayed During Windows 9x Client Installation

	Article: Q196227
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server 2.0, Windows 95 or Windows 98 client computers
	running Smsls.bat for the first time receive the following message if they are
	also running Scandisk at logon (either through startup or as a scheduled task):
	
	  
	
	  ScanDisk has restarted 10 times because Windows or another program has
	  been writing to this drive. Quitting some running programs may enable
	  ScanDisk to finish sooner. Do you want to continue receiving this
	  warning?
	
	CAUSE
	=====
	
	Scandisk is attempting to inspect the hard drive before the Systems Management
	Server client installation running in the background finishes.
	
	This is a particular problem for older computers where it may take several
	minutes for Systems Management Server client installation to complete. After the
	Systems Management Server client installation finishes, Scandisk will complete.
	
	Additional query words: prodsms machine machines win win9 win9x win95 win98
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
