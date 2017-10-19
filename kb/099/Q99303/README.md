---
layout: page
title: "Q99303: Mac Form: Adding Unavailable Choices to Custom Forms"
permalink: /kb/099/Q99303/
---

## Q99303: Mac Form: Adding Unavailable Choices to Custom Forms

	Article: Q99303
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1,3.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1, 3.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0, 3.1, and 3.1a of Microsoft Mail for AppleTalk Networks have the
	ability to create custom forms using the Form Designer stack and HyperCard. In
	addition to a familiar design interface, the HyperCard program includes a
	powerful scripting language. When a form is compiled and installed, however,
	common HyperCard scripts are ignored.
	
	It is possible to add "compile" scripts to a form to add complex features. When
	the Compile button is selected, it sends out a compile message. To customize a
	form, it is possible to add code to that compile message and tell the compiling
	script to set certain attributes for a particular object.
	
	MORE INFORMATION
	================
	
	One feature that is available through these compile scripts is unavailable
	(grayed) choices. On the default forms, there is a connection between the Send
	button and the User List. If the User List is empty, the Send button is
	unavailable. When a name is added to the user list, either as a pre-defined
	recipient or via the Address window, the Send button is available for use.
	
	It is possible to connect other buttons and fields together on a form by adding
	the appropriate compile scripts. The following example shows how to add an Other
	button that controls the gray of an "Other Info" field. When the Other button is
	selected, the field next to it becomes available:
	
	1. Create a check box named "Other" and a generic single-line field called
	  "Other Info" on the Send screen.
	
	2. Set the HyperCard user level so scripting is available. (Press COMMAND+M to
	  show the message box and type: "set userlevel to 5" (without the quotation
	  marks) and press the RETURN key.)
	
	3. Choose the Button tool and double-click the Other button to display the Info
	  box. Choose the Script button.
	
	4. Add the following script to the Other button:
	
	        on compile
	            global objAttrib, attrDependCheckState, attrGroup3
	           put modalAdd(objAttrib,attrDependCheckState, attrGroup3) into
	        objAttrib
	        end compile
	
	  Note: The "put" statement should be on one line.
	
	5. Select the Field tool and double-click the Other Info field. Choose the
	  Script button from the Info box.
	
	6. Add the following script to the Other Info field:
	
	        on compile
	           global objAttrib, attrDependSetState, attrGroup3
	           put modalAdd(objAttrib,attrDependSetState,attrGroup3) into
	        objattrib
	        end compile
	
	  Note: The "put" statement should be on one line.
	
	7. Recompile the Send screen by choosing the Compile button.
	
	The button and the field are put into an internal structure: "attrGroup3." The
	button controls the "CheckState" of the group, while the field depends on the
	"SetState" of the group.
	
	When the button is checked, the field is available. When the button is clear, the
	field is unavailable. (If the opposite effect is desired, change
	attrDependSetState to attrDependSetNegState.)
	
	
	Additional query words: 3.00 3.10 3.10a grey greyed
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310 kbMailATN310a
	Version           : WINDOWS:3.0,3.1,3.1a
	
	=============================================================================
	
