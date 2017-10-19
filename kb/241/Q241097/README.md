---
layout: page
title: "Q241097: FIX: TreeView Tooltips Do Not Appear on Windows NT"
permalink: /kb/241/Q241097/
---

## Q241097: FIX: TreeView Tooltips Do Not Appear on Windows NT

	Article: Q241097
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbOSWinNT400 kbTreeView kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Node tooltip (item tip) for the TreeView control included in Comctl32.ocx
	fails to appear when the cursor is over a Node with text obscured by the right
	border of the TreeView's client window. This problem has only been observed on
	Windows NT 4.0 when using Comctl32.dll version 4.x. Comctl32.dll version 5.x
	does not exhibit this behavior under Windows NT 4.0. (Comctl32.ocx is
	dynamically linked to the currently running version of Comctl32.dll). This
	problem also does not occur when running on Windows 95, Windows 98, Windows Me,
	or Windows 2000, nor does it occur using the TreeView control from Mscomctl.ocx.
	
	RESOLUTION
	==========
	
	The tooltip window appears correctly after filling in the TOOLINFO struct of the
	Visual Basic TreeView tooltip window's first and only tool with the
	TTM_ENUMTOOLS message, setting its uFlags member value to &H141, and setting
	the tool's info with the TTM_SETTOOLINFO message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in comctl32.dll version 5.xx
	and later.
	
	MORE INFORMATION
	================
	
	On all service packs of Windows NT 4.0, the TreeView tooltip windows are created
	as Unicode windows, even if the TreeView is an ANSI window. Unicode tooltip
	messages are translated to ANSI, and visa versa. But on Windows 2000, ANSI
	TreeViews are created with ANSI tooltip windows, and Unicode TreeViews are
	created with Unicode tooltip windows.
	
	NOTE: This workaround is for illustration only, without warranty either expressed
	or implied, including, but not limited to, the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Steps to Reproduce Problem:
	
	NOTE: This code only demonstrates the problem using comctl32.dll version 4.x on
	Windows NT:
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On Project menu, choose Components. Select Microsoft Windows Common Controls
	  5.0 and click OK.
	
	3. Add a CommandButton and TreeView control to Form1. Size the TreeView such
	  that 35 characters of Node Text are not completely displayed.
	
	4. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" _
	                            (ByVal hWnd As Long, ByVal wMsg As Long, _
	                             ByVal wParam As Long, lParam As Any) As Long    
	  ' treeview definitions
	
	  ' messages
	
	  Private Const TV_FIRST = &H1100
	  Private Const TVM_GETTOOLTIPS = (TV_FIRST + 25)
	
	  ' tooltip definitions
	
	  Private Type RECT   ' rc
	     Left As Long
	     Top As Long
	     Right As Long
	     Bottom As Long
	  End Type
	
	  Private Type TOOLINFO
	     cbSize As Long
	     uFlags As TT_Flags
	     hWnd As Long
	     uId As Long
	     RECT As RECT
	     hinst As Long
	     lpszText As Long   ' if String, must be pre-allocated before retrieval
	     lParam As Long
	  End Type   ' TOOLINFO
	
	  Private Enum TT_Flags
	     TTF_IDISHWND = &H1
	     TTF_CENTERTIP = &H2
	     TTF_RTLREADING = &H4
	     TTF_SUBCLASS = &H10
	     TTF_TRACK = &H20
	     TTF_UNDOCFLAG = &H40
	     TTF_ABSOLUTE = &H80
	     TTF_TRANSPARENT = &H100
	     TTF_DI_SETITEM = &H8000& ' valid only on the TTN_NEEDTEXT callback
	  End Enum   ' TT_Flags
	
	  ' messages
	
	  Private Const WM_USER = &H400
	  Private Const TTM_SETTOOLINFOA = (WM_USER + 9)   ' ANSI
	  Private Const TTM_ENUMTOOLSA = (WM_USER + 14)   ' ANSI
	
	  ' Comctl32.dll version definitions
	
	  Private Type DLLVERSIONINFO
	     cbSize As Long
	     dwMajorVersion As Long
	     dwMinorVersion As Long
	     dwBuildNumber As Long
	     dwPlatformId As Long
	  End Type
	
	  ' dwPlatformID values
	  Private Const DLLVER_PLATFORM_WINDOWS = &H1 ' built for all Windows vers.
	  Private Const DLLVER_PLATFORM_NT = &H2      ' built specifically for NT.
	
	  Private Declare Function GetComctl32Version Lib "comctl32" _
	     Alias "DllGetVersion" (pdvi As DLLVERSIONINFO) As Long
	
	  Private Sub Form_Load()
	     Dim i As Integer
	     Dim dvi As DLLVERSIONINFO
	
	     Command1.Caption = "Fix TreeView Tooltips"
	  ' Fill up the treeview...
	     For i = 1 To 10
	        Call TreeView1.Nodes.Add(Text:="item" & i & String$(30, "x"))
	     Next
	
	  ' Get the version info of Comctl32.dll (will err on only pre
	  ' IE3 installations [< v4.70], where this API is not exported)
	
	     dvi.cbSize = Len(dvi)
	     On Error GoTo Out
	     Call GetComctl32Version(dvi)
	     On Error GoTo 0
	
	  ' Enable the command button only if Comctl32.dll's major
	  ' version is 4, and Comctl32.dll is a NT specific build.
	     Command1.Enabled = (dvi.dwMajorVersion = 4) And _
	                        (dvi.dwPlatformId = DLLVER_PLATFORM_NT)
	     Exit Sub
	
	  Out:
	  ' Since Windows NT 4.0 was not shipped with a version of
	  ' Comctl32.dll < 4.70, this should not occur.
	     Command1.Enabled = False
	  End Sub
	
	  Private Sub Command1_Click()
	     Dim hwndTT As Long
	     Dim ti As TOOLINFO
	
	  ' Get the handle of the TreeView's tooltip window
	     hwndTT = SendMessage(TreeView1.hWnd, TVM_GETTOOLTIPS, 0, 0)
	     If hwndTT Then
	
	  ' Initialize the TOOLINFO struct, and get the info for its
	  ' first and only tool
	        ti.cbSize = Len(ti)
	        If SendMessage(hwndTT, TTM_ENUMTOOLSA, 0, ti) Then
	           ti.uFlags = TTF_IDISHWND Or TTF_TRANSPARENT Or TTF_UNDOCFLAG
	           Call SendMessage(hwndTT, TTM_SETTOOLINFOA, 0, ti) ' &H141
	
	           Command1.Enabled = False ' We're all done.
	        End If   ' TTM_ENUMTOOLSA
	     End If   ' hwndTT
	  End Sub
	
	
	5. Run the Project and place the cursor over a Node item.
	
	6. Now click the CommandButton and repeat the previous step.
	
	REFERENCES
	==========
	
	For additional information regarding treeview tooltip issues, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q240924 BUG: TreeView Node Tooltips Flash when Displayed from Modal Form
	
	  Q241102 BUG: TreeView Nodes Tooltips Fail to Appear on Usercontrol
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbOSWinNT400 kbTreeView kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
