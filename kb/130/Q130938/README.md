---
layout: page
title: "Q130938: How to Install OS/2 1.3x System Management Server Clients"
permalink: kb/130/Q130938/
---

## Q130938: How to Install OS/2 1.3x System Management Server Clients

	Article: Q130938
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup smshowto
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft System Management Server does not properly install files on OS/2 1.3x
	clients. When the client files are not correctly installed, the OS/2 client is
	not properly inventoried.
	
	CAUSE
	=====
	
	System Management Server uses the SMSLS.CMD file to install files to OS/2 client
	computers. SMSLS.CMD determines whether a file named MDOS is located in the
	client's %COMSPEC% directory. If the file is not present, the client files are
	not installed.
	
	NOTE: The MDOS file is shipped with the IBM Windows for OS/2 product. The
	%COMSPEC% directory is defined by the %COMSPEC% system variable on the client
	computer. To determine %COMSPEC% directory, type "SET" (without the quotation
	marks) at a command prompt.
	
	RESOLUTION
	==========
	
	If the MDOS file is not present, create a MDOS file of 0 bytes length and place
	it in the %COMSPEC% directory. This will allow Systems Management Server to
	install the client files correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in System Management Server 1.0.
	This problem was corrected in Systems Management Server version 1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup smshowto 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
