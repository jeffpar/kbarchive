---
layout: page
title: "Q256071: SMS: Inventory Agent Does Not Detect Pentium III Processors"
permalink: kb/256/Q256071/
---

## Q256071: SMS: Inventory Agent Does Not Detect Pentium III Processors

	Article: Q256071
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,1.2 SP4
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Hardware Inventory agent does not detect
	Pentium III processors. The Hardware Inventory agent also does not correctly
	identify Pentium II processors that are of type "Family 6 model 6."
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
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
	
	  Date        Time     Size     File name     Platform
	  ----------------------------------------------------
	  05/02/2000  07:47am  4.19 KB  Getcomp.exe   Intel
	  05/02/2000  07:48am  276 KB   Inv32cli.exe  Intel
	  05/02/2000  07:49am  108 KB   Invproc.dll   Intel
	  05/02/2000  07:49am  288 KB   Invwin32.exe  Intel
	  03/21/2000  07:48am  14.5 KB  Os2bios.exe   Intel
	  05/02/2000  07:51am  845 KB   Inv32cli.exe  Alpha
	  05/02/2000  07:50am  222 KB   Invproc.dll   Alpha
	  05/02/2000  07:51am  861 KB   Invwin32.exe  Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
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
	
	5. Replace the Os2bios.exe, Inv32cli.exe, Invwin32.exe, and Getcomp.exe files in
	  the <SMS_root>\Site.srv\Maincfg.box\Client.src\X86.bin folder on the
	  site server with the versions obtained from the hotfix.
	
	6. Replace the Inv32cli.exe and Invwin32.exe files in the
	  <SMS_root>\Site.srv\Maincfg.box\Client.src\Alpha.bin folder on the site
	  server with the versions obtained from the hotfix.
	
	7. Restart the SMS Executive and SMS Inventory Agent services on the site
	  server. Maintenance Manager propagates the changed files to the logon
	  servers.
	
	To update the clients, you can either manually run Upgrade.bat on each client, or
	use the method described in the following Microsoft Knowledge Base article:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120 kbSMS120SP4
	Version           : winnt:1.2,1.2 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
