---
layout: page
title: "Q153091: HOWTO: Find and View the Amount of Free Disk Space on a Drive"
permalink: /kb/153/Q153091/
---

## Q153091: HOWTO: Find and View the Amount of Free Disk Space on a Drive

{% raw %}

	Article: Q153091
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	From Visual Basic, it is possible to use the Win32 API function GetDiskFreeSpace
	to find and view the amount of free disk space on a specified drive. The code
	sample below shows this in practice.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Remove Form1 from the project.
	
	3. Add a BAS module to the project.
	
	4. Add the following code to the Module1 code window:
	
	     Declare Function GetDiskFreeSpace Lib "kernel32" Alias _
	        "GetDiskFreeSpaceA"  (ByVal lpRootPathName As String, _
	        lpSectorsPerCluster As Long, lpBytesPerSector As Long, _
	        lpNumberOfFreeClusters As Long, lpTotalNumberOfClusters As Long) _
	  	As Long
	
	     Public Type DiskInformation
	         lpSectorsPerCluster As Long
	         lpBytesPerSector As Long
	         lpNumberOfFreeClusters As Long
	         lpTotalNumberOfClusters As Long
	     End Type
	
	     Sub main()
	         Dim info As DiskInformation
	         Dim lAnswer As Long
	         Dim lpRootPathName As String
	         Dim lpSectorsPerCluster As Long
	         Dim lpBytesPerSector As Long
	         Dim lpNumberOfFreeClusters As Long
	         Dim lpTotalNumberOfClusters As Long
	         Dim lBytesPerCluster As Long
	         Dim lNumFreeBytes As Double
	         Dim sString As String
	
	         lpRootPathName = "c:\"
	         lAnswer = GetDiskFreeSpace(lpRootPathName, lpSectorsPerCluster, _
	         lpBytesPerSector, lpNumberOfFreeClusters, lpTotalNumberOfClusters)
	         lBytesPerCluster = lpSectorsPerCluster * lpBytesPerSector
	         lNumFreeBytes = lBytesPerCluster * lpNumberOfFreeClusters
	         sString = "Number of Free Bytes : " & lNumFreeBytes & vbCr & vbLf
	         sString = sString & "Number of Free Kilobytes: " & (lNumFreeBytes _
	            / 1024) & "K" & vbCr & vbLf
	         sString = sString & "Number of Free Megabytes: " & _
	            Format(((lNumFreeBytes / 1024) / 1024), "0.00") & "MB"
	
	         MsgBox sString
	     End Sub
	
	5. Press the F5 key or choose Start from the Run menu to start the program. You
	  will see a message box displaying the free disk space on drive C:.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
