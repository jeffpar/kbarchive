---
layout: page
title: "Q316316: SMS: Distribution Manager Not Work and Error 998 During Compress"
permalink: kb/316/Q316316/
---

## Q316316: SMS: Distribution Manager Not Work and Error 998 During Compress

	Article: Q316316
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbSoftwareDist kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compress a package to send to subsites, the Distribution Manager
	component in the Systems Management Server (SMS) executive may log the following
	error message and the package may not be compressed:
	
	  Cannot write to output file, Win32 Error = 998
	
	RESOLUTION
	==========
	
	There is a hotfix for this problem. However, Microsoft recommends that you apply
	the hotfix that is described in the following Microsoft Knowledge Base article:
	
	  Q319207 SMS: Retrying a Package Update May Create Many Jobs
	
	This is a closely related problem, and the hotfix that is described in Q319207
	also contains the fix for the problem that is described in this article.
	
	WORKAROUND
	==========
	
	This error occurs only with multistreamed source files. To work around the
	problem, remove the alternate data streams from the source files. To do this,
	copy the source files to a non-NTFS partition, and then copy them back to the
	source folder on the NTFS partition.
	
	For more information about data streams, please see the following Microsoft
	Developer Network (MSDN) Web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnfiles/html/ntfs5.asp
	
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
	
	Installation Instructions
	-------------------------
	
	1. Log on locally to your site server by using an account with local
	  administrative privileges.
	
	2. On the site server, quit the SMS Administrator console. Manually stop both
	  the SMS_Site_Component_Manager and SMS_Executive services.
	
	3. Run the Q316316.exe SMS Installer script, and then follow the instructions in
	  the wizard.
	
	4. After you run the Installer script, check the Q316316.log file in the
	  <Sms_root_folder>\Logs folder to verify that the files are successfully
	  installed on the site server.
	
	5. Verify that both the SMS_Site_Component_Manager and SMS_Executive services
	  successfully restarted.
	
	Manual Installation Instructions
	--------------------------------
	
	1. Stop both the SMS Site Component Manager and SMS Executive services on the
	  SMS site server.
	
	2. Replace the Distmgr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that you obtain from the hotfix.
	
	3. Replace the Baseutil.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that you obtain from the hotfix.
	
	4. Restart both the SMS Site Component Manager and SMS Executive services.
	
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbSoftwareDist kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3 kbSMS200SP4
	Version           : :2.0 SP3,2.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
