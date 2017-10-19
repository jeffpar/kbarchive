---
layout: page
title: "Q162404: Service Pack 5 Breaks Microsoft Mail Shared Using FPNW"
permalink: /kb/162/Q162404/
---

## Q162404: Service Pack 5 Breaks Microsoft Mail Shared Using FPNW

	Article: Q162404
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you apply Service Pack 5 for Windows NT 3.51 or upgrading to Windows NT
	4.0 and FPNW for 4.0, any Microsoft Mail postoffices that are shared using File
	and Print Services for NetWare (FPNW) may experience errors. External.exe may
	log an error [012] when delivering mail to the postoffice. Dirsync.exe may not
	run automatically, and may generate warning [154]. When you perform a manual
	DirSync, the postoffice will receive updates but will not send any updates to
	other postoffices.
	
	CAUSE
	=====
	
	A problem was introduced while attempting to improve an OS/2 file-date issue.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe) and locate the following subkey:
	
	  HKey_Local_Machine\SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	2. From the Edit menu, click Add Value.
	
	3. Type the name of the value as MaxCachedOpenFiles.
	
	4. Set the type to REG_DWORD and enter 0 (zero) for the value.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51. A
	supported fix is now available, but is not fully regression tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This fix
	is now available in the latest U.S. Service Pack for Windows NT version 4.0. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: FPNW
	
	======================================================================
	Keywords          : kbnetwork kbfixlist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
