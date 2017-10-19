---
layout: page
title: "Q150381: Windows NT Internet Explorer 1.5 Overview and Release Notes"
permalink: /kb/150/Q150381/
---

## Q150381: Windows NT Internet Explorer 1.5 Overview and Release Notes

	Article: Q150381
	Product(s): Internet Information Server
	Version(s): 1.0,1.5,3.5,3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Internet Information Server version 1.0 
	- Microsoft Internet Explorer version 1.5 for Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	- Overview of Internet Explorer System Requirements Download Instructions
	
	- LAN Installations TCP/IP and ISP Installations Release Notes
	
	Overview
	--------
	
	The Microsoft Internet Explorer 1.5 for Windows NT is an early release
	primarily intended for users of Microsoft Windows NT versions 3.1, 3.5 or
	3.51 who are connected to a local area network (LAN). This product will
	enable you to browse and view HTML documents on the network, in addition to
	documents on the World Wide Web or Internet, provided your network is
	connected to the Internet. Other services, such as Gopher and FTP, are also
	available.
	
	If you are not on a LAN, but have an existing TCP/IP connection, Remote
	Access Services (RAS) or a SLIP/PPP account with an Internet service
	provider (ISP), you can also use this product. Instructions for installing
	Internet Explorer 1.5 for Windows NT on your system are provided below.
	Also, future versions of Internet Explorer will include all the software
	you need to establish new accounts (TCP/IP protocol stack and ISP account
	registration software).
	
	System Requirements
	-------------------
	
	- TCP/IP Stack
	  A TCP/IP network protocol stack is required to access the Internet. As
	  mentioned above, this version of Internet Explorer requires that these
	  components be installed before you run Internet Explorer.
	
	- Network Connection
	  A SLIP/PPP, direct, or other Winsock-compatible network connection is required
	  to access the Internet through an ISP. As mentioned above, this version of
	  Internet Explorer requires that these components be installed before you run
	  Internet Explorer.
	
	Download and Installation Instructions
	--------------------------------------
	
	1. Starting at http://www.microsoft.com/ie/ choose "Free Microsoft Internet
	  Explorer" and then your OS and platform.
	
	2. Click the link that is applicable to your platform and save the file on your
	  hard disk.
	
	3. In File Manager, double-click the downloaded file (e.g., msie15i386.exe) to
	  begin the install process.
	
	4. Read the notes below for LAN installations and for installing with existing
	  TCP/IP connections.
	
	5. Run Internet Explorer.
	
	LAN Installations
	-----------------
	
	After completing the steps outlined above, you should be ready to use
	Internet Explorer over your LAN. If you encounter any problems, consult
	your network administrator.
	Proxy servers can also be used, provided they are CERN compliant. To enable
	use of a proxy server, choose the View menu in Internet Explorer, and then
	choose Set Proxy Server. Then check the Use Proxy Server box. Type the
	proxy server name in the location provided. name and port number of your
	proxy server.
	
	Installations with Existing TCP/IP Connections and ISP Accounts
	---------------------------------------------------------------
	
	Internet Explorer has been tested with several of the most popular Internet
	access products available today. If it is configured properly, you should
	be able to use the TCP/IP stack and dialer (via wsock32.dll) provided with
	these products to connect through your ISP. In general, all that is
	required is that you configure your PATH command in  Autoexec.bat so that
	Internet Explorer can find the wsock32.dll file you are using to connect to
	the Internet.
	
	Release Notes
	-------------
	
	Microsoft Internet Explorer 1.5 for Windows NT does not provide all of the
	features and functionality included in the Internet Explorer 2.0 for
	Windows 95. This includes:
	
	- No inline video
	
	- No background sounds
	
	- No table backgrounds
	
	- No marquee
	
	- No Internet shortcuts
	
	- No SSL or RSA security (No NT\Challenge Response Authentication)
	
	[For additional information on this last item and Microsoft's Internet
	Information Server see "Q146815: Using Internet Information Server with
	Windows NT Authentication" and "Q142868: IIS:Authentication & Security
	Features".]
	
	For additional information on the various Internet Explorer versions and
	available platforms, start at http://www.microsoft.com/ie.
	
	
	Additional query words: prodiis
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbiisSearch kbIEsearch kbiis100 kbZNotKeyword2 kbIENT351Search kbZNotKeyword3 kbIE150WinNT351
	Version           : :1.0,1.5,3.5,3.51
	
	=============================================================================
	
