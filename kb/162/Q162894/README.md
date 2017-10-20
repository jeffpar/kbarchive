---
layout: page
title: "Q162894: ODE97: Cannot Redistribute Office Assistant with Run-Time Applic"
permalink: /kb/162/Q162894/
---

## Q162894: ODE97: Cannot Redistribute Office Assistant with Run-Time Applic

{% raw %}

	Article: Q162894
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusagekbfaq
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	When you create a custom application using the Microsoft Office 97 Developer
	Edition Tools (ODE), and that application includes the Office Assistant object
	or the Assistant's Balloon object, you cannot distribute your application to
	users who do not have a retail copy of Microsoft Access 97 on their computers.
	
	MORE INFORMATION
	================
	
	The Office Assistant, the Assistant's Balloon, and all of the items inside the
	balloon are controlled programmatically through the Assistant portion of the
	Microsoft Office object model. Each of the items in the following list are
	represented in Visual Basic through the Assistant Object and can only be
	distributed to Microsoft Access 97 retail application users:
	
	- Assistant Actions
	
	- Balloons
	
	- Balloon Headings, text, check boxes, and labels.
	
	The Assistant Object and all its associated code will work with the /runtime
	switch, which provides the Assistant functionality in the corporate environment
	where full retail copies of Microsoft Access 97 are being used.
	
	You can choose runtime command line options for your application in the ODE Setup
	wizard on the screen marked "Add the shortcuts that you want your custom Setup
	program to create and then set properties for each shortcut," on the Database
	Shortcut Properties tab, in the Run-Time dialog box. You can also create a
	shortcut for your command line option. The following example syntax starts
	Microsoft Access, and then opens the Northwind.mdb sample database in the
	runtime environment:
	
	  "C:\Program Files\Microsoft Office\Office\Msaccess.exe" "C:\Program
	  Files\Microsoft Office\Office\Samples\Northwind.mdb" /runtime
	
	REFERENCES
	==========
	
	For more information about using the Office Assistant, click Contents And Index
	on the Help menu, and type "Office Assistant" (without the quotation marks).
	
	For more information about command-line options you can use in Microsoft Access,
	click the Office Assistant, type "Start Microsoft Access with command-line
	options," click Search, and then click to view the "Start Microsoft Access with
	command-line options" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Access Help is not installed on your computer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: Office Assistant s Balloon ODE
	
	======================================================================
	Keywords          : kbusage kbfaq
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
