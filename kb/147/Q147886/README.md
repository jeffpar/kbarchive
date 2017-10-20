---
layout: page
title: "Q147886: HOWTO: How VB Can Get Windows Status Information via API Calls"
permalink: /kb/147/Q147886/
---

## Q147886: HOWTO: How VB Can Get Windows Status Information via API Calls

{% raw %}

	Article: Q147886
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 18-FEB-2002
	
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
	
	The Visual Basic for Windows sample program below demonstrates how you can
	obtain system status information similar to the information displayed in the
	Windows Program Manager About box. The sample program displays the following
	information using the Windows API functions indicated:
	
	- The Windows version number with the GetVersion function.
	
	- The CPU processor type.
	
	- Whether Windows is running in enhanced mode or standard mode on a 16-bit
	  operating system. This does not apply to Microsoft Windows 95 or Microsoft
	  Windows NT.
	
	- The amount of free memory.
	
	- The percentage of free system resources with SystemHeapInfo on a 16-bit
	  operating system. This does not apply to Microsoft Windows 95 or Microsoft
	  Windows NT.
	
	NOTE: The SystemHeapInfo API function is new to Microsoft Windows version
	     3.1 and is not available in Microsoft Windows, version 3.0. All other
	     API functions listed above are available in both Windows versions 3.0
	     or 3.1.
	
	MORE INFORMATION
	================
	
	Steps to Create Example Program
	-------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a module to the project.
	
	3. Add the following code to the General Declarations section of Module1:
	
	     #If Win32 Then
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
	     #Else
	        ' Constants for GetWinFlags.
	        Global Const WF_CPU286 = &H2
	        Global Const WF_CPU386 = &H4
	        Global Const WF_CPU486 = &H8
	        Global Const WF_80x87 = &H400
	        Global Const WF_STANDARD = &H10
	        Global Const WF_ENHANCED = &H20
	        Global Const WF_WINNT = &H4000
	
	        ' Type for SystemHeapInfo.
	        Type SYSHEAPINFO
	           dwSize As Long
	           wUserFreePercent As Integer
	           wGDIFreePercent As Integer
	           hUserSegment As Integer
	           hGDISegment As Integer
	        End Type
	
	        Declare Function GetVersion Lib "kernel" () As Long
	        Declare Function GetWinFlags Lib "kernel" () As Long
	        'Enter each of the following Declare statements as one, single line:
	        Declare Function GetFreeSpace Lib "kernel" (ByVal wFlags As Integer)_
	           As Long
	        Declare Function GlobalCompact Lib "kernel" _
	           (ByVal dwMinFree As Long) As Long
	        Declare Function SystemHeapInfo Lib "toolhelp.dll" _
	           (shi As SYSHEAPINFO) As Integer
	     #End If
	
	4. Enter the following code into the Form_Load procedure of Form1:
	
	     Private Sub Form_Load()
	        Dim msg As String         ' Status information.
	        Dim nl As String          ' New-line.
	        nl = Chr$(13) + Chr$(10)  ' New-line.
	
	        Show
	        MousePointer = 11   ' Hourglass.
	
	        #If Win32 Then
	            ' Get operating system and version.
	            Dim verinfo As OSVERSIONINFO
	            verinfo.dwOSVersionInfoSize = Len(verinfo)
	            ret% = GetVersionEx(verinfo)
	            If ret% = 0 Then
	                MsgBox "Error Getting Version Information"
	                End
	            End If
	            Select Case verinfo.dwPlatformId
	                Case 0
	                    msg = msg + "Windows 32s "
	                Case 1
	                    msg = msg + "Windows 95 "
	                Case 2
	                    msg = msg + "Windows NT "
	            End Select
	
	            ver_major$ = verinfo.dwMajorVersion
	            ver_minor$ = verinfo.dwMinorVersion
	            build$ = verinfo.dwBuildNumber
	            msg = msg + ver_major$ + "." + ver_minor$
	            msg = msg + " (Build " + build$ + ")" + nl + nl
	
	            ' Get CPU type and operating mode.
	            Dim sysinfo As SYSTEM_INFO
	            GetSystemInfo sysinfo
	            msg = msg + "CPU: "
	            Select Case sysinfo.dwProcessorType
	                Case PROCESSOR_INTEL_386
	                    msg = msg + "Intel 386" + nl
	                Case PROCESSOR_INTEL_486
	                    msg = msg + "Intel 486" + nl
	                Case PROCESSOR_INTEL_PENTIUM
	                    msg = msg + "Intel Pentium" + nl
	                Case PROCESSOR_MIPS_R4000
	                    msg = msg + "MIPS R4000" + nl
	                Case PROCESSOR_ALPHA_21064
	                    msg = msg + "DEC Alpha 21064" + nl
	                Case Else
	                    msg = msg + "(unknown)" + nl
	
	            End Select
	            msg = msg + nl
	            ' Get free memory.
	            Dim memsts As MEMORYSTATUS
	            Dim memory&
	            GlobalMemoryStatus memsts
	            memory& = memsts.dwTotalPhys
	            msg = msg + "Total Physical Memory: "
	            msg = msg + Format$(memory& \ 1024, "###,###,###") + "K" + nl
	            memory& = memsts.dwAvailPhys
	            msg = msg + "Available Physical Memory: "
	            msg = msg + Format$(memory& \ 1024, "###,###,###") + "K" + nl
	            memory& = memsts.dwTotalVirtual
	            msg = msg + "Total Virtual Memory: "
	            msg = msg + Format$(memory& \ 1024, "###,###,###") + "K" + nl
	            memory& = memsts.dwAvailVirtual
	            msg = msg + "Available Virtual Memory: "
	            msg = msg + Format$(memory& \ 1024, "###,###,###") + "K" + nl _
	                 + nl
	
	            ' Get free system resources.
	            ' Not applicable to 32-bit operating system (Windows NT).
	        #Else
	            ' Get operating system and version.
	            ver& = GetVersion()
	            status& = GetWinFlags()
	
	            If status& And WF_WINNT Then
	                msg = msg + "Microsoft Windows NT "
	            Else
	                msg = msg + "Microsoft Windows "
	            End If
	            ver_major$ = Format$(ver& And &HFF)
	            ver_minor$ = Format$((ver& And &HFF00) \ &H100, "00")
	            msg = msg + ver_major$ + "." + ver_minor$ + nl
	
	            ' Get CPU type and operating mode.
	            msg = msg + "CPU: "
	            If status& And WF_CPU286 Then msg = msg + "80286"
	            If status& And WF_CPU386 Then msg = msg + "80386"
	            If status& And WF_CPU486 Then msg = msg + "80486"
	            If status& And WF_80x87 Then msg = msg + " with 80x87"
	            msg = msg + nl
	            msg = msg + "Mode: "
	            If status& And WF_STANDARD Then msg = msg + "Standard" + nl
	            If status& And WF_ENHANCED Then msg = msg + "Enhanced" + nl
	
	            ' Get free memory.
	            memory& = GetFreeSpace(0)
	            msg = msg + "Memory free: "
	            msg = msg + Format$(memory& \ 1024, "###,###,###") + "K" + nl
	            memory& = GlobalCompact(&HFFFFFFFF)
	            msg = msg + "Largest free block: "
	            msg = msg + Format$(memory& \ 1024, "###,###,###") + "K" + nl
	
	            ' Get free system resources.
	            ' The SystemHeapInfo API function became available in Windows
	            '  version 3.1.
	            msg = msg + "System resources: "
	            If ver& >= &H310 Then
	                Dim shi As SYSHEAPINFO
	                shi.dwSize = Len(shi)
	                If SystemHeapInfo(shi) Then
	                    If shi.wUserFreePercent < shi.wGDIFreePercent Then
	                        msg = msg + Format$(shi.wUserFreePercent) + "%"
	                    Else
	                        msg = msg + Format$(shi.wGDIFreePercent) + "%"
	                    End If
	                End If
	            Else
	                msg = msg + "n/a"
	            End If
	        #End If
	        MsgBox msg, 0, "About " + Caption
	        MousePointer = 0
	     End Sub
	
	5. Press the F5 key to run the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
