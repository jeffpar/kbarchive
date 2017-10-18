---
layout: page
title: "Q299603: PRB: &quot;Error reading file&quot; Err Msg on Windows 2000 Terminal Svcs"
permalink: kb/299/Q299603/
---

## Q299603: PRB: &quot;Error reading file&quot; Err Msg on Windows 2000 Terminal Svcs

	Article: Q299603
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbTermServ kbgrpdsvc
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When one user shuts down a Visual FoxPro application that runs on Windows 2000
	under Terminal Services and uses networked data (either a mapped drive or a UNC
	path), the other users see the following error message:
	
	  Error reading file.
	
	NOTE: This is error 1104.
	
	CAUSE
	=====
	
	This is caused by a problem with the Terminal Services network redirector. For
	performance reasons, the Windows 2000 redirector holds one file handle for each
	table that is open, and shares it between the sessions. When one session logs
	off, that handle is released, causing all other sessions to receive Error 1104
	when they access the file handle.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, try one of the following:
	
	- The most reliable resolution to this problem is to put the data on the local
	  computer. For additional information on how to do this, click the article
	  number below to view the article in the Microsoft Knowledge Base:
	
	  Q294816 Programs Run from Network Share on TS Close or Generate Errors
	
	- There is a fix to the redirector that works in some situations. First, test
	  the data locally. If that works, see the following Knowledge Base article for
	  information on how to obtain the fix:
	
	  Q322019 Data Loss Occurs When You Copy Files Over the Network
	
	- Several registry settings related to caching have been shown to alleviate the
	  problem when set on the Terminal Services computer.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Locate the OpLocksDisabled value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\Mrxsmb\Parameters
	
	  3. On the Edit menu, click DWORD, type "0x1" (without the quotation marks),
	     and then click OK.
	
	  4. Locate the CachedOpenLimit value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\LanmanServer\Parameters
	
	  5. On the Edit menu, click DWORD, type "0x0" (without the quotation marks),
	     and then click OK.
	
	  6. Locate the UtilizeNTCaching value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CCS\Services\LanmanWorkstation\Parameters
	
	  7. On the Edit menu, click DWORD, type "0x0" (without the quotation marks),
	     and then click OK.
	
	  8. Quit Registry Editor.
	
	- If the data files reside on an Windows NT 4.0 File Server, move the data to a
	  Windows 2000 File Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbTermServ kbgrpdsvc 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
