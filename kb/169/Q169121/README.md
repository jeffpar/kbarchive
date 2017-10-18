---
layout: page
title: "Q169121: XCLN: Win95 Will Not Shut down with Exchange Client Running"
permalink: kb/169/Q169121/
---

## Q169121: XCLN: Win95 Will Not Shut down with Exchange Client Running

	Article: Q169121
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0:Win95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you shut down a Windows 95 client computer while Exchange client is
	running, the following error message may occur:
	
	  Windows cannot restart the computer or start MS-DOS mode
	  with message services running. Please close all running
	  programs and click OK to continue.
	
	The system will stop responding indefinitely unless Task Manager is used to shut
	down the Exchange client.
	
	CAUSE
	=====
	
	The client computer is running McAfee's Application Manager for Windows 3.1.
	McAfee does not recommend running the Application Manager as the Windows 95
	shell, as it is a Windows 3.1-based program.
	
	For more information on this, please see the following Microsoft Knowledge Base
	article:
	
	  Q135146 McAfee Secure Station Clock Drawn Incorrectly
	
	
	RESOLUTION
	==========
	
	Although this is not a supported configuration, shutting down the Exchange
	client before exiting Windows 95 with McAfee's Application Manager will allow a
	normal shutdown. The recommended configuration however is to run the standard
	Windows 95 desktop Explorer.
	
	McAfee's Application Manager is a product manufactured by McAfee, Inc. a company
	independent of Microsoft. Contact McAfee technical support for more information.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : 4.0 5.0:Win95
	
	=============================================================================
	
