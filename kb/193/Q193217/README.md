---
layout: page
title: "Q193217: BUG: Editing Compiled Resource Causes Them to Disappear"
permalink: /kb/193/Q193217/
---

## Q193217: BUG: Editing Compiled Resource Causes Them to Disappear

{% raw %}

	Article: Q193217
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbEditor kbide kbResource kbVC500bug kbVC600bug kbGrpDSTools
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Strings in a combo box disappear when the executable is opened as a resource in
	Visual Studio.
	
	RESOLUTION
	==========
	
	Place all strings in a string table and dynamically load string resources.
	
	1. From the File menu, select Open.
	
	2. In the Open dialog box, in the Open as dropdown, select Resources.
	
	3. Browse to the executable file (.exe, .dll, etc.) you wish to open and click
	  OK.
	
	4. In the resource editor's tree view which appears, right-click the top node.
	  Select Properties.
	
	5. Select the Enable MFC features check box .
	
	You may now open combo boxes with string data and edit them using the Resource
	Editor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a MFC dialog-based application.
	
	2. Add values to the combo box (String 1, String 2, String 3). To add strings:
	
	  a. Click Properties on the combo box menu.
	
	  b. Click the Data tab.
	
	  c. Enter data in box.
	
	NOTE: Each data entry must be followed by CTRL+ENTER to separate the items.
	
	3. Build the exe.
	
	4. Open the exe as a resource.
	
	5. Save the exe.
	
	6. Run the exe and click the drop down.
	
	RESULTS: The values have disappeared.
	
	Additional query words: combobox dropdown
	
	======================================================================
	Keywords          : _IK920 kbEditor kbide kbResource kbVC500bug kbVC600bug kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
