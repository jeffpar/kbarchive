---
layout: page
title: "Q253171: HOWTO: Create a Most Recently Used (MRU) File List in VB"
permalink: /kb/253/Q253171/
---

## Q253171: HOWTO: Create a Most Recently Used (MRU) File List in VB

{% raw %}

	Article: Q253171
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnDlgFileO kbMenu kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
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
	
	Many applications offer a list of most recently used files (usually referred to
	as an MRU list and located on the File menu). This MRU list allows for quick
	selection of a file or project that was recently opened without having to select
	FILE-OPEN and browse or search to locate that file. This article demonstrates
	one approach to achieving this functionality.
	
	MORE INFORMATION
	================
	
	Visual Basic does not provide any built-in mechanism for managing a list of
	recently used files. However, as a developer, you can easily create this list
	through the use of a menu control array. The use of a menu control array allows
	you to dynamically add menu items to a Visual Basic form during program
	execution. There are some prerequisites for a menu control array to work.
	Primarily, the first element of the array must be created during the development
	of the application. This is as simple as creating the menu item as usual and
	then setting its INDEX property to the numeric value of 0, thus making this menu
	item the first element, element 0, of the array. Once this is done, the LOAD
	method can be used to create additional elements in that array. One important
	thing to note is that, by default, the VISIBLE property of control array
	elements created at run time is FALSE. Therefore, you also need to set this
	property if you want the user to see the new item.
	
	For more information on menu control arrays and control arrays in general, please
	refer to Visual Basic's Online documentation by searching for "Control Array."
	
	Following are steps to create a small fully functioning example application
	featuring an MRU file list. This example demonstrates the following features:
	
	- It is dynamic and supports a various number of MRU items.
	
	- A maximum number of MRU entries can be defined.
	
	- The list is always sorted from the "most recent" to "least recent."
	
	- The MRU list is saved to the registry upon application termination and loaded
	  upon application startup.
	
	STEPS TO CREATE SAMPLE
	----------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. From the Project menu, select Components, check Microsoft Common Dialog
	  control, and click OK.
	
	3. Add a Common Dialog control to Form1.
	
	4. From the Tools menu, select Menu Editor, and create the following menu
	  structure:
	
	   File (Name = mnuFile) 
	   ---Open (Name = mnuOpen) 
	   ---MRU FileList (Name = mnuMRU, Visible = False, Index = 0) 
	   ---Quit (Name = mnuQuit)
	
	5. Paste the following code into Form1's code window:
	
	  Option Explicit
	
	  Private Const MaxMRU = 4  'Maximum number of MRUs in list (-1 for no limit)
	  Private Const NotFound = -1   'Indicates a duplicate entry was not found
	  Private Const NoMRUs = -1     'Indicates no MRUs are currently defined
	
	  Private MRUCount As Long      'Maintains a count of MRUs defined
	
	  Private Sub Form_Load()
	     ' Initialize the count of MRUs
	     MRUCount = NoMRUs
	     
	     ' Call sub to retrieve the MRU filenames
	     GetMRUFileList
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	     ' Call sub to save the MRU filenames
	     SaveMRUFileList
	  End Sub
	
	  Private Sub mnuMRU_Click(Index As Integer)
	     ' Call sub to reorder the MRU list
	     ReorderMRUList mnuMRU(Index).Caption, CLng(Index)
	  End Sub
	
	  Private Sub mnuOpen_Click()
	     ' Show the file open common dialog
	     Me.CommonDialog1.ShowOpen
	     
	     ' Call sub to add this file as an MRU
	     AddMRUItem Me.CommonDialog1.FileName
	  End Sub
	
	  Private Sub AddMRUItem(NewItem As String)
	     Dim result As Long
	        
	     ' Call sub to check for duplicates
	     result = CheckForDuplicateMRU(NewItem)
	     
	     ' Handle case if duplicate found
	     If result <> NotFound Then
	        ' Call sub to reorder MRU list
	        ReorderMRUList NewItem, result
	     Else
	        ' Call sub to add new item to MRU menu
	        AddMenuElement NewItem
	     End If
	  End Sub
	
	  Private Function CheckForDuplicateMRU(ByVal NewItem As String) As Long
	     Dim i As Long
	     
	     ' Uppercase newitem for string comparisons
	     NewItem = UCase$(NewItem)
	     
	     ' Check all existing MRUs for duplicate
	     For i = 0 To MRUCount
	        If UCase$(Me.mnuMRU(i).Caption) = NewItem Then
	           ' Duplicate found, return the location of the duplicate
	           CheckForDuplicateMRU = i
	           
	           ' Stop searching
	           Exit Function
	        End If
	     Next i
	     
	     ' No duplicate found, so return -1
	     CheckForDuplicateMRU = -1
	  End Function
	
	  Private Sub mnuQuit_Click()
	     ' Close the program
	     Unload Me
	  End Sub
	
	  Private Sub AddMenuElement(NewItem As String)
	     Dim i As Long
	     
	     ' Check that we will not exceed maximum MRUs
	     If (MRUCount < (MaxMRU - 1)) Or (MaxMRU = -1) Then
	        'Increment the menu count
	        MRUCount = MRUCount + 1
	        
	        ' Check if this is the first item
	        If MRUCount <> 0 Then
	           ' Add a new element to the menu
	           Load mnuMRU(MRUCount)
	        End If
	        
	        ' Make new element visible
	        mnuMRU(MRUCount).Visible = True
	     End If
	     
	     ' Shift items to maintain most recent to least recent
	     For i = (MRUCount) To 1 Step -1
	        ' Set the captions
	        mnuMRU(i).Caption = mnuMRU(i - 1).Caption
	     Next i
	     
	     ' Set caption for new item
	     mnuMRU(0).Caption = NewItem
	  End Sub
	
	  Private Sub ReorderMRUList(DuplicateMRU As String, DuplicateLocation As Long)
	     Dim i As Long
	     
	     ' Move entries previously "more recent" than the
	     ' duplicate down one in the MRU list
	     For i = DuplicateLocation To 1 Step -1
	        mnuMRU(i).Caption = mnuMRU(i - 1).Caption
	     Next i
	     
	     ' Set caption of newitem
	     mnuMRU(0).Caption = DuplicateMRU
	  End Sub
	
	  Private Sub GetMRUFileList()
	     Dim i As Long           'Loop control variable
	     Dim result As String    'Name of MRU from registry
	     
	     ' Loop through all entries
	     Do
	        ' Retrieve entry from registry
	        result = GetSetting(App.Title, "MRUFiles", Trim$(CStr(i)), "")
	        
	        ' Check if a value was returned
	        If result <> "" Then
	           ' Call sub to additem to MRU list
	           AddMRUItem result
	        End If
	        
	        ' Increment counter
	        i = i + 1
	     Loop Until (result = "")
	  End Sub
	
	  Private Sub SaveMRUFileList()
	     Dim i As Long           ' Loop control variable
	     
	     ' Loop through all MRU
	     For i = 0 To MRUCount
	        ' Write MRU to registry with key as it's position in list
	        SaveSetting App.Title, "MRUFiles", Trim$(CStr(i)), mnuMRU(i).Caption
	     Next i
	  End Sub
	
	6. Save and run the sample.
	
	7. From the File menu, select Open, and choose any file. Repeat this step
	  several times and you can see the Most Recently Used (MRU) File List in the
	  File menu.
	
	Each file you select appears, in order of most recently selected, as a menu item
	under the File menu. If you select the same file twice, it only appears once in
	the list. If you select it the second time, it should move to the top of the
	list. Picking one of these items from the File menu also moves it to the top of
	the MRU list.
	
	Note that there is a constant named MaxMRU. This constant defines the maximum
	number of items that appear as recent files on the File menu. In the sample code
	above, this value is set to 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlgFileO kbMenu kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
