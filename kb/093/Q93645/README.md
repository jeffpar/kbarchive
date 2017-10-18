---
layout: page
title: "Q93645: Windows Help Internal Variables"
permalink: kb/093/Q93645/
---

## Q93645: Windows Help Internal Variables

	Article: Q93645
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information on the Windows Help internal variables is from the
	Help Authoring Guide on the Microsoft Developer's Network (MSDN) CD:
	
	  Windows Help defines a series of internal variables that can be used with
	  macros. After you register a DLL function as a Help macro, you can specify
	  the Windows Help internal variables as parameters to that function when the
	  function appears in hot spots or macro footnotes. These variables are always
	  available, and their values change depending on the current state of the Help
	  file. Many DLL routines, as well as some standard Help macros, require the
	  information residing in these variables.
	
	  You can use any of the following Windows Help internal variables in DLL
	  functions:
	
	  Variable      Format Spec   Description
	  ---------------------------------------
	  hwndApp       U             Number specifying the handle (a numeric
	                              identifier used by Windows) to the main
	                              Help window. This variable is guaranteed
	                              to be valid only while the DLL function is
	                              executing.
	
	  hwndContext   U             Number specifying the handle of the Help
	                              window (either the main Help window or a
	                              secondary window) that is active at the
	                              time the DLL is called.
	
	  qchPath       S             String specifying a fully qualified path
	                              of the currently open Help file.
	
	  qError        U             Long pointer to a structure containing
	                              information about the most recent Windows
	                              Help error.
	
	  lTopicNo      U             Number specifying the current topic
	                              number. This number is relative to the
	                              order of topics in the RTF files used to
	                              build the Help file. The current topic is
	                              the topic displayed in the Help window
	                              that is active when the DLL is called.
	
	  hfs           U             Number specifying the handle (a numeric
	                              identifier used by Windows) to the file
	                              system for the currently open Help file.
	
	  coForeground  U             Number specifying the RGB value of the
	
	                              foreground color of the window that is
	                              active when the DLL is called.
	
	  coBackground  U             Number specifying the RGB value of the
	
	                              background color of the window that is
	                              active when the DLL is called.
	
	Additional query words: no32bit 3.10 Help Compiler HC31.EXE HCP.EXE WinHelp
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
