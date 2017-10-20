---
layout: page
title: "Q257635: FIX: DataGrid Loses Focus After You Cancel AddNew"
permalink: /kb/257/Q257635/
---

## Q257635: FIX: DataGrid Loses Focus After You Cancel AddNew

{% raw %}

	Article: Q257635
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbVBp600bug kbDSupport kbADO250 kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After canceling adding a new record twice, if you click the last record the
	focus is set to the second to last record. Also, if you then try to edit the
	column value, the change is written to the last record. This occurs when there
	is a need to scroll the grid to see data.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Place a Microsoft ActiveX Data Objects (ADO) Data Control on the form. Make
	  sure that the source has several records, enough to require you to scroll.
	
	3. Place a Microsoft DataGrid Control on your form, and then bind the DataGrid
	  control to the ADO Data Control.
	
	4. Set the DataGrid's AllowAddNew property to TRUE.
	
	5. Run the project, scroll down the grid to the bottom, and then add a new
	  record.
	
	6. Enter a value into one of the columns.
	
	7. Press ESC twice to:
	
	   - Clear the field.
	
	     -and-
	
	   - Cancel the AddNew.
	
	8. The focus is on the last record as expected.
	
	9. Repeat the AddNew and Cancel.
	
	10. The focus is still on the last record as expected.
	
	11. Click a field in the last record. You will see that the field of the second
	  to the last record is highlighted.
	
	12. If you modify the field value, the value is written to the last record.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbVBp600bug kbDSupport kbADO250 kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO250 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
