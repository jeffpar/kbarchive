---
layout: page
title: "Q137901: SNA Server Event 563 and Win 3.x Client Application Problems"
permalink: kb/137/Q137901/
---

## Q137901: SNA Server Event 563 and Win 3.x Client Application Problems

	Article: Q137901
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following symptoms can occur when 15 or more SNA Servers are installed
	within a single Windows NT domain and Windows 3.x clients are being used:
	
	- The 3270 applet may fail to start and report "DL-BASE not initialized."
	
	- If you are using Wall Data Rumba, Rumba 3270 may fail to start and display
	  the Interface Not Found message.
	
	- Clients that open an SNA application session may experience long delays
	  before receiving a host sign-on screen.
	
	- The Windows NT application event log will include:
	
	  Event ID: 564
	  Description: Failed to initialize exit list processing, rc = 563
	
	  Event ID: 563
	  Description: The service table is full: too many network resources active.
	
	NOTE: The SNA client reports Event 563 to the server, so it's the client's
	internal "service table" that is full, not the server's.
	
	CAUSE
	=====
	
	The SNA Server Windows 3.x client software supports sessions through multiple
	SNA Servers. However, if there are more than 14 SNA Servers currently running in
	the SNA Server domain, Win 3.x clients begin experiencing these problem due to
	an internal limit within the SNA Server Windows 3.x client service table. The
	service table is used by the SNA Server client to internally manage the SNA
	client resources being used on the client machine.
	
	The SNA Server Win 3.x client service table contains 32 entries:
	
	- Two "overhead" entries (one for the sponsor connection [sponap] and one entry
	  for WNAP).
	
	- One entry for every SNA Server service currently running in the domain.
	
	- One entry for every SNA Server configuration server (snabase) running in the
	  domain (i.e. primary and backup servers).
	
	- One for each active Windows process which uses the SNA Win 3.x client API
	  interfaces (i.e. the 3270 and 5250 applets each take one entry).
	
	- One for every "otherservers" entry configured on the client machine.
	
	- One for every invokable TP registered on the client machine.
	
	If "otherserver" and APPC TPs are not being used, and you want to run a 3270
	emulation product on the client, the maximum number of SNA Server config servers
	in the domain is (32 - 3 = 29 % 2) = 14. If more than 14 SNA servers are running
	in the domain, the above errors will be logged and the user will not be able to
	run an emulator on the SNA Server Win 3.x client machine.
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	  <snaroot>\WNAP.EXE
	  WINDOWS\SYSTEM\WDMOD.DLL
	
	
	NOTE: These files are applied to the SNA Server Windows 3.x client, not the SNA
	Server.
	
	The update to the SNA Win 3.x client software limits the number of configuration
	servers kept in the service table to 2 entries. This extends the theoretical
	number of SNA Servers supported in a domain to 27. However, Microsoft strongly
	recommends that SNA Server 2.11 be deployed and the subdomain feature
	implemented, allowing SNA Servers to be separated into logical groups within a
	Windows NT domain. Using the subdomain feature, the client users would connect
	only through one group of servers at a time. See the SNA Server 2.11 Readme file
	for more information about the subdomain feature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.00 2.10 2.11 prodsna session drop hang
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
