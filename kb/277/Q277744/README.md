---
layout: page
title: "Q277744: SMS: Status Is Displayed Incorrectly When Using Advertview"
permalink: kb/277/Q277744/
---

## Q277744: SMS: Status Is Displayed Incorrectly When Using Advertview

	Article: Q277744
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement kbCollect
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Advertisement Status Viewer (Advertview.exe) tool to determine
	the status of an advertisement on an individual Systems Management Server (SMS)
	client or collection with a user-defined interval, the status of an
	advertisement may be reported as "None." However, the SMS Administrator console
	and direct queries against the SMS database may indicate that the status of the
	advertisement is either "Success" or "Failure."
	
	CAUSE
	=====
	
	This issue can occur if the name of the computer for which you are checking the
	status was entered in the database (the Name0 value in System_DISC) in lowercase
	letters.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next SMS service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time   Version    Size     File name       Platform
	  -------------------------------------------------------------- 
	  08-May-01  13:18  2.00.1469  528,384  Advertview.exe  Intel
	  08-May-01  13:20  2.00.1469  685,568  Advertview.exe  Alpha
	
	NOTE: Because of file dependencies, the most recent hotfix or feature that
	contains the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use the SMS Administrator console to view the
	advertisement status for computers whose names are displayed in the database
	with lowercase letters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbDatabase kbsms200 kbsms200bug kbsms120 kbsms120bug kbAdvertisement kbCollections kbsmsUtil kbStatSum kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200SP2 kbSMS200SP3
	Version           : :2.0 SP2,2.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
