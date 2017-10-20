---
layout: page
title: "Q308238: SMS Rchelp.sys File Prevents Chkdsk.exe From Running"
permalink: /kb/308/Q308238/
---

## Q308238: SMS Rchelp.sys File Prevents Chkdsk.exe From Running

{% raw %}

	Article: Q308238
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbHelpDesk
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Microsoft Windows NT-based workstation that is running
	Systems Management Server (SMS) 2.0 with SMS Remote Control installed, you may
	receive the following error message:
	
	  Cannot open volume for direct access
	
	CAUSE
	=====
	
	The preceding error message may occur when a disk check (Chkdsk.exe) that is
	scheduled to run during startup is unable to run. The SMS Remote Control Helper
	Driver (Rchelp.sys) evaluates the currently-installed video drivers, and then
	writes their contents to the <systemroot>\system32\Viddrv.rch file on
	reboot so that the video accelerator driver can attempt to load the correct
	driver. The process of writing this file places a lock that prevents Chkdsk.exe
	from gaining exclusive access to the disk. Because Chkdsk.exe does not have
	exclusive access to the disk, Chkdsk.exe cannot run.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next SMS 2.0 service pack that contains this
	fix.
	
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
	
	 Date       Time   Version         Size       File name           Platform 
	 -------------------------------------------------------------------------
	 06-Oct-00  23:00                         65  Compverremctrl.ini  Alpha
	 06-Oct-00  23:00  4.00.1493.2234     26,480  Rchelp.sys          Alpha
	 06-Oct-00  23:00  2.0.92.08       1,686,036  Remctrl.exe         Alpha
	
	 06-Oct-00  23:00                         65  Compverremctrl.ini  Intel
	 06-Oct-00  23:00  4.00.1493.2234     16,544  Rchelp.sys          Intel
	 06-Oct-00  23:00  2.0.148.00      1,352,209  Remctrl.exe         Intel
	
	The English post-SMS 2.0 Service Pack 3 (SP3) version of this fix should have the
	following file attributes or later:
	
	 Date       Time   Version         Size       File name           Platform 
	 -------------------------------------------------------------------------
	 01-Mar-01  23:05                         65  Compverremctrl.ini  Alpha
	 01-Mar-01  23:05  4.00.1493.3225     26,480  Rchelp.sys          Alpha
	 01-Mar-01  23:05  2.0.92.09       1,681,799  Remctrl.exe         Alpha
	
	 01-Mar-01  23:05                         65  Compverremctrl.ini  Intel
	 01-Mar-01  23:05  4.00.1493.3225     16,544  Rchelp.sys          Intel
	 01-Mar-01  23:05  2.0.92.09       1,354,289  Remctrl.exe         Intel
	
	
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
	
	To install the hotfix, use one of the following methods on the SMS site server
	and on each of the SMS Administrator consoles.
	
	Method 1: How to Use the Hotfix Installer
	-----------------------------------------
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Note that
	  Q308238.exe is an SMS Installer file that updates specific files on your site
	  server.
	
	2. Log on to the site server by using an account with administrative privileges.
	
	3. Run Q308238.exe, and then follow the instructions in the wizard. You can run
	  the file in quiet mode by using the /s switch.
	
	  NOTE: The default Client Configuration Installation Manager (CCIM) polling
	  interval is 23 hours. Because of this, it may take up to 23 hours for the
	  hotfix files to be propagated to the client computers. To propagate the
	  hotfix in a smaller amount of time, create a software distribution for the
	  Setevnt.exe or Cliutils.exe resource kit tool, and then use the appropriate
	  parameter or parameters to start a CCIM work cycle. For information about the
	  correct syntax to use with these tools, view the resource kit documentation.
	
	Method 2: How to Manually Install the Hotfix on the Site Server
	---------------------------------------------------------------
	
	To manually install the hotfix on the site server:
	
	1. Stop the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	2. Replace the Remctrl.exe file in the
	  SMS_root\Inboxes\Clicomp.src\Remctrl\Platform folder with the version of the
	  file that you obtain from the hotfix.
	
	3. Replace the Compver.ini file in the SMS_root\Inboxes\Clicomp.src\Remctrl
	  folder with the version of the file that you obtain from the hotfix. Note
	  that you must rename the CompverRemctrl.ini file to Compver.ini.
	
	4. Start the SMS_EXECUTIVE and the SMS_SITE_COMPONENT_MANAGER services.
	
	  NOTE: The default CCIM polling interval is 23 hours. Because of this, it may
	  take up to 23 hours for the hotfix files to be propagated to the client
	  computers. To propagate the hotfix in a smaller amount of time, create a
	  software distribution for the Setevnt.exe or Cliutils.exe resource kit tool,
	  and then use the appropriate parameter or parameters to start a CCIM work
	  cycle. For information about the correct syntax to use with these tools, view
	  the resource kit documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbHelpDesk 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP2,2.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
