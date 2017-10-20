---
layout: page
title: "Q242397: HOWTO: Add Subitems to a ListView Result View in Report Mode"
permalink: /kb/242/Q242397/
---

## Q242397: HOWTO: Add Subitems to a ListView Result View in Report Mode

{% raw %}

	Article: Q242397
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:1.1,1.2,6.0
	Operating System(s): 
	Keyword(s): kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Management Console, versions 1.1, 1.2 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to add subitems to a ListView Result View when a
	ScopePane item is viewed in Detail mode.
	
	MORE INFORMATION
	================
	
	Steps to Add Subitems to a ListView Result View in Report Mode
	--------------------------------------------------------------
	
	1. Launch Visual Basic and select a new SnapIn project from the New Project
	  dialog box.
	
	2. Open the SnapIn1 Designer through the Project Explorer window and insert a
	  new ListView Result View under the Static Node. By default, the ListView will
	  be named ListView1.
	
	3. View the properties of the new ListView Result View and insert two columns
	  using the Columns Headers tab. The Text and Key must have the same value.
	  Also, select Auto-Width.
	
	4. Open the SnapIn1 Designer code window and paste the following code:
	
	  Private Sub ResultViews_Initialize(ByVal ResultView As SnapInLib.ResultView)
	
	      With ResultView.ListView
	      
	          .ListItems.Add 1, , "Column 1"  ' same as Key field in ColumnHeader
	          .ListItems.Add 2, , "Column 2"  ' same as Key field in ColumnHeader
	      
	          ' add our subitems to the listview
	          .ListItems(1).ListSubItems.Add 1, , "Data 1" ' add data to the first row, column one
	          .ListItems(1).ListSubItems.Add 2, , "Data 2" ' add data to the first tow, column two
	          .ListItems(2).ListSubItems.Add 1, , "Data 3" ' add data to the second row, column one
	          .ListItems(2).ListSubItems.Add 2, , "Data 4" ' add data to the second tow, column two
	          
	      End With
	      
	  End Sub
	
	5. View the properties of the SnapIn (SnapIn1) and set the Default Result View
	  field to ListView1.
	
	6. Compile the project and start the Microsoft Management Console (MMC).
	
	7. Load the SnapIn in MMC and click the SnapIn1 Scope Item. The two columns
	  defined in the ListView Result View should be rendered in the Result View
	  window.
	
	8. Change the View Mode to Detail. The Result View will change into a Report
	  View. There will be two rows of data, each row containing two columns of
	  data.
	
	Additional query words: snapin designer mmc
	
	======================================================================
	Keywords          : kbMMC kbVBp600 kbGrpDSPlatform kbMMC110 kbDSupport kbMMC120 kbSnapIn 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbMMCSearch kbMMC110 kbMMC120
	Version           : WINDOWS:1.1,1.2,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
