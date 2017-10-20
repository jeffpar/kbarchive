---
layout: page
title: "Q129876: Error Trapping Options in the Advanced Options Dialog"
permalink: /kb/129/Q129876/
---

## Q129876: Error Trapping Options in the Advanced Options Dialog

{% raw %}

	Article: Q129876
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Advanced tab of the Options dialog box has the following three error
	trapping options:
	
	- Break on All Errors.
	
	- Break in Class Module.
	
	- Break on Unhandled Errors.
	
	This article explains in detail what it means to set each option.
	
	MORE INFORMATION
	================
	
	An "enabled" error handler is one that has been turned on by an On Error
	statement. An "active" error handler is an enabled handler that is in the
	process of handling an error.
	
	If an error occurs while an error handler is active (that is, between the
	occurrence of the error and a Resume, Exit Sub, Exit Function, or Exit Property
	statement), the current procedure's error handler can't handle the error.
	Control returns to the calling procedure. If the calling procedure has an
	enabled error handler, it is activated to handle the error. If the calling
	procedure's error handler is also active, control passes back through previous
	calling procedures until an enabled, but inactive, error handler is found. If no
	inactive, enabled error handler is found, the error is fatal at the point at
	which it actually occurred.
	
	Each time the error handler passes control back to the calling procedure, that
	procedure becomes the current procedure. Once an error is handled by an error
	handler in any procedure, execution resumes in the current procedure at the
	point designated by the Resume statement.
	
	If the "Break on All Errors" option is selected, any error causes the project to
	enter break mode, whether or not an error handler is active and whether or not
	the code is in a class module. In other words, error handlers are ignored when
	an error occurs.
	
	If the "Break in Class Module" option is selected, any unhandled error produced
	in a class module causes the project to enter break mode at the offending line
	of code in the class module. Setting this option in an OLE server is useful when
	debugging the server. Untrapped errors in OLE Automation objects are returned to
	the controlling application when the OLE Automation object is running as an
	executable file. Within the development environment, they are only returned to
	the OLE Automation controller if this option is not selected.
	
	How this option is set on the client side has absolutely nothing to do with
	breaking in OLE servers. The only way to get errors to break in an OLE server is
	to open the Options dialog in the OLE server project itself, and then choose
	either the "Break on All Errors" or the "Break in Class Module" option. You
	cannot do this from the client project.
	
	In a client, if you have the "Break in Class Module" option set, it just means
	you can break in a class module inside your project. This is useful because
	errors in class modules are always handled, even if you don't have an error
	handler. OLE packages them up and hands them to the calling procedure. Thus,
	even with the "Break on Unhandled Errors" option set, you will never be able to
	break in one of your class modules, whether you are acting as a client or as a
	server, even if you have no error handlers at all.
	
	Therefore, the phrase "Break in Class Module" really means "Break on Unhandled
	Errors in Class Modules," which is exactly what it does when this option is
	set.
	
	If the "Break on Unhandled Errors" option is set and an error handler is active,
	the error is trapped without entering break mode. If there is no active error
	handler, the error causes the project to enter break mode.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
