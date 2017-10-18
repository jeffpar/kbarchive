---
layout: page
title: "Q155939: HOWTO: Use Clireg32.exe for Remote Automation"
permalink: kb/155/Q155939/
---

## Q155939: HOWTO: Use Clireg32.exe for Remote Automation

	Article: Q155939
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides an explanation of Clireg32.exe and how it is used for
	remote automation.
	
	MORE INFORMATION
	================
	
	The Clireg32.exe component allows you to register an OLE server (.exe) remotely.
	It differs from the Remote Automation Connection Manager (RacMan) in that the
	server does not need to be located on the machine registering it. The Setup
	Wizard handles the maintenance of registering remote servers for you.
	
	NOTE: Remote servers and Clireg files are stored in the \Windows\Olesrv\
	directory, which is similar to Visual Basic if it is installed via the Setup
	Wizard.
	
	The Clireg32.exe program takes a number of parameters. The only required one is
	the name of the .vbr file (generated with the server during build):
	
	  Clireg32 myexesvr.vbr
	
	In order to fully register a remote server, you must provide the network name,
	network protocol, and security access. Clireg32 prompts you with a dialog box if
	these options are not passed. For a list of all the parameters, simply execute
	Clireg32.exe by itself.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
