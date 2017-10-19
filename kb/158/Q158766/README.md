---
layout: page
title: "Q158766: PRB: VALID Behavior on @..GET Different in Version 5.0"
permalink: /kb/158/Q158766/
---

## Q158766: PRB: VALID Behavior on @..GET Different in Version 5.0

	Article: Q158766
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,2.5c,2.6a; WINDOWS:3.0,3.0b,5.0,6.0; :3.0
	Operating System(s): 
	Keyword(s): kbinterop kbvfp300 kbvfp500 kbvfp600 kbvfp
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro for Windows 3.0x and 5.0 invoke the VALID clause upon execution of
	a MODIFY MEMO command, whereas FoxPro for Windows 2.6x does not.
	
	WORKAROUND
	==========
	
	The suggested workaround is to set a flag based on the version and test the flag
	prior to executing any Valid code.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Since Visual FoxPro for Windows is now object-oriented, the Valid event is
	firing properly. The cursor has indeed left the GET field; therefore, the MODIFY
	MEMO window now has the focus.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Enter and run the following program in both Visual FoxPro 5.0 (or 3.0x) and
	FoxPro for Windows 2.6x and notice that Visual FoxPro invokes the READ VALID
	clause, whereas FoxPro for Windows does not. On the Program menu, click Cancel
	to exit the program:
	
	     CLEAR
	     ON KEY LABEL f4 DO modiproc
	
	     *  use a table that has a memo field such as the
	     *  \foxprow\tutorial\salesman.dbf or \vfp\samples\data\employee.dbf
	     *  execute the following code which creates a Readtest.dbf.
	
	     CREATE TABLE ReadTest (char1 C(10), char2 C(10), memo1 M(4))
	     APPEND BLANK
	     REPLACE memo1 WITH ;
	     "notice that the Wait Window does display in Visual FoxPro"
	     @ 2,2 SAY 'tab into the second get field, then press the F4 key'
	     @ 4,2 GET char1
	     @ 4,20 GET char2 VALID testvalid()
	     READ
	     CLEAR READ
	
	     FUNCTION modiproc
	       MODIFY MEMO memo1
	       RETURN
	
	     FUNCTION testvalid   && char2 valid
	       WAIT WINDOW "I am in the valid of the second get"
	       RETURN
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp300 kbvfp500 kbvfp600 kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbFoxPro260aMac kbFoxPro250cMac kbVFP300Mac kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : MACINTOSH:2.5b,2.5c,2.6a; WINDOWS:3.0,3.0b,5.0,6.0; :3.0
	Issue type        : kbprb
	
	=============================================================================
	
