---
layout: page
title: "Q154834: PRB: Checking Out Forms and MAK File Loses Changes in Memory"
permalink: /kb/154/Q154834/
---

## Q154834: PRB: Checking Out Forms and MAK File Loses Changes in Memory

{% raw %}

	Article: Q154834
	Product(s): Microsoft SourceSafe
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A subset of the Visual Basic project files are checked out and modifications
	have been made to the files. If the rest of the project files are then checked
	out without first saving the changes made to the already checked out files,
	those changes will be lost.
	
	CAUSE
	=====
	
	Visual SourceSafe relies on Visual Basic to make sure all files are saved before
	reloading the make file (.VBP or .MAK). It appears that Visual Basic does not
	prompt the user to save changes before reloading the make file. Therefore, the
	changes are lost.
	
	RESOLUTION
	==========
	
	Be sure to save changes to your project files prior to checking out the MAK or
	VBP file. When the Select All Command is chosen during checkout, the MAK or VBP
	file is included in the list of files to be checked out. If the MAK or VBP file
	is selected to be checked out, Visual Basic will reload the MAK or VBP file.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a project in Visual Basic 4.0. Form1 is created by default.
	
	2. Open a Visual Basic project that is under Source Code Control and has two or
	  more forms in the project.
	
	3. Check out one form. Do not check out the other forms or the .VBP or .MAK file
	
	4. Make a change to the form, such as adding a button. Do not save the change.
	
	5. Select another form in the project window and choose to check out the form.
	  In the "check out" dialog, choose SELECT ALL. Note that the list does not
	  show the form you have already checked out, but does show everything else to
	  check out. Press OK to check out the files.
	
	6. Note that the form you already had checked out closes. You are never prompted
	  to SAVE changes.
	
	7. Reopen the form that was modified previously. Note that all the changes are
	  lost.
	
	Additional query words: kbdsd vbwin vss
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch kbSSafe400 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
