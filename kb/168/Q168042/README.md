---
layout: page
title: "Q168042: PRB: Distributed Setup Requires Admin Privileges on Windows NT"
permalink: /kb/168/Q168042/
---

## Q168042: PRB: Distributed Setup Requires Admin Privileges on Windows NT

{% raw %}

	Article: Q168042
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The setup created by the Visual FoxPro Setup Wizard requires administrator
	privileges when run under Windows NT. If you are not logged on with
	administrator privileges, you will receive the following error message when
	running the setup:
	
	  Installation of this product requires system administrator privileges.
	
	CAUSE
	=====
	
	The user must be logged in with administrator privileges for setup to perform
	all of its operations.
	
	RESOLUTION
	==========
	
	It is possible to bypass the portion of the setup routine that checks for
	administrator privileges.
	
	NOTE: It is important to recognize that bypassing this step could cause the setup
	to fail due to a lack of necessary privileges.
	
	The following steps describe how to modify the setup to bypass the check for
	administrator privileges:
	
	1. Create your distribution set as you normally would with the Setup Wizard.
	
	2. Once the Setup Wizard is complete, locate the file Setup32.stf in your
	  distribution disks directory.
	
	3. Open Setup32.stf in a text editor, such as Notepad.
	
	4. Locate the line that contains the text "DetectAdminPrivileges."
	
	5. Once you have located this line, look in the far-left column to determine
	  this line's Object ID.
	
	6. Locate a line above the "DetectAdminPrivileges" line that begins with
	  "Depend" and also contains the Object ID that was found in step 5.
	
	7. Delete the reference to the Object ID found in step 5 from this line.
	
	8. Save Setup32.stf.
	
	The setup will no longer check for administrator privileges.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a distribution set using the Setup Wizard.
	
	2. Log into a Windows NT computer as a user without administrator privileges.
	
	3. Run the setup routine created in step 1 and note that the error "Installation
	  of this product requires system administrator privileges" occurs.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbsetup kbtool kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
