---
layout: page
title: "Q189631: HOWTO: Add the Entire Directory Structure to a RichTextBox"
permalink: /kb/189/Q189631/
---

## Q189631: HOWTO: Add the Entire Directory Structure to a RichTextBox

{% raw %}

	Article: Q189631
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two ways to view the contents of a directory tree from a
	RichTextBox control.
	
	MORE INFORMATION
	================
	
	The following sample program uses a RichTextBox to display the entire contents
	of a drive. It is also an example of recursion, the QuickSort algorithm, and
	RichTextBox RTF formatting.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select Components, check "Microsoft Common Dialog
	  Control" and "Microsoft RichTextBox Control," and then click OK.
	
	3. Add the following controls to Form1:
	
	  4 CommandButton controls
	  2 DirListBox controls
	  1 DriveListBox control
	  1 FileListBox control
	  1 CommonDialog control
	  1 RichTextBox control
	
	4. Add the following code to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Dim InF As String ' Starting Directory
	        Dim DS As String  ' Buffer for RFT control text
	        Const nL = "{\par }"
	
	        Function DbS(ByVal txt As String) As String
	           Dim k As Long, kLast As Long
	           Dim nt As String
	           k = 1
	           kLast = 1
	           Do ' Replace all \ characters with \\ 
	              k = InStr(kLast, txt, "\")
	              If k = 0 Then
	                 Exit Do
	              Else
	                 txt = Left$(txt, k) & Right$(txt, Len(txt) - k + 1)
	                 kLast = k + 2
	              End If
	           Loop
	           DbS = txt
	        End Function
	
	        ' ============================ QuickSort ============================
	        ' QuickSort works by picking a random "pivot" element in SortArray,
	        ' then moving every element that is bigger to one side of the pivot,
	        ' and every element that is smaller to the other side. QuickSort is
	        ' then called recursively with the two subdivisions created by the
	        ' pivot. Once the number of elements in a subdivision reaches two,
	        ' the recursive calls end and the array is sorted.
	        ' ===================================================================
	        '
	        Private Sub QuickSort(SortArray() As String, ByVal Low As Long, _
	                           ByVal High As Long)
	           Dim I As Long, J As Long, RandIndex As Long, Partition As String
	           If Low < High Then
	              ' Only two elements in this subdivision; swap them if they are
	              ' out of order, then end recursive calls:
	              If High - Low = 1 Then
	                 If UCase(SortArray(Low)) > UCase(SortArray(High)) Then
	                    SWAP SortArray(Low), SortArray(High)
	                 End If
	              Else
	                 ' Pick a pivot element at random, then move it to the end:
	                 RandIndex = Rnd() * (High - Low) + Low ' RandInt%(Low, High)
	                 SWAP SortArray(High), SortArray(RandIndex)
	                 Partition = UCase(SortArray(High))
	                 Do
	                    ' Move in from both sides towards the pivot element:
	                    I = Low: J = High
	                    Do While (I < J) And (UCase(SortArray(I)) <= Partition)
	                       I = I + 1
	                    Loop
	                    Do While (J > I) And (UCase(SortArray(J)) >= Partition)
	                       J = J - 1
	                    Loop
	
	                    ' If we haven't reached the pivot element it means that 2
	                    ' elements on either side are out of order, so swap them:
	                    If I < J Then
	                       SWAP SortArray(I), SortArray(J)
	                    End If
	                 Loop While I < J
	
	                 ' Move the pivot element to its proper place in the array:
	                 SWAP SortArray(I), SortArray(High)
	
	                 ' Recursively call the QuickSort procedure (pass the
	                 ' smaller subdivision first to use less stack space):
	                 If (I - Low) < (High - I) Then
	                    QuickSort SortArray, Low, I - 1
	                    QuickSort SortArray, I + 1, High
	                 Else
	                    QuickSort SortArray, I + 1, High
	                    QuickSort SortArray, Low, I - 1
	                 End If
	              End If
	           End If
	        End Sub
	
	        Private Sub ScanFoldersC(cD As Integer)
	           Dim subFolders As Integer
	           Dim tL As String
	           Dim J As Integer
	           Dim I As Long
	
	           tL = ""
	           For J = 0 To File1.ListCount - 1
	              DoEvents
	              tL = tL & Space(cD * 5) + File1.List(J) & nL
	           Next
	           DS = DS & tL
	           subFolders = Dir2.ListCount
	           If subFolders > 0 Then
	              For I = 0 To subFolders - 1
	                 DoEvents
	                 DS = DS & "{\b " & DbS(Dir2.List(I)) & "}" & nL
	                 File1.path = Dir2.List(I)
	                 ChDir CurDir    'Dir2.List(i)
	                 Dir2.path = Dir2.List(I)
	                 Call ScanFoldersC(cD + 1)
	              Next
	              DoEvents
	           End If
	           '        MoveUp
	           If Dir2.List(-1) <> InF Then
	              ChDir Dir2.List(-2)
	              Dir2.path = Dir2.List(-2)
	           End If
	           File1.path = Dir2.path
	        End Sub
	
	        Private Sub ScanFoldersD(path$, cD As Integer)
	           Dim tL As String     ' temporary buffer for filenames
	           Dim tPath As String  ' temporary path string
	           Dim I As Integer     ' loop index
	           Dim sd$(0 To 100)    ' array of subdirectories
	           Dim nDir As Integer  ' # of subdirectories in sd$
	           Dim sf() As String   ' array of files in directory
	           Dim nFile As Integer ' # of files in sf
	           ReDim sf(1 To 256)
	
	           tL = ""
	           nDir = 0
	           nFile = 0
	           sd$(0) = Dir$(".", vbDirectory)
	           While sd$(nDir) <> ""
	              If (GetAttr(sd$(nDir)) And vbDirectory) <> 0 Then
	                 If Left$(sd$(nDir), 1) <> "." Then
	                    nDir = nDir + 1
	                 End If
	              Else
	              ' add the item to the list
	                 nFile = nFile + 1
	                 sf(nFile) = sd$(nDir)
	                 If nFile Mod 256 = 0 Then
	                    ReDim Preserve sf(1 To UBound(sf) + 256)
	                 End If
	              End If
	              sd$(nDir) = Dir()
	           Wend
	           nDir = nDir - 1
	           Call QuickSort(sd$, 0, nDir)
	           Call QuickSort(sf, 1, nFile)
	           For I = 1 To nFile
	               tL = tL & Space(cD * 5) + sf(I) & nL
	           Next I
	           DS = DS & tL
	
	           If nDir >= 0 Then
	              For I = 0 To nDir
	                 tPath = path$ & "\" & sd$(I)
	                 DS = DS & "{\b " & DbS(tPath) & "}" & nL
	                 ChDir tPath
	                 Call ScanFoldersD(tPath, cD + 1)
	              Next I
	           End If
	        End Sub
	        Private Sub SWAP(first As String, second As String)
	           Dim temp As String
	           temp = first
	           first = second
	           second = temp
	        End Sub
	
	        Private Sub Command1_Click()
	           InF = CurDir
	           MsgBox "This program is about to go through the entire " & InF & _
	           " ,please be patient."
	           DS = "{{\b " & DbS(Dir1.List(-1)) & "}" + nL
	           Call ScanFoldersC(1)
	           DS = DS & "}"
	           RichTextBox1.TextRTF = DS
	        End Sub
	
	        Private Sub Command2_Click()
	           InF = CurDir
	           MsgBox "This program is about to go through the entire " & InF & _
	           " ,please be patient."
	           DS = "{{\b " & DbS(InF) & "}" + nL
	           Call ScanFoldersD(InF, 1)
	           DS = DS & "}"
	           RichTextBox1.TextRTF = DS
	        End Sub
	
	        Private Sub Command3_Click()
	           RichTextBox1.TextRTF = ""
	           CommonDialog1.ShowOpen
	           If CommonDialog1.filename <> "" Then _
	           RichTextBox1.filename = CommonDialog1.filename
	        End Sub
	
	        Private Sub Command4_Click()
	           CommonDialog1.Filter = "*.RTF|*.RTF"
	           CommonDialog1.filename = ""
	           CommonDialog1.ShowSave
	           On Error Resume Next
	           If CommonDialog1.filename <> "" Then _
	           RichTextBox1.SaveFile CommonDialog1.filename
	        End Sub
	
	        Private Sub Dir1_Change()
	           File1.filename = Dir1.path
	        End Sub
	
	        Private Sub Drive1_Change()
	           Dir1.path = Drive1.Drive
	        End Sub
	
	        Private Sub Form_Load()
	           Dir1.Visible = False
	           Drive1.Visible = False
	           Dir2.Visible = False
	           File1.Visible = False
	           Form1.Visible = True
	           Command1.Caption = "Directory View Method A"
	           Command2.Caption = "Directory View Method B"
	           Command3.Caption = "Open"
	           Command4.Caption = "Save"
	        End Sub
	
	5. Run the program. Click either of the Directory View CommandButtons and
	  observe the effect. If your current directory is the root, the task may take
	  some time to complete.
	
	  NOTE: Name Spaces and other pseudo directory structures such as the Internet
	  temp directories may not be displayed using these methods.
	
	REFERENCES
	==========
	
	For more information about the RichTextBox control, search Help for
	RichTextBox.
	
	For additional information on listing or searching for files, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q185476 HOWTO: Search Directories to Find or List Files
	
	  Q185601 HOWTO: Recursively Search Directories Using FileSystemObject
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Richard T. Edwards, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
