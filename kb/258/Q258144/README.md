---
layout: page
title: "Q258144: HOWTO: Get a List of All Pinned Files from OLE Automation in VB"
permalink: /kb/258/Q258144/
---

## Q258144: HOWTO: Get a List of All Pinned Files from OLE Automation in VB

	Article: Q258144
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe OLE Automation does not expose any pinning functionality
	directly, so there is no direct way to tell if a file is pinned from OLE
	Automation. This article provides sample code to work around this problem and
	retrieve this information.
	
	MORE INFORMATION
	================
	
	The following sample assumes that you have a Microsoft Visual Basic project, and
	that when you want to get the path information, you call the CheckPaths routine.
	This sample can easily be modified to take a project as a parameter, or to do
	something other than output the results with Debug.Print.
	
	  ' Used to store VSSItem Objects.
	  Public objVSSObject As VSSItem
	  Public objVSSProject As VSSItem
	
	  ' This routine begins the printing of all items that are pinned.
	  Public Sub CheckPaths()
	      ' Set On Error routine.
	      On Error GoTo ErrHandler
	          
	      ' Used as a reference to the VSS database.
	      Dim objVSSDatabase As New VSSDatabase
	      
	      ' Used to store the VSS Username, password and SrcSafe.ini data.
	      Dim UserName As String
	      Dim SrcSafeIni As String
	      Dim Password As String
	      
	      ' Set up the username, password, database path.
	      UserName = "Admin"
	      Password = ""
	      SrcSafeIni = "C:\Program Files\Microsoft Visual Studio\Common\VSS60a\srcsafe.ini"
	      
	      ' Attempt to log into SourceSafe.
	      objVSSDatabase.Open SrcSafeIni, UserName, Password
	
	      ' Create VSS Database object and set current item to $/ (root project).
	      Set objVSSProject = objVSSDatabase.VSSItem("$/", False)
	      
	      ' Set the current project.
	      objVSSDatabase.CurrentProject = objVSSProject.Spec
	
	      ' Check for pinned files in this project.
	      Call Links(objVSSProject)
	      
	      ' Iterate through all items in current project (false means ignore deleted items).
	      For Each objVSSObject In objVSSProject.Items(False)
	          ' Check to see what type of object we have.
	          Select Case objVSSObject.Type
	                      
	              ' Current item is a project.
	              Case 0
	                  ' Call procedure to check for existing sub projects of this
	                  ' project.
	                  Call CheckSubProjects(objVSSObject)
	              
	              ' Current Object is a file.
	              Case 1
	                  ' Do nothing for files.
	
	              ' Unknown object type.
	              Case Else
	                  MsgBox ("Unknown object type encountered!")
	          End Select
	      Next
	      
	      ' Inform the user that we are finished.
	      MsgBox "All Done"
	      
	      Set objVSSProject = Nothing
	      Set objVSSObject = Nothing
	      Set objVSSDatabase = Nothing
	      Exit Sub
	
	  ErrHandler:
	          
	      Response = MsgBox(Err.Description, vbExclamation, "VSS")
	      Err.Clear
	      Set objVSSProject = Nothing
	      Set objVSSObject = Nothing
	      Set objVSSDatabase = Nothing
	  End Sub
	
	  ' This routine is passed a project item as a parameter. It checks for existing
	  ' sub projects in the passed project and calls the links function to check for
	  ' pinned files in this project.
	  Public Sub CheckSubProjects(objVSSProject As VSSItem)
	      Dim i As Integer
	
	      ' Check for pinned files in this project.
	      Call Links(objVSSProject)
	      
	      ' Iterate through each item of the project (false means ignore deleted).
	      For Each objVSSObject In objVSSProject.Items(False)
	          ' Check to see what type of object we have.
	          Select Case objVSSObject.Type
	                      
	              ' Current item is a project.
	              Case 0
	                  i = DoEvents
	                  Call CheckSubProjects(objVSSObject)
	              
	              ' Current Object is a file.
	              Case 1
	                  ' Do nothing for files
	              
	              ' Unknown object type.
	              Case Else
	                  MsgBox ("Unknown object type encountered!")
	          End Select
	      Next
	  End Sub
	
	  Private Sub Links(objVSSFile As VSSItem)
	      Dim objVSSVersion As VSSVersion
	      Dim UnpinArray() As String
	      Dim i As Integer
	      Dim j As Integer
	      Dim found As Boolean
	      
	      ' Set up array to store each time we get an unpin event.
	      ReDim UnpinArray(40)
	      i = 1
	      found = False
	      
	      ' Loop through the projects events to see if we find a pin or unpin event.
	      For Each objVSSVersion In objVSSFile.Versions
	          If Left(objVSSVersion.Action, 6) = "Pinned" Then
	              ' Check whether we already have an unpin event for this file.
	              ' Because we are going through history from most recent to oldest,
	              ' if we don't have an unpin event now, the file is pinned.
	              For j = 1 To i
	                  If InStr(1, objVSSVersion.Action, UnpinArray(j), vbTextCompare) > 0 And UnpinArray(j) <> "" Then
	                      ' Found an unpin event; the file is not pinned.
	                      found = True
	                  End If
	              Next
	
	              ' If we didn't find an unpin event, print out the pin event that has the
	              ' filename and version it is pinned at.
	              If found = False Then
	                  Debug.Print objVSSVersion.Action
	              End If
	          ElseIf Left(objVSSVersion.Action, 8) = "Unpinned" Then
	              ' Store the unpin event in our array.
	              UnpinArray(i) = Right(objVSSVersion.Action, Len(objVSSVersion.Action) - 10)
	              i = i + 1
	          End If
	      Next
	
	      Set objVSSVersion = Nothing
	  End Sub
	
	REFERENCES
	==========
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/techart/vssauto.htm
	
	  Q257989 HOWTO: Pin and Unpin Files in SourceSafe from OLE Automation in
	  Visual C++
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500 kbSSafe600 kbDSupport kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
