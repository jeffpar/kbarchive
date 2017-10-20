---
layout: page
title: "Q242085: Access Violation Error Message in the Inetinfo Process"
permalink: /kb/242/Q242085/
---

## Q242085: Access Violation Error Message in the Inetinfo Process

{% raw %}

	Article: Q242085
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetworkkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a large request to the Ssinc.dll or the Httpodcb.dll files, you
	may receive an "access violation" error message in the Inetinfo process.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	This problem was first corrected in Windows NT 4.0 Service Pack 6.
	
	MORE INFORMATION
	================
	
	This is a known problem with file names that have any of the following file
	extensions:
	
	- .idc
	
	- .stm
	
	- .shtml
	
	The following command is an example of a command that generates an access
	violation error message:
	
	  GET /<MORE THAN 1K of 'a'>.IDC HTTP/1.0\r\n\r\n
	
	Additional query words: av dr. dr watson iis
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
