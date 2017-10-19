---
layout: page
title: "Q198706: SMS: Software Metering Components on the Client"
permalink: /kb/198/Q198706/
---

## Q198706: SMS: Software Metering Components on the Client

	Article: Q198706
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbRegistry kbsms200
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Software Metering (SWM) client agent must be configured correctly in order
	to perform, set up a SWM server, and configure the Tool itself. The client
	machine itself holds no configurable aspect of SWM. All the client agent
	configuration is done through the MMC Systems Management Server Administrator
	Snap-In. The client machine does hold the SWM agent, Licclint.exe (32-bit)
	Liccli95.exe (16-bit).
	
	However, there are several SWM components installed on the client. The first is
	the agent (or .exe) itself. The second is the adding of the SWM directory
	structure. You can observe this by the LICMTR directory located as a
	sub-directory of %windir%\ms\sms\clicomp. This is where the SWM agent's .exe
	file will be stored along with the client's SWM data files.
	
	Finally, two registry keys are added on the client:
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Sites\<site
	  code>\LICENSE_METERING - which indicates where the SWM license servers for
	  the site reside (the client has randomly picked these),
	
	  -and-
	
	- HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Client Components\LICENSE
	  METERING - which is the component information for the client.
	
	Additional query words: prodsms swmeter
	
	======================================================================
	Keywords          : kbRegistry kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
