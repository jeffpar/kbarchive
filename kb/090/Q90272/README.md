---
layout: page
title: "Q90272: Print Manager Error Indications in Windows for Workgroups"
permalink: /kb/090/Q90272/
---

## Q90272: Print Manager Error Indications in Windows for Workgroups

{% raw %}

	Article: Q90272
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows for Workgroups, Print Manager notifies the user of printing errors
	differently than in earlier versions of Windows.
	
	MORE INFORMATION
	================
	
	Most errors, such as "printer out of paper," no longer are displayed in a dialog
	box. This is so print spooling doesn't halt. Instead of a dialog box, the print
	queue is marked as being in an "error state." A descriptive error message
	displays in the Print Manager status bar. When the error is corrected, the print
	queue can be restarted by choosing Resume Printing Document from the Document
	menu.
	
	The options for error notification in the Background Printing dialog box refer to
	driver specific situations such as a plotter requiring a pen change. These
	messages are displayed as configured in the dialog box.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	

{% endraw %}
