---
layout: page
title: "Q202338: SMS: Pre-Stage Clients to Avoid Bandwidth Contention in Install"
permalink: /kb/202/Q202338/
---

## Q202338: SMS: Pre-Stage Clients to Avoid Bandwidth Contention in Install

	Article: Q202338
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses specific scenarios where client staging and pre-install
	are useful and presents planning and pre-implementation steps as well as manual
	steps for client pre-installation.
	
	In specific situations, it is appropriate to stage the client installation and/or
	pre-install the Systems Management Server client core components. Staging
	involves carefully planning your Systems Management Server deployment with
	phased installation tactics that help relieve network congestion during
	first-time client install. Pre-installing involves creating a partial Systems
	Management Server client directory structure and copying key files locally to
	the client. If these files are present, the client will not re-copy the files
	upon installation.
	
	MORE INFORMATION
	================
	
	Windows Networking Logon Discovery and Windows Networking Logon Installation are
	often confused. Logon Discovery not only shows you which clients are logging
	into your network, it also turns all clients that log into the network into
	Potential Managed Resources. Managed Resources are clients and servers that have
	one or more of the client agents installed on them, such as Remote Tools or
	Software Distribution. Logon Installation actually turns the potential managed
	resource into a managed resource and installs the optional client agents that
	are enabled for the site.
	
	To turn a client into a potential managed resource, the client Core Components
	are installed at logon if Windows Networking Logon Discovery is enabled even if
	the client is not assigned (within the site boundaries for the site).
	Installation of the Core Components consume approximately 14 megabytes of
	network traffic. This one-time install can be a huge network hit. This applies
	whether or not Windows Networking Logon Installation is enabled.
	
	NOTE: Network Discovery is passive and does not install the client core
	components.
	
	All potential managed resources and managed resources must have the Systems
	Management Server core components installed. There are four ways the core
	components can be installed: Logon Discovery, Logon Installation, SMSMan, and
	client pre-install. There are several ways to stagger installation so that the
	network is not impacted depending on which logon method is used.
	
	Windows Networking Logon Discovery
	----------------------------------
	
	When Logon Discovery is enabled for one or more domains, every client that runs
	the SMSLS will get the client core components installed. Following are several
	possible approaches to minimize network traffic at logon:
	
	1. Manually update user logon scripts. If you want to control the number of
	  clients discovered on a single day, it is possible to manually modify the
	  user logon scripts by completing the following steps:
	
	  a. In the Systems Management Server Administrator's Console, in the Site
	     Hierarchy node under Discovery Methods, edit the Windows Networking Logon
	     Discovery properties.
	
	  b. On the General tab, select Enable Windows Networking Logon Discovery.
	     Ensure the user accounts domain you want to discover clients in is listed.
	
	  c. On the Logon Settings tab, clear Modify User Logon Scripts.
	
	  d. In User Manager for Domains, add SMSLS under Logon Script Name for each
	     user environment profile you want to enable. If your company is already
	     using logon scripts, you can edit one or more of the logon script .bat
	     files by adding SMSLS at the beginning or end.
	
	2. Discover the client manually by using the Systems Management Installation
	  Wizard, or Smsman. Smsman.exe can run silently with a command line argument
	  and a link to it can be sent in an e-mail message or placed on a web page.
	  Smsman will not cut down the amount of network traffic but it's use at
	  staggered times will lessen the impact of the one-time client core component
	  install.
	
	3. Pre-install the client core components. Pre-installing the client is
	  beneficial when setting up a client remote from the Systems Management Server
	  Site; for example if you have a contractor build and supply your desktops.
	  When the client is discovered through logon, it looks for some client
	  components locally on the client, and if it does not find them, it copies
	  them from the server. If it does find them, it bypasses copying them at a net
	  bandwidth savings of 6 megabytes per client. To manually pre-stage the client
	  complete the following steps:
	
	  a. Create a %Windir%\MS\SMS\Core\Bin folder.
	
	  b. Rename SLWNT3 (if the client is 32-bit), Slwnt32a.exe (if you are using an
	     Alpha computer), or SLWNT16 (if the client is 16-bit) to Slownet.exe.
	
	  c. Copy the following files in the %windir%\ms\sms\core\bin directory:
	     Boot32WN, Slownet, Clicore, and Snboot.
	
	Windows Networking Logon Installation
	-------------------------------------
	
	If Logon Installation is also enabled and one or more optional client agents are
	turned on, network bandwidth consumption increases. There are several possible
	approaches to minimizing the network traffic at first-time install. These
	include:
	
	1. Perform discovery first, and a few days or weeks later, enable Logon
	  Installation. Since the client must be discovered to be installed, it is
	  possible to follow any of the staging approaches documented in Windows
	  Networking Logon Discovery above. If network bandwidth consumption is not
	  really a problem, it is possible to break the client installation into two
	  stages by enabling Logon Discovery (with automatic logon script modification)
	  to get the core components installed and a few days later enable Logon
	  Installation to get the client optional components installed. Keep in mind
	  you can turn off Logon Discovery once your clients have been installed.
	
	2. Manually update user logon scripts. If you want to control the number of
	  clients installed on a single day, it is possible to manually modify the user
	  logon scripts:
	
	  a. In the Systems Management Server Administrator's Console, in the Site
	     Hierarchy node under Installation Methods, edit the Windows Networking
	     Logon Installation properties.
	
	  b. On the General tab, check Enable Windows Networking Logon Installation.
	     Ensure the user accounts domain you want to discover clients in is listed.
	
	  c. On the Logon Settings tab, clear Modify user Logon Scripts.
	
	  d. In User Manager for Domains, add SMSLS under Logon Script Name for each
	     user environment profile you want to enable. If your company is already
	     using logon scripts, you can edit the one or more of the logon script .bat
	     files by adding SMSLS at the beginning or end.
	
	3. If Logon Discovery is not being used, you can achieve the same results by
	  turning off all client components until the majority of clients completed
	  install. This will cause only the client core components to be installed
	  initially. You can then turn on the optional components, one at a time,
	  staggered by one or more days. The clients will install the optional
	  components when the Client Configuration Installation Manager (CCIM) runs
	  it's next cycle (default is every 23 hours) or the next time it runs SMSLS.
	  It is possible to manually trigger the CCIM cycle by using the SetEvt tool
	  from the Back Office Resource Kit, volume 4.5.
	
	NOTE: The BackOffice Resource Kit version 4.5 contains an SMS Installer script
	named Clistage.ipf that can be used to install the base components on clients
	before adding them to the site. This script is also known as the Client Preload
	Tool.
	
	REFERENCES
	==========
	
	For additional information, please see also:
	
	The Windows Client 32-bit Discovery and Installation flow in Appendix D of the
	Administrator's Guide describes the client discovery and installation process in
	detail.
	
	  Q225514 NT Logon Server Manager Replicates Files When It Should Not
	
	
	Additional query words: prodsms plannning plan howto smsplan flood smsfaqtop
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
