---
layout: page
title: "Q239590: SMS: SMSCliToknAcct Connection Attempts to Mapped Drives in Path"
permalink: kb/239/Q239590/
---

## Q239590: SMS: SMSCliToknAcct Connection Attempts to Mapped Drives in Path

	Article: Q239590
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your path contains network drives and you have a Novell NetWare redirector
	installed (either Microsoft Client Services for NetWare (CSNW) or Novell
	intraNetWare Client version 4.5 or earlier), you may experience connection
	attempts to those network drives using SMSCliToknAcct. These connection attempts
	can lead to SMSCliToknAcct being locked out if an account lockout policy is
	enabled for the domain.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	NOTE: This hotfix only addresses the problem if you have Microsoft CSNW
	installed. To resolve this problem if you have Novell IntraNetWare client
	installed, upgrade to the latest version of the redirector.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove all network drives from the path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps at the Systems Management
	Server site server:
	
	1. Stop the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	2. Replace the Ccmcore.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\Base\i386 folder with the version
	  obtained from the hotfix.
	
	3. Replace the Clicore.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\Base\i386 folder with the version
	  obtained from the hotfix.
	
	4. Replace the Compver.ini file in the <SMS_root>\Inboxes\Clicomp.src\Base
	  folder with the version obtained from the hotfix.
	
	5. Replace the Bindsvrn.dll file in the <SMS_root>\Bin\i386 folder with
	  the version obtained from the hotfix.
	
	6. Replace the Ndssvrn.dll file in the <SMS_root>\Bin\i386 folder with the
	  version obtained from the hotfix.
	
	7. Replace the Mslmclin.dll file in the <SMS_root>\Bin\i386 folder with
	  the version obtained from the hotfix.
	
	8. Start the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	NOTE: The default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the files that
	are in this hotfix to be propagated to the clients. To speed up this process,
	you can stop and then restart the SMS Client Service on each client. You can
	also create a software distribution by using the Setevnt.exe or the Cliutils.exe
	Resource Kit tools. You must include the appropriate parameters to start a CCIM
	work cycle. For information about the proper syntax for these tools, see the
	Resource Kit documentation.
	
	Additional query words: prodsms novel
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
