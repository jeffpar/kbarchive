---
layout: page
title: "Q130028: Windows NT Server Tools on WFW Fails With RPC Error"
permalink: /kb/130/Q130028/
---

## Q130028: Windows NT Server Tools on WFW Fails With RPC Error

	Article: Q130028
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT Server Tools on a Windows for Workgroups version
	3.11 computer and attempt to administer a Windows NT Server using any one of the
	Server Tools, the following error message may appear:
	
	  The remote procedure call failed and did not execute.
	
	  Do you want to select another Domain to Administer?
	
	RESOLUTION
	==========
	
	To correct this problem, you must modify the Registry on the remote Windows NT
	Server.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters
	
	3. Find the following:
	
	     Value Name:   SizReqBuf
	     Data Type:    REG_DWORD
	
	4. If the value exists, change the data to a number larger than the default data
	  of 4356 (decimal).
	
	  If the value does not exist:
	
	  a. From the Edit menu, select Add Value.
	
	  b. Enter the information above.
	
	  c. For the data, enter a number larger than the default data.
	
	5. Quit Registry Editor.
	
	6. Either shutdown and restart Windows NT, or from a command prompt, type the
	  following commands (pressing ENTER after each line):
	
	  net stop server
	  net start server
	  net start netlogon (if the Netlogon service has not started)
	
	You must also update your Windows for Workgroups version 3.11 client with the
	files located in the \CLIENTS\WFW\UPDATE subdirectory on the Windows NT Server
	version 3.5 CD-ROM as follows:
	
	1. Close Windows for Workgroups
	
	2. From MS-DOS, copy the following files to your Windows root directory (this is
	  C:\WINDOWS by default):
	
	     NET.EXE       450,262   09/04/94   08:07a
	
	3. From MS-DOS, copy the following files to your Windows System directory (this
	  is C:\WINDOWS\SYSTEM by default):
	
	     NDIS.386       27,846   09/04/94   08:07a
	     NETAPI.DLL    109,120   09/04/94   08:07a
	     NWNBLINK.386   37,964   09/04/94   08:07a
	     VNETSUP.386    14,647   09/04/94   08:07a
	     VREDIR.386     85,746   09/04/94   08:07a
	
	4. Restart Windows for Workgroups
	
	Additional query words: prodnt nts wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : :3.11,3.5
	
	=============================================================================
	
