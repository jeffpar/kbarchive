---
layout: page
title: "Q244539: Host Route Can Be Deleted if ICMP Fragmentation Is Needed"
permalink: /kb/244/Q244539/
---

## Q244539: Host Route Can Be Deleted if ICMP Fragmentation Is Needed

	Article: Q244539
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbWin2000PreSP1Fix kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows NT Workstation versions 4.0 SP5, 4.0 SP6 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a user has defined manual host routes using the Route.exe tool, certain
	routes to remote hosts may be removed from the route table after 10-15 minutes
	after usage.
	
	CAUSE
	=====
	
	This problem can occur when an ICMP Destination Unreachable Packet is sent with
	the DF Flag set. When this occurs, it sends along the Next Hop MTU, and this
	causes the Host route to be overwritten by the ICMP source route. ICMP host
	routes are subject to deletion if their MTU changes.
	
	Windows NT uses a Path MTU detection algorithm that sets the DoNotFragment bit on
	TCP packets. This behavior will cause intermediate routers with a smaller MTU
	than the packet's size to reject the packet and send an ICMP Destination
	Unreachable:Fragmentation Needed. When Windows NT receives this packet, it
	updates the internal routing table with the new MTU. This update would also
	overwrite the route's source field to ICMP. This could cause a user-entered host
	route to disappear when Windows NT periodically removes aged ICMP host routes.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name  Platform
	  ------------------------------------------------
	  02/25/2000  07:47p  174,448  Tcpip.sys  x86
	  02/25/2000  07:46p  310,704  Tcpip.sys  Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Adjust the MTU on the router.
	
	- You can disable PMTU Discovery which will limit the MTU to 576 bytes for all
	  non-local destination addresses. You can do this by setting this registry
	  entry to a value of zero: Value name: EnablePMTUDiscovery
	  Value type: REG_DWORD - Boolean
	  Valid range: 0,1 (False, True)
	  Default: 1 (True)
	
	  Location:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	
	For additional information explanations of TCP registry entries, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q120642 TCP/IP and NBT Configuration Parameters for Windows 2000 or Windows
	  NT
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	Additional query words: static persistent purge disappear table
	
	======================================================================
	Keywords          : kbnetwork kbtool kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbfixlist
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : :2000,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
