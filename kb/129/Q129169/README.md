---
layout: page
title: "Q129169: PRB: Excel Chart Wizard Crashes When Accessed from a Form"
permalink: /kb/129/Q129169/
---

## Q129169: PRB: Excel Chart Wizard Crashes When Accessed from a Form

{% raw %}

	Article: Q129169
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the user double-clicks an embedded Excel Chart object in an OLE Container
	object on a form, and then uses the Excel Chart Wizard to modify that chart, the
	system returns an Excel "error" dialog stating that "an error has occurred in
	your program..." and giving you the options to "Close" and "Ignore."
	
	This behavior occurs when using Windows version 3.11 or Windows for Workgroups
	version 3.11, and the behavior has been observed occasionally in Windows NT
	release 3.5 for workstations.
	
	STATUS
	======
	
	This is not a bug in FoxPro. It appears to be a problem in Excel. Microsoft is
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type:
	
	     MODIFY FORM Testchrt
	
	2. Place an OLE Container Control on the form.
	
	3. From "Insert Object" dialog, select Excel 5.0 chart.
	
	4. Save the form.
	
	5. Run the form by entering the following in the Command window:
	
	     DO FORM Testchrt
	
	6. Double-click the embedded Excel chart.
	
	7. From Excel's bar of tools, select Chart Wizard. In step 1 of the Chart'
	  Wizard, you select the "Range." Click anywhere in the Range text editing box.
	  At this point, an error dialog box appears stating "An error has occurred in
	  your application. If you choose Ignore, you should save your work in a new
	  file. If you choose Close, your application will terminate."
	
	8. Choose the "Close" option. If you're using Win32S in Windows 3.11 or Windows
	  for Workgroups 3.11, the next dialog box will advise that "Excel caused a
	  General Protection Fault in module EXCEL.EXE ..."
	
	
	Additional query words: VFoxWin graph chart error general protection OLE Win32s 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
