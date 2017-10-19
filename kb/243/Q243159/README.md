---
layout: page
title: "Q243159: SMS: Long Path Causes &quot;Access Violation&quot; in Invwin32.exe"
permalink: /kb/243/Q243159/
---

## Q243159: SMS: Long Path Causes &quot;Access Violation&quot; in Invwin32.exe

	Article: Q243159
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbInventory
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Invwin32.exe attempts to scan a long path (longer than 256 characters), it
	may generate an "Access violation" error message.
	
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
	
	  Date      Time   Version      Size     File name    Platform
	  ------------------------------------------------------------
	  9/15/99   6:32pm              282,592  Inv32cli.exe x86
	  9/15/99   6:33pm              295,344  Invwin32.exe x86
	  9/15/99   6:34pm              865,552  Inv32cli.exe Alpha
	  9/15/99   6:35pm              881,936  Invwin32.exe Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps on the Systems Management Server site
	server:
	
	1. Replace the Inv32cli.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin folder
	  with the hotfix version.
	
	2. Replace the Invwin32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin folder
	  with the hotfix version.
	
	3. Replace the Invwin32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin folder with the hotfix
	  version.
	
	4. Maintenance Manager replicates the updated files to the Systems Management
	  Server logon servers on its next work cycle. To update the clients, either
	  manually run Upgrade.bat on each client or follow the instructions in the
	  following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	5. A site reset is required for Invwin32.exe (SMS_INVENTORY_AGENT_NT) to be
	  copied to all servers managed by Site Configuration Manager. You can manually
	  perform this process by stopping the SMS_INVENTORY_AGENT_NT service on each
	  server and replacing the Invwin32.exe file in the
	  <SMS_root>\Helper.srv\<Platform>.bin folder with the hotfix
	  version.
	
	Additional query words: prodsms invwin32 av path gpf
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
