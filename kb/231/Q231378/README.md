---
layout: page
title: "Q231378: SMS: Pcmwin32 Exits When It Is Unable to Initialize"
permalink: /kb/231/Q231378/
---

## Q231378: SMS: Pcmwin32 Exits When It Is Unable to Initialize

	Article: Q231378
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsms120 kbsms120bug kbPCM
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If PCMWIN32 attempts to initialize while PCMSVC32 is busy processing a job,
	PCMWIN32 is unable to obtain the semaphore and exits. The following is logged in
	the Pcmwin.log file:
	
	Package Command Manager ==> Initializing .....
	Package Command Manager ==> PCM Service busy dialog is enabled (default).
	Package Command Manager ==> Timed out waiting for the PCM service semaphore.
	Package Command Manager ==> Failed to get control of the semaphore from
	PCMSVC.
	Package Command Manager ==> Exiting .........
	
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
	
	  Date      Time           Size     File name     Platform
	  --------------------------------------------------------
	
	  5/4/99   4:49pm        469,936   Pcmwin32.exe   (x86)
	  5/4/99   4:49pm      1,175,312   Pcmwin32.exe   (Alpha)
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, manually restart PCMWIN32 after PCMSVC32 completes
	the processing of a job.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, replace the Pcmwin32.exe file in the
	<SMS_root>\Site.srv\Maincfg.box\Client.src\<Platform>.bin directory
	with the hotfixed version.
	NOTE: You can do this automatically by running Hotfix.exe with the Hotfix.ini
	file provided.
	
	Maintenance Manager will replicate the updated file to the Systems Management
	Server logon servers on its next work cycle.
	
	To update the clients running PCMWIN32, either manually run Upgrade.bat on each
	client or follow the instructions in the following article in the Microsoft
	Knowledge Base:
	
	  Q166771 SMS: How to Force Site-Wide Client Updates
	
	Additional query words: prodsms pcm exit
	
	======================================================================
	Keywords          : kbsms120 kbsms120bug kbPCM 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
