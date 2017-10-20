---
layout: page
title: "Q149776: BUG: BACKSPACE Key Doesn't Reset Matching on DBList or DBCombo"
permalink: /kb/149/Q149776/
---

## Q149776: BUG: BACKSPACE Key Doesn't Reset Matching on DBList or DBCombo

{% raw %}

	Article: Q149776
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the BACKSPACE key, after typing a search argument in a DBList or
	DBCombo control, does not clear the search argument when the MatchEntry property
	is set to 1-Extended Matching as shown in the online Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	Use the HOME key to move to the top of the list and to reset matching.
	
	MORE INFORMATION
	================
	
	The online Help topic, Implementing the DBList and DBCombo controls, states that
	the search argument is cleared when the user presses the BACKSPACE key. This
	does not occur.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start 32-bit Visual Basic 4.0. If it is already running, on the File menu,
	  click New Project.
	
	2. Add a Data and a DBList control to the Form1 form.
	
	3. Set the indicated properties of the following controls:
	
	  Control     Default Name   Property           Value
	  -------------------------------------------------------------------
	
	  Data        Data1          DatabaseName       BIBLIO.MDB
	                             RecordSource       Authors
	
	  DBList      DBList1        DataSource         Data1
	                             RowSource          Data1
	                             BoundColumn        Author
	                             DataField          Author
	                             ListField          Author
	                             MatchEntry         1-Extended Matching
	
	4. On the Run menu, click Start, or press F5. Type a character and note that the
	  first author name matching the character is highlighted. When you press the
	  BACKSPACE key, nothing happens.
	
	Additional query words: kbVBp400bug kbVBp600bug kbdse kbDSupport kbVBp DBList DBCombo MatchEntry kbControl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
