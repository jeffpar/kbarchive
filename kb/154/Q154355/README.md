---
layout: page
title: "Q154355: How to Tune Trusts for Dialup Routers in a WAN"
permalink: /kb/154/Q154355/
---

## Q154355: How to Tune Trusts for Dialup Routers in a WAN

	Article: Q154355
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may be unable to establish a trust relationship to a remote domain where the
	domain controller (DC) is across a dialup router due to timeout reasons. This
	timeout will cause an additional connection attempt to the remote domain
	controller to be made every 15 minutes until a connection is achieved. This can
	become expensive if the dialup line is an ISDN line you are paying for a router
	dialing every 15 minutes.
	
	CAUSE
	=====
	
	The Netlogon service in Microsoft Windows NT is hard-coded to wait 15 seconds to
	establish the trust. If the router line is busy or very slow, the response from
	the remote domain controller may timeout.
	
	A dialup router can take longer to make a connection to the remote DC than
	Netlogon will wait. Even if the line is not busy, it can take as long as 30 to
	90 seconds to make a connection to the remote network. Netlogon by default will
	send out three broadcast/multicast <1C> frames looking for the domain
	controller at +/- five-second intervals.
	
	If the DC isn't found with these three broadcasts, the Netlogon service will
	repeat this sequence every 15 minutes until it succeeds.
	
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned below. The hotfix consists of a new Netlogon registry
	entry that adds an additional delay to each of the Netlogon broadcast/multicast
	<1C> frames sent, thus causing Netlogon to wait longer for
	NlDcDiscoveryMachine to succeed. The formula for the wait time is as follows:
	
	  5 seconds + ( ExpectedDialupDelay / 3 ).
	
	If the ExpectedDialupDelay is set to 90 seconds, the wait time would be:
	
	  5 + ( 90 / 3 ) = 35,
	
	thus, a 35-second interval between frames.
	
	The registry information for the new parameter is:
	
	  Location: HKLM\System\CCS\Services\Netlogon\Parameters
	  Value Name: ExpectedDialupDelay
	  Data Type:  Reg_Dword
	  Data Value is in seconds (default = 0)
	  Range between 0 and 600 seconds (10 minutes)
	
	ExpectedDialupDelay (in seconds)
	
	This parameter specifies the time it takes for a dialup router to dial when
	sending a message from this client computer to a domain trusted by this client
	computer. Typically, Netlogon assumes a domain controller is reachable in a
	short time period (about 15 seconds). Setting ExpectedDialupDelay informs
	Netlogon to expect an ADDITIONAL delay of the time specified.
	
	
	If for some reason this does not work, you should add a second entry to the
	registry. This entry will force the Scavenge Timer to increase the interval to
	retry the connection to the remote DC. This will decrease markedly the amount of
	dialups for trust verification.
	
	The registry information for the new parameter is:
	
	  Location: HKLM\System\CCS\Services\Netlogon\Parameters
	  Value Name: ScavengeInterval
	  Data Type:  Reg_Dword
	  Data Value is in seconds (default = 900 (15 minutes))
	  Range between 60 seconds (1 minute) and 172800 seconds (2 days)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	If you want an overview of possible other WAN traffic, please see the following
	article in the Microsoft Knowledge Base:
	
	Q134985Browsing & Other Traffic Incur High Costs over ISDN Routers
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
