---
layout: page
title: "Q100970: ADT: How to Give Users the Ability to Change Passwords (2.0)"
permalink: kb/100/Q100970/
---

## Q100970: ADT: How to Give Users the Ability to Change Passwords (2.0)

	Article: Q100970
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.1,2.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Distribution Kit, version 1.1 
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	This article describes how to distribute a secure application with the Microsoft
	Access Distribution Kit or Microsoft Access Developer's Toolkit and still give
	your users the ability to change their passwords.
	
	MORE INFORMATION
	================
	
	To achieve this functionality, do the following:
	
	1. Make the Database window active so that you can access the Security menu.
	  (The best method for this is to select an object in the Database window
	  through a macro).
	
	2. From the Security menu, choose Password. The user then changes the password.
	
	3. Once the user has closed the Password dialog box, set the focus back to the
	  form that you called the macro or function from.
	
	  Here is a sample macro:
	
	        Macro Name         Actions
	        -------------------------------
	        Change Password    SelectObject
	                           DoMenuItem
	                           SelectObject
	
	        Change Password Actions
	        ----------------------------
	        SelectObject
	            Object Type: Macro
	            Object Name: Autoexec
	            In Database window: Yes
	        DoMenuItem
	            Menu Bar: Database
	            Menu Name: Security
	            Command: Change Password
	            Subcommand:
	        SelectObject
	            Object Type: Form
	            Object Name: Form1
	            In Database window: No
	
	The Database window appears, as well as the dialog box to change the password.
	You cannot select anything in the Database window because the Change Password
	dialog box is modal.
	
	In the Microsoft Access Distribution Kit or Developer's Toolkit, the
	functionality is identical except that the Database window is not displayed.
	
	Additional query words: container adk adt nxml
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3 kbAccessDistKit110
	Version           : WINDOWS:1.1,2.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
