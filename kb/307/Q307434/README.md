---
layout: page
title: "Q307434: SMS: SMSCliToknAcct&amp; Lockout with Software Installation Account"
permalink: kb/307/Q307434/
---

## Q307434: SMS: SMSCliToknAcct&amp; Lockout with Software Installation Account

	Article: Q307434
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Systems Management Server (SMS) 2.0 Software Installation account
	to install packages on a Microsoft Windows 2000 Professional-based workstation,
	the package may not run correctly and the domain SMSCliToknAcct& account may
	become locked out. The Advertisement status shows an error for the advertised
	program. The status message contains this text:
	
	  An error occurred while preparing to run the program for advertisement
	  "<XXXnnnnn>" ("<packagename>" - "<programname>"). The
	  operating system reported error 1317. The specified user does not exist.
	
	CAUSE
	=====
	
	The local workstation's SMSCliToknAcct& account credentials are being used
	to request authentication for the specified Software Installation account. These
	credentials are not valid for the domain account of the same name. If account
	lockout is enabled, the account is locked out. If the account is locked out,
	advertised programs that specify the Software Installation account do not run.
	This problem is related to the symptoms that are described in the following
	Microsoft Knowledge Base article:
	
	  Q235205 SMS: Advertised Program Does Not Run with 10003 Status Message
	
	This problem was corrected in SMS 2.0 Service Pack 3, but only in a Microsoft
	Windows NT 4.0-based domain. This problem exhibits the same symptoms in a
	Windows 2000 Active Directory-based environment, although the symptoms occur
	under different circumstances. (See the "More Information" section for
	additional details).
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next SMS service pack that contains this fix.
	
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
	
	  Date         Time   Version         Size     File name      Platform
	  --------------------------------------------------------------------
	  01-Mar-2001  19:20  2.00.92.09      394,970  Apasetup.exe   i386
	  01-Mar-2001  19:20  2.00.1493.3192   77,168  Progrm32.dll   i386
	  01-Mar-2001  18:55  2.00.1493.3187  288,624  Smsapm32.exe   i386
	  01-Mar-2001  19:20                       67  Compversmsapm32.ini
	  01-Mar-2001  19:20  2.00.92.09      656,115  Apasetup.exe   Alpha
	  01-Mar-2001  19:20  2.00.1493.3192  128,272  Progrm32.dll   Alpha
	  01-Mar-2001  18:55  2.00.1493.3187  385,296  Smsapm32.exe   Alpha
	  01-Mar-2001  19:20                       67  Compversmsapm32.ini 
	
	The English Service Pack 3 International Client Pack 1 (ICP1) version of this fix
	should have the following file attributes or later:
	
	  Date         Time   Version         Size     File name      Platform
	  --------------------------------------------------------------------
	  12-Apr-2001  19:20  2.00.92.09      394,971  Apasetup.exe   i386
	  01-Mar-2001  19:20  2.00.1493.3192   77,168  Progrm32.dll   i386
	  01-Mar-2001  18:55  2.00.1493.3187  288,624  Smsapm32.exe   i386
	  12-Apr-2001  19:20                       67  Compversmsapm32.ini
	  12-Apr-2001  19:20  2.00.92.09      656,123  Apasetup.exe   Alpha
	  01-Mar-2001  19:20  2.00.1493.3192  128,272  Progrm32.dll   Alpha
	  01-Mar-2001  18:55  2.00.1493.3187  385,296  Smsapm32.exe   Alpha
	  12-Apr-2001  19:20                       67  Compversmsapm32.ini
	
	The English Service Pack 3 ICP4 version of this fix should have the following
	file attributes or later:
	
	  Date         Time   Version         Size     File name      Platform
	  --------------------------------------------------------------------
	  14-Apr-2001  19:20  2.00.92.09      394,967  Apasetup.exe   i386
	  01-Mar-2001  19:20  2.00.1493.3192   77,168  Progrm32.dll   i386
	  01-Mar-2001  18:55  2.00.1493.3187  288,624  Smsapm32.exe   i386
	  14-Apr-2001  19:20                       67  Compversmsapm32.ini
	  14-Apr-2001  19:20  2.00.92.09      656,118  Apasetup.exe   Alpha
	  01-Mar-2001  19:20  2.00.1493.3192  128,272  Progrm32.dll   Alpha
	  01-Mar-2001  18:55  2.00.1493.3187  385,296  Smsapm32.exe   Alpha
	  14-Apr-2001  19:20                       67  Compversmsapm32.ini
	
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
	
	This problem occurs under the following conditions:
	
	- Windows 2000 Active Directory is implemented.
	
	- The Active Directory mode is either Mixed or Native.
	
	- Multiple domain controllers exist in the software installation account's
	  domain.
	
	Smsapm32.exe performs the following actions up to and including the call to
	NetUserGetLocalGroups, which causes this problem to occur:
	
	- If the client is a workstation, a call is made to the Win32 NetGetAnyDcName
	  function to return a domain controller in the domain in which the workstation
	  has a machine account.
	
	- A Network Abstraction Layer (NAL) connection that uses the SMS Client
	  Connection account is made to the domain controller that is returned in the
	  NetGetAnyDcName call. In a Windows NT 4.0-based domain, this works because
	  the future call to NetUserGetLocalGroups also attempts to use this domain
	  controller to enumerate the indirect groups.
	
	- A call is made to the Win32 NetWkstaGetInfo funtion to return the domain in
	  which the user is logged on.
	
	- If the workstation account domain and the users account domain are the same,
	  a call to the Win32 NetUserGetLocalGroups function is made.
	
	- The NetUserGetLocalGroups function is then called, which is a backwardly
	  compatible function in Windows 2000, which uses directory service calls to
	  return the indirect groups from the domain. The function makes a call to
	  DsGetAnyDcName to obtain a domain controller on which to make the indirect
	  group enumeration. In certain circumstances, the domain controller that is
	  returned from NetGetAnyDcName and the domain controller that is returned from
	  DsGetAnyDcName can differ. If this occurs, and the user does not have a
	  session to a domain controller returned from DsGetAnyDcName,
	  NetUserGetLocalGroups attempts to create a session to this domain controller.
	  The current logon credentials are used (SMSCliToknAcct&) at this point in
	  the session setup attempt.
	
	The hotfix that is described in this article changes the behavior of Smsapm32.exe
	so that when a software installation account is specified, Advertised Programs
	Manager (APM) switches the user context from the SMSCliToknAcct& account to
	the software installation account before performing the calls that are listed
	earlier in this article and while the intended program runs. APM then reverts to
	SMSCliToknAcct& after the program has run.
	
	NOTE: With this behavior change from Smsapm32.exe version 2.00.1493.3187, if you
	use a Software Installation account that is defined as a local account (with no
	domain specified), programs that use the Software Installation account might not
	work. This could occur because a local account may not have the necessary domain
	rights when it calls the Win32 functions that are listed in this article.
	
	How to Install the Hotfix
	-------------------------
	
	Apply this fix on all of the primary and secondary sites in the SMS hierarchy. To
	install the fix, use one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on i386-based computers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha subfolders are required; you must
	  also download them from the Microsoft FTP site. It is important to keep the
	  folder structure intact. The Q307434.exe file is a Microsoft Windows
	  Installer file that updates specific files on your site server.
	
	2. Log on to your site server by using an account with administrator privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q307434.exe file and follow the instructions in the wizard. The
	  Systems Management Server services are stopped and restarted as part of the
	  installation process.
	
	How to Manually Install the Hotfix:
	
	1. Copy the update program file (Q307434.exe) and platform folders to a new
	  folder. The folder structure must be such that the program file is located
	  one folder "above" the platform folders.
	
	2. Quit the SMS Administrator console and stop all SMS services in Control
	  Panel. If the SMS_SITE_BACKUP service is running, stop it also.
	
	3. Copy the Apasetup.exe file from the hotfix <Platform> folder to the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Smsapm32\<Platform> folder on
	  the SMS site server.
	
	4. Replace the Compver.ini file in the
	  <Drive>:\Sms\Inboxes\Clicomp.src\Smsapm32 folder with the
	  Compversmsapm32.ini file from the hotfix I386 or Alpha source folder (both
	  files are the same) after renaming the file to Compver.ini.
	
	5. Copy the Smsapm32.exe file from the hotfix <Platform> folder to the
	  <Drive>:\Sms\Bin\<Platform> folder.
	
	6. Restart the SMS Site services on the site server.
	
	Additional query words: prodsms CliTokn Lockout
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
