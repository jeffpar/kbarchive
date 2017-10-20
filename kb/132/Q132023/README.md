---
layout: page
title: "Q132023: ADT2: Menu Items That Should Be Disabled in Run-Time Apps"
permalink: /kb/132/Q132023/
---

## Q132023: ADT2: Menu Items That Should Be Disabled in Run-Time Apps

{% raw %}

	Article: Q132023
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you run an application created with the Microsoft Access Developer's
	Toolkit, the following menu items that should not be available are available:
	
	- On the File menu: Print Definition
	- On the Security menu: Print Security
	- On the Help menu: Technical Support
	- On the View menu: Toolbars
	
	Depending on the nature of the application, design functions and other unwanted
	menu items may also appear.
	
	CAUSE
	=====
	
	You did not disable or provide alternatives for the default menu bars.
	
	RESOLUTION
	==========
	
	To ensure that users see only menus appropriate for the application, either
	disable the default menu bars or supply custom menus. To do so, do one of the
	following:
	
	- Use custom menus.
	
	- Set a form's MenuBar property to = 1 to remove the menu bar.
	
	- Define a global menu bar for the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 2.0. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create (or use an existing) database that has no custom menus and no startup
	  form.
	
	2. Open Program Manager or File Manager, and on the File menu, click Run.
	
	3. In the Command Line box, type "msarn200.exe <databasename>.mdb"
	  (without the quotation marks) where <databasename> is the name of your
	  database. If necessary, include the path to this file.
	
	4. On the database's menu bar, click Help. Note that the Technical Support
	  option is available.
	
	5. On the menu bar, click File. Note that the Print Definition option is
	  available.
	
	6. On the menu bar, click Security. Note that the Print Security option is
	  available.
	
	7. On the menu bar, click View. Note that the Toolbars option is available.
	
	REFERENCES
	==========
	
	Microsoft Access "Building Applications," version 2.0, Chapter 2, "Structuring a
	User Interface," pages 21-53
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
