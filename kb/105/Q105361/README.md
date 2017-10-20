---
layout: page
title: "Q105361: SMTP: Locations of Domain Name Service (DNS) Files"
permalink: /kb/105/Q105361/
---

## Q105361: SMTP: Locations of Domain Name Service (DNS) Files

{% raw %}

	Article: Q105361
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	The Microsoft Mail Gateway to SMTP uses another host in the TCP/IP
	network to route mail for it. This host can use domain name service (DNS)
	or host tables to hold routing information. DNS is more complicated than
	host tables, but it provides more functionality.
	
	The most common DNS is the Berkeley Internet Name Domain (BIND) server.
	The default locations for DNS files are:
	
	
	  /etc/named.boot     (this file tells where other files are)
	  /var/named/         (this subdirectory holds other DNS files)
	
	Additional query words: 2.10 2.1 3.00 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
