---
layout: page
title: "Q130656: Buffering in the TASTRADE Sample Application"
permalink: /kb/130/Q130656/
---

## Q130656: Buffering in the TASTRADE Sample Application

	Article: Q130656
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ORDENTRY.SCX form in the C:\VFP\SAMPLES\MAINSAMP\FORMS directory contains
	controls as well as a grid to create a one-to-many form from tables in the
	TASTRADE.DBC database.
	
	This form uses optimistic buffering, as well as custom routines when records are
	appended, saved, or the record pointer is moved. Much of the code is supplied in
	the base class for the form, so it is not readily apparent when you modify the
	ORDENTRY.SCX form itself.
	
	MORE INFORMATION
	================
	
	The BufferMode property in the Ordentry.scx form itself sets optimistic
	buffering. This property causes grids to use optimistic table buffering and all
	other controls to use optimistic row buffering. The remaining code is located in
	the class used to create this form.
	
	The ParentClass property is set to tsbaseform. The ClassLibrary property is set
	to C:\VFP\SAMPLES\MAINSAMP\LIBS\TSBASE.VCX. These two pieces of information tell
	you what you need to know to look at the code behind the order entry form.
	
	1. Choose Open from the File menu, and select Files of Type: Visual Class
	  Library.
	
	2. Select the TSBASE.VCX file from the C:\VFP\SAMPLES\MAINSAMP\LIBS directory.
	  After you choose OK, a list of classes contained in the library appears on
	  the right side of the dialog box. Choose tsbaseform, and click OK again.
	
	Methods Used with the BufferMode Property
	-----------------------------------------
	
	The following methods are used in conjunction with the BufferMode property to
	handle updates of data in the tables:
	
	Method               Functions Performed
	Init                 Adds navigation buttons and sets up error
	                    message array.
	
	QueryUnLoad          Writes out current record if it has data, and
	                    cancels out a blank, appended record.
	
	*AddNew              Prepares a form to accept a new record, and
	                    appends a blank record to the table.
	
	*AskToSave           Asks the user if changes should be saved, and
	                    saves or restores data.
	
	*DataChanged         Checks to see if any data has changed in the
	                    current workarea.
	
	*Delete              Reverts a newly appended record, or deletes a
	                    record that already exists in the table.
	
	*First               Moves the record pointer to the appropriate record.
	*Last
	*Next
	*Prior
	
	*IsNewAndEmpty       Returns true (.T.) if the user has added a new
	                    record but has not yet made any changes.
	
	*Restore             Cancels all user changes.
	
	*Save                Saves changes to the tables.
	
	*WriteBuffer         Saves the current value of the field to a buffer if
	                    the user clicks the toolbar without leaving the
	                    current field.
	
	NOTE: All methods names preceded with an asterisk (*) are user-defined methods
	that were added to the form. The asterisk is to categorize the methods here. The
	names are not preceeded with an * in the class library.
	
	In most cases, this code could have been placed in a different method, such as
	the Click event of a button. The advantage of using special names for these
	methods is that the code is not overwritten in memory if the developer adds
	custom code to the default methods included in a form.
	
	The code to save or discard changes is encapsulated in two methods. The Restore
	method is the only method that reverts data through a TABLEREVERT() function.
	The Save method is the only method that saves data from the form into the table;
	it accomplishes this through a TABLEUPDATE() function. Each method sets the
	lAllRows parameter to true (.T.) for the TABLEREVERT() or TABLEUPDATE()
	function. This causes all updates to be written to disk or discarded and allows
	the method to work with row or table buffering.
	
	These two methods are called whenever it is necessary to discard changes to a
	record or save changes to a table. Both methods assume that the desired work
	area has been selected prior to invoking the method. The Restore method is
	called by the AddNew, AskToSave, Delete, First, Last, Next, and Prior methods.
	The Save method is called only by the AskToSave method.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
