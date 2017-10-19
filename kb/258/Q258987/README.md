---
layout: page
title: "Q258987: SMS: False Errors Are Recorded in the Smsprov.log File"
permalink: /kb/258/Q258987/
---

## Q258987: SMS: False Errors Are Recorded in the Smsprov.log File

	Article: Q258987
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbMMC kbServer kbsms200 kbsms200bug kbHelpDesk kbsmsAdmin kbsmsProvide
	Last Modified: 01-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remotely control a client from the Systems Management Server
	(SMS) 2.0 Administrator console, you may receive the following error message in
	the Smsprov.log file.
	
	  [18D][Fri 03/17/2000 16:08:23]:
	  *
	  *
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspUtility.cpp(1467) : Error Extracting
	  property:TopLevelSiteCode
	  *
	  *
	
	Note that there are no corresponding error messages on the Administrator console
	screen, and no status messages are generated.
	
	CAUSE
	=====
	
	This behavior is the normal result of using remote control or any other utility
	that calls the internal RaiseRawStatusMsg method without setting the optional
	TopLevelSiteCode parameter. When any of the optional parameters for the
	SMS_StatusMessage methods (such as RaiseRawStatusMsg, RaiseErrorStatusMsg,
	RaiseWarningStatusMsg, or RaiseInformationalStatusMsg) are not included, an
	error message is generated in the Smsprov.log file warning of the missing
	parameter.
	
	NOTE: No error message is returned by the provider and the methods function
	normally.
	
	MORE INFORMATION
	================
	
	This behavior is not due to a problem in the execution of the remote control
	code, and can be safely ignored.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbtool kbMMC kbServer kbsms200 kbsms200bug kbHelpDesk kbsmsAdmin kbsmsProvider 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
