---
layout: page
title: "Q190506: WINS Replication Problem Events 4262, 4261, and 1c Replication"
permalink: /kb/190/Q190506/
---

## Q190506: WINS Replication Problem Events 4262, 4261, and 1c Replication

{% raw %}

	Article: Q190506
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symptoms may occur:
	
	- Replication or scavenging may stop if Windows Internet Name Service (WINS)
	  encounters either of the following events. Your WINS server may log one of
	  the following events in the system event log in Event Viewer:
	
	  Event ID : 4262
	  Source : WINS
	  Type : Error
	  Description: WINS got an error while trying to register a unique replica with
	  name <computername>. The replica is owned by WINS with address given
	  below.
	
	  Event ID : 4261
	  Source : WINS
	  Type : Error
	  Description: WINS got an exception while trying to register a group's replica
	  with name <groupname>. The replica is owned by WINS with address given
	  below.
	
	- 1C records may show an expiration date of forever "-.-" after replication
	  occurs to a replication partner. This may cause an "access violation" error
	  message when you use Winscl.exe to view records in a WINS database.
	
	CAUSE
	=====
	
	This problem may be caused by the following:
	
	- WINS stops replication or scavenging encountered a record that was in an
	  unexpected state, for example the replica of a special group that has all
	  members timed out but the state is not tombstone or a replica that is in the
	  released state.
	
	- WINS is modifying the record time-to-live (TTL) value during replication. The
	  TTL of the name is set to 0xFFFFFFF resulting in the infinite expiration
	  date.
	
	RESOLUTION
	==========
	
	A fix is now available that does the following:
	
	- WINS is modified so that, during replication/scavenging, if WINS encounters
	  an exception while trying to register a group or unique replica, the record
	  is overwritten, ownership is determined by the most recent registration, and
	  replication/scavenging continues.
	
	- WINS is modified such that, when group members are unioned, Windows NT
	  changes the ownership only if a bigger list is created. The time stamp for
	  the record is also modified to verify the interval instead of 0xFFFFFFFF,
	  which resulted in the expiration date.
	
	- There has also been a change to how 1C records are treated with migrate on
	  enabled. In the past, after a 1C record was initialized as static, the only
	  way to get the record back to dynamic was to delete the record on all servers
	  and restart the servers. Now the record is changed to dynamic if the owning
	  wins server changes the record to dynamic.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	click the following article number to view the article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	MORE INFORMATION
	================
	
	The following WINS events 4262 and 4261 have changed from Event Type Error to
	Event Type Informational.
	
	These binaries also fix a problem where, after replication occurs, the 1C list
	renewal interval is changed to forever "-.-" and may cause access violations
	when using Winscl.exe.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: rollup roll-up hotfix
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
