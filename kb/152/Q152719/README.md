---
layout: page
title: "Q152719: WAN and Trust: Traffic on the Wire"
permalink: /kb/152/Q152719/
---

## Q152719: WAN and Trust: Traffic on the Wire

{% raw %}

	Article: Q152719
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes a new feature that is included in Windows NT 3.51 Service
	Pack 5. This feature is designed to allow you to reduce network traffic related
	to Windows NT trust relationship polling over a wide area network (WAN) using
	perhaps a leased line (for example, an ISDN or X.25 line) where the leased line
	provider charges by the amount of network traffic. Trust relationship polling
	occurs between domain controllers (DCs) to establish a secure channel.
	
	In Windows NT 3.51 without this new feature, if the secure channel cannot be
	established, it is retried every 15 minutes. With this new feature installed you
	can control the intervals between which a DC sends discovery packets in search
	of a DC of a trusted domain.
	
	Microsoft has made a fix in Netlogon.dll so that you can increase the time
	between retries and you can increase the time in which NETLOGON assumes a DC is
	reachable (ScavengeInterval and ExpectedDialupDelay).
	
	
	For additional information, , please see the following article in the Microsoft
	Knowledge Base:
	
	Q154355How to Tune Trusts for Dialup Routers in a WAN
	
	When Windows NT Uses Polling Between Domain Controllers
	-------------------------------------------------------
	
	In Windows NT 3.51, once a secure channel to a trusted domain has been
	established (that is, after the DC in domain_A found a DC in the trusted
	domain_B), Windows NT does not continue to poll the secure channel to make sure
	the secure channel is still available.
	
	If, however, the DC is contacted for some other reason, for example, if a user
	logs on and a pass-through authentication to the other domain is required, the
	first DC needs to contact the second DC again and network polling of the secure
	channel starts for this reason once again and stops after the the pass-through
	authentication is completed.
	
	Regular network traffic packets are not caused by trust relationship polling of
	the secure channel, so if you frequently observe frames related to trust
	relationship traffic on your WAN router, it is probably caused by an unreliable
	WAN in which case this new feature helps you reduce this type of network
	traffic.
	
	NETLOGON Debug Output Samples
	-----------------------------
	
	The following sections numbered 1, 2, 3, and 4 are about the NETLOGON debug
	output that appears when trusts are involved:
	
	1. The following NETLOGON debug-output is from a primary domain controller (PDC)
	  of the trusting domain that cannot find a DC in the trusted domain (the
	  network cable is disconnected):
	
	
	  00:00:00 NlInitTrustList: MASTERDOM in LSA
	  00:00:00 NlUpdateTrustListBySid: MASTERDOM: Added to local trust list
	  00:00:00 NlDcDiscoveryMachine: MASTERDOM: Start Discovery
	  00:00:05 NlDcDiscoveryMachine: MASTERDOM: Discovery retry 1
	  00:00:10 NlDcDiscoveryMachine: MASTERDOM: Discovery retry 2
	  00:15:00 NlDcDiscoveryMachine: MASTERDOM: Start Discovery
	  00:30:00 NlDcDiscoveryMachine: MASTERDOM: Start Discovery
	
	  The above frames show that the PDC tries to find the DC by calling
	  NlDcDiscoveryMachine three times and waits five seconds between each retry.
	
	
	  After these three retries the Scavenger Timer causes NETLOGON to look for the
	  trusted domain again every 15 minutes. Here are some of the frames that
	  appear (sent by the PDC of the trusting domain):
	
	  *BROADCAST    NBT NS: Query req. for MASTERDOM <1C>: check to find a
	                trusted domain DC
	
	  Because the PDC cannot find a DC by broadcasting the PDC starts using WINS:
	
	  *BROADCAST   ARP_RARP  ARP: Request, Target IP: 191.60.0.1:   find the
	               router to get to WINS
	
	2. The PDC of the trusting domain can find a DC in the trusted domain:
	
	  NETLOGON debug output:
	
	  00:00:00 NlInitTrustList: domainname in LSA
	  00:00:00 NlUpdateTrustListBySid: domainname: Added to local trust list
	  00:00:00 NlDcDiscoveryMachine: domainname: Start Discovery
	  00:00:00 NlDcDiscoveryMachine: MASTERDOM: Found DC \\D-SPOCK on
	     transport \Device\NetBT_Lance1
	
	  00:00:00 NlDcDiscoveryMachine: MASTERDOM: DC \\D-KIRK ignored. DC
	     previously found.
	
	  00:00:00 NlDcDiscoveryMachine: MASTERDOM: DC \\NTD-UHURA ignored. DC
	     previously found.
	
	  00:00:00 NlDcDiscoveryMachine: MASTERDOM: DC \\D-MCKOY ignored. DC
	     previously found.
	
	  Here are some of the frames that appear (sent by the PDC of the trusting
	  domain to the DC of the trusted domain):
	
	  NETLOGON  SAM LOGON request from client   RESCTL1       D-KIRK
	  NETLOGON  SAM LOGON request from client   RESCTL1       D-SPOCK
	  NETLOGON  SAM LOGON request from client   RESCTL1
	  NETLOGON  SAM LOGON request from client   RESCTL1       D-MCKOY
	  NETLOGON  SAM Response to SAM LOGON request  D-SPOCK         RESCTL1
	  NETLOGON  SAM LOGON request from client   RESCTL1       191.60.19.243
	  NETLOGON  SAM Response to SAM LOGON request  D-KIRK          RESCTL1
	  NETLOGON  SAM LOGON request from client   RESCTL1       NTD-UHURA
	  NETLOGON  SAM Response to SAM LOGON request  NTD-UHURA       RESCTL1
	  NETLOGON  SAM Response to SAM LOGON request  D-MCKOY         RESCTL1
	
	3. After the trust setup fails once because the cable is purposely disconnected,
	  the following NETLOGON debug-output occurs with the cable reconnected. The
	  PDC tries to log on to the trusted domain:
	
	  00:00  NlSessionSetup: MASTERDOM Try Session setup
	  00:00 NlStartApiClientSession: MASTERDOM: Bind to server \\D-SPOCK.
	  00:00 NlSetStatusClientSession: MASTERDOM: Set connection status to 0
	  00:00 NlSessionSetup: MASTERDOM Session setup Succeeded
	
	  Here are some of the frames sent between trusting PDC and trusted DC:
	
	  R_LOGON   RPC Client call logon:NetrServerReqChallenge(..)
	  R_LOGON   RPC Server response logon:NetrServerReqChallenge(..)
	  R_LOGON   RPC Client call logon:NetrServerAuthenticate2(..)
	  R_LOGON   RPC Server response logon:NetrServerAuthenticate2(..)
	  R_LOGON   RPC Client call logon:NetrLogonSamLogon(..)
	  R_LOGON   RPC Server response logon:NetrLogonSamLogon(..)
	  R_LOGON   RPC Client call logon:NetrLogonSamLogoff(..)
	  R_LOGON   RPC Server response logon:NetrLogonSamLogoff(..)
	  NETLOGON  SAM LOGON request from client   RESCTL1       D-MCKOY
	  NETLOGON  SAM LOGON request from client   RESCTL1       D-KIRK
	  NETLOGON  SAM LOGON request from client   RESCTL1       NTHANSJUS
	
	4. After the trust is established, the connection to the trusted domain is timed
	  out (internally in NETLOGON):
	
	  00:00:00 NlTimeoutApiClientSession Called
	  00:00:45 NlTimeoutApiClientSession Called
	  00:01:30 NlTimeoutApiClientSession Called
	  00:02:15 NlTimeoutApiClientSession Called
	  00:02:15 NlTimeoutApiClientSession: MASTERDOM: Unbind from server \\D-
	     SPOCK.
	
	  00:03:00 NlTimeoutApiClientSession Called
	
	  This causes only the following frames to appear on the network:
	
	  SMB       C close file, FID = 0x805 RESCTL1       D-SPOCK         IP
	  SMB       R close file  D-SPOCK         RESCTL1       IP
	  RESCTL1      D-SPOCK        TCP       .A...., len:    0, seq:   7004192,
	  ack:
	  422155081, win: 7883, src RESCTL1       D-SPOCK         IP
	
	  The DC calls NlTimeoutApiClientSession every 45 seconds.
	
	
	  And finally the PDC drops the connection to the trusted DC by closing the
	  named pipe.
	
	  NOTE: The PDC does not drop the secure channel and therefore does not have to
	  rediscover the DC in the trusted domain. This saves the PDC scavenger from
	  having to look for the DC every 15 minutes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT
	version 3.51.
	
	
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt 3.51 ISDN WAN chatter
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
