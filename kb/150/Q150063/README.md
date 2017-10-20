---
layout: page
title: "Q150063: ADT/ODE: How to Use the Setup Wizard to Join Workgroup"
permalink: /kb/150/Q150063/
---

## Q150063: ADT/ODE: How to Use the Setup Wizard to Join Workgroup

{% raw %}

	Article: Q150063
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	This article describes how to join a run-time application to a workgroup file
	(SYSTEM.MDW) located on the network.
	
	MORE INFORMATION
	================
	
	The following example demonstrates how to use the Microsoft Office 97 Developer
	Edition Tools (ODE) or the Microsoft Access Developer's Toolkit For Windows 95
	(ADT) Setup Wizard to create a custom setup routine which joins a workgroup file
	(SYSTEM.MDW) on a network drive.
	
	1. Start the ODE or ADT Setup Wizard.
	
	2. On the Introduction screen click "Create a new set of setup options...."
	
	3. Click Next to move to the next screen which states:
	
	  Add the files that you want your custom Setup program
	  to copy and then set properties for each file.
	
	4. Click Add.
	
	5. Select the Northwind.mdb database, and then click Add.
	
	6. Click the "Set as Application's Main File" box.
	
	7. Click Next to move to the next screen which states:
	
	  Add the shortcuts that you want your custom
	  Setup program to create and then set the
	  properties for each shortcut.
	
	8. Click Add.
	
	9. Type "Northwind Traders" (without the quotation marks) in the Description
	  box.
	
	10. Make sure the File To Open box specifies the full path to the Northwind.mdb
	  database, for example:
	
	  C:\Program Files\Microsoft Office\Office\Samples\Northwind.mdb
	
	11. Do one of the following.
	
	  
	
	  In the Microsoft Office 97 Developer Edition Tools:
	
	  On the General Shortcut Properties tab, click "I would like to specify my own
	  custom command Line."
	
	  In the Microsoft Access Developer's Toolkit:
	
	  Under Command-Line Style, click "Specify My Own Custom Command Line."
	
	12. Clear the Command Line box and type the following
	
	  "MSACCESS.EXE" /Runtime "$(FilePath)\NORTHWIND.MDB"
	  /Wrkgrp \\SERVERNAME\SHARENAME\SYSTEM.MDW
	
	  where SERVERNAME is the actual server name and SHARENAME is the path to the
	  folder where the SYSTEM.MDW is located. (Make sure to type the quotation
	  marks.)
	
	  NOTE: When using the Microsoft Access Developer's Toolkit for Windows 95, you
	  must modify the command line to read as follows:
	
	  "C:\Program Files\Common Files\Microsoft
	  Shared\Microsoft Access Runtime\MSACCESS.EXE" /Runtime
	  "$(FilePath)\NORTHWIND.MDB" /Wrkgrp
	  \\SERVERNAME\SHARENAME\SYSTEM.MDW
	
	  where SERVERNAME is the actual server name and SHARENAME is the path to the
	  folder where the SYSTEM.MDW is located. (Make sure to type the quotation
	  marks.)
	
	13. Click Next twice to move to the screen which states
	
	  
	
	  In the Microsoft Office 97 Developer Edition Tools:
	
	  You may now add redistributable Microsoft Office, Microsoft Jet,
	  and ODBC components to your custom Setup program.
	
	  In the Microsoft Access Developer's Toolkit:
	
	  Which of the following Microsoft Access components do you want your
	  custom Setup program to include?
	
	14. Click Microsoft Access Run-Time Version and Workgroup Administrator.
	
	15. Click Finish. When prompted to save the current Setup template, click No.
	
	NOTE: When the run-time application is later installed, it will create a shortcut
	that will automatically point to the SYSTEM.MDW file on the network. To view
	this shortcut, click Start, go to Programs, and click Applications to locate the
	shortcut icon.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbOffice97 kbZNotKeyword3 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
