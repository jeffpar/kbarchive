---
layout: page
title: "Q304961: SMS: Remote Client Installation on BDC Generates Error 1326"
permalink: /kb/304/Q304961/
---

## Q304961: SMS: Remote Client Installation on BDC Generates Error 1326

{% raw %}

	Article: Q304961
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to install the Systems Management Server (SMS) client on a Microsoft
	Windows NT-based backup domain controller (BDC) or Microsoft Windows 2000-based
	domain controller may not succeed. When this occurs, the following error message
	is generated in the %SystemRoot%\MS\SMS\Logs\Wnremote.log file:
	
	  ERROR: Could not create global group on PDC (1326)
	  ERROR: Unable to create the Client Service Account. Win32 Error: 1326
	  Warning: Could not launch/register CCIM - 1326
	  UpdateClientRegistryForCCIMLaunch returned Logon failure: unknown user name or
	  bad password.
	
	Because of this issue, several installation attempts may be made, causing
	additional replication traffic in the domain.
	
	CAUSE
	=====
	
	This issue occurs because the SMS client bootstrap loader does not wait long
	enough for a child process (Ccmboot.exe) to finish the account synchronization
	of the SMS Client Service account (SMS&_<Computername>). When it
	stops, Client Configuration Manager (CCM) on the SMS site server waits 15
	minutes, then deletes the SMS Client bootstrap account
	(SMS#_<Computername>). Therefore, the Ccmboot.exe process, which is
	running under the SMS#_<Computername> context, cannot successfully
	complete the account-configuration process for the SMS&_<Computername>
	account.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	For Windows NT-based environments, manually trigger the synchronization of the
	BDC with the primary domain controller (PDC) by using Server Manager
	approximately 10 minutes after the remote client installation is initiated for
	that computer. You need to force a synchronization with the PDC after the
	SMS&_<Computername> account is created, but before the SMS Client
	Bootstrap service times out while waiting for Ccmboot.exe to finish. Monitor the
	Wnremote.log file in the %SystemRoot%\MS\SMS\Logs folder. Force the
	synchronization as soon as the following message appears:
	
	  Waiting for PDC/BDC Sync (2221)
	
	NOTE: Forcing the replication may create additional or unwanted network traffic,
	particularly over slow network links. If you are considering using this
	workaround, you may want to avoid using it on several BDCs simultaneously. You
	may want to stagger the SMS client installations on domain controllers after
	hours or on a weekend.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
