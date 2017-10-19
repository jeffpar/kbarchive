---
layout: page
title: "Q135755: HOWTO: Use the OLE MAPI Control to Send Mail Messages"
permalink: /kb/135/Q135755/
---

## Q135755: HOWTO: Use the OLE MAPI Control to Send Mail Messages

	Article: Q135755
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbole kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Professional Edition of Microsoft Visual FoxPro for Windows includes a MAPI
	OLE container control, so the developer can incorporate mail messaging
	capabilities into a Visual FoxPro application. This article gives the steps
	necessary to create a Visual FoxPro form that starts a MAPI session and allows a
	user to send a mail message to a specified e-mail address.
	
	NOTE: The MAPI OLE container controls are not installed on operating systems that
	use the Win32s subsystem (Windows 3.x and Windows for Workgroups 3.x).
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	Follow these steps to create a form to send mail messages using the OLE MAPI
	control.
	
	1. Create a new form.
	
	2. Add the OLE MAPI Session control to the form. Select the OLE Container
	  control from the Form Controls toolbar, and then click the form. Select the
	  Insert Control option, and select the MAPI Session control. Change the Name
	  property of the control to OLEMAPISession.
	
	3. Repeat step 2, this time adding the OLE MAPI Message control to the form and
	  changing the Name property to OLEMAPIMsg. NOTE: The location of these
	  controls is not important, as they will not appear at run-time.
	
	4. In the form's Init event procedure, add this code:
	
	     This.OLEMAPISession.SignOn
	
	5. Add two text boxes to the form. Name the first one SendTo, and the second
	  Subject.
	
	6. Add an edit box to the form and name it MsgTxt.
	
	7. Add a command button to the form. Set its Caption property to Send, and then
	  add the following code to its Click event procedure:
	
	     With This.Parent.OLEMAPIMsg
	        .MsgIndex=-1
	        .RecipDisplayName=ALLTRIM(This.Parent.SendTo.Value)
	        .MsgSubject=This.Parent.Subject.Value
	        .MsgNoteText=This.Parent.MsgTxt.Value
	        .SessionID=This.parent.olemapisession.sessionid
	        .Send
	     Endwith
	
	8. In the form's Destroy event procedure, add this code:
	
	     Thisform.OLEMAPISession.SignOff
	
	9. Save and run the form. If the mail application is not already running, the
	  sign-on dialog box will appear and prompt for a password.
	
	10. Enter a valid e-mail address in the SendTo box. Enter text for the subject
	  in the Subject box. Enter the actual message text in the MsgTxt box.
	
	11. Click the Send button. The mail message will be delivered to the specified
	  e-mail address.
	
	12. Close the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbole kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
