---
layout: page
title: "Q153249: WIN16 to Windows NT Upgrade Fails with Long Server Name"
permalink: kb/153/Q153249/
---

## Q153249: WIN16 to Windows NT Upgrade Fails with Long Server Name

	Article: Q153249
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbPCM smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you run the Windows NT upgrade package at a Systems Management Server Win16
	client, the following error message is returned:
	
	  Failed to load _OSW16RC.DLL
	
	CAUSE
	=====
	
	This error occurs if the distribution server where the package is located has a
	name that is longer than 11 characters.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. This problem has been corrected in Systems
	Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbPCM smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
