---
layout: page
title: "Q162251: PRB: Closing a Top-Level Form Hangs Visual FoxPro"
permalink: /kb/162/Q162251/
---

## Q162251: PRB: Closing a Top-Level Form Hangs Visual FoxPro

{% raw %}

	Article: Q162251
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you close a top-level form that contains a child form with the SSTab Object
	ActiveX control on it, Visual FoxPro 5.0 hangs.
	
	RESOLUTION
	==========
	
	Use the Visual FoxPro 5.0 pageframe control instead of the SSTab control.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The SSTab Object is an ActiveX control included with Visual FoxPro 5.0. Before
	trying the Steps to Reproduce Behavior, you should make sure that the SSTab
	Object is available. To check this, follow these steps:
	
	1. On the Tools menu, click Options and then click the Controls tab.
	
	2. Click ActiveX controls. Make sure that the Controls check box is selected in
	  the Show section.
	
	3. Scroll down the list of controls until you find the SSTab Object and make
	  sure that the it is selected.
	
	4. If the SSTab Object is not on the list, it should be reinstalled from the
	  Visual FoxPro 5.0 CD-ROM.
	
	The actual .ocx file for the SSTab Object can be found in the Windows\System
	directory(if you are using Windows 95) or the Winnt\System32 directory (if you
	are using Windows NT). It is named Tabctl32.ocx. It should be version 4.01.0000
	and be 162,064 bytes. To see this information, display the properties of the
	.ocx file in Windows Explorer.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: The following steps will lock up Visual FoxPro. It would be a good idea
	to make sure everything in Visual FoxPro is saved and close down any other
	running programs on the computer.
	
	1. Create a new form.
	
	2. Set the ShowWindow property of the form to 2 - As Top-Level Form.
	
	3. Add a command button to the form.
	
	4. In the Click method of the command button, place the following line of code:
	
	      DO FORM form2
	
	5. Save this form as Form1.scx and close it.
	
	6. Create another new form.
	
	7. Set the ShowWindow property of this form to 1 - In Top-Level Form.
	
	8. Add an OLE Container Control to the form.
	
	9. In the Insert Object dialog box that appears when the OLE Container Control
	  is added to the form, click Insert Control. Then scroll down the Control Type
	  list until you find the SSTab Object. Select it and click OK.
	
	10. Set the following properties for this form (they are not really necessary
	  but make the form easier to work with):
	
	      AutoCenter = .T.
	      Height = 172
	      Width = 240
	
	  Adjust the size of the SSTab Object as necessary.
	
	11. Save this form as Form2.scx and close it.
	
	12. In the Visual FoxPro Command window, type the following command:
	
	  " DO FORM form1 " (without the quotation marks)
	
	13. Click the command button on the form that is now displayed. This brings up
	  the form with the SSTab Object on it.
	
	14. Now close the first form (the top-level form) by clicking the close box in
	  the upper-right corner.
	
	  NOTE: Do not close the second form with the SSTab Object on it first.
	
	15. The second form disappears and the first form is completely unresponsive to
	  the mouse or keyboard. If you are running Windows NT or Windows 95, press
	  CTRL+ALT+DEL to bring up the Task Manager or press the Close Program dialog
	  box (Windows 95) and close Form1.
	
	Additional query words: vfoxwin kbdsd
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	

{% endraw %}
