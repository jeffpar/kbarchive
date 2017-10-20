---
layout: page
title: "Q244185: PRB: Cannot Use FileCopy() to Copy a File to a Printer"
permalink: /kb/244/Q244185/
---

## Q244185: PRB: Cannot Use FileCopy() to Copy a File to a Printer

{% raw %}

	Article: Q244185
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB tslic_tslic
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following code generates an "Invalid Parameter" error message on Microsoft
	Windows NT or Windows 2000 but works fine on Windows 95 or Windows 98:
	
	  FileCopy "c:\config.sys", "\\PrintServer\Printer"  
	
	However, the following code works fine on Windows NT or Windows 2000 but
	generates an "Invalid Parameter" error message on Windows 95 or Windows 98:
	
	  FileCopy "c:\config.sys", "lpt1"    
	
	CAUSE
	=====
	
	Beginning with Visual Basic 4.0, 32-bit, the FileCopy method no longer supports
	copying files to a port. Windows NT changes Command.com, which FileCopy uses.
	Thus, FileCopy behaves differently on Windows NT and Windows 2000 than on
	Windows 95 and Windows 98.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- To copy a file to a port, use the following code:
	
	  'On Windows 95/98, the copy command in Command.com can copy to a printer.
	  'On Windows NT/2000, it cannot. However, the copy command in Cmd.exe can.
	  'If you call Cmd.exe on Windows 95/98, you receive error 53 - File not found.
	  On Error Resume Next
	  Shell "cmd /c copy c:\config.sys \\PrintServer\Printer"
	  If Err.Number = 53 Then
	     Shell "command.com /c copy c:\config.sys \\PrintServer\Printer"
	  Else
	     Err.Raise Err.Number
	  End If
	  On Error GoTo 0
	  'This also runs Err.Clear. On Windows NT, shelling Command.com or 
	  'shelling a batch file fails with "Invalid Parameter."
	  'It only works when you specify CMD in the shell statement. 
	
	- Use the Win32 application programming interfaces (APIs) to send information
	  directly to the printer instead of copying files to the port. For additional
	  information, click the article number below to view the article in the
	  Microsoft Knowledge Base:
	
	  Q154078 HOWTO: Send Raw Data to a Printer Using the Win32 API from Visual
	  Basic
	
	  NOTE: Because this method uses APIs that bypass the printer driver, the
	  program must prepare printer language code and send it to the printer for
	  anything other than plain ASCII text, just as a printer driver would. As a
	  result, you must write the program so that it sends PCL or PostScript code to
	  the printer.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q189249 HOWTO: Determine Which 32-Bit Windows Version Is Being Used
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbPrinting kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB tslic_tslic 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
