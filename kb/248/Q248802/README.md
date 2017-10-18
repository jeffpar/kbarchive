---
layout: page
title: "Q248802: PRB: Vcvars32.bat Generates Out of Environment Message"
permalink: kb/248/Q248802/
---

## Q248802: PRB: Vcvars32.bat Generates Out of Environment Message

	Article: Q248802
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 04-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing the Vcvars32.bat batch file from the MS-DOS prompt on Windows 95,
	Windows 98 and Windows Millenium Edition (Me) systems generates the following
	messages:
	
	  Setting environment for using Microsoft Visual C++ tools.
	  Out of environment space
	  Out of environment space
	  Out of environment space
	
	CAUSE
	=====
	
	The error can occur when you do not have enough memory in the MS-DOS environment
	to set an environment variable.
	
	RESOLUTION
	==========
	
	For additional information on increasing the environment memory for MS-DOS
	programs, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q230205 Out of Environment Space Error Message in MS-DOS Programs
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Vcvars32.bat is a batch file containing statements that set the environment
	variables necessary to run Visual C++ tools such as Cl.exe from the MS-DOS
	prompt. It is created during the Visual C++ setup.
	
	Use the following steps to run this batch file for every MS-DOS session:
	
	1. Locate the Command.com program in WINDOWS directory using Windows Explorer.
	
	2. Right-click the program and select Properties.
	
	3. Select the Program tab in the Properties window
	
	4. Type the full path to the Vcvar32.bat file in the "Batch file" edit window.
	
	REFERENCES
	==========
	
	For more information, see the following in the MSDN Library
	(http://msdn.microsoft.com/library):
	
	  Visual Studio 6.0 Documentation; Visual C++ Documentation; Using Visual C++;
	  Visual C++ Programmer's Guide; Compiling and Linking; How Do I...; Set
	  Environment Variables
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC kbVC500 kbVC600 kbOSWin95 kbOSWin98 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbWinMEsearch kbAudDeveloper kbWin98search kbWin98 kbWinME kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
