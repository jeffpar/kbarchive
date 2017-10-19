---
layout: page
title: "Q174921: HOWTO: Communicate with a UserDocument from a WebBrowser Control"
permalink: /kb/174/Q174921/
---

## Q174921: HOWTO: Communicate with a UserDocument from a WebBrowser Control

	Article: Q174921
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates a technique you can use to communicate with your
	UserDocument running in a WebBrowser control. You can use this technique to pass
	parameters to your UserDocuments if you are writing an application that has a
	WebBrowser control in which you display one or more UserDocuments.
	
	MORE INFORMATION
	================
	
	You can manipulate the UserDocument by adding Public Properties and Methods to
	the UserDocument. You can access these properties and methods from your
	WebBrowser application by using the Document property of the WebBrowser control.
	The Document property of the WebBrowser control exposes the Automation object of
	the currently displayed document.
	
	This article does not give details on creating WebBrowser control or UserDocument
	applications. Please see the REFERENCES section below for more information.
	
	For the purposes of understanding how this technique can be used, suppose you
	have following two projects:
	
	PROJECT 1. MYDOC:
	
	- This is your UserDocument application. The purpose of the UserDocument is to
	  display and edit customer information for a given CustomerID.
	
	PROJECT 2. MYBROWSER:
	
	- This application contains a form with a WebBrowser control and ListBox
	  control(lstContact). Your UserDocument is launched inside the
	  WebBrowser(brwWebBrowser). The ListBox control displays all the CustomerIDs.
	  When the user clicks on a CustomerID, you want the UserDocument running in
	  the WebBrowser control to pull up that customer.
	
	Step 1: Add a Public Let Property to your UserDocument. You can use a method
	also. In the example above, open the MYDOC project and add the following to
	UserDocument code:
	
	     Public Property Let CustomerID(ByVal iCustID As String)
	        'Load the customer data associated with iCustID
	     End Property
	
	Step 2: Invoke the property of the currently-running UserDocument using the
	Document property of the WebBrowser control. From the example above, modify the
	MYBROWSER project to handle the Click event of the ListBox:
	
	     Private Sub lstContact_Click()
	      Dim CustID As String
	
	      'retrieve customer id from the listbox
	      CustID = lstContact.List(lstContact.ListIndex)
	
	      'tell the userdocument to load the customer
	      brwWebBrowser.Document.CustomerID = CustID
	     End Sub
	
	NOTE: You can also use this technique when you display multiple UserDocuments
	within the WebBrowser control. Be aware that the Document property may not be
	available immediately after you use the Navigate method of the WebBrowser
	control. If this is the case, then you can use the Busy property of the
	WebBrowser control to wait until the browser has finished loading the document.
	Also, you can use the NavigateComplete event of the WebBrowser control to signal
	that the document has finished loading.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q162719 : HOWTO: Use the WebBrowser Control from Visual Basic 5
	
	  Q155969 : HOWTO: How to Distribute the WebBrowser Control
	
	Additional query words: PARAMETERS WEBBROWSER VBD kbinternet kbinetdev kbdsi kbDSupport kbVBp 
	kbVBp500 kbVBp600 kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
