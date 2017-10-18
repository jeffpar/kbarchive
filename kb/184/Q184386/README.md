---
layout: page
title: "Q184386: HOWTO: Using OLE Drag &amp; Drop to Move Controls on a Form"
permalink: kb/184/Q184386/
---

## Q184386: HOWTO: Using OLE Drag &amp; Drop to Move Controls on a Form

	Article: Q184386
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro version 5.0, Drag and Drop could be used to move Visual FoxPro
	controls around on a form. This feature is still available in Visual FoxPro 6.0;
	however, the new OLE Drag and Drop features may be used to accomplish this. This
	article provides the steps to set up the OLE Drag and Drop properties and
	methods to help a programmer get started using OLE Drag and Drop to move
	controls around on a form.
	
	The article does not cover the background for OLE Drag and Drop. For more
	information on OLE Drag and Drop, see Chapter 31, "Interoperability and the
	Internet" in the Microsoft Visual FoxPro "Programmer's Guide," version 6.0.
	
	MORE INFORMATION
	================
	
	Follow the steps below to create a form with some Visual FoxPro controls that
	can be moved around the form using the OLE Drag and Drop feature.
	
	1. Create a new form.
	
	2. Add a command button, label and a text box to the form.
	
	3. Set the OLEDropMode property of the form to 1 - Enabled.
	
	4. Add the following code to the OLEDragOver event of the form. Note that the
	  LPARAMETERS line should already be in the event code by default.
	
	        LPARAMETERS oDataObject,nEffect,nButton,nShift,nXCoord,nYCoord,nState
	        IF nState=0
	           IF oDataObject.GetFormat('VFP Source Object')
	              This.OLEDropHasData=1
	              This.OLEDropEffects=2
	            ENDIF
	        ENDIF
	
	5. Add the following code to the OLDDragDrop event of the form. Note that the
	  LPARAMETERS line should already be in the event code by default.
	
	        LPARAMETERS oDataObject,nEffect,nButton,nShift,nXCoord,nYCoord
	        NODEFAULT
	        LOCAL oSource
	        IF oDataObject.GetFormat('VFP Source Object')
	           oSource=oDataObject.GetData('VFP Source Object')
	           oSource.Left=nXCoord
	           oSource.Top=nYCoord
	        ENDIF
	
	6. Set the following property of the command button, text box and the label:
	
	        OLEDragMode = 1 - Automatic
	
	7. Set the Caption properties of the label and command button and the Value
	  property of the text box as desired.
	
	8. Save and run the form.
	
	9. Drag the controls around by clicking them with the left or right mouse
	  button, holding the mouse button down and dragging. Notice that the tip of
	  the mouse pointer is where the top, left corner of the control will be placed
	  when the mouse button is released. In order to move the text box, drag the
	  mouse to select blank space or select some text that has been entered. Then
	  drag with the highlighted selection.
	
	10. Once the form is successfully run and the dragging and dropping of the
	  controls is working, try making this change. Remark out the NODEFAULT
	  command in the OLEDragDrop event code of the form as entered in step 5
	  above.
	
	11. Save and run the form again. Drag one of the controls with the right mouse
	  button. When the control is dropped in the new location, a short- cut
	  context menu appears with the options of Move Here and Cancel. Choose either
	  one as it makes no difference at this point.
	
	12. Now try changing the This.OLEDropEffects=2 line in the OLEDragOver event of
	  the form as shown in step 4 above. Try the different values listed below.
	  For each setting, run the form and drag a control with the right mouse.
	  Notice how the menu changes. Try holding down the control key while
	  dragging.
	
	     This.OLEDropEffects=1       Copy Here and Cancel menu
	     This.OLEDropEffects=2       Move Here and Cancel menu
	     This.OLEDropEffects=3       Copy Here, Move Here and Cancel menu
	     This.OLEDropEffects=4       Link Here and Cancel menu
	     This.OLEDropEffects=6       Move Here, Link Here and Cancel menu
	     This.OLEDropEffects=7       Move Here, Copy Here, Link Here and
	                                    Cancel menu
	
	  OLEDropEffects of 1 (copy), 2 (move) and 4 (link) along with 0 (none) are the
	  base drop effect values. The base values can be added together to produce
	  combinations - 3, 6 and 7. The NODEFAULT keyword in the OLEDragDrop event
	  code is used to suppress the menu when right dragging.
	
	  Further use of OLEDropEffects and the default menu that appears when right
	  dragging is beyond the scope of this article. The information above is
	  intended to be an introduction.
	
	A brief explanation of the code in the steps above follows. For more in- depth
	information, please refer to the articles listed in the REFERENCES section.
	
	First, the OLEDragMode properties of the controls on the form were set to 1 -
	Automatic. This allows the different data types that each control supports to be
	placed into the Data Object automatically. When the controls were dragged over
	the form, the Data Object was queried to see if the 'VFP Source Object' data
	format was in the Data Object. The 'VFP Source Object' data type was needed to
	move the controls on the form. Once this data type was found with the
	OLEDragOver event, the form was told that there was matching data in the Data
	Object (This.OLEDropHasData=1) and what different drop effects were supported
	(This.OLEDropEffects=2). Then when the mouse button was released, the
	OLEDragDrop event checked the Data Object again for the desired format. Once
	found, the data in the matching format was obtained from the Data Object
	(oSource=oDataObject.GetData()) by creating an object reference to the control
	that was stored in the oSource variable in the OLEDragDrop event. The
	coordinates of the mouse that were passed to the OLEDragDrop event were used to
	set the Top and Left properties of the control.
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro Programmer's Guide, version 6.0, Chapter 31,
	"Interoperability and the Internet".
	
	Visual FoxPro Help, 6.0; search on "OLE Drag and Drop"
	
	Additional query words: FxprgClassoop kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
