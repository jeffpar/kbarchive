---
layout: page
title: "Q153577: Remote Control Causes GPF, II Errors w/ Schedule+, PowerPoint"
permalink: /kb/153/Q153577/
---

## Q153577: Remote Control Causes GPF, II Errors w/ Schedule+, PowerPoint

	Article: Q153577
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use Remote Control to operate a high-resolution Windows 95 client from
	the SMS Administrator UI, and if the client is running Microsoft Schedule Plus
	or Microsoft PowerPoint, you can receive a General Protection Fault (GPF) error
	and/or an Illegal Instruction (II) error.
	
	Clients can receive GPFs in modules Idis_ipx.dll and/or Gdi.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms gpf dr watson
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	
	=============================================================================
	
