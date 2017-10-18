---
layout: page
title: "Q153820: ADT95: &quot;Setup Error 992&quot; Installing ADT Application"
permalink: kb/153/Q153820/
---

## Q153820: ADT95: &quot;Setup Error 992&quot; Installing ADT Application

	Article: Q153820
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 01-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you install a Microsoft Access Developer's Toolkit (ADT) application on a
	computer running Windows NT Workstation or Server, you may receive the following
	error message:
	
	  Setup Error 992. Your setup files may be damaged. Try restarting the setup
	  program.
	
	The error message "Setup Error 992" will be followed by one or more references to
	Object ID's. The number of references and the Object IDs will vary, depending on
	the application.
	
	
	CAUSE
	=====
	
	You specified a Program Item or a Shortcut description that exceeds 40
	characters. Microsoft Windows NT Workstation and Server have a 40-character
	limit on the name of a Program Item.
	
	RESOLUTION
	==========
	
	Change the Program Item/Shortcut description to a string that contains 40 or
	fewer characters.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Microsoft Access for Windows 95 ADT Setup Wizard, select "Create
	  new setup options for my applications custom setup program," and then click
	  Next.
	
	2. Add the sample database Northwind.mdb, click "Set as applications main file,"
	  and then click Next.
	
	3. On the shortcut screen create a new shortcut named "This is my custom setup
	  for the Northwind database that I want added as a program item."
	
	4. Complete the Setup Wizard steps and create the disk images.
	
	5. Run the setup on a computer running Windows NT. Note that you receive the
	  error message described in the "Symptoms" section.
	
	REFERENCES
	==========
	
	Microsoft Access ADT Readme.txt
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
