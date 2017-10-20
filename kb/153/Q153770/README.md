---
layout: page
title: "Q153770: ADT/ODE: &quot;Setup Error 997&quot; Installing ADT or ODE Application"
permalink: /kb/153/Q153770/
---

## Q153770: ADT/ODE: &quot;Setup Error 997&quot; Installing ADT or ODE Application

{% raw %}

	Article: Q153770
	Product(s): Microsoft Access Distribution Kit
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 20-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you set up a Microsoft Office 97 Professional Edition Tools application or
	a Microsoft Access Developer's Toolkit (ADT) application on a computer running
	Windows NT version 3.51 or 4.0 Workstation or Server, you may receive the
	following error message:
	
	  Setup Error 997. Your setup files may be damaged. Try restarting the setup
	  program.
	
	The error message "Setup Error 997" will be followed by one or more references to
	Object IDs. The number of references and the Object IDs will vary, depending on
	the application.
	
	CAUSE
	=====
	
	The Application Name that you specified in the Setup Wizard exceeds 30
	characters (or 50 characters on Windows NT 4.0). Microsoft Windows NT 3.51
	Server and Workstation have a 30-character limit on the name of a Program Group.
	Microsoft Windows NT 4.0 Server and Workstation have a 50-character limit on the
	name of a Program Group.
	
	NOTE: Because the application name is used to create the program group icon, this
	problem can also occur if a backslash character (\) is used in the application
	name.
	
	NOTE: Using the backslash character (\) in the application name, can also cause
	this problem to occur in Windows 95.
	
	RESOLUTION
	==========
	
	Change the Application Name in the Microsoft Access for Windows 95 ADT Setup
	Wizard to a string that contains 30 or fewer characters (or 50 or fewer
	characters on Windows NT 4.0).
	
	NOTE: In the Microsoft Office 97 Developer Edition Tools Setup Wizard, an
	application name that exceeds 30 characters will not be accepted.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Microsoft Access for Windows 95 ADT Setup Wizard, select "Create
	  new setup options for my applications custom setup program," and then click
	  Next.
	
	2. Add the sample database Northwind.mdb, click "Set as applications main file,"
	  and then click Next.
	
	3. Create a shortcut named SC, select the Runtime option, and then click Next.
	  Click Yes to include the run-time executable.
	
	4. Click Next on the Registry Values screen and click Next on the Components To
	  Add screen.
	
	5. On the Reorder The Components screen, change the Name to "This is my sample
	  database Northwind.mdb."
	
	6. Complete the Setup Wizard and create the disk images.
	
	7. Run Setup on a Windows NT 3.51 Workstation or Server. Note that you receive
	  the error message described in the "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : :7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
