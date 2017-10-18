---
layout: page
title: "Q182887: XCLN: Error Message Installing E-forms on Non-Intel Computer"
permalink: kb/182/Q182887/
---

## Q182887: XCLN: Error Message Installing E-forms on Non-Intel Computer

	Article: Q182887
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a new electronic form (e-form) created in the Electronic
	Forms Designer via an Exchange client by using the Tools / Options / Exchange
	Server / Manage Forms menu selections, the following error message may appear:
	
	  The form could not be installed, the required action was not successful
	  due to unspecified error!
	
	CAUSE
	=====
	
	You are trying to install the forms to a folder located on a non-Intel platform
	system.
	
	WORKAROUND
	==========
	
	Installing e-forms to a non-Intel-based platform will give the error message
	only when you are installing to the organization forms or public folder. If you
	install e-forms to a PST file or personal forms library, the installation is
	successful. This occurs because Visual Basic for e-forms and Visual Basic 4.0
	were designed and compiled to run on Intel platforms only. Non-Intel platforms
	include Alpha, MIPS, RISC, and so on. To be able to install e-forms into the
	organization forms or public folder, install them on an Intel-based server in
	the organization and allow Exchange to replicate to the non-Intel platform.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
