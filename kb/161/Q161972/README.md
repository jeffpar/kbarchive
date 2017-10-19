---
layout: page
title: "Q161972: PRB: Displaying a Modal Form Causes the SSTab Control to Blank"
permalink: /kb/161/Q161972/
---

## Q161972: PRB: Displaying a Modal Form Causes the SSTab Control to Blank

	Article: Q161972
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600bug
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SSTab Object ActiveX control is on a form that calls another modal form.
	When the modal form is displayed, the SSTab control disappears from the form
	that it is on.
	
	RESOLUTION
	==========
	
	If possible, use the Visual FoxPro PageFrame or do not make the second form
	modal.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The SSTab object is an ActiveX control provided with Visual FoxPro 5.0. Before
	trying the Steps to Reproduce Behavior below, it is a good idea to make sure the
	SSTab Object is available. To check this, follow these steps:
	
	1. On the Tools menu, click Options. Click the Controls tab.
	
	2. Click the ActiveX controls button. Also make sure the Controls check box
	  under the Show section is selected.
	
	3. Scroll down the list of controls until the SSTab Object is found. Make sure
	  the check box to the left of it is selected.
	
	4. If the SSTab object is not on the list, it should be reinstalled from the
	  Visual FoxPro CD-ROM.
	
	The actual .ocx file for the SSTab Object can be found in the Windows\System
	folder (if using Windows 95) or the Winnt\System32 folder (if using Windows NT).
	It is named Tabctl32.ocx. It should be version 4.01.0000 and be 162,064 bytes in
	size. This information can be found by displaying the properties of the .ocx
	file in Windows Explorer.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add an OLE Container Control to the form.
	
	3. In the Insert Object dialog box that appears when the OLE Container control
	  is added to the form, click the Insert Control button. Then scroll down the
	  Control Type list until the SSTab Object is found. Select it and click OK.
	
	4. Add a push button to the form. Place the following code in the Click method
	  of the button:
	
	        DO FORM test2.scx
	
	5. Save this form as Test1.scx and close the form.
	
	6. Create another new form.
	
	7. Set the WindowType property of this new form to 1 - Modal.
	
	8. Save the new form as Test2.scx and close it.
	
	9. From the Visual FoxPro Command window, issue the following command:
	
	        DO FORM test1
	
	10. Move the form out of the top left corner of the screen, so you will be able
	  to discern the second form from the first when it is displayed.
	
	11. Click the button on the form to display the second form. The SSTab Object
	  should disappear at this point. Move the second form if necessary to view
	  the first form.
	
	12. Close the second form with the close box in the upper-right corner. At this
	  point the following error message may appear:
	
	  OLE error code 0x80004005: Unspecified error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
