---
layout: page
title: "Q222988: SMS: SystemRole and SystemType Values Removed from Sms.ini"
permalink: kb/222/Q222988/
---

## Q222988: SMS: SystemRole and SystemType Values Removed from Sms.ini

	Article: Q222988
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
	
	The SystemRole and SystemType values in the [Local] section of the Sms.ini file
	are blank.
	
	CAUSE
	=====
	
	This problem can occur when the Hardware Inventory Frequency setting for the
	site is set to a value other than Every Workstation Logon and either of the
	following conditions are true:
	
	- The LastLoggedUser value in the [Logon History] section is blank or the
	  entire [Logon History] section is missing and Inv32cli.exe (the Systems
	  Management Server Client Inventory Service) begins its work cycle but it is
	  not yet time to take inventory. Invwin32.exe (the SMS_INVENTORY_AGENT_NT
	  Service) does not exhibit this problem.
	
	  -or-
	
	- A client is in the process of moving from one site/domain to another and
	  inventory is skipped by the Inventory Agents.
	
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
	
	  Date      Time        Size      File name      Platform
	  -------------------------------------------------------
	  2/24/99   4:37pm      283,600   Inv32cli.exe   (x86)
	  2/24/99   4:38pm      296,352   Invwin32.exe   (x86)
	  2/24/99   4:38pm      867,088   Inv32cli.exe   (Alpha)
	  2/24/99   4:39pm      883,472   Invwin32.exe   (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, either manually force a full inventory or wait
	until it is time for a full inventory to be taken.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, perform the following steps on the Systems Management
	Server site server:
	
	1. Replace the Inv32cli.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin
	  directory with the hotfixed version.
	
	2. Replace the Invwin32.exe file in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin
	  directory with the hotfixed version.
	
	3. Replace the Invwin32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin directory with the hotfixed
	  version.
	
	4. Maintenance Manager will replicate the updated files to the Systems
	  Management Server logon servers on its next work cycle. To update the
	  clients, either manually run Upgrade.bat on each client or follow the
	  instructions in the following article in the Microsoft Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	5. A site reset is required for Invwin32.exe (SMS_INVENTORY_AGENT_NT) to be
	  copied to all servers managed by the Site Configuration Manager.
	
	
	Additional query words: prodsms smsinv
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbInventory 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
