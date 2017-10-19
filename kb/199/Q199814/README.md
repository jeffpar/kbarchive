---
layout: page
title: "Q199814: SMS: Assigning Site System Roles to Distributed Servers"
permalink: /kb/199/Q199814/
---

## Q199814: SMS: Assigning Site System Roles to Distributed Servers

	Article: Q199814
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 25-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can install Systems Management Server 2.0 as a single primary site server.
	However, Systems Management Server 2.0 introduced the concept of site systems, a
	term that is roughly equivalent to helper servers in Systems Management Server
	version 1.2. With site systems, you can assign various system roles to
	distributed servers, thereby reducing the workload of the site server. This
	article summarizes the site system roles and how to assign them. For more
	detailed information about site system roles, see the Systems Management Server
	Administrator's Guide.
	
	The following site system roles can be assigned:
	
	- Site server
	- Site database server
	- Logon point
	- Client access point (CAP)
	- Distribution point
	- Software metering server
	- Software metering database server
	- Systems Management Server provider
	- Component server
	
	CAP, Distribution Point, and Software Metering Server:
	
	By default, the site server is assigned the CAP and distribution point roles
	during installation. You can, however, remove these roles from the site server
	or assign them to other servers.
	
	To create a CAP, distribution point, or software metering server you must have
	modify permissions for the Systems Management Server site. To assign these
	roles, expand Site Database in the SMS Administrator console. Then expand Site
	Hierarchy, site name, and Site Settings. Right-click Site Systems and select
	Properties from the shortcut menu. Click the tab you want to enable, then select
	the check box.
	
	Site Server, Site Database Server, Software Metering Database Server, and SMS Provider:
	
	The site server, site database server, software metering database server, and
	Systems Management Server provider roles must be installed on a computer running
	Windows NT 4.0 or Windows 2000. You assign these roles during Systems Management
	Server setup.
	
	NOTE: Once the site server and Systems Management Server provider roles have been
	assigned, they cannot be reassigned to another site system without rebuilding
	the Systems Management Server 2.0 site.
	
	Logon Point:
	
	NOTE: Logon Points are by default installed on all Domain Controllers within the
	specified domain(s). It is not possible to exclude a particular Domain
	Controller from the role of a Logon Point in Systems Management Server 2.0. This
	functionality which existed in Systems Management Server 1.x has been removed
	from the Systems Management Server 2.0 product.
	
	A logon point is a Windows NT domain controller, Novell NetWare Directory
	Services (NDS) container and volume, or Novell NetWare Bindery server that is
	the initial point of contact between Systems Management Server and the client.
	You specify logon points when you enable client installation and discovery
	methods.
	
	When either Windows networking logon discovery or Windows networking logon client
	installation is enabled, the SMS_Logon_Server_Manager service installs logon
	points on all Windows NT domain controllers for the selected Windows NT
	domains.
	
	When you enable NetWare Bindery or NDS logon discovery or client installation,
	you assign the logon point role to specified NetWare Bindery servers or NDS
	volumes.
	
	Systems Management Server 2.0 installs logon points on selected NetWare Bindery
	servers on the volume with the most free space (at least 50 MB). However, you
	can manually create the \Smslogon directory on the root of the volume you want
	to use as the source for logon point files.
	
	NOTE: Windows NT logon points are not supported on file allocation table (FAT)
	partitions and require an NTFS file system volume with at least 50 MB of disk
	space.
	
	Component Server:
	
	The component server role is not explicitly assigned. For example, when you
	install a sender on a server or assign the CAP role to the server, it becomes a
	site system with the component server role.
	
	MORE INFORMATION
	================
	
	For a listing of supported platforms for all Systems Management Server site
	system roles see Appendix A, "Requirements for Site Servers and Other Site
	Systems," in the Systems Management Server Administrator's Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
