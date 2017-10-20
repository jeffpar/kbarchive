---
layout: page
title: "Q319207: SMS: Retrying a Package Update May Create Many Jobs"
permalink: /kb/319/Q319207/
---

## Q319207: SMS: Retrying a Package Update May Create Many Jobs

{% raw %}

	Article: Q319207
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbPackage kbSoftwareDist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If Systems Management Server (SMS) Distribution Manager does not update any of
	the local distribution points for a package, the package-update process is
	retried at least once an hour. If Distribution Manager is also working on other
	packages, Distribution Manager retries the unsuccessful package more frequently.
	If this problem occurs on the central site in a large hierarchy, Distribution
	Manager also sends the package information to every site in the hierarchy ever
	time it retries the package. This can significantly increase the number of site
	communication jobs on the central site, and a backlog of job files may occur in
	the \SMS\Inboxes\Schedule.box folder.
	
	CAUSE
	=====
	
	The package-update process does not distinguish between updating local
	distribution points and sending updated package data to lower-level sites in the
	hierarchy. Therefore, when a package is retried but a local distribution point
	is repeatedly not updated, the package information is repeatedly sent to the
	lower-level sites.
	
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
	
	The English post-Service Pack 3 version of this fix should have the following
	file attributes or later:
	
	  Date        Time   Version         Size     File name     Platform
	  ------------------------------------------------------------------
	  1-Mar-2001  17:25  2.00.1493.3253  811,792  Baseutil.dll  Alpha
	  1-Mar-2001  17:45  2.00.1493.3257  360,720  Distmgr.dll   Alpha
	  1-Mar-2001  17:25  2.00.1493.3253  527,296  Baseutil.dll  I386
	  1-Mar-2001  17:45  2.00.1493.3257  231,312  Distmgr.dll   I386
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	You can avoid this problem if you do not have any local distribution points at
	the site where the package is created. This typically requires that no SMS
	client be directly assigned to that particular site.
	
	If SMS Distribution Manager reports a problem in trying to reach a local
	distribution point, resolve the problem as soon as possible. If the distribution
	point has been permanently removed from the network, use the SMS Administrator
	console to modify the properties of any packages that still have this computer
	defined as a valid distribution point.
	
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
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To determine whether the SMS Distribution Manager component is having difficulty
	in updating a local distribution point, examine the SMS status messages for the
	component at the site where the package was created. The following status
	messages are generated when the distribution point is not updated successfully:
	
	  Message ID: 2328 - SMS Distribution Manager failed to copy package
	  <package ID> from <package source> to <Distribution Point
	  location>.
	
	  Message ID: 2302 - SMS Distribution Manager failed to process package
	  <package name> (package ID = <package ID>).
	
	The following status message is generated every time that SMS Distribution
	Manager sends a package update to a lower-level site:
	
	  Message ID: 2339 - SMS Distribution Manager instructed SMS Scheduler and
	  Sender to send the package information for package <package ID> to
	  child site <site code>.
	
	Additionally, the following registry key shows whether SMS Distribution Manager
	is currently retrying any packages at the local site:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components\SMS_DISTRIBUTION_MANAGER\Retry
	  History\<package ID>
	
	You can delete the <package ID> registry key and the values in it to stop
	Distribution Manager from retrying the package update. This does not prevent the
	problem from occurring again if the cause of the problem still exists.
	
	Hotfix Installation Instructions
	--------------------------------
	
	Apply this hotfix to all of the sites in the SMS hierarchy. After you install the
	fix, update any collection that is affected by the problem at the site where the
	collection was created. To install the fix, use one of the following methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Note that
	  Q319207.exe is a Microsoft SMS Installer file that updates specific files on
	  your site server.
	
	2. Log on to the site server by using an account with administrator permissions.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q319207.exe tool and then follow the instructions in the wizard. You
	  can run the file in Quiet mode by using the /s switch.
	
	How to Manually Install the Hotfix:
	
	1. On the site server, quit the SMS Administrator console.
	
	2. Stop the SMS Site Component Manager, SMS Executive, Windows Management, and
	  SMS SQL Monitor services on the site server.
	
	3. Replace the Baseutil.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	4. Replace the Distmgr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file from the hotfix.
	
	5. Restart the SMS Site Component Manager, SMS Executive, Windows Management,
	  and SMS SQL Monitor services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
