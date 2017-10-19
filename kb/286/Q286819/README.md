---
layout: page
title: "Q286819: SMS 1.2 SP3 Inventory Agent May Corrupt Network Adapter Data"
permalink: /kb/286/Q286819/
---

## Q286819: SMS 1.2 SP3 Inventory Agent May Corrupt Network Adapter Data

	Article: Q286819
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) 1.2 Service Pack 3 (SP3) Hardware Inventory
	agent version may corrupt some entries from the Microsoft Windows 2000 object
	table if the agent is installed and started on a Microsoft Windows 2000
	Professional-based computer.
	
	RESOLUTION
	==========
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size     File name     Platform
	  -------------------------------------------------
	  01/20/01  03:01a  863,504  Inv32cli.exe  Alpha
	  01/20/01  03:01a  225,552  Invproc.dll   Alpha
	  01/20/01  03:01a  879,888  Invwin32.exe  Alpha
	  01/20/01  03:00a  281,504  Inv32cli.exe  Intel
	  01/20/01  03:01a  110,048  Invproc.dll   Intel
	  01/20/01  03:00a  293,264  Invwin32.exe  Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	To install the hotfix, follow these steps:
	
	1. Stop the SMS Executive and the SMS Inventory Agent services on the site
	  server.
	
	2. Rename the Invproc.dll file in the SMS\Site.srv\X86.bin folder to
	  Invproc.old.
	
	3. Copy the new Invproc.dll file to the folder that is listed in step 2.
	
	4. Replace the Invwin32.exe file in the
	  <SMS_root>\Site.srv\<Platform>.bin folder on the site server with
	  the version obtained from the hotfix.
	
	5. Replace the Inv32cli.exe and Invwin32.exe files in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\X86.bin folder on the site
	  server with the versions obtained from the hotfix.
	
	6. Replace the Inv32cli.exe and Invwin32.exe files in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\Alpha.bin folder on the site
	  server with the versions obtained from the hotfix.
	
	7. Restart the SMS Executive and SMS Inventory Agent services on the site
	  server. Maintenance Manager propagates the changed files to the logon
	  servers.
	
	To update the clients, you can either run Upgrade.bat manually on each client or
	use the method that is described in the following Microsoft Knowledge Base
	article:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120SP3
	Version           : :1.2 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
