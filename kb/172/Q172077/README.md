---
layout: page
title: "Q172077: Menuprob.exe MENU() Malfunctions With Top-Level Forms"
permalink: /kb/172/Q172077/
---

## Q172077: Menuprob.exe MENU() Malfunctions With Top-Level Forms

{% raw %}

	Article: Q172077
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbfile kbsample kbBuilder kbvfp500 kbDSupport
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Menuprob.exe is a sample that shows how the Menu() function malfunctions with
	Top-Level forms.
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Menuprob.exe
	  (http://download.microsoft.com/download/vfox50/demo2/1/WIN98/EN-US/Menuprob.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	As described in the generated menu code when a menu is generated to be used in a
	Top-Level form, there is a second parameter that can be passed in the DO
	mymenu.mpr WITH THIS,.T. command that renames the Name property of the form and
	hence the menu. Running the attached files shows that this is working properly
	but for some reason, the menu name seems to be cached so the MENU() function
	does not find the correct menu name in all circumstances. Specifically, when the
	MENU() function is called from a submenu, MENU() in another instance of the form
	returns the menu name from the instance of the form where MENU() was called from
	the submenu. Calling MENU() twice from a menu pad, as opposed to a submenu
	option, resets MENU() so it returns the correct menu name again.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy Menuprob.exe to a directory on your system and run it to extract the
	  sample files
	
	2. Execute "DO FORM Menuprob.scx" command and follow the instructions on the
	  form that appears.
	
	3. Open the generated menu program for more information on using menus in
	  Top-Level(SDI) forms. MODIFY COMMAND Menuprob.mpr
	
	Additional query words: Menuprob
	
	======================================================================
	Keywords          : kbfile kbsample kbBuilder kbvfp500 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
