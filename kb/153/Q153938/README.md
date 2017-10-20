---
layout: page
title: "Q153938: WINS Server's Version IDs Might not Update"
permalink: /kb/153/Q153938/
---

## Q153938: WINS Server's Version IDs Might not Update

{% raw %}

	Article: Q153938
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Version ID's for Workstation and Messenger service entries in WINS might not get
	updated.
	
	CAUSE
	=====
	
	When a WINS Server is started, it is possible that the Workstation and Messenger
	services will start before the WINS Server Service starts. Therefore, the
	initial registration will not occur and the Version ID for these entries will
	not be updated. Refreshes will continue, which will be evident by a change in
	the expiration date.
	
	Under normal conditions, an entry will not disappear from the database and when
	the Verify Interval occurs, the entry will be verified and then properly
	updated. In a Replication scenario, if the WINS Servers entries are lost from
	the partners database, these entries will not replicate.
	
	RESOLUTION
	==========
	
	Manually stop and restart the Workstation and Messenger Service on the WINS
	Server to have the names re-register. They should then have updated Version ID's
	and replicate during the defined time interval.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: 3.5 3.51 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
