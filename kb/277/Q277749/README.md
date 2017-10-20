---
layout: page
title: "Q277749: HOWTO: Set a Pushpin in MapPoint 2001 Using Automation"
permalink: /kb/277/Q277749/
---

## Q277749: HOWTO: Set a Pushpin in MapPoint 2001 Using Automation

{% raw %}

	Article: Q277749
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbVBp kbVBp500 kbVBp600 kbDSupport kbCodeSnippet
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use MapPoint 2001 to find an address and set a
	pushpin at that address.
	
	MORE INFORMATION
	================
	
	To find an address and set a pushpin at that address:
	
	1. On a computer with MapPoint 2001 installed, create a new Visual Basic
	  Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click References.
	
	3. Click to select the Microsoft MapPoint Object Library 8.0 (North America)
	  check box, and then click OK.
	
	4. On Form1, add a Command button.
	
	5. In the code window of Form1, paste the following code:
	
	  Option Explicit
	
	  Dim objApp As MapPoint.Application
	  Dim objMap As MapPoint.Map
	  Dim objLoc As MapPoint.Location
	  Dim objPushpin as MapPoint.Pushpin
	
	  Private Sub Command1_Click()
	  ' Automate MapPoint.
	  ' Start MapPoint 2001.
	  Set objApp = CreateObject("mappoint.application")
	  ' Get the currently displayed map.
	  Set objMap = objApp.ActiveMap
	  ' Find an address.
	  Set objLoc = objMap.FindAddress("One Microsoft Way", "Redmond", "Washington", "98052", geoCountryUnitedStates)
	  ' Set a pushpin at the address.
	  Set objPushpin = objMap.AddPushpin(objLoc, "Microsoft")
	  ' Browse to the pushpin.
	  objPushpin.GoTo
	  ' Highlight the pushpin.
	  objPushpin.Highlight = True
	  ' Show MapPoint.
	  objApp.Visible = True
	  End Sub
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	  ' Clear the variables before you unload the form.
	  Set objMap = Nothing
	  Set objApp = Nothing
	  Set objLoc = Nothing
	  Set objPushpin = Nothing
	  End Sub
	
	6. Run the project.
	
	7. Click Command1.
	
	A pushpin in MapPoint marks the address you specified.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q236615 HOWTO: Automate MapPoint 2000 from Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbVBp kbVBp500 kbVBp600 kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbMapptSearch kbMapPoint2001
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
