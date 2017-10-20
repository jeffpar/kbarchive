---
layout: page
title: "Q174557: Time Sources Defined For The Windows NT Time Service"
permalink: /kb/174/Q174557/
---

## Q174557: Time Sources Defined For The Windows NT Time Service

{% raw %}

	Article: Q174557
	Product(s): Microsoft Windows NT
	Version(s): MS-DOS:3.0; Win2000:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three types of time sources that must be understood before you set up
	the Time Service for your computer running Windows NT.
	
	MORE INFORMATION
	================
	
	Top Level Time Source
	---------------------
	
	The top level time source represents an accurate time source such as an atomic
	clock. The Time Service Initialization file, Timeserv.ini, lists many different
	sources for accurate clocks, that is, NISTACTS, USNO, NTP, and so forth.
	
	Primary Source (Masters of Time)
	--------------------------------
	
	These computers get their time from a top level time source and are primary time
	sources for the other computers on your Local Area Network (LAN). The Type= line
	of the Timeserv.ini file should be set to one of the top level time sources in
	order to be considered a primary time source. You can have as many Primary
	Sources (Masters of Time) as you want on your network, but it is usually
	sufficient to just have one.
	
	     Type=USNO
	
	Secondary Source
	----------------
	
	These computers have their Type= line set to Primary and the PrimarySource= line
	set to one (or more) of the primary sources separated by a semicolon.
	
	     Type=Primary
	     PrimarySource=\\NTPDC1;\\NTPDC2...
	
	The secondary sources must have their TimeSource= line set to YES. Setting the
	TimeSource=YES actually sets the timesource bit to true that allows down-level
	clients to determine who the secondary time sources are. Secondary clients issue
	a NetRemoteTOD API call to the primary source to get their time set.
	
	     TimeSource=YES
	
	Clients
	-------
	
	Computers running Windows NT can get their time from either a primary source or a
	secondary source. If a computer running Windows NT is to get its time from a
	primary source, then it sets the Type= line to Primary as explained above.
	However, computers running Windows NT can also get their time from a Secondary
	Time Source. They do this by setting their Type= line to Secondary.
	
	     Type=Secondary
	
	By default, computers with their type set to Secondary use the NetServerEnum API
	call to find servers with the timesource bit set that belong to their own
	domain. You can specify a secondary domain with the SecondaryDomain= section of
	the Timeserv.ini file.
	
	     SecondaryDomain="Place the workgroup or domain name here."
	
	For computers not running the time service, the same thing happens when they
	issue a NET TIME command without any paramaters (it searches its local domain
	for a server with its timesource bit set to YES). To get the same function as
	the SecondaryDomain, issue a NET TIME /DOMAIN:DOMAINNAME (secondary domain)
	command.
	
	Issuing a NET TIME \\SERVER /SET /Y command will cause the down-level client to
	set its time with the computer specified whether it is a registered timesource
	or not.
	
	NOTE: Because the clients issue a NetServerEnum to enumerate the servers with the
	timesource bit set to yes, it will adversely affect the Time Service if browsing
	is not working properly on your network.
	
	Additional query words: timeserv time
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbZNotKeyword kbZNotKeyword3 kbNetworkClientSearch kbNetworkClient300DOS
	Version           : MS-DOS:3.0; Win2000:95; winnt:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
