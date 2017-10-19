---
layout: page
title: "Q134230: Configuring NetBIOS Name Resolution With TN3270 Admin"
permalink: /kb/134/Q134230/
---

## Q134230: Configuring NetBIOS Name Resolution With TN3270 Admin

	Article: Q134230
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server's TN3270 Service includes an option to use name resolution. This
	allows the administrator to see the resolved NetBIOS name rather than the IP
	address of the connected station. TN3270 uses regular NetBIOS name resolution
	conventions when resolving NetBIOS names. Windows Internet Name Service (WINS)
	and DNS can be used to resolve NetBIOS names, however there are times when it
	might become necessary to add a static entry into the hosts file, DNS server, or
	the WINS server. For example, when a client that does not register itself with a
	WINS server, and does not have a static entry in a DNS server.
	
	The following is an example of a hosts file on the SNA server for a Macintosh
	client that is using native TCP/IP rather than Apple Talk. Without the MAC
	entry, TN3270 Server is unable to resolve the NetBIOS name.
	
	  127.0.0.1      localhost
	  143.75.20.9   MAC               # entry for Macintosh client
	
	Any new clients connecting to the server will show the resolved name rather than
	an IP address.
	
	To configure this option do the following:
	
	SNA Server 2.x
	--------------
	
	- Run TN3270 Server Admin.
	
	- select Options and then select the check box next to Use Name Resolution.
	
	SNA Server 3.0 and 4.0
	----------------------
	
	- Select the properties page for the TN3270 Server you wish to modify.
	
	- In the General tab, check Use Name Resolution.
	
	You must stop and start the TN3270 service for these changes to take effect.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1,4.0 SP2
	
	=============================================================================
	
