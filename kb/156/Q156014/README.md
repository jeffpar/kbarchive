---
layout: page
title: "Q156014: HOWTO: Set Up OLE Automation in Visual FoxPro"
permalink: /kb/156/Q156014/
---

## Q156014: HOWTO: Set Up OLE Automation in Visual FoxPro

{% raw %}

	Article: Q156014
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the registry settings required for OLE Automation and how
	to set them if you do not use the Setup Wizard.
	
	MORE INFORMATION
	================
	
	OLE Automation works if you install a product correctly or you use the Setup
	Wizard (assuming you choose an OLE Server).
	
	The Setupwiz.xls file lists the files installed for certain options. This is the
	best way to view which files you need.
	
	There are circumstances that may affect the proper functioning of automation
	servers. You can usually remedy these circumstances with the following.
	
	Local Automation
	----------------
	
	You do not need extra files for remote automation except for the servers
	themselves. Primarily, you need the Oleaut32.dll file, which is installed by
	Visual FoxPro, the Setup Wizard, and Windows.
	
	Registering OLE Servers Locally
	-------------------------------
	
	Simply building an OLE server (.exe or .dll file) via the Project Manager or
	BUILD command automatically registers the server on that machine. If you want to
	copy the OLE server to another machine (not via the Setup Wizard) and register
	it, you should do the following:
	
	1. Copy the server (.exe or .dll file) and its .tlb and .vbr files to the new
	  machine.
	
	  NOTE: The .tlb and .vbr files are not required, but you should copy them in
	  case they are needed later by certain components.
	
	  The .tlb file is the Type Library that certain OLE clients can read. The .vbr
	  file allows you to do a remote registration using the Microsoft Client Remote
	  Server Registration component (Clireg32).
	
	2. Register the server on the new machine with the following code:
	
	  
	
	        For EXEs, use the /RegServer switch
	          ex. myexesvr.exe /RegServer
	
	        For DLLs, use RegSvr32
	          ex. RegSvr32 mydllsvr.dll
	
	Remote Automation
	-----------------
	
	Remote automation requires several components in addition to the server files to
	work correctly, including the following Automation Proxy and Automation Manager
	files:
	
	  Autprx32.dll
	  Autmgr32.exe
	
	Registering OLE Servers Locally
	-------------------------------
	
	There are several ways to register a remote automation server. The easiest is to
	use the Remote Automation Connection Manager (RacMan). You must first have the
	server registered locally. RacMan uses the following files:
	
	  Racmgr32.exe
	  Racreg32.dll
	  Vb40032.dll
	  Odkob32.dll
	  Comctl32.dll
	
	You can also use the Clireg32.exe component to register a server remotely. All
	that is required to use the Clireg32.exe component is the .vbr file.
	
	Updating a Server
	-----------------
	
	It is always a good idea to reregister a server when you update it. If you are
	using the Project Manager, the BUILD EXE command, or the BUILD DLL command, the
	server is automatically updated on that machine.
	
	NOTE: You can choose the Generate New Registry IDs option to re-create new GUIDs
	for the server settings.
	
	You can reregister servers on other remote machines using the techniques
	described above. These techniques include the Setup Wizard, the RacMan
	component, the RegSvr32 component, and the CliReg32 component.
	
	Additional query words: register CLIREG32 Remote Local
	
	======================================================================
	Keywords          : kbinterop kbAutomation 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
