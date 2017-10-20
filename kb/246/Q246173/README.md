---
layout: page
title: "Q246173: FTP Server Does Not Allow FTP Server-to-Server Connection"
permalink: /kb/246/Q246173/
---

## Q246173: FTP Server Does Not Allow FTP Server-to-Server Connection

{% raw %}

	Article: Q246173
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RFC 959 allows for the use of the PORT command, a remote connection to another
	TCP\IP over a passive connections, to be established based on the port address
	given by client. This is commonly done with FTP server-to-server transfers. This
	behavior was made optional to provide added security to the FTP service.
	
	The FTP service compares the IP address that makes the connection and the address
	issuing the PASV command. If they are different, the FTP service does not allow
	the connection. When you attempt to do this on the Microsoft FTP Server, this
	operation fails, regardless of the settings. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q147621 IIS FTP Service Registry Parameters
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0. This problem was first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.Microsoft is researching this problem and will post more information here in
	the Microsoft Knowledge Base when it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix 
	Technology        : kbiisSearch kbExchange400 kbGraph500
	Version           : :4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
