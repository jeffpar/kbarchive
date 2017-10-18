---
layout: page
title: "Q103962: PC Forms: Err Msg: The Type of Data Did Not Match..."
permalink: kb/103/Q103962/
---

## Q103962: PC Forms: Err Msg: The Type of Data Did Not Match...

	Article: Q103962
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0, used with:
	   - Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to read a message from a form that was created using version 1.0 of
	the Microsoft Electronic Forms Designer, the following error message may be
	displayed:
	
	  The type of the data did not match the type requested
	
	CAUSE
	=====
	
	Two possible causes of this error are:
	
	- Controls with the same Tag property have different data types.
	
	- Multiple controls on the Compose/Read form have the same Tag property
	  defined.
	
	RESOLUTION
	==========
	
	Be sure to use unique Tag properties.
	
	MORE INFORMATION
	================
	
	When a form is sent, the WriteTaggedControls() function is called to
	automatically package each of the controls on a form with a non-empty Tag
	property. The type of control determines what information is written to the
	package. (For a complete list of properties written to the package based on
	control type, see page 63 in Chapter 5 of the Microsoft Electronic Forms
	Designer "Developer's Guide.")
	
	Similarly, when the form is read, the ReadTaggedControls() function is called to
	unpackage the data. This function extracts information from the package and
	assigns it to the corresponding Tagged control. If, for example, a control on
	the Compose form writes a value to the package but is mapped to a control on the
	Read form that expects text, the above error is displayed.
	
	Example
	-------
	
	Suppose you design an E-form so that the selection from a list box on the Compose
	form is written to a read-only text edit control on the Read form, by trying to
	use the same "version" Tag property for both controls. When the form is sent,
	the index of the list box selection is written to the package as a Long data
	type. When the form is read, the text box with Tag "version" is expecting a
	String data type, but instead receives a Long. This generates the error message
	above.
	
	To solve the problem of handling unlike data types, you can add additional code
	to the WriteMessage() and ReadMessage() functions to package the data manually.
	For more information on handling list boxes, query on the following words in the
	Microsoft Knowledge Base:
	
	  "MailPCForms" (without the quotation marks) and "list box" (without the
	  quotation marks)
	
	The error message described in this article may also occur when multiple controls
	have the same Tag property defined. If two controls of different types have the
	same Tag property, the ReadMessage() function may try to assign an inappropriate
	value to a control on the Read form.
	
	To solve this problem, be sure to use unique Tag properties.
	
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:1.0,3.0,3.2
	
	=============================================================================
	
