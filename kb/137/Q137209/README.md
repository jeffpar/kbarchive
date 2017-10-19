---
layout: page
title: "Q137209: Remotely Viewing SMS Event Logs Using Windows NT Event Viewer"
permalink: /kb/137/Q137209/
---

## Q137209: Remotely Viewing SMS Event Logs Using Windows NT Event Viewer

	Article: Q137209
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remotely view the event log of a Systems Management Server
	site server using the Windows NT Event Viewer, the following description appears
	for an Systems Management Server Application event:
	
	  The description for Event ID <event number> in Source (SMS) could not
	  be found. It contains the following insertion string(s): <Strings vary for
	  each Event ID number>.
	
	CAUSE
	=====
	
	This problem occurs because your Windows NT computer does not have the Systems
	Management Server message DLL (SMSERROR.DLL) file, that is required to translate
	Systems Management Server events. This file is installed and registered in the
	registry by default on the Systems Management Server site server and
	workstations that have Systems Management Server Admin installed.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Copy SMSERROR.DLL from the
	  \SMS\SITE.SRV\<platform>.BIN\<language> directory of the Systems
	  Management Server site server to your %SystemRoot%\SYSTEM32 directory.
	
	  NOTE: <platform> is your Windows NT system platform (for example: X86,
	  MIPS or Alpha). <language> is the language specific number (for
	  example: 00000409 for English/US).
	
	2. Run Registry Editor (REGEDT32.EXE).
	
	3. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     \SYSTEM\CurrentControlSet\Services\EventLog\Application
	
	4. From the Edit menu, choose Add Key and enter SMS for the Key name.
	
	5. Select the SMS key. Add the following and choose OK:
	
	     Value Name: EventMessageFile
	     Data Type : REG_SZ
	     String    : %SystemRoot%\SYSTEM32\SMSERROR.DLL
	
	6. Select the SMS key. Add the following and choose OK:
	
	     Value Name: TypesSupported
	     Data Type : REG_DWORD
	     Data      : 7
	     Radix     : Hex
	
	7. Quit Registry Editor.
	
	8. Shutdown and restart Windows NT.
	
	9. Run Event Viewer again.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
