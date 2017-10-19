---
layout: page
title: "Q200386: SMS: NetWare Server Roles in SMS 2.0"
permalink: /kb/200/Q200386/
---

## Q200386: SMS: NetWare Server Roles in SMS 2.0

	Article: Q200386
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbBindery kbCAP kbNDS kbOSNovell
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server (SMS) 2.0 supports NetWare servers in both Bindery
	mode and in an NetWare Directory Services (NDS) architecture.
	Running Bindery emulation and NDS on one Novell server requires the usage of two
	separate volumes. One volume contains the Client Access point, Distribution
	point, and logon point for the Bindery Emulation Site System, and one volume
	contains the Client Access point, Distribution point, and logon point for the
	NDS Site System. This is necessary because the Clicore.exe file is different for
	NDS and Bindery and is overwritten if both Site Systems point at the same
	volume.
	
	NetWare servers can participate as site systems in the following roles:
	
	- Client Access Points: A Client Access Point (CAP) is a site system that acts
	  as a communication point between the site server and the clients assigned to
	  the site. You need at least one CAP in your site. When you install Systems
	  Management Server, the site server automatically becomes a client access
	  point. You can create additional CAPs to distribute the workload and to serve
	  as backup CAPs in the event that one CAP is unavailable.
	
	  If there are clients using NetWare in the Systems Management Server site, you
	  might want to provide a CAP on the appropriate type of NetWare volume (NDS or
	  Bindery). Alternatively, NetWare clients can use CAPs running Windows NT
	  Server if both NetWare and Windows redirectors are configured on the clients.
	  In addition, A CAP can be a Windows NT Server computer, a Windows NT Server
	  share, a NetWare NDS volume, or a NetWare Bindery volume.
	
	- Distribution Points: A distribution point is a site system that stores
	  package files so clients can access them during the software distribution and
	  installation process. Because distribution points handle significant client
	  network activity, it is generally better to assign this role to one or more
	  computers other than the site server.
	
	  If there are clients using NetWare in the Systems Management Server site, you
	  can provide a distribution point on the appropriate type of NetWare volume
	  (NDS or Bindery). However, NetWare clients can use distribution points
	  running Windows NT Server if both NetWare and Windows redirectors are
	  configured on the clients.
	
	  A distribution point can be a Windows NT Server computer, a Windows NT Server
	  share, a NetWare NDS volume, or a NetWare Bindery volume.
	
	- Logon Points: Logon points are the initial point of contact between clients
	  and the Systems Management Server environment. When a client logs on to a
	  logon point, the client runs the logon script, determines which site it
	  belongs to, and finds a CAP for installation. In Windows NT, Systems
	  Management Server installs logon software onto the domain logon servers
	  within your network so you do not need to plan for separate servers to act as
	  logon points. NetWare NDS and Bindery volumes are also installed as logon
	  points in their environments.
	
	A NetWare server cannot participate in the following SMS server roles:
	
	- Systems Management Server Site Server Role
	
	- Site Database Server
	
	- Component Server Role
	
	- Software Metering Server Role
	
	- Software Metering Database Server Role
	
	- Systems Management Server Administrator Console Role
	
	- Systems Management Server Provider Role
	
	MORE INFORMATION
	================
	
	For more information about client access points, see Chapter 14, "Distributing
	Software."
	
	Additional query words: prodsms nwroles
	
	======================================================================
	Keywords          : kbsms200 kbBindery kbCAP kbNDS kbOSNovell 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
