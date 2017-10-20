---
layout: page
title: "Q132710: Err Msg Installing SQL 6.0: Setup Has Detected SMS Version 1.0"
permalink: /kb/132/Q132710/
---

## Q132710: Err Msg Installing SQL 6.0: Setup Has Detected SMS Version 1.0

{% raw %}

	Article: Q132710
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smsgeneral smsconfig kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install SQL Server 6.0, the following error message appears:
	
	  SMS - SQL Server Conflict
	
	  Setup has detected SMS Version 1.0 is installed on this system.
	  SMS 1.0 will not run correctly with this version of SQL Server.
	  If you wish to proceed with the installation, choose Resume.
	
	CAUSE
	=====
	
	This problem occurs when:
	
	- You are installing or upgrading to SQL Server 6.0 and System Management
	  Server 1.0 is installed.
	
	- The Systems Management Server 1.0 Administration Tools are currently
	  installed, or were previously installed and then removed.
	
	SQL Server 6.0 setup checks the following Window NT registry key to determine if
	Systems Management Server 1.0 is installed:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\SMS\Setup\Version
	
	If you are using build number 631 or below, this problem occurs. If the Systems
	Management Administration Tools are removed from the system, the Version key
	remains in the registry without any values, and SQL Server 6.0 installation
	assumes that Systems Management Server 1.0 exists.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	- Upgrade to Systems Management Server 1.1 before you upgrade from SQL Server
	  4.21 to SQL Server 6.0,
	
	-or-
	
	- If no previous SQL installation exists or the Systems Management Server 1.0
	  Administration Tools were previously installed and removed, choose resume
	  from the SQL conflict dialogue box.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smsgeneral smsconfig kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0,6.0
	
	=============================================================================
	

{% endraw %}
