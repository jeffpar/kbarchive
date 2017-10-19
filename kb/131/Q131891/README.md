---
layout: page
title: "Q131891: SNA: How to Install Remote Admin and Focus On Remote Domains"
permalink: /kb/131/Q131891/
---

## Q131891: SNA: How to Install Remote Admin and Focus On Remote Domains

	Article: Q131891
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to install SNA Admin for SNA Server 2.x and SNA
	Manager for SNA Server 3.0 and 4.0, and how to use these applications to focus
	on the remote SNA subdomains you want to administer.
	
	NOTE: You can use SNA Admin/SNA Manager to administer a remote SNA Server not
	only over a local area network, but also over a Remote Access Service (RAS)
	link.
	
	MORE INFORMATION
	================
	
	How to Install SNA Admin
	------------------------
	
	To automatically install SNA Admin during the SNA Server Win32 client
	installation (that is, when you install from the SNA 2.x CD-ROM by running
	CLIENTS\WINNT\<processor_type>\SETUP.EXE), select the check box to install
	SNA Admin when prompted.
	
	How to Install SNA Manager
	--------------------------
	
	To automatically install SNA Manager during the SNA Server Win32 client
	installation (that is, when you install from the SNA 3.0 or 4.0 CD-ROM by
	running CLIENTS\WINNT\<processor_type>\SETUP.EXE), select the check box to
	install SNA Server Manager when prompted.
	
	How to Use SNA Admin to Focus On a Remote Domain
	------------------------------------------------
	
	When you run SNA Admin, you can set the focus on a remote domain by choosing the
	Select Domain option from the File menu. In the Select Domain dialog box you can
	type either a remote domain name or a remote computer name:
	
	- If the remote SNA Server is in a Windows NT domain or a SNA Server subdomain
	  (for SNA Server 2.11 or later), enter the domain (or SNA subdomain) name
	  following the Domain prompt:
	
	  "Domain: <remote_domain_name> (for example: Domain: REMOTEDOMAIN)"
	  (without the quotation marks)
	
	  -or-
	
	- If you want to focus on a specific remote computer, type the Windows NT
	  computer name of the remote SNA Server following the Domain prompt:
	
	  "Domain: \\<computer_name> (for example: Domain: \\REMOTESERVER)"
	  (without the quotation marks)
	
	How to Use SNA Manager to Focus On a Remote Domain
	--------------------------------------------------
	
	When you run SNA Manager, you can set the focus on a remote domain by choosing
	the Open Subdomain option from the File menu. In the Open Subdomain dialog box
	you can type either a remote subdomain name or a remote computer name:
	
	- Enter the SNA subdomain name at the Subdomain prompt:
	
	  " Subdomain: <remote_subdomain_name> (for example: Subdomain:
	  REMOTEDOMAIN)" (without the quotation marks)
	
	  -or-
	
	- If you want to focus on a specific remote computer, type the Windows NT
	  computer name of the remote SNA Server following the Subdomain prompt:
	
	  "Subdomain: \\<computer_name> (for example: Subdomain: \\REMOTESERVER)"
	  (without the quotation marks)
	
	NOTE: If you want to connect via TCP/IP sockets to a server in a remote domain,
	you must enter the Windows NT computer name at the Domain or Subdomain prompt,
	since there is no reliable way to dynamically locate remote SNA Servers using
	TCP/IP sockets. In addition, the TCP/IP address for the remote SNA Server can be
	used instead of the computer name (for example: Domain: \\<TCP/IP
	Address>)
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,4.0
	
	=============================================================================
	
