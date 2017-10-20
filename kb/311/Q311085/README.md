---
layout: page
title: "Q311085: SMS: The Distribution Point Wizard Does Not Delete a Package"
permalink: /kb/311/Q311085/
---

## Q311085: SMS: The Distribution Point Wizard Does Not Delete a Package

{% raw %}

	Article: Q311085
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to delete a Systems Management Server (SMS) package by using the
	Manage Distribution Points Wizard, the package may not be removed from all
	targeted distribution points. This situation typically occurs if you run the
	wizard on an SMS site server with child sites that own distribution points with
	the package.
	
	CAUSE
	=====
	
	This problem is caused by a synchronization issue among the SMS Administrator
	console, SMS_SQL_MONITOR, and SMS_DISTRIBUTION_MANAGER.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix for Service Pack 3 (SP3) sites should have the
	following file attributes or later:
	
	  Date         Time  Version        Size       File name      Platform
	  --------------------------------------------------------------------
	  01-Mar-2001  23:25 2.0.1493.3217   1,578,912  Basesvr.dll   I386
	  01-Mar-2001  23:25 2.0.1493.3217     540,160  Mmcbasui.dll  I386
	  01-Mar-2001  23:25 2.0.1493.3217     102,080  Sms_mdpt.dll  I386
	  01-Mar-2001  23:25 2.0.1493.3217   4,202,960  Smsprov.dll   I386
	  19-Dec-2001  01:54                   252,908  Q311085.exe
	  01-Mar-2001  23:25 2.0.1493.3217   2,429,712  Basesvr.dll   Alpha
	  01-Mar-2001  23:25 2.0.1493.3217   1,009,424  Mmcbasui.dll  Alpha
	  01-Mar-2001  23:25 2.0.1493.3217     204,048  Sms_mdpt.dll  Alpha
	  01-Mar-2001  23:25 2.0.1493.3217  11,800,848  Smsprov.dll   Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	This behavior may occur if the site server is busy or if you have a remote SQL
	server with the SMS_SQL_Monitor service.
	
	To Install the Hotfix
	---------------------
	
	In addition to installing this hotfix on the site server and the provider server,
	install this hotfix on all workstations and servers on which the SMS
	Administrator console is installed. To install the hotfix, use the appropriate
	method on the SMS site server.
	
	Using the Hotfix Installer:
	
	NOTE: You can use this method only on I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q311085.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrator
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q311085.exe and follow the instructions in the wizard. Finish any
	  necessary manual installation steps.
	
	Installing the Hotfix Manually:
	
	Manual installation for the Administrator console:
	
	1. Quit the SMS Administrator console and stop the Windows Management service.
	
	2. Replace the Basesvr.dll file in the
	  <Sms_admin_root_folder>\Bin\<Platform> folder with the version
	  the hotfix.
	
	3. Replace the Mmcbasui.dll file in the
	  <Sms_admin_root_folder>\Bin\<Platform> folder with the version
	  from the hotfix.
	
	4. Replace the Sms_mdpt.dll file in the
	  <Sms_admin_root_folder>\Bin\<Platform> folder with the version
	  from the hotfix.
	
	5. Restart the Windows Management service and the SMS Administrator console.
	
	Manual installation for a site server:
	
	1. Quit the SMS Administrator console and stop the Windows Management service
	  and all SMS services.
	
	2. Replace the Basesvr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	3. Replace the Mmcbasui.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	4. Replace the Sms_mdpt.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	5. Replace the Smsprov.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	6. Restart the SMS services and the Windows Management service.
	
	Manual installation for a remote provider server:
	
	1. Stop the SMS_SQL_MONITOR and Windows Management services.
	
	2. Replace the Basesvr.dll file in the
	  <Drive>:\Smsprov\Bin\<Platform> folder with the version from the
	  hotfix.
	
	3. Replace the Smsprov.dll file in the
	  <Drive>:\Smsprov\Bin\<Platform> folder with the version from the
	  hotfix.
	
	4. Replace the Basesvr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version from the
	  hotfix.
	
	5. Restart the SMS_SQL_MONITOR and Windows Management services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
