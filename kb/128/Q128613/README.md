---
layout: page
title: "Q128613: SMS: WUSER GP Faults with Compaq Qvision Adapter"
permalink: kb/128/Q128613/
---

## Q128613: SMS: WUSER GP Faults with Compaq Qvision Adapter

	Article: Q128613
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Remote Control Applet (WUSER.EXE) to remotely control a 16- bit
	Windows client, the following error appears:
	
	  WUSER2 caused a general protection fault in module IDIS_LM.DLL at 0005:0dd0
	
	This GP-fault occurs when the client workstation has Compaq Qvision Windows
	driver CPQLQV04.DRV and is using 640x480 16 colors 16 dot fonts.
	
	
	WORKAROUND
	==========
	
	Change the Qvision driver resolution from 16 colors to 256 colors or use the
	Standard VGA driver instead of the Qvision driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.0. This problem was corrected in Systems Management Server
	version 1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
