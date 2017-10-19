---
layout: page
title: "Q181420: How to Configure Exchange or Other SMTP with Proxy Server"
permalink: /kb/181/Q181420/
---

## Q181420: How to Configure Exchange or Other SMTP with Proxy Server

	Article: Q181420
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Proxy Server version 2.0 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This step by step guide is intended to be an addendum to the Microsoft Proxy
	Server 2.0 release notes.
	
	The Server Proxy feature allows you to place a server, such as a Microsoft
	Exchange Server computer using the Internet Mail Service (Internet Mail
	Connector in Exchange version 4.0), on your private network behind Microsoft
	Proxy Server. With this configuration, an Exchange Server computer can provide
	Internet mail service by using the WinSock Proxy client and relying on features
	of Proxy Server 2.0 for protection. In addition, the Exchange Server computer
	does not require an additional registered Internet IP address.
	
	MORE INFORMATION
	================
	
	How Server Proxy Works
	----------------------
	
	The WinSock Proxy client allows you to bind services or applications to the
	external network interface of the server computer running Microsoft Proxy
	Server. After a service or application is bound on the external network
	interface, it is then available to hosts on the Internet. The Proxy Server
	computer then "listens" for connections on behalf of the service or
	application.
	
	For example, if you bind an internal SMTP/POP mail server to the proxy server,
	mail clients or SMTP servers on the Internet can contact this mail server by
	connecting to the proxy server's Internet IP address. To remote computers on the
	Internet, these services appear to be running on the proxy server computer.
	
	To Set Up the Server Proxy Feature for Exchange Server 4.0 - 5.5
	----------------------------------------------------------------
	
	These instructions must be followed exactly as stated, otherwise Exchange will
	not function with the Server Proxy feature.
	
	1. Install and configure the Microsoft Proxy Server.
	
	2. In the Winsock Proxy properties, select CLIENT CONFIGURATION. Find the
	  "Client Connects to Microsoft Winsock Proxy Server by.." option, and set this
	  to IP ADDRESS.
	
	3. Install the WinSock Proxy (WSP) client on the Exchange Server computer. If
	  the WSP client is already installed, REINSTALL IT. This can be done by
	  connecting to the MSPCLNT share on the proxy server and executing Setup.exe
	  from the root directory.
	
	4. Change the Domain Name Service (DNS) settings on the Exchange Server
	  computer. An Internet DNS server address MUST BE DEFINED on the Exchange
	  Server computer, or the Exchange Server computer will not be able to send
	  mail correctly.
	
	  In Control Panel, double-click Network and then select TCP/IP. Click the DNS
	  tab. Add your Internet Service Provider's DNS server address(es) here. If
	  your DNS server does not seem to function properly, try using the Microsoft
	  Network DNS servers to test name resolution:
	
	  204.255.246.17
	  204.255.246.18
	
	5. Test the WSP client on the Exchange Server computer. Open an MS-DOS prompt
	  window and type:
	
	  ftp ftp.<anyname>.com
	
	You should see a response similar to the following if the WinSock Proxy client is
	functioning:
	
	  Connected to ftp.<anyname>.com.
	  220 ftp <anyname> FTP Service (Version 3.0).
	  User (ftp.<anyname>.com:(none)):
	
	6. After the WinSock Proxy client is working, additional settings are required
	  for server proxy on the Exchange Server computer. You must create two
	  Wspcfg.ini files for the Exchange Server computer.
	
	  Create the first Wspcfg.ini file for use with the Exchange SMTP service. Type
	  the four lines of information below into Notepad and save this file as
	  Wspcfg.ini in the directory where Msexcimc.exe is located.
	
	  NOTE: Do NOT save the file in Unicode format. The SMTP port (25) on the
	  Exchange Server computer will then be bound to the Proxy Server's port 25. On
	  computers with Internet Information Server version 4.0 (IIS), stop and
	  disable the SMTP service from starting. The SMTP service, an optional Windows
	  NT Option Pack service, also uses port 25. Copy only the four lines of text
	  below; do not copy the blank lines above or below.
	
	        [MSEXCIMC]
	        ServerBindTcpPorts=25
	        Persistent=1
	        KillOldSession=1
	
	NOTE: The SMTP port (25) on the Exchange Server computer is then bound to the
	Proxy Server's port 25. Also, the default location of the MSEXCIMC.EXE file is:
	
	  c:\exchsrvr\connect\msexcimc\bin\msexcimc.exe
	
	Create the second Wspcfg.ini file for use with the Exchange information store
	(Store.exe). Copy and Paste the four lines of information below into Notepad (DO
	NOT MANUALLY TYPE THE INFORMATION) and save this file as Wspcfg.ini in the
	directory where Store.exe is located. Also, the default location of store.exe
	follows:
	
	  c:\exchsrvr\bin\store.exe
	
	NOTE: Do NOT save the file in Unicode format.
	
	        [STORE]
	        ServerBindTcpPorts=110,119,143
	        Persistent=1
	        KillOldSession=1
	
	NOTE: Additional ports, such as ports 119 and 143 shown above, can be listed
	because Store.exe provides Network News Transfer Protocol (NNTP) on port 119,
	POP mail on port 110, and so on.
	
	NOTE: When you configure the Exchange Server to use IMAP4 mail or secure mail,
	Exchange Server connects to ports 993 and 995 on the Proxy Server. To make this
	work, edit the Wspcfg.ini file located in the folder where the Exchange
	Store.exe file is located. These port must be bound to the external interface on
	the Proxy Server. The changes to the Wspcfg.ini file are as follows:
	
	  [Store]
	  ProxyBindIp=993:<PROXY_SERVER_ADDRESS>,995:<PROXY_SERVER_ADDRESS>
	  ServerBindTCPPorts=993,995
	  KillOldSession=1
	  Persistent=1
	
	NOTE: For these changes to work properly, you must apply Service Pack 1 to
	Microsoft Proxy 2.0 as well as the solution described in the following article:
	
	  
	
	  Q232588 Winsock Proxy Client Fails to Bind Remotely to Proxy Server Computer
	
	7. Verify that the two Wspcfg.ini files do NOT have a .txt extension appended.
	  This will occur if your Internet Explorer interface settings are set to
	  default values. The file may appear as Wspcfg.ini.txt. Rename the file if
	  necessary.
	
	8. If you are NOT using Access Control on the Winsock Proxy service, go to step
	  10.
	
	  If Access Control is enabled on the Winsock Proxy service, you must grant the
	  user account that starts the Exchange services access to the Proxy server.
	
	  This must be a domain user account, not a local account on the Exchange Server
	  computer. If it is a local account, create a new user account on the domain.
	  Open Control Panel and double-click Services, and then grant the new domain
	  user account logon rights to all of the Exchange services.
	
	9. Give the new domain user account access to the proxy server. In the Winsock
	  Proxy properties, select Permissions and give the new account the Unlimited
	  Access right.
	
	10. Restart the Exchange Server computer.
	
	11. After the Exchange Server computer is restarted, it should automatically be
	  listening on the external interface of the Proxy Server computer.
	
	12. To test connectivity to the Exchange services from a computer that is
	  directly connected to the Internet, do the following:
	
	  a. On the test computer, click Start, and then click Run. Open Telnet.exe.
	
	  b. Select Connect, and then Remote System.
	
	  HOST NAME: External IP address of the proxy server      
	  PORT:        25      
	  TERM TYPE: vt100
	
	  c. After you are connected, you see a blank screen. Press the ENTER key and
	     wait about 30 seconds. You should see a message from the Exchange SMTP
	     service indicating a good setup. If not, re-check your settings.
	
	  d. You can also try port 110 to test the POP service.
	
	To Configure Your DNS Mail Exchange (MX) Record
	-----------------------------------------------
	
	If you are using your Internet Service Provider's (ISP) DNS server, you must
	contact the ISP and ask to add an MX and A record for your domain, so other
	Internet mail servers can contact your Exchange Server computer.
	
	1. Your MX and A DNS resource records must refer to the IP address of the proxy
	  server's external network adapter and NOT the internal IP address of the
	  Exchange Server computer or SMTP server itself.
	
	For example, if your registered Internet domain name is microsoft.com, and your
	internal Exchange Server computer uses a DNS host name of "exchange1", you need
	to use an MX, or mail exchange, record to provide other Internet hosts the name
	of your internal Exchange Server computer. In this case, an MX record added in
	the microsoft.com zone can provide this information as follows:
	
	  microsoft.com IN MX 10 exchange1.microsoft.com
	
	2. You then need to create an A, or address, record for exchange1.microsoft.com
	  that uses an external IP address of the proxy server. If the external IP
	  address of your proxy server is 172.16.0.0, you add the following A record to
	  the microsoft.com zone:
	
	  exchange1.microsoft.com       IN A 172.16.0.0
	
	3. In addition, you can add or create a PTR, or pointer, record to the
	  microsoft.com zone to provide reverse lookup. A valid PTR record to do this
	  is:
	
	  0.0.16.172.in-addr.arpa   IN PTR exchange1.microsoft.com
	
	Testing the Configuration
	-------------------------
	
	To verify that the computer running Microsoft Exchange Server and the computer
	running Proxy Server are configured properly, use the following procedure. If
	you perform each step successfully, the servers are configured properly.
	
	1. Send a message from an e-mail client that is connected to the computer
	  running Microsoft Exchange Server to an e-mail client that is past the
	  computer running Proxy Server.
	
	2. Send a message from an e-mail client that is past the computer running Proxy
	  Server to an e-mail client that is connected to the computer running
	  Microsoft Exchange Server.
	
	3. Use the Telnet tool to connect to the computer running Microsoft Exchange
	  Server and send a message to the server. To do so, follow these steps:
	
	  a. Type "telnet" (without the quotation marks) at a command prompt, and then
	     press ENTER.
	
	  b. On the Connect menu, click Remote System.
	
	  c. In the Host Name box, type the fully qualified domain name (FQDN) of the
	     computer running Microsoft Exchange Server. The FQDN should be in the
	     following format:
	
	  <host>.<domain>.<top-level>
	
	Where <host> is the server's host name, <domain> is the Microsoft
	Exchange Server organization name, and <top-level> is the top-level domain
	name.
	
	For example, "ex1.microsoft.com" (without the quotation marks).
	  d. In the Port box, type 25, and then click Connect. If you can connect to
	     the server, proceed to step E. If you are unable to connect to the server,
	     verify that inbound packet filtering and DNS name resolution are
	     functioning properly, and then try again.
	
	  e. Type the following commands, pressing ENTER after each command:
	
	  helo <host1>.<domain1>.<top-level1>
	  mail from: <user2>@<domain2>.<top-level2>
	  rcpt to: <user1>@<domain1>.<top-level1>
	  data
	  This is a test.
	  .
	  quit
	
	     Where <host1> is the server's host name; <user1>,
	     <domain1>, and <top-level1> are the recipient's user,
	     organization, and top-level domain names; and <user2>,
	     <domain2>, and <top-level2> are the sender's user,
	     organization, and top-level domain names.
	
	  f. Reply to the message you sent in step E.
	
	  g. Reply to the message you sent in step F.
	
	Other Third-Party SMTP Servers
	------------------------------
	
	The server proxy setup instructions above also apply to other third-party SMTP
	mail servers, with the exception of step #6. Other SMTP servers have slightly
	different Wspcfg.ini settings. See Microsoft Knowledge Base article Q177153,
	"Additional Proxy Server 2.0 Configurations." This article contains Wspcfg.ini
	settings for other products, including SMTP servers.
	
	If dynamic packet filtering is enabled on the proxy server (this is recommended),
	the proxy server dynamically opens all necessary ports when they are requested.
	No special configuration is needed.
	
	It is not necessary to configure a DNS address on other proxy clients. This is
	only required on the Exchange Server computer.
	
	Additional query words: xadm proxysvr lotus notes ccmail cc:mail prodprx2
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbProxyServSearch kbProxyServ200
	Version           : :2.0,4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
