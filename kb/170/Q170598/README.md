---
layout: page
title: "Q170598: Start Menu Items Missing on ZAK Appstation Client"
permalink: /kb/170/Q170598/
---

## Q170598: Start Menu Items Missing on ZAK Appstation Client

{% raw %}

	Article: Q170598
	Product(s): Microsoft Windows NT
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Start menu on a Zero Administration Kit (ZAK) Appstation
	client, some Start menu items may be missing.
	
	CAUSE
	=====
	
	ZAK Appstation clients obtain Start menu information from the ZAK server. The
	behavior described above occurs when any of the following conditions exists:
	
	- The ZAK Appstation client is unable to connect to the ZAK server.
	
	- The Start menu information on the ZAK server is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Log on to the ZAK Appstation client as the local administrator.
	
	2. Attempt to locate the ZAK server on the network by typing the following
	  command at a command prompt:
	
	  net view \\<ZAK server name>
	
	3. If the NET VIEW command is not successful, take steps to resolve any basic
	  network connectivity problems.
	
	4. When you have established communication between the ZAK server and the ZAK
	  Appstation client over the network, check to see if the original Start menu
	  problem is resolved.
	
	5. If some items are still missing from the Start menu, verify that the Start
	  menu information on the ZAK server has not been changed or damaged. The Start
	  menu information is stored on the ZAK server in the following folder:
	
	     <drive>:\netapps\start menu
	
	  This folder contains the .lnk files for the Start menu on ZAK Appstation
	  clients.
	
	MORE INFORMATION
	================
	
	By design, the following items are not displayed on the Start menu on a ZAK
	Appstation client:
	
	- Find
	
	- Run
	
	- Settings
	
	- Shut Down
	
	If network connectivity is lost, the Programs menu on the Start menu is empty. In
	addition, the New Office Document and Open Office Document commands are not
	available.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
