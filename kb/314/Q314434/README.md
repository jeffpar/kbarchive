---
layout: page
title: "Q314434: SMS: SNMPELEA Event Errors on Client Install to Windows 2000"
permalink: /kb/314/Q314434/
---

## Q314434: SMS: SNMPELEA Event Errors on Client Install to Windows 2000

	Article: Q314434
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP4,2000
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbSNMP kbsms120 kbsms120bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP4 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install a Systems Management Server (SMS) version 1.2 Service Pack 4
	(SP4) client with the Windows 2000 support fixes for SMS 1.2 onto a Windows 2000
	Professional client, error events 1025 and 6002 are reported in the Application
	Event log. Each time you restart the computer, the events are generated. The
	event details are:
	
	  
	
	- 1025 (ERROR) Source Snmpelea, Description Unable to load PrimaryModule
	  System. Loadlibrary returned 126.
	
	- 6002 (WARNING)Source Snmpelea, Description Mutex object could not be
	  released. Reason code is 288. Trap may not be sent.
	
	CAUSE
	=====
	
	This problem can occur because during the SMS 1.2 client installation, the SMS
	Client Configuration Manager (CCM) attempts to install the SMS SNMP Trap
	Translator on any Microsoft Windows NT client on which the SNMP agent is
	installed. However, the SMS 1.2 SNMP Trap Translator is not supported on Windows
	2000.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server 1.2 service pack that contains this fix.
	
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
	
	  Date         Version    Size      File name   Platform
	  ------------------------------------------------------
	  14-Dec-2001  1.2(786)   368,544   Clicfg.exe  Intel
	  14-Dec-2001  1.2(786)   918,288   Clicfg.exe  Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The SMS CCM site component is responsible for the installation of the SNMP Trap
	Translator. Because the Trap Translator client component cannot be disabled on a
	per-client basis, only per site, the Trap Translator is installed on any SMS
	Windows NT client that has the SNMP agent installed. The hotfix that is
	documented in this article contains a modification to the CCM component that
	detects the operating system version that is running on the client prior to the
	installation of the Trap Translator. If the operating system major version is 5
	(Windows 2000 or Microsoft Windows XP), the SMS SNMP Trap Translator is not
	installed on a new SMS client.
	
	How to Install the Hotfix
	-------------------------
	
	Apply this fix on all of the primary and secondary sites in the SMS hierarchy. To
	manually install the hotfix:
	
	1. Stop the SMS_CLIENT_CONFIGURATION_MANAGER service.
	
	2. Copy the hotfix version of the Clicfg.exe file from the appropriate platform
	  folder of the hotfix folder structure to the
	  SMS\Helper.srv\<platform>.bin folder of the site server, replacing the
	  existing version.
	
	3. Restart the SMS_CLIENT_CONFIGURATION_MANAGER service.
	
	For additional information about the SMS 1.2 support fixes for Windows 2000,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q254532 SMS 1.2 Support Fixes for Windows 2000
	
	For more information about supported and unsupported SMS 1.2 features on Windows
	2000, please refer to the following Microsoft SMS 1.2 Support Technical Paper:
	
	  http://www.microsoft.com/smsmgmt/deployment/sms12support.asp
	
	Additional query words: prodsms snmp
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbSNMP kbsms120 kbsms120bug 
	Technology        : kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbSMSSearch kbSMS120 kbSMS120SP4
	Version           : :1.2,1.2 SP4,2000
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
