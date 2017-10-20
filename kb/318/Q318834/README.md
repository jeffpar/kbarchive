---
layout: page
title: "Q318834: SMS Package Source Versions May Be Reported Incorrectly"
permalink: /kb/318/Q318834/
---

## Q318834: SMS Package Source Versions May Be Reported Incorrectly

{% raw %}

	Article: Q318834
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Operating System(s): 
	Keyword(s): kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3, 2.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The source version of a Systems Management Server (SMS) Package that appears in
	the SMS Administrator console at a child site may be different from the source
	version that appears in the parent site's SMS Administrator console view of the
	same child site.
	
	In the SMS Administrator console on the child site you see the source version by
	clicking System Status, Package Status, <Package Name>, and then <Child
	Site>.
	
	In the SMS Administrator console on the parent site you see the source version by
	clicking System Status, Package Status, <Package Name>, and then <Child
	Site>.
	
	After the package source has been successfully updated, the two versions are the
	same. If they are not the same and if there are no backlogs in the status
	message files that are being received and processed on the parent site, the site
	hierarchy may be experiencing the problem that is corrected by the hotfix that
	is described in this article.
	
	CAUSE
	=====
	
	SMS status messages that are created at the child site to report the source
	version may be processed out of sequence when they are received at the parent
	site. Additionally, the current reported source version is not checked before
	the status message is processed. Therefore, the source version is regressed if
	the reported source version is earlier than the existing source version.
	
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
	
	The English post-SP3 version of this fix should have the following file
	attributes or later:
	
	  
	
	  Date         Time   Version        Size     File name     Platform
	  ------------------------------------------------------------------
	  01-Mar-2001  17:20  2.0.1493.3240  810,768  Baseutil.dll  Alpha
	  01-Mar-2001  17:25  2.0.1493.3241  360,720  Distmgr.dll   Alpha
	  01-Mar-2001  17:20  2.0.1493.3240  526,272  Baseutil.dll  Intel
	  01-Mar-2001  17:25  2.0.1493.3241  231,312  Distmgr.dll   Intel
	
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
	
	
	How to Install the Hotfix
	-------------------------
	
	Apply this fix on all of the sites in the SMS hierarchy. To install the fix, use
	one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on I386-based computers.
	
	1. Copy the hotfix folder structure to a local folder on your site server or to
	  a share on your network. The I386 and Alpha subfolders are required; you must
	  also download them from the Microsoft FTP site. It is important to keep the
	  folder structure intact. The Q318834.exe file is a Microsoft Windows
	  Installer file that updates specific files on your site server.
	
	2. Log on to your site server by using an account with administrator
	  permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q318834.exe file and follow the instructions in the wizard. The
	  Systems Management Server services are stopped and restarted as part of the
	  installation process.
	
	How to Manually Install the Hotfix:
	
	1. Copy the update program file (Q318834.exe) and platform folders to a new
	  folder. The program file must be located one folder "above" the platform
	  folders.
	
	2. Quit the SMS Administrator console and stop all SMS services in Control
	  Panel. If the SMS_SITE_BACKUP service is running, stop it also.
	
	3. Replace the Baseutil.dll file in the SMS\Bin\<Platform> folder with the
	  version located in the hotfix <Platform> folder
	
	4. Replace the Distmgr.dll file in the SMS\Bin\<Platform> folder with the
	  version located in the hotfix <Platform> folder
	
	5. Restart the SMS site services.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS200SP4
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3,2.0 SP4
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
