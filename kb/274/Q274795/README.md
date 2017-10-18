---
layout: page
title: "Q274795: SMS: Site System Status Summary Dates Appear Out-of-Date"
permalink: kb/274/Q274795/
---

## Q274795: SMS: Site System Status Summary Dates Appear Out-of-Date

	Article: Q274795
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbStatSum
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Site System status in the Systems Management Server (SMS)
	Administrator console at a central site, the summary dates and times for child
	sites may not be synchronized with the actual values at the child sites
	themselves. This becomes more noticeable in large SMS hierarchies in which you
	can see that some sites' summary dates and times remain up-to-date, while others
	remain out of synchronization by hours or days.
	
	If, for example, a site hierarchy consists of three tiers (a central site, a
	primary child site, and numerous third-tier secondary sites), the Site System
	status summary dates and times for the child sites, when you view them on the
	central site console, may not be synchronized. When you view the same summary
	dates and times on the primary child site, all the summary times for that site
	and its child sites are current.
	
	CAUSE
	=====
	
	This problem is known to occur in site hierarchies with three or more tiers. A
	primary site with a number of subordinate sites can potentially delete site
	summaries that it has processed and has submitted to SMS Replication Manager for
	replication to its own parent site. The parent site may therefore receive only a
	fraction of the site summaries for its subordinate sites.
	
	One factor that influences this behavior is the time of the incoming site
	summaries at the first primary site to receive child site summaries. If the
	summaries arrive and are processed by SMS_SITE_SYSTEM_STATUS_SUMMARIZER within a
	short time frame, they can be placed in the same replication batch to that
	site's parent. Only the newest site summary in that replication batch is sent to
	the parent site, which gives the appearance at the parent site that some sites
	may be offline.
	
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
	
	  Date       Version          Size        File name     Platform
	  --------------------------------------------------------------
	   6/10/00   2.00.1493.2154   1,571,744   Basesvr.dll   Intel
	  11/10/99   2.00.1250.0007     762,688   Preinst.exe   Intel
	   6/10/00   2.00.1493.2154   2,409,744   Basesvr.dll   Alpha
	
	
	
	Installing the Hotfix
	---------------------
	
	Using the Hotfix Installer:
	
	NOTE: This method is for Intel-based computers only.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha folders are required; it is
	  important to keep the folder structure intact. The Q274795.exe file is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrator privileges.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run Q274795.exe and follow the instructions in the wizard. You can run this
	  file in Quiet mode by using the /s switch.
	
	5. The SMS services are stopped as part of the installation process. The
	  services are automatically be restarted when the hotfix installation is
	  complete.
	
	Manual Installation:
	
	NOTE: You can use this method for both Intel-based and Alpha-based site servers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha folders are required and must
	  also be downloaded from Microsoft site. It is important to keep the folder
	  structure intact. Q274795.exe is a Microsoft Windows Installer file that
	  updates specific files on your site server and can only be run on Intel-based
	  computers. Refer to the first installation method in this article for
	  information about how to use Q274795.exe.
	
	2. Quit the SMS Administrator console and stop all SMS services in Control
	  Panel. If the SMS_SITE_BACKUP service is running, stop it also.
	
	3. Copy the Basesvr.dll file from the hotfix <Platform> folder into the
	  <Drive>:\Sms\Bin\<Platform> folder.
	
	4. Restart the SMS services.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbStatSum 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
