---
layout: page
title: "Q321926: Security Override Fails If UserID or Password Is Longer than 10"
permalink: kb/321/Q321926/
---

## Q321926: Security Override Fails If UserID or Password Is Longer than 10

	Article: Q321926
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	COM Transaction Integrator (COMTI) applications that use the explicit security
	override feature to supply a userID and a password to COMTI generate the
	following error message when a userID or a password that is longer than 10
	characters is submitted.
	
	  HRESULT=0x800706BE
	  Automation error. The remote procedure call failed.
	
	CAUSE
	=====
	
	The internal buffer sizes that COMTI uses for userID and password are limited to
	10 bytes. However, there is no automatic test to make sure that this character
	length is not exceeded.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	You can turn on a COMTI trace by using Tracebits.exe.
	
	If the userID is longer than 10 characters, the last 2 lines of the COMTI
	Tracebits log file look similar to the following:
	
	3528 000009d8 Apr 29 12:18:45.008	14040	LU 6.2 Transport Connect explicit security callback succeeded.
	3528 000009d8 Apr 29 12:18:45.008	14040	LU 6.2 Transport Connect got userid.
	
	If the password is longer than 10 characters, the last 3 lines of the COMTI
	Tracebits log file look similar to the following:
	
	1656 00000a14 Apr 29 12:25:19.477	14040	LU 6.2 Transport Connect explicit security callback succeeded.
	1656 00000a14 Apr 29 12:25:19.477	14040	LU 6.2 Transport Connect got userid.
	1656 00000a14 Apr 29 12:25:19.477	14040	LU 6.2 Transport Connect got pswd.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
