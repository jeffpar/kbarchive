---
layout: page
title: "Q153549: BUG: DataControl Doesn't Send Notifications at Design Time"
permalink: /kb/153/Q153549/
---

## Q153549: BUG: DataControl Doesn't Send Notifications at Design Time

{% raw %}

	Article: Q153549
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBkbbuglist
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
	
	Visual Basic 4.0's Data Control does not send notifications to its clients when
	the RecordSource property is changed. Close the form containing the Datacontrol;
	then open it again. Or run the program, and go back into the IDE. The correct
	list of fields will now show up in the Listfield property of the DBList control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Add a Data control and a DBList control to a new form in a new project in
	  Visual Basic 4.0.
	
	2. Set the Database name property of the DataControl to biblio.mdb and the
	  RecordSource property of the Data control to the Authors table.
	
	3. Set the Datasource property of the DBList to Data1 and the ListField property
	  to author.
	
	4. Change the Recordsource property of DataControl to the Titles table.
	
	5. Go back to the DBList control, and click the pick list button of the
	  Listfield property. You will not see the new fields for the new table.
	
	NOTE: The Remote DataControl works correctly in this respect.
	
	Additional query words: 4.00 vb4win vb4all vbctrl
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVB kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
