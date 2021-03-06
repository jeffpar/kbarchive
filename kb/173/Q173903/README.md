---
layout: page
title: "Q173903: XFOR: Changing the TCP Port Used for SMTP Mail"
permalink: /kb/173/Q173903/
---

## Q173903: XFOR: Changing the TCP Port Used for SMTP Mail

{% raw %}

	Article: Q173903
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbusage
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article tells you how to configure the Microsoft Exchange Server Internet
	Mail Service (IMS) to use a TCP port other than port 25 to receive SMTP mail.
	This is a function of the TCP/IP protocol and is controlled by the entry in the
	Services file in the Winnt\System32\Drivers\Etc directory. This change is
	required if you are using the new Mail Virus Scan from Symantec; the Symantec
	product requires forwarding to the SMTP gateway by way of a port other than port
	25.
	
	MORE INFORMATION
	================
	
	1. Edit the Services file, Winnt\System32\Drivers\Etc\Services, to specify the
	  port used for SMTP.
	
	  The following example, an excerpt from the Services file, shows removing SMTP
	  from port 25 and enabling SMTP on port 17. Port 17 is normally used for
	  'qotd' (quote of the day) service.
	
	        smtp 17/tcp mail
	        #qotd 17/tcp quote
	        #qotd 17/udp quote
	        chargen 19/tcp ttytst source
	        chargen 19/udp ttytst source
	        ftp-data 20/tcp
	        ftp 21/tcp
	        telnet 23/tcp
	        #smtp 25/tcp mail
	        time 37/tcp timserver
	
	2. Telnet ip_address or server_name 17 to verify that the Internet Mail Service
	  is indeed listening on tcp port 17.
	
	Mail Virus Scan is manufactured by Symantec, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	======================================================================
	Keywords          : kbsetup kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
