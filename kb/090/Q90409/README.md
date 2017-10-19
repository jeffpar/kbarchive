---
layout: page
title: "Q90409: Using a Mouse with FoxBASE+ and FoxBASE Central"
permalink: /kb/090/Q90409/
---

## Q90409: Using a Mouse with FoxBASE+ and FoxBASE Central

	Article: Q90409
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use a Microsoft Mouse in FoxBASE+ running FoxBASE Central, create a batch
	file that performs the following tasks:
	
	- Load the MS-DOS mouse driver and specify the desired mouse sensitivity (the
	  mouse is very sensitive in FoxBASE+)
	
	- Load the default mouse menus provided with FoxBASE+
	
	- Load FoxBASE+
	
	MORE INFORMATION
	================
	
	The text below details the steps to use a mouse with FoxBASE Central:
	
	1. At the MS-DOS prompt, enter the following commands to create a START.BAT
	  batch file in the C:\FOXBASE directory:
	
	  " CD C:\FOXBASE
	  COPY CON START.BAT
	  MOUSE 4/s40
	  DEFAULT
	  FOXPLUS
	  ^Z " (without the quotation marks)
	
	  The file must load the default mouse menus immediately prior to loading
	  FoxBASE+. (If the you exit FoxBASE+, you must reload the mouse menus before
	  restarting FoxBASE+.)
	
	2. Run the START batch file from the C:\FOXBASE directory, as follows:
	
	  " CD C:\FOXBASE
	  START " (without the quotation marks)
	
	3. In FoxBASE+, start FoxBASE Central by entering the following command:
	
	  " CENTRAL " (without the quotation marks)
	
	FoxBASE+ does not have a mouse pointer. Moving the mouse moves the keyboard
	cursor. At the dot prompt, any mouse movement other than horizontal movement
	causes an error beep. In FoxBASE Central, the highlight bar moves as the mouse
	is moved. Pressing the right mouse button is equivalent to pressing ENTER.
	Pressing the left mouse button issues the LIST command.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASESearch
	Version           : MS-DOS:2.1
	
	=============================================================================
	
