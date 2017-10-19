---
layout: page
title: "Q234484: SMS: How to Remove and Rebuild SMS 2.0 Secondary Sites"
permalink: /kb/234/Q234484/
---

## Q234484: SMS: How to Remove and Rebuild SMS 2.0 Secondary Sites

	Article: Q234484
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200 sms
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	In Systems Management Server (SMS) 2.0, if a secondary site is in need of a site
	reinstallation because of the changing of hardware or other issues, it is
	important to take specific measures to ensure that the site removal does not
	cause any problems for clients during the rebuild or afterwards. The following
	procedure provides an SMS administrator with the proper process to remove a
	secondary site. This article includes the following topics:
	
	- How to Remove the Secondary Site
	
	- How to Rebuild the Secondary Site
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	How to Remove the Secondary Site
	--------------------------------
	
	1. Collect the secondary site configuration information. On the primary site,
	  use the Systems Management Server MMC to note any configurations of the
	  secondary site that will be moved and could affect clients while the site is
	  being rebuilt. The following settings are critical:
	
	   - Site Boundaries
	
	   - Accounts (you may want to create an additional client connection account
	     as described in Q237759)
	
	   - Addresses
	
	   - Address Account
	
	   - Client Agents (Each Enabled/Disabled)
	
	   - Client Installation Methods
	
	   - Discovery Methods
	
	2. Remove the site boundaries and permit at least 24 hours for the clients to
	  uninstall. This is to ensure that all of the client software is uninstalled
	  prior to the new secondary site installation. Clients will check the CAP
	  every 23 hours for the site configuration file. At that time, the client will
	  "see" that the site boundaries no longer match with their subnet and the
	  client software will uninstall. This will avoid a known issue that is
	  documented in the following Microsoft Knowledge Base article that can occur
	  with clients after a site is rebuilt:
	
	  Q227032 Clients Are Using Wrong Instruction After Site Rebuild
	
	3. Delete the secondary site. On the primary site (by using the Systems
	  Management Server MMC), right-click the Site Database (site code)-Site
	  Hierarchy-(Secondary Site Code Of the Secondary Site that you would like to
	  delete), and then click Delete. This starts the Delete Secondary Site Wizard.
	  When you are prompted, select Delete the Site, not Deinstall the Site as if
	  the primary site is truly non-functional because this is unreliable and could
	  cause future conflicts after the site is rebuilt.
	
	4. Delete the secondary site address. Using the Systems Management Server MMC,
	  click on the site database (site code Microsoft) <Site
	  Hierarchy><Primary Site Code> addresses, and then delete the
	  specific address to the secondary site.
	
	  NOTE: Use the following steps on the secondary site unless otherwise noted.
	
	5. Stop all SMS services on the secondary site. Stop the SMS Server services
	  SMS_Executive and SMS_SITE_COMPONENT_MANAGER, and the client service Windows
	  Management (WBEM). Also, check for the SMS_BOOTSTRAP and the
	  SMS_NT_LOGON_DISCOVERY_AGENT service and stop it if it exists.
	
	6. Remove all SMS Services. Use the Windows NT Resource Kit tool Instsrv.exe to
	  remove each service separately by using commands that are similar to the
	  following commands:
	
	  instsrv SMS_EXECUTIVE REMOVE
	  instsrv SMS_SITE_COMPONENT_MANAGER REMOVE
	  instsrv SMS_Bootstrap
	  instsrv SMS_NT_LOGON_DISCOVERY_AGENT
	  instsrv WinMgmt REMOVE (Do not do this on a Windows 2000 system) (Note that
	  this may vary depending on your installed build number)
	
	  Optionally you can use the Srvinstw.exe utility which provides a
	  graphical-user interface for service removal.
	
	7. Remove the SMS client from the secondary site. Using the 20clicln.bat utility
	  from the SMS 2.0 \SUPPORT\RESKIT\BIN\I386\CLEANCLI folder (you must make sure
	  that you are using the correct version of the 20clicln.bat file by either
	  downloading it from the http://www.micosoft.com/smsmgmt Web site, or
	  extracting it from the Support.exe file on the most current version of your
	  SMS source files), remove the SMS 2.0 Client files from the server. Verify
	  that all of the supporting files are in the same folder with 20clicln.bat
	  including Hammer.exe, Kill.exe, and SetEvnt.exe. There are no command-line
	  options for this batch file, just run the 20clicln.bat file from a local
	  command prompt on the secondary site.
	
	8. Remove all SMS-related shares. From a command prompt, first run the "net
	  share" (without the quotation marks) command to discover what shares
	  currently exist on the site to use as a reference point. Then begin removing
	  each of these shares (and others if appropriate) by using the following
	  commands:
	
	  NET SHARE SMS_<S00> /DELETE (Where <S00> is the Site Code)
	  NET SHARE SMSLOGON /DELETE (This is only on domain controllers)
	  NET SHARE SMSPKG <drive letter>$ /DELETE (some sites may contain
	  multiple)
	  NET SHARE SMSPKG <drive letter> /DELETE (possibly left over from SMS
	  1.2)
	  NET SHARE CAP_<S00> /DELETE (Where <S00> is the Site Code)
	  NET SHARE SMS_SITE /DELETE
	
	9. Delete all of the following folders:
	
	  <drive letter>:\SMS
	
	  <drive letter>:\SMSLOGON
	  <drive letter>:\SMSPKGX$
	  <drive letter>:\SMSPKGX
	  <drive letter>:\CAP_S00
	  <drive letter>:\WINNT\SYSTEM32\WBEM (Except on a Windows 2000 system)
	  <drive letter>:\WINNT\SMS_TEMP
	
	10. Delete the following keys in the HKEY_LOCAL_MACHINE branch of the registry:
	
	  Software\Microsoft\WBEM (Except on Windows 2000 systems)
	  Software\Microsoft\SMS
	  Software\Microsoft\NAL
	  System\ControlSet001\Services\WinMgmt (depends on version, not required)
	
	11. At the Secondaries' former Parent site, and all Primary Sites up to the
	  Central Site, run "Preinst /delsite:<Sitecode>" (without the quotation
	  marks) to remove the secondary site from the database. This step makes sure
	  that a rebuilt Secondary Site will have its data passed up the hierarchy to
	  the Central Site when it is restored.
	
	How to Rebuild the Secondary Site
	---------------------------------
	
	1. Reinstall the secondary site. As soon as possible, the secondary site
	  installation should be started to minimize the impact on clients. To speed
	  the installation, view the "Installing a Secondary Site Using SMS Setup"
	  topic on page 221 in chapter 6 of the Administrators Guide. This section
	  explains how to set up the site directly from the CD-ROM. This permits you to
	  bypass the 76 megabyte (MB) network installation package, and install
	  directly from the CD-ROM.
	
	  IMPORTANT: Verify that the proper accounts and passwords have been specified,
	  as this can be extremely difficult to diagnose and repair, possibly requiring
	  you to go through this document again. Testing the account ahead of time by
	  logging into the new primary site by using the specified account and then
	  connecting back to the secondary site's c$, d$, admin$ shares and so on,
	  shares and creating, reading, and writing files and folders, and then doing
	  the same from the secondary back to the primary drives is the key to initial
	  success.
	
	2. Reconfigure the secondary site. Immediately following the installation of the
	  secondary site and the site configuration update being propagated to the
	  parent site, use the SMS Administrator MMC to set each setting that would
	  prevent clients from having to unnecessarily change their configuration.
	
	Additional query words: prodsms site secondary
	
	======================================================================
	Keywords          : kbtool kbsms200 sms 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	
