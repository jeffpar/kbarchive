---
layout: page
title: "Q115815: How to Use the Backslash Character in AppleScript Script"
permalink: /kb/115/Q115815/
---

## Q115815: How to Use the Backslash Character in AppleScript Script

	Article: Q115815
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The backslash (\) character has a special meaning when it is part of a string in
	an AppleScript script. The backslash is used to indicate the start of an escape
	sequence. To use a backslash in an AppleScript string, use two backslashes (\\).
	
	MORE INFORMATION
	================
	
	For example, the following AppleScript script is meant to change the default
	folder from the main FoxPro folder to the TUTORIAL subfolder.
	
	     tell application "Microsoft FoxPro"
	        Do Script "SET DEFAULT TO .\tutorial "
	     end tell
	
	The \t will be interpreted as a horizontal TAB character that will cause the
	command to fail without an error message. To correct this problem, the syntax of
	the AppleScript script should be:
	
	     tell application "Microsoft FoxPro"
	        Do Script "SET DEFAULT TO .\\tutorial"
	     end tell
	
	Depending on what character follows the backslash, three results could occur:
	
	- The command will fail without an error message.
	
	- The command will fail, causing an error message such as "Unrecognized
	  phrase/keyword in command" in Microsoft FoxPro.
	
	- The command will cause an error message such as "Expected "" but found
	  unknown token" in the AppleScript Editor.
	
	REFERENCES
	==========
	
	"AppleScript Language Reference," Developer Technical Publications, Apple
	Computer, 1993
	
	Additional query words: VFoxMac FoxMac 2.50 Apple Script back slash
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro250cMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,2.5c,3.0b
	
	=============================================================================
	
