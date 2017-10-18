---
layout: page
title: "Q252717: SMS: SP1: CCM Avoids Installation Attempts on SP2 Clients"
permalink: kb/252/Q252717/
---

## Q252717: SMS: SP1: CCM Avoids Installation Attempts on SP2 Clients

	Article: Q252717
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200 kbUpgrade kbsms200sp1fix kbgraphxlinkcritical
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a Systems Management Server (SMS) client that has been discovered by an SMS
	2.0 Service Pack 2 (SP2) site server resides inside the site boundaries of an
	SMS 2.0 Service Pack 1 (build 1380) site, that site's Client Configuration
	Manager (CCM) attempts to install the remaining client components and optional
	client agents. This can potentially place the client in an unstable condition.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft. This
	fix is one of two fixes that are required for SMS 2.0 sites with Service Pack 1
	(build 1380) before any site can be upgraded to SMS 2.0 SP2. This fix is
	included in the Smsqfe folder on the SP2 CD-ROM. Detailed instructions for
	hotfix installation are also included in the Release Notes that accompany the
	service pack.
	
	For additional information about the accompanying fix that you must apply to SMS
	2.0 sites with Service Pack 1 (build 1380), click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q249077 SMS: SP1: Copylog.tcf File Does Not Reflect Which Site Last Updated
	  the Logon Point
	
	For additional information about these fixes and similar fixes that you must
	apply to SMS 2.0 sites without Service Pack 1 (build 1239), click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q261931 SMS: Required Hotfixes Before Installing SMS 2.0 SP2
	
	To avoid the condition described in the "Symptoms" section of this article, you
	must apply the fix that is described in this article to all SMS 2.0 sites with
	Service Pack 1 (build 1380) before any site is upgraded to SMS 2.0 SP2. Click
	the following file name to download the file from the Microsoft Download
	Center:
	
	  DownloadDownload Q252717.exe now
	
	WARNING: This hotfix may not install on some secondary sites even though the
	hotfix installation may appear to run successfully. These hotfixes check for the
	existence of the Full Version value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup
	
	If you have secondary sites that were either installed or upgraded directly from
	the primary site, this key may not be created or properly updated. Before
	applying this hotfix, please verify the existence of this key on all secondary
	sites. The Qxxxxxx.log file that is generated when you install the hotfix will
	state that the version is 000. To correct this, manually create or update the
	registry value. To create or update this value on secondary sites, use the
	following steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Using Regedit or Regedt32, locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Setup
	
	2. If the Full Version key exists, manually update it using these corresponding
	  values:
	
	  Release version (build 1239): 2.00.1239.0000
	  SP1 version (build 1380): 2.00.1380.1000
	
	3. If the registry value does not exist, create the value and supply the
	  appropriate value from step 2.
	
	Using Regedit:
	
	  a. Right-click the Setup key, and then click New, String Value.
	
	  b. Name this value Full Version.
	
	  c. Double-click the Full Version value and supply the correct version listed
	     in step 2.
	
	Using Regedt32:
	
	  a. Click to highlight the Setup key.
	
	  b. On the Edit menu, click Add Value.
	
	  c. For the Value Name, type "Full Version" (without the quotation marks).
	
	     NOTE: The Data Type should be REG_SZ.
	
	  d. Click OK.
	
	  e. You are prompted for the string value. Type the appropriate version from
	     step 2, and then click OK.
	
	You should now see the Full Version value listed under the Setup key, which
	reflects the version you typed. After you finish this process, continue to apply
	the hotfix.
	
	The English-language version of the fix should have the following file attributes
	or later:
	
	  Date        Time      Version        Size      File name      Platform
	  ----------------------------------------------------------------------
	  1/28/2000   10:49AM   2.0.1380.1125   143 KB   Ccm.dll        Intel
	  1/28/2000   10:50AM   2.0.1380.1125   397 KB   Ccmbtldr.exe   Intel
	  12/20/1999   4:42PM   2.0.1380.1101   857 KB   Baseobj.dll    Intel
	  1/28/2000   10:54AM   2.0.1380.1125   227 KB   Ccm.dll        Alpha
	  1/28/2000   10:54AM   2.0.1380.1125   642 KB   Ccmbtldr.exe   Alpha
	  12/20/199    5:18PM   2.0.1380.1101  1.33 MB   Baseobj.dll    Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	Refer to the "More Information" section of this article for installation
	instructions.
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Systems Management Server 2.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	This hotfix is required for interoperability between SMS 2.0 sites with Service
	Pack 1 (build 1380) and SMS 2.0 SP2 sites.
	
	NOTE: You must install this hotfix on all SMS sites that share a domain with
	other SMS sites.
	
	To install the hotfix update, use the appropriate method.
	
	Method 1: Using the Update Installer
	------------------------------------
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the update folder structure to a share on your network. Q252717.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrative
	  privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Stop the SMS_SQL_MONITOR service.
	
	5. Run Q252717.exe and follow the instructions in the wizard. You can run the
	  file in Quiet mode by using the /s switch.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Close the SMS Administrator console and stop the SMS Site Component Manager
	  and SMS Executive services.
	
	2. Stop the SMS_SQL_MONITOR service.
	
	3. Replace the Ccm.dll file in the <Sms_root_folder>\Bin\<Platform>
	  folder with the version obtained from the update.
	
	4. Replace the Ccmbtldr.exe file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the update.
	
	5. Replace the Baseobj.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version obtained
	  from the update.
	
	6. Restart the SMS Site Component Manager and SMS Executive services.
	
	7. Start the SMS_SQL_MONITOR service.
	
	How to Manually Update a Remote SMS SQL Monitor Server
	------------------------------------------------------
	
	NOTE: Before you implement this update on your SMS site database server, you must
	install the update on the SMS site server(s) in your environment.
	
	To update a remote SMS SQL Monitor server, use the following steps:
	
	1. From the updated SMS site server, copy the hotfix files to a disk or network
	  share.
	
	2. At the SMS SQL Monitor server, stop the SMS_SQL_MONITOR service.
	
	3. Make a backup copy of the SMS SQL Monitor file(s) you are about to overwrite.
	
	4. Copy the updated file(s) from the disk or network share to the SMS SQL
	  Monitor folder.
	
	5. Restart the SMS SQL Monitor service.
	
	Manually Updating a Remote SMS Provider
	---------------------------------------
	
	This section describes how to implement SMS 2.0 Service Pack 1 (SP1) QFE updates
	to the SMS Provider when it is running on a computer other than the site
	server.
	
	NOTE: Before you implement this update on your SMS Provider server, you must
	install it on the SMS site server(s) in your environment.
	
	To update a remote SMS Provider:
	
	1. From the updated SMS site server, copy the hotfix files to a disk or network
	  share.
	
	2. At the SMS Provider server, stop the Windows Management services.
	
	3. Make a backup copy of the file(s) you are about to overwrite.
	
	4. Copy the updated file(s) from the disk or network share to the SMS Provider
	  folder.
	
	5. Restart the Windows Management services.
	
	How to Manually Update a Remote SMS Administrator Console
	---------------------------------------------------------
	
	This section describes how to implement SMS 2.0 SP1 QFE updates to the SMS
	Administrator console when it is running on a computer other than the site
	server.
	
	NOTE: Before you implement this update on your SMS Administrator console, you
	must install it on the SMS site server(s) in your environment.
	
	To update a remote SMS Administrator console, use the following steps:
	
	1. From the updated SMS site server, copy the hotfix files to a disk or network
	  share.
	
	2. Make a backup copy of the file(s).
	
	3. Copy the updated file(s) from the disk or network share to the SMS
	  Administrator console folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 kbUpgrade kbsms200sp1fix kbgraphxlinkcritical 
	Technology        : kbSMSSearch kbSMS200SP1
	Version           : winnt:2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
