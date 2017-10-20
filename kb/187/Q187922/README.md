---
layout: page
title: "Q187922: PRB: Passing a UDT To Or From an ActiveX EXE May Fail on NT"
permalink: /kb/187/Q187922/
---

## Q187922: PRB: Passing a UDT To Or From an ActiveX EXE May Fail on NT

{% raw %}

	Article: Q187922
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbOSWinNT400 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 6.0, user-defined types (UDTs) can be arguments or return types
	of public properties or methods. Trying to pass or receive a UDT using an
	ActiveX EXE (out of process server)on NT 4.0 will fail if Service Pack 4 for NT
	4.0 is not installed.
	
	RESOLUTION
	==========
	
	Install Service Pack 4 for NT 4.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When running a client application that receives or returns a UDT to an ActiveX
	EXE on NT 4.0 without Service Pack 4, one of the following will occur:
	
	- The ActiveX EXE is running in debug mode in the Visual Basic IDE. When a
	  client tries to create the server that is running in the IDE you will receive
	  the following error:
	
	  Run-time error '458':
	  Variable uses an Automation type not supported in Visual Basic.
	
	  -or-
	
	- The ActiveX EXE is running as a compiled exe. When a client tries to create
	  the server, the client application hangs.
	
	REFERENCES
	==========
	
	For additional information on passing or receiving UDTs with ActiveX code
	components, please see the following article in the Microsoft Knowledge Base:
	
	  Q185700 : HOWTO: Remote User-Defined Types
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbOSWinNT400 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
