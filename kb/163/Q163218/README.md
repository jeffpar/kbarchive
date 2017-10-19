---
layout: page
title: "Q163218: XCLN: Err Msg: Need More Memory or System Resources"
permalink: /kb/163/Q163218/
---

## Q163218: XCLN: Err Msg: Need More Memory or System Resources

	Article: Q163218
	Product(s): Microsoft Exchange
	Version(s): Win95:4.0
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 24-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to look properties of the Microsoft Exchange client, either by
	means of the Control Panel Mail utility or by right-clicking the Inbox on the
	desktop, you may receive the following error message:
	
	  Title : Mail
	  You need more memory or system resources. Close some windows and try
	  again.
	
	Or, you may see the following symptom. When you attempt to start the Exchange
	client, the splash screen appears for only a moment and the client does not
	start.
	
	CAUSE
	=====
	
	The incorrect mapi32.dll file exists in the Win95/system directory. This problem
	may occur if a component is removed and again added out of the properties for
	network neighborhood (control panel/network) and mapi32.dll from Win95 replaces
	the Exchange mapi32.dll from the Exchange client.
	
	When a network neighborhood component is removed and re-added on a computer that
	has the Exchange client installed, the user should be prompted with the
	following during the "copying files" stage:
	
	  "A file being copied is older than the file currrently on your computer.
	  It is recommended that you keep your existing file.
	  File name mapi32.dll
	  Description Extended MAPI 1.0 for Windows 95
	  Your version 4.0.xxxxxxxxxxx
	  Do you want to keep this file?
	
	If you click No, the Windows 95 version of Mapi32.dll overwrites the newer
	Mapi32.dll.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Reinstall the Exchange client.
	
	  -OR-
	
	- Copy Mapi32.dll from another (working) computer running the Exchange Windows
	  95 client.
	
	  -OR-
	
	- Expand Mapi32.dll from the Exchange client cabinet (cab) files:
	  1. From a command prompt, change directory to the location of the Exchange
	     Cab files (CD or netlocation)
	
	  2. Carry out the command:
	
	  extract /l c:\win95\system exchng5.cab mapi32.dll
	
	NOTE: The size and date of this file will differ, depending on which version of
	Exchange client is installed.
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3
	Version           : Win95:4.0
	
	=============================================================================
	
