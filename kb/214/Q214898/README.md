---
layout: page
title: "Q214898: SMS: PCM May Not Detect FoxPro Program Terminations"
permalink: /kb/214/Q214898/
---

## Q214898: SMS: PCM May Not Detect FoxPro Program Terminations

{% raw %}

	Article: Q214898
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms120 kbsms120bug kbPCM kbPackage kbSoftwareDist
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Package Command Manager (PCM) launches a program written in FoxPro version
	2.6, the FoxPro program starts and runs as expected, but the workstation may not
	shut down properly after you have quit the program.
	
	Well after the FoxPro program has been quit, the Pcmwin.log file may repeat
	entries similar to the following:
	
	  [10/29/96 12:15:39] Package Command Manager ==> A job is in process.
	  [10/29/96 12:15:41] Package Command Manager ==> Monitoring running job.
	  [10/29/96 12:15:41] Package Command Manager ==> The running process handle is 9230
	
	CAUSE
	=====
	
	This behavior can occur because when you start a program built with FoxPro 2.6
	for Windows, the FoxPro executable (*.exe) functions as a loader program. It
	loads Foxw2600.esl (a support library), which actually runs the code. PCM
	obtains a process handle to the support library instead of to the FoxPro
	program.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Create a Microsoft Visual Basic wrapper program that calls the FoxPro program
	  or installation executable.
	
	2. Create and distribute a package that runs the Visual Basic wrapper program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms120 kbsms120bug kbPCM kbPackage kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS120
	Version           : :1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
