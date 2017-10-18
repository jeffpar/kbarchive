---
layout: page
title: "Q231362: SMS: Using SmsrunStartupDelay Causes Win 95/98 Clients to Hang"
permalink: kb/231/Q231362/
---

## Q231362: SMS: Using SmsrunStartupDelay Causes Win 95/98 Clients to Hang

	Article: Q231362
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Windows 95 or Microsoft Windows 98 client computer may stop
	responding. This problem may occur if:
	
	1. The hotfixed Smsrun16.exe that is documented in the following article in the
	  Microsoft Knowledge Base was applied:
	
	  Q191067 SMS: PGC Fails to Configure Apps When Roaming Profiles Are Used
	
	2. A value for the SmsrunStartupDelay was specified.
	
	When this problem occurs, the computer running Windows 95/98 stops responding for
	the entire duration of the SmsrunStartupDelay value specified.
	
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
	
	  Date      Time         Size    File name      Platform
	  ------------------------------------------------------
	
	  5/3/99   9:33pm      100,572   Smsrun16.exe   x86
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, replace the Smsrun16.exe file in the
	<SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin directory
	with the hotfixed version.
	
	Maintenance Manager will replicate the new Smsrun16.exe to the
	Logon.srv\<Platform>.bin directory on the Systems Management Server logon
	servers during its next work cycle. After that occurs, you can update the
	clients. To update the clients, either manually run Upgrade.bat on each client
	or follow the instructions in the following article in the Microsoft Knowledge
	Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms smsrun win win95 win98 win9x 9x hang hangs hung freeze freezes frozen lock locks locked up
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
