---
layout: page
title: "Q154073: ADT95: MSDBOUTL.OCX Unable to Register Itself in System Registry"
permalink: /kb/154/Q154073/
---

## Q154073: ADT95: MSDBOUTL.OCX Unable to Register Itself in System Registry

{% raw %}

	Article: Q154073
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you try to run the Setup program for the Microsoft Access Developer's
	Toolkit for Windows 95 (ADT), you may receive the following error message:
	
	  MSDBOUTL.OCX was unable to register itself in the system registry
	
	After clicking OK, you receive a message that states:
	
	  MS Access Developer's Toolkit for Windows 95 Setup was not completed
	  successfully.
	
	CAUSE
	=====
	
	Microsoft Access for Windows 95 is not installed on the computer where you are
	trying to install the ADT for Windows 95.
	
	RESOLUTION
	==========
	
	You must have Microsoft Access for Windows 95 installed on your local computer
	before you are able to install the ADT. If you do not have Microsoft Access for
	Windows 95 installed, you receive the error message mentioned in the "Symptoms"
	section.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Insert the Microsoft Access Developer's Toolkit for Windows 95 compact disc
	  into the CD-ROM drive.
	
	2. Click the Start button, and then click Run. Type the path for Setup.exe in
	  the Open box.
	
	3. At the Welcome screen for the Microsoft ADT for Windows 95 Setup, click
	  Continue.
	
	4. Type your name and organization in the Name and Organization dialog box, and
	  click OK. Click OK again to confirm.
	
	5. Enter your CD key in the CD key prompt box, and click OK.
	
	6. Click OK to verify your Product ID.
	
	7. Accept the folder to which the ADT will be installed by clicking OK. (You may
	  change to a different folder if you want.)
	
	8. Choose either a Typical installation or a Custom installation with the
	  selections you want.
	
	9. Note that you receive the error messages mentioned in the "Symptoms" section.
	
	NOTE: You will also receive this error messages if you have Microsoft Access 2.0
	installed on your computer rather than Microsoft Access for Windows 95.
	
	REFERENCES
	==========
	
	For more information about installing the Microsoft Access Developer's Toolkit
	for Windows 95, see the Readme.txt file included on the installation compact
	disc.
	
	Additional query words: MSDBOUTL OCX
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
