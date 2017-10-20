---
layout: page
title: "Q157462: RAS Server Routing Client IP Packets Degrades Performance"
permalink: /kb/157/Q157462/
---

## Q157462: RAS Server Routing Client IP Packets Degrades Performance

{% raw %}

	Article: Q157462
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
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
	
	You may notice that the performance of your Remote Access Service (RAS) server
	degrades when you are using it to route IP packets from several RAS clients to
	one or more local area network (LAN) segments.
	
	CAUSE
	=====
	
	This problem occurs when a large number of packets are sent from the RAS server
	or a system on the LAN to a RAS client.
	
	For example, when RAS clients use Internet browsers through a RAS server, the
	browsers typically open several TCP connections for each page. The browsers send
	several small request packets through the RAS IP router to the Web server. The
	Web server then responds by sending lots of frames with the content of the Web
	page.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps to edit or add the
	appropriate registry entries:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Install the latest Windows NT 3.51 Service Pack.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  ARTICLE-ID: Q128465
	  TITLE : How To Obtain Windows NT Version 3.51 U.S. Service Pack
	
	2. Start Registry Editor (Regedt32.exe) and select the following subkey:
	
	  HKEY_Local_Machine\System\CurrentControlSet\Services\NdisWanX
	
	  where X is the adapter number.
	
	  NOTE: There may be several NdisWanX subkeys. The one you need to change will
	  have the subkeys Parameters\Tcpip\. This is often the last NdisWan entry.
	
	3. Go to the Parameters subkey of NdisWanX (that includes the following):
	
	  a. A value with the following information:
	
	     Value name: ServerAdapter
	     Data Type: REG_DWORD
	     Data: 1
	
	  b. the TCPIP subkey.
	
	4. Select the TCPIP subkey, click Edit, and then click Add Value.
	
	5. Enter the following:
	
	  Value Name: MaxForwardPending
	  Data Type: REG_DWORD
	  Data: <Range is 1 to 0xFFFFFFFF>
	
	  NOTE: The default value for this key before Service Pack 2 (SP2) is 20
	  (decimal); however, for Windows NT before SP2, it was a hard-coded limit of
	  5.
	
	  You can only change MaxForwardPending, but your queue will be limited to 50
	  packets. Setting it to more than 50 will not provide any additional queuing
	  because there are other buffers that become exhausted at 50. If you need more
	  than 50, follow steps 6-8 below. Otherwise, you can skip to steps 9-10.
	
	6. In the registry, locate the following key:
	
	  HKEY_Local_Machine\System\CurrentControlSet\Services\Tcpip\Parameters
	
	7. Click Edit, click Add value, and then type the following:
	
	  Value Name: NumForwardPackets
	  Data Type: REG_DWORD
	  Data: <Range is 1 to 0xFFFFFFFF>
	  Default: 50
	
	  Description: This parameter determines the number of IP packet headers
	  allocated for the router packet queue. When all headers are in use, the
	  router will begin to discard packets at random from the queue. This value
	  should be at least as large as the ForwardBufferMemory value divided by the
	  maximum IP data size of the networks connected to the router. It should be no
	  larger than the ForwardBufferMemory value divided by 256, because at least
	  256 bytes of forward buffer memory are used for each packet. The optimal
	  number of forward packets for a given ForwardBufferMemory size depends on the
	  type of traffic carried on the network and will be somewhere between these
	  two values. This parameter is ignored and no headers are allocated if the
	  router is not enabled.
	
	  NOTE: This value should be set equal to MaxForwardPending for adapter key.
	
	8. Click Edit, click Add value, and then type the following:
	
	  Value Name: ForwardBufferMemory
	  Data Type: REG_DWORD
	  Data: <Range is network MTU>
	  Default: 74240 (enough for fifty 1480-byte packets, rounded to a multiple of
	  256)
	
	  Description: This parameter determines how much memory IP allocates to store
	  packet data in the router packet queue. When this buffer space is filled, the
	  router begins discarding packets at random from its queue. Packet queue data
	  buffers are 256 bytes in length, so the value of this parameter should be a
	  multiple of 256. Multiple buffers are chained together for larger packets.
	  The IP header for a packet is stored separately. This parameter is ignored
	  and no buffers are allocated if the IP router is not enabled. Ideally you
	  would multiply NumForwardPackets times 1480 bytes.
	
	9. Click OK, and then quit Registry Editor.
	
	10. Shut down and then restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	When RAS client computers connect to Web servers on the RAS server's IP network,
	the backlog becomes extremely large. Web browsers on RAS client computers use
	the HTTP protocol, which can have many requests pending at the same time. In
	addition, Web browsers transmit small request packets that generates many large
	response packets. Consequently, using Web browsers can increase the number of
	packets being sent and queued on the RAS server for each RAS client computer.
	
	The IP router of the Windows NT TCP/IP stack places IP packets in a queue and, by
	default, forwards 20 IP packets at once to an NDIS network driver. The number of
	packets that are forwarded depends on the MaxForwardPending registry value. This
	value was originally set to 5. After you upgrade to Windows NT 3.51 Service Pack
	2 or greater, the value defaults to 20 and is user configurable in the
	registry.
	
	The default value for MaxForwardPending is sufficient for local network speed and
	throughput. However, it is not sufficient for RAS NDIS drivers. For example, if
	1,000 packets are sent to the RAS server for one RAS client, there is a long
	delay in completing the transmission of the packets and a huge backlog on the
	RAS server. Several third-party multiport serial interface vendors have
	developed drivers that can transmit more packets at once than a standard network
	card (which uses the Windows NT default value of 20 packets). These drivers
	place packets in a queue on the individual serial connector for each RAS client
	computer. This process reduces the load on the higher software layers and places
	the heavy load on the hardware.
	
	For example, if you have a RAS server that uses a 64 multiport serial interface
	and one network connection, 64 RAS client computers using Internet Explorer that
	can make 5 possible simultaneous connections, and a Web site with a Web page
	that contains 5 graphic files (each is 10 KB in size), the MaxForwardPending
	data value is 1600 (decimal).
	
	64 clients * 5 connections/client * 5 files/connection = 1600
	
	To monitor your RAS IP router backlog queue, you need to use Performance Monitor.
	However, first you must install Network Monitor Agent on the RAS server. This is
	necessary because it adds additional network interface counter objects to
	Performance Monitor.
	
	Start your test on your normal RAS traffic. Monitor the queue lengths on the
	chart. RAS should be the highest value. If the queue length hits your value for
	MaxForwardPending it will cause all RAS clients to drop packets. If this occurs,
	you should go back to the RESOLUTION section earlier in this article and
	increase all your registry parameters.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
