---
layout: page
title: "Q124996: Incorrect Swap File Size Reported for Client Computers"
permalink: /kb/124/Q124996/
---

## Q124996: Incorrect Swap File Size Reported for Client Computers

	Article: Q124996
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbui smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you look at the PC Memory icon from within Machine Properties of the
	Systems Management Server Admin user interface, the swap file size for Windows
	for Workgroups version 3.11 or Windows version 3.1 is incorrectly reported as
	only 16 megabytes (MB).
	
	WORKAROUND
	==========
	
	To work around this problem, use the Diagnostics icon and look at the Windows
	Memory. The correct swap file size is reported.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: sms wfw wfwg prodsms
	
	======================================================================
	Keywords          : kbui smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
