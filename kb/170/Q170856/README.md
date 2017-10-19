---
layout: page
title: "Q170856: IIS Log File May Be Truncated When Logging to Text File"
permalink: /kb/170/Q170856/
---

## Q170856: IIS Log File May Be Truncated When Logging to Text File

	Article: Q170856
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set Internet Information Server (IIS) to log to a text file, and you
	select Automatically Open New File Daily, Weekly, or Monthly, the current log
	file may still become truncated. As a result, further logging will be directed
	to the Inetsvn.log file.
	
	WORKAROUND
	==========
	
	Use one of the following methods:
	
	Method 1
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Edit Registry for each service.
	
	2. Set Parameters/LogFileTruncateSize to 0xffffffff.
	
	Method 2
	--------
	
	1. Force the registry to write correct value into Parameters/LogFileTruncateSize
	  through InetMgr.
	
	2. Change the logging properties by selecting When File Size Reaches option.
	  Edit a new size, and click Apply.
	
	3. Go back to original Open New File Daily option. The behavior will now be
	  correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
