---
layout: page
title: "Q213106: SMS: CAP or Distribution Point Requires NTFS Partition"
permalink: /kb/213/Q213106/
---

## Q213106: SMS: CAP or Distribution Point Requires NTFS Partition

{% raw %}

	Article: Q213106
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbCAP
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, a client access point (CAP) or distribution
	point requires NTFS partitions to use Windows NT security.
	
	MORE INFORMATION
	================
	
	When you create a CAP or ditribution point the options in the System Management
	Server Administrator's Console are "Windows NT Server" or "Windows NT Share".
	Client computers running Microsoft Windows 95/98 and Windows 2000 Porfessional
	are not considered System Management Role Servers.
	
	Client Access Point
	-------------------
	
	The CAP role provides a communication point between the site server and client
	computers. After you install Systems Management Server client software on a
	computer at a site, the computer contacts a CAP for management information from
	the site. Files, inventory information, and status information collected at
	client computers are forwarded to the CAP. The CAP provides agent configuration
	and setup files to client computers. Because CAPs provide communication among
	client computers and the site server, Microsoft recommends that you assign this
	role to one or more computers other than the site server to reduce the load on
	the site server.
	
	Distribution Point
	------------------
	
	A site computer that stores package files received from a site server performs
	the distribution point role. Client computers contact distribution points to
	obtain programs and files after they have received software distribution
	advertisements from a CAP. A distribution point can be a Windows NT share, a
	Windows NT Server, or a Novell NetWare volume. If you plan to provide a large
	number of packages to a site's client computers, Microsoft recommends that you
	assign this role to one or more computers other than the site server.
	
	Additional query words: prodsms win95 win98 win9x dp
	
	======================================================================
	Keywords          : kbCAP 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
