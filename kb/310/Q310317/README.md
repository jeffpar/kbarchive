---
layout: page
title: "Q310317: SMS: Access Violation in the SMS_LICENSE_SERVER Service"
permalink: kb/310/Q310317/
---

## Q310317: SMS: Access Violation in the SMS_LICENSE_SERVER Service

	Article: Q310317
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS_LICENSE_SERVER service (Remodbc.exe) may cause an access violation error
	and create a User.dmp or Drwtsn32.log file, or both. The Drwtsn32.log file
	refers the SMSCacheGetSzValue function.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Version         Size     File name    Platform
	  -----------------------------------------------------------------
	  1-Mar-2001  20:50  2.00.1493.3198  619,280  Remodbc.exe  Alpha
	  1-Mar-2001  20:50  2.00.1493.3198  365,600  Remodbc.exe  i386
	
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
	
	Installing the Hotfix
	---------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q310317.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrative
	  permissions.
	
	3. On the site server, quit the Systems Management Server (SMS) Administrator
	  console.
	
	4. Run Q310317.exe and follow the instructions in the wizard.
	
	Manually Installing the Hotfix:
	
	To install the hotfix, follow these steps on the SMS site server:
	
	1. Copy the contents of the hotfix (including the subfolders) to a local folder
	  on the site servers and software-metering-role computers that you want to
	  update.
	
	2. Stop the SMS Site Component Manager and SMS Executive services on the SMS
	  site servers on which you are installing the hotfix files.
	
	3. Stop the SMS_LICENSE_SERVER service on all software-metering-role computers.
	
	4. Copy the Remodbc.exe file from the hotfix installation <Platform>
	  folder to the SMS\Bin\<Platform>.bin folder on the SMS site servers.
	
	5. Copy the Remodbc.exe file from the hotfix installation <Platform>
	  folder to the <Drive:\Swmtr> folder on software-metering-role computers
	  (where <Drive:\Swmtr> is the drive and installation folder that was
	  selected during the installation of Software Metering Server).
	
	6. Restart the SMS Site Component Manager and SMS_LICENSE_SERVER services. The
	  SMS Executive service is automatically restarted by Site Component Manager.
	
	Additional query words: prodsms SMSCacheGetLValue
	
	======================================================================
	Keywords          : kbsms200bug 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
