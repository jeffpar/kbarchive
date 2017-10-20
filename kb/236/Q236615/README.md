---
layout: page
title: "Q236615: HOWTO: Automate MapPoint 2000 from Visual Basic"
permalink: /kb/236/Q236615/
---

## Q236615: HOWTO: Automate MapPoint 2000 from Visual Basic

{% raw %}

	Article: Q236615
	Product(s): Microsoft Automap
	Version(s): 1.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbVBp500 kbVBp600 kbGrpDSO kbDSupport
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to automate Microsoft MapPoint 2000 from Microsoft
	Visual Basic to find an address and add a pushpin at that address.
	
	NOTE: The sample code included in this article only works with MapPoint 2000. The
	Visual Basic Object Model has changed in MapPoint 2001.
	
	MORE INFORMATION
	================
	
	Building the Automation Sample
	------------------------------
	
	1. Start Visual Basic and create a new standard EXE project. Form1 is created by
	  default.
	
	2. Add a Command button to Form1.
	
	3. Click References on the Project menu to bring up the References dialog box.
	  Add a reference to the Microsoft MapPoint 1.0 Object Library. Click OK to
	  close the References dialog box.
	
	4. Insert the following code in the code window for Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	    ' Declare variables
	    Dim oApp As MapPoint.Application
	    Dim oMap As MapPoint.Map
	    Dim oPush As MapPoint.Pushpin
	    
	    ' Create an instance of MapPoint.
	    Set oApp = CreateObject("MapPoint.Application")
	
	    ' Add a new map.
	    Set oMap = oApp.NewMap
	
	    ' Find a specific address.
	    oMap.Find ("1 Microsoft Way, Redmond, WA")
	
	    ' Select the pushpin at the above address.
	    Set oPush = oMap.FindPushpin("1 Microsoft Way")
	
	    ' Go to that pushpin, change its name, and highlight it.
	    oPush.GoTo
	    oPush.Name = "Microsoft"
	    oPush.Highlight = True
	
	    ' Release references.
	    Set oPush = Nothing
	    Set oMap = Nothing
	    Set oApp = Nothing
	  End Sub
	
	5. Press the F5 key to run the project. When you press the Command button, you
	  will see MapPoint start and put a highlighted pushpin at Microsoft.
	
	REFERENCES
	==========
	
	For more information on Office Automation, please visit the following Microsoft
	Office Development support site:
	
	  http://support.microsoft.com/support/officedev/
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mark Durrett, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAutomation kbVBp500 kbVBp600 kbGrpDSO kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbHomeProdSearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbMapptSearch kbMapPoint2000
	Version           : :1.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
