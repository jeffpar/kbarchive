---
layout: page
title: "Q193404: INFO: IntelliSense and Visual FoxPro 6.0"
permalink: /kb/193/Q193404/
---

## Q193404: INFO: IntelliSense and Visual FoxPro 6.0

	Article: Q193404
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
	
	IntelliSense, or Automatic Statement Completion, is the ability of an editor to
	complete design time function declarations, object references and other editing
	functions. This ability, which is integrated into other Visual Studio
	components, is not natively available in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	In order for IntelliSense to work, the editor needs to know explicitly, at
	design time, the referenced object type. Since Visual FoxPro is a weakly typed
	language, this information is not available during design time and is not
	available until run-time, with some exceptions. In order for the editor to know
	what object to examine for the appropriate methods and properties, a type
	declaration similar to the following is needed:
	
	     PUBLIC oForm
	     LOCAL oADO, oRef
	
	With the following statements, Visual FoxPro cannot resolve the references until
	run-time. The class for "myForm" actually depends upon the SET CLASSLIB setting
	at run-time. Similarly, oForm and oADO could potentially change on subsequent
	executions of that line of code. You cannot be sure what the references are
	until the code actually executes. Here is an example:
	
	     oForm = CREATEOBJECT('myForm') && Visual FoxPro Class
	     oADO  = oForm.myRecordSet      && Component Object Model (COM) Class
	     oRef  = oADO                   && Unknown object reference
	
	In Visual FoxPro, without a strongly typed language, we cannot know at design
	time that "oForm" is derived from the "myForm" class. In other Visual Studio
	languages, such as Visual C++, Visual Basic, and Visual J++, the strong language
	typing gives the editor and compiler system the ability to make use of
	IntelliSense.
	
	As an alternative to having native IntelliSense, there is a public domain utility
	called SuperClass available for download from the following World Wide Web URL:
	
	  http://www.classx.com
	
	This utility makes IntelliSense functionality available within Visual FoxPro. On
	the toolbar, click Tools and then locate the SuperClass utility.
	
	NOTE: The third-party contact information included in this article is provided to
	help you find the technical support you need. This contact information is
	subject to change without notice. Microsoft in no way guarantees the accuracy of
	this third-party contact information.
	
	REFERENCES
	==========
	
	Visual C++ User's Guide in the Microsoft Developer Network Library 6.0.
	
	Additional query words: kbVFp600 kbMiscTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
