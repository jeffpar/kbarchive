---
layout: page
title: "Q153576: Despooler Fails to Retry After Package Distribution Errs"
permalink: kb/153/Q153576/
---

## Q153576: Despooler Fails to Retry After Package Distribution Errs

	Article: Q153576
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you send packages to multiple distribution servers and the job fails to one of
	them (for example, because its network cable was unplugged), the despooler
	service will fail to resend the package.
	
	CAUSE
	=====
	
	After its initial failure to install the package, the despooler service creates
	a new instruction file to contain only the failed server. However, when
	despooler processes this instruction, it finds that no distribution servers are
	listed and deletes the instruction as complete.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Create a site with two distribution servers.
	
	2. Disconnect one distribution server from the network.
	
	3. Distribute a package to both distribution servers.
	
	Result: The jobs will complete; however, the package will only be distributed to
	one server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms despool
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	Issue type        : kbbug
	
	=============================================================================
	
