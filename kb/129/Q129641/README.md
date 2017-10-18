---
layout: page
title: "Q129641: INFO: Alternative to SCATTER and GATHER in the New VFP Model"
permalink: kb/129/Q129641/
---

## Q129641: INFO: Alternative to SCATTER and GATHER in the New VFP Model

	Article: Q129641
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro versions 2.x, many developers used the SCATTER and GATHER commands to
	edit data in memory variables. These commands allowed the developer to verify
	the contents of each field before placing the data in the .DBF file, and
	resolved some record locking issues.
	
	Visual FoxPro has added a data buffering feature that can be used as an
	alternative approach to using SCATTER and GATHER in your programs. Data
	buffering provides the following benefits to you as a developer:
	
	- When you use buffering, you can automatically access the validation rules for
	  fields and records that have been entered into the data base container. When
	  you use memory variables, you cannot automatically access these rules.
	
	- You can determine when a record is locked (prior to editing, or after editing
	  and before saving) to handle contention for record locks in a multiuser
	  environment. In this respect, the buffering features eliminate the need for
	  READ NOLOCK.
	
	- Table buffering allows you to save edits for multiple records in memory at
	  the same time. For example, you can keep all of the line items for an invoice
	  in memory and write them at one time if the user chooses to save the invoice.
	
	- Visual FoxPro provides several new functions to assist you in applying or
	  discarding updates to a table, and in verifying data integrity in a multiuser
	  environment.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example for Implementing Buffering in a Form
	---------------------------------------------------------
	
	You can easily implement buffering in a form as an alternative to scatter and
	gather. The following example walks you through the process of creating a table
	with validation on a specific field and designing a form that uses buffering to
	enforce this validation on a form.
	
	1. In the Command window, issue this command:
	
	     SET DEFAULT TO \VFP\SAMPLES\MAINSAMP\DATA
	
	2. Create a new form.
	
	3. From the View menu, choose Data Environment. From the Data Environment menu,
	  choose Add Table. Add an existing .DBF to the data environment. To take
	  advantage of field or record level validation, you must make the .DBF part of
	  a database container and must have validation rules defined in the .DBC file.
	
	4. Drag one or more fields from the data environment window to the form.
	
	5. Set the Form.BufferMode property to 2 for Optimistic Buffering. This will set
	  optimistic table buffering for any grids bound to data and optimistic row
	  buffering for all other controls bound to a data source.
	
	6. Add a command group to the form. Set the ButtonCount property to 2. Set the
	  caption of the first button to "Save" and the caption of the second button to
	  "Cancel."
	
	7. To allow users to save changes to the table, add the following code to the
	  command1.click method:
	
	     lUpdated = TABLEUPDATE()
	     IF !lUpdated
	        =MESSAGEBOX("Update failed", 64)
	     ENDIF
	     THISFORM.REFRESH
	
	8. To allow users to cancel changes to the table, add the following code to the
	  command2.click button:
	
	     iRecords = TABLEREVERT()
	     =MESSAGEBOX("Changes to " + STR(iRecords, 2) + " were discarded", 64)
	     THISFORM.REFRESH
	
	9. Save and run the form.
	
	Additional Considerations
	-------------------------
	
	You probably will want to add the following additional features to your form:
	
	- Navigation buttons to allow movement between records.
	
	- An on error handling routine to handle error 109, "Record in use by another."
	
	- An expansion of step 7 to allow for common scenarios that would cause the
	  tableupdate() function to fail. Possible reasons for failure include an
	  inability to lock the record and the possibility that another user modified
	  the record while the current user was editing it.
	
	You do not need to write individual field-level validation routines for any table
	that is part of a database container (DBC). The form automatically accesses any
	validation rules or triggers contained in the DBC. The user won't be able to
	move the pointer (cursor) off of an offending field until a valid value is
	placed in the field.
	
	You do not need to write code to save the initial values of each field. The
	CURVAL(), OLDVAL(), and GETFLDSTATE() functions can be useful in handling
	situations where a different user has modified the current record.
	
	REFERENCES
	==========
	
	Refer to the Visual FoxPro "Professional Features Guide" and "Developers Guide"
	for more information on buffering and developing forms.
	
	For additional information on setting buffering in your application, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q128205 HOWTO: Set Buffering Mode in Visual FoxPro
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
