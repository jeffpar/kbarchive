---
layout: page
title: "Q148714: Dr. Watson Error Installing Internet Information Server"
permalink: /kb/148/Q148714/
---

## Q148714: Dr. Watson Error Installing Internet Information Server

{% raw %}

	Article: Q148714
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install the Internet Information Server on a Windows NT Server that has
	the Banyan Vines Client for NT installed, a Dr. Watson Exception error message
	appears.
	
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove the Banyon Vines client software. Use the command "setup/uninstall"
	  (without quotes) from the Banyan Vines Client for NT distribution media.
	
	2. Restart Windows NT Server.
	
	3. Install the TCP/IP protocol in Control Panel Network.
	
	4. Restart Windows NT Server.
	
	5. Make sure that the TCP/IP protocol is working properly. Use the TCP/IP
	  connectivity utilties, such as Ping, FTP and Telnet.
	
	6. If the TCP/IP protocol is working properly, install the Internet Information
	  Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 1.00 3.51 winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : :1.0,3.51
	
	=============================================================================
	

{% endraw %}
