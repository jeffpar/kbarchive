---
layout: page
title: "Q221723: FIX: Container Click Not Fired When Clicking Disabled Control"
permalink: /kb/221/Q221723/
---

## Q221723: FIX: Container Click Not Fired When Clicking Disabled Control

	Article: Q221723
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS6
	Last Modified: 21-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Click event of a container or pageframe does not fire when clicking on a
	disabled control contained within the container or pageframe. The Click event of
	the form fires instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and place the following code in the Click event:
	
	  WAIT WINDOW "Form Click"
	
	2. Add a container control to the form with the following in the control's Click
	  event:
	
	  WAIT WINDOW "Container Click"
	
	3. Add a command button to the container with the following in the button's
	  Click event:
	
	  WAIT WINDOW "Command button Click"
	
	4. Set the Enabled property of the command button to .F.
	
	5. Run the form and click the command button inside the container.
	
	To see this behavior with a pageframe, follow these steps:
	
	1. Create a form and place the following in the Click event:
	
	  WAIT WINDOW "Form Click"
	
	2. Add a pageframe control to the form. Select the control and place the
	  following in the page1 Click event:
	
	  WAIT WINDOW "Page1 Click"
	
	3. Add a command button to page1 with the following in the button's Click event:
	
	  WAIT WINDOW "Command button Click"
	
	4. Set the Enabled property of the command button to .F.
	
	5. Run the form and click the command button on page one of the pageframe.
	
	  Note that the form's Click event fires instead of the Click event of the
	  container object when the disabled button is clicked. Similar behavior occurs
	  with the pageframe. Instead of activating the page or pageframe's Click
	  event, the form's Click event is called when the disabled button is clicked.
	
	  The behavior is different in Visual FoxPro 3.0b and 5.0x. In these versions,
	  the Click event of the container occurs when clicking the disabled button
	  inside of it. In the case of a pageframe, the Click event of the page fires.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbOOP kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
