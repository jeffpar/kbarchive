---
layout: page
title: "Q316132: SMS: Collection Replication Does Not Work with Carriage Return"
permalink: /kb/316/Q316132/
---

## Q316132: SMS: Collection Replication Does Not Work with Carriage Return

	Article: Q316132
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbCollections
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Collections that have a carriage return or line feed in the comment may not be
	replicated to child sites correctly. If you view the collection properties at a
	child site, the portion of the comment that is after the carriage return may be
	missing, and the collection's update schedule may not be defined. Note that when
	you create or edit a collection, you can add a new line to the comment field by
	pressing ENTER or CTRL+ENTER.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Systems Management Server (SMS) service
	pack that contains this fix.
	
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
	
	  Date       Time   Version         Size       File name    Platform
	  ------------------------------------------------------------------
	  01-Mar-01  16:15  2.00.1493.3227  2,431,760  Basesvr.dll  Alpha
	  01-Mar-01  16:15  2.00.1493.3227  1,579,936  Basesvr.dll  Intel
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains these files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do not use ENTER or CTRL+ENTER in the comments
	field of the collection properties.
	
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
	
	Hotfix Installation Instructions
	--------------------------------
	
	Apply the fix in this article to all sites in the SMS hierarchy. After you
	install the fix, update the collections that are affected by the problem at the
	site where it was created. To install the fix, use one of the following
	methods.
	
	How to Use the Hotfix Installer:
	
	NOTE: You can use this method only on Intel-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Note that
	  Q316132.exe is an SMS Installer file that updates specific files on your site
	  server.
	
	2. Log on to the site server by using an account with administrative rights.
	
	3. On the site server, quit the SMS Administrator console.
	
	4. Run the Q316132.exe tool, and then follow the directions in the wizard. You
	  can run the file in Quiet mode by using the /s switch.
	
	How to Manually Install the Hotfix:
	
	1. On the site server, quit the SMS Administrator console.
	
	2. Stop the SMS Site Component Manager, SMS Executive, and SMS SQL Monitor
	  services on the site server.
	
	3. Replace the Basesvr.dll file in the
	  <Sms_root_folder>\Bin\<Platform> folder with the version of the
	  file that is included with the hotfix.
	
	4. Restart the SMS Site Component Manager, SMS Executive, Windows Management,
	  and SMS SQL Monitor services.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbCollections 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
