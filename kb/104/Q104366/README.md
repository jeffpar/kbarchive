---
layout: page
title: "Q104366: PC Forms: Custom Form Not Displayed"
permalink: /kb/104/Q104366/
---

## Q104366: PC Forms: Custom Form Not Displayed

	Article: Q104366
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to read a message created using version 1.0 of Microsoft Electronic
	Forms Designer, the custom form may not be displayed. Instead, a standard note
	is displayed with the following error message:
	
	  Displaying this message correctly requires a custom E-Form that is not
	  available or is incorrectly installed. Please contact your network
	  administrator for more information.
	
	CAUSE
	=====
	
	This problem indicates a discrepancy between the custom message type declaration
	in EFORM.BAS and the MSMAIL.INI file.
	
	RESOLUTION
	==========
	
	When a form is created, its message type is registered in the form's EFORM.BAS
	file, and declared in the [Custom Messages] section of the MSMAIL.INI file.
	These entries are case-sensitive, and must be identical.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To verify the message type declaration in the EFORM.BAS and MSMAIL.INI files,
	follow these steps:
	
	1. Open the E-Form project in Microsoft Visual Basic for Windows by selecting
	  the appropriate .MAK file.
	
	2. In the Project window, select the EFORM.BAS file. Choose the View Code
	  button.
	
	3. Select and copy the MESSAGE_CLASS string. For example:
	
	  Global Const MESSAGE_CLASS = "IPM.Microsoft.MEFPhone"
	
	  In this example, select IPM.Microsoft.MEFPhone (without the quotation marks).
	
	4. Open the MSMAIL.INI file in a text editor.
	
	5. Locate the custom message declaration in the [Custom Messages] section of the
	  MSMAIL.INI file.
	
	6. Select the existing message class definition and paste. This replaces the
	  current declaration with the one just copied from EFORM.BAS.
	
	7. Save changes to the MSMAIL.INI file and close.
	
	This method ensures consistency between the custom message declarations.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
