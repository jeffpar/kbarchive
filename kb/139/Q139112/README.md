---
layout: page
title: "Q139112: PC Forms: ErrMsg: Displaying this Message Correctly Requires.."
permalink: /kb/139/Q139112/
---

## Q139112: PC Forms: ErrMsg: Displaying this Message Correctly Requires..

	Article: Q139112
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you read a message containing an electronic form (E-form), you may receive
	the following error:
	
	  Displaying this message correctly requires a custom E-Form that is not
	  available or is incorrectly installed. Please contact your network
	  administrator for more information.
	
	CAUSE
	=====
	
	This will occur in the MEFPhone sample, MEFRoute sample, or any E-forms created
	using the Template project when the custom message declarations are either
	missing or incorrect in the MSMAIL.INI or SHARED.INI file.
	
	RESOLUTION
	==========
	
	Make sure the message class entry in the .BAS module matches the declaration
	entry in the .INI file.
	
	NOTE: The file is case sensitive.
	
	To find the custom message type of the form:
	
	1. Open the form project within Microsoft Visual Basic, open EFORM.BAS.
	
	2. Check the entry Global Const MESSAGE_CLASS. For example,
	
	  Global Const MESSAGE_CLASS = "IPM.Microsoft.MEFPhone"
	
	3. If this is a local form then check the Custom Messages section of MSMAIL.INI,
	  and make sure that you have the proper form declaration entry. For example,
	
	  [Custom Messages]
	  IPM.Microsoft.MEFPhone=3.0;;TelephoneNote;;
	  C:\WINDOWS\SYSTEM\MEFLIB.DLL;
	  <MC:IPM.Microsoft.MEFPhone>C:\EFORMS\PROJE
	
	  CTS\PHONE\MEFPHONE.EXE -MSG <COMMAND>
	  <MESSAGEID>;1111111000000000;Microsoft Sample Telephone Note;;;
	
	4. If this is a shared form, check the Microsoft Mail section of the MSMAIL.INI
	  file for the shared directory entry. For example,
	
	  [Microsoft Mail]
	  SharedExtensionsDir=M:\MAILDATA\ADDONS
	
	  Notes:
	
	   - The above location is where E-forms looks for the SHARED.INI file and
	     expect to find the form declaration entry in the SHARED.INIs Custom
	     Messages section
	
	   - The declaration entry is a single line of text, which may appear to wrap
	     in a text editor. You can customize this entry to include more options.
	
	  For information on the Custom Message type declaration syntax, please refer to
	  Chapter 2 page 29 of the "Technical Reference" for Microsoft Mail for PC
	  Networks.
	
	5. Check the path to the library file MEFLIB.DLL and the form executable if they
	  are added in the declaration entry. By default, the path to MEFLIB.DLL is
	  C:\WINDOWS\SYSTEM\MEFLIB.DLL for a local form, and no path exists to
	  MEFLIB.DLL for a shared form. Mail should look in the WINDOWS\SYSTEM
	  directory for the library.
	
	MORE INFORMATION
	================
	
	For more information on the custom message declaration and the operation map,
	refer to the Microsoft Electronic Forms Designer Version 1.0 Developer's Guide,
	Chapter 12.
	
	Additional query words: eform 1.00 mail 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
