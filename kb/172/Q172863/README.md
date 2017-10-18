---
layout: page
title: "Q172863: SMSINST: Using 'Execute Path' in Install.log File May Fail"
permalink: kb/172/Q172863/
---

## Q172863: SMSINST: Using 'Execute Path' in Install.log File May Fail

	Article: Q172863
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbtool smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Execute Path statement has been added to the Install.log file so that an
	external application will run when the application is removed, that external
	application does not always start successfully. For an example, see the MORE
	INFORMATION section of this article.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Create a batch file that contains the full command that that needs to be run.
	  Then modify the Execute Path statement's command line to run the batch file.
	
	-or-
	
	- If the file that needs to be acted on by the executable is associated with
	  that executable, the command line only needs to reference the file to be
	  acted on. For example, the following command line would cause the Notetst.txt
	  file to be displayed successfully in Notepad:
	
	  " C:\Test\Notetst.txt" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For example, if the following command is added to the Install.log, it would not
	run successfully when the application is removed:
	
	  " C:\TEST\NOTEPAD.EXE C:\TEST\NOTETST.TXT" (without the quotation marks)
	
	The Installer script item would appear like:
	
	  Add "Execute Path: %UNINSTP%\NOTEPAD.EXE %UNINSTP%\NOTETST.TXT" to
	  INSTALL.LOG
	
	From a normal command line, this would display the contents of the Notetst.txt
	file in Notepad. The breaking point occurs when the command line references an
	executable and subsequent file that the executable should act on.
	
	If the command line only references an executable, it works correctly. In the
	example above, Notepad will not start at all.
	
	
	Additional query words: prodsms mstest mtrun deinstall uninstall
	
	======================================================================
	Keywords          : kbtool smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
