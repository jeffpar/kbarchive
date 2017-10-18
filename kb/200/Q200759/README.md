---
layout: page
title: "Q200759: SMS: IBM Thinkpad Video Driver Causes GPF in Sms.exe"
permalink: kb/200/Q200759/
---

## Q200759: SMS: IBM Thinkpad Video Driver Causes GPF in Sms.exe

	Article: Q200759
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbRemote kbsms120 kbsms120bug kbHelpDesk kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to establish a Remote Control session with an IBM Thinkpad 770
	client running Windows 95 OEM Service Release 2 (OSR2), a general protection
	fault (GPF) in module Sms.exe may be generated.
	
	Other symptoms may include a similar access violation (AV), or the Quick Viewer
	window may not properly refresh the display. This problem occurs if you are
	using the IBM Thinkpad PCI Cyber 9397 driver or the Trident Cyber 9397 Linear
	Accelerated PCI driver above 256 colors.
	
	WORKAROUND
	==========
	
	To use the IBM Thinkpad PCI Cyber 9397 driver at 256 colors, replace the
	Idisp16.dll file with the Idisp16.dll file that has the following file
	attributes:
	
	+-------------------------------------------------+
	| Date     | Time   | File name   | Size          | 
	+-------------------------------------------------+
	| 02/09/98 | 08:05a | Idisp16.dll | 144,896 bytes | 
	+-------------------------------------------------+
	
	To obtain this file, contact Microsoft Product Support Services.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodsms gp fault
	
	======================================================================
	Keywords          : kbRemote kbsms120 kbsms120bug kbHelpDesk kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
