---
layout: page
title: "Q291789: HOWTO: Use WTSEnumerateSessions Terminal Server Function from VB"
permalink: /kb/291/Q291789/
---

## Q291789: HOWTO: Use WTSEnumerateSessions Terminal Server Function from VB

	Article: Q291789
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWinNT400 kbOSWin2000 kbSDKWin32 kbService kbVBp kbVBp500 kbVBp600 kbGrpDSVB k
	Last Modified: 17-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article includes a code sample that demonstrates how to use the
	WTSEnumerateSessions Terminal Server function from Visual Basic.
	
	MORE INFORMATION
	================
	
	The WTSEnumerateSessions function is used to retrieve session information on a
	Terminal Server. As a result, it requires Windows 2000 Server that is running
	Terminal Services or Windows NT 4.0 Service Pack 4 (SP4) or later, Terminal
	Server Edition. This sample enumerates the sessions on a specified Terminal
	Server and displays the information in the Immediate window of the Visual Basic
	Integrated Development Environment (IDE).
	
	You can use the WTSEnumerateSessions function to retrieve the session ID,
	computer name, and session state. The code sample queries the Terminal Server
	computer that the code runs on, but it can be modified to query sessions that
	are running on other Terminal Servers. You must have Query Information
	permission to query a Terminal Server. For more information, see the MSDN
	documentation in the "References" section.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton control (Command1) to Form1.
	
	3. Paste the following code into the code window of Form1:
	
	  Option Explicit
	
	  Private Const WTS_CURRENT_SERVER_HANDLE = 0&
	
	  Private Enum WTS_CONNECTSTATE_CLASS
	      WTSActive
	      WTSConnected
	      WTSConnectQuery
	      WTSShadow
	      WTSDisconnected
	      WTSIdle
	      WTSListen
	      WTSReset
	      WTSDown
	      WTSInit
	  End Enum
	
	  Private Type WTS_SESSION_INFO
	      SessionID As Long
	      pWinStationName As Long
	      state As WTS_CONNECTSTATE_CLASS
	  End Type
	
	  Private Declare Function WTSEnumerateSessions _
	      Lib "wtsapi32.dll" Alias "WTSEnumerateSessionsA" ( _
	      ByVal hServer As Long, ByVal Reserved As Long, _
	      ByVal Version As Long, ByRef ppSessionInfo As Long, _
	      ByRef pCount As Long _
	      ) As Long
	      
	  Private Declare Sub WTSFreeMemory Lib "wtsapi32.dll" ( _
	      ByVal pMemory As Long)
	
	  Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" ( _
	      Destination As Any, Source As Any, ByVal length As Long)
	
	  Private Declare Function lstrlenA Lib "kernel32" ( _
	      ByVal lpString As String) As Long
	
	  Private Declare Function lstrcpy Lib "kernel32" Alias "lstrcpyA" ( _
	      ByVal lpString1 As String, ByVal lpString2 As Long) As Long
	
	  Private arrWTSSessions() As WTS_SESSION_INFO
	
	  Private Function GetWTSSessions() As WTS_SESSION_INFO()
	      Dim RetVal As Long
	      Dim lpBuffer As Long
	      Dim Count As Long
	      Dim p As Long
	      Dim i As Integer
	      Dim arrSessionInfo() As WTS_SESSION_INFO
	      
	      RetVal = WTSEnumerateSessions(WTS_CURRENT_SERVER_HANDLE, _
	                                     0&, _
	                                     1, _
	                                     lpBuffer, _
	                                     Count)
	      If RetVal Then
	          ' WTSEnumerateProcesses was successful.
	          
	          p = lpBuffer
	          ReDim arrSessionInfo(Count - 1)
	          CopyMemory arrSessionInfo(0), ByVal p, _
	             Count * LenB(arrSessionInfo(0))
	          ' Free the memory buffer.
	          WTSFreeMemory lpBuffer
	      
	       Else
	          ' Error occurred calling WTSEnumerateProcesses.
	          ' Check Err.LastDllError for error code.
	          MsgBox "An error occurred calling WTSEnumerateProcesses.  " & _
	          "Check the Platform SDK error codes in the MSDN Documentation " & _
	          "for more information.", vbCritical, "ERROR " & Err.LastDllError
	      End If
	      GetWTSSessions = arrSessionInfo
	  End Function
	
	  Private Sub Command1_Click()
	      Dim CONNECTSTATE As WTS_CONNECTSTATE_CLASS
	      Dim i As Integer
	      
	      arrWTSSessions = GetWTSSessions
	      For i = LBound(arrWTSSessions) To UBound(arrWTSSessions)
	          Debug.Print "Session ID: " & arrWTSSessions(i).SessionID
	          Debug.Print "Machine Name: " & _
	             PointerToStringA(arrWTSSessions(i).pWinStationName)
	          Debug.Print "***********"
	      Next i
	  End Sub
	
	  Public Function PointerToStringA(ByVal lpStringA As Long) As String
	     Dim nLen As Long
	     Dim sTemp As String
	     Dim lRet As Long
	
	     If lpStringA Then
	        nLen = lstrlenA(ByVal lpStringA)
	        If nLen Then
	           sTemp = String(nLen + 1, vbNullChar)
	           lstrcpy sTemp, ByVal lpStringA
	           PointerToStringA = sTemp
	        End If
	     End If
	  End Function
	
	4. Press the F5 key to run the project.
	
	5. Make sure that the Immediate window is open. If not, press CTRL+G to open it.
	  Click Command1. The session information is displayed in the Immediate window.
	
	REFERENCES
	==========
	
	For more information about the WTSEnumerateSessions function, see the following
	MSDN Web site:
	
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/termserv/tsref_0h6b.asp
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q253140 HOWTO: Use WTSEnumerateProcesses from Visual Basic
	
	  Q190000 HOWTO: Get Started Programming with the Windows API (LONG)
	
	Additional query words: Terminal Services TS Server
	
	======================================================================
	Keywords          : kbAPI kbOSWinNT400 kbOSWin2000 kbSDKWin32 kbService kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport kbTermServ 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
