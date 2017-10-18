---
layout: page
title: "Q121658: SMS Remote Control Fails if Not Enough LANAs are Available"
permalink: kb/121/Q121658/
---

## Q121658: SMS Remote Control Fails if Not Enough LANAs are Available

	Article: Q121658
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Help Desk and Diagnostics fail from the Systems Management Server Admin user
	interface (UI) if the protocol binding needed is greater than the number of
	default LANAs in the Windows NT Registry. For example, if the LANA number for
	the binding is 5 and the Registry only shows default for 4 LANAs, the UI
	attempts the command but fails.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SOFTWARE\Microsoft\SMS\Components\SightNT\Lana
	
	3. Add the Default entries for the needed LANAs. For example, from the Edit
	  menu, choose Add Value. Enter values for the following:
	
	        Value Name: Default# (where # is the next LANA number)
	        Data Type: REG_DWORD
	        Data: (Enter the LANA number you are adding, in Hex)
	
	4. Choose OK and quit Registry Editor.
	
	5. Quit Systems Management Server Admin and restart Systems Management Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	In Systems Management Server version 1.1, seven lanas are scanned by default.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
