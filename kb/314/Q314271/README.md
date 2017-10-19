---
layout: page
title: "Q314271: SMS: Windows Explorer May Consume CPU Resources"
permalink: /kb/314/Q314271/
---

## Q314271: SMS: Windows Explorer May Consume CPU Resources

	Article: Q314271
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Systems Management Server (SMS) client computer that is running the SMS
	Remote Control agent (Wuser32.exe), Windows Explorer may suddenly begin to
	consume all of the available CPU resources when the Remote Control agent is
	stopped. This may result in poor responsiveness and performance. Windows
	Explorer may also exhibit other unusual behavior, such as activating the wrong
	window, or not responding when you right-click the desktop to adjust your
	settings. You must stop and then restart Explorer.exe to recover from this
	condition.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next SMS service pack that contains this fix.
	
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
	
	  
	
	  Date         Time   Version        Size       File name           Platform
	  --------------------------------------------------------------------------
	  01-Mar-2001  17:40                        67  Compverremctrl.ini
	  01-Mar-2001  17:40  2.0.92.9       1,681,800  Remctrl.exe         Alpha 
	  01-Mar-2001  17:40  2.0.1493.3220    389,904  Wuser32.exe         Alpha 
	  01-Mar-2001  17:40  2.0.92.9       1,354,289  Remctrl.exe
	  01-Mar-2001  17:40  2.0.1493.3220    264,256  Wuser32.exe
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	This problem occurs only if Active Desktop is activated. To avoid this problem,
	deactivate Active Desktop.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	the Systems Management Server 2.0 Service Pack 4 Hotfix Rollup Package (HRP).
	
	For additional information about the SMS 2.0 SP4 HRP, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q323206 SMS: List of Bugs Fixed in the Systems Management Server 2.0 SP4 HRP
	
	MORE INFORMATION
	================
	
	How to Install the Hotfix
	-------------------------
	
	To Use the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q314271.exe is
	  an SMS Installer file that updates specific files on your site server.
	
	2. Log on to the site server or the computer that is running the SMS
	  Administrator console by using an account with administrative permissions.
	
	3. Make sure that the SMS Administrator console is not running.
	
	4. Run Q314271.exe and follow the instructions in the wizard. You can run the
	  file in Quiet mode by using the /s switch.
	
	Note that the default Client Configuration Installation Manager (CCIM) polling
	interval is 23 hours. Therefore, it may take up to 23 hours for the hotfixed
	files to be propagated to the clients. To speed up this process, you can create
	a software distribution for the Setevnt.exe or Cliutils.exe Resource Kit tool,
	along with the appropriate parameters to start a CCIM work cycle. For
	information about the proper syntax to use with these tools, see the Resource
	Kit documentation.
	
	Manual Installation on the Site Server:
	
	1. Stop the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	2. On the site server, make sure that the SMS Administrator console is not
	  running.
	
	3. Replace the Remctrl.exe file in the
	  <SMS_root>\Inboxes\Clicomp.src\Remctrl\<Platform> folder with the
	  version from the hotfix.
	
	4. Replace the Compver.ini file in the
	  <SMS_root>\Inboxes\Clicomp.src\Remctrl folder with the version from the
	  hotfix. You must rename the Compverremctrl.ini file to Compver.ini.
	
	5. Start the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
