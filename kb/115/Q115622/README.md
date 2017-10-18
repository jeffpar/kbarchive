---
layout: page
title: "Q115622: ACC2: MS Access Dev. Toolkit Questions &amp; Answers"
permalink: kb/115/Q115622/
---

## Q115622: ACC2: MS Access Dev. Toolkit Questions &amp; Answers

	Article: Q115622
	Product(s): Microsoft Access Distribution Kit
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains questions and answers about the Microsoft Access
	Developer's Toolkit version 2.0.
	
	MORE INFORMATION
	================
	
	1. Q. Can I include the OLE custom controls that come with the Microsoft Access
	  Developer's Toolkit (ADT) with my application?
	
	  A. You can include the three OLE custom controls that come with the ADT (the
	  Calendar, Scroll Bar, and Data Outline controls) with your application,
	  royalty-free.
	
	2. Q. What is the best way to distribute updates of my application?
	
	  A. To make updating your application easy, begin by creating your application
	  as two databases: one database (Data.mdb) for storing the application's data;
	  and the other database (Program.mdb) for storing the application's queries,
	  forms, reports, macros, and modules. To distribute updates of your
	  application, simply distribute a new Program.mdb database. You can use this
	  method to update the application without disturbing your users' data.
	
	  All the objects in the Program.mdb database should be based on attached tables
	  from the Data.mdb database. Note that when you create a database with
	  attached tables, the path to the attached tables is stored in the database.
	  If the path to the attached tables becomes invalid, an error message is
	  displayed when the database is opened. For information about verifying
	  attachments, see The Microsoft Access Developer's Toolkit, "Advanced Topics",
	  Chapter 2, "Reconnecting Attached Tables," page 35.
	
	3. Q. How can I prevent users from seeing the code in my application?
	
	  A. You can control what users see by taking the following precautions:
	   - Use form and report modules.
	
	   - Use forms and macros to control users' movements within your application.
	
	   - Secure all the objects in your database.
	
	   - Encrypt your database.
	
	4. Q. How do I include my own System.mda file with my application?
	
	  A. To include your own System.mda file, add your System.mda file in the Files
	  To Include box in the Setup Wizard. Setup does not overwrite a file named
	  System.mda.
	
	  NOTE: If you do not provide a System.mda file with your run- time application,
	  Setup creates a new one.
	
	5. Q. Why can't I gain access to my Calendar control's Font and Color
	  properties?
	
	  A. The Oc1016.dll file is not automatically registered in the Microsoft
	  Windows Reg.dat file when you install the ADT. The Oc1016.dll file must be
	  registered in the Reg.dat file in order for you to gain access to the
	  Calendar control's Font and Color properties.
	
	  For information about how to register the Oc1016.dll file in the Reg.dat file,
	  see Q115125.
	
	6. Q. Can I distribute the Microsoft Access Wizards with my application?
	
	  A. You cannot distribute the Microsoft Access Wizards. However, you can create
	  and distribute your own Wizards. The ADT includes commented Wizard code as a
	  learning aid for creating your own Wizards.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : 2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
