---
layout: page
title: "Q183266: XADM: HowTo Restore Offline Backup of Dir Svc and Info Store"
permalink: /kb/183/Q183266/
---

## Q183266: XADM: HowTo Restore Offline Backup of Dir Svc and Info Store

	Article: Q183266
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps to be followed when restoring an offline backup
	of the directory service and the information store.
	
	MORE INFORMATION
	================
	
	An Offline backup of the directory service and information store is made by
	stopping the Exchange Services and copying the contents of the Exchsrvr\Dsadata
	and Exchsrvr\Mdbdata directories respectively, from each drive on the computer
	running Microsoft Exchange Server.
	
	If you have an offline backup of the Microsoft Exchange directory service and
	information store, follow the steps below to restore this backup:
	
	1. Stop all the Microsoft Exchange services.
	
	2. Determine the location of the database and logs for the directory service and
	  information store service, from the following registry locations:
	
	  Directory Service log path
	  --------------------------
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeDS
	     \Parameters\Database log files path
	   
	
	  Directory Service database path
	  -------------------------------
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeDS
	     \Parameters\DSA Database file
	   
	
	  Information Store Service log path
	  ----------------------------------
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS
	     \ParametersSystem\DB Log Path
	   
	
	  Private Information Store database path
	  ---------------------------------------
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS
	     \ParametersPrivate\DB Path
	   
	
	  Public Information Store database path
	  --------------------------------------
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS
	     \ParametersPublic\DB Path
	   
	
	3. Copy the Dir.edb file (in the Dsadata directory) to the directory service
	  database path.
	
	4. Copy any directory service log files to the directory service log path.
	
	5. Copy the Priv.edb file to the private information store database path.
	
	6. Copy the Pub.edb file to the public information store database path.
	
	7. Copy any information store log files to the information store service log
	  path.
	
	8. Start the Microsoft Exchange directory service.
	
	9. From the command prompt, change to the Exchsrvr\Bin directory and execute the
	  following command:
	
	  isinteg -patch
	
	10. Start the information store service.
	
	11. Start the other Exchange Server services.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
