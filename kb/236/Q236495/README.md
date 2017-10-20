---
layout: page
title: "Q236495: MOD2000: VSS Login Allows Access with a Blank UserName from VBE"
permalink: /kb/236/Q236495/
---

## Q236495: MOD2000: VSS Login Allows Access with a Blank UserName from VBE

{% raw %}

	Article: Q236495
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta modSSafe
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	You are able to log on to Microsoft Visual SourceSafe by using a blank username
	from a Visual Basic for Applications project in Microsoft Excel 2000 and
	Microsoft Word 2000. After you log on, you are able to add, check out, and check
	in projects. This behavior occurs even when the SourceSafe Administrator is
	password protected.
	
	CAUSE
	=====
	
	When you click "Add Project to SourceSafe" or Run SourceSafe in the Visual Basic
	Editor, the OK button on the Visual SourceSafe Login dialog box is available if
	the Username box does not contain any text.
	
	RESOLUTION
	==========
	
	To prevent this behavior, disable the "Use network name for automatic user log
	in" feature of Visual SourceSafe. To do so, follow these steps:
	
	1. Open Visual SourceSafe 6.0 Administrator.
	
	2. On the Tools menu, click Options, and then click the General tab.
	
	3. Click to clear the "Use network name for automatic user log in" check box.
	
	After you implement this workaround, you receive the following message if you
	leave the Username box empty.
	
	  User "" not found
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior:
	
	1. Open a new Excel workbook.
	
	2. On the Tools menu, point to Macro, and then click Visual Basic Editor.
	
	3. On the File menu, click Save <projectname>, and in the Save As dialog
	  box, click Save.
	
	4. On the Add-ins menu, point to VBA Source Code Control, and then click Add
	  Project to SourceSafe.
	
	NOTE: If you do not get the choice for VBA Source Code Control on the Add-ins
	menu, first click Add-in Manager on the Add-ins menu, select VBA Source Code
	Control in the list, click to select the Loaded/Unloaded check box, and then
	click OK.
	
	5. Delete the name in the Username box, and then click OK. Note that nothing
	  happens.
	
	Additional query words: pra OFF2000
	
	======================================================================
	Keywords          : kbdta modSSafe 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
