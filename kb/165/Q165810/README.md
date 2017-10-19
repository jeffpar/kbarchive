---
layout: page
title: "Q165810: WD97: ? E-mail Address Using Web Wizard Submit Button"
permalink: /kb/165/Q165810/
---

## Q165810: WD97: ? E-mail Address Using Web Wizard Submit Button

	Article: Q165810
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbother kbtool kbusage kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	To obtain more information on the scripting functionality and scripting
	languages available to you, please contact your Internet Service Provider.
	
	SYMPTOMS
	========
	
	The Web Page Wizard includes three forms (Feedback, Registration, and Survey)
	for submitting responses. When you set the Action for the Submit button to an
	e-mail address, a question mark is included in your e-mail address. For example,
	if the action you specified for the Submit control is:
	
	  Mail To: YourE-mailName
	
	the following will appear in the To box of the e-mail message when you click the
	Submit button:
	
	  YourE-mailName?
	
	CAUSE
	=====
	
	The question mark signifies that the control does not know what to do with the
	value submitted. The Submit button requires a scripting language such as CGI or
	VBScript. In addition, the scripting language you are able to use (CGI, Perl, or
	VBScript) is dependent upon your Internet Service Provider.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbtool kbusage kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	
	=============================================================================
	
