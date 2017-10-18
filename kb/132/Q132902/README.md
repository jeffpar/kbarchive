---
layout: page
title: "Q132902: SMS Primary Site Configuration Menu May Re-appear During Setup"
permalink: kb/132/Q132902/
---

## Q132902: SMS Primary Site Configuration Menu May Re-appear During Setup

	Article: Q132902
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbSCMan smsinv smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install or upgrade a Systems Management Server Primary Site, the
	Primary Site Configuration dialog screen reappears.
	
	CAUSE
	=====
	
	This problem occurs when an installation error is detected during the
	installation phase, a component fails to install, or the component fails to
	start correctly.
	
	RESOLUTION
	==========
	
	If the Primary Site configuration dialog screen reappears due to a component
	failure during installation, investigate the source of the failure. The
	SMSSETUP.LOG file in the root of the Systems Management Server Site Server C
	drive is useful for finding installation/upgrade failure points.
	
	Under no circumstances should the Systems Management Server share name comments
	be changed from those created by Systems Management Server.
	
	MORE INFORMATION
	================
	
	When the Primary Site Configuration dialog screen reappears, it still contains
	the information you entered earlier in the installation process (such as Site
	Code, Site Name, Site Server, and Site Server Domain). If you change the Site
	Code when the second dialog screen is displayed, Systems Management Server
	Executive, Inventory Agent, and Package command Manager services do not install
	successfully. The Systems Management Server installation program is dependent
	upon the share comments created for shares SMS_SITE, SMS_SHR, etc.
	
	Additional query words: config prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbSCMan smsinv smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
