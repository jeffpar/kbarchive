---
layout: page
title: "Q276593: PRB: Error: &quot;NMAKE : Fatal Error U1045: Spawn Failed&quot; When You A"
permalink: /kb/276/Q276593/
---

## Q276593: PRB: Error: &quot;NMAKE : Fatal Error U1045: Spawn Failed&quot; When You A

	Article: Q276593
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbNMake kbVC500 kbVC600
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a makefile by using the Microsoft Program Maintenance utility,
	Nmake.exe (NMAKE), you may receive the following error message:
	
	  NMAKE : fatal error U1045: spawn failed : Invalid argument
	
	CAUSE
	=====
	
	NMAKE uses the command interpreter to spawn the different tools that are needed
	to build the targets. The path to the command interpreter is found by querying
	for the value of the ComSpec environment variable. If the ComSpec environment
	variable is set incorrectly, you receive the error message shown in the
	"Symptoms" section.
	
	RESOLUTION
	==========
	
	To resolve this problem, ensure that the ComSpec environment variable is set
	correctly.
	
	For Microsoft Windows NT and Microsoft Windows 2000, the command interpreter is
	Cmd.exe. The ComSpec environment variable should contain the following:
	
	  %SYSTEMROOT%\System32\Cmd.exe
	
	To view and modify the ComSpec environment variable in Windows NT:
	
	1. Open Control Panel.
	
	2. Double-click the System icon, and then click the Environment tab.
	
	3. Select the ComSpec variable, which is located in the System Variables box.
	
	4. Modify the variable by using the Value edit box.
	
	To view and modify the ComSpec environment variable in Windows 2000 and Windows
	XP:
	
	1. Open Control Panel.
	
	2. Double-click the System icon, click the Advanced tab, and then click
	  Environment Variables.
	
	3. Select the ComSpec variable, which is located in the System Variables box.
	
	4. Click Edit to modify the variable.
	
	For Microsoft Windows 95, Microsoft Windows 98, and Microsoft Windows Millennium
	(Me), the command interpreter is Command.com. The ComSpec environment variable
	should contain the following:
	
	  %WINDIR%\Command.com
	
	To view the value of the ComSpec environment variable:
	
	1. Start the command interpreter. Click Start, point to Programs, and then click
	  MS-DOS Prompt.
	
	2. At the command prompt, type "set" (without the quotation marks), and then
	  press ENTER.
	
	A list of all of the environment variables should be displayed in alphabetical
	order.
	
	To correctly set the ComSpec environment variable:
	
	1. Open the Autoexec.bat file and add the following line:
	
	  "set ComSpec=%WINDIR%\Command.com" (without the quotation marks)
	
	2. Save the Autoexec.bat file and restart the computer.
	
	NOTE: On all these operating systems, ComSpec must not contain multiple paths.
	Only a single path is acceptable.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior in Windows 2000
	-------------------------------------------
	
	1. Start the command interpreter. Click Start, point to Programs, point to
	  Accessories, and then click Command Prompt.
	
	2. Type the following at the command prompt, and then press ENTER:
	
	  "set ComSpec=%ComSpec%;%ComSpec%" (without the quotation marks)
	
	3. Run NMAKE on your make file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbNMake kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
