---
layout: page
title: "Q96312: SAMPLE: Windows Application to Unload DLLs from Memory"
permalink: kb/096/Q96312/
---

## Q96312: SAMPLE: Windows Application to Unload DLLs from Memory

	Article: Q96312
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During development, dynamic-link libraries (DLLs) can sometimes be left in
	memory with no applications using them. To unload DLLs that have been left in
	memory, developers must exit and then restart Windows, which can be very
	inconvenient. DLL UNLOADER is a sample Windows-based application that lets
	developers select a DLL, show information about it, and unload it from the
	system if desired; this eliminates the need to restart Windows.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Unloader.exe
	  (http://download.microsoft.com/download/platformsdk/sample80/3.1/W31/EN-US/UNLOADER.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	There are two ways that a DLL can be left in memory after all applications that
	use it have exited:
	
	- The application loads a DLL by calling LoadLibrary() and doesn't call
	  FreeLibrary to unload it.
	
	- The application causes a general protection (GP) fault and is terminated by
	  Windows.
	
	Either of these occurrences can cause difficulties for developers. For example:
	
	If a DLL is left in memory with no application using it, and is then recompiled
	and executed, the new version of the DLL will not be loaded because Windows
	thinks the DLL is already loaded (because the module names are the same). If you
	try to debug the DLL with CodeView for Windows, the source code window will
	display the latest version's source code; however, the old version's code, which
	is still in memory, will be executed. This version mismatch causes CodeView to
	appear to not be working properly. To resolve this problem, you must either exit
	and restart Windows or force Windows to unload the old version of the DLL.
	
	The DLL UNLOADER sample calls ToolHelp to obtain the list of modules currently
	loaded in the system. Because this list contains modules that belong to both
	DLLs and applications (which are tasks), DLL UNLOADER filters out the modules
	that belong to tasks so that they cannot be unloaded accidentally and cause the
	system to crash. The list box stores the module name and handle for each module
	that doesn't belong to a task. When the user selects a module, its handle is
	used to obtain information about it and/or unload it.
	
	To unload a DLL, DLL UNLOADER first calls GetModuleUsage() to retrieve its usage
	count and then repeatedly calls FreeLibrary() until the usage count drops to
	zero; then Windows unloads the DLL. To obtain information about a DLL, DLL
	UNLOADER calls ModuleFindHandle() and displays the information in a dialog box.
	
	Finally, DLL UNLOADER creates an .INI file in the directory where its executable
	file resides to remember its last position on the screen before it exits.
	
	Additional query words: 3.10 softlib UNLOADER.EXE kbFile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
