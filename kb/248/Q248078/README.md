---
layout: page
title: "Q248078: BUG: VSSVersion Collection Does Not Give Filenames"
permalink: /kb/248/Q248078/
---

## Q248078: BUG: VSSVersion Collection Does Not Give Filenames

{% raw %}

	Article: Q248078
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500bug kbSSafe600bug _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When looping through the VSSVersions collection, the name of the file that the
	action is about is not readily available.
	
	RESOLUTION
	==========
	
	One workaround for the "Add" action is to compare the items in the project of
	the version in question with the previous version. Whatever file is in the
	current version and not in the previous version is the file that was added.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: This procedure uses Microsoft Visual Basic, but the same could be done in
	other languages.
	
	1. Create a standard EXE project in Visual Basic.
	
	2. Create a reference to the Microsoft SourceSafe 6.0 (or 5.0) library
	  (Ssapi.dll).
	
	3. Add a command button to Form1.
	
	4. Double-click the button.
	
	5. Paste the following code in the Command1_Click Sub:
	
	  Dim SSDB As New VSSDatabase
	  Dim SSItem As VSSItem
	  Dim TempItem As VSSItem
	  Dim oVersion As VSSVersion
	  Dim verDate As Date
	  Dim User As String
	  Dim Comment As String
	  Dim Action As String
	
	  ' Open SourceSafe database
	  ' NOTE: If your path to srcsafe.ini, username, and password information
	  '       differ from what is listed below, please adjust it accordingly.
	           
	
	  SSDB.Open "C:\Program Files\Microsoft Visual Studio\Common\VSS\srcsafe.ini", "Admin", ""
	      
	  ' Get project to search
	  Set SSItem = SSDB.VSSItem("$/Project_To_Retrieve_History")
	
	  ' Loop through the Versions collection getting each event
	  For Each oVersion In SSItem.Versions(VSSFlags.VSSFLAG_RECURSYES)
	      ' Get the action for the current version
	      Action = oVersion.Action
	          
	      ' Check what the action is and print out what we find.
	      If InStr(1, Action, "Added", vbTextCompare) > 0 Then
	          ' Get the VSSItem the version contains
	          Set TempItem = oVersion.VSSItem
	              
	          ' Get the date, username, and comment from the version item.
	          verDate = oVersion.Date
	          User = oVersion.UserName
	          Comment = oVersion.Comment
	              
	          ' Print out the item we have
	          Debug.Print "Added: " & TempItem.Name & " by " & User & " at " & Format(verDate, "General Date") & Comment
	      End If
	  Next
	
	6. Run the program.
	
	7. To implement the workaround mentioned above, paste the following (note that
	  this is more than just the Command1_Click Sub):
	
	  Dim SSDB As New VSSDatabase
	  Dim SSItem As VSSItem
	  Dim TempItem As VSSItem
	  Dim oVersion As VSSVersion
	  Dim verDate As Date
	  Dim User As String
	  Dim Comment As String
	  Dim Action As String
	  Dim tItem As VSSItem
	  Dim oItem As VSSItem
	  Dim bad As Boolean
	  Dim sTempItem As VSSItem
	
	  Private Sub Command1_Click()
	      ' Open SourceSafe database
	      ' NOTE: If your path to srcsafe.ini, username, and password information
	      '       differ from what is listed below, please adjust it accordingly.
	      SSDB.Open "C:\Program Files\Microsoft Visual Studio\Common\VSS\srcsafe.ini", "Admin", ""
	      
	      ' Get project to search
	      Set SSItem = SSDB.VSSItem("$/Project_To_Retrieve_History")
	      
	      ' Loop through the Versions collection getting each event
	      For Each oVersion In SSItem.Versions(VSSFlags.VSSFLAG_RECURSYES)
	          ' Get the action for the current version
	          Action = oVersion.Action
	          
	          ' Check what the action is and print out what we find.
	          If InStr(1, Action, "Added", vbTextCompare) > 0 Then
	              ' Get the VSSItem the current version contains
	              Set TempItem = oVersion.VSSItem
	              
	              ' Get the date, username, and comment from the version item.
	              verDate = oVersion.Date
	              User = oVersion.UserName
	              Comment = oVersion.Comment
	              
	              ' See if we can use the Items collection
	              If CheckItem = 1 Then
	                  ' If we have a project and the items collection has items, print out each item in the collection.
	                  ' We could have an items collection but have 0 items in it, so check for that case.
	                  If TempItem.Type = VSSItemType.VSSITEM_PROJECT And TempItem.Items.Count > 0 Then
	                      ' Get the previous version
	                      Set sTempItem = TempItem.Version(TempItem.VersionNumber - 1)
	                                          
	                      ' Loop through the items at this version
	                      For Each tItem In TempItem.Items
	                          bad = False
	
	                          ' Loop through the previous version
	                          For Each oItem In sTempItem.Items
	                              ' Check if the names are the same
	                              If oItem.Spec = tItem.Spec Then
	                                  ' Found the name, not the one we are looking for
	                                  bad = True
	                                  Exit For
	                              End If
	                          Next
	                          
	                          ' If this is the file added, print out the information
	                          If bad = False Then
	                              Debug.Print "Added: " & tItem.Name & " in " & TempItem.Name & " by " & User & " at " & Format(verDate, "General Date") & Comment<BR/>
	                          Exit For   
	                          End If
	                      Next
	                  Else
	                      ' Otherwise just print out the item we have
	                      Debug.Print "Added: " & TempItem.Name & " by " & User & " at " & Format(verDate, "General Date") & Comment
	                  End If
	              Else
	                  ' No items collection, just print out the item we have
	                  Debug.Print "Added: " & TempItem.Name & " by " & User & " at " & Format(verDate, "General Date") & Comment
	              End If
	          End If
	      Next
	  End Sub
	
	  '*****************************************************
	  ' Purpose:  Check to see if we can look at the Items
	  '           collection.  This keeps us from getting an
	  '           error from SourceSafe.
	  '
	  ' Inputs:   None
	  '
	  ' Returns:  1 if the Items collection exists and can be used.
	  '           0 if the Items collection does not exist.
	  '
	  '*****************************************************
	  Private Function CheckItem()
	      ' If we have a problem, go to the error handler
	      On Error GoTo ErrHandler
	      
	      ' Try to access the Items collection and see if we succeed or not
	      Dim i As Integer
	      i = TempItem.Items.Count
	      
	      ' It worked, so return 1
	      CheckItem = 1
	      Exit Function
	      
	  ErrHandler:
	      ' Return 0 - meaning there is a problem
	      CheckItem = 0
	  End Function
	
	8. Run the program.
	
	REFERENCES
	==========
	
	Visual SourceSafe 6.0 Automation
	(http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/techart/vssauto.htm)
	
	Additional query words: automation
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500bug kbSSafe600bug _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
