---
layout: page
title: "Q189484: SAMPLE: SCRIPTEX.EXE Uses the ScriptControl with Visual Basic"
permalink: /kb/189/Q189484/
---

## Q189484: SAMPLE: SCRIPTEX.EXE Uses the ScriptControl with Visual Basic

{% raw %}

	Article: Q189484
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbCtrl kbScript kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ScriptEx.exe is a sample that demonstrates how scripting can be done from a
	Visual Basic application. The sample is a spreadsheet application for which
	macros can be written.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Scriptex.exe
	  (http://download.microsoft.com/download/vb50pro/samp13/1/WIN98/EN-US/Scriptex.exe)
	
	Release Date: SEPT-10-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting file, the following files are expanded:
	
	frmGrid.frm ' The main form
	clsExcel.cls ' A wrapper class around grid
	prjScrpt.vbp ' Main project
	ReadMe.txt ' ReadMe file that explains the project
	
	How to Use This Sample
	----------------------
	
	1. Open prjScrpt.vbp in the Visual Basic 5.0 design environment and run the
	  application.
	
	  The form displays a grid in which values can be entered. The lower-left part
	  is a debug window, in which individual statements can be tested. It contains
	  a project explorer that displays the names of modules and macros.
	
	2. By default, a global module and Macro1 are created. Double-click on Macro1 in
	  the Treeview to edit the code.
	
	3. The edit window shows the details of Macro1. In the Textbox, paste the
	  following code:
	
	        Sub Macro1()
	           s = "This is macro1"
	           MsgBox s
	        End Sub
	
	4. Click the "Save" button to save your changes. Click the "Run" button to
	  execute Macro1.
	
	5. In the debug window, click on the ComboBox, and then enter the following
	  text:
	
	  Macro1
	
	6. Press the ENTER key to execute Macro1 and note that only macros in the Global
	  Module can be executed from the debug window.
	
	7. Individual lines can be executed and evaluated by using "ExecuteStatement"
	  and "Eval" commands. Type the following text in the debug window and press
	  the ENTER key.
	
	  x = 5
	
	  Now type the following text in the debug window and press Enter.
	
	  ?x
	
	  The value of x is displayed. Experiment with executing individual statements.
	
	8. Until now, all the code was written in a Global module. Macros can also be
	  added to user-defined modules. Right-click the Project-Explorer and select
	  "Add Module." Enter the module name as "MyModule."
	
	9. Right-click on MyModule in Project Explorer and select "Add Macro." Enter the
	  macro name as "Echo."
	
	10. Double-click "Echo." Add the following in the code window:
	
	        Sub echo(sIn)
	           MsgBox "Your input was " & sIn
	        End Sub
	
	11. Click save and then double-click on "echo" in the project window. The
	  TextBox displays the attributes of the subroutine.
	
	12. Select the run button. Enter some value for the input parameter. The
	  MessageBox displays the parameter.
	
	13. The Script control can access the host's objects by using the "Add Object"
	  method. In this sample, the clsExcel is exported to the script control, and
	  therefore, the properties of clsExcel can be accessed by the script control.
	  Add a new macro named "MyAdd" to your module.
	
	14. Double-click on "MyAdd" to see code window. Type the following code:
	
	        Sub MyAdd()
	           ' the 0 forces Integer addition
	           cells(1,3) = 0 + cells(1,1) + cells(1,2)
	        End Sub
	
	15. Click save, and then click on "View Sheet." In cell(1,1) and cell(1,2), type
	  a few Integer values.
	
	16. Right-click on "MyAdd." In the pop-up menu, select "run macro." The macro
	  will add the first 2 cells and will put the result into cell(1,3).
	
	REFERENCES
	==========
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 : INFO: Where to Obtain the Script Control
	
	Additional query words: Scriptex codeobject procedures scriptcontrol AddCode
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbCtrl kbScript kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
