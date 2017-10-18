---
layout: page
title: "Q253140: HOWTO: Use WTSEnumerateProcesses from Visual Basic"
permalink: kb/253/Q253140/
---

## Q253140: HOWTO: Use WTSEnumerateProcesses from Visual Basic

	Article: Q253140
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWinNT400 kbOSWin2000 kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kb
	Last Modified: 14-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows NT Workstation version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows API WTSEnumerateProcesses function allows you to obtain
	information about the active processes running on a Terminal Server machine.
	This article includes an example of using this API function from Visual Basic.
	
	MORE INFORMATION
	================
	
	The WTSEnumerateProcesses function enumerates processes on a Terminal Server
	host. As a result, it requires Windows 2000 Server that is running Terminal
	Services or Windows NT 4.0 Service Pack 4 (SP4) or later, Terminal Server
	Edition. In this example, a call to the WTSEnumerateProcesses function is used
	to retrieve the information. Once the information has been retrieved, it is
	displayed using a Listview control. Because you are using
	WTS_CURRENT_SERVER_HANDLE, the process information for the Terminal Server you
	are running the code on is retrieved. You can also retrieve process information
	for processes running on another Terminal Server computer. To do so, you can use
	the server handle returned from WTSOpenServer instead of
	WTS_CURRENT_SERVER_HANDLE.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a ListView control and CommandButton control to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Const WTS_CURRENT_SERVER_HANDLE = 0&
	
	  Private Type WTS_PROCESS_INFO
	     SessionID As Long
	     ProcessID As Long
	     pProcessName As Long
	     pUserSid As Long
	  End Type
	
	  Private Declare Function WTSEnumerateProcesses _
	     Lib "wtsapi32.dll" Alias "WTSEnumerateProcessesA" _
	     (ByVal hServer As Long, ByVal Reserved As Long, _
	     ByVal Version As Long, ByRef ppProcessInfo As Long, _
	     ByRef pCount As Long _
	     ) As Long
	
	  Private Declare Sub WTSFreeMemory Lib "wtsapi32.dll" _
	     (ByVal pMemory As Long)
	
	  Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	     (Destination As Any, Source As Any, ByVal Length As Long)
	
	  Private Sub Command1_Click()
	     GetWTSProcesses
	  End Sub
	
	  Private Function GetStringFromLP(ByVal StrPtr As Long) As String
	     Dim b As Byte
	     Dim tempStr As String
	     Dim bufferStr As String
	     Dim Done As Boolean
	
	     Done = False
	     Do
	        ' Get the byte/character that StrPtr is pointing to.
	        CopyMemory b, ByVal StrPtr, 1
	        If b = 0 Then  ' If you've found a null character, then you're done.
	           Done = True
	        Else
	           tempStr = Chr$(b)  ' Get the character for the byte's value
	           bufferStr = bufferStr & tempStr 'Add it to the string
	                  
	           StrPtr = StrPtr + 1  ' Increment the pointer to next byte/char
	        End If
	     Loop Until Done
	     GetStringFromLP = bufferStr
	  End Function
	
	  Private Sub Form_Load()
	     ListView1.View = lvwReport
	     Command1.Caption = "Refresh"
	
	  'Add the Column Headers for your ListView Control
	     ListView1.ColumnHeaders.Add 1, "SessionID", "Session ID"
	     ListView1.ColumnHeaders.Add 2, "ProcessID", "Process ID"
	     ListView1.ColumnHeaders.Add 3, "ProcessName", "Process Name"
	     ListView1.ColumnHeaders.Add 4, "UserID", "User ID"
	
	     GetWTSProcesses
	  End Sub
	
	  Private Sub ListView1_ColumnClick(ByVal ColumnHeader As _
	                                    MSComctlLib.ColumnHeader)
	  ' When a ColumnHeader object is clicked, the ListView control is
	  ' sorted by the subitems of that column.
	  ' Set the SortKey to the Index of the ColumnHeader - 1
	     ListView1.SortKey = ColumnHeader.Index - 1
	  ' Set Sorted to True to sort the list.
	     ListView1.Sorted = True
	  End Sub
	
	  Private Sub GetWTSProcesses()
	     Dim RetVal As Long
	     Dim Count As Long
	     Dim i As Integer
	     Dim lpBuffer As Long
	     Dim p As Long
	     Dim udtProcessInfo As WTS_PROCESS_INFO
	     Dim itmAdd As ListItem
	
	     ListView1.ListItems.Clear
	     RetVal = WTSEnumerateProcesses(WTS_CURRENT_SERVER_HANDLE, _
	                                    0&, _
	                                    1, _
	                                    lpBuffer, _
	                                    Count)
	     If RetVal Then ' WTSEnumerateProcesses was successful
	        p = lpBuffer
	        For i = 1 To Count
	  ' Count is the number of Structures in the buffer
	  ' WTSEnumerateProcesses returns a pointer, so copy it to a
	  ' WTS_PROCESS_INO UDT so you can access its members
	           
	           CopyMemory udtProcessInfo, ByVal p, LenB(udtProcessInfo)
	          
	  ' Add items to the ListView control
	           Set itmAdd = ListView1.ListItems.Add(i, , _
	                       CStr(udtProcessInfo.SessionID))
	           itmAdd.SubItems(1) = CStr(udtProcessInfo.ProcessID)
	  ' Since pProcessName contains a pointer, call GetStringFromLP to get the
	  ' variable length string it points to
	           itmAdd.SubItems(2) = GetStringFromLP(udtProcessInfo.pProcessName)
	           itmAdd.SubItems(3) = CStr(udtProcessInfo.pUserSid)
	
	  ' Increment to next WTS_PROCESS_INO structure in the buffer
	           p = p + LenB(udtProcessInfo)
	        Next i
	
	        Set itmAdd = Nothing
	        WTSFreeMemory lpBuffer   'Free your memory buffer
	     Else
	        ' Error occurred calling WTSEnumerateProcesses
	        ' Check Err.LastDllError for error code
	        MsgBox "Error occurred calling WTSEnumerateProcesses.  " & _
	        "Check the Platform SDK error codes in the MSDN Documentation" _
	        & " for more information.", vbCritical, "Error " & Err.LastDllError
	     End If
	  End Sub
	
	4. Run the project, and note that the ListView control is populated with the
	  state of the processes currently running on the Terminal Server computer.
	
	5. Click the Refresh button to refresh the list.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q291789 HOWTO: Use WTSEnumerateSessions Terminal Server Function from Visual
	  Basic
	
	Additional query words: EnumProcesses Session ID
	
	======================================================================
	Keywords          : kbAPI kbOSWinNT400 kbOSWin2000 kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbTermServ 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
