---
layout: page
title: "Q311127: High CPU Utilization in LSASS on PDC Emulator"
permalink: /kb/311/Q311127/
---

## Q311127: High CPU Utilization in LSASS on PDC Emulator

	Article: Q311127
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbui kbsms200preSP4fix
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
	
	SYMPTOMS
	========
	
	When you install a Systems Management Server (SMS) 2.0 client to a Microsoft
	Windows NT 4.0 backup domain controller, the following symptoms may occur:
	
	- The Microsoft Windows 2000 primary domain controller emulator for that domain
	  may experience high CPU utilization in the Lsass.exe process.
	
	- Replication may be delayed.
	
	CAUSE
	=====
	
	During the installation of the SMS client to domain controllers, several
	accounts are created, including SMS#_<computer name> and
	SMS&_<computer name>. These accounts are added to the
	SMSInternalCliGrp domain global group. The SMSInternalCliGrp domain global group
	is set as their primary group, and the accounts are then removed from domain
	users. If a large numbers of users exist in domain users, removal of an account
	from this group causes too much replication work for the Windows 2000 primary
	domain controller emulator.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English post-SMS 2.0 Service Pack 3 version of this fix should have the
	following file attributes or later:
	
	  Date         Time   Version        Size       File name        Platform
	  ------------------------------------------------------------------------
	  01-Mar-2001  17:20  2.0.92.9         394,049  Apasetup.exe
	  01-Mar-2001  08:00  2.0.1493.3125    259,936  Bindclin.dll
	  01-Mar-2001  17:20  2.0.1493.3216    181,584  Ccim32.dll
	  01-Mar-2001  17:20  2.0.1493.3216    157,072  Ccm.dll
	  01-Mar-2001  17:20  2.0.92.9       1,324,069  Ccmcore.exe
	  01-Mar-2001  17:20  2.0.1493.3216  1,223,584  Clibase.dll
	  01-Mar-2001  17:20  2.0.1493.3216  3,401,546  Clicore.exe
	  01-Mar-2001  17:20  2.0.1493.3216    128,864  Cliex32.dll
	  01-Mar-2001  17:20  2.0.1493.3216     74,096  Clisvc95.exe
	  01-Mar-2001  17:20  2.0.1493.3216     88,432  Clisvcl.exe
	  01-Mar-2001  17:20  2.0.1493.3216      8,512  Cliver.exe
	  01-Mar-2001  17:20  2.0.1493.3216     39,264  Cqmgr32.dll
	  01-Mar-2001  17:20  2.0.1493.3216     73,072  Launch32.exe
	  01-Mar-2001  08:00  2.0.1493.3125    338,272  Mslmclin.dll
	  01-Mar-2001  08:00  2.0.1493.3125    269,664  Ndsclin.dll
	  01-Mar-2001  17:20  2.0.1493.3216     53,104  Odpsys32.exe
	  01-Mar-2001  17:20  2.0.1493.3216     59,248  Odpusr32.exe
	  01-Mar-2001  17:20  2.0.1493.3216     60,272  Odpwin9x.exe
	  01-Mar-2001  17:20  2.0.1493.3216     22,352  Pea32.exe
	  01-Mar-2001  17:20  2.0.1493.3216     23,904  Pipcap32.dll
	  01-Mar-2001  17:20  2.0.1493.3216     77,168  Progrm32.dll
	  01-Mar-2001  17:20  2.0.1493.3216    287,088  Smsapm32.exe
	  01-Mar-2001  17:20  2.0.92.9         637,723  Swdist32.exe
	  01-Mar-2001  17:20  2.0.92.9         654,479  Apasetup.exe         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    293,648  Ccim32.dll           Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    250,128  Ccm.dll              Alpha
	  01-Mar-2001  17:20  2.0.92.9       1,925,224  Ccmcore.exe          Alpha
	  01-Mar-2001  17:20  2.0.1493.3216  1,938,704  Clibase.dll          Alpha
	  01-Mar-2001  17:20  2.0.1493.3216  4,441,916  Clicore.exe          Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    203,024  Cliex32.dll          Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    105,232  Clisvc95.exe         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    125,712  Clisvcl.exe          Alpha
	  01-Mar-2001  17:20  2.0.1493.3216     13,584  Cliver.exe           Alpha
	  01-Mar-2001  17:20  2.0.1493.3216     66,832  Cqmgr32.dll          Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    104,720  Launch32.exe         Alpha
	  01-Mar-2001  08:00  2.0.1493.3125    578,832  Mslmclin.dll         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216     73,488  Odpsys32.exe         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216     82,192  Odpusr32.exe         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216     30,992  Pea32.exe            Alpha
	  01-Mar-2001  17:20  2.0.1493.3216     42,256  Pipcap32.dll         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    128,272  Progrm32.dll         Alpha
	  01-Mar-2001  17:20  2.0.1493.3216    382,224  Smsapm32.exe         Alpha
	  01-Mar-2001  17:20  2.0.92.9         691,596  Swdist32.exe         Alpha
	  01-Mar-2001  17:20                        67  Compverbase.ini
	  01-Mar-2001  17:20                        67  Compversmsapm32.ini
	  01-Mar-2001  17:20                        67  Compverswdist.ini
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	To install the hotfix, use either of the following methods.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method only works on Intel-based platforms.
	
	1. Copy the hotfix folder structure to a share on your network. The Q311127.exe
	  file is a Microsoft Windows Installer file that updates specific files on
	  your site server.
	
	2. Log on to your site server by using an account with administrative rights.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Start Q311127.exe, and then follow the directions in the wizard. You can run
	  the program in Quiet mode by using the /s switch.
	
	Manual Installation
	-------------------
	
	1. Log on to your site server by using an account with administrative rights.
	
	2. Quit the SMS Administrator console, and then stop all SMS services.
	
	3. Replace the following files in the <SMS_root>\Bin\<Platform>
	  folder with the versions that you obtained from the hotfix:
	
	   - Ccm.dll
	
	   - Ccim32.dll
	
	   - Clibase.dll
	
	   - Cliex32.dll
	
	   - Clisvc95.exe
	
	   - Clisvcl.exe
	
	   - Bindclin.dll
	
	   - Cqmgr32.dll
	
	   - Launch32.exe
	
	   - Mslmclin.dll
	
	   - Ndsclin.dll
	
	   - Odpsys32.exe
	
	   - Odpusr32.exe
	
	   - Odpwin9x.exe
	
	   - Smsapm32.exe
	
	4. Replace the following files in the
	  <SMS_root>\inboxes\clicomp.src\BASE\<Platform> folder with the
	  versions that you obtained from the hotfix:
	
	   - Ccmcore.exe
	
	   - Clicore.exe
	
	5. Replace the Compver.ini file in the <SMS_root>\Inboxes\Clicomp.src\Base
	  folder with the version of the Compverbase.ini file that you obtained from
	  the hotfix. Note that you must rename Compverbase.ini to Compver.ini.
	
	6. Replace the Apasetup.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\Smsapm32\<Platform> folder with
	  the version that you obtained from the hotfix.
	
	7. Replace the Compver.ini file in the
	  <SMS_root>\Inboxes\Clicomp.src\Smsapm32 folder with the version of the
	  Compversmsapm32.ini file that you obtained from the hotfix. Note that you
	  must rename Compversmsapm32.ini to Compver.ini.
	
	8. Replace the SWDist32.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\SWDist\<Platform> folder with the
	  version obtained from the hotfix.
	
	9. Replace the Compver.ini file in the
	  <SMS_root>\Inboxes\Clicomp.src\SWDist folder with the version of the
	  Compverswdist.ini file that you obtained from the hotfix. Note that you must
	  rename Compverswdist.ini to Compver.ini.
	
	10. An NT_Logon_Server_Manager (LSM) polling cycle must occur to cause the
	  hotfixed files to be propagated to all of the logon points so that new
	  clients will be installed by using the hotfixed files. In SMS 2.0 Service
	  Pack 2 (SP2) and later, LSM was changed so that it does not perform a
	  polling cycle when the SMS Executive service is stopped and restarted. To
	  force LSM to perform a polling cycle when the LSM thread or SMS Executive
	  service is stopped and restarted, set the following registry value to 0
	  (zero), and then restart all of the SMS services:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SMS_NT_LOGON_SERVER_MANAGER\Last
	  Update Cycle
	
	At the end of the polling cycle, the Last Update Cycle value is reset. All logon
	points must be updated before you try to install new clients.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the files that
	are in this hotfix to be propagated to the clients. To speed up this process,
	you can stop and then restart the SMS Client Service on each client. You can
	also create a software distribution by using the Setevnt.exe or the Cliutils.exe
	Resource Kit tools. You must include the appropriate parameters to start a CCIM
	work cycle. For information about the proper syntax for these tools, see the
	Resource Kit documentation.
	
	Additional Settings
	-------------------
	
	To relieve the primary domain controller emulator from excessive replication work
	and reduce replication traffic, this hotfix provides a method to configure SMS
	to leave automatically-created client bootstrap and service accounts in the
	domain users global group.
	
	You must configure a value on the primary domain controller emulator in Windows
	2000 Active Directory because the client installation reads the value directly
	from the primary domain controller's registry. You must insert the registry
	value only on the primary domain controller emulator. To determine which
	computer is the primary domain controller emulator:
	
	1. Start Active Directory Users and Computers.
	
	2. Right-click the domain, and then click Operations Master.
	
	3. The primary domain controller emulator is listed on the PDC tab under
	  Operations Master.
	
	To configure the appropriate value:
	
	1. Start Registry Editor (Regedt32.exe) only on the primary domain controller
	  emulator.
	
	2. Locate and then click the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Configuration\Domain
	  Controller
	
	3. Add the following value:
	
	  Value name: Enable Domain User Group Membership
	  Data type: DWORD
	  Value: 1, or any non-zero value
	
	If this value exists, SMS does not try to remove the accounts it creates for
	client installations on domain controllers from the Domain Users group. This
	satisfies the specific goal of reducing replication activity in the domain, and
	this reduces the load on the primary domain controller emulator.
	
	Additionally, if the account already exists, the password is still reset to
	improve security, and the following checks occur:
	
	- If the account is already a member of the SMSCliInternalGrp, it is not
	  re-added, and this reduces replication activity.
	
	- If the account already has the SMSCliInternalGrp as its primary group, it is
	  not changed, and this reduces replication activity.
	
	- If the account is not a member of the Domain Users group, no attempt is made
	  to remove it.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	Additional query words: pdc
	
	======================================================================
	Keywords          : kbenv kbtool kbui kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
