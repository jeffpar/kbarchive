---
layout: page
title: "Q294818: Frequently Asked Questions About Network Monitor"
permalink: kb/294/Q294818/
---

## Q294818: Frequently Asked Questions About Network Monitor

	Article: Q294818
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 17-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article answers frequently asked questions about Network Monitor.
	
	MORE INFORMATION
	================
	
	Introduction:
	
	Network Monitor is a utility that comes with Microsoft Systems Management Server
	and Microsoft Windows 2000 Server. You can use Network Monitor (also known as
	NetMon) to capture and observe network traffic patterns and problems.
	
	Capture Window
	
	When you first start Network Monitor, it displays the Capture window. The Capture
	window includes four frames:
	
	+-----------------------------------------------------------------------------------------------------------------------+
	| Pane Name          | Contents                                                                                         | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Graph              | Graphical representation of current network activity                                             | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Session Statistics | Statistics about current individual network sessions                                             | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Station Statistics | Statistics about sessions sent to or from the computer that is running Network Monitor           | 
	+-----------------------------------------------------------------------------------------------------------------------+
	| Total Statistics   | Summary statistics about network activity that has been detected since the capture process began | 
	+-----------------------------------------------------------------------------------------------------------------------+
	
	Frame Viewer Window
	
	After a Network Monitor trace has been captured, you can view it from within
	Network Monitor immediately through the Frame Viewer window, or you can save it
	to a file for analysis later. Data in the Frame Viewer window is presented in
	three frames, which allow you to view the captured data in varying degrees of
	detail:
	
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Pane Name | Contents                                                                                                                                                                                                                                                                                   | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Summary   | Lists the frames for the captured data in the order in which they were captured, including the time the frame arrived, the source and destination media access control addresses, protocol, a summary description, and the other Source/Destination addresses (for example, IP addresses). | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Detail    | Parses each frame and breaks out protocol information. To display the protocol's property data, click to expand a field in the Detail pane. If you select a line in the detail pane, the associated hexadecimal data is highlighted in the Hex pane.                                       | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Hex       | Displays the content of the selected frame, both in hexadecimal and ASCII format.                                                                                                                                                                                                          | 
	+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	Questions and Answers:
	
	1. Q. Where do I get the Network Monitor tool?
	
	  A. There are two versions of Network Monitor. The full version is shipped with
	  Microsoft Systems Management Server (SMS). A "lite" version is included with
	  Windows NT Server and Windows 2000 Server and contains a subset of the
	  features that are available in the full version.
	
	2. Q. Which version should I use?
	
	  A. It depends on what kind of traffic you need to capture. Both versions of
	  Network Monitor can capture traffic that is sent to or from the host computer
	  (the computer that is running NetMon), including broadcasts and traffic over
	  a dial-up network connection. The full version of Network Monitor also allows
	  you to capture and display any frames from the network segment on which the
	  computer that is running NetMon resides, regardless of whether they are
	  addressed to the host computer.
	
	3. Q. What is the difference between the Network Monitor Agent and Network
	  Monitor Tools and Agent?
	
	  A. The two primary components of Network Monitor are the Network Monitor Agent
	  and the user interface. The Network Monitor Agent monitors the network and
	  passes traffic up to the "program" (the user interface). The Network Monitor
	  Agent can run on any compatible computer while the program is running on a
	  separate computer.
	
	  A computer can only see network traffic that passes across its network
	  segment. Thus, it can be helpful to have a Network Monitor Agent that is
	  running on a network where the problem is occurring, while the Network
	  Monitor user interface runs from (for example) the local area network (LAN)
	  Administrator's computer on a different network segment. The LAN
	  Administrator can then manage the capture and view the captured data from his
	  or her computer, even though the LAN Administrator is not on the segment
	  where the problem is occurring.
	
	4. Q. What security risks are introduced by the use of Network Monitor?
	
	  A. Network Monitor is a "sniffer," namely, it detects problems on the network.
	  Because you can analyze traffic at the frame level, all non-encrypted data is
	  visible in a trace. For example, when you use Microsoft Internet Information
	  Server (IIS) with Basic Authentication, the password is passed as clear text
	  and can be read in a Network Monitor trace.
	
	5. Q. What is the difference between a media access control address and an IP
	  address? How can I distinguish one from another?
	
	  A. A media access control (MAC) address is a unique, 12-digit (48-bit),
	  hexadecimal number that the network interface card (NIC) manufacturer "burns
	  into" a computer's network interface card. On some cards, software can
	  override this number, but the number remains burned into the card. MAC
	  addresses are also referred to as "Hardware Addresses" and "Universally
	  Administered Addresses" (UAAs). When they are overridden, MAC addresses are
	  called "Locally Administered Addresses" (LAAs).
	
	  The media access control is the lowest layer of the network model that
	  contains address information. All frames on a local area network contain a
	  MAC address, regardless of the network protocol in the frame. The same cannot
	  be said about Internet Protocol (IP) addresses, which reside at a higher
	  level of the network model. Non-IP traffic, such as traffic that uses the
	  Novell IPX/SPX protocol, have a MAC address but not an IP address.
	
	  An IP address is a 32-bit address that should be unique across a Transmission
	  Control Protocol/Internet Protocol (TCP/IP) network. IP addresses are usually
	  represented in dotted-decimal notation, which depicts each octet (eight bits)
	  of an IP address as its decimal value and separates each octet with a period
	  (for example, 172.16.255.255).
	
	  When you view captured data in Network Monitor, you can set up a friendly name
	  for either type of address. To do this, right-click the address in the
	  Summary pane of the Frame Viewer window, and then click Edit Address.
	
	6. Q. What if the network adapter card does not support promiscuous mode? What
	  is promiscuous mode anyway?
	
	  A. Promiscuous mode is a state in which a network adapter card copies all the
	  frames that pass over the network to a local buffer, regardless of the
	  destination address. This mode enables Network Monitor to capture and display
	  all network traffic.
	
	  To use Network Monitor, your computer must have a network card that supports
	  promiscuous mode. If you are using Network Monitor Agent on a remote
	  computer, the local workstation does not need a network adapter card that
	  supports promiscuous mode, but the remote computer does.
	
	7. Q. How does Network Monitor interpret the protocols in a trace that has been
	  captured?
	
	  A. Network Monitor includes protocol parsers that look at and interpret key
	  items within the raw data to interpret some of the most common protocols. As
	  new standards and implementations evolve, there will be certain protocols for
	  which NetMon does not contain parsers. Individuals can write parsers for
	  these protocols, or other companies may write some of these parsers (which
	  can be found on the Internet). Some additional parsers are included in the
	  Microsoft Resource kits.
	
	8. Q. Why can't I see HTTP activity, but I can see my calls under a different
	  protocol?
	
	  A. The Network Monitor HTTP parser looks for TCP port 80 to identify a frame
	  as an HTTP frame. If the Web site uses a different port than the standard
	  Port 80 (0x50), the parser does not recognize that the frame contains HTTP
	  data. In the Web Site Properties, on the Web Site tab, check your IIS
	  configuration to see if the TCP Port 80 is designated.
	
	9. Q. What is a three-way handshake?
	
	  A. Before any data can be transmitted through the TCP protocol, a reliable
	  connection must be established. A "three-way handshake" is the process that
	  TCP uses to establish this connection.
	
	  This process cannot be thoroughly described within the context of this
	  article. Briefly, three frames identify a three-way handshake. In the first
	  frame, Computer1 sends a frame to Computer2 with the TCP SYN flag set. In the
	  second frame, Computer2 sends a frame back to Computer1 with both the SYN and
	  ACK flags set. In the third frame, Computer1 sends a frame to Computer2 with
	  the ACK flag set. Any two computers exchange these three packets every time
	  they set up a TCP connection.
	
	10. Q. How does a disconnect appear in a NetMon trace?
	
	  A. A TCP connection can be ended in one of two ways. A "graceful" close uses
	  the TCP FIN flag to show that the sender has no more data to send. The TCP
	  RST flag is used for an ended ("abortive") session disconnection.
	
	11. Q. What is the difference between a Capture filter and a Display filter?
	
	  A. Before you run the Capture, you can set up a Capture filter to determine
	  which frames are stored in the buffer. After the data is stored, you can set
	  up a Display filter to further focus attention on a particular set of
	  frames.
	
	12. Q. Can Capture and Display filters be saved as the default?
	
	  A. To save a Capture or Display filter as the default, you must write over
	  the existing file. The default Display filter file is named Default.df, and
	  the default Capture filter file is named Default.cf. These files are usually
	  located in the WinNT/System32/Netmon/Captures/ folder.
	
	  Alternatively, you can save and load various filter files as needed from
	  within Network Monitor. To do this, click Load on the Capture Filter or
	  Display Filter dialog box.
	
	13. Q. I have received the Capture. How do I make it more readable?
	
	  A. You cannot sort the frames, but you can sort the appearance of the Summary
	  pane. To do this, drag the column names to the preferred order. Also, you
	  can replace an address with a meaningful name. To do this, right-click the
	  address in the Summary pane of the Frame Viewer window, and then click Edit
	  Address.
	
	14. Q. Should I run Network Monitor on the client, the server, or both? What if
	  the client and server are the same computer?
	
	  A. Usually, when client and server applications are on the same computer,
	  there is no network traffic. Thus, you cannot use Network Monitor to
	  understand what is happening between the applications.
	
	  When you are troubleshooting HTTP or other text-based protocols, if you have
	  two computers, and the client is getting back unexpected results, run
	  Network Monitor on the server to see if the server is sending the correct
	  data.
	
	  You may need to trace on both the client and server if a firewall or intranet
	  is causing network problems. In this scenario, you can compare traces more
	  efficiently if you use the Net Time command to synchronize the system time
	  on the computers.
	
	  If you have three computers that communicate in a three-tier architecture,
	  you can run Network Monitor on the middle tier because all traffic crosses
	  that computer.
	
	15. Q. Can the user run other applications while Network Monitor is capturing or
	  filtering the network traffic?
	
	  A. Yes, the overhead of NetMon is minimal, and other applications should not
	  be impacted by Network Monitor.
	
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q169292 The Basics of Reading TCP/IP Traces
	
	  Q231920 How to Filter on TCP Header Information Using Microsoft Network
	  Monitor
	
	  Q232247 Using Network Monitor to Capture Traffic Using a Remote Agent
	
	  Q172983 Explanation of the Three-Way Handshake via TCP/IP
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbSMSSearch
	Version           : :2.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
