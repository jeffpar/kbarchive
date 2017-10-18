---
layout: page
title: "Q252607: PRB: CopyFile Doesn't Work for Printer DeviceName w/Spaces on NT"
permalink: kb/252/Q252607/
---

## Q252607: PRB: CopyFile Doesn't Work for Printer DeviceName w/Spaces on NT

	Article: Q252607
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbprint kbOSWinNT kbOSWin2000 kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file is copied to the network printer with the CopyFile method of the
	FileSystemObject object, and the printer DeviceName contains a space, the
	following error occurs:
	
	  Runtime error 52: Bad file name or number
	
	RESOLUTION
	==========
	
	If you have administrative privileges on the server, rename the printer so that
	the DeviceName is one word without spaces in it.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that you do not have spaces in your printer DeviceNames
	because other problems might arise.
	
	Step-by-Step Example
	--------------------
	
	1. On a Microsoft NT 4.0 system, add a printer with a name that contains a
	  space.
	
	2. Create a text file in the C:\ folder, for example, test.txt.
	
	3. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	4. From the Project menu, select References, check Microsoft Scripting Runtime,
	  and click OK.
	
	5. Add a CommandButton to the form.
	
	6. Paste the following code in the code window of Form1:
	
	  Private Sub Command1_Click()
	  Dim FSO as FileSystemObject
	  set FSO = new FileSystemObject
	
	  ' To print on WinNT
	  FSO.CopyFile "C:\test.txt", Printer.DeviceName
	
	  ' If the devicename is like this: \\servername\HPLaser400, the file prints
	  ' If the devicename is \\servername\HP Laser 400, the above mentioned 
	  ' run-time error occurs
	
	  ' To print on Win9x
	  ' FSO.CopyFile "C:\test.txt",Printer.Port
	  End Sub
	
	7. Press the F5 key to run the project, and then click on the CommandButton.
	
	8. The file test.txt is printed if the DeviceName is one word without spaces.
	
	9. Alternatively, you can use APIs to bypass the printer driver and send data to
	  the printer. This is documented in article Q154078 listed below in the
	  "References" section.
	
	REFERENCES
	==========
	
	  Q154078 HOWTO: Send Raw Data to a Printer Using the Win32 API from VB
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbOSWinNT kbOSWin2000 kbPrinting kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
