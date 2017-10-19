---
layout: page
title: "Q148642: How to Perform In-Place Activation on an OLE Control"
permalink: /kb/148/Q148642/
---

## Q148642: How to Perform In-Place Activation on an OLE Control

	Article: Q148642
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you add an OLE control to a Visual FoxPro form, you can force the control
	to have the focus and immediately be the object that receives keystrokes. This
	is called in-place activation. This article demonstrates two methods you can use
	to activate an OLE container control in this manner.
	
	MORE INFORMATION
	================
	
	Two Techniques to Activate an OLE Control
	-----------------------------------------
	
	1. Determine if the object will respond to the OLE DOVERB activation method. If
	  the object will respond, fire the DOVERB("EDIT") method. This technique has
	  the advantage of activating the object without placing any keystrokes in the
	  keyboard buffer.
	
	2. If the object does not respond to the DOVERB method of activation, stuff the
	  keyboard with an ENTER keystroke, and move the focus to the object.
	
	Step-by-Step Example to Demonstrate Both Techniques
	---------------------------------------------------
	
	1. Create a new form. Place an OLE container control with an object of your
	  choice on the form.
	
	2. Place a command button on the form with the following code in the click
	  event:
	
	     IF ThisForm.OleControl1.DoVerb('')
	        * The vast majority of modern applications fall into this category
	        =MESSAGEBOX("This object responded to activation",0)
	        ThisForm.OleControl1.DoVerb("Edit")
	     ELSE
	     * To test the validity of this process, change the previous lines of
	     * code into comments and run the three lines listed below.
	
	        =MESSAGEBOX("This object must be activated with the Enter key",0)
	        KEYBOARD '{ENTER}'
	        ThisForm.OleControl1.SetFocus()
	     ENDIF
	
	3. Save and run the form.
	
	Additional query words: inplace in-place
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
