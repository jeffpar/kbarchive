---
layout: page
title: "Q247559: Information About Primary and Secondary WINS Server Switch"
permalink: /kb/247/Q247559/
---

## Q247559: Information About Primary and Secondary WINS Server Switch

	Article: Q247559
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the algorithm used by Windows Internet Naming Service
	(WINS) clients to switch back to the primary WINS server after registering with
	a secondary WINS server.
	
	MORE INFORMATION
	================
	
	If the primary WINS server is not available during a WINS client name
	registration request, the WINS client may register with the secondary WINS
	server. When this occurs, the output of the "ipconfig /all" (without the
	quotation marks) command on the WINS client lists the original primary WINS
	server as the secondary WINS server, and the original secondary WINS server as
	the primary WINS server. Also, further name queries are sent to the secondary
	WINS server.
	
	The WINS client continues trying to contact its original primary WINS server for
	another 60 minutes, at 10 minute intervals. Then, the WINS client stops trying
	to register with the primary WINS server until the name registration reaches one
	half of the Time to Live (TTL) value. Note that if the secondary WINS server
	stops responding to name queries, the WINS client immediately tries to switch
	back to the primary WINS server. If you then run the "nbtstat -RR" (without the
	quotation marks) command on the WINS client, a name release is sent to both WINS
	servers, and the TTL value is set to zero.
	
	At this point, the WINS client follows the same registration procedure used when
	a computer is started. It attempts to contact its original primary WINS server,
	and follows the process described earlier in this article.
	
	Additional query words: switchback
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5
	Issue type        : kbinfo
	
	=============================================================================
	
