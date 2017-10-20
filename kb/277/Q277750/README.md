---
layout: page
title: "Q277750: HOWTO: Set a Pushpin in MapPoint 2001 with the VB OLE Control"
permalink: /kb/277/Q277750/
---

## Q277750: HOWTO: Set a Pushpin in MapPoint 2001 with the VB OLE Control

{% raw %}

	Article: Q277750
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbVBp kbVBp500 kbVBp600 kbDSupport kbCodeSnippet
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Visual Basic OLE control to find an
	address and set a pushpin for that address in MapPoint 2001.
	
	MORE INFORMATION
	================
	
	1. On a computer with MapPoint 2001 installed, create a new Visual Basic
	  Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click References.
	
	3. Click to select the Microsoft MapPoint Object Library 8.0 (North America)
	  check box, and then click OK.
	
	4. Add a Command button to Form1.
	
	5. Add an OLE control to Form1.
	
	6. When the Insert Object dialog box appears, click Microsoft MapPoint North
	  America.
	
	7. In the code window of Form1, paste the following code:
	
	  Dim objApp As MapPoint.Application
	  Dim objMap As MapPoint.Map
	  Dim objLoc As MapPoint.Location
	  Dim objPushpin as MapPoint.Pushpin
	
	  Private Sub Command1_Click()
	  ' Map a point in the OLE control.
	  ' Get the application object from the OLE control.
	  Set objApp = OLE1.object.Application
	  ' Put the OLE control in Edit mode.
	  OLE1.DoVerb (1)
	  ' Get the current map.
	  Set objMap = objApp.ActiveMap
	  ' Find an address.
	  Set objLoc = objMap.FindAddress("One Microsoft Way", "Redmond", "Washington", "98052", geoCountryUnitedStates)
	  ' Set a pushpin at the address.
	  Set objPushpin = objMap.AddPushpin(objLoc, "Microsoft")
	  ' Browse to the pushpin.
	  objPushpin.GoTo
	  ' Highlight the pushpin.
	  objPushpin.Highlight = True
	  ' Set the focus back to the command button.
	  ' Take OLE control out of Edit mode.
	  Command1.SetFocus
	  End Sub
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	  ' Clear variables before you unload the form.
	  Set objMap = Nothing
	  Set objApp = Nothing
	  Set objLoc = Nothing
	  Set objPushpin = Nothing
	  End Sub
	
	8. Run the project.
	
	9. Click Command1.
	
	A pushpin in MapPoint marks the address you specified.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbVBp kbVBp500 kbVBp600 kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbMapptSearch kbMapPoint2001
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
