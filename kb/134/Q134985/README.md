---
layout: page
title: "Q134985: Browsing &amp; Other Traffic Incur High Costs over ISDN Routers"
permalink: /kb/134/Q134985/
---

## Q134985: Browsing &amp; Other Traffic Incur High Costs over ISDN Routers

{% raw %}

	Article: Q134985
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your ISDN TCP/IP router telecommunication connection costs appear to be very
	high.
	
	This problem occurs if all of the following are true:
	
	- Your network spans two or more sites.
	
	- You use ISDN TCP/IP routers.
	
	- You use an ISDN service that charges you based on connection time.
	
	NOTE: This problem frequently occurs in Germany where ISDN TCP/IP routers are
	popular and the ISDN connections are charged by connection time.
	
	The length of the time interval for a GBE shortens with greater distances between
	the sites, and vice versa.
	
	
	CAUSE
	=====
	
	The following Windows NT features may cause a lot of traffic between domain
	servers on different sites, causing your ISDN telecommunication costs to be
	high:
	
	- Domain browsing
	- Windows Internet Name Service (WINS) replication
	- Directory replication
	- User accounts database (SAM) replication
	- Printer browsing
	- Other (DHCP, etc.)
	
	You can use Network Monitor to check which of these features cause traffic on
	your network, including traffic from and to the ISDN router.
	
	How Domain Browsing Causes a lot of Network Traffic
	---------------------------------------------------
	
	The Windows NT domain master browser (DMB) exchanges computer browse lists with
	the master browsers (MBRs), usually the backup domain controllers (BDCs), in the
	other remote networks several times per hour.
	
	In your multi-site company, Microsoft recommends you have at least one BDC at
	each site. As a result, your company's domain may span multiple sites. This
	causes browsing network traffic across the your ISDN routers.
	
	Twelve minutes after an MBR boots and every twelve minutes thereafter, the MBR
	connects to the DMB, that is also the Primary Domain Controller (PDC), by
	sending a request to the NetBIOS name <domain>0x1b that is owned by the
	DMB. The MBR then sends the local browse list to, and retrieves the global
	browse list from, the DMB. This causes the first connection over ISDN and
	usually lasts several seconds, so this may take up more than one GBE on the ISDN
	line.
	
	Browsing communication uses RPC over a named pipe connection. After the named
	pipe connection is closed the logical network connection is still entertained by
	the redirector for ten more minutes because that is when the MBR redirector's
	KeepConn parameter expires by default. Although, this logical connection does
	not incur ISDN router costs, frames sent to disconnect the connection after the
	ten minute period cause another ISDN connection to be established, which incurs
	costs.
	
	Two minutes later, 24 minutes after booting, the MBR connects again to the DMB
	for a browse list exchange. This occurs every twelve minutes.
	
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	To work around this problem, read the sub-section that applies to your traffic
	problem:
	
	- Working Around the Domain Browsing Problem
	
	- Solving the Domain Browsing Problem with a Fix
	
	- Configuring Other Features That Cause Traffic
	
	Working Around the Domain Browsing Problem
	------------------------------------------
	
	To work around this problem, modify the following parameters in the Windows NT
	registry and/or configure your ISDN router to turn off during idle hours:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	- To minimize ISDN connections with full availability of the domain browse
	  list:
	
	  a. Under the subtree HKEY_LOCAL_MACHINE, locate the following registry
	     subkey:
	
	  \SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters
	
	  b. Set the KeepConn parameter to a small value, for example, five seconds.
	
	     This prevents network traffic between browse cycles to disconnect. The
	     connection made during the browse list exchange. Set this Parameter on all
	     domain controllers.
	
	- To further minimize ISDN connections during idle hours, for example, during
	  the night and during the weekend, set a filter option on the ISDN TCP/IP
	  router to turn off the ISDN line during the idle hours.
	
	  NOTE: This results in loss of browse listings of computers on remote sites.
	
	Solving the Domain Browsing Problem with a Fix
	----------------------------------------------
	
	The browser service supports the parameters MasterPeriodicity and the
	BackupPeriodicity in the KEY_LOCAL_MACHINE subtree under the following subkey:
	
	  \SYSTEM\CurrentControlSet\Services\Browser\Parameters
	
	Use the following information to configure these two new parameters.
	
	MasterPeriodicity:
	
	DWORD specifies in seconds how frequently an MBR contacts the DMB. The default is
	720 (twelve minutes), the minimum is 300 (five minutes). The maximum is
	4,294,967 (or 0x418937 hex), which is 49 days and 8 hours. This parameter can be
	changed dynamically (without rebooting) with the Registry Editor or REGINI (from
	the Windows NT Resource Kit). You can schedule REGINI with the scheduler service
	to reduce browser traffic during the night or over the weekend.
	
	The parameter should be set on each MBR. Because another computer can be elected
	to be the MBR you should apply the fix to each Windows NT computer in the
	domain, because they are most likely to win browser elections. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID:Q102878
	  TITLE :Information on Browser Operation
	
	If you set the parameter on the DMB it affects the frequency it asks WINS for the
	domain list (this might also cause WAN traffic).
	
	NOTE: Maximum value for MasterPeriodicity is 2147483 (0x20C49B hex) not 4294967
	(0x418937 hex) as specified.
	
	BackupPeriodicity:
	
	DWORD specifies in seconds how frequently a backup browser contacts the MBR. The
	default is 720 (twelve minutes), the minimum is 300 (five minutes). The maximum
	is 4,294,967 (or 0x418937 hex), which is 49 days and 8 hours. This parameter is
	not read dynamically so you have to restart your computer. This parameter does
	not affect the WAN, since this traffic is always on one subnet.
	
	CAUTION: BackupPeriodicity is used to determine when an entry in the browse list
	has to be deleted. This is done after three periods of BackupPeriodicity.
	Because of the way dynamic update of MasterPeriodicity is implemented, it is
	possible you can lose entries in your browse list on the PDC when you change
	MasterPeriodicity from a high value to something else.
	
	To prevent this you should increase BackupPeriodicity to at least a third of the
	maximum value of MasterPeriodicity. You must implement this on every computer
	which can become the PDC.
	
	Configuring Other Features That Cause Traffic
	---------------------------------------------
	
	To minimize non-domain browsing traffic, modify the following parameters in WINS
	Server Admin or the Windows NT registry:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	- For WINS replication, the interval is configurable in WINS Server Admin.
	
	- The following services are configurable in the Windows NT registry under the
	  subtree HKEY_LOCAL_MACHINE:
	
	   - For directory replication, the interval is configurable with the Interval
	     parameter in the subkey:
	
	  \CurrentControlSet\Services\Replicator
	
	   - For SAM replication, the interval is configurable with the PulseMaximum
	     parameter in the subkey:
	
	  \CurrentControlSet\Services\Netlogon
	
	   - For printer browsing, the interval is configurable with the
	     DisableServerThread parameter in the subkey:
	
	  \CurrentControlSet\Control\Print
	
	STATUS
	======
	
	Microsoft has confirmed the domain browsing to be a problem in Windows NT
	versions 3.5 and 3.51. This problem has been corrected in the latest U.S.
	Service Pack for Windows NT version 3.51. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	
	
	Additional query words: prodnt Novell sniffer trace expensive cost router
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
