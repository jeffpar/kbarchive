---
layout: page
title: "Q267939: HOWTO: Use FindText to Enable Searching in a Text Box"
permalink: /kb/267/Q267939/
---

## Q267939: HOWTO: Use FindText to Enable Searching in a Text Box

	Article: Q267939
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCmnDlgFind kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to use the FindText API function to programmatically
	enable searching in a Text box for the first match.
	
	MORE INFORMATION
	================
	
	The FindText function creates a system-defined, modeless Find dialog box that
	lets the user specify a string to search for and options to use when searching
	for text in a document. It has one parameter and returns the handle to the Find
	dialog box. This parameter is:
	
	- lpfr - pointer to a FINDREPLACE structure that contains information used to
	  initialize the dialog box. For example, if the FR_MATCHCASE value is used for
	  the FLAGS field of the structure, the Find dialog box pops up with an enabled
	  Match Case check box. Such constants can be found in the Text Viewer API
	  function or in COMMDLG.H.
	
	After you get the handle, you can use the GetWindowLong and SetWindowLong
	functions to change the window procedure of the Find Next button. These
	functions have two parameters in common:
	
	- hWnd - Handle to the Find dialog box.
	- nIndex - Use GWL_WNDPROC here.
	
	SetWindowLong has one additional parameter:
	
	- dwNewLong - The address of the new window procedure.
	
	You write code for the WM_LBUTTONDOWN event in the new window procedure. This
	event is fired when the user clicks the Find Next button in the Find dialog box.
	Use the IsDlgButtonChecked function to determine whether the Match Case option
	is checked. It has two parameters:
	
	- hDlg -- Handle to the Find dialog box.
	- nIDButton -- Specifies the identifier of the button control. For Match Case
	  button, the value is 0x411.
	
	To get the pattern string that is to be matched, you can use the GetDlgItemText
	function API. It has four parameters:
	
	- hWnd -- Handle to the text box in the Find dialog box. You can use the
	  GetDlgItem function to get the value for this parameter.
	- nIDDlgItem - Control identifier. This is 0x480.
	- lpString - Pointer to the buffer that receives the text.
	- nMaxCount - Specifies the maximum number of characters to copy to the buffer,
	  including the NULL character. If the text exceeds this limit, it is
	  truncated.
	
	A global string variable is used here to store the current content of the Text
	box within which you want to find the matching string. After you find the start
	position of the first match, you can use the SendMessage API function to
	highlight the matching string in the Text box. SendMessage has four parameters:
	
	- hWnd - Handle to the Text box.
	- Msg - Message to be sent. Use EM_SETSEL here.
	- wParam - Start position of the matching string.
	- lParam - End position of the matching string.
	
	As to the other messages from WM_LBUTTONDOWN, you can use the previous window
	procedure to proceed them. You can use the CallWindowProc function here.
	CallWindowProc has five parameters:
	
	- lpPrevWndFunc - Pointer to the previous window procedure.
	- hWnd - Handle to the Find dialog box.
	- Msg - Use the same value as what is passed to the new window procedure.
	- wParam - Use the same value as what is passed to the new window procedure.
	- lParam - Use the same value as what is passed to the new window procedure.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton and a TextBox control to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	  Private Sub Command1_Click()
	  Dim szFindString As String  ' initial string to find
	  Dim hCmdBtn As Long         ' handle of 'Find Next' command button
	  Dim strArr() As Byte        ' for API use
	  Dim i As Integer            ' position indicator in the loop
	
	  ' Fill in the structure.
	  szFindString = "Find Me"
	
	  ReDim strArr(0 To Len(szFindString) - 1)
	
	  For i = 1 To Len(szFindString)
	      strArr(i - 1) = Asc(Mid(szFindString, i, 1))
	  Next i
	
	  frText.flags = FR_MATCHCASE Or FR_NOUPDOWN Or FR_NOWHOLEWORD
	  frText.lpfnHook = 0&
	  frText.lpTemplateName = 0&
	  frText.lStructSize = Len(frText)
	  frText.hwndOwner = Me.hwnd
	  frText.hInstance = App.hInstance
	  frText.lpstrFindWhat = VarPtr(strArr(0))
	  frText.lpstrReplaceWith = 0&
	  frText.wFindWhatLen = Len(szFindString)
	  frText.wReplaceWithLen = 0
	  frText.lCustData = 0
	
	  ' Show the dialog box.
	  gHDlg = FindText(frText)
	
	  ' Get the handle of the dialog box
	  hCmdBtn = GetDlgItem(gHDlg, 1)
	
	  ' Get necessary value for calling default window procedure.
	  gOldDlgWndHandle = GetWindowLong(hCmdBtn, GWL_WNDPROC)
	
	  If SetWindowLong(hCmdBtn, GWL_WNDPROC, AddressOf FindTextHookProc) = 0 Then
	      gOldDlgWndHandle = 0
	  End If
	  End Sub
	
	  Private Sub Form_Load()
	  gHTxtWnd = Text1.hwnd
	  End Sub
	
	  Private Sub Text1_Change()
	  gTxtSrc = Text1.Text
	  End Sub
	
	4. From the Project menu, add a new module to the project and insert the
	  following code:
	
	  Public Type FINDREPLACE
	          lStructSize As Long         '   size of this struct 0x20
	          hwndOwner As Long           '   handle to owner's window
	          hInstance As Long           '   instance handle of.EXE that
	                                      '   contains cust. dlg. template
	          flags As Long               '   one or more of the FR_??
	          lpstrFindWhat As Long       '   ptr. to search string
	          lpstrReplaceWith As Long    '   ptr. to replace string
	          wFindWhatLen As Integer     '   size of find buffer
	          wReplaceWithLen As Integer  '   size of replace buffer
	          lCustData As Long           '   data passed to hook fn.
	          lpfnHook As Long            '   ptr. to hook fn. or NULL
	          lpTemplateName As Long      '   custom template name
	  End Type
	
	  Public Declare Function FindText Lib "comdlg32.dll" Alias "FindTextA" (pFindreplace As FINDREPLACE) As Long
	  Public Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long
	  Public Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long) As Long
	  Public Declare Function CallWindowProc Lib "user32" Alias "CallWindowProcA" (ByVal lpPrevWndFunc As Long, ByVal hwnd As Long, ByVal Msg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	  Public Declare Function GetDlgItem Lib "user32" (ByVal hDlg As Long, ByVal nIDDlgItem As Long) As Long
	  Public Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, ByVal lParam As Long) As Long
	  Public Declare Function SetFocus Lib "user32" (ByVal hwnd As Long) As Long
	  Public Declare Function IsDlgButtonChecked Lib "user32" (ByVal hDlg As Long, ByVal nIDButton As Long) As Long
	  Public Declare Function GetDlgItemText Lib "user32" Alias "GetDlgItemTextA" (ByVal hDlg As Long, ByVal nIDDlgItem As Long, ByVal lpString As String, ByVal nMaxCount As Long) As Long
	
	  Public Const GWL_WNDPROC = (-4)
	  Public Const WM_LBUTTONDOWN = &H201
	
	  Public Const FR_NOMATCHCASE = &H800
	  Public Const FR_MATCHCASE = &H4
	  Public Const FR_NOUPDOWN = &H400
	  Public Const FR_UPDOWN = &H1
	  Public Const FR_NOWHOLEWORD = &H1000
	  Public Const FR_WHOLEWORD = &H2
	  Public Const EM_SETSEL = &HB1
	
	  Public Const MaxPatternLen = 50   ' Maximum Pattern Length
	
	  Global gOldDlgWndHandle As Long
	  Global frText As FINDREPLACE
	  Global gTxtSrc As String
	  Global gHDlg As Long
	  Global gHTxtWnd As Long
	
	  Function FindTextHookProc(ByVal hDlg As Long, ByVal uMsg As Long, _
	     ByVal wParam As Long, ByVal lParam As Long) As Long
	
	  Dim strPtn As String    ' pattern string
	  Dim hTxtBox As Long     ' handle of the text box in dialog box
	  Dim ptnLen As Integer   ' actual length read by GetWindowString
	  Dim sp As Integer       ' start point of matching string
	  Dim ep As Integer       ' end point of matchiing string
	  Dim ret As Long         ' return value for SendMessage
	
	  strPtn = Space(MaxPatternLen)
	
	      Select Case uMsg
	          Case WM_LBUTTONDOWN
	               ' Get the pattern string
	               ptnLen = GetDlgItemText(gHDlg, &H480, strPtn, MaxPatternLen)
	              
	               ' Call default window procedure
	               If gOldDlgWndHandle <> 0 Then
	                   FindTextHookProc = CallWindowProc(gOldDlgWndHandle, _
	                      hDlg, uMsg, wParam, lParam)
	               End If
	               
	               ' Customize the winodw procedure
	               If ptnLen <> 0 Then
	                   strPtn = Left(strPtn, ptnLen)
	                   SetFocus gHTxtWnd
	                   
	                   ' Get the MatchCase option
	                   If IsDlgButtonChecked(gHDlg, &H411) = 0 Then
	                       sp = InStr(LCase(gTxtSrc), LCase(strPtn))
	                   Else
	                       sp = InStr(gTxtSrc, strPtn)
	                   End If
	                   
	                   sp = IIf(sp = 0, -1, sp - 1)
	                   
	                   If sp = -1 Then
	                       Call MessageNoFound
	                   End If
	                   
	                   ep = Len(strPtn)
	                   ret = SendMessage(gHTxtWnd, EM_SETSEL, sp, sp + ep)
	               End If
	                  
	          Case Else
	              ' Call the default window procedure
	              If gOldDlgWndHandle <> 0 Then
	                 FindTextHookProc = CallWindowProc(gOldDlgWndHandle, _
	                    hDlg, uMsg, wParam, lParam)
	              End If
	      End Select
	  End Function
	
	  Sub MessageNoFound()
	  MsgBox "No matches found"
	  End Sub
	
	5. Press the F5 key to run the program. Input any words you like into the Text
	  box and click the CommandButton to show the Find dialog box. Then change the
	  pattern string and click Find Next to highlight the first match in the Text
	  box. If no match is found, a message box appears indicating that the document
	  was searched but no match was found.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbCmnDlgFind kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
