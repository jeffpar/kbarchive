---
layout: page
title: "Q161151: HOWTO: Get Windows Status Information via API Calls"
permalink: kb/161/Q161151/
---

## Q161151: HOWTO: Get Windows Status Information via API Calls

	Article: Q161151
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic for Windows sample program below demonstrates how you can
	obtain system status information similar to the information displayed in the
	Windows Program Manager About box. The sample program displays the following
	information using the Windows API functions indicated:
	
	- The Windows version number with the GetVersion function.
	
	- The CPU processor type.
	
	- Memory information for total physical memory, available physical memory,
	  total virtual memory, and available virtual memory.
	
	MORE INFORMATION
	================
	
	Steps to Create Example Program
	-------------------------------
	
	1. Start Visual Basic 5.0 and select Standard EXE. If Visual Basic 5.0 is
	  already running, click New Project on the File menu, and select Standard EXE.
	  Form1 is created by default.
	
	2. On the Project menu, click Add Module (press ALT,P,M). Module1 is created by
	  default.
	
	3. Enter the following code into the General Declarations section of a code
	  module:
	
	        Type SYSTEM_INFO
	              dwOemID As Long
	              dwPageSize As Long
	              lpMinimumApplicationAddress As Long
	              lpMaximumApplicationAddress As Long
	              dwActiveProcessorMask As Long
	              dwNumberOrfProcessors As Long
	              dwProcessorType As Long
	              dwAllocationGranularity As Long
	              dwReserved As Long
	        End Type
	        Type OSVERSIONINFO
	              dwOSVersionInfoSize As Long
	              dwMajorVersion As Long
	              dwMinorVersion As Long
	              dwBuildNumber As Long
	              dwPlatformId As Long
	              szCSDVersion As String * 128
	        End Type
	        Type MEMORYSTATUS
	              dwLength As Long
	              dwMemoryLoad As Long
	              dwTotalPhys As Long
	              dwAvailPhys As Long
	              dwTotalPageFile As Long
	              dwAvailPageFile As Long
	              dwTotalVirtual As Long
	              dwAvailVirtual As Long
	        End Type
	
	        Declare Function GetVersionEx Lib "kernel32" Alias "GetVersionExA" _
	           (LpVersionInformation As OSVERSIONINFO) As Long
	        Declare Sub GlobalMemoryStatus Lib "kernel32" (lpBuffer As _
	           MEMORYSTATUS)
	        Declare Sub GetSystemInfo Lib "kernel32" (lpSystemInfo As _
	           SYSTEM_INFO)
	
	        Public Const PROCESSOR_INTEL_386 = 386
	        Public Const PROCESSOR_INTEL_486 = 486
	        Public Const PROCESSOR_INTEL_PENTIUM = 586
	        Public Const PROCESSOR_MIPS_R4000 = 4000
	        Public Const PROCESSOR_ALPHA_21064 = 21064
	
	4. Enter the following code into the Form_Load procedure of Form1:
	
	        Private Sub Form_Load()
	           Dim msg As String         ' Status information.
	
	           Show
	           MousePointer = 11   ' Hourglass.
	
	               ' Get operating system and version.
	               Dim verinfo As OSVERSIONINFO
	               Dim build As String, ver_major As String, ver_minor As String
	               Dim ret As Long
	               verinfo.dwOSVersionInfoSize = Len(verinfo)
	               ret = GetVersionEx(verinfo)
	               If ret = 0 Then
	                   MsgBox "Error Getting Version Information"
	                   End
	               End If
	               Select Case verinfo.dwPlatformId
	                   Case 0
	                       msg = msg & "Windows 32s "
	                   Case 1
	                       msg = msg & "Windows 95/98 "
	                   Case 2
	                       msg = msg & "Windows NT "
	               End Select
	
	               ver_major = verinfo.dwMajorVersion
	               ver_minor = verinfo.dwMinorVersion
	               build = verinfo.dwBuildNumber
	               msg = msg & ver_major & "." & ver_minor
	               msg = msg & " (Build " & build & ")" & vbCrLf & vbCrLf
	
	               ' Get CPU type and operating mode.
	               Dim sysinfo As SYSTEM_INFO
	               GetSystemInfo sysinfo
	               msg = msg & "CPU: "
	               Select Case sysinfo.dwProcessorType
	                   Case PROCESSOR_INTEL_386
	                       msg = msg & "Intel 386" & vbCrLf
	                   Case PROCESSOR_INTEL_486
	                       msg = msg & "Intel 486" & vbCrLf
	                   Case PROCESSOR_INTEL_PENTIUM
	                       msg = msg & "Intel Pentium" & vbCrLf
	                   Case PROCESSOR_MIPS_R4000
	                       msg = msg & "MIPS R4000" & vbCrLf
	                   Case PROCESSOR_ALPHA_21064
	                       msg = msg & "DEC Alpha 21064" & vbCrLf
	                   Case Else
	                       msg = msg & "(unknown)" & vbCrLf
	
	               End Select
	               msg = msg & vbCrLf
	               ' Get free memory.
	               Dim memsts As MEMORYSTATUS
	               Dim memory As Long
	               GlobalMemoryStatus memsts
	               memory = memsts.dwTotalPhys
	               msg = msg & "Total Physical Memory: "
	               msg = msg & Format$(memory \ 1024, "###,###,###") & "K" _
	                         & vbCrLf
	               memory& = memsts.dwAvailPhys
	               msg = msg & "Available Physical Memory: "
	               msg = msg & Format$(memory \ 1024, "###,###,###") & "K" _
	                         & vbCrLf
	               memory& = memsts.dwTotalVirtual
	               msg = msg & "Total Virtual Memory: "
	               msg = msg & Format$(memory \ 1024, "###,###,###") & "K" _
	                         & vbCrLf
	               memory& = memsts.dwAvailVirtual
	               msg = msg & "Available Virtual Memory: "
	               msg = msg & Format$(memory \ 1024, "###,###,###") & "K" _
	                         & vbCrLf & vbCrLf
	
	           Print msg
	           MousePointer = 0
	        End Sub
	
	5. On the Run menu, click Start, or press the F5 key to start the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA500Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
