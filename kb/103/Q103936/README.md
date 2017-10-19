---
layout: page
title: "Q103936: Err Msg: MSPUB Caused an Exception in the Win16 Subsystem"
permalink: /kb/103/Q103936/
---

## Q103936: Err Msg: MSPUB Caused an Exception in the Win16 Subsystem

	Article: Q103936
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under Windows NT, when you are using Microsoft Publisher version 2.0 to change
	the icon for an embedded OLE package, you may receive the following error
	message:
	
	  MSPUB caused an exception in the Win16 Subsystem.
	
	  Click on CLOSE to terminate the application Click on CANCEL to debug the
	  application Click on IGNORE to continue, you should save your work in a new
	  file
	
	  Close     Cancel     Ignore
	
	If you choose Close, the following error message will appear:
	
	  NTVDM.exe
	  Exception: privileged instruction (<memaddress>),
	  Address: <memaddress>
	
	If you choose OK, the Win16 subsystem will quit and close all other 16-bit
	Windows-based applications that are currently running.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a package with the Object Packager accessory.
	
	2. Copy the package to the Windows NT Clipboard.
	
	3. From the Edit menu in Publisher, choose Paste Object.
	
	4. With the package selected, choose Package Object from the Edit menu, and then
	  select Convert.
	
	5. In the Publisher Convert dialog box, select the Display As Icon check box.
	
	6. Choose the Change Icon button.
	
	The above error message will appear.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
