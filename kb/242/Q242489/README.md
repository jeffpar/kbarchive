---
layout: page
title: "Q242489: SMS: Run-Time Error When Advertising MFC-Based Package (English"
permalink: /kb/242/Q242489/
---

## Q242489: SMS: Run-Time Error When Advertising MFC-Based Package (English

{% raw %}

	Article: Q242489
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbConfig kbsms200fix kbAdvertisement kbAppMan kbPackage kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you distribute software to a Systems Management Server (SMS) client, the
	following error message may be displayed when the advertisement runs:
	
	  Runtime ERROR!
	  Program \\server\smspkgd$\opl00003\mfctest.exe
	  abnormal program termination
	
	You may also see the following entry in the Smsapm32.log file:
	
	  SCHED DATA : Attempting to execute
	  \\SMSD4L8PDCUS\SMSPKGC$\RS100006\mfctest.exe' (SERVICE context)
	  SCHED DATA : Command line "\\SMSD4L8PDCUS\SMSPKGC$\RS100006\mfctest.exe" CWD
	  "\\SMSD4L8PDCUS\SMSPKGC$\RS100006\"
	
	  SCHED DATA : Return code = 0x3; The system cannot find the path specified.~~;
	  Program '\\SMSD4L8PDCUS\SMSPKGC$\RS100006\mfctest.exe' terminated with exit
	  code = 3.
	
	On the client, the program (the .exe file) may have a status of "Started" in Task
	Manager, even though it is no longer active.
	
	CAUSE
	=====
	
	This behavior can occur if the Setup file that is used by the advertised program
	uses the Msvcrt.dll run-time library file from Microsoft Visual C++ and if one
	of the following options is enabled on the Environment tab in the program
	properties:
	
	- Run with administrative rights
	
	- Use Windows NT client software installation account
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time     Version    Size     File name      Platform
	  --------------------------------------------------------------
	  11/30/99  10:01PM  1380.1082  367,795  Apasetup.exe   i386
	  12/02/99  12:29AM                  67  Compver.ini    i386
	  11/23/99  06:23PM  1380.1082  209,264  Smsapm32.exe   i386
	  11/30/99  09:59PM  1380.1082   75,120  Progrm32.dll   i386
	  11/30/99  10:01PM  1380.1082  630,116  Apasetup.exe   Alpha
	  12/02/99  12:29AM                 67   Compver.ini    Alpha
	  11/23/99  06:24PM  1380.1082  279,824  Smsapm32.exe   Alpha
	  11/30/99  10:00PM  1380.1082  122,640  Progrm32.dll   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	This behavior does not occur if either the "Run with administrative rights" or
	"Use Windows NT client software installation account" option is not enabled.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use either of the following methods.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method works on i386 platforms only.
	
	1. Copy the hotfix folder structure to a share on your network. The Q242489.exe
	  file is a Microsoft Windows Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the SMS Administrator console.
	
	4. Start Q242489.exe and follow the directions in the wizard. You can run the
	  program in Quiet mode by using the /s switch.
	
	Manual Installation
	-------------------
	
	1. Stop the SMS_EXECUTIVE and SMS_SITE_COMPONENT_MANAGER services on the site
	  server.
	
	2. Copy the updated Apasetup.exe file to the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Smsapm32\<Platform> folder.
	
	3. Copy the updated Compver.ini file to the
	  <Sms_root_folder>\Inboxes\Clicomp.src\Smsapm32 folder.
	
	4. Copy the Smsapm32.exe file to the
	  <Sms_root_folder>\Bin\<Platform> folder.
	
	5. Start the SMS_SITE_COMPONENT_MANAGER and SMS_EXECUTIVE services. When the
	  Client Access Points (CAPs) and Logon Points have been updated, the clients
	  can be updated.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q253197 Run-Time Error When Advertising MFC-Based Package (ICP Version)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig kbsms200fix kbAdvertisement kbAppMan kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
