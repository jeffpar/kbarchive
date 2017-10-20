---
layout: page
title: "Q193424: BUG: Excel 97 Menus Fail with In-Place Activation from MDI Child"
permalink: /kb/193/Q193424/
---

## Q193424: BUG: Excel 97 Menus Fail with In-Place Activation from MDI Child

{% raw %}

	Article: Q193424
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Excel worksheets are used as embedded objects on MDI Child forms in Visual
	Basic, the Excel menus that appear for in-place activation will either not
	respond or will generate an Invalid Page Fault when selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	There are two ways to reproduce the problem. The first method is to use the
	Olecont.vbp sample shipped with Visual Basic 5.0. If you only have Visual Basic
	6.0 installed, use the second method.
	
	Method 1: Use the Olecont.vbp Sample
	------------------------------------
	
	1. Start Visual Basic and open the sample project Olecont.vbp. By default this
	  project is located in the following folder:
	
	  Program Files\DevStudio\VB\Samples\PGuide\olecont
	
	2. Press the F5 key to run the project.
	
	3. Select New from the File menu.
	
	4. In the Insert Object DialogBox, select Create New and "Microsoft Excel
	  Worksheet" under Object Type.
	
	5. Repeat steps 3 and 4 so that you have two MDI children with embedded
	  worksheets.
	
	6. Put some data in some cells on both worksheets.
	
	7. Select a cell on the 2nd worksheet. From the Edit menu, select Clear and then
	  All.
	
	8. Repeat step 7 with the first worksheet. The menu commands do not react and
	  cells are not cleared. If you choose some other menu items, they are either
	  ignored or cause an IPF and shut down the program.
	
	Method 2: Create New Standard EXE Project
	-----------------------------------------
	
	1. Create a Standard EXE project in Visual Basic. Form1 is created default.
	
	2. Set Form1's MDIChild property to True.
	
	3. Place an instance of the OLE control on Form1. In the Insert Object
	  DialogBox, select Create New and "Microsoft Excel Worksheet" under Object
	  Type.
	
	4. Add a new form (Form2) and repeat steps 2 and 3 for Form2.
	
	5. Add an MDIForm (MDIForm1) to the project and paste the following code in to
	  MDIForm1:
	
	        Private Sub MDIForm_Load()
	           form1.show
	           form2.show
	        End Sub
	
	6. Select Project1 Properties from the Project menu and set the Startup Object
	  as MDIForm1.
	
	7. Press the F5 key to run the project.
	
	8. Double-click in Worksheet on Form2 and enter some numbers in some cells.
	
	9. Repeat step 8 for Form1.
	
	10. Switch back to Form2 and, from the Edit menu, select Clear and then select
	  All.
	
	11. Repeat step 10 for Form1. On one of the forms, the command works but on the
	  other form, the command fails to respond.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191615 BUG: Menu Disabled in Application Activated Using OLE Control
	
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp500bug kbVBp600bug kbActiveX kbExcel kbOLE
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbExcel97Search kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0,97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
