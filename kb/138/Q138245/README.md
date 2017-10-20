---
layout: page
title: "Q138245: SMS: Err Msg: Incorrect System Version Upgrading to WFW"
permalink: /kb/138/Q138245/
---

## Q138245: SMS: Err Msg: Incorrect System Version Upgrading to WFW

{% raw %}

	Article: Q138245
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use Microsoft Systems Management Server to upgrade a Windows 3.1 client
	computer to Windows for Workgroups, the following error message appears after
	executing the Run Command on Workstation package from the Systems Management
	Server Package Command Manager application:
	
	  Incorrect System Version
	
	CAUSE
	=====
	
	The WINSTART command (referenced in the Windows for Workgroups PDF command
	properties) checks the version of Windows files prior to starting the setup
	program. Because Package Command Manager sets the current working directory to
	the package directory a version mismatch occurs.
	
	RESOLUTION
	==========
	
	Relocate the Windows for Workgroups source files to a subdirectory of the
	package source and modify the Workstation Command Line "Automated Setup for
	Windows/WFW Client" within the Command Line Properties of the Windows for
	Workgroups Package definition.
	
	For example, if the source files are located in the WFW\WFW311 subdirectory,
	modify the command line as follows:
	
	  winstart wfw311\setup /h:setup.shh
	
	This causes Package Command Manager to set the working directory to \WFW and
	makes WINSTART first check the Windows version there. Upon finding no files, it
	searches the system path and finds the correct Windows version.
	
	NOTE: For NetWare clients and Windows for Workgroups 3.1 clients, append the
	/LOCAL switch to the above command as follows:
	
	  winstart wfw311\setup /h:setup.shh /local
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem has been corrected in Systems Management Server
	version 1.1
	
	Additional query words: prodsms win31 pdf
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
