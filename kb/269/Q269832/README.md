---
layout: page
title: "Q269832: SMS: Case Sensitivity Slows Down Queries"
permalink: /kb/269/Q269832/
---

## Q269832: SMS: Case Sensitivity Slows Down Queries

{% raw %}

	Article: Q269832
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Because the Web-Based Enterprise Management (WBEM) Query Language is not case
	sensitive, it causes an unnecessarily large amount of processing overhead on SQL
	servers that are not case sensitive because all string comparisons are wrapped
	by a case conversion call.
	
	CAUSE
	=====
	
	This problem can occur if the Systems Management Server (SMS) provider does not
	check the case sensitivity of the SQL server. Although it does not check the
	case sensitivity of the SQL server, it still provides case conversion, and this
	can cause the excessive overhead.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date             Time    Version         Size        File name    Platform
	--------------------------------------------------------------------------
	October 6, 2000  14:40   2.00.1493.2157  11,777,808  Smsprov.dll  Alpha
	October 6, 2000  14:40   2.00.1493.2157   4,188,624  Smsprov.dll  Intel 
	
	The French version of this fix should have the following file attributes or
	later:
	
	Date             Time    Version         Size        File name    Platform
	--------------------------------------------------------------------------
	October 6, 2000  14:40   2.00.1493.2157  11,777,808  Smsprov.dll  Alpha
	October 6, 2000  14:40   2.00.1493.2157   4,188,624  Smsprov.dll  Intel 
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the preceding files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Apply this fix to all of the primary sites in the SMS hierarchy. It is necessary
	to apply the hotfix only to the site servers; you do not need to apply the fix
	to computers that are running the SMS Administrator console. To install the fix,
	use one of the following methods.
	
	How to Use the Hotfix Installer
	-------------------------------
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q269832.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrative
	  privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q269832.exe, and then follow the directions in the wizard. You can run
	  the file in Quiet mode by using the "/s" (without the quotation marks)
	  switch.
	
	How to Manually Install the Hotfix
	----------------------------------
	
	To determine if the SMS provider is located on the site server or on a remote
	computer that is running Microsoft SQL Server, view the following registry key
	on the primary site server:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup
	
	Value: Provider Location
	
	NOTE: If the computer that is identified in this registry key is not the local
	site server, use the installation steps for a remote provider.
	
	Site System with Local Provider:
	
	1. Quit the SMS Administrator console, and then stop all SMS services including
	  the Windows Management service and the SMS_SQL_MONITOR service.
	
	2. Use Regsvr32.exe to unregister the existing SMS provider file, type "regsvr32
	  /u <sms_root_folder>\bin\<platform>\smsprov.dll" (without the
	  quotation marks) at a command prompt, and then press ENTER.
	
	3. Replace the Smsprov.dll file in the
	  <sms_root_folder>\bin\<platform> folder with the version that you
	  obtained from the hotfix.
	
	4. Use Regsvr32.exe to register the updated SMS provider file, type "regsvr32
	  <sms_root_folder>\bin\<platform>\smsprov.dll" (without the
	  quotation marks) at a command prompt, and then press ENTER.
	
	5. Restart all SMS services.
	
	Site System with Remote Provider:
	
	1. Quit the SMS Administrator console, and then stop all SMS services.
	
	2. Use Regsvr32.exe to unregister the existing SMS Provider file, type "regsvr32
	  /u <sms_root_folder>\bin\<platform>\smsprov.dll" (without the
	  quotation marks) at a command prompt, and then press ENTER.
	
	3. Replace the Smsprov.dll file in the
	  <sms_root_folder>\bin\<platform> folder with the version that you
	  obtained from the hotfix.
	
	4. Use Regsvr32.exe to register the updated SMS provider file, type "regsvr32
	  <sms_root_folder>\bin\<platform>\smsprov.dll" (without the
	  quotation marks) at a command prompt, and then press ENTER.
	
	5. Restart all SMS services.
	
	Additional query words: prodsms wql
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
