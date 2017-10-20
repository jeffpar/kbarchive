---
layout: page
title: "Q287717: SMS: Secondary Site Installation Stops Responding"
permalink: /kb/287/Q287717/
---

## Q287717: SMS: Secondary Site Installation Stops Responding

{% raw %}

	Article: Q287717
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbMMC kbServer kbsms200 kbHMan kbsmsAdmin
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a secondary site from a parent site, the installation
	may stop responding (hang) for various reasons and it may take a long time for
	the parent site to report the unsuccessful installation. If the secondary site
	is purged from the Systems Management Server (SMS) Administrator console of the
	parent site before the problem is reported, jobs that are trying to install the
	secondary site may continue uninterrupted.
	
	CAUSE
	=====
	
	This behavior may occur for various reasons, including, but not limited to,
	network issues, disk space issues, and so forth.
	
	WORKAROUND
	==========
	
	To work around this behavior, manually stop the secondary site installation.
	
	NOTE: it is important to remove any old information from the installation.
	
	To perform the manual cleanup:
	
	1. For each secondary site, delete the secondary site address from Site
	  Settings\Addresses in the Administrator console.
	
	2. For each secondary site, run the preinst /delsite command from a command
	  prompt on the SMS parent site to purge the failed secondary site from the
	  database. The PREINST tool is located in the \Support directory on the SMS
	  CD, and you must run it from the site server. Use preinst /? to receive the
	  exact syntax for this utility.
	
	For additional information about how to use the PREINST utility, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q212978 SMS: Description of Preinst.exe for SMS 2.0
	
	3. For each secondary site, run the preinst /deljob command to have the tool
	  remove any pending or active jobs to those sites.
	
	4. Verify that the secondary sites are completely removed. To ensure that the
	  computer is clean of the unsuccessful SMS installation:
	
	  a. Verify that no SMS or Winmgmt services are running on the computer,
	     including the SMSBootstrap service. If they are, stop them, and then set
	     the startup type to manual.
	
	  b. Verify that the following SMS registry keys were removed:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/SMS
	  HKEY_LOCAL_MACHINE/Software/Microsoft/NAL
	  HKEY_LOCAL_MACHINE/Software/Microsoft/WBEM
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/WMI
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/SMS_Executive
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/SMS_NT_Logon_Discovery_Agent
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/SMS_Site_Config_Manager
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/SMS_Bootstrap
	  HKEY_LOCAL_MACHINE/System/CurrentControlSet/Services/CLISVC
	
	  c. Verify that the following directories were removed where <X> is the
	     SMS installation drive:
	
	  <X>:\SMS
	  <X>:\SMSBootstrap.log
	  C:\SMSSetup.log
	  %Winnt%\MS\SMS
	
	     NOTE: You may need to restart the computer in order to remove some of these
	     directories.
	
	  d. View the client access points (CAPs) and distribution points (DPs) for the
	     site and verify that the CAP_<xxx> SMS_PKG shares were deleted, and
	     that the directories were removed (where <xxx> is the sitecode of
	     the secondary site).
	
	  e. If you used Logon Installation or Discovery during the installation, make
	     sure that the specific sitecode directory is removed from the
	     SMSLOGON\Sites directory of the primary domain controller in the domain.
	
	  f. With User Manager, make sure that any site specific accounts were deleted.
	     At a minimum, this includes the SMSClient_<xxx> and
	     SMSServer_<xxx> accounts (where <xxx> is the sitecode of the
	     secondary site.) After you complete this, you can complete the secondary
	     site installation by using the same sitecode.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbConfig kbMMC kbServer kbsms200 kbHMan kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
