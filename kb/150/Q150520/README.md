---
layout: page
title: "Q150520: WINS Server Sporadically Loses Name Resolution"
permalink: /kb/150/Q150520/
---

## Q150520: WINS Server Sporadically Loses Name Resolution

{% raw %}

	Article: Q150520
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.50, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT Windows Internet Name Service (WINS) server may sporadically lose
	its ability to resolve NetBIOS names by means of WINS. This problem may also
	manifest itself as domain synchronization, browsing, or connectivity problems.
	
	CAUSE
	=====
	
	This problem can occur when a WINS server is configured to point to itself as
	the primary WINS server and the secondary WINS server is left blank. IPCONFIG
	/all may show the secondary WINS server to be its own IP address but no primary
	WINS server is listed. When this condition occurs, all WINS name resolution for
	this server is lost. This can effect browsing, domain synchronization and
	connectivity. However, clients pointing to this machine as a WINS server are
	unaffected. This condition may happen occasionally or not at all.
	
	It is highly recommended that a WINS server point to itself as Primary and
	Secondary WINS in the TCP/IP configuration. If another configuration is used,
	you may experience random instability in making certain network connections.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	Q150737Setting Primary and Secondary WINS Server Options
	
	WORKAROUND
	==========
	
	On each WINS server, double-click the Network icon in Control Panel, and select
	TCP/IP Protocol, then Configure. Set the addresses of the primary and secondary
	WINS servers to be the same as the IP address of the computer itself (this will
	be listed above as "IP Address"). Having WINS servers pointing to other WINS
	servers as primary or secondary is discouraged.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: RPC Event 5719 error 53 can't browse ntfaqdom
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
