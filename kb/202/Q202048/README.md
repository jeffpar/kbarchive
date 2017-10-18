---
layout: page
title: "Q202048: SMS: File Transfer Sessions Start in Different Directories"
permalink: kb/202/Q202048/
---

## Q202048: SMS: File Transfer Sessions Start in Different Directories

	Article: Q202048
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2,2.0
	Operating System(s): 
	Keyword(s): kbRemote kbsms200 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server 2.0, the default directory for the File Transfer
	window has changed. The startup directory for the Administrator console is
	different from the startup directory for the client.
	
	MORE INFORMATION
	================
	
	The File Transfer agent is not intuitive and uses specific directories that it
	knows exist when starting up. In Systems Management Server 1.2, the client's
	default directory for the File Transfer window is \%SystemRoot%. With Systems
	Management Server 2.0, the client default directory for the File Transfer window
	is \%System Root%\MS\SMS\CLICOMP\Remctrl and the Administrator console default
	directory for the File Transfer window is \SMS\BIN\I386.
	
	Additional query words: dir startup folder
	
	======================================================================
	Keywords          : kbRemote kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120 kbSMS200
	Version           : winnt:1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
