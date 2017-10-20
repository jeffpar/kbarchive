---
layout: page
title: "Q199808: SMS: Browsing PGC Shares from Win95 or Win98 May Not Be Accurate"
permalink: /kb/199/Q199808/
---

## Q199808: SMS: Browsing PGC Shares from Win95 or Win98 May Not Be Accurate

{% raw %}

	Article: Q199808
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbPGC
	Last Modified: 08-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing a Systems Management Server distribution server containing shared
	applications from within Network Neighborhood, client computers running
	Microsoft Windows 95 or Microsoft Windows 98 may see the contents of a different
	Systems Management Server distribution server.
	
	This does not happen when viewing a drive mapped to the same server.
	
	CAUSE
	=====
	
	When client computers running Windows 95 or Windows 98 are configured to use
	Program Group Control (PGC), Nnp.exe redirects requests for shares listed in the
	Network Applications Database (NAD) to the first available distribution server
	in the NAD list. The servers in the NAD are stored in alphabetical order.
	
	This became evident when placing user-specific files on a distribution server
	local to a group of users. When the users attempted to locate these files, they
	were not there. The files were placed below a share managed by the NAD.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Remove Nnp.exe from the SMS Naming Network Provider in the Windows 95 or
	  Windows 98 Startup registry key
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunServices
	
	  NOTE: This step may cause the Windows 95 or Windows 98 Program Group Control
	  applications to fail if they cannot connect to the specified distribution
	  server listed in the program shortcut.
	
	  -or-
	
	- Create separate packages and user groups for each distribution server. Create
	  a Systems Management Server program group for each package and user group
	  combination. This will assign a dedicated distribution server to the user
	  group, preventing the rerouting to a different server.
	
	  NOTE: This option becomes very difficult to administer as the number of
	  packages and distribution servers grows.
	
	
	Additional query words: prodsms win 9x win9x win95 win98
	
	======================================================================
	Keywords          : kbsms120 kbPGC 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
