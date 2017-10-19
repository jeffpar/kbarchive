---
layout: page
title: "Q161372: How to Enable SMB Signing in Windows NT"
permalink: /kb/161/Q161372/
---

## Q161372: How to Enable SMB Signing in Windows NT

	Article: Q161372
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP3 
	- Microsoft Windows NT Server version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to enable SMB signing.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Service Pack 3 provides an updated version of the Server Message
	Block (SMB) authentication protocol, also known as the Common Internet File
	System (CIFS) file sharing protocol. For more information on SMB signing, please
	see the Windows NT 4.0 Service Pack 3 Readme.txt file.
	
	Perform the following steps to configure SMB signing on a server:
	
	WARNING: Using the registry editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT. Microsoft cannot
	guarantee that any problems resulting from the use of the registry editor can be
	solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  System\CurrentControlSet\Services\LanManServer\Parameters
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following two values:
	
	     Value Name: EnableSecuritySignature
	     Data Type: REG_DWORD
	     Data: 0 (disable), 1 (enable)
	
	        NOTE: The default is 0 (disable)
	
	     Name: RequireSecuritySignature
	     Type: REG_DWORD
	     Value: 0 (disable), 1 (enable)
	
	        NOTE: The default is 0 (disable)
	
	5. Click OK and then quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	Perform the following steps to configure SMB signing on a workstation:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \System\CurrentControlSet\Services\Rdr\Parameters
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following two values:
	
	     Value Name: EnableSecuritySignature
	     Data Type: REG_DWORD
	     Data: 0 (disable), 1 (enable)
	
	        NOTE: The default is 1 (enable)
	
	     Name: RequireSecuritySignature
	     Type: REG_DWORD
	     Value: 0 (disable), 1 (enable)
	
	        NOTE: The default is 0 (disable)
	
	5. Click OK and then quit Registry Editor.
	
	6. Shut down and restart Windows NT.
	
	Using SMB signing will slow down the performance when enabled. This setting is
	only to be used when network security is a concern. Performance decrease usually
	averages between 10 to 15%. The very nature of SMB signing requires that every
	packet is signed for and every packet must be verified.
	
	Additional query words: 4.00 sp3
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
