---
layout: page
title: "Q196676: WD97: Form Field Length Expands or Contracts, Affects Alignment"
permalink: /kb/196/Q196676/
---

## Q196676: WD97: Form Field Length Expands or Contracts, Affects Alignment

	Article: Q196676
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The length of your form field expands or contracts, depending on the amount of
	text you enter into the form field. This can result in other form fields or text
	moving to new positions, which affects the horizontal and vertical alignment of
	your form. This behavior can occur even though you have set a maximum limit for
	the number of characters to be entered into the field.
	
	CAUSE
	=====
	
	Setting the maximum number of characters for a form field does not establish a
	permanent dimension for the field. This setting refers only to the widest that
	the field can be. If there are fewer characters typed than the maximum allowed,
	the field is only as wide as the number of characters typed.
	
	For example, if the maximum field size is 30 characters, and you type a
	five-letter word in the field, the field is five characters wide. If you type 50
	characters in the field, only the first 30 characters are shown.
	
	WORKAROUND
	==========
	
	Using one of the following methods may or may not help you achieve the results
	you want; however, any of these methods can be used to give you more precise
	control over the position of other fields or text within your form.
	
	Method 1: Place Form Field Inside a Table
	-----------------------------------------
	
	Place the form field inside a table. Each cell that contains a form field has a
	fixed width, so varying the text length does not move text or other form fields
	horizontally on the page. Setting the table row to an exact height to control
	the number of lines that are displayed in your form will maintain the vertical
	position of other items on your form.
	
	Method 2: Place Form Field in a Frame
	-------------------------------------
	
	Place the form field in a frame. You can format the frame to have an exact height
	and width. To locate this option, select the frame. On the Format menu, choose
	Frame.
	
	Method 3: Set Tab After Form Field
	----------------------------------
	
	Set a tab immediately after the form field. The drawback to this method is that
	if the text inside the form field extends past the tab stop, the text or form
	field following the tab stop will not be positioned correctly.
	
	Additional query words: forms locking lock force vertical horizontal verticle absolute fields
	
	======================================================================
	Keywords          : kbualink97 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
