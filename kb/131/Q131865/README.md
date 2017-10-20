---
layout: page
title: "Q131865: SMC Elite Ultra NIC Causes UNIX Computers to Disconnect TCP/IP"
permalink: /kb/131/Q131865/
---

## Q131865: SMC Elite Ultra NIC Causes UNIX Computers to Disconnect TCP/IP

{% raw %}

	Article: Q131865
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51; :
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	TCP/IP connections between two UNIX computers or between a Microsoft network
	computer and UNIX computer are lost.
	
	This happens on a network with both UNIX computers and a computer running a
	Microsoft protected mode TCP/IP protocol stack (including TCP/IP-32 versions
	3.11, 3.11a, and 3.11b and Windows NT versions 3.5 and 3.51) and where the
	Microsoft network computer is using the SMC Elite Ultra network interface card
	(NIC).
	
	CAUSE
	=====
	
	The SMC Elite Ultra NIC incorrectly passes up ethernet packets addressed to
	other computers. This causes the Microsoft TCP/IP protocol stack to send an ICMP
	Host Unreachable message back to the source computer. Some UNIX TCP/IP stacks
	disconnect when they receive this ICMP packet.
	
	WORK AROUND
	-----------
	
	To work around the SMC hardware problem, Microsoft has removed the code from the
	protected mode TCP/IP stack which sends the ICMP Host Unreachable message under
	these circumstances.
	
	Versions of the Windows NT version 3.51 file, TCPIP.SYS, date stamped 6/14/95 or
	later incorporate the above workaround.
	
	Versions of the Windows for Workgroups TCP/IP-32 file, VIP.386, date stamped
	7/19/95 or later incorporate the above workaround.
	
	This workaround is also included in the release version of Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem while using Windows NT versions 3.5
	and 3.51 and Windows for Workgroups TCP/IP-32 versions 3.11, 3.11a, and 3.11b.
	
	Windows NT 3.51
	---------------
	
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Windows NT 3.5 and TCP/IP-32 3.11x
	----------------------------------
	
	A workaround to this problem is in development, but has not been regression-
	tested and may be destabilizing in production environments. Microsoft does not
	recommend implementing this workaround at this time. This workaround is
	available from Microsoft Product Support Services as well as electronically by
	"anonymous" ftp at:
	
	  ftp://ftp.microsoft.com:/bussys/winnt/winnt-unsup-ed/fixes/nt35/icmpfix
	
	  -and-
	
	  ftp://ftp.microsoft.com:/bussys/clients/wfw/tcpip32-fixes/icmpfix
	
	
	The Elite Ultra is manufactured by SMC, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt sniper
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3
	Version           : winnt:3.5,3.51; :
	
	=============================================================================
	

{% endraw %}
