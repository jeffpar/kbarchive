---
layout: page
title: "Q102423: Mac Form: Adding Hidden Text Feature to Fields"
permalink: /kb/102/Q102423/
---

## Q102423: Mac Form: Adding Hidden Text Feature to Fields

	Article: Q102423
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0 and 3.1 of Microsoft Mail for AppleTalk Networks allow you to
	create custom forms using the Form Designer stack and HyperCard.
	
	In addition to a familiar design interface, the HyperCard program includes a
	powerful scripting language. When a form is compiled and installed, however,
	common HyperCard scripts are ignored.
	
	You can add "compile" scripts to a form to add complex features. When you choose
	the Compile button, it sends out a Compile command.
	
	To customize a form, you can add code to the Compile command to tell the
	compiling script to set certain attributes for a particular object.
	
	MORE INFORMATION
	================
	
	One security feature available through these compile scripts allows you to make
	all characters entered into a field appear as bullets (similar to the password
	box in the Sign-On screen). To do this, follow the steps below to add a script
	to a field on the Send screen:
	
	1. Create a generic single-line field named "Password" on the Send screen.
	
	2. Set the HyperCard user level so scripting is available. (Press COMMAND+M to
	  bring up the message box. Type the following command and press ENTER:
	
	  " set userlevel to 5 " (without the quotation marks)
	
	3. Choose the Field tool and double-click the Password field to display the Info
	  box. Choose the Script button.
	
	4. Add the following script to the field:
	
	        on compile
	           global objType, fieldHiddenText
	           put fieldHiddenText into objType
	        end compile
	
	5. Recompile the Send screen by choosing the Compile button.
	
	NOTE: The text will display as bullets on the Send screen but will be visible on
	the Read screen. This feature is useful for entering confidential information,
	such as passwords.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.0,3.1,3.1a
	
	=============================================================================
	
