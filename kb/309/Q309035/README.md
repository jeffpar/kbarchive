---
layout: page
title: "Q309035: BETA-INFO: &#91;SSAFE&#93; - Saving Web Form Generates 3 Dialogs"
permalink: /kb/309/Q309035/
---

## Q309035: BETA-INFO: &#91;SSAFE&#93; - Saving Web Form Generates 3 Dialogs

{% raw %}

	Article: Q309035
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe kbSrcControl
	Last Modified: 10-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you save a Web form in a project under Visual SourceSafe control, three
	"Check Out On Save" dialog boxes are displayed, one for each resource file in
	use: first for the .aspx file, then for the .aspx.vb file, and last, for the
	.aspx.resx file.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Web project in Visual Studio .NET that includes a Web form.
	
	2. Check the whole project into Visual SourceSafe.
	
	3. Select the Web form, then click Save.
	
	You will be prompted with three "Check Out On Save" dialog boxes. If multiple Web
	forms are saved, three dialog boxes are invoked for each form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe kbSrcControl 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
