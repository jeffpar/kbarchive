---
layout: page
title: "Q123219: ARP command Does Not Work with RAS Installed"
permalink: /kb/123/Q123219/
---

## Q123219: ARP command Does Not Work with RAS Installed

{% raw %}

	Article: Q123219
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The commands "ARP -s" and "ARP -d" do not work on a Windows NT Server version
	3.5 if the Remote Access Service (RAS) is installed.
	
	WORKAROUND
	==========
	
	To work around this problem, you must remove RAS from the Networks option in the
	Control Panel and restart Windows NT Server. Just stopping RAS results in the
	same problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
