---
layout: page
title: "Q97559: How Remote Access Service Processes Datagram Traffic"
permalink: kb/097/Q97559/
---

## Q97559: How Remote Access Service Processes Datagram Traffic

	Article: Q97559
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how Remote Access Service (RAS) uses datagrams under
	Windows NT. The article is divided into the following subjects:
	
	- Remote RAS Workstation Posts NCB_Add_Group_Name
	
	- LAN System Sends a Burst of Multicast Datagrams to a Group Name
	
	- RAS Client Sends a Datagram
	
	- Remote RAS Workstation Posts NCB_Add_Name
	
	- LAN System Sends a Datagram to a Unique RAS Client Name
	
	Remote RAS Workstation Posts NCB_Add_Group_Name
	-----------------------------------------------
	
	Windows NT adds a group name for the domain or the workgroup. Microsoft LAN
	Manager, by default, adds a group name for the domain name and other domain
	names (from the LANMAN.INI file). Applications using NetBIOS can add group names
	as well. The RAS workstation follows these steps:
	
	1. The RAS server checks to see if the group name registered locally already.
	
	   - If the name is already registered (because another workstation has posted
	     NCB_Add_Group_Name), the RAS server flags the name as registered and does
	     not post NCB_Receive_Datagram.
	
	   - Otherwise, the group name is not registered and the following steps are
	     performed.
	
	2. The RAS server posts NCB_Add_Group_Name on all available transports (NBF,
	  TCP/IP, etc.).
	
	   - MaxNames for RAS: There must be enough names to accommodate all the remote
	     clients add request. The default is 255 (the maximum) which should leave
	     plenty of room.
	
	   - MaxNames for transport: Each transport has a MaxNames entry that may need
	     tuning. It should be set high enough to handle all of the local server
	     names plus all of the remote client NetBIOS names. The NBF transport can
	     be configured in Control Panel using the "Maximize Throughput and
	     Connections" setting. This allows names and sessions to be tuned high
	     without any realistic limit. See the Windows NT documentation for
	     information on default names in the section covering RemoteListen.
	
	   - If NCB_Add_Group_Name fails on any transport because another system
	     responds with an AddNameResponse frame (meaning that another system has
	     the group name registered as a unique name), then the group is not added
	     on the server or the client workstation.
	
	3. The RAS server posts RcvDgSubmittedperGroupName number of
	  NCB_Receive_Datagrams for the group name.
	
	   - This has nothing to do with how many NCB_Receive_Datagrams are posted by
	     the remote client. This is handled by the server only. When a client posts
	     NCB_Add_Group_Name or NCB_Add_Name, the RAS server automatically posts
	     NCB_Receive_Datagram for each name, regardless of what the client posts
	     (even if the client does not post anything).
	
	   - RcvDgSubmittedperGroupName controls how many NCB_Receive_Datagrams are
	     posted by the server for each group name. This is a resource- intensive
	     parameter. Each one takes 1.5K of physical RAM. As soon as one is
	     completed the server automatically posts a new one.
	
	LAN System Sends a Burst of Multicast Datagrams to a Group Name
	---------------------------------------------------------------
	
	The RAS server receives a datagram, and handles it as follows:
	
	1. Check EnableBroadcast. Default is 0, disabled. (This datagram is not
	  broadcast in example.)
	
	   0 Yes. Drop broadcast (not multicast) datagram and do not forward
	     to remote clients.
	
	   1 No. Continue.
	
	2. Check MulticastForwardRate. Default is 5.
	
	  -1 Drop datagram. Do not forward any broadcast or multicast. This
	     setting is useful to filter out LAN Manager server announcements
	     that use multicast datagrams for domain group names. If you
	     have a large LAN Manager network with many servers, this can use
	     up asynchronous bandwidth.
	
	   0 Guarantees delivery of datagram to client.
	
	  >0 (1 to 32767) Works as a gate. After the designated number of
	     seconds, the gate opens and all datagrams arriving at the server
	     are forwarded to remote clients. When the gate is closed, all
	     datagrams are dropped.
	
	  NOTE: This parameter is useful for reducing LAN Manager server
	  announcement traffic. On a large network, all the server
	  announcements can look like a steady stream of data flowing over
	  the asynchronous line.
	
	3. Check DisableMcastFwdWhenSessionTraffic. Default is 1, enabled.
	
	   1 When a client is busy transferring data during a session (a file
	     copy, for example), multicast datagrams are dropped.
	
	  -1 Broadcast datagrams are dropped even if EnableBroadcast is set
	     to 1.
	
	   0 Datagrams are always forwarded. This may slow session traffic.
	
	If all conditions above are correct, the RAS Server is ready to forward the
	datagram to remote RAS clients, as follows:
	
	1. Check MaxDgBufferedPerGroupName. Default is 10.
	
	  Because of the difference between the LAN speed and the asynchronous line
	  speed, datagram traffic must be buffered. The maximum number of datagrams
	  that the RAS server can buffer per group name is controlled by
	  MaxDgBufferedPerGroupName. In the default (10) is used, every 11th datagram
	  is dropped. The maximum is 255. This is a virtual memory parameter, so it is
	  a relatively minor drain on system resources.
	
	2. The RAS server checks to see which clients have the group name registered. It
	  then multiplexes the datagram to each of these remote clients. RAS clients
	  that have NCB_Receive_Datagram posted for that group name receive the
	  datagram.
	
	NOTE: For non-session traffic, set RAS AUTODISCONNECT to 0. Datagram traffic is
	not counted in the auto-disconnect time-out. Only session traffic is counted. 0
	disables auto-disconnecting RAS clients. Also, because of the slow link,
	workstations probably do not need to post that many NCB_Receive_Datagrams. You
	should be able to get by with 2 or 3.
	
	RAS Client Sends a Datagram
	---------------------------
	
	Check NetbiosGatewayEnabled. Default is 1, enabled.
	
	  1 All datagrams sent by remote clients are forwarded onto all transports. The
	  default is all valid networks.
	
	  0 Datagrams can only be received by the RAS server if it has an
	  NCB_Receive_Datagram posted for the given name.
	
	Remote RAS Workstation Posts NCB_Add_Name
	-----------------------------------------
	
	By default, MS LAN Manager and Windows NT post NCB_Add_Name for the computer name
	and user identification of the person logging on.
	
	1. The RAS server posts NCB_Add_Group_Name on all available transports (NBF,
	  TCP/IP, etc.).
	
	   - MaxNames for RAS: There must be enough names to accommodate all the remote
	     clients add request. The default is 255 (the maximum) which should leave
	     plenty of room.
	
	   - MaxNames for transport: Each transport has a MaxNames entry that may need
	     tuning. It should be set high enough to handle all of the local server
	     names plus all of the remote client NetBIOS names. The NBF transport can
	     be configured in Control Panel using the "Maximize Throughput and
	     Connections" setting. This allows names and sessions to be tuned high
	     without any realistic limit. See the Windows NT documentation for
	     information on default names in the section covering RemoteListen.
	
	   - If NCB_Add_Group_Name fails on any transport because another system
	     responds with an AddNameResponse frame (meaning that another system has
	     the group name registered as a unique name), then the group is not added
	     on the server or the client workstation.
	
	2. The RAS server posts RcvDgSubmittedperGroupName number of
	  NCB_Receive_Datagrams for that unique name. This has nothing to do with how
	  many NCB_Receive_Datagrams are posted by the remote client. This is handled
	  by the server only. When a client posts NCB_Add_Group_Name or NCB_Add_Name.
	  the RAS server automatically posts NCB_Receive_Datagram for each name
	  regardless of what the client posts (even if the client does not post
	  anything).
	
	LAN System Sends a Datagram to a Unique RAS Client Name
	-------------------------------------------------------
	
	1. The RAS Server receives the datagram, and places it in a buffer. (There is no
	  parameter to control this buffer: all datagrams are buffered.)
	
	2. A new NCB_Receive_Datagram is posted on the server.
	
	3. The RAS Server forwards the datagram from the buffer to the remote client
	  with the unique name posted.
	
	  NOTE: Unique name datagrams take priority over group name datagrams. They are
	  forwarded to the client before pending group datagrams. NET LOGON uses unique
	  name, directed datagrams that are given priority over group datagrams.
	
	Reference(s)::
	
	See Remote Access Service documentation for the RemoteListen parameter. This
	gives related information on session based traffic.
	
	Additional query words: prodnt advanced server serial comm modem
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
