---
layout: page
title: "Q231299: XADM: Information Store Returns Service-Specific Error 335544375"
permalink: /kb/231/Q231299/
---

## Q231299: XADM: Information Store Returns Service-Specific Error 335544375

{% raw %}

	Article: Q231299
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restore from an online backup, the information store service fails to
	start with service-specific error 3355443752. The application log contains the
	following events:
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Unable to initialize the Microsoft Exchange Information Store service. Error
	  0xc8000228.
	
	  Event ID: 1080
	  Source: MSExchangeIS
	  Type: Error
	  Category: Recovery
	  Unable to recover the database because error 0xc8000228 occurred after a
	  restore operation. The patch file is not generated from this backup.
	
	  Event ID: 0
	  Source: ESE97
	  Type: Error
	  Category: Logging/Recovery
	  MSExchangeIS ((416) ) -552
	
	The number within parenthesis on the last event may be different, but the -552 is
	present.
	
	CAUSE
	=====
	
	This problem is a result of running isinteg -patch or eseutil /r /is immediately
	after you restore from an online backup and before you start the information
	store service.
	
	Only run isinteg -patch after you restore from an offline backup. If you run
	isinteg -patch against an online restore, the databases are inconsistent (as
	they always are after an online restore). At that point Isinteg runs a soft
	recovery, which is the same as Eseutil /r /is.
	
	An online restore restores patch files for both the private and public
	information stores. Those patch files, Priv.pat and Pub.pat, contain
	transactions that are not replayed during a soft recovery. Because of this, the
	soft recovery results in a database that no longer matches the patch files and
	may also produce a database that is damaged because of the missing transactions.
	When the information store service starts, recovery fails with a -552
	Jet_errDatabasePatchFileMismatch.
	
	RESOLUTION
	==========
	
	Before you start the service, run another restore of the online backup without
	running isinteg -patch.
	
	MORE INFORMATION
	================
	
	Note that Isinteg -patch only runs if an Edb.log is present in the Information
	Store Log folder. An online restore does not restore an Edb.log. Therefore, the
	situation described here only occurs after you do a "no-loss restore" (which
	retains all existing log files in the information store folders), and when you
	follow that restore immediately with Isinteg -patch. This is not the only
	situation that may generate a -552 error, and in other circumstances, the cause
	and resolution may be different.
	
	
	Additional query words: 0xc8000228
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
