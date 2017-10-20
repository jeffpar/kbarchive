---
layout: page
title: "Q195818: Windows NT 4.0 SP4 Breaks SNA Encrypted Client Connectivity"
permalink: /kb/195/Q195818/
---

## Q195818: Windows NT 4.0 SP4 Breaks SNA Encrypted Client Connectivity

{% raw %}

	Article: Q195818
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade SNA Server (version 3.0 or 4.0) to Windows NT 4.0 Service Pack
	4, any SNA user configured to use data encryption will be unable to establish a
	session through the server when connecting from the following client platforms:
	
	- Windows NT 4.0 Service Pack 3 or earlier (running the SNA 3.0 or 4.0 Windows
	  NT, SNA Windows 9x or SNA Windows 3.x client software)
	
	- Windows 98 or Windows 95 (running the SNA 3.0 or 4.0 Windows 9x client
	  software)
	
	- Windows 3.x (running the SNA 3.0 or 4.0 Windows 3.x client software).
	
	SNA Windows NT clients that are upgraded to Windows NT 4.0 Service Pack 4 will be
	able to connect to an SNA Server which has also been upgraded to Windows NT 4.0
	Service Pack 4.
	
	Likewise, if an SNA Windows NT client computer is upgraded to Windows NT 4.0
	Service Pack 4, the SNA client user (when configured to use data encryption)
	will be unable to establish a session through SNA Server if the server is
	running Windows NT 4.0 Service Pack 3 or earlier.
	
	The following symptoms will occur when clients experience this problem:
	
	- The SNA Windows NT or Windows 3.x 3270 applet displays the following error on
	  startup, and fails to display a 3270 session list within the Session
	  Configuration dialog box. ERROR - Reading SNA Server Configuration
	
	- The SNA Windows NT or Windows 3.x 5250 applet displays the following error
	  when attempting to open a session, and will fail to retrieve Remote APPC LU
	  aliases within the Session Configuration dialog box: WIN5250 SNA Server has
	  been deactivated. Contact System Administrator [F003][010000F0] -or- The
	  Remote LU name specified for this session is invalid [0001] [0000001B]
	
	- The SNA Windows NT client logs Event 705 to the Windows NT Application Event
	  log: Event ID: 705 Source: SNA 3270 Emulator (or) SNA APPC Application
	  Description: Logon Failed. EXPLANATION Connection request failed due to data
	  security Access denied -- required data encryption -- Error Code: 43
	
	- The SNA Windows 95 3270 applet displays the LU name in the session
	  configuration dialog box, but stops responding (hangs) with a blank screen
	  when attempting to connect to the session.
	
	- When the SNA Windows 95 client fails to connect, the SNA Server logs Event
	  717 to the Windows NT Application Event log: Event ID: 717 Source: SNA Base
	  Service Description: Client-Server Connection Disconnected. EXPLANATION
	  Security Error - unable to decode security messages. Error Code = 0x8009030f
	
	CAUSE
	=====
	
	The Microsoft Windows NT 4.0 Service Pack 4 (SP4) NTLM security package modifies
	the implementation of the encryption context options for applications which use
	the InitializeSecurityContext() API. This causes SNA Server (and SNA Windows NT
	and Windows 9x clients) to build encrypted messages differently when running on
	Windows NT 4.0 SP4 than for prior Windows NT versions. This causes
	interoperability problems between SNA clients and servers that are running on
	different versions of Windows NT when encryption is enabled for an SNA user.
	
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable the use of SNA Server client-server
	encryption until SNA Server, SNA client, and/or Windows NT software can be
	upgraded within the network.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article when running on a mixture of Windows NT 4.0 SP4 and
	prior Windows NT versions. This problem was first corrected in SNA Server 3.0
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	The following implementation decisions must be made to fully resolve this issue
	and support client encryption with mixed SNA Server, SNA client, and Windows NT
	versions:
	
	- If SNA Servers are to be upgraded to Windows NT 4.0 SP4, before any SNA
	  clients are upgraded to Windows NT 4.0 SP4, the SNA Server update should be
	  applied to the servers first, to preserve connectivity for back-level clients
	  (including SNA Windows 9x and Windows 3.x clients which are not running on
	  Windows NT).
	
	- If SNA Windows NT (or SNA Windows 9x) clients are to be upgraded to Windows
	  NT 4.0 SP4, before the SNA Servers are upgraded to Windows NT 4.0 SP4, the
	  SNA client update should be applied to the clients, to preserve connectivity
	  to back-level servers.
	
	- Applying the SNA update simultaneously to all SNA Servers and SNA clients
	  preserves interoperability regardless of Windows NT versions being used.
	
	The following tables summarize interoperability between various combinations of
	SNA Server, SNA client, and Windows NT software.
	
	Old SNA CLIENT or Old SNA Server software = SNA 3.0 (including Service Packs
	1-3), SNA 4.0 (including Service Pack 1)
	
	New SNA Client or New SNA Server = SNA 3.0 (post-Service Pack 3), SNA 4.0
	(post-Service Pack 1)
	
	---------------------------------------------------------
	
	Old SNA        ********** Old SNA Server *******
	Client         on NT4SP3 or earlier   on NT4SP4
	--------       --------------------   ---------
	
	NT4SP3,
	SNA NT or             WORKS             FAILS
	SNA Win9x
	
	NT4SP4,
	SNA NT or             FAILS             WORKS
	SNA Win9x
	
	Win9x,
	SNA Win9x             WORKS             FAILS
	
	Any Platform,
	SNA Win3x             WORKS             FAILS
	
	---------------------------------------------------------
	
	Old SNA        ********** New SNA Server *******
	Client         on NT4SP3 or earlier   on NT4SP4
	--------       --------------------   ---------
	
	NT4SP3,
	SNA NT or             WORKS             WORKS
	SNA Win9x
	
	NT4SP4,
	SNA NT or             FAILS             FAILS
	SNA Win9x
	
	Win9x,
	SNA Win9x             WORKS             WORKS
	
	Any Platform,
	SNA Win3x             WORKS             WORKS
	
	
	New SNA        ********** Old SNA Server *******
	Client         on NT4SP3 or earlier   on NT4SP4
	--------       --------------------   ---------
	
	NT4SP3,
	SNA NT or             WORKS             FAILS
	SNA Win9x
	
	NT4SP4,
	SNA NT or             WORKS             FAILS
	SNA Win9x
	
	Win9x,
	SNA Win9x             WORKS             FAILS
	
	Any Platform,
	SNA Win3x             WORKS             FAILS
	
	---------------------------------------------------------
	
	New SNA        ********** New SNA Server *******
	Client         on NT4SP3 or earlier   on NT4SP4
	--------       --------------------   ---------
	
	NT4SP3,
	SNA NT or             WORKS             WORKS
	SNA Win9x
	
	NT4SP4,
	SNA NT or             WORKS             WORKS
	SNA Win9x
	
	Win9x,
	SNA Win9x             WORKS             WORKS
	
	Any Platform,
	SNA Win3x             WORKS             WORKS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
