---
layout: page
title: "Q153645: Appctl16.exe Doesn't Look in Package Source Directory for Config"
permalink: kb/153/Q153645/
---

## Q153645: Appctl16.exe Doesn't Look in Package Source Directory for Config

	Article: Q153645
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you configure the Drive mode for "Requires Specific Drive Letter" under the
	program item properties for a shared application and place the script processor
	and configuration script for your shared application in the package source
	directory, Appctl16.exe only looks in the Mstest directory for the configuration
	script.
	
	The following error occurs when you attempt to launch the shared application:
	
	  Cannot find application configuration script
	
	This problem does not occur when you use "Runs with UNC Name" as the Drive mode.
	Appctl16.exe works using either Drive mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. This problem was corrected in Microsoft Systems
	Management Server version 1.2.
	
	Additional query words: prodsms pgc
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
