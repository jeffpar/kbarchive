---
layout: page
title: "Q276476: TN3270 Cannot Restrict Access Through Ports for Specific Request"
permalink: /kb/276/Q276476/
---

## Q276476: TN3270 Cannot Restrict Access Through Ports for Specific Request

{% raw %}

	Article: Q276476
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The TN3270 service that is included with SNA Server allows each TN3270 logical
	unit (LU) and/or Pool to be configured to listen over specific Transfer Control
	Protocol/Internet Protocol (TCP/IP) ports. This makes it possible to restrict
	access to TN3270 LUs/Pools through ports, in addition to using TCP/IP address
	and workstation names.
	
	However, the use of specific ports for TN3270 LUs/Pools is only checked/enforced
	for "generic" session requests. A generic session request is a session request
	for a TN3270 LU/Pool that does not explicitly specify the name of the requested
	TN3270 LU/Pool.
	
	If the TN3270 client sends a "specific" session request, the client can access
	the requested TN3270 LU/Pool even if the client is configured to use a different
	port than the LU/Pool, as long as the TN3270 LU/Pool name is specified
	correctly. A specific session request is one that explicitly specifies the name
	of a TN3270 LU/Pool.
	
	The TN3270 service is not designed to validate TCP/IP ports for specific TN3270
	session requests.
	
	For additional information about the latest service pack for SNA Server 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When the TN3270 service receives a session request, it first determines whether
	the request is generic (no device name specified) or specific (device name
	specified). If the request is generic, the TN3270 service checks the port number
	and then it checks for TCP/IP address and/or host name restrictions. If the
	request is specific, it reads and validates the device name. After the device
	name is validated, the TN3270 service checks for TCP/IP address and/or host name
	restrictions. The TN3270 service never checks for any port restrictions for
	these specific requests.
	
	After you apply the update, the TN3270 service enforces port-based restrictions
	for specific session requests by adding the following registry entry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\TN3270\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: RestrictLUAAccessByPort
	  Data Type: REG_SZ
	  Value: YES
	
	4. Quit Registry Editor.
	
	If the RestrictLUAAccessByPort value is set to YES, the TN3270 service only
	allows access to a TN3270 LU/Pool for specific session requests if the TN3270
	client specifies the device name (that is, TN3270 LU/Pool name) and is
	configured to use the same port as the requested TN3270 LU/Pool. If this
	registry entry is not defined (or is defined with any value other than YES), the
	default behavior remains the same as it was prior to making the change, such
	that ports are not validated for specific session requests.
	
	
	
	Additional query words: Tn3servr sp
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
