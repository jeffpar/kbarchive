---
layout: page
title: "Q154819: HOWTO: Access PC Bus Devices in Visual Basic for Windows"
permalink: /kb/154/Q154819/
---

## Q154819: HOWTO: Access PC Bus Devices in Visual Basic for Windows

	Article: Q154819
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to access PC bus devices in Visual Basic for Windows.
	Many programs written in MS-DOS versions of BASIC used Peek, Poke, and In and
	Out to access the PC bus directly. This functionality is not supported in Visual
	Basic for Windows.
	
	MORE INFORMATION
	================
	
	MS-DOS did not implement any memory protection; this meant that BASIC
	applications were able to write to any memory location directly, giving fast
	access to the hardware of the PC, including custom hardware that plugged into
	the expansion ports. In a multitasking environment it was clearly unacceptable
	for an application to write to memory owned by another application. The hardware
	port addresses are deemed to belong to the system. Accordingly, applications are
	unable to write directly to the PC bus addresses.
	
	It is often desirable to port MS-DOS BASIC code to a Windows environment.
	However, programs that attempt to control custom devices will fail to port
	directly.
	
	Effectively, there are two potential solutions:
	
	1. Use a custom Virtual Device Driver (VxD). It is likely that the manufacturers
	  of more popular custom devices will have a VxD. However, there may be no VxD,
	  or the VxD interface may be structured differently.
	
	  Versions of Visual Basic prior to 5.0 may require extra steps to use a VxD.
	  Versions prior to 5.0 did not have the AddressOf operator needed by many VxDs
	  to use Callback procedures. The workaround is have the Visual Basic program
	  call a C DLL which would in turn call the VxD.
	
	2. Use a third-party DLL or OCX that emulates the functionality. There are a
	  number available commercially or as shareware.
	
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q29519 : How to Write a Driver for a Custom Hardware Device
	
	  Q87004 : Differences Between QuickBasic and Visual Basic Statements
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbintluk kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
