---
layout: page
title: "Q90389: NET STOP Command from MS-DOS Command Prompt Hangs WFWG"
permalink: kb/090/Q90389/
---

## Q90389: NET STOP Command from MS-DOS Command Prompt Hangs WFWG

	Article: Q90389
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you stop the Windows for Workgroups network redirector [by typing "net stop"
	(without the quotation marks)] from an MS-DOS command prompt inside of Windows
	for Workgroups running in standard mode, your machine may stop responding (hang)
	or restart. This may happen if the following is true:
	
	- You started the Windows for Workgroups network redirector before you started
	  Windows for Workgroups by typing "net start basic" (without the quotation
	  marks) or "net start enhanced" (without the quotation marks) at the MS-DOS
	  command prompt.
	
	- You are using either EMM386 or QEMM386 as a memory manager.
	
	It is not recommended that you stop the network redirector from an MS-DOS command
	prompt while running Windows. Close Windows for Workgroups and then stop the
	redirector.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of the product.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
