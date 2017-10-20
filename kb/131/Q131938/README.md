---
layout: page
title: "Q131938: ADT2: ADT Setup Errors Caused by Invalid Application Name"
permalink: /kb/131/Q131938/
---

## Q131938: ADT2: ADT Setup Errors Caused by Invalid Application Name

{% raw %}

	Article: Q131938
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	When you run the Microsoft Access Developer's Toolkit (ADT) Setup Wizard to
	create a custom Setup program, you may encounter one of the following problems:
	
	- The Setup Wizard (SETUPWIZ.MDB) does not create your distribution disks and
	  you receive the following error message:
	
	  convertReference: Unable to find
	
	- The Setup program (SETUP.EXE) does not install your application and you
	  receive the following three consecutive error messages:
	
	   - 
	
	  Bad Setup version field.
	
	   - 
	
	  Processing Top Level information failed.
	
	   - 
	
	  Setup was not completed successfully.
	
	- The Setup program (SETUP.EXE) truncates the bottom line of your application
	  name in the "Welcome to" information that appears on the first Setup screen.
	
	CAUSE
	=====
	
	In the Setup Wizard's "What is the name of your application?" box, you included
	an exclamation point (!), a quotation mark ("), or a comma (,), or your
	application name is approximately 30 characters long. The Setup Wizard does not
	alert you that you are entering invalid characters or that your application name
	may be truncated.
	
	NOTE: Although the application name can be up to 30 characters long, when the
	application is set up on a computer (computer 1) whose font size is larger than
	the font size of the computer (computer 2) on which the application was created,
	or if the monitor resolution of computer 1 is lower than the monitor resolution
	of computer 2, the application name may be truncated.
	
	RESOLUTION
	==========
	
	To work around this problem, in the Setup Wizard, enter an application name with
	fewer characters or enter an application name that does not contain invalid
	characters. A valid application name can be up to approximately 30 characters
	long (see the note in the "Cause" section) and can consist of letters, numbers,
	and all punctuation marks except the exclamation point (!), the comma (,) and
	the quotation mark (").
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 2.0.
	This problem no longer occurs in Microsoft Access for Windows 95 version 7.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the ADT Setup Wizard to create your custom Setup program.
	
	2. When you reach the "What is the name of your application?" box, type the
	  following name:
	
	  "Test ! Character" (without the quotation marks)
	
	3. Continue through the Setup Wizard. Note that when the Setup Wizard begins to
	  create the distribution disks, you receive the following error message:
	
	  convertReference: Unable to find
	
	4. Run the Setup Wizard again, but this time type the following name in the
	  "What is the name of your application?" box:
	
	  " Test " Character" (without the quotation marks)
	
	5. Continue through the Setup Wizard and create the distribution disks.
	
	6. Run the Setup program for you custom application. Note that you receive the
	  following three consecutive error messages:
	
	   - 
	
	  Bad Setup version field
	
	   - 
	
	  Processing Top Level information failed.
	
	   - 
	
	  Setup was not completed successfully.
	
	REFERENCES
	==========
	
	Microsoft Access Developer's Toolkit "Advanced Topics," version 2.0, Chapter 2,
	"Creating a Custom Setup Program," pages 19-31
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
