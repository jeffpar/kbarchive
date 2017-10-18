---
layout: page
title: "Q138141: INFO: Tips For Troubleshooting Remote OLE Automation Errors"
permalink: kb/138/Q138141/
---

## Q138141: INFO: Tips For Troubleshooting Remote OLE Automation Errors

	Article: Q138141
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 26-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A client's request for any service from a remote server always goes through the
	Automation Manager (AM) that runs on the server computer. If this request cannot
	be granted by the AM for some reason (for example, if the server is busy), then
	after some timeout interval an entry will made in an eventlog by the AM.
	
	MORE INFORMATION
	================
	
	On Windows NT version 3.51, 4.0, and Windows 2000 the event log is a system file
	that can be viewed by running the system utility called EventViewer
	(Eventvwr.exe) in the Administrative Tools Program Group in the Program
	Manager.
	
	On Windows 95 or Windows 98, there is no system event log file. So, the AM
	creates a similar file AUTMGR32.log. It is created in the windows\system or
	win95\system directory and it is used when making the error entries. This is a
	standard text file and can be opened in any text editor like Notepad. This file
	cannot exceed a certain maximum size. There are entries in the system registry
	that have values that the AM uses to see when the maximum size of this log file
	is reached, so that it can truncate its size to another value also obtained from
	the registry. These registry keys are:
	
	  MinErrorLogSize DWORD (size to truncate to in bytes)
	  MaxErrorLogSize DWORD (threshold of when to truncate in bytes)
	
	NOTE: Only the AM can make entries in the eventlog. If the server raises an
	error, it is just passed on to the client and no eventlog entry is made.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
