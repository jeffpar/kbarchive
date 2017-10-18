---
layout: page
title: "Q190996: XADM: Operation Terminated With Error -1911 Using ESEUTIL /d"
permalink: kb/190/Q190996/
---

## Q190996: XADM: Operation Terminated With Error -1911 Using ESEUTIL /d

	Article: Q190996
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It may be necessary to defragment an Exchange Server 5.5 database on a Windows
	NT Server that does not have Exchange Server installed.
	
	When you attempt to defragment an Exchange Server database using ESEUTIL /d you
	may receive the following error:
	
	  Operation terminated with error -1911 (JET_errEntryPointNotFound, An
	  entry point in a DLL we require could not be found) after 0.0 seconds.
	
	CAUSE
	=====
	
	This occurs because you must have at least Windows NT 4.0 Service Pack 2
	installed on the non-Exchange Server computer to be able to use ESEUTIL /d.
	
	RESOLUTION
	==========
	
	It is recommended that Windows NT 4.0 Service Pack 3 or later be installed on
	the non-Exchange Server computer when using ESEUTIL with the defragmentation
	option.
	
	Service Packs for Windows NT can be found on the Microsoft FTP server at:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
