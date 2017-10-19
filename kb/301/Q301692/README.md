---
layout: page
title: "Q301692: SMS: Processor Speed May Be Incorrectly Reported as 1 GHz"
permalink: /kb/301/Q301692/
---

## Q301692: SMS: Processor Speed May Be Incorrectly Reported as 1 GHz

	Article: Q301692
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 1.2 client computers that are running Microsoft
	Windows NT may report Pentium III processor speeds incorrectly. For example, a
	Pentium III 933-megahertz (MHz) processor may be reported as a 1-gigahertz (GHz)
	processor.
	
	CAUSE
	=====
	
	This issue occurs because the processor normalization code that determines the
	processor speed does not correctly identify Pentium processors between 833 MHz
	and 1 GHz.
	
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
	
	  Date        Time    Size     File name     Platform  Version
	  ------------------------------------------------------------
	  06/25/2001  06:13p  283,104  Inv32cli.exe  Intel     1.2.0.0
	  06/25/2001  06:10p  111,584  Invproc.dll   Intel     1.2.0.0
	  06/25/2001  06:14p  296,368  Invwin32.exe  Intel     1.2.0.0
	  06/25/2001  06:14p  866,576  Inv32cli.exe  Alpha     1.2.0.0
	  06/25/2001  06:11p  229,136  Invproc.dll   Alpha     1.2.0.0
	  06/25/2001  06:15p  882,448  Invwin32.exe  Alpha     1.2.0.0
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The value that SMS queries is located in the following registry key:
	
	  HKEY_LOCAL_MACHINE\HARDWARE\DESCRIPTION\System\CentralProcessor\0\~MHz
	
	For Windows NT-based clients, this hotfix adds support for Pentium III 833-MHz,
	850-MHz, 866-MHz, 900-MHz, 933-MHz, 1,100-MHz, and 1,133-MHz processors, and for
	Pentium 4 1.3-GHz, 1.4-GHz, 1.5-GHz, and 1.7-GHz processors. No additional
	support has been added for 16-bit clients.
	
	NOTE: You should apply this hotfix only to an SMS 1.2 Service Pack 4 (SP4) site.
	
	To install the hotfix, follow these steps:
	
	1. Stop the SMS Executive and SMS Inventory Agent services on the site server.
	
	2. In the <SMS_root_folder>\Site.srv\<Platform>.bin folder on the
	  site server, replace the Invwin32.exe and Invproc.dll files with the versions
	  obtained from the hotfix.
	
	3. In the <SMS_root_folder>\Site.srv\Maincfg.box\Client.src\X86.bin folder
	  on the site server, replace the Inv32cli.exe and Invwin32.exe files with the
	  versions obtained from the hotfix.
	
	4. In the <SMS_root_folder>\Site.srv\Maincfg.box\Client.src\Alpha.bin
	  folder on the site server, replace the Inv32cli.exe and Invwin32.exe files
	  with the versions obtained from the hotfix.
	
	5. Restart the SMS Executive and SMS Inventory Agent services on the site
	  server. Maintenance Manager will propagate the changed files to the logon
	  servers.
	
	To update the clients, either manually run Upgrade.bat on each client, or use the
	information from the following Microsoft Knowledge Base article:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
