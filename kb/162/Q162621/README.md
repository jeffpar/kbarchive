---
layout: page
title: "Q162621: BUG: GetSetting Causes GP Fault in Vba2.dll"
permalink: /kb/162/Q162621/
---

## Q162621: BUG: GetSetting Causes GP Fault in Vba2.dll

{% raw %}

	Article: Q162621
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the GetSetting Function in Visual Basic 4.0, 16-bit, you may
	receive a General Protection Fault in Module Vba2.dll at 0011:360C. This error
	is likely to occur if you use an uninitialized, variable-length string as the
	argument for the default value of GetSetting.
	
	RESOLUTION
	==========
	
	To resolve the problem, use a fixed-length string or assign a value to the
	string. For example, modify the Load event code of Form1 in step 2 of the Steps
	to Reproduce Problem section of this article to the following:
	
	     Dim DefaultValue As String
	     DefaultValue = ""
	     Call GetSetting ("MyINI", "SectionName", "KeyValue", DefaultValue)
	
	-or-
	
	     Dim DefaultValue As String * 40
	     Call (GetSetting "MyINI", "SectionName", "KeyValue", DefaultValue)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Visual Basic 4.0, 16-bit Edition. Form1 is created by default.
	
	2. In the Load event for Form1, place the following lines of code:
	
	     Dim DefaultValue As String
	     Call GetSetting ("MyINI", "SectionName", "KeyValue", DefaultValue)
	
	3. Press the F5 key to run the project.
	
	4. A General Protection fault occurs in Module Vba2.dll at 0011:360C.
	
	Additional query words: kbVBp400bug kbdss kbDSupport kbVBp kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
