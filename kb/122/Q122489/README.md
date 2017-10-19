---
layout: page
title: "Q122489: How to Disable Default Pushbutton Handling for MFC Dialog"
permalink: /kb/122/Q122489/
---

## Q122489: How to Disable Default Pushbutton Handling for MFC Dialog

	Article: Q122489
	Product(s): Microsoft C Compiler
	Version(s): 1.00 1.50 | 1.00 2.00 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows dialog boxes support the use of a default button (pushbutton) that is
	automatically activated when the ENTER key is pressed while focus is not on a
	command button. The MFC class library will automatically call the
	CDialog::OnOK() virtual function for a dialog whenever the default button
	(pushbutton) is activated by pressing the ENTER key.
	
	This behavior conforms to the guidelines set forth by "The Windows Interface: An
	Application Design Guide." This manual is included with the Windows version 3.1
	SDK documentation. It is also available from Microsoft Press.
	
	MORE INFORMATION
	================
	
	Although default button (pushbutton) support is recommended, you might want to
	disable or modify the standard implementation in certain situations. You can do
	this in an MFC application by following these steps:
	
	1. Load the dialog into App Studio and change the OK button identifier from IDOK
	  to something else such as IDC_MYOK. Also, clear the check from Default Button
	  property.
	
	2. Use ClassWizard to create a message handling function for this button named
	  OnClickedMyOK. This function will be executed when a BN_CLICKED message is
	  received from this button.
	
	3. In the code for OnClickedMyOK, call the base class version of the OnOK
	  function. Here is an example:
	
	     void CMyDialog::OnClickedMyOK()
	     {
	        CDialog::OnOK();
	     }
	
	4. Override OnOK for your dialog, and do nothing inside the function. Here is an
	  example:
	
	     void CMyDialog::OnOK()
	     {
	     }
	
	5. Run the program and bring up the dialog. Give focus to a control other than
	  the OK button. Press the RETURN key. Notice that CDialog::OnOK() is never
	  executed.
	
	This technique effectively disables the standard default button (pushbutton)
	support in an MFC program. The OK button will continue to behave as before when
	activated by the mouse or through a mnemonic keystroke, but the ENTER key will
	not trigger OnOK handling.
	
	This same technique can be used to disable or modify default OnCancel processing.
	The escape key generates a call to CDialog::OnCancel just as the enter key
	generates an OnOK function call.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 3.00 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.00 1.50 | 1.00 2.00 4.00
	
	=============================================================================
	
