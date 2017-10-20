---
layout: page
title: "Q149378: PRB: File Not Found Error When You Add New Users"
permalink: /kb/149/Q149378/
---

## Q149378: PRB: File Not Found Error When You Add New Users

{% raw %}

	Article: Q149378
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a new user is added to Visual SourceSafe, the Admin program generates one
	of the following errors:
	
	  File <path to the Project>\USERS Not Found
	
	-or-
	
	  Invalid DOS Path
	
	In SourceSafe 5.0 and earlier, the user is added to SourceSafe. The directory for
	the user is also created in all versions, but it does not contain the
	initialization file Ss.ini.
	
	CAUSE
	=====
	
	The Admin program cannot find the Template.ini, a template for the Ss.ini. When
	a new user is added, the Admin program creates a directory for the user. It also
	creates a user file, Ss.ini, which contains default settings for this particular
	user. The Admin program uses the Template.ini file to create the Ss.ini file. If
	the Template.ini file is not in the Users directory, the error "File Not Found"
	is displayed.
	
	RESOLUTION
	==========
	
	If there is no Template.ini file in the Users directory, you can create this
	file from the information provided below. Copy this code into a text file. Then
	save the text file as Template.ini, and copy it to the Users directory.
	
	Content of the Template.ini
	---------------------------
	
	     ; ss.ini
	     ;
	     ; This file contains all the variables that "customize" Visual
	     ; SourceSafe to your particular needs. The ss.ini variables are
	     ; documented in the Visual SourceSafe User's Manual. Only a few of them
	     ; are placed in this file by default.
	
	     ; Visual C++ programmers should remove the semicolon from the following
	     ; line, to uncomment it.  Other programmers REPLACE the line with
	     ; different masks.
	     ; Relevant_Masks = *.c, *.h, *., *.asm
	
	     ; The following line prevents you from being asked for a checkout
	     ; comment.
	     Checkout_Comment = -
	
	     ; The following lines force Visual SourceSafe not to execute certain
	     ; file types.
	     .reg (Win) = notepad.exe
	     .vbp (Win) = notepad.exe
	     .vcp (Win) = notepad.exe
	     .mak (Win) = notepad.exe
	     .bat (Win) = notepad.exe
	
	     ; Your current Visual SourceSafe project.
	     Project = $/ 
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
