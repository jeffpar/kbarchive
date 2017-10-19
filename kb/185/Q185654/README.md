---
layout: page
title: "Q185654: HOWTO: Starting OLE Drag and Drop In Manual Mode"
permalink: /kb/185/Q185654/
---

## Q185654: HOWTO: Starting OLE Drag and Drop In Manual Mode

	Article: Q185654
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to implement OLE Drag and Drop in manual mode
	allowing you to drag the caption of a Command button to a text box. The article
	also features the Data Object methods ClearData and SetData.
	
	This article does not cover the background for OLE Drag and Drop. The purpose of
	the article is to provide an example that helps developers get started with
	manual mode OLE Drag and Drop. For more information on OLE Drag and Drop, see
	Chapter 31: Interoperability and the Internet in the Microsoft Visual FoxPro
	"Programmer's Guide," version 6.0.
	
	MORE INFORMATION
	================
	
	The steps below illustrate how to implement OLE Drag and Drop in manual mode to
	drag the caption of a command button to a text box. In the steps where code is
	added to the various events and methods, the LPARAMETERS lines shown are already
	there by default. They should not be added a second time.
	
	1. Create a new form and save the form. Be sure the default directory is set to
	  the folder where the form is saved.
	
	2. Add two command buttons and a text box.
	
	3. Select the command button with the caption of "Command2" and change the
	  caption to "Reset Controls".
	
	4. Place the following code in the Click event of command2:
	
	  
	
	        Thisform.Text1.Value=SPACE(10)
	
	5. Copy the following file from the Visual Studio\Common\Graphics folder
	  specified to the folder where the form is saved.
	
	     \Icons\Misc\Eye.ico
	
	6. Set the following properties of command1:
	
	  
	
	        Caption="Text To Drag"
	        OLEDragPicture="eye.ico"
	
	7. Add the following code to the Click event of command1:
	
	  
	
	        WAIT WINDOW "Hello"
	
	8. Add the following code to the MouseDown event of command1:
	
	  
	
	        LPARAMETERS nButton, nShift, nXCoord, nYCoord
	        IF nButton=2
	           *This.OLEDrag(.F.)
	           This.OLEDrag(.T.)
	        ENDIF
	
	  This code checks to see if the right mouse button is down. If it is, the
	  OLEDrag method will be called. OLEDrag can be called with either true or
	  false. The difference is shown later in this article.
	
	9. Add the following code to the OLEDrag method of command1:
	
	  
	
	        LPARAMETERS lDetectDrag
	        IF lDetectDrag
	           This.ForeColor=RGB(0,255,64)
	        ELSE
	           This.ForeColor=RGB(255,0,255)
	        ENDIF
	
	  The code above changes the color of the caption text of the command button. It
	  is included here for a visual confirmation that the method is firing.
	
	10. Add the following code to the OLEStartDrag event of command1:
	
	  
	
	        LPARAMETERS oDataObject, nEffect
	        oDataObject.ClearData
	        oDataObject.SetData("Hello",1)
	
	  In this event code, the data in the Data Object is being cleared, which in
	  this case means that the caption of the command button is cleared from the
	  Data Object. It is then being set to the word "Hello." This is done for
	  illustration purposes only to show what can be done. If the actual command
	  button caption is to be dropped into the text box, this code would not be
	  used. When using OLE Drag and Drop in automatic mode, the OLEStartDrag event
	  is the first event to fire. In manual mode, the MouseDown and OLEDrag
	  methods have to run first to start OLEStartDrag.
	
	11. Add the following code to the OLECompleteDrag event of command1:
	
	  
	
	        LPARAMETERS nEffect
	        This.ResetToDefault("ForeColor")
	
	  This code sets the ForeColor, which is the color of the caption text, of
	  command1 back to the default.
	
	12. Set the OLEDropMode property of the text box to 1 - Enabled.
	
	13. Save and run the form. Right-click the "Text To Drag" command button and
	  drag and drop into the text box. Use the Reset Controls command button to
	  reset. Try holding down the CTRL key while right dragging.
	
	The key code in the preceding example created for starting OLE Drag and Drop in
	manual mode is the code shown in step 8 for the MouseDown event of the drag
	source. Also note that the OLEDragMode property of the "Text To Drag" command
	button is set to 0 - Manual.
	
	As stated in step 8, the OLEDrag method can be called with either True (.T.) or
	False (.F.). If OLEDrag is called with False, the OLEStartDrag event fires
	immediately. If OLEDrag is called with True, there is a slight delay before the
	OLEStartDrag event fires. You may follow the steps below to see the difference.
	
	1. With the OLEDrag method being started with True, which is how it should be
	  set after step 13 above, carefully right-click the "Text To Drag" command
	  button. Be very careful not to move the mouse while doing this. There should
	  be a slight delay before the eye icon and the "no drop" mouse pointer appear.
	  Try this a few times. It should be necessary to reset the controls.
	
	2. Modify the form. Open the MouseDown event of the "Text To Drag" command
	  button. Remark out the This.OLEDrag (.T.) and unremark the This.OLEDrag (.F.)
	  lines of code. Save and run the form.
	
	3. Without moving the mouse, right-click the "Text To Drag" command button.
	  Notice that the eye icon appears immediately. If the mouse is not moved, the
	  "no drop" mouse pointer never appears.
	
	Try using some of the changes to the example form that are listed below. They
	illustrate some of the features of OLE Drag and Drop. Please see the Help file
	documentation for further explanations of the options in the OLE Drag and Drop
	events.
	
	1. Try setting the OLEDragMode property for the "Text To Drag" command button to
	  1 - Automatic. Save and run the form. Note that if the mouse pointer is moved
	  around in the command button when the left mouse button is down, the
	  OLEDragPicture, Eye.ico, never appears unless the mouse pointer goes out of
	  the command button's border. Try the right mouse button also.
	
	2. Try not clearing and setting the data in the OLEStartDrag event of the "Text
	  To Drag" command button. See step 10 above.
	
	REFERENCES
	==========
	
	Visual FoxPro Books Online: Programmer's Guide; Chapter 31 - Interoperability
	and the Internet; OLE Drag and Drop topic.
	
	Additional query words: FxprgGeneral vfoxwin kbvfp600
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
