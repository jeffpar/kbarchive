---
layout: page
title: "Q259919: Remote Control May Not Work If Similar Program Was Installed"
permalink: /kb/259/Q259919/
---

## Q259919: Remote Control May Not Work If Similar Program Was Installed

	Article: Q259919
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbConfig _IK964 kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Novell ZEN Works, Intel LAN Desk, or the Systems Management Server (SMS) 1.2
	client was previously installed on another partition, remote control in SMS 2.0
	can result in unpredictable behavior. This behavior can include a loss of Gold
	Key functionality, an abruptly closed remote control session, or a general
	protection (GP) fault at the Administrator console.
	
	CAUSE
	=====
	
	A previous version of the Kbstuff.sys or Rchelp.sys file may exist in another
	folder or partition on the client.
	
	WORKAROUND
	==========
	
	Remove the previous version of the Kbstuff.sys or Rchelp.sys file before
	installing the SMS 2.0 client to prevent this issue. If the issue occurs, remove
	the drivers from the partition on which SMS is not installed, and reinstall the
	Remote Tools component.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The SMS 2.0 installation of remote control functionality depends on the
	installation of several low-level drivers. Two of these are the Kbstuff.sys or
	Rchelp.sys files. These files may also be installed by other management
	programs. If either the Kbstuff.sys or Rchelp.sys file is installed by another
	management program on a different partition, SMS 2.0 cannot detect the versions
	of these other drivers. This creates a driver conflict when SMS successfully
	installs the new versions of the drivers on a different partition. The
	Remctrl.log file in the SMS 2.0 client logs folder reports the installation as
	successful. However, the conflict between the drivers creates instability when
	the drivers are accessed through remote control.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbConfig _IK964 kbsms200 kbsms200bug kbHelpDesk kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
