---
layout: page
title: "Q170374: MTG: Service Pack 5 Breaks Microsoft Mail Shared Using FPNW"
permalink: kb/170/Q170374/
---

## Q170374: MTG: Service Pack 5 Breaks Microsoft Mail Shared Using FPNW

	Article: Q170374
	Product(s): Microsoft Mail For PC Networks
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After applying Service Pack 5 for Windows NT 3.51, any Microsoft Mail
	postoffices that are shared using File and Print Services for NetWare (FPNW) may
	experience errors. External.exe may log an error [012] when delivering mail to
	the postoffice. Dirsync.exe may not run automatically, and may generate a
	warning [154]. When you perform a manual DirSync, the postoffice will receive
	updates but will not send any updates to other postoffices.
	
	CAUSE
	=====
	
	A problem was introduced while attempting to improve an OS/2 file-date issue.
	
	WORKAROUND
	==========
	
	Two workarounds are available.
	
	Method One
	----------
	
	One is to edit the registry to disable the file caching for FPNW. This should
	have only a minor effect on performance.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Regedt32.exe.
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\FPNW\Parameters
	
	3. Choose EDIT and select ADD VALUE.
	
	4. Type the name of the value as:
	
	  "MaxCachedOpenFiles" (without the quotation marks)
	
	5. Set the type to REG_DWORD and enter 0 (zero) for the value.
	
	Method Two
	----------
	
	The second possible alternative is to replace two files from Service Pack 5 with
	two files from Service Pack 4 or the original File and Print Services for
	NetWare disks.
	
	1. Locate the following two files on the affected server:
	
	  Fpnwsrv.sys (System32\Drivers)
	  Fpnw.dll (System32)
	
	2. Rename the files to something like Fpnwsrv.sp5 and Fpnw.sp5.
	
	3. Copy the same files from Service Pack 4 or the FPNW disks to the appropriate
	  directories.
	
	4. Restart the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch kbSDKDAO351 kbServicesNetwareSearch
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
