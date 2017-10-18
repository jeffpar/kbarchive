---
layout: page
title: "Q157210: XCLN: Invalid Procedure Call from Mefbrows.exe"
permalink: kb/157/Q157210/
---

## Q157210: XCLN: Invalid Procedure Call from Mefbrows.exe

	Article: Q157210
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbprogramming kbusage
	Last Modified: 06-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the Microsoft Electronic Forms Designer for Microsoft
	Mail for PC Networks e-form Mefbrows.exe from a Microsoft Exchange Windows NT
	client, the following error may occur.
	
	  Invalid procedure call
	
	CAUSE
	=====
	
	This error can occur because Microsoft Exchange Windows NT client uses the
	Msmail32.ini and Shared32.ini initialization files exclusively. Mefbrows.exe is
	designed to search only the Msmail.ini and Shared.ini files for Microsoft Mail
	Forms Designer e-forms.
	
	WORKAROUND
	==========
	
	You can work around this problem by modifying and regenerating an executable
	file for Mefbrows.exe.
	
	The Visual Basic Project for Mefbrows.exe contains a Constants.bas file that
	includes the following declarations.
	
	     Global Const SHARED_INI$ = "SHARED.INI"
	     Global Const LOCAL_INI$ = "MSMAIL.INI
	
	1. Replace the "SHARED.INI" declaration with "SHARED32.INI".
	
	2. Replace "MSMAIL.INI" with "MSMAIL32.INI".
	
	3. Create a new executable file for the project using either Microsoft Visual
	  Basic 3.0 or Microsoft Visual Basic 4.0 16-bit. The source code for
	  Mefbrows.exe can be found on the Microsoft Electronic Forms Designer
	  installation disks.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop kbprogramming kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0
	
	=============================================================================
	
