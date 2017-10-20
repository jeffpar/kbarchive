---
layout: page
title: "Q141245: Logon Delay Using TCP/IP with LMHOSTS or DNS"
permalink: /kb/141/Q141245/
---

## Q141245: Logon Delay Using TCP/IP with LMHOSTS or DNS

{% raw %}

	Article: Q141245
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Windows NT loads and the WINLOGIN dialog box appears if you log on
	immediately, you computer seems to hang for approximately two minutes.
	Afterwards, Program Manager appears but the your home directory connection has
	not been made and no errors have been logged.
	
	This occurs when:
	
	- The network is configured using only TCP/IP
	
	  -and-
	
	- Windows NT 3.51 Workstation users logon locally
	
	  -and-
	
	- Your User Profile connects you to a home directory on another Windows NT
	  computer
	
	  -and-
	
	- The only name resolution is LMHOSTS or Domain Name System (DNS)
	
	WORKAROUND
	==========
	
	This problem does not exist under the following conditions:
	
	- When you logon after all disk activity has stopped
	
	- When you do not connect to a remote machine using the user profile
	
	- When you use NWLINK or NETBEUI to connect to the machine where the home
	  directory is located
	
	- When you use DHCP/WINS for name resolution
	
	- When you logon to a domain
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation versions
	3.51 and 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
