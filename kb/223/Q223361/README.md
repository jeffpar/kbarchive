---
layout: page
title: "Q223361: DOC: Return Values Incorrectly Described for Time.getDayofWeek"
permalink: /kb/223/Q223361/
---

## Q223361: DOC: Return Values Incorrectly Described for Time.getDayofWeek

	Article: Q223361
	Product(s): Microsoft Developer Network
	Version(s): WINDOWS:6.0; winnt:6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbservicepack kbVJ600fix kbGrpDSJava kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	- Microsoft Visual J++, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The return values of Time.getDayofWeek are incorrectly documented in the Visual
	J++ documentation found in the MSDN Library 6.0a.
	
	MORE INFORMATION
	================
	
	The documentation has been corrected in the Readme.htm file supplied with Visual
	Studio 6.0 Service Pack 3. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q230731 INFO: Visual Studio 6.0 SP3 Readme: Part 7 - Visual J++
	
	The Readme.htm correctly states the following:
	
	  The number returned by the getDayOfWeek method is always between 0 and 6
	  where a value of 0 represents Sunday.
	
	
	REFERENCES
	==========
	
	For the latest Microsoft Knowledge Base articles and other support information
	on Visual J++ and the SDK for Java, please see the following pages on the
	Microsoft Technical Support Web site:
	
	  http://support.microsoft.com/support/visualj/
	
	  http://support.microsoft.com/support/java/
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Rafael M. Munoz, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbservicepack kbVJ600fix kbGrpDSJava kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVJsearch kbAudDeveloper kbMSDNSearch kbZNotKeyword2 kbVJ600
	Version           : WINDOWS:6.0; winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
