---
layout: page
title: "Q162778: WINS May Report Database Corruption w/ More Than 100 Owners"
permalink: /kb/162/Q162778/
---

## Q162778: WINS May Report Database Corruption w/ More Than 100 Owners

{% raw %}

	Article: Q162778
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have configured a Windows NT 4.0 WINS server to pull records from more than
	100 replication partners, or to participate in replication involving more than
	100 owners.
	
	On stopping and attempting to restart the WINS service, you observe the error
	message:
	
	  WINS could not come up due to missing/corrupt database. Restore the database
	  using WINS Manager or Winscl.exe (in the res kit) and then restart WINS. If
	  WINS still does not come up, start with a fresh copy of the database.
	
	Restoring the database has no effect on the problem. The WINS service cannot be
	restarted.
	
	CAUSE
	=====
	
	The WINS service encountered an access violation when initializing, or when
	pulling records from a replication partner.
	
	NOTE: The WINS service does not create an event log entry and Dr. Watson does not
	record the access violation.
	
	
	RESOLUTION
	==========
	
	To correctly support configurations involving more than 100 owners or
	replication partners, apply the fix mentioned below.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q139411
	  TITLE : Maximum WINS Owners Under Windows NT 3.5 and 3.51
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: wins.mdb crash heap
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
