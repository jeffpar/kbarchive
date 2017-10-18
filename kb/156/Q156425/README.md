---
layout: page
title: "Q156425: Importing an LMHOSTS File During Windows NT 4.0 Setup"
permalink: kb/156/Q156425/
---

## Q156425: Importing an LMHOSTS File During Windows NT 4.0 Setup

	Article: Q156425
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	As with Windows NT 3.x, an LMHOSTS file can be imported during installation to
	enable a computer running Windows NT Workstation 4.0 or Windows NT Server 4.0 to
	join a domain across a router when WINS is not available to facilitate name
	resolution. The TCP/IP configuration options presented during setup depend on
	whether DHCP client support is selected on the client.
	
	MORE INFORMATION
	================
	
	If the TCP/IP protocol is selected in the "Installing Windows NT Networking"
	phase of Windows NT Setup, the user is prompted with the question:
	
	  If there is a DHCP server on your network, TCP/IP can be configured to
	  dynamically provide an IP address. If you are not sure, ask your System
	  Administrator. Do you wish to use DHCP? Yes/No.
	
	If the YES option is selected, the TCP/IP configuration dialog is bypassed, along
	with the ability to configure the following:
	
	- Import an LMHOSTS file.
	
	  For more information, see the following articles in the Microsoft Knowledge
	  base:
	
	  ARTICLE-ID: Q101927
	  TITLE : The Lmhosts File for TCP/IP in Windows NT
	
	  ARTICLE-ID: Q180094
	  TITLE : How to Write an LMHOSTS File for Domain Validation
	
	  ARTICLE-ID: Q180099
	  TITLE : Troubleshooting LMHOSTS Name Resolution Issues
	
	- Manually specify WINS server address (useful if you want multiple domain
	  controllers to register with the same WINS server).
	
	- Enable TCP/IP routing.
	
	- Define DNS address and domain name.
	
	The TCP/IP configuration information can be configured with DHCP enabled by
	clicking the "Back" button two times from the following dialogue box:
	
	  Windows NT is now ready to start the network so that you can complete the
	  installation of networking. Click Next to start the network. Click Back to
	  stop the network if it is running.
	
	Click the Back button two times to go back to the TCP/IP Properties screen. Here,
	you can choose to import the LMHOSTS file.
	
	Unlike previous versions of Windows NT, the LMHOSTS file can be accessed from any
	locally available device (floppy disk drive, hard disk drive, CD-ROM drive)
	during setup instead of the root directory of a:\.
	
	NOTE: After the LMHOSTS file has been imported and networking has been
	initialized, it cannot be reimported. Even though it is possible to back up and
	tell the installation process to reimport LMHOSTS, it will not be written to the
	cache. If the wrong LMHOSTS file is imported (for whatever reason) the
	installation will have to be restarted from the very beginning. There is also no
	way to remotely purge and reload the cache.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
