---
layout: page
title: "Q105153: AppleTalk Architecture Compared to the OSI Model"
permalink: /kb/105/Q105153/
---

## Q105153: AppleTalk Architecture Compared to the OSI Model

{% raw %}

	Article: Q105153
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-2002
	
	SUMMARY
	=======
	
	The architecture of the Apple Computer AppleTalk operating system is designed
	for "plug and play." This article shows how AppleTalk architectural components
	correspond to the OSI Model.
	
	MORE INFORMATION
	================
	
	     OSI Reference                     AppleTalk Architecture
	        Model
	
	7.   Application                                AppleTalk
	                                               Filing      PostScript
	6.   Presentation                               Protocol      |
	                                                   |         |
	                                                   |         |
	                      AppleTalk     (ZIP)      AppleTalk   Printer
	5.   Session          Data Stream   Zone Inf.    Session    Access
	                      Protocol     Protocol     Protocol   Protocol
	                         |            |            |         |  |
	                         |-------+----+---------+  |  +------+  |
	                                 |              |  |  |         |
	                    Routing Table| AppleTalk    AppleTalk    Name
	4.   Transport        Maintenance |   Echo      Transaction  Binding
	                      Protocol   | Protocol     Protocol    Protocol
	                          |      |    |            |           |
	3.   Network         D a t a g r a m  D e l i v e r y  P r o t o c o l
	                          |      |    |            |           |
	                          |      |    |            |           |
	2.   Data Link       L i n k   A c c e s s   P r o t o c o l    (LAP)
	                    This can be either Ether, Token or Local Talk AP
	                          |      |    |            |           |
	                          |      |    |            |           |
	1.   Physical        Ethernet,Token Ring,LocalTalk or other hardware.
	
	PHYSICAL/DATA LINK LEVELS
	-------------------------
	
	The greatest difference at OSI levels 1 and 2 is that AppleTalk developed two
	phases for the data link layer. Phase I and Phase 2 run different protocols and
	although they do exactly the same thing, the information in the frame fields
	changes. The Link Access Protocol, which uses this information, differs for each
	phase to accommodate this change.
	
	A more significant change is that Phase I supported a limited number of
	physical/logical networks and zones, and did not support token ring networks.
	Phase 2 increases the number of addressable nodes allowable per network and
	includes token ring support.
	
	NETWORK LAYER
	-------------
	
	The network layer is implemented using the datagram delivery protocol (DDP),
	which provides communication between sockets--the addressable entities within a
	node. Another protocol, the AppleTalk address resolution protocol (AARP),
	provides address translations between the hardware (data link layer) and the DDP
	(network layer).
	
	TRANSPORT LAYER
	---------------
	
	The transport layer includes four protocols. The routing table maintenance
	protocol (RTMP) updates the Internet routers with current information about the
	network. The AppleTalk echo protocol (AEP) is used for maintenance and delay
	measurements and allows one node to send a datagram to another and have that
	node echo to the source. The name binding protocol (NBP) provides translations
	between character names and the corresponding Internet socket addresses on a
	distributed basis, and without a central database. Finally, the AppleTalk
	transaction protocol (ATP) provides reliable, sequential, socket-to-socket
	transmissions, plus "exactly once" transmissions.
	
	SESSION LAYER
	-------------
	
	Four protocols are also available at the session layer. The AppleTalk session
	protocol (ASP) opens, maintains, and closes sessions between sockets. The
	AppleTalk data stream protocol (ADSP) provides reliable, byte-streamed service
	between two sockets. The zone information protocol (ZIP) maintains an
	Internet-wide map of the zones within the network, and maps zone names to
	specific network numbers. Finally, the printer access protocol (PAP) is used for
	transactions between network devices and Apple LaserWriter printers.
	
	PRESENTATION/APPLICATION LAYERS
	-------------------------------
	
	Two protocols are defined at the presentation and application layers. The first
	is the AppleTalk filing protocol (AFP), which handles remote file access. The
	second is PostScript, a language used by LaserWriter printers for desktop
	publishing.
	
	REFERENCES
	==========
	
	LAN Protocol Handbook, Inside AppleTalk
	
	Additional query words: 1.0a
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
