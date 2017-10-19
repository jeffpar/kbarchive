---
layout: page
title: "Q161183: HOWTO: Use the Pinnacle Graph Control to Graph Data"
permalink: /kb/161/Q161183/
---

## Q161183: HOWTO: Use the Pinnacle Graph Control to Graph Data

	Article: Q161183
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop kbAutomation kbvfp500
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to use the Pinnacle Publishing Graph ActiveX control
	that ships with Visual Basic. The Pinnacle Graph control is available in a 16-
	or 32-bit version.
	
	MORE INFORMATION
	================
	
	This example uses the Pinnacle Graph Control that ships with Visual Basic 4.0.
	In order to use the Pinnacle Graph Control, it must first be properly
	registered. For more information about registering controls, please see the
	Microsoft Knowledge Base article referenced below.
	
	In Visual FoxPro, perform the following steps:
	
	1. Add the Pinnacle Graph ActiveX control. On the Tools menu, click Options, and
	  click the Controls tab. Click ActiveX controls and select Pinnacle-BPS Graph
	  Control.
	
	2. Create a new local view using the TestData!Employee table.
	
	3. Add the field Count(*) to the Available fields Expression text box.
	
	4. Click the Group By tab and add Employee.City
	
	5. Save the local view as "Group by City."
	
	6. Create a new form and add the Pinnacle Graph Control from the ActiveX
	  controls. Size the Graph to accordingly. The default name of the control is
	  OleControl1.
	
	7. Set the Visible property of the OleControl1 to .F.
	
	8. Add the local view "Group by City" in the DataEnvironment of the form.
	
	9. Add a command button. Set the name property to cmdGraph with the caption set
	  to Graph.
	
	10. In the Click event of cmdGraph add the following code:
	
	         WITH thisform.Olecontrol1
	           .NumPoints = reccount()
	           .NumSets = 1
	           .Autoinc = 1
	           .GraphTitle = "Employees by City"
	           .Labels = 1
	           .FontUse = 2
	           .FontSize = 200
	         ENDWITH
	
	         GO TOP
	         * Add the Data for each bar
	         DO WHILE !EOF()
	            ThisForm.OleControl1.GraphData = cnt
	            SKIP
	         ENDDO
	
	         GO TOP
	         * Add the label for each bar
	         DO WHILE !EOF()
	            ThisForm.OleControl1.LabelText = City
	         SKIP
	         ENDDO
	
	         WITH ThisForm.OleControl1
	            .ThisSet = 1
	            .GraphType = 4
	            .DrawMode = 2
	            .Visible = .T.
	         ENDWITH
	
	11. Run the form and click the command button.
	
	REFERENCES
	==========
	
	For more information about registering controls, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q146219 How To Register an ActiveX Control (.ocx) Manually
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbinterop kbAutomation kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Issue type        : kbhowto
	
	=============================================================================
	
