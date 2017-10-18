---
layout: page
title: "Q130237: Duplicating READ NOLOCK Functionality in Visual FoxPro"
permalink: kb/130/Q130237/
---

## Q130237: Duplicating READ NOLOCK Functionality in Visual FoxPro

	Article: Q130237
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2000
	
	3.00
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	READ NOLOCK is no longer required in Visual FoxPro version 3.0.
	
	In version 2.x of FoxPro, all records involved in a read were automatically
	locked when the record pointer was moved. This caused contention problems in a
	multiuser situation. The most common symptom of contention problems was the
	failure of a second user to be able to load a screen without getting a "Record
	in use by another" error. To avoid problems, many developers chose to use READ
	NOLOCK to prevent FoxPro from locking records automatically.
	
	MORE INFORMATION
	================
	
	The FoxPro Version 2.x Solution
	-------------------------------
	
	READ NOLOCK actually performed two separate functions:
	
	- The record(s) involved in the read were not locked until the developer issued
	  a SHOW GETS LOCK command.
	
	- The fields on the screen were automatically disabled until the lock was
	  obtained.
	
	The Visual FoxPro Solution
	--------------------------
	
	Both functions can be duplicated through different commands in Visual FoxPro.
	
	To prevent locking a record until edits begin, use buffering. If you want to lock
	a record as soon as the edit starts, use pessimistic-row or pessimistic-table
	buffering. If you want to lock a record only when a write is attempted, use
	optimistic-row or optimistic-table buffering. You no longer need to place this
	code in a command button on the form. Buffering is usually enabled through the
	form's BUFFERMODE property, or through a CURSORSETPROP("Buffering") command
	executed in the form's INIT method.
	
	Buffering will not enable and disable fields in the same manner as a READ NOLOCK
	command. The SETALL method can be used, however, to set the ENABLED property to
	.T. or .F. as desired for all controls on a form. The following command disables
	every control on a form named frmTEST:
	
	     frmTEST.SETALL("ENABLED",.F.)
	
	This code would typically be placed in the click event of a command button to
	disable all fields when the record pointer was moved. The command button would
	be disabled, along with all fields in the form.
	
	Points to Consider
	------------------
	
	The examples in this article duplicate the functionality of one version 2.x
	command (READ NOLOCK) with new version 3.0 commands. You can still use the READ
	NOLOCK command in version 3.0; however, by continuing to use the version 2.x
	READ commands, you are limiting the functionality of your application.
	
	The READ NOLOCK command automatically disables every screen control tied directly
	to a field in your .DBF, whether it was a GET field, a list box, check box, or
	other control. Controls tied to a memory variable are not disabled. However, the
	SETALL() method in Visual FoxPro disables all controls on the form, including
	command buttons, whether they are tied to a field in your table or not. By using
	this approach, you need to enable each command button you want to have active.
	
	The opposite approach is to use the optional third parameter on the SETALL method
	to disable only controls of a certain type, such as text boxes, or to disable
	individual controls through the control's ENABLED property. You must prevent
	Visual FoxPro from locking the record automatically by using optimistic
	buffering in conjunction with disabling fields.
	
	Before deciding which technique to use, determine the desired end result. If you
	want to duplicate a version 2.x user interface using Visual FoxPro 3.0, use
	optimistic buffering and enable and disable controls as required.
	
	If you want to avoid the locking problems inherent in version 2.x, and it is
	acceptable to have all fields enabled as the user enters the form, use
	optimistic buffering alone.
	
	REFERENCES
	==========
	
	For more information on buffering, please see the Visual FoxPro "Developer's
	Guide." For more information on the SETALL method, please see the information in
	the Visual FoxPro Help file or in the Visual FoxPro "Language Reference."
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
