---
layout: page
title: "Q276554: INFO: How To Modify a Resize Object to Work with an OptionGroup"
permalink: kb/276/Q276554/
---

## Q276554: INFO: How To Modify a Resize Object to Work with an OptionGroup

	Article: Q276554
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp600 kbFFC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 09-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the OptionGroup control on a form with the Resize object, the option
	button group does not resize automatically. This article describes how to make
	an option button group resize and move with the other controls on the form.
	
	MORE INFORMATION
	================
	
	NOTE: The code in the following set of instructions works for an option button
	group with either horizontal buttons or vertical buttons, but not both.
	
	1. Start Visual FoxPro version 6.0.
	
	2. On the File menu, click Open, and then browse to the Vfp98\FFC folder. (This
	  folder is a subfolder of the folder in which Microsoft Visual Studio is
	  installed.)
	
	3. Select the _controls.vcx file. In the Class Name list, click _controls, and
	  then double-click _resizable.
	
	4. In the Properties window, double-click the LoopThroughControls method.
	
	5. Add "Optiongroup" (without the quotation marks) to the end of line 11 as
	  follows:
	
	  #define BASE_CLASS "Commandbutton Combobox Checkbox Listbox Form Grid Textbox Label Shape Editbox Olecontrol Pageframe Image Spinner Optiongroup"
	
	6. In the Procedure drop-down list box, click SetSize, and then add the
	  following code after the existing code:
	
	  * Resize Option Group.
	  IF oControl.BaseClass $ "Optiongroup" THEN
	     LOCAL nNumButtons,nLoop, nHorzSpaceBtwnButtons, nVertSpaceBtwnButtons, nButtonHeight, nWidestButton
	  	
	     * Initialize Variables.
	     nNumButtons = oControl.ButtonCount
	     nButtonHeight = oControl.Buttons(1).Height  && Assume all the buttons are the same height
	     nWidestButton = 0
	
	     * Find the widest button.
	     FOR nLoop = 1 TO nNumButtons
	         IF (oControl.Buttons(nLoop).Width > nWidestButton) THEN
	            nWidestButton = oControl.Buttons(nLoop).Width
	         ENDIF
	     ENDFOR
	
	     * Determine whether the buttons are horizontal or vertical.	
	     IF (oControl.Buttons(1).Top != oControl.Buttons(2).Top) THEN
	        lVertical = .T.		&& Vertical Buttons
	     ELSE
	        lVertical = .F.		&& Horizontal Buttons
	     ENDIF
	
	     * Take care of the vertical buttons.	
	     IF (lVertical) THEN
	         nVertSpaceBtwnButtons = (oControl.Height  - (nNumButtons * nButtonHeight)) / (nNumButtons + 1)
	  		
	         FOR nLoop = 1 TO nNumButtons
	            oControl.Buttons(nLoop).Left = (oControl.Width - nWidestButton) / 2
	            IF nLoop = 1 THEN
	               oControl.Buttons(nLoop).Top = nVertSpaceBtwnButtons
	  	  ELSE
	               oControl.Buttons(nLoop).Top = (nLoop * nVertSpaceBtwnButtons) + (nButtonHeight * (nLoop - 1))
	  	  ENDIF
	        ENDFOR
	     ELSE
	        * Take care of the horizontal buttons.
	        nHorzSpaceBtwnButtons =(oControl.Width	- (nNumButtons * nWidestButton)) / (nNumButtons + 1)
	
	        FOR nLoop = 1 TO nNumButtons
	           oControl.Buttons(nLoop).Top = (oControl.Height - nButtonHeight) / 2
	           IF (nLoop = 1) THEN
	              oControl.Buttons(nLoop).Left = nHorzSpaceBtwnButtons
	           ELSE
	  	    oControl.Buttons(nLoop).Left = (nLoop * nHorzSpaceBtwnButtons) + (nWidestButton * (nLoop - 1))
	           ENDIF
	        ENDFOR
	     ENDIF
	  ENDIF   && Optiongroup resize
	
	7. Save the class.
	
	8. Create a form and place the Resize object on the form.
	
	9. Add the following code to the Resize event of the form:
	
	  THISFORM._resizable1.adjustcontrols
	
	10. Add a command button, an option button group, and text box objects to the
	  form.
	
	11. Run the form, and then resize the form.
	
	The option button group now moves with the rest of the controls on the form.
	
	REFERENCES
	==========
	
	For additional information about the Resize object, consult the Visual FoxPro 6
	Help file.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp600 kbFFC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
