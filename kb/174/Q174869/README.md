---
layout: page
title: "Q174869: WINS Client Sends Refresh Requests to Secondary WINS Server"
permalink: /kb/174/Q174869/
---

## Q174869: WINS Client Sends Refresh Requests to Secondary WINS Server

	Article: Q174869
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may notice that your Windows Internet Name Service (WINS) clients send name
	refresh requests to the secondary WINS Server even though primary WINS server is
	active. This may even cause a switch of primary and secondary WINS server
	addresses on the client as seen when you carry out an ipconfig /all command.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q164309
	TITLE : Windows NT Client: Primary/Secondary WINS Servers Switch
	
	ARTICLE-ID: Q173525
	TITLE : WINS Client May Switch Primary and Secondary WINS Servers
	
	
	CAUSE
	=====
	
	The above symptom may occur when the WINS client is also a Dynamic Host
	Configuration Protocol (DHCP) client and the following two operations are
	Carried out simultaneously:
	
	- The WINS/DHCP client refreshes its NetBIOS name with its primary WINS server.
	
	- The WINS/DHCP client renews its IP lease information and the new information
	  reverses the primary and secondary WINS server addresses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	When this switching of the primary and secondary WINS server addresses occurs,
	the client will still send name query requests to the correct primary WINS
	server. This switch only affects name refresh requests.
	
	Additional query words: change flip-flop alternate reverse
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
