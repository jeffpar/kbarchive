---
layout: page
title: "Q140920: SMS ErrMsg: Package Command Manager Is Unable to Install..."
permalink: /kb/140/Q140920/
---

## Q140920: SMS ErrMsg: Package Command Manager Is Unable to Install...

	Article: Q140920
	Product(s): Microsoft Systems Management Server
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you execute a pending MSTest 3.0 Run Command on Workstation Job in Package
	Command Manager, the following error message appears:
	
	  Package Command Manager
	
	  Package Command Manager is unable to install a package because the package is
	  setup incorrectly. PCM has logged an event and sent it to your System
	  Administrator.
	
	RESOLUTION
	==========
	
	Microsoft has modified the files, PCMWin16.exe and PCMWin32.exe, to correct this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	MORE INFORMATION
	================
	
	The following is a sample content of the PCMWin.log file:
	
	  Connecting to package server...
	  Invalidated command line is mtrun.exe audit.pcd...
	  Location of the MSTest dir is....
	  Change to pkg shr...
	  Then runs the command line mtrun from the MSTEST dir (not the package
	   share)
	  Package is not setup correctly.
	  Running process handle=-1
	
	This information is also logged if you use MSTEST 3.0 and MTRUN in the package
	source instead of in the MSTEST directory; or if you are using Visual Test 4.0
	and MTRUN is in the MSTEST directory.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS110
	Version           : :1.1
	
	=============================================================================
	
