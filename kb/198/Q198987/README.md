---
layout: page
title: "Q198987: SMSINST: SMS Installer Dialog Box Does Not Display All Text"
permalink: /kb/198/Q198987/
---

## Q198987: SMSINST: SMS Installer Dialog Box Does Not Display All Text

	Article: Q198987
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsmsInst
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When inserting the script item "Radio Button" dialog box in the Systems
	Management Server Installer Script Editor, it employs an existing dialog box
	template. The Radio Button dialog box settings window will allow you to insert
	more text than the default templates can display. If you need a custom dialog
	box to display a long string of text you can create a new Custom Dialog Box or
	you can copy and modify the existing templates.
	
	MORE INFORMATION
	================
	
	Create your own custom dialog boxes and copy and modify any of the nineteen
	Installer dialog box templates. The Installation Expert uses eleven of these
	templates to create the installation wizards. The others are used by various
	script items such as the Radio Button Dialog Box. You can find Installer
	templates in the \dialogs\template directory of your main Installer directory.
	
	If you copy the templates to another directory, you must change the Dialogs
	Directory on the Installation Properties Settings page. This tells the compiler
	where to get the templates, if you edit the templates in the \dialogs\template
	directory, then back up the files to another directory for recovery. If you edit
	the templates in the \dialogs\template directory, then back up the files to
	another directory for recovery.
	
	NOTE: The list of templates found when you select Dialog Templates from the Edit
	menu is a static list that does not represent the current contents of the
	\dialogs\template directory or the Dialogs Directory on the Installation
	Properties Settings page.
	
	To create or edit a custom dialog box in the Installer Script Editor select the
	Custom Dialog script item to launch the Custom Dialog Editor. Within the editor
	you can open an existing dialog template as a *.dlg file or create a new one and
	save it as a *.dlg file to use again.
	
	To edit a Custom Dialog template follow the preceding procedures or within the
	Installer Script Editor and select Dialog Templates from the Edit Menu.
	
	REFERENCES
	==========
	
	For more information on Dialog Box controls see Custom Dialog Editor in the
	Systems Management Server Installer on-line Help.
	
	Additional query words: prodsms smsinst
	
	======================================================================
	Keywords          : kbsms200 kbsmsInst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
