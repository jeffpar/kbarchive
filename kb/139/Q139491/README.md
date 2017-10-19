---
layout: page
title: "Q139491: How to Use Functions in VERSION.DLL -- A 32-bit Sample App"
permalink: /kb/139/Q139491/
---

## Q139491: How to Use Functions in VERSION.DLL -- A 32-bit Sample App

	Article: Q139491
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbcode kbWndw
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains code and instructions that demonstrate how to create a
	sample application that uses some of the functions in VERSION.DLL to retrieve
	file information embedded into a file with the resource compiler (RC.EXE).
	
	NOTE: This code only works in Visual Basic version 4.0, 32-bit for Windows. To
	obtain a Visual Basic version 4.0 16-bit for Windows, example of this code,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q112731 : How to Use Functions in VER.DLL -- a 16-bit Sample Application
	
	This Visual Basic application was modeled after the Verstamp sample program
	included in the Microsoft Windows Software Development Kit (SDK).
	
	Additional information can be found in the following documents:
	
	- Microsoft Win32 SDK
	
	- Win32 API Declarations for Visual Basic (WIN32API.TXT) located in the WINAPI
	  subdirectory of Visual Basic 4.0
	
	MORE INFORMATION
	================
	
	Instead of offering this article in a number of steps, we have modified our
	usual format to make it easier for you to create and use this Visual Basic
	application. Therefore, the three files you need (VERINFO.BAS, VERINFO1.FRM,
	VERINFO2.FRM) are listed below so you can easily copy them into a text editor
	and save them as separate files. Instructions on how to use the files are
	embedded in the files as comments.
	
	VERINFO.BAS
	-----------
	
	  ' Place the following code in a single text file called VERINFO.BAS:
	  '
	  ' The Global constants below are defined in the VER.H header file, also
	  ' included in Microsoft C/C++ 7.0, and the Windows SDK.
	  '
	  ' **** Global variables used in both forms ****
	  Public Filename As String
	  Public Directory As String
	  Public FullFileName As String
	
	  Public StrucVer As String
	  Public FileVer As String
	  Public ProdVer As String
	  Public FileFlags As String
	  Public FileOS As String
	  Public FileType As String
	  Public FileSubType As String
	
	  Type VS_FIXEDFILEINFO
	     dwSignature As Long
	     dwStrucVersionl As Integer     '  e.g. = &h0000 = 0
	     dwStrucVersionh As Integer     '  e.g. = &h0042 = .42
	     dwFileVersionMSl As Integer    '  e.g. = &h0003 = 3
	     dwFileVersionMSh As Integer    '  e.g. = &h0075 = .75
	     dwFileVersionLSl As Integer    '  e.g. = &h0000 = 0
	     dwFileVersionLSh As Integer    '  e.g. = &h0031 = .31
	     dwProductVersionMSl As Integer '  e.g. = &h0003 = 3
	     dwProductVersionMSh As Integer '  e.g. = &h0010 = .1
	     dwProductVersionLSl As Integer '  e.g. = &h0000 = 0
	     dwProductVersionLSh As Integer '  e.g. = &h0031 = .31
	     dwFileFlagsMask As Long        '  = &h3F for version "0.42"
	     dwFileFlags As Long            '  e.g. VFF_DEBUG Or VFF_PRERELEASE
	     dwFileOS As Long               '  e.g. VOS_DOS_WINDOWS16
	     dwFileType As Long             '  e.g. VFT_DRIVER
	     dwFileSubtype As Long          '  e.g. VFT2_DRV_KEYBOARD
	     dwFileDateMS As Long           '  e.g. 0
	     dwFileDateLS As Long           '  e.g. 0
	  End Type
	
	  Declare Function GetFileVersionInfo Lib "Version.dll" Alias _
	     "GetFileVersionInfoA" (ByVal lptstrFilename As String, ByVal _
	     dwhandle As Long, ByVal dwlen As Long, lpData As Any) As Long
	  Declare Function GetFileVersionInfoSize Lib "Version.dll" Alias _
	     "GetFileVersionInfoSizeA" (ByVal lptstrFilename As String, _
	     lpdwHandle As Long) As Long
	  Declare Function VerQueryValue Lib "Version.dll" Alias _
	     "VerQueryValueA" (pBlock As Any, ByVal lpSubBlock As String, _
	     lplpBuffer As Any, puLen As Long) As Long
	  Declare Sub MoveMemory Lib "kernel32" Alias "RtlMoveMemory" _
	     (dest As Any, ByVal Source As Long, ByVal length As Long)
	  Declare Function GetSystemDirectory Lib "kernel32" Alias _
	     "GetSystemDirectoryA" (ByVal Path As String, ByVal cbBytes As Long) As
	  Long
	
	  ' ===== From Win32 Ver.h =================
	  ' ----- VS_VERSION.dwFileFlags -----
	  Public Const VS_FFI_SIGNATURE = &HFEEF04BD
	  Public Const VS_FFI_STRUCVERSION = &H10000
	  Public Const VS_FFI_FILEFLAGSMASK = &H3F&
	
	  ' ----- VS_VERSION.dwFileFlags -----
	  Public Const VS_FF_DEBUG = &H1
	  Public Const VS_FF_PRERELEASE = &H2
	  Public Const VS_FF_PATCHED = &H4
	  Public Const VS_FF_PRIVATEBUILD = &H8
	  Public Const VS_FF_INFOINFERRED = &H10
	  Public Const VS_FF_SPECIALBUILD = &H20
	
	  ' ----- VS_VERSION.dwFileOS -----
	  Public Const VOS_UNKNOWN = &H0
	  Public Const VOS_DOS = &H10000
	  Public Const VOS_OS216 = &H20000
	  Public Const VOS_OS232 = &H30000
	  Public Const VOS_NT = &H40000
	
	  Public Const VOS__BASE = &H0
	  Public Const VOS__WINDOWS16 = &H1
	  Public Const VOS__PM16 = &H2
	  Public Const VOS__PM32 = &H3
	  Public Const VOS__WINDOWS32 = &H4
	
	  Public Const VOS_DOS_WINDOWS16 = &H10001
	  Public Const VOS_DOS_WINDOWS32 = &H10004
	  Public Const VOS_OS216_PM16 = &H20002
	  Public Const VOS_OS232_PM32 = &H30003
	  Public Const VOS_NT_WINDOWS32 = &H40004
	
	  ' ----- VS_VERSION.dwFileType -----
	  Public Const VFT_UNKNOWN = &H0
	  Public Const VFT_APP = &H1
	  Public Const VFT_DLL = &H2
	  Public Const VFT_DRV = &H3
	  Public Const VFT_FONT = &H4
	  Public Const VFT_VXD = &H5
	  Public Const VFT_STATIC_LIB = &H7
	
	  ' ----- VS_VERSION.dwFileSubtype for VFT_WINDOWS_DRV -----
	  Public Const VFT2_UNKNOWN = &H0
	  Public Const VFT2_DRV_PRINTER = &H1
	  Public Const VFT2_DRV_KEYBOARD = &H2
	  Public Const VFT2_DRV_LANGUAGE = &H3
	  Public Const VFT2_DRV_DISPLAY = &H4
	  Public Const VFT2_DRV_MOUSE = &H5
	  Public Const VFT2_DRV_NETWORK = &H6
	  Public Const VFT2_DRV_SYSTEM = &H7
	  Public Const VFT2_DRV_INSTALLABLE = &H8
	  Public Const VFT2_DRV_SOUND = &H9
	  Public Const VFT2_DRV_COMM = &HA
	
	VERINFO1.FRM
	------------
	
	  ' The following is a text dump of the form VERINFO1. It includes the form
	  ' and control description as well as necessary Function and Sub procedures.
	  ' Save the code in a single TEXT file called VERINFO1.FRM and you can then
	  ' load it as a form in Visual Basic.
	  '
	  VERSION 4.00
	  Begin VB.Form Form1
	     Appearance      =   0  'Flat
	     BackColor       =   &H80000005&
	     BorderStyle     =   1  'Fixed Single
	     Caption         =   "VerInfo Demo"
	     ClientHeight    =   4290
	     ClientLeft      =   2340
	     ClientTop       =   2160
	     ClientWidth     =   3855
	     BeginProperty Font
	        name            =   "MS Sans Serif"
	        charset         =   0
	        weight          =   700
	        size            =   8.25
	        underline       =   0   'False
	        italic          =   0   'False
	        strikethrough   =   0   'False
	     EndProperty
	     ForeColor       =   &H80000008&
	     Height          =   4755
	     Left            =   2250
	     LinkMode        =   1  'Source
	     LinkTopic       =   "Form1"
	     ScaleHeight     =   17.875
	     ScaleMode       =   4  'Character
	     ScaleWidth      =   32.125
	     Top             =   1785
	     Width           =   4035
	     Begin VB.DriveListBox Drive1
	        Appearance      =   0  'Flat
	        Height          =   315
	        Left            =   1830
	        TabIndex        =   7
	        Top             =   3795
	        Width           =   1905
	     End
	     Begin VB.DirListBox Dir1
	        Appearance      =   0  'Flat
	        Height          =   2055
	        Left            =   1830
	        TabIndex        =   5
	        Top             =   1305
	        Width           =   1890
	     End
	     Begin VB.FileListBox File1
	        Appearance      =   0  'Flat
	        Height          =   3150
	        Left            =   120
	        TabIndex        =   3
	        Top             =   984
	        Width           =   1575
	     End
	     Begin VB.TextBox Text1
	        Appearance      =   0  'Flat
	        Height          =   288
	        Left            =   1092
	        TabIndex        =   1
	        Text            =   "*.*"
	        Top             =   204
	        Width           =   2544
	     End
	     Begin VB.Label Label1
	        Appearance      =   0  'Flat
	        BackColor       =   &H80000005&
	        Caption         =   "Dri&ves:"
	        ForeColor       =   &H80000008&
	        Height          =   210
	        Index           =   4
	        Left            =   1830
	        TabIndex        =   6
	        Top             =   3480
	        Width           =   660
	     End
	     Begin VB.Label Label1
	        Appearance      =   0  'Flat
	        BackColor       =   &H80000005&
	        Caption         =   "&Directories:"
	        ForeColor       =   &H80000008&
	        Height          =   195
	        Index           =   3
	        Left            =   1830
	        TabIndex        =   4
	        Top             =   990
	        Width           =   1230
	     End
	     Begin VB.Label Label1
	        Appearance      =   0  'Flat
	        BackColor       =   &H80000005&
	        Caption         =   "c:\"
	        ForeColor       =   &H80000008&
	        Height          =   204
	        Index           =   2
	        Left            =   1830
	        TabIndex        =   8
	        Top             =   648
	        Width           =   1884
	     End
	     Begin VB.Label Label1
	        Appearance      =   0  'Flat
	        BackColor       =   &H80000005&
	        Caption         =   "&Files:"
	        ForeColor       =   &H80000008&
	        Height          =   204
	        Index           =   0
	        Left            =   120
	        TabIndex        =   2
	        Top             =   648
	        Width           =   612
	     End
	     Begin VB.Label Label1
	        Appearance      =   0  'Flat
	        BackColor       =   &H80000005&
	        Caption         =   "File&Name:"
	        ForeColor       =   &H80000008&
	        Height          =   204
	        Index           =   1
	        Left            =   120
	        TabIndex        =   0
	        Top             =   252
	        Width           =   936
	     End
	  End
	  Attribute VB_Name = "Form1"
	  Attribute VB_Creatable = False
	  Attribute VB_Exposed = False
	  Private Sub Dir1_Change()
	     File1.Path = Dir1.Path
	     Label1(2).Caption = File1.Path
	  End Sub
	
	  Private Sub DisplayVerInfo()
	     '*** Get Version Info ****
	
	     Filename = File1.List(File1.ListIndex)
	     Directory = Label1(2).Caption
	     FullFileName = Label1(2).Caption + "\" + Filename$
	
	     Dim rc                As Long
	     Dim lDummy            As Long
	     Dim sBuffer()         As Byte
	     Dim lBufferLen        As Long
	     Dim lVerPointer       As Long
	     Dim udtVerBuffer      As VS_FIXEDFILEINFO
	     Dim lVerbufferLen     As Long
	
	     '*** Get size ****
	     lBufferLen = GetFileVersionInfoSize(FullFileName, lDummy)
	     If lBufferLen < 1 Then
	        MsgBox "No Version Info available!"
	        Exit Sub
	     End If
	
	     '**** Store info to udtVerBuffer struct ****
	     ReDim sBuffer(lBufferLen)
	     rc = GetFileVersionInfo(FullFileName, 0&, lBufferLen, sBuffer(0))
	     rc = VerQueryValue(sBuffer(0), "\", lVerPointer, lVerbufferLen)
	     MoveMemory udtVerBuffer, lVerPointer, Len(udtVerBuffer)
	
	     '**** Determine Structure Version number - NOT USED ****
	     StrucVer = Format$(udtVerBuffer.dwStrucVersionh) & "." & _
	        Format$(udtVerBuffer.dwStrucVersionl)
	
	     '**** Determine File Version number ****
	     FileVer = Format$(udtVerBuffer.dwFileVersionMSh) & "." & _
	        Format$(udtVerBuffer.dwFileVersionMSl) & "." & _
	        Format$(udtVerBuffer.dwFileVersionLSh) & "." & _
	        Format$(udtVerBuffer.dwFileVersionLSl)
	
	     '**** Determine Product Version number ****
	     ProdVer = Format$(udtVerBuffer.dwProductVersionMSh) & "." & _
	        Format$(udtVerBuffer.dwProductVersionMSl) & "." & _
	        Format$(udtVerBuffer.dwProductVersionLSh) & "." & _
	        Format$(udtVerBuffer.dwProductVersionLSl)
	
	     '**** Determine Boolean attributes of File ****
	     FileFlags = ""
	     If udtVerBuffer.dwFileFlags And VS_FF_DEBUG _
	        Then FileFlags = "Debug "
	     If udtVerBuffer.dwFileFlags And VS_FF_PRERELEASE _
	        Then FileFlags = FileFlags & "PreRel "
	     If udtVerBuffer.dwFileFlags And VS_FF_PATCHED _
	        Then FileFlags = FileFlags & "Patched "
	     If udtVerBuffer.dwFileFlags And VS_FF_PRIVATEBUILD _
	        Then FileFlags = FileFlags & "Private "
	     If udtVerBuffer.dwFileFlags And VS_FF_INFOINFERRED _
	        Then FileFlags = FileFlags & "Info "
	     If udtVerBuffer.dwFileFlags And VS_FF_SPECIALBUILD _
	        Then FileFlags = FileFlags & "Special "
	     If udtVerBuffer.dwFileFlags And VFT2_UNKNOWN _
	        Then FileFlags = FileFlags + "Unknown "
	
	     '**** Determine OS for which file was designed ****
	     Select Case udtVerBuffer.dwFileOS
	        Case VOS_DOS_WINDOWS16
	          FileOS = "DOS-Win16"
	        Case VOS_DOS_WINDOWS32
	          FileOS = "DOS-Win32"
	        Case VOS_OS216_PM16
	          FileOS = "OS/2-16 PM-16"
	        Case VOS_OS232_PM32
	          FileOS = "OS/2-16 PM-32"
	        Case VOS_NT_WINDOWS32
	          FileOS = "NT-Win32"
	        Case other
	          FileOS = "Unknown"
	     End Select
	     Select Case udtVerBuffer.dwFileType
	        Case VFT_APP
	           FileType = "App"
	        Case VFT_DLL
	           FileType = "DLL"
	        Case VFT_DRV
	           FileType = "Driver"
	           Select Case udtVerBuffer.dwFileSubtype
	              Case VFT2_DRV_PRINTER
	                 FileSubType = "Printer drv"
	              Case VFT2_DRV_KEYBOARD
	                 FileSubType = "Keyboard drv"
	              Case VFT2_DRV_LANGUAGE
	                 FileSubType = "Language drv"
	              Case VFT2_DRV_DISPLAY
	                 FileSubType = "Display drv"
	              Case VFT2_DRV_MOUSE
	                 FileSubType = "Mouse drv"
	              Case VFT2_DRV_NETWORK
	                 FileSubType = "Network drv"
	              Case VFT2_DRV_SYSTEM
	                 FileSubType = "System drv"
	              Case VFT2_DRV_INSTALLABLE
	                 FileSubType = "Installable"
	              Case VFT2_DRV_SOUND
	                 FileSubType = "Sound drv"
	              Case VFT2_DRV_COMM
	                 FileSubType = "Comm drv"
	              Case VFT2_UNKNOWN
	                 FileSubType = "Unknown"
	           End Select
	        Case VFT_FONT
	           FileType = "Font"
	           Select Case udtVerBuffer.dwFileSubtype
	              Case VFT_FONT_RASTER
	                 FileSubType = "Raster Font"
	              Case VFT_FONT_VECTOR
	                 FileSubType = "Vector Font"
	              Case VFT_FONT_TRUETYPE
	                 FileSubType = "TrueType Font"
	           End Select
	        Case VFT_VXD
	           FileType = "VxD"
	        Case VFT_STATIC_LIB
	           FileType = "Lib"
	        Case Else
	           FileType = "Unknown"
	     End Select
	     Form2.Show 1
	  End Sub
	
	  Private Sub Drive1_Change()
	     Dir1.Path = Drive1.Drive
	     File1.Path = Dir1.Path
	     Label1(2).Caption = File1.Path
	  End Sub
	
	  Private Sub File1_Click()
	     Text1.Text = File1.List(File1.ListIndex)
	  End Sub
	
	  Private Sub File1_DblClick()
	     DisplayVerInfo
	  End Sub
	
	  Private Sub File1_PathChange()
	     Text1.Text = "*.*"
	     File1.Pattern = "*.*"
	  End Sub
	
	  Private Sub Form_Load()
	     Dim Buffer As String
	     Dim rc As Long
	
	     ' **** Set Default Dir to Windows System Subdirectory ****
	     Buffer = Space$(256)
	     rc = GetSystemDirectory(Buffer, Len(Buffer))
	     Buffer = LCase$(Mid$(Buffer, 1, InStr(Buffer, Chr(0)) - 1))
	     Dir1.Path = Buffer
	     File1.Path = Buffer
	     Drive1.Drive = Left$(Buffer, 1)
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     End
	  End Sub
	
	  Private Sub Text1_KeyPress(KeyAscii As Integer)
	     If KeyAscii = 13 Then
	        File1.Pattern = Text1.Text
	        KeyAscii = 0
	        If File1.ListCount = 1 Then DisplayVerInfo
	        If File1.ListCount = 0 Then
	           MsgBox "Invalid Filename"
	           File1.Pattern = "*.*"
	           Text1.Text = "*.*"
	        End If
	        File1.SetFocus
	     End If
	  End Sub
	
	VERINFO2.FRM
	------------
	
	  ' The following is a text dump of the form VERINFO2. It includes the form
	  ' and control description as well as necessary Function and Sub procedures.
	  ' Save the code in a single text file called VERINFO2.FRM and you can then
	  ' load it as a form in Visual Basic.
	  '
	  VERSION 4.00
	  Begin VB.Form Form2
	     Appearance      =   0  'Flat
	     BackColor       =   &H80000005&
	     BorderStyle     =   1  'Fixed Single
	     Caption         =   "File Version Info"
	     ClientHeight    =   3345
	     ClientLeft      =   6630
	     ClientTop       =   2175
	     ClientWidth     =   4500
	     ForeColor       =   &H80000008&
	     Height          =   3810
	     Left            =   6540
	     LinkMode        =   1  'Source
	     LinkTopic       =   "Form3"
	     MaxButton       =   0   'False
	     MinButton       =   0   'False
	     ScaleHeight     =   13.937
	     ScaleMode       =   4  'Character
	     ScaleWidth      =   37.5
	     Top             =   1800
	     Width           =   4680
	     Begin VB.CommandButton Command1
	        Appearance      =   0  'Flat
	        BackColor       =   &H80000005&
	        Caption         =   "OK"
	        BeginProperty Font
	           name            =   "MS Sans Serif"
	           charset         =   0
	           weight          =   700
	           size            =   8.25
	           underline       =   0   'False
	           italic          =   0   'False
	           strikethrough   =   0   'False
	        EndProperty
	        Height          =   372
	        Left            =   1680
	        TabIndex        =   0
	        Top             =   2880
	        Width           =   1452
	     End
	  End
	  Attribute VB_Name = "Form2"
	  Attribute VB_Creatable = False
	  Attribute VB_Exposed = False
	  Private Sub Command1_Click()
	     Form2.Hide
	  End Sub
	
	  Private Sub Command1_GotFocus()
	    Form_Paint
	  End Sub
	
	  Private Sub Form_Paint()
	     Form2.CurrentX = 2
	     Form2.CurrentY = 1
	     Form2.Print "FileName:"
	     Form2.CurrentX = 2
	     Form2.Print "Directory:"
	     Form2.CurrentX = 2
	     Form2.Print "File Version:"
	     Form2.CurrentX = 2
	     Form2.Print "Product Version:"
	     Form2.CurrentX = 2
	     Form2.Print "File Flags:"
	     Form2.CurrentX = 2
	     Form2.Print "File OS:"
	     Form2.CurrentX = 2
	     Form2.Print "File Type:"
	     Form2.CurrentX = 2
	     Form2.Print "File Sub-type:"
	
	     Form2.CurrentX = 18
	     Form2.CurrentY = 1
	     Form2.Print Filename
	     Form2.CurrentX = 18
	     Form2.Print Directory
	     Form2.CurrentX = 18
	     Form2.Print FileVer
	     Form2.CurrentX = 18
	     Form2.Print ProdVer
	     Form2.CurrentX = 18
	     Form2.Print FileFlags
	     Form2.CurrentX = 18
	     Form2.Print FileOS
	     Form2.CurrentX = 18
	     Form2.Print FileType
	     Form2.CurrentX = 18
	     Form2.Print FileSubType
	  End Sub
	
	How to Create and Run the Program
	---------------------------------
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. From the File menu, choose Remove File to remove Form1.
	
	3. From the File menu, choose Add File to add VERINFO.BAS.
	
	4. Repeat step 3 to add VERINFO1.FRM and VERINFO2.FRM to the project.
	
	5. From the Options menu, choose Project and set Start Up Form to Form1.
	
	6. Run the application.
	
	Additional query words: 4.00 codesmpl vb4win vb432
	
	======================================================================
	Keywords          : kbcode kbWndw 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	
	=============================================================================
	
