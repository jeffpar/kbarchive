---
layout: page
title: "Q166142: PRB: Cannot Re-Choose &lt;None&gt; in Bug Property Sheet"
permalink: /kb/166/Q166142/
---

## Q166142: PRB: Cannot Re-Choose &lt;None&gt; in Bug Property Sheet

{% raw %}

	Article: Q166142
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Anomaly Tracking System, version 1.0, included with:
	   - Microsoft Visual Studio 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The property sheet portion of the Details tab of a record allows you to alter
	the settings of many properties. When entering or modifying a record in the
	Anomaly Tracking System (ATS), the Details tab of a record contains a property
	section with multiple pop-ups. After resetting the initial value of a property
	from <None> to another choice, <None> no longer appears as a choice
	on the pop-up.
	
	RESOLUTION
	==========
	
	To workaround this problem, a <None> option can be added into a property
	option group.
	
	Steps to Add a Value into a Property Option Group
	-------------------------------------------------
	
	1. Select Property Options Maintenance from the Tools menu in ATS.
	
	2. On the left side of the 'Property Options Maintenance dialog box, scroll to
	  the desired property.
	
	3. Click New to activate the Add/Edit Keywords Options dialog box.
	
	4. In the Name box type "<None>" (without the quotes).
	
	Note: When <None> is chosen for that particular option, the characters
	"<None>" are saved with the record.
	
	Using Validation Procedures, it is possible to store a .NULL. or any other value
	to the field to represent <None>.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Initially, property group options display <None> as the default choice.
	However, once you make a choice other than <None>, the <None> choice
	is no longer available.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new issue in ATS.
	
	2. On the property sheet of the Detail tab, change one of the property option
	  values to a value other than <None>.
	
	3. Drop-down the same pop-up and observe the available choices.
	
	Note: <None> is not available as a choice. There is not a way to undo the
	value selected for the property.
	
	REFERENCES
	==========
	
	ATS Help; search on "Adding Stored Procedures to ATS"
	
	Additional query words: 97 vstudio
	
	======================================================================
	Keywords          : kbtool kbvfp 
	Technology        : kbVSsearch kbAudDeveloper kbVS97Search
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
