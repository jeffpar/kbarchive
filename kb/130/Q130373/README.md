---
layout: page
title: "Q130373: Obtaining Package ID from Within a Microsoft Test Script"
permalink: kb/130/Q130373/
---

## Q130373: Obtaining Package ID from Within a Microsoft Test Script

	Article: Q130373
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	When you write a custom detail status MIF, you may wish to obtain the
	package ID for the current package during the running of a Package Command
	Manager (PCM) job.
	
	You should be able to obtain the name of the directory one level up from
	the current working directory at the time PCM launches the job. This is
	available because PCM changes the current working directory to the package
	source before launching the specified workstation command.
	
	The parent directory name can be obtained from an executable file, or from
	within an Microsoft Test script, and then easily added to the information
	written by the administrator-written detail. For examples, see the
	BackOffice SDK Systems Management Server samples.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
