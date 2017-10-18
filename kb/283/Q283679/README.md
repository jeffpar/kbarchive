---
layout: page
title: "Q283679: Information on the IIS File Transmission Protocol (FTP) Service"
permalink: kb/283/Q283679/
---

## Q283679: Information on the IIS File Transmission Protocol (FTP) Service

	Article: Q283679
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) with File Transmission Protocol (FTP)
	installed supports the following connection types:
	
	- Active-mode FTP
	
	- Passive-mode FTP
	
	This article provides information about FTP connections with each of these modes.
	
	MORE INFORMATION
	================
	
	The IIS-based FTP service (MSFTPSVC) supports both active and passive mode
	connections, depending on the method that is specified by the client. IIS does
	not support disabling either active or passive mode connections, due to the lack
	of such a feature in RFC 959. Unlike HTTP and most other protocols used on the
	Internet, the FTP protocol uses a minimum of two connections during a session: a
	half-duplex connection for control, and a full-duplex connection for data
	transfer. By default, TCP port 21 is used on the server for the control
	connection, but the data connection is determined by the method that the client
	uses to connect to the server.
	
	Active-mode FTP Connections:
	
	Active-mode FTP is sometimes referred to as "client-managed" because the client
	sends a PORT command to the server (over the control connection) that requests
	the server to establish a data connection from TCP Port 20 on the server, to the
	client, using the TCP port that is specified by the PORT command.
	
	The FTP client sends the PORT command to the FTP server in the following format:
	
	  PORT 192,168,0,3,19,243
	
	where the first four comma-seperated values correspond to the octets of the
	client's IP address, and the fifth and sixth values are the high- and low-order
	bits of the 16-bit port number. To convert the high- and low-order bits into a
	(decimal) port number, multiply the fifth value by 256 and add the sixth value
	to it. In the example above, the TCP port (in decimal) is (256 x 19) + 243 =
	5107, so the client is instructing the server to open a data connection to
	192.168.0.3:5107. By default, the FTP client chooses an ephemeral port for the
	data connection port. An ephemeral port is a port that is randomly chosen from
	the available ports between 1024 and 65535.
	
	NOTE: In Windows NT 4.0 and Windows 2000, the valid default ephemeral port range
	is 1024-5000. Increasing the ephemeral range in Windows NT 4.0 and Windows 2000
	requires adding a value to the system registry. For additional information on
	increasing the default ephemeral range, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q196271 Unable to Connect from TCP Ports Above 5000
	
	The following is a typical sequence for an active-mode FTP connection:
	
	+-----------------------------------------------------------------------+
	| Instruction                   | Sent From         | Sent To           | 
	+-----------------------------------------------------------------------+
	| USER MyUserName               | 192.168.4.29:8190 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------+
	| PASS MyPassword               | 192.168.4.29:8190 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------+
	| CWD /                         | 192.168.4.29:8190 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------+
	| 250 CWD command successful.   | 10.0.0.10:21      | 192.168.4.29:8190 | 
	+-----------------------------------------------------------------------+
	| PORT 192,168,4,29,31,255      | 192.168.4.29:8190 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------+
	| 200 PORT command successful.  | 10.0.0.10:21      | 192.168.4.29:8190 | 
	+-----------------------------------------------------------------------+
	| LIST                          | 192.168.4.29:8190 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------+
	| <file listing is transferred> | 10.0.0.10:20      | 192.168.4.29:8191 | 
	+-----------------------------------------------------------------------+
	| 226 Transfer complete.        | 10.0.0.10:21      | 192.168.4.29:8190 | 
	+-----------------------------------------------------------------------+
	
	Passive-mode FTP Connections:
	
	Passive-mode FTP is sometimes referred to as "server-managed", because after the
	client issues a PASV command, the server responds to that PASV instruction with
	one of its ephemeral ports that will be used as the server-side port of the data
	connection. After a data connection command is issued by the client, the server
	connects to the client using the port immediately above the client-side port of
	the control connection. The following is a typical sequence for a passive-mode
	FTP connection:
	
	+-----------------------------------------------------------------------------------------+
	| Instruction                                     | Sent From         | Sent To           | 
	+-----------------------------------------------------------------------------------------+
	| USER MyUserName                                 | 192.168.4.29:7971 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------------------------+
	| PASS MyPassword                                 | 192.168.4.29:7971 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------------------------+
	| CWD /                                           | 192.168.4.29:7971 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------------------------+
	| 250 CWD command successful.                     | 10.0.0.10:21      | 192.168.4.29:7971 | 
	+-----------------------------------------------------------------------------------------+
	| PASV                                            | 192.168.4.29:7971 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------------------------+
	| 227 Entering Passive Mode (192,168,4,29,9,227). | 10.0.0.10:21      | 192.168.4.29:7971 | 
	+-----------------------------------------------------------------------------------------+
	| LIST                                            | 192.168.4.29:7971 | 10.0.0.10:21      | 
	+-----------------------------------------------------------------------------------------+
	| <file listing is transferred>                   | 10.0.0.10:2531    | 192.168.4.29:7972 | 
	+-----------------------------------------------------------------------------------------+
	| 226 Transfer complete.                          | 10.0.0.10:21      | 192.168.4.29:7971 | 
	+-----------------------------------------------------------------------------------------+
	
	Common Problems Encountered With FTP:
	
	The most common problem encountered when you use FTP over the Internet results
	when you attempt transfers through a Network Boundary Securing Device (NBSD)
	such as a proxy, firewall, or Network Address Translation (NAT) device. In most
	cases the NBSD allows the control connection to be established over TCP 21 (that
	is, the user can successfully log on to the FTP server), but when the user
	attempts a data transfer such as DIR, LS, GET, or PUT, the FTP client appears to
	stop responding because the NBSD is blocking the data connection port that is
	specified by the client. If the NBSD supports logging, you can verify port
	blocking by reviewing the deny/reject logs on the NBSD.
	
	In addition to causing problems for NBSD administrators, FTP is commonly
	misunderstood as a secure means for transferring data, because the FTP server
	can be configured to require a valid username and password combination prior to
	granting access. Users should be aware that neither the credentials specified at
	logon nor the data itself is encrypted or encoded in any way. All FTP data can
	be easily intercepted and analyzed by any station on any network between the FTP
	client and FTP server.
	
	FTP Clients Provided by Microsoft:
	
	The following table lists the FTP clients provided by Microsoft, and the
	connection mode that each client supports:
	
	+----------------------------------------------------------+
	| FTP Client                        | Transfer Mode        | 
	+----------------------------------------------------------+
	| Command-line                      | Active (non-passive) | 
	+----------------------------------------------------------+
	| Internet Explorer 5.1 and earlier | Passive              | 
	+----------------------------------------------------------+
	| Internet Explorer 5.5 and later   | Both                 | 
	+----------------------------------------------------------+
	| FrontPage ver.1.1 to Windows XP   | Active               | 
	+----------------------------------------------------------+
	
	File Transfer Alternatives:
	
	Because of the NBSD configuration issues and security concerns with FTP, several
	alternatives to standard FTP are used. One common alternative to FTP is the use
	of HTTP as a file transfer method, because most firewalls allow HTTP connections
	over TCP 80 and HTTPS connections over TCP 443. Although Microsoft has supported
	HTTP-based file transfers for several years in products such as the FrontPage
	Server Extensions and the Posting Acceptor, the recognized standard for HTTP
	file transfers is WebDAV, the HTTP extensions for distributed authoring and
	versioning. Defined by RFC 2518, WebDAV is built into IIS 5.0, and allows the
	user to use WebDAV shares (that is, folders that are published on a
	WebDAV-enabled Web server) in much the same way that network shares are used,
	provided that the connection is made by a client that is capable of
	communicating with WebDAV (such as Internet Explorer 5.0 and later).
	
	NOTE: For more information on RFC 2518, see the following Web site:
	
	  RFC 2518
	  http://rfc.net/rfc2518.html
	
	
	Because the FTP service in IIS does not support FTP over Secure Sockets Layer
	(SSL), if secure communications are important, and FTP is the desired transfer
	protocol (as opposed to using WebDAV over SSL), consider using FTP over an
	encrypted channel such as a Virtual Private Network that is secured with
	Point-to-Point Tunneling Protocol or IPSec. For more information on FTP over
	SSL, see RFC 2228.
	
	REFERENCES
	==========
	
	Additional FTP Resources
	
	The following resources contain more in-depth information about the File Transfer
	Protocol service:
	
	  RFC 959 - File Transfer Protocol (FTP)
	  http://rfc.net/rfc959.html
	
	  Running Microsoft<AE> Internet Information Server
	  http://mspress.microsoft.com/books/1270.htm
	  Authors: Leonid Braginski and Matthew Powell
	  ISBN: 1-57231-585-7
	  Publisher: Microsoft Press, July 1998
	
	For more information about the File Transfer Protocol, see the "FTP Reviewed"
	article on the following Codetalker Web site:
	
	  http://www.codetalker.com/whitepapers/FTP-review.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	WebDAV, WebFolder, and MSIPP Resources
	
	The following resources contain more in-depth information about WebDAV,
	WebFolders, and the Microsoft Internet Publishing Provider:
	
	  Distributed Authoring and Versioning Extensions for HTTP Enable Team
	  Authoring
	  http://www.microsoft.com/msj/defaulttop.asp?page=/msj/0699/dav/davtop.htm
	
	  IETF WEBDAV Working Group
	  http://www.ics.uci.edu/pub/ietf/webdav/
	
	  WebDAV in 2 Minutes
	  http://www.fileangel.org/docs/DAV_2min.html
	
	  MSDN Web Storage System Center
	  http://msdn.microsoft.com/WSS/
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q290111 HOWTO: Move or Copy Folder Items with WebDAV
	
	  Q245359 HOWTO: Open Documents Using Internet Publishing Provider
	
	  Q248501 SAMPLE: Using Rosebud.exe with OLE DB Provider for Internet
	  Publishing from Visual C++
	
	  Q195851 How to Install and Use Web Folders in Internet Explorer 5
	
	Resources for Securing Network Connections
	
	The following resources contain more in-depth information on how to secure an IP
	network, which can provide additional security to protect information that is
	transmitted by using FTP:
	
	  Point-to-Point Tunneling Protocol
	  http://www.microsoft.com/windows2000/techinfo/reskit/samplechapters/inbe/inbe_vpn_naxe.asp
	
	For more information, see the following articles in the Microsoft Knowledge
	Base:
	
	  Q161410 How to Set Up a Private Network Over the Internet Using PPTP
	
	  Q231585 Overview of Secure IP Communication with IPSec in Windows 2000
	
	Additional query words: iis 5 vpn pptp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
