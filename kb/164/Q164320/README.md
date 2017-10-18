---
layout: page
title: "Q164320: SMS: Choosing &quot;Entire Network&quot; Causes an Exception 0E Error"
permalink: kb/164/Q164320/
---

## Q164320: SMS: Choosing &quot;Entire Network&quot; Causes an Exception 0E Error

	Article: Q164320
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:95; winnt:1.2 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgckbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a client computer running Windows 95, an Exception 0E error occurs when you
	open the Network Neighborhood and then click Entire Network.
	
	CAUSE
	=====
	
	This error is caused by a problem with the Smsroutr.vxd file that was updated in
	Systems Management Server 1.2 Service Pack 1 (size = 25,293 bytes; date =
	8/19/96).
	
	WORKAROUND
	==========
	
	Replace the Smsroutr.vxd file with the original version of the file. The
	Smsroutr.vx_ file is located in the Smssetup\X86\Intnl directory on the Systems
	Management Server 1.2 compact disc. This file is not compressed, and only needs
	to be renamed to Smsroutr.vxd.
	
	Copy the file to the Sms\Site.srv\Maincfg.box\Client.src\X86.bin directory on the
	Systems Management Server site server.
	
	To simplify the process of updating your existing clients, create a workstation
	package that copies the updated file to the %Windir%\System directory of each
	client computer running Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 1. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: prodsms win95 gpf fault blue screen sp1
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc kbfixlist
	Technology        : kbSMSSearch kbSMS120SP1
	Version           : WINDOWS:95; winnt:1.2 SP1
	Issue type        : kbbug
	
	=============================================================================
	
