---
layout: page
title: "Q172530: Deleted UNC Connection While In Use Causes an In-Page Error"
permalink: kb/172/Q172530/
---

## Q172530: Deleted UNC Connection While In Use Causes an In-Page Error

	Article: Q172530
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT Server 3.51 or Windows NT Workstation 3.51 may
	allow a universal naming convention (UNC) connection to be disconnected even
	though that UNC connection is required for other programs to run.
	
	An application may experience an in-page i/o pop-up error message (0xC0000006) or
	the application may just quit because of a stack fault after the application
	attempts to handle the in-page errors.
	
	
	CAUSE
	=====
	
	This problem only occurs if the client requests that the connection be deleted.
	The redirector insures that there are no open file handles before deleting the
	connection, but in some cases there are references on file objects themselves
	and the connection is still deleted.
	
	For example, if a shared copy of PowerPoint is installed on a network server, no
	other files are opened on the connection, and the user clicks Apply Design
	Template from the Format menu, PowerPoint will stop responding for a moment,
	then quit. In this case, Powerpoint requested that the template share be
	disconnected. That share happens to be the same one that PowerPoint.exe was
	carried out from.
	
	RESOLUTION
	==========
	
	The redirector has been modified to check for references on the file objects and
	will return an error that the device is in use when an attempt is made to
	disconnect the UNC connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
