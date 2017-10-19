---
layout: page
title: "Q262789: INFO: New SYS(2800) Function Improves Magnifier Accessibility"
permalink: /kb/262/Q262789/
---

## Q262789: INFO: New SYS(2800) Function Improves Magnifier Accessibility

	Article: Q262789
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbGrpDSFox kbDSupport kbVS600sp4
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SYS(2800) function controls Active Accessibility (AA) options in Visual
	FoxPro 6.0. Visual Studio 6.0 Service Pack 4 adds this function to Visual FoxPro
	6.0.
	
	MORE INFORMATION
	================
	
	One of the Windows 2000 Logo requirements is that Accessibility clients, such as
	the Magnifier utility, be able to follow the keyboard focus as a user moves from
	control to control. Because Visual FoxPro controls are bitmaps and not windows,
	they do not offer an interface that allows for the detection of keyboard
	movements by the operating system. For example, in Visual FoxPro, forms and the
	Visual FoxPro desktop are windows. Objects such as command buttons, list boxes,
	combo boxes, and text boxes are bitmaps in windows.
	
	The SYS(2800,nflags) functions accept the following parameters for the NFLAGS
	value:
	
	+---------------------------------------------------------------------------------------------+
	| Value | Description                                                                         | 
	+---------------------------------------------------------------------------------------------+
	| 0     | Active Accessibility disabled.                                                      | 
	+---------------------------------------------------------------------------------------------+
	| 32    | Used to create a  fake caret. For AA client apps that follow the caret (magnifier). | 
	+---------------------------------------------------------------------------------------------+
	
	REFERENCES
	==========
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual Studio 6.0 Service
	Pack 5.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbGrpDSFox kbDSupport kbVS600sp4 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
