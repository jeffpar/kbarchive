---
layout: page
title: "Q197794: WD97: Existing Macros and AutoText Are Not Saved with New Form"
permalink: /kb/197/Q197794/
---

## Q197794: WD97: Existing Macros and AutoText Are Not Saved with New Form

{% raw %}

	Article: Q197794
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbtemplate kbautotext kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Macros and AutoText entries that you move from a startup or global template to a
	new location are not available to a form template.
	
	CAUSE
	=====
	
	Macros and AutoText that have been saved in other templates are not copied to
	the form template when they are used by a form field. As a result, the macros
	and AutoText entries will not be available to the form template if you move the
	form from the location of the templates containing the macros or AutoText
	entries.
	
	MORE INFORMATION
	================
	
	Word makes macros and AutoText from multiple templates available globally when
	you place templates in the location designated by the Startup option. (To locate
	the Startup option, click Options on the Tools menu, select the File Locations
	tab, and find Startup in the File Types list.)
	
	When you develop a template with form fields, you can select macros for the form
	field On Entry and On Exit macros and AutoText entries for the form field Help
	text from these other templates. However, the macros and AutoText that you
	select will not be stored with your form template.
	
	If you want the form template to be portable, you should store all macros and
	AutoText with the form template.
	
	Copying AutoText and Macros Between Templates
	---------------------------------------------
	
	To copy AutoText and macros between templates, use the following steps:
	
	1. On the Tools menu, click Templates And Add-Ins.
	
	2. Click Organizer.
	
	3. Click the Styles, AutoText, Toolbars, or Macro Project Items tab.
	
	4. In the In box on the left, click the entry you want to copy, and then click
	  Copy.
	
	5. Click OK, and then click Close.
	
	Additional query words: auto text
	
	======================================================================
	Keywords          : kbtemplate kbautotext kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
