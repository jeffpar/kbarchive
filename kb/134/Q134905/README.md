---
layout: page
title: "Q134905: SNA Server and 2012 System Log Errors"
permalink: /kb/134/Q134905/
---

## Q134905: SNA Server and 2012 System Log Errors

{% raw %}

	Article: Q134905
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use the SNA Server client named pipe interface to communicate with an
	SNA Server running on Windows NT Server 3.5, the following error may appear in
	the Windows NT system log:
	
	  Event ID: 2012
	  Source: Srv
	  Description: The server has encountered a network error
	
	This error is logged by the Windows NT server service when an SNA Server client
	named pipe session is lost unexpectedly. This error occurs more readily with SNA
	Server named pipe-attached clients than it does with other named pipe
	applications (such as SQL Server) because the SNA client software always posts a
	named pipe read request against the server. If a session error occurs with the
	read request outstanding, the Windows NT server logs event 2012.
	
	This error indicates that a client-server LAN session was lost, causing the user
	to lose their SNA session. This article describes the most common causes of this
	error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Event 2012 commonly occurs when:
	
	- You are using Windows for Workgroups 3.11 and have not installed update
	  Windows for Workgroups files.
	
	  There is named pipe disconnect problem in Windows for Workgroups 3.11. To
	  correct this problem, upgrade to the Windows for Workgroups 3.11 client files
	  included on the Windows NT 3.5 or 3.51 CD-ROM.
	
	- Your client computer is running Windows NT 3.5 and you have not installed the
	  fixed RDR.SYS file.
	
	  When you use Windows NT 3.5 clients to communicate with SNA Server, a problem
	  in the RDR.SYS file can cause the network session to be lost when exiting an
	  SNA Server Windows NT client application. To correct this problem, upgrade to
	  Windows NT 3.51, or install the latest U.S. Service Pack for Windows NT 3.5.
	
	  For information on obtaining the Service Pack, query on the following word in
	  the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	  For more information on this problem, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q126451 SNA Server: Windows NT Client Loses Session To Server
	
	
	- You turn off client computers
	
	  If you turn off a client computer while an SNA Server named pipe session is
	  active, error 2012 may be logged.
	
	- You have underlying network problems.
	
	  As with any client-server LAN session, the session can be lost if there are
	  underlying network problems occurring in the LAN. Problems can occur if there
	  is a bridge fault, router fault, or media failure.
	
	  To troubleshoot this problem, create a general network sniffer trace or
	  Microsoft Network Monitor trace to determine whether underlying LAN errors
	  are occurring. If so, identify and correct the problems.
	
	- You have a shortage of Windows NT 3.5 Server Message Block (SMB) buffer
	  space.
	
	  When you connect over 100 - 150 SNA Server clients using the Microsoft N
	  Networking (named pipe) client interface, you may run out of Windows NT 3.5
	  SMB buffer space.
	
	  The Windows NT 3.5 Server service supports up to 512 maxworkitems.
	  Maxworkitems are a server resource used to support data exchange with
	  clients, including named pipe applications such as SNA Server. Because the
	  SNA Server client software may have more than one named pipe session open
	  with the server, and a read request is always posted on each named pipe, the
	  Windows NT 3.5 server can run out of resources required to process the SNA
	  Server named pipe client traffic. This can lead to slow SNA client
	  performance and lost client sessions.
	
	  NOTE: The Windows NT 3.5 server service normally sets the maxworkitems
	  resource to 512 (decimal), the recommended setting for SNA Server, when the
	  Windows NT Server is configured to "maximize throughput for network
	  applications." However, due to a problem with the "NET CONFIG SERVER"
	  command, it is possible that your MaxWorkItems registry setting is set to a
	  value lower than 512, causing an SMB buffer shortage to occur. For more
	  information on this problem, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q128167 Server Service Configuration and Tuning
	
	  If the Windows NT 3.5 MaxWorkItems setting is already set to 512 decimal,
	  either of the following two workarounds may help you resolve the problem:
	
	   - Switch the SNA Server clients to use an interface other than named pipes
	     (for example, TCP/IP sockets). The new interface should not use the
	     Windows NT server and should bypasses the need for work items. However,
	     this workaround requires the SNA client user perform an additional login
	     to the Windows NT server during SNA client startup. This is necessary to
	     enforce Windows NT security.
	
	     NOTE: Although SNA Server 2.1 does provide some capability to automate the
	     additional client login, this functionality has been further enhanced in
	     SNA Server 2.11. For more information, please see the following article in
	     the Microsoft Knowledge Base:
	
	  Q130854 Automating the SNA Server Win 3.x Client Login Process
	
	   - To connect larger numbers of SNA Server clients and continue using the
	     named pipe interface, upgrade to Windows NT 3.51 so you can increase
	     MaxWorkItems setting:
	
	     WARNING: If you use Registry Editor incorrectly, you may cause serious
	     problems that may require you to reinstall your operating system.
	     Microsoft cannot guarantee that you can solve problems that result from
	     using Registry Editor incorrectly. Use Registry Editor at your own risk.
	
	     1. Upgrade to Windows NT 3.51.
	
	     2. Run Registry Editor (REGEDT32.EXE).
	
	     3. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	     4. Set MaxWorkItems to 4096:
	
	  MaxWorkItems: REG_DWORD: 4096 (decimal)
	
	        In simulated client testing, over 1500 SNA Server named pipe clients
	        were able to connect to a single SNA Server using this setting.
	
	        This registry setting must be set manually when using SNA Server 2.1. If
	        SNA Server 2.11 is installed on a server running Windows NT 3.51, SNA
	        Server 2.11 Setup sets this parameter to 4096.
	
	        NOTE: SNA Server 2.11 also includes optimizations that reduces the
	        memory allocation for named pipe connections, which lessen the use of
	        Windows NT Server SMB buffers. However, Microsoft recommends you
	        upgrade to Windows NT 3.51 to connect large numbers of SNA Server
	        clients if the named pipes interface is required.
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51 event viewer
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
