---
layout: page
title: "Q115192: ADT2: Error in Help Files for Custom Control Refresh Method"
permalink: kb/115/Q115192/
---

## Q115192: ADT2: Error in Help Files for Custom Control Refresh Method

	Article: Q115192
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	Novice: Requires knowledge of the user interface on single-user computers.
	
	SYMPTOMS
	========
	
	The Refresh method syntax in the Help files for the Scroll Bar and Calendar
	custom controls is incorrect. These custom controls and their Help files are
	included with the Microsoft Access Developer's Toolkit (ADT) version 2.0.
	
	NOTE: In Microsoft Access for Windows 95 version 7.0, the Help files contain the
	correct syntax. (The bracket notation is not used.)
	
	RESOLUTION
	==========
	
	The correct syntax for the Refresh method for the Scroll Bar and Calendar custom
	controls is:
	
	  calendar.object.[refresh]
	
	-or-
	
	  scroll.object.[refresh]
	
	Make sure to use brackets ([]) around the word "refresh."
	
	MORE INFORMATION
	================
	
	The ADT includes a Help file for each of the three custom controls shipped with
	the ADT. Only the Data Outline custom control Help file has the correct syntax
	for the Refresh method.
	
	Using the incorrect syntax listed in the other Help files will generate the error
	message:
	
	  Method not applicable for this object
	
	REFERENCES
	==========
	
	For more information about the Refresh method, search for "Refresh," and then
	"Refresh Method" by double-clicking the Data Outline Control Help icon in the
	Microsoft ADT program group in Program Manager.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	
	=============================================================================
	
