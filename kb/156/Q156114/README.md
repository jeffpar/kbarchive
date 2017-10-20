---
layout: page
title: "Q156114: XCLN: How to Print an Exchange Form with Graphics"
permalink: /kb/156/Q156114/
---

## Q156114: XCLN: How to Print an Exchange Form with Graphics

{% raw %}

	Article: Q156114
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	When you print a form in the Microsoft Exchange client, you only print a
	"textized" copy of the form; the printout does not have the graphical look of
	the form. This is by product design. However, a Microsoft Exchange Form can be
	extended very easily in Visual Basic 4.0 16-bit to include an option button or
	another control to allow you to print the graphical form.
	
	MORE INFORMATION
	================
	
	To extend a Microsoft Exchange Form so that you can print a graphical view of
	the form:
	
	1. Create a form in Electronic Form Designer (EFD) and install the form, then
	  open the VBP file in Visual Basic 4.0 16-bit. (For more information on
	  extending a form see Chapter 9 of the "Application Designer's Guide.")
	
	2. Add a button control to your form and add the following code to this button
	  control:
	
	        Me.PrintForm
	
	  This allows the user to click this button to print the graphical form.
	
	3. Now you need to re-compile the code in Visual Basic 4.0 16-bit, and then
	  install the form using the Forms Manager in the Microsoft Exchange client.
	
	When you run the form in the Microsoft Exchange client, you will be able to click
	this button to print a graphical view of this form.
	
	NOTE: When you print the form by clicking Print on button on the toolbar of the
	message, or by clicking Print on the File menu, you will still get a textized
	version of the form. Only the button you just created allows you to print the
	graphical form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
