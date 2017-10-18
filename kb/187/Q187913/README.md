---
layout: page
title: "Q187913: HOWTO: List Running Processes"
permalink: kb/187/Q187913/
---

## Q187913: HOWTO: List Running Processes

	Article: Q187913
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbPSAPI
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article illustrates how you can list the processes that are currently
	running on a computer. The approach is different for Windows 95/98 and Windows
	NT; this article illustrates both solutions.
	
	MORE INFORMATION
	================
	
	This situation requires that you first test to see which version of Windows is
	in use. Once that determination is made, the correct code can then be run to
	examine and list the current processes. On Windows NT, requests for information
	on some system processes may be denied for security or other related reasons.
	The approach taken in this article will ignore any process that cannot be
	accessed.
	
	PSAPI.DLL is the library used to gather process information on Windows NT and
	must reside in the \SYSTEM32 directory. There are two versions of this file,
	3.51 and 4.0. Either version will work for this example, but using the most
	recent version is recommended. If you have installed the Windows NT 4.0 Resource
	Kit or the Windows NT 4.0 SDK, this file will be present on your computer. The
	4.0 version of the file is available on the Visual Studio Visual C++ CD-ROM in
	the following directory:
	
	  \DEVSTUDIO\VC\BIN\PSAPI.DLL.
	
	The 3.51 version of the file is available on the Visual Studio Visual Basic
	CD-ROM in the directory:
	
	  \TOOLS\UNSUPPRT\WSVIEW\WINNT\PSAPI.DLL
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard Exe project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton to Form1.
	
	3. Add a ListBox to Form1.
	
	4. Copy the following code to Form1:
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	        List1.Clear
	        Select Case getVersion()
	
	        Case 1 'Windows 95/98
	
	           Dim f As Long, sname As String
	           Dim hSnap As Long, proc As PROCESSENTRY32
	           hSnap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0)
	           If hSnap = hNull Then Exit Sub
	           proc.dwSize = Len(proc)
	           ' Iterate through the processes
	           f = Process32First(hSnap, proc)
	           Do While f
	             sname = StrZToStr(proc.szExeFile)
	             List1.AddItem sname
	             f = Process32Next(hSnap, proc)
	           Loop
	
	        Case 2 'Windows NT
	
	           Dim cb As Long
	           Dim cbNeeded As Long
	           Dim NumElements As Long
	           Dim ProcessIDs() As Long
	           Dim cbNeeded2 As Long
	           Dim NumElements2 As Long
	           Dim Modules(1 To 200) As Long
	           Dim lRet As Long
	           Dim ModuleName As String
	           Dim nSize As Long
	           Dim hProcess As Long
	           Dim i As Long
	           'Get the array containing the process id's for each process object
	           cb = 8
	           cbNeeded = 96
	           Do While cb <= cbNeeded
	              cb = cb * 2
	              ReDim ProcessIDs(cb / 4) As Long
	              lRet = EnumProcesses(ProcessIDs(1), cb, cbNeeded)
	           Loop
	           NumElements = cbNeeded / 4
	
	           For i = 1 To NumElements
	              'Get a handle to the Process
	              hProcess = OpenProcess(PROCESS_QUERY_INFORMATION _
	                 Or PROCESS_VM_READ, 0, ProcessIDs(i))
	              'Got a Process handle
	              If hProcess <> 0 Then
	                  'Get an array of the module handles for the specified
	                  'process
	                  lRet = EnumProcessModules(hProcess, Modules(1), 200, _
	                                               cbNeeded2)
	                  'If the Module Array is retrieved, Get the ModuleFileName
	                  If lRet <> 0 Then
	                     ModuleName = Space(MAX_PATH)
	                     nSize = 500
	                     lRet = GetModuleFileNameExA(hProcess, Modules(1), _
	                                     ModuleName, nSize)
	                     List1.AddItem Left(ModuleName, lRet)
	                  End If
	              End If
	            'Close the handle to the process
	           lRet = CloseHandle(hProcess)
	           Next
	
	        End Select
	        End Sub
	
	5. Add a Standard Module to the Project. Module1 is created.
	
	6. Paste the following code into Module1.
	
	        Public Declare Function Process32First Lib "kernel32" ( _
	           ByVal hSnapshot As Long, lppe As PROCESSENTRY32) As Long
	
	        Public Declare Function Process32Next Lib "kernel32" ( _
	           ByVal hSnapshot As Long, lppe As PROCESSENTRY32) As Long
	
	        Public Declare Function CloseHandle Lib "Kernel32.dll" _
	           (ByVal Handle As Long) As Long
	
	        Public Declare Function OpenProcess Lib "Kernel32.dll" _
	          (ByVal dwDesiredAccessas As Long, ByVal bInheritHandle As Long, _
	              ByVal dwProcId As Long) As Long
	
	        Public Declare Function EnumProcesses Lib "psapi.dll" _
	           (ByRef lpidProcess As Long, ByVal cb As Long, _
	              ByRef cbNeeded As Long) As Long
	
	        Public Declare Function GetModuleFileNameExA Lib "psapi.dll" _
	           (ByVal hProcess As Long, ByVal hModule As Long, _
	              ByVal ModuleName As String, ByVal nSize As Long) As Long
	
	        Public Declare Function EnumProcessModules Lib "psapi.dll" _
	           (ByVal hProcess As Long, ByRef lphModule As Long, _
	              ByVal cb As Long, ByRef cbNeeded As Long) As Long
	
	        Public Declare Function CreateToolhelp32Snapshot Lib "kernel32" ( _
	           ByVal dwFlags As Long, ByVal th32ProcessID As Long) As Long
	
	        Public Declare Function GetVersionExA Lib "kernel32" _
	           (lpVersionInformation As OSVERSIONINFO) As Integer
	
	        Public Type PROCESSENTRY32
	           dwSize As Long
	           cntUsage As Long
	           th32ProcessID As Long           ' This process
	           th32DefaultHeapID As Long
	           th32ModuleID As Long            ' Associated exe
	           cntThreads As Long
	           th32ParentProcessID As Long     ' This process's parent process
	           pcPriClassBase As Long          ' Base priority of process threads
	           dwFlags As Long
	           szExeFile As String * 260       ' MAX_PATH
	        End Type
	
	        Public Type OSVERSIONINFO
	           dwOSVersionInfoSize As Long
	           dwMajorVersion As Long
	           dwMinorVersion As Long
	           dwBuildNumber As Long
	           dwPlatformId As Long           '1 = Windows 95.
	                                          '2 = Windows NT
	
	           szCSDVersion As String * 128
	        End Type
	
	        Public Const PROCESS_QUERY_INFORMATION = 1024
	        Public Const PROCESS_VM_READ = 16
	        Public Const MAX_PATH = 260
	        Public Const STANDARD_RIGHTS_REQUIRED = &HF0000
	        Public Const SYNCHRONIZE = &H100000
	        'STANDARD_RIGHTS_REQUIRED Or SYNCHRONIZE Or &HFFF
	        Public Const PROCESS_ALL_ACCESS = &H1F0FFF
	        Public Const TH32CS_SNAPPROCESS = &H2&
	        Public Const hNull = 0
	
	        Function StrZToStr(s As String) As String
	           StrZToStr = Left$(s, Len(s) - 1)
	        End Function
	
	        Public Function getVersion() As Long
	           Dim osinfo As OSVERSIONINFO
	           Dim retvalue As Integer
	           osinfo.dwOSVersionInfoSize = 148
	           osinfo.szCSDVersion = Space$(128)
	           retvalue = GetVersionExA(osinfo)
	           getVersion = osinfo.dwPlatformId
	        End Function
	
	7. Run the project and click the Command button on Form1. You should see a
	  listing of the currently running processes.
	
	8. If you are running Windows 95/98, try running the example project on Windows
	  NT or vice versa. The processes should be listed regardless of operating
	  system version.
	
	REFERENCES
	==========
	
	Portions of the code in this article were adapted from "Hardcore Visual Basic"
	Second Edition by Bruce McKinney - Microsoft Press
	
	For additional information on the GetVersionExA API, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q189249 : HOWTO: Determine Which 32-bit Operating System Is Being Used
	
	For additional information on using PSAPI.DLL, please see the Microsoft Systems
	Journal "Under the Hood" column by Matt Pietrek (August 1996 and November 1996)
	
	Additional query words: kbAPI kbVBp500 kbVBp kbPSAPI kbSDKWin32 kbVBp600 toolhelp
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbPSAPI 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
