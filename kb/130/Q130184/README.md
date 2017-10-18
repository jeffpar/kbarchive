---
layout: page
title: "Q130184: Changing From Auto to Manual Logon Scripts In SMS"
permalink: kb/130/Q130184/
---

## Q130184: Changing From Auto to Manual Logon Scripts In SMS

	Article: Q130184
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbSCMan smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Systems Management Server to automatically configure user logon
	scripts, and then disable the feature and set up scripts manually, the Site
	Configuration Manager removes it's script files from the primary domain
	controller's REPL$\SCRIPTS directory.
	
	CAUSE
	=====
	
	Site Configuration Manager records on a domain basis if it has previously
	modified logon scripts at any time, even if the auto-script feature is currently
	disabled.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SOFTWARE\Microsoft\SMS\Sites\<sitecode>\Domains\<domain>\Role
	
	3. The setting for Role is based on a bit mask of the following:
	
	     ENUMERATED      = 0x0001  Servers are enumerated
	     SERVERLIST      = 0x0002  Servers from user list
	     SCRIPTSMODIFIED = 0x0004  User/system logon scripts have been
	                               modified
	
	  Role is likely 5 (enumerated + modified). If you change it to 1, it will
	  appear to Site Configuration Manager as though it had never touched logon
	  scripts. If you switched to Use Specified Servers, the value will be 6. You
	  can change it to 2 to obtain the same effect.
	
	  SMS 1.2 NOTE: SMS 1.2 introduces a new feature to manage how standalone
	  servers are handled.
	
	  If you want to ignore standalone servers then you OR the Role value by 0x10.
	  So for (enumerated + modified) you would see 0x15. If you see this value just
	  reset Role to 0x11. The goal of this article is to remove the bit
	  SCRIPTSMODIFIED 0x4.
	
	  NOTE: When you switch to Use Specified Servers, NetWare "domains" do not
	  require auto-detect as a prerequisite to automatically configuring logon
	  scripts. If you have NetWare domains, the needed script files could get
	  removed. Consequently, changing the domain role value is a better solution.
	
	4. Shut down and restart the site server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: config prodsms sms configuration login
	
	======================================================================
	Keywords          : kbnetwork kbSCMan smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
