---
layout: page
title: "Q209381: Err Msg: OleMainThreadWndName:mtx.exe- Unable to locate DLL"
permalink: /kb/209/Q209381/
---

## Q209381: Err Msg: OleMainThreadWndName:mtx.exe- Unable to locate DLL

	Article: Q209381
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the installation of the Windows NT 4.0 Option Pack, the following error
	is displayed:
	
	  (Title Bar:) OleMainThreadWndName:mtx.exe- Unable to locate DLL.
	  The dynamic link library NLSRTL32.DLL could not be found in the specified path
	  <%path%>.
	
	The following error is then displayed, and continues to occur during all
	subsequent restarts of the computer:
	
	  (Title Bar:) OleMainThreadWndName:mtx.exe-DLL initialization failed.
	  Initialization of the dynamic link library
	  <%SystemRoot%>\system32\ociw32.dll failed.
	  The process is terminating abnormally.
	
	RESOLUTION
	==========
	
	In the <%SystemRoot%>\System32 folder, rename Ociw32.dll to another name,
	and then reinstall the Windows NT 4.0 Option Pack.
	
	MORE INFORMATION
	================
	
	The Ociw32.dll file is related to Oracle database drivers.
	
	Additional query words: iis ntop ociw.dll dll setup set up boot reboot errmsg err msg akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
