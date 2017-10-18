---
layout: page
title: "Q128519: PC Forms: Err Msg: Bad Command Line (on Delivery)"
permalink: kb/128/Q128519/
---

## Q128519: PC Forms: Err Msg: Bad Command Line (on Delivery)

	Article: Q128519
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
	
	When you receive a message containing an electronic form created with version
	1.0 of Microsoft Electronic Forms Designer, you may receive the following
	error:
	
	  Bad Command Line
	
	This error will occur when the message is initially received, but it will not
	occur if the user attempts to open the same message after it has been delivered.
	
	CAUSE
	=====
	
	This will occur in the MEFPhone sample, MEFRoute sample, or any E-forms created
	using the Template project and the custom command declaration in either
	SHARED.INI or MSMAIL.INI that specifies the form should be activated on
	delivery. By default, there is no code in the Template project to support
	activation on delivery. To check to see if the form is installed to be activated
	on delivery or not, see if the array position 7 (position 0 to 15) is 1 or 0 on
	the form declaration entry in MSMAIL.INI or SHARED.INI.
	
	Below is an example of a form declaration where the array position 7 (the 8th
	flag) of the operation map is set to 1 for activation upon delivery.
	
	     [Custom Messages]
	     ; all should be on the same line
	
	     IPM.Microsoft.MEFPhone=3.0;;Telephone
	      Note;;C:\WINDOWS\SYSTEM\MEFLIB.DLL;<MC:IPM.Microsoft.MEFPhone>
	     C:\EFORMS\PROJECTS\PHONE\MEFPHONE.EXE -MSG <COMMAND>
	     <MESSAGEID>;1111111100000000;Microsoft Sample Telephone Note;;;
	
	RESOLUTION
	==========
	
	To prevent this error, it is necessary to add support for activation on
	delivery. The following steps will modify the Template project so that any new
	forms created will support opening the form on delivery. Any existing projects,
	including the MEFPhone and MEFRoute samples would need to be modified in a
	similar manner to support this functionality.
	
	1. From Microsoft Visual Basic, open the Template project.
	
	2. Open the EFORM.BAS file included with the project.
	
	3. In the Proc: window, select ParseCommandLine.
	
	4. Locate following the program line:
	
	  Select Case gCommand
	
	5. Three lines below that, you should find the following code fragment:
	
	        ----------
	        Case wcommandOpen
	                    If gMessage.Flags And MAPI_SENT Then
	                        frmRead.Show
	                    Else
	                        frmCompose.Show
	                    End If
	        ----------
	
	  Change it to read:
	
	        ----------
	        Case wcommandOpen, wcommandDelivery
	                    If gMessage.Flags And MAPI_SENT Then
	                        frmRead.Show
	                    Else
	                        frmCompose.Show
	                    End If
	        ----------
	
	6. Save changes to the Template project.
	
	MORE INFORMATION
	================
	
	For more information on the custom command declaration and the operation map,
	refer to the Microsoft Electronic Forms Designer version 1.0 "Developer's
	Guide," Chapter 12.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
