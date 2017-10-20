---
layout: page
title: "Q186184: XADM: Cannot Perform Online Backup After Repairing Database"
permalink: /kb/186/Q186184/
---

## Q186184: XADM: Cannot Perform Online Backup After Repairing Database

{% raw %}

	Article: Q186184
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you use the Eseutil.exe program with the /P switch to repair a Microsoft
	Exchange Server database, you may be unable to perform an online backup of the
	database until you defragment it.
	
	CAUSE
	=====
	
	When you use the Eseutil.exe program to repair an Exchange Server database, a
	-1018 error (JET_errReadVerifyFailure) may be returned when a checksum test is
	performed on a page in the database. When this occurs, Eseutil.exe corrects the
	problem by preventing the page from being used, but it does not reset or delete
	the page. Because the online backup program reads every page in the database,
	the invalid page is still read when an online backup is performed.
	
	WORKAROUND
	==========
	
	To work around this problem, use Eseutil.exe with the /D switch to defragment
	the database. This removes the invalid pages from the database, allowing an
	online backup of the database to be performed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When you use Eseutil.exe to defragment a database, all the data in the database
	is copied to a new file. During this process, Eseutil.exe does not read pages
	that are not being used. Therefore, all unused pages are removed from the
	database, including any invalid pages that Eseutil.exe previously encountered
	while it was repairing the database.
	
	The online backup program is the only program that reads unused pages. The pages
	are not read when the database is online or when an offline repair or
	defragmentation is performed. In addition, because the pages are unused, no data
	is affected by the fact that the pages are invalid.
	
	When you use the Eseutil.exe program to repair an Exchange Server database after
	you apply the fix, Eseutil.exe resets any invalid pages that it finds. This
	allows an online backup to be performed before the database is defragmented.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
