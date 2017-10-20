---
layout: page
title: "Q142829: BUG: DBGrid Align Before Retrieve Fields Causes Hidden Data"
permalink: /kb/142/Q142829/
---

## Q142829: BUG: DBGrid Align Before Retrieve Fields Causes Hidden Data

{% raw %}

	Article: Q142829
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Alignment property of a column in a DBGrid control at design- time,
	before selecting Retrieve Fields, results in the grid not showing any data when
	the application is run.
	
	RESOLUTION
	==========
	
	At design time, select Retrieve Fields from the custom control property dialog
	box. Any changes made to the Alignment properties of columns in the grid will no
	longer cause this problem. If the DatabaseName and RecordSource properties of
	the data control are not known until the program is run, using Retrieve Fields
	won't be an option. In this case, just set the Alignment property of the
	column(s) in question at run time, like this:
	
	     DBGrid1.Columns(0).Alignment = 2      'select center alignment
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of the article. We are researching the problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic.
	
	2. From the File menu, choose New Project.
	
	3. Click the DBGrid button in the Toolbox and drag a new DBGrid control onto the
	  form.
	
	4. Double click the data control button in the Toolbox to add a data control to
	  the project.
	
	5. Set the following properties of the data control:
	
	     DatabaseName: path to your vb directory\biblio.mdb
	     RecordSource: Authors
	
	6. Set the DataSource property of the DBGrid control to Data1.
	
	7. Right-click the DBGrid control and select 'Properties...' to display the
	  DBGrid's property dialog box.
	
	8. Click the Columns tab, and change the Alignment property of the first column
	  to '2 - Center'. Press OK to keep changes.
	
	9. From the Run menu, choose Start (ALT, R, S) or press the F5 key. The
	  application will start and the DBGrid will be displayed with the text
	  insertion icon in the center of the first cell. However, no data will be
	  visible. Printing out the contents of a cell's Text property gives an empty
	  string. Stopping the program, selecting 'Retrieve Fields', and starting again
	  fixes the problem.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
