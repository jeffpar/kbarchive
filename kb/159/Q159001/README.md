---
layout: page
title: "Q159001: Access Violation Importing Key/Certificate into Key Manager"
permalink: /kb/159/Q159001/
---

## Q159001: Access Violation Importing Key/Certificate into Key Manager

	Article: Q159001
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you import a Key/Certificate into Key Manager for Internet Information
	Server version 2.0, you may receive the following error message:
	
	  Dr. Watson for Windows NT
	
	  An application error has occurred.
	  and an application error log is being generated.
	
	  keyring.exe
	
	  Exception: access violation (0xc0000005), Address: 0x74f230d5
	
	Event ids
	
	  11/7/96 4:32:01 PM DrWatson Information None 4097 N/A JOHNDOE-NT4
	  The application, exe\keyring.dbg, generated an application error
	  The error occurred on 11/ 7/1996 @ 16:32: 1.526 The exception generated
	  was c0000005 at address 74f230d5 (<nosymbols>)
	
	  11/7/96 4:31:55 PM Perflib Error None 1008 N/A JOHNDOE-NT4
	  The Open Procedure for service "WSPSrv" in DLL "WSPPERF.DLL" failed.
	  Performance data for this service will not be available. Status code
	
	  returned is DWORD 0.
	
	  11/7/96 4:31:55 PM Perflib Error None 1008 N/A JOHNDOE-NT4
	  The Open Procedure for service "W3Proxy" in DLL "MSPMON.DLL" failed.
	  Performance data for this service will not be available. Status code
	  returned is DWORD 0.
	
	  11/7/96 4:31:55 PM Perflib Error None 1008 N/A JOHNDOE-NT4
	  The Open Procedure for service "W3PCache" in DLL "MSPMON.DLL" failed.
	  Performance data for this service will not be available. Status code
	  returned is DWORD 0.
	
	CAUSE
	=====
	
	The Certificate file is corrupt or invalid for the corresponding Private Key
	Pair File.
	
	NOTE: You can only use valid Private Key Pair File and Certificate File pairs.
	
	RESOLUTION
	==========
	
	To import a key, click Key, select Import Key, and select KeySet Files. Specify
	the Private Key Pair File and the Certificate File, then click OK. Enter the
	password to complete the process.
	
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis200
	Version           : :2.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
