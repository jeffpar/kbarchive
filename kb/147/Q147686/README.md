---
layout: page
title: "Q147686: HOWTO: Get Current Drive's Free Disk Space in VB 4.0"
permalink: kb/147/Q147686/
---

## Q147686: HOWTO: Get Current Drive's Free Disk Space in VB 4.0

	Article: Q147686
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp400 kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to find out how much free disk space is available on the
	current drive by calling the DiskSpaceFree function found in STKIT416.DLL for
	Win16 or STKIT432.DLL for Win32. Both dynamic-link libraries (DLLs) ship with
	the Setup kit in Microsoft Visual Basic version 4.0 for Windows. The
	DiskSpaceFree function is useful for finding the free space available on a
	drive. If you use the DiskSpaceFree function in your Visual Basic program, you
	need to distribute STKIT416.DLL or STKIT432.DLL to your customers.
	
	MORE INFORMATION
	================
	
	There is also a function in the Win32 API (Application Programmers Interface)
	called GetDiskFreeSpace provided by the Win32 operating system that retrieves
	information about a specified disk, including the amount of free space on the
	disk. Refer to Method II in the example below. There are also other functions in
	the STKIT416.DLL or STKIT432.DLL that may be useful. You can use the AllocUnit
	function to get the disk allocation unit for the current drive, and use the
	SetTime function to set the destination file's date and time to the source
	file's date and time.
	
	Examples of using these SETUPKIT functions are also included in the
	\VB\SETUPKIT\SETUP1\SETUP1.VBP project which is part of the SetupWizard.
	
	Steps to Finding Out How Much Free Space Is Available on Drive C
	----------------------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add two Label controls (Label1 and Label2) and one Command button (Command1)
	  to Form1.
	
	3. Using the following table as a guide, set the properties of the controls you
	  added in step 2.
	
	  Control Name   Property       New Value
	  ----------------------------------------------------------------
	  Command1       Caption        Press for Free Space on Drive C
	  Label1         AutoSize       True
	  Label2         AutoSize       True
	
	4. Place the following code in the general declarations section of Form1:
	
	        #If Win32 Then
	        Private Declare Function DiskSpaceFree Lib "STKIT432.DLL" Alias _
	        "DISKSPACEFREE" () As Long
	        Private Declare Function GetDiskFreeSpace Lib "kernel32" Alias _
	        "GetDiskFreeSpaceA" ( ByVal lpRootPathName As String, _
	        lpSectorsPerCluster As Long, lpBytesPerSector As Long, _
	        lpNumberOfFreeClusters As Long, lpTotalNumberOfClusters As Long) _
	        As Long
	        #Else
	        Private Declare Function DiskSpaceFree Lib "STKIT416.DLL" () As Long
	        #End If
	
	5. Place the following code in the Command1 Click event procedure of Form1:
	
	        Private Sub Command1_Click()
	        Dim free_Space As Long
	        ChDrive "C:"
	        ' Method I (using the Win16 API).
	        free_Space = DiskSpaceFree()
	        Label1.Caption = "(Method I: ) The total free space on Drive C: = " _
	        & Str$(free_Space) & " bytes"
	        ' Method II (using the Win32 API).
	        #If Win32 Then
	        Dim numSectorsPerCluster As Long
	        Dim numBytesPerSector As Long
	        Dim numFreeClusters As Long
	        Dim numTotalClusters As Long
	        Dim success As Boolean
	        success = GetDiskFreeSpace("C:\", numSectorsPerCluster, _
	        numBytesPerSector,  numFreeClusters, numTotalClusters)
	        free_Space = numSectorsPerCluster * numBytesPerSector * _
	        numFreeClusters
	        Label2.Caption = _
	        "(Method II:) The total free space on Drive C: = " & _
	        Str$(free_Space) & " bytes"
	        #Else
	        Label2.Caption = "Use Method I for Win16 applications"
	        #End If
	        End Sub
	
	6. From the Run menu, click Start (ALT, R, S), or press the F5 key to run the
	  program. Click the Command1 button to view the free disk space on drive C.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp400 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
