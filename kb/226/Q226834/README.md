---
layout: page
title: "Q226834: SMS: Cancel Button in Remote Restart Dialog Box Doesn't Work"
permalink: kb/226/Q226834/
---

## Q226834: SMS: Cancel Button in Remote Restart Dialog Box Doesn't Work

	Article: Q226834
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a remote tools session to restart a remote client, a dialog box
	briefly appears informing you that the client is restarting. A Cancel button
	appears at the bottom of the dialog box, giving the impression that the restart
	can be cancelled. The length of time that the Cancel button is displayed varies
	depending on the client's operating system. In any case, clicking the Cancel
	button does not cancel the restart.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	When you restart a computer remotely, you receive two dialog boxes. The first
	contains a prompt, which asks if you are sure that you want to restart the
	client; the second indicates that the computer is restarting and it contains a
	Cancel button. In fact, the restart cannot be cancelled at this point.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	
