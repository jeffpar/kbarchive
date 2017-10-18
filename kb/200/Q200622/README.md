---
layout: page
title: "Q200622: SMS: Multiple Site Summary Only Shows Products With Peak Usage"
permalink: kb/200/Q200622/
---

## Q200622: SMS: Multiple Site Summary Only Shows Products With Peak Usage

	Article: Q200622
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbReport kbsmsAdmin kbsmsMeter
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a Multiple Site Summary Report from the Report Wizard in the
	Software Metering Console, not all expected products are displayed. Only those
	products that have a peak usage are returned.
	
	NOTE: If a product without a peak usage is explicitly picked, it will be included
	in the report.
	
	For example:
	
	1. Open the Software Metering Tool.
	
	2. Create a Program.
	
	3. Start Report Wizard from the Tools menu.
	
	4. Click Next.
	
	5. Choose Multiple Site Summary.
	
	6. Accept all defaults.
	
	7. Observe the finished report.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 for Windows NT.
	
	Microsoft has confirmed this to be a problem in Systems Management Server version
	2.0.
	
	Additional query words: prodsms swmeter
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbReport kbsmsAdmin kbsmsMeter 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
