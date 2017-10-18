---
layout: page
title: "Q114557: Executing Viewer Commands When MCI Finishes Playing"
permalink: kb/114/Q114557/
---

## Q114557: Executing Viewer Commands When MCI Finishes Playing

	Article: Q114557
	Product(s): Miscellaneous Software Development Kits
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The VWRHOOK sample contains code for a HOOKS.DLL which can be used to execute
	Viewer commands when an MCI file within a Viewer title finishes playing. The
	dynamic link library (DLL) will work with MCI files which have been included in
	the title with an {ewX MVMCI2, ViewerMCI...} statement.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Vwrhook.exe
	  (http://download.microsoft.com/download/platformsdk/sample9/1/WIN98/EN-US/vwrhook.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The DLL accomplishes this by installing a task specific WH_GETMESSAGE hook for
	Viewer. When an MCI file in a Viewer title finishes playing, the hook procedure
	will receive a MM_MCINOTIFY message. The hook procedure processes this message
	by sending a command to Viewer using VwrCommand().
	
	The DLL can be used by multiple instances of Viewer because it keeps track of
	which instances of Viewer have called it.
	
	To use HOOKS.DLL with a Viewer title, the title should register the functions
	HookMCINotify() and ChangeCommand() in the [CONFIG] section of its .MVP file as
	follows:
	
	     RegisterRoutine(`hooks.dll', `HookMCINotify', `i=U')
	     RegisterRoutine(`hooks.dll', `ChangeCommand', `i=S')
	
	HookMCINotify() sets the hook. Its only parameter is the internal hwndApp
	variable. It returns 1 if the hook was successfully installed, and 0 otherwise.
	Typically, a title would call HookMCINotify(hwndApp) from the [CONFIG] section
	of its .MVP file (after it has been registered).
	
	ChangeCommand() is used to set the command which should be executed when any MCI
	file in the title finishes playing. This command can be called from the [CONFIG]
	section, as a topic entry command, as a group entry or exit command, or as a
	hotspot command. Note that the HOOKS.DLL keeps track of only the most recent
	command that was set. There is no default command, so this function must be
	called if any command is to be executed when the hook procedure gets the
	MM_MCINOTIFY message. This function should only be called after HookMCINotify()
	has been called. ChangeCommand() takes as its parameter a string with the
	command in it. The string can have multiple commands, separated by semicolons
	(;). ChangeCommand() returns 1 if it was successful, and 0 otherwise.
	
	A Viewer title can also register UnhookMCINotify() if it will specifically unhook
	the hook. It should be registered as follows:
	
	  RegisterRoutine(`hooks.dll', `UnhookMCINotify', `')
	
	It does not take any parameters. If a title does not call this function,
	HOOKS.DLL will unhook the hook when the instance of Viewer that called
	HookMCINotify() terminates.
	
	The sample also includes the files necessary to build a sample title which uses
	the DLL.
	
	Additional query words: KBFILE
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbHomeProdSearch kbHomeMMsearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
