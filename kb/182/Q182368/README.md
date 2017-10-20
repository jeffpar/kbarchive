---
layout: page
title: "Q182368: XCLN: Err Msg: Exchange32 Is Not A Valid Win32 Application"
permalink: /kb/182/Q182368/
---

## Q182368: XCLN: Err Msg: Exchange32 Is Not A Valid Win32 Application

{% raw %}

	Article: Q182368
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open Microsoft Exchange Client, you may receive the following error
	message:
	
	  C:\<dirname>\EXCHNG32.EXE is not a valid Win32 application
	
	CAUSE
	=====
	
	Exchng32.exe is damaged or corrupted.
	
	WORKAROUND
	==========
	
	To resolve this issue, you can either install a new copy of the Exchange Client
	from the original compact disc or you can extract a new copy of Exchng32.exe.
	
	NOTE: Installing a new copy of Exchng32.exe does not correct any other file
	corruption in the Exchange directory.
	
	For information about using the Extract tool, type "extract" (without quotation
	marks) at the command prompt, or see the following article in the Microsoft
	Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	If the version of Exchange Client you are using is the Windows messaging client
	that ships with Windows 95, you may reinstall the client by using the Add/Remove
	Programs icon in Control Panel. Uncheck the Windows Messaging checkbox from the
	Setup tab, and the select Apply. Reselect the checkbox to reinstall the
	messaging client.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
