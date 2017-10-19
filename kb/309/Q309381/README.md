---
layout: page
title: "Q309381: A Distribution Point Does Not Appear on the Parent"
permalink: /kb/309/Q309381/
---

## Q309381: A Distribution Point Does Not Appear on the Parent

	Article: Q309381
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP3
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you add a distribution point to a child site, remove the distribution point,
	and then add the distribution point to the child site again from the child site,
	the distribution point may not appear in the console on a parent site.
	
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
	
	  Date         Time   Version         Size     File name    Platform
	  ------------------------------------------------------------------
	  01-Mar-2001  20:45  2.00.1493.3197  359,184  Distmgr.dll  Alpha
	  01-Mar-2001  20:45  2.00.1493.3197  230,800  Distmgr.dll  Intel
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
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
	
	To Install the Hotfix
	---------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is only for Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q309381.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrative
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q309381.exe and follow the instructions in the wizard.
	
	Manually Installing the Hotfix:
	
	To install the hotfix, follow these steps on the SMS site server:
	
	1. Copy the contents of the hotfix (including the subfolders) to a local folder
	  on the site servers that you are updating.
	
	2. Stop the SMS Site Component Manager and SMS Executive services on the SMS
	  site servers on which you are installing the hotfix files.
	
	3. Copy the Distmgr.dll file from the hotfix installation <Platform>
	  folder to the SMS\Bin\<Platform>.bin folder on the SMS site servers.
	
	4. Restart the SMS Site Component Manager service. The SMS Executive service is
	  automatically restarted by Site Component Manager.
	
	Additional query words: dp
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200SP3
	Version           : :2.0 SP3
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
