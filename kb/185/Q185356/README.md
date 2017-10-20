---
layout: page
title: "Q185356: TEST/XID Retries not Configurable for DLC Connections"
permalink: /kb/185/Q185356/
---

## Q185356: TEST/XID Retries not Configurable for DLC Connections

{% raw %}

	Article: Q185356
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When SNA Server tries to activate an 802.2 DLC connection, LLC TEST frames are
	sent to the remote network address to initiate the link level connection. If the
	remote station is not replying to the TEST frames, a network trace will show
	that SNA Server continues to send additional TEST frames. Each time the SNA
	Server service submits an Open(Link) Request to the 802.2 DLC Link Service, it
	generates TEST frames to test the connection.
	
	For additional information on how SNA Server initiates 802.2 DLC connections,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q123791 SNA Server Remote Station Discovery Process
	
	SNA Server does not provide a way to control the number of TEST frames that are
	sent for each Open(Link) Request sent to the link service. There is also no way
	to control the retry interval between each TEST command.
	
	SNA Server uses the same algorithm for XID retries, so the number of XID retries
	equals the number of TEST frame retries per Open(Link) Request.
	
	CAUSE
	=====
	
	The number of TEST and XID command retries per Open(Link) Request is hardcoded
	for the 802.2 DLC link service. The retry interval is also hardcoded. When an
	Open(Link) Request is submitted to the link service, a local TEST command is
	sent out on the local network segment. If SNA Server does not receive a reply to
	the local TEST command within 0.5 seconds, it sends an all-routes broadcast TEST
	command. The link service will send a total of three all-routes broadcast TEST
	commands if the remote station it not responding. The retry interval between the
	all-routes broadcast TEST commands is 15 seconds. This sequence is repeated for
	each Open(Link) Request that the 802.2 DLC Link Service receives from the SNA
	Server service.
	
	The following is network trace captured using Microsoft's Network Monitor that
	shows the sequence of TEST commands for one Open(Link) Request:
	
	  Frame  Time    Source  Dest  Protocol  Description   
	
	  1      0.000   Server  Host  LLC       TEST DSAP=0x00 SSAP=0x04 C POLL
	  2      0.001   Server  Host  SNA       SNA Packet: Req:(FMD)(SD)      
	  3      0.731   Server  Host  LLC       TEST DSAP=0x00 SSAP=0x04 C POLL
	  4      0.000   Server  Host  SNA       SNA Packet: Req:(FMD)(SD)      
	  5      18.893  Server  Host  LLC       TEST DSAP=0x00 SSAP=0x04 C POLL
	  6      0.000   Server  Host  SNA       SNA Packet: Req:(FMD)(SD)      
	  7      18.892  Server  Host  LLC       TEST DSAP=0x00 SSAP=0x04 C POLL
	  8      0.000   Server  Host  SNA       SNA Packet: Req:(FMD)(SD)
	
	Note: This trace was taken on an Ethernet network. By default, SNA Server sends
	TEST and XID frames to both the configured remote network address and the
	bit-flipped address (for Ethernet 802.2 connections only), in both DIX and 802.3
	formats. This is discussed in greater details in the following article in the
	Microsoft Knowledge Base:
	
	  Q123791 SNA Server Remote Station Discovery Process
	
	Frames 2, 4, 6, and 8 in the sample trace are the TEST commands sent in the
	Ethernet DIX format. The other frames are sent using the 802.3 frame format.
	
	If this sample trace had been taken on a Token Ring network, it would have the
	"all-routes broadcast" setting specified for the TEST commands in frames 3, 5,
	and 7. Ethernet does not contain any source-routing information, therefore the
	"all-routes broadcast" setting does not exist.
	
	A trace that captures the XID frames sent by the SNA Server will show the same
	number of retries and retry intervals as it does for TEST frames.
	
	RESOLUTION
	==========
	
	The 802.2 DLC Link Service for SNA Server has been updated to allow the number
	of retries and the retry interval to be configured for TEST and XID commands. In
	addition, the following registry entries have to be added to change the number
	of retries and the retry interval for the TEST and XID commands:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\<SNADLCx>\Parameters
	  \ExtraParameters
	
	  Value Name: TestTimeout 
	     <- Used to specify the local TEST/XID timeout in seconds.
	  Data Type: REG_DWORD
	  Data: <1 - 127 (decimal)>  
	
	  Value Name: XidTimeout
	     <- Used to specify the all-routes broadcast TEST/XID timeout in seconds.
	  Data Type: REG_DWORD
	  Data: <1 - 127 (decimal)>   
	
	  Value Name: TestRetries
	     <- Used to specify the number of TEST/XID retries.
	  Data Type: REG_DWORD
	  Data: <0 - 254 (decimal)>     
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11 (all SPs), 3.0, and 3.0 SP1. A supported fix is now available, but has not
	been fully regression-tested and should be applied only to systems experiencing
	this specific problem. Unless you are severely impacted by this specific
	problem, Microsoft recommends that you wait for the next Service Pack that
	contains this fix. Contact Microsoft Product Support Services for more
	information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ300SP1
	Version           : WINDOWS:2.0,2.1,2.11,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
