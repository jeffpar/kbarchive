---
layout: page
title: "Q171338: SMS: Preparing for a Systems Management Server Upgrade"
permalink: /kb/171/Q171338/
---

## Q171338: SMS: Preparing for a Systems Management Server Upgrade

	Article: Q171338
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup smshowto
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Upgrading a site that is not in a functioning, healthy state may cause serious
	problems, and may require a reinstallation. This article outlines recommended
	procedures for upgrading a Systems Management Server site from version 1.1 to
	1.2 or for applying a service pack. Following these procedures should prevent
	problems from occurring.
	
	MORE INFORMATION
	================
	
	The following steps should be performed before all Systems Management Server
	upgrades (including the application of service packs) are performed:
	
	1. Read the Readme.txt files, release notes, and all .txt files that accompany
	  the service pack or the upgrade CD.
	
	2. Read chapter 8, "Upgrading," of the Systems Management Server 1.2
	  Installation and Configuration Guide.
	
	3. Ensure that the Systems Management Server service account is working, has
	  Domain Admin, Domain Users, Administrator, and the Logon As A Service
	  advanced user rights in all domains participating in the site.
	
	4. Check the Windows NT Application Event log (on the parent site and any
	  children) for connectivity or hierarchy related errors.
	
	5. Back up the following:
	
	   - The Systems Management Server registry key and subkeys found in
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\
	
	  -and-
	
	   - The site control file ...\Sms\Site.srv\Sitecfg.box\Sitectrl.ct0.
	
	  -and-
	
	   - The ...Sms\System.map on the primary site and child secondary sites (if
	     any exist).
	
	6. Back up the site with a full database dump and directory backup.
	
	7. Use Network Monitor to check the network usage and bandwidth, and do the
	  upgrade during non-busy hours.
	
	8. VERY IMPORTANT: Perform a site reset at every primary site (from within
	  Systems Management Server Setup) and stop and restart the Site Configuration
	  Manager service on the all child Secondary sites (if any).
	
	9. Ensure that SQL Server is configured properly. For more information on SQL
	  Server configuration, refer to the following article in the Microsoft
	  Knowledge Base:
	
	  Q166244 SMS: SQL Server Tuning Parameters for Systems Management Server
	
	10. Ensure that the transaction log and the Systems Management Server database
	  is not full. If necessary, increase the log size, database size, tempdb, or
	  device size before upgrading.
	
	If there are child secondary sites, also do the following:
	
	1. Ensure connectivity from the parent to the child and visa versa with Net
	  View, and so on.
	
	2. Check that ALL secondary sites are active by looking at the status screen in
	  the site properties in the Systems Management Server Administrator program.
	  The Hman.log file should show all sites active (status 1). This is very
	  important because if one secondary site is not active, the upgrade will be
	  delayed or may fail.
	
	Additional Notes
	----------------
	
	- Systems Management Server 1.2 Service Pack 2 introduced a switch to delay the
	  automatic upgrade of child secondary sites. For more information, please
	  refer to the service pack's Readme.txt file.
	
	- For more information on secondary site installation and upgrades, visit the
	  following Web site:
	
	  http://www.microsoft.com/smsmgmt/
	
	  When you are on the Web site, click "Deployment & Support" and then click
	  "Technical Papers".
	
	- It may be necessary to reinstall the SQL Server service pack after applying
	  the Systems Management Server service pack. Systems Management Server 1.2
	  Service Pack 2 overwrites some SQL Server service pack files.
	
	Additional query words: prodsms SP1 SP2 SP
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup smshowto 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
