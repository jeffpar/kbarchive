---
layout: page
title: "Q168769: SMSINST: Registering Third-Party Applications and Controls"
permalink: /kb/168/Q168769/
---

## Q168769: SMSINST: Registering Third-Party Applications and Controls

{% raw %}

	Article: Q168769
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0; winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork smsinst
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Systems Management Server Installer to deploy certain
	applications, it may be necessary to register services, applications, or OCX
	controls in the Windows NT or Windows 95 operating system. You can do this with
	actions in the Script Editor. This article provides some examples of how to do
	this.
	
	MORE INFORMATION
	================
	
	Registering OLE Server Applications
	-----------------------------------
	
	In the Execute Program action item in the Script Editor, enter in the following
	fields:
	
	     EXE PATH: %MAINDIR%\yourappname.exe
	     COMMAND LINE: /REGSERVER
	
	Registering a Third-Party OCX
	-----------------------------
	
	The easiest way to do this is to use the Self Register OCXs/DLLs action item in
	the Script Editor to have Microsoft Systems Management Server Installer register
	these files automatically. Another option is to manually include Regsvrocx.exe
	with your installation, and use the Execute Program action item in the Script
	Editor. Use the following example as a model for your own installation:
	
	     EXE PATH: %TEMP%\regsvrocx.exe
	     COMMAND LINE: %SYS%\example.ocx
	
	Registering a Third-Party Application
	-------------------------------------
	
	In the Execute Program action item in the Script Editor, use the following lines
	as a model for your own installation:
	
	     EXE PATH: %MAINDIR%\MYAPP.EXE
	     COMMAND LINE: /REGSERVER
	
	Registring a third-Party Service
	--------------------------------
	
	You can register services with the Create Service action item in the Script
	Editor.
	
	Additional query words: prodsms smsinst registry sms
	
	======================================================================
	Keywords          : kbnetwork smsinst 
	Technology        : kbSMSSearch kbSMS120 kbSMSI100
	Version           : WINDOWS:1.0; winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
