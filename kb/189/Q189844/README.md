---
layout: page
title: "Q189844: SMS: PGC Should Ignore Configuration Command Line"
permalink: /kb/189/Q189844/
---

## Q189844: SMS: PGC Should Ignore Configuration Command Line

{% raw %}

	Article: Q189844
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a shared program to Run Local Copy If Present, Program Group
	Control (PGC) still runs the one-time installation, even though a local copy of
	the shared application is present.
	
	WORKAROUND
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Systems Management Server service pack.
	
	This fix should have the following time stamp:
	
	     7/14/98   7:27pm         107,936 Appsta16.exe (Intel)
	     7/14/98   7:26pm         102,320 Appsta95.exe (Intel)
	     7/14/98   7:25pm         102,320 Appsta32.exe (Intel)
	     7/14/98   1:52am         208,144 Appsta32.exe (Alpha)
	
	NOTE: With the hotfix installed, double-clicking the icon for the shared
	application generates the following PGC message:
	
	  Could not start '<Your shared application>'
	
	The one-time installation is not run. To run the shared application, the local
	copy of the application will need to be completely removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
