---
layout: page
title: "Q172988: SAMPLE: CLSNMMBR.EXE Retrieves Members of a DLL Class"
permalink: /kb/172/Q172988/
---

## Q172988: SAMPLE: CLSNMMBR.EXE Retrieves Members of a DLL Class

{% raw %}

	Article: Q172988
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbSample kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to programmatically retrieve the class names and
	members of a dll or ActiveX file that contains a type library. You can get this
	information by using the Object Browser in Visual Basic or you can
	programmatically retrieve this information. The sample program uses an
	unsupported file Tlbinf32.dll to retrieve some of the type library information,
	but is not a complete substitute for the Object Browser.
	
	NOTE: The file Tlbinf32.dll is not supported by Microsoft Technical Support
	either electronically or via telephone. This file is subject to change without
	notice.
	
	A Visual Basic project that demonstrates how to use this file to get the class
	names and members from a dll or ActiveX controls is available for download from
	the Microsoft Download Center: The following file is available for download from
	the Microsoft Download Center:
	
	  Clsnmmbr.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	The Object Browser in Visual Basic shows you the collections and member names of
	a dll class. You may want to develop an add-in for use in other development
	environments that has the same functionality as the object browser and to add
	some automation capabilities. This sample shows you how to retrieve this
	information programmatically by using the file tlbinf32.dll. This file is stored
	in the OS\System directory of your installation disk and is copied to your
	computer's system folder during the Visual Basic installation.
	
	After downloading and running the self-extracting file, the following files are
	extracted to your hard drive:
	
	- From1.frm (4K)
	
	- Form1.frx (1K)
	
	- Project1.vbp (1K)
	
	- Project1.vbw (1K)
	
	- Readme.txt
	
	When you run the project in Visual Basic by pressing the F5 key, click the Choose
	file button to select a dll or ActiveX file. If the file contains a type
	library, the class names and members are displayed in the list box.
	
	You can duplicate this project by completing the steps shown in the following
	section.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic and chose Standard Exe or, if Visual Basic is already
	  running, choose New Project from the File menu.
	
	2. Set a reference to the file Tlbinf32.dll by completing the following steps:
	
	  a. From the Project menu, click References. The References dialog box is
	     displayed.
	
	  b. From the References dialog box, click Browse.
	
	  c. From your Windows system directory, select the file Tlbinf32.dll.
	
	3. Add the following controls to the Form1 form and set the indicated
	  properties:
	
	  Control               Property Name             Property Setting
	  ----------------------------------------------------------------
	  Command Button        Name                      Command1
	                        Caption                   Choose File
	                        Height                    495
	                        Left                      4800
	                        TabIndex                  3
	                        Top                       720
	                        Width                     1815
	
	  Command Button        Name                      Command2
	                        Caption                   End
	                        Height                    495
	                        Left                      4800
	                        TabIndex                  4
	                        Top                       1320
	                        Width                     1815
	
	  Text Box              Name                      Text1
	                        Height                    375
	                        Left                      1080
	                        TabIndex                  1
	                        Top                       120
	                        Width                     5535
	
	  List Box              Name                      List1
	                        Height                    2205
	                        Left                      120
	                        Top                       720
	                        Width                     4455
	
	  Common Dialog         Name                      CommonDialog1
	
	  Label                 Name                      Label1
	                        Caption                   Selected DLL
	                        Height                    375
	                        Left                      0
	                        TabIndex                  2
	                        Top                       120
	                        Width                     1095
	
	4. Copy and paste the following code to the Code window of the Form1 form.
	
	        Private Sub Form_Load()
	            strFilter = "DLL Files (*.dll)|*.dll|"
	            strFilter = strFilter & "OCX Files (*.ocx)|*.ocx|"
	            strFilter = strFilter & "All Files (*.*)|*.*"
	            CommonDialog1.Filter = strFilter
	        End Sub
	
	        Private Sub Command1_Click()
	            Dim x As TypeLibInfo
	            Dim y As CoClasses
	            Dim z As Interfaces
	            Dim w As Members
	            Dim u As MemberInfo
	            Dim i As Integer, j As Integer, n As Integer, k As Integer
	            Dim strFilter As String
	            Dim strName As String, strMembers As String
	
	            On Error Resume Next
	            CommonDialog1.ShowOpen
	            List1.Clear
	            Text1.Text = ""
	
	            'Program ends if you click the Cancel button in the
	            'file open dialog box
	            If CommonDialog1.Flags = 0 Then
	                End
	            End If
	
	            'Get information from type library
	            Set x = TypeLibInfoFromFile(CommonDialog1.filename)
	            Set y = x.CoClasses
	
	            'Show Type Library information in the List box
	            For i = 1 To y.Count
	                If i <> 1 Then
	                    strName = ""
	                    List1.AddItem strName
	                End If
	                strName = "Class Name: " & y.Item(i).Name
	                List1.AddItem strName
	                Set z = y.Item(i).Interfaces
	                For n = 1 To z.Count
	                    Set w = z.Item(n).Members
	                    For k = 1 To w.Count
	                        Set u = w.Item(k)
	                        strMembers = "      Member: " & u.Name
	                        List1.AddItem strMembers
	                    Next
	                Next
	            Next
	            Set z = Nothing
	            Set y = Nothing
	            Set x = Nothing
	            Set w = Nothing
	
	            'Display filename in the text box
	            Text1.Text = CommonDialog1.filename
	
	            'If the file does not contain type library information
	            'then display this error message.
	            If Err.Number = 91 Then
	                Dim strMsgTitle As String, strMsgError As String
	                Dim intResponse
	                strMsgTitle = "No Type Library"
	                strMsgError = "You chose a file without a type library. "
	                strMsgError = strMsgError & "Choose another file."
	                Err.Clear
	                intResponse = MsgBox(strMsgError, vbOKCancel, strMsgTitle)
	
	                If intResponse = vbOK Then
	                    Command1_Click
	                End If
	
	            End If
	
	        End Sub
	
	        Private Sub Command2_Click()
	            End
	        End Sub
	
	5. Press the F5 key to run the program. Select a .dll or an ActiveX control
	  file. If the file contains a type library, the class names and members are
	  displayed in the list box.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Arsenio Locsin, Microsoft Corporation
	
	
	Additional query words: Clsnmmbr
	
	======================================================================
	Keywords          : kbfile kbProgramming kbSample kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
