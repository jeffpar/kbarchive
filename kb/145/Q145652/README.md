---
layout: page
title: "Q145652: Windows 95 RPC Ignores Shutdown Packets"
permalink: /kb/145/Q145652/
---

## Q145652: Windows 95 RPC Ignores Shutdown Packets

{% raw %}

	Article: Q145652
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95 kbRPC kbSDKPlatform kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a program using RPC in Windows 95, the program may report a
	packet integrity error or security interface error when the program receives a
	"Shutdown" packet from the RPC server.
	
	This error is most likely to occur with a program that uses the Microsoft
	Security Support Provider interface, and to be reported as a security validation
	error.
	
	CAUSE
	=====
	
	The RPC run-time library in Windows 95 ignores Shutdown packets, instead of
	destroying the session and incrementing the received packet count as expected.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	Shutdown packets are specified in the Open Software Foundation (OSF)
	Distribution Computing Environment (DCE) specification, which defines the
	industry standard for implementing remote procedure calls (RPC). A DCE-
	compliant RPC client is expected to terminate the RPC session when it receives a
	Shutdown packet. In Windows 95, the RPC run-time library does not terminate the
	session when a Shutdown packet is received.
	
	Also, the received packet count is not properly incremented when a Shut- down
	packet is received. The received packet count (MessageSequenceNumber counter) is
	used to calculate and validate checksums for programs that use the Microsoft
	Security Support Provider interface. The RPC run-time library does not calculate
	checksums correctly because of this error, and checksum validation can fail when
	called later.
	
	Microsoft RPC run-time libraries do not generate Shutdown packets. Only
	non-Microsoft DCE servers (such as Unix servers) generate Shutdown packets.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbRPC kbSDKPlatform kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
