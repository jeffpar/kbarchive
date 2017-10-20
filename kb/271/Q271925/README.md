---
layout: page
title: "Q271925: Err Msg: Domain Controller for this Domain Could Not Be Found"
permalink: /kb/271/Q271925/
---

## Q271925: Err Msg: Domain Controller for this Domain Could Not Be Found

{% raw %}

	Article: Q271925
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbfile
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to add a Windows NT 4.0 Workstation-based computer to a domain, you
	may not be able to add the computer and you may receive the following error
	message:
	
	  Domain controller for this domain could not be found
	
	Event Viewer may record event ID 5719 in the System event log:
	
	  No Windows NT Domain Controller is available for domain (domain_name).
	  The following error occurred: There are currently no logon servers available
	  to service the logon request.
	
	CAUSE
	=====
	
	This behavior can occur if a Lmhosts file is in use, and the Lmhosts file
	contains an incorrect entry that is preloaded into the network basic
	input/output system (NetBIOS) name cache by using the #PRE extension.
	
	RESOLUTION
	==========
	
	If you do not need to use the Lmhosts file, disable the file:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click Protocols, click TCP/IP Protocol, and then click Properties.
	
	3. Click WINS Address.
	
	4. Click to clear the Enable LMHOSTS Lookup check box.
	
	5. Click OK, and then click Close.
	
	6. Restart your computer when you are prompted to do so.
	
	If your network configuration requires that you use a Lmhosts file for NetBIOS
	name resolution, verify that all static mappings in the Lmhosts file are
	correct.
	
	NOTE: The Lmhosts.sam file is located in the %SystemRoot%\System32\Drivers\Etc
	folder.
	
	MORE INFORMATION
	================
	
	For additional information about how to use a Lmhosts file, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q180094 How to Write an LMHOSTS File for Domain Validation and Other Name
	  Resolution Issues
	
	  Q163409 NetBIOS Suffixes (16th Character of the NetBIOS Name)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbfile 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
