---
layout: page
title: "Q139307: PRB: Wizard-Generated Picture Buttons Need Bitmap in .Exe"
permalink: kb/139/Q139307/
---

## Q139307: PRB: Wizard-Generated Picture Buttons Need Bitmap in .Exe

	Article: Q139307
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the PICBTNS command buttons from \Vfp\Wizards\Wizstyle.vcx in a
	wizard-generated form or custom form, the form will run with the command buttons
	showing their perspective bitmap pictures on each button. If the form is added
	to a project and an .exe file is produced, the command buttons will be blank
	when the .exe file is run outside of Visual FoxPro.
	
	CAUSE
	=====
	
	The command buttons do not show their pictures because the bitmap related to
	each button cannot be found. No error will result, therefore the command buttons
	will appear blank. The bitmaps have to be placed into the project and marked
	included. If they are excluded, or simply copied to the same directory as the
	.exe file, the command buttons will still appear blank.
	
	RESOLUTION
	==========
	
	Add the bitmaps to the project manually in the Other Tab under Other Files to
	allow the pictures to be shown on the buttons.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project and click the Documents tab. Click the Forms option and
	  click the New button to make a new form using the Form Wizard.
	
	2. Select Picture buttons in "Step 2 - Style," and then finish the form. Run the
	  form by clicking the Run button in the project, and note that the pictures
	  appear on each button.
	
	3. Build an .exe file, and exit from Visual FoxPro. Run the .exe file, and note
	  that the command buttons appear blank. However, when the mouse pointer is
	  placed on a command button, the ToolTipText box will still show its message.
	
	4. Exit the .exe file, and open the project in Visual FoxPro. Click the Other
	  tab, and add the following bitmap files to the Other Files category. These
	  files are located in the \Vfp\Wizards\Wizbmps\ directory.
	
	  Wzback.bmp
	  Wzclose.bmp
	  Wzdelete.bmp
	  Wzedit.bmp
	  Wzend.bmp
	  Wzlocate.bmp
	  Wznew.bmp
	  Wznext.bmp
	  Wzprint.bmp
	  Wzsave.bmp
	  Wztop.bmp
	  Wzundo.bmp
	
	5. Build an .exe file, and run it outside of Visual FoxPro. Note that each
	  command button now has a picture associated with it.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
