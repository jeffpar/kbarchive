---
layout: page
title: "Q139906: GetVersionExA Error in SMS 1.1 Network Monitor for WFW"
permalink: /kb/139/Q139906/
---

## Q139906: GetVersionExA Error in SMS 1.1 Network Monitor for WFW

	Article: Q139906
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): smsnetmon kbNetworkMon
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After installing the Network Monitor for Windows for Workgroups from the Systems
	Management Server 1.1 CD-ROM and running it, the following error message
	appears:
	
	  Win32s - Error, the procedure entry point "GetVersionExA" could not be
	  located in the Dynamic Link Library "KERNEL32.dll"
	
	CAUSE
	=====
	
	The new call, GetVersionExA, that was implemented in Windows NT 3.5 and 3.51 is
	not serviced due to incompatible WIN32S .DLLs that come with the Network Monitor
	Installation Disks located in the NMEXT directory on the Systems Management
	Server 1.1 CD-ROM.
	
	WORKAROUND
	==========
	
	Install the older WIN32S .DLLs that support GetVersionExA (dated 7/11/95) after
	you have installed the Network Monitor Version from the CD-ROM.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. We will post new information in the Microsoft Knowledge Base as it
	becomes available.
	
	Additional query words: netmon prodsms
	
	======================================================================
	Keywords          : smsnetmon kbNetworkMon 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
