---
layout: page
title: "Q191314: Installing Outlook on the Small Business Server"
permalink: /kb/191/Q191314/
---

## Q191314: Installing Outlook on the Small Business Server

{% raw %}

	Article: Q191314
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:97; winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Outlook client is not installed by default on a BackOffice Small Business Server
	(SBS). The following article describes the proper way to install Outlook on the
	SBS server. There are different considerations for Outlook 97 and Outlook 98.
	
	MORE INFORMATION
	================
	
	Installing Outlook 97
	---------------------
	
	Outlook 97 can be installed on both SBS 4.0 and 4.0a (SP1). For best results the
	following steps should be used:
	
	1. On the SBS computer, click Start, point to Settings, and then click Control
	  Panel.
	
	2. In Control Panel, double-click Services.
	
	3. Select Microsoft Exchange System Attendant.
	
	4. Click Stop (this stops Exchange Server). Do the same for Microsoft Fax
	  Server.
	
	5. From Windows Explorer, go to the following folder:
	
	  c:\SmallBusiness\Clients\ms\Outlook\i386
	
	6. Run Setup and complete the setup process.
	
	7. After setup completes, double-click Services in Control Panel.
	
	8. Start the following Microsoft Exchange Services:
	
	  System Attendant
	  Directory
	  Store
	  Message Transfer Agent
	  Internet Mail Service (if this was previously running)
	  Microsoft Fax Server
	
	  Outlook will acquire any previous Exchange profiles.
	
	Installing Outlook 98
	---------------------
	
	Outlook 98 can only be installed on SBS 4.0a (SP1). This is because Outlook 98
	requires Internet Explorer 4.01 or later and SBS 4.0 is only compatible with
	Internet Explorer 3.02. To verify the SBS version, select Start and then click
	Manage Server. Select "About Microsoft BackOffice Small Business Server." Under
	Product ID, the version installed is listed.
	
	For best results, the following steps should be used for Small Business Server
	4.0a:
	
	1. On the SBS computer, click Start, point to Settings, and then click Control
	  Panel.
	
	2. In Control Panel, double-click Services.
	
	3. Select Microsoft Exchange System Attendant.
	
	4. Click Stop (this stops Exchange Server). Do the same for Microsoft Fax
	  Server.
	
	5. Select your installation source for Outlook 98 (compact disc, Internet,
	  other).
	
	6. Run Setup.
	
	7. Specify Outlook (not Outlook Express), Exchange, or "none of the above" as
	  previous email client.
	
	8. On the Installation Options page, select the level to install.
	
	9. On the E-mail Service Options page, select Corporate or Workgroup. Do NOT
	  select Internet Mail or None.
	
	10. Complete the installation.
	
	11. If the system needs to be restarted, restart it and skip to step 14
	
	12. After setup completes, double-click Services in Control Panel.
	
	13. Start the following Microsoft Exchange Services:
	
	  System Attendant
	  Directory
	  Store
	  Message Transfer Agent
	  Internet Mail Service (if this was previously running)
	  Microsoft Fax Server
	
	14. Outlook will acquire any previous Exchange profiles.
	
	If your Small Business Server is 4.0 you must update it to SP1. For additional
	information on updating your SBS 4.0 computer, please see the following article
	in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q179729
	  TITLE : Upgrading BackOffice Small Business Server from 4.0 to 4.0a
	
	If Outlook 98 Was Installed on an SBS 4.0 server:
	
	If you have already installed Outlook 98 on a SBS 4.0 system, everything on the
	server should work except the Manage Server console. To bring the console back,
	two options are available:
	
	Option 1 (Recommended):
	
	Apply Small Business Server Service Pack 1 upgrade. This is available through
	Microsoft on compact disc for the cost of shipping, or on TechNet, but it is not
	downloadable.
	
	Use the steps in the following article in the Microsoft Knowledge Base to upgrade
	to SP1.
	
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q179729
	  TITLE : Upgrading BackOffice Small Business Server from 4.0 to 4.0a
	
	After the server has been upgraded to 4.0a, follow the steps in the "Installing
	Outlook 98" section to install Outlook 98 on the server.
	
	Option 2:
	
	Remove Outlook 98 and Internet Explorer 4.0.
	
	To remove Outlook 98 (use same steps to remove Outlook 97):
	
	1. On the SBS computer, click Start, point to Settings, and then click Control
	  Panel.
	
	2. In Control Panel, double-click Services.
	
	3. Select Microsoft Exchange System Attendant.
	
	4. Click Stop (this stops Exchange Server). Set all Exchange services to Manual
	  start.
	
	5. On the SBS computer, click Start, point to Settings, and then click
	  Add/Remove Programs.
	
	6. Select Microsoft Outlook 98, and then click Add/Remove.
	
	7. When Setup runs, select Remove All.
	
	8. If prompted, select remove all shared components especially Internet Explorer
	  and all its components.
	
	9. Complete Setup.
	
	10. In Add/Remove Programs in Control Panels, verify that Internet Explorer 4.0
	  and any of its components are not there. If present, select Add/Remove and
	  remove it and all shared components.
	
	11. Install Internet Explorer 3.02 from <CD-ROM drive>:\MS\IE\I386, and
	  run MSIE30
	
	12. Select Start and then click Manage Server. If the console comes up, continue
	  with steps. If the console errors when started, follow the following
	  Microsoft Knowledge Base article to fix the problem:
	
	  ARTICLE-ID: Q186388
	  TITLE : SBS: Restoring Console After Removing and Reinstalling IIS/ASP
	
	13. Install Exchange or Outlook 97 from the compact disc. For additional
	  information, please see the following article in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q190470
	  TITLE : How To Properly Install Outlook 98 in an SBS Environment
	
	14. Open Control Panel Services, set Exchange services back to Automatic start,
	  then start each Exchange service.
	
	
	Additional query words: SmallBiz, IE4
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WINDOWS:97; winnt:4.0,4.0a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
