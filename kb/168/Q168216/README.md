---
layout: page
title: "Q168216: XADM: DSAMAIN.EXE Maxes CPU When Connecting with a Browser"
permalink: /kb/168/Q168216/
---

## Q168216: XADM: DSAMAIN.EXE Maxes CPU When Connecting with a Browser

{% raw %}

	Article: Q168216
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect with Internet Explorer (IE) version 3.01 to Microsoft Exchange
	Server, CPU usage jumps up to 100 percent and the browser cannot connect.
	Dsamain.exe accounts for between 70 and 80 percent of the CPU use. The browser
	is on the same computer as Microsoft Exchange Server and the Internet
	Information Server (IIS).
	
	Closing the browser does not help. You have to shut down and restart the
	Directory service to continue working.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbExchangeSearch kbExchange500 kbiis300 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
