---
layout: page
title: "Q112302: PC Win: Exporting Folders Err Msg: Not Enough Memory..."
permalink: /kb/112/Q112302/
---

## Q112302: PC Win: Exporting Folders Err Msg: Not Enough Memory...

	Article: Q112302
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0, 3.0b, and 3.2 of Microsoft Mail for PC Networks, the following
	error message may be displayed when you try to export folders:
	
	  STOP: There is not enough memory or system resources to complete this action.
	  Try closing some windows and performing the action again.
	
	CAUSE
	=====
	
	This message can occur if there is a backslash (\) at the end of the directory
	path following the ExportMmfFile entry in the MSMAIL.INI file.
	
	The following is an example of an incorrect entry:
	
	  [Microsoft Mail]
	  ExportMmfFile=C:\WINDOWS\
	
	RESOLUTION
	==========
	
	To correct this problem, use an ASCII text editor (such as NOTEPAD.EXE) to
	remove the backslash following the path name (in this example, WINDOWS). For
	example:
	
	  [Microsoft Mail]
	  ExportMmfFile=C:\WINDOWS
	
	Adding any valid characters following the backslash will also result in the
	low-memory error:
	
	  [Microsoft Mail]
	  ExportMmfFile=C:\WINDOWS\MYFILE.MMF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.00 3.00b 3.20 MMF File
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
