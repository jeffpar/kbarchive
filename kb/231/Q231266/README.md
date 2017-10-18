---
layout: page
title: "Q231266: &quot;Cannot Open SQL Server&quot; Error Message and Report Does Not Run"
permalink: kb/231/Q231266/
---

## Q231266: &quot;Cannot Open SQL Server&quot; Error Message and Report Does Not Run

	Article: Q231266
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbsms200 kbsms200bug
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) 2.0 includes a version of Crystal Reports. You
	can use this tool to collate information about how SMS is operating in your
	organization and to prepare administrative information in an easy-to-read report
	format.
	
	When you try to schedule a report to run on an SMS 2.0 site server that is
	running on a Microsoft Windows NT Member server, the report may not run, and you
	may receive the following error message in the report properties:
	
	  Cannot open SQL server
	
	CAUSE
	=====
	
	This issue can occur if the SMS Service account does not have the "Act as a part
	of the Operating System" advanced user right on the SMS site server. Note that
	this may occur even if the SMS Service account is not being used to run the
	report.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start User Manager for domains, click User, click Select Domain, and then
	  enter the local computer name.
	
	2. Click Policies, and then click User rights.
	
	3. In the User Rights Policy dialog box, click to select the "Show Advanced User
	  Rights" check box.
	
	4. On the right-sice drop down list box, click "Act as part of the operating
	  system".
	
	5. Click Add, enter the siteserverdomain\smsserviceaccount in the Add Names box,
	  and then click OK.
	
	6. Click OK on User Rights Policy dialog box.
	
	7. Stop and then restart all of the following Crystal services:
	
	- Info Agent
	- Info APS
	- Info Sentinel
	
	Additional query words: prodsms 2.00
	
	======================================================================
	Keywords          : kberrmsg kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
