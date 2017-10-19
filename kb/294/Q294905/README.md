---
layout: page
title: "Q294905: SMS: Build 698 or Later Is Required to Use the Advertview Tool"
permalink: /kb/294/Q294905/
---

## Q294905: SMS: Build 698 or Later Is Required to Use the Advertview Tool

	Article: Q294905
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200bug kbsms200fix kbsmsUtil
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the Advertisement Status Viewer (Advertview.exe) tool, you
	may receive the following error message:
	
	  WMI (Windows Management Instrumentation) build 698 or higher is required to
	  use AdvertView
	
	CAUSE
	=====
	
	This problem occurs because Advertview does not run on computers with regional
	settings that use a comma in place of decimal points.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Systems Management Server (SMS) service pack that contains this
	fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  
	
	  Date        Time     Size     File name       Platform
	  ------------------------------------------------------
	  04/25/2001  02:29am  685,568  AdvertView.exe  Alpha
	  04/25/2001  02:30am  528,384  AdvertView.exe  Intel
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, change your regional settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200bug kbsms200fix kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
