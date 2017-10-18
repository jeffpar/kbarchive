---
layout: page
title: "Q262878: FIX: Fatal Exception with Large Number of Variables or Objects"
permalink: kb/262/Q262878/
---

## Q262878: FIX: Fatal Exception with Large Number of Variables or Objects

	Article: Q262878
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4fix kbVS600s
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a large application written with Visual FoxPro is running, one of the
	following error messages may appear:
	
	  Alias is not found
	
	  -or-
	
	  Class "name" is not found
	
	  -or-
	
	  Object "name" is not found
	
	  -or-
	
	  Property "name" is not found
	
	  -or-
	
	  Variable "variable" is not found
	
	These error messages may be displayed multiple times. If one of these errors is
	displayed, it is followed by a fatal exception error.
	
	CAUSE
	=====
	
	This behavior may occur following any Visual FoxPro command after 32767 entries
	have been made into the Visual FoxPro name table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Visual FoxPro stores references to variables, objects (such as forms, classes,
	tables, and so forth), object properties, and references to child objects (such
	as text boxes, command buttons, OLE controls, and so forth) internally in a name
	table. When the name table contains more than 32767 entries, the behavior
	mentioned in the "Symptoms" section may occur. The fatal exception error has
	been found to occur under the following circumstances:
	
	- in very large applications that utilize multiple forms along with multiple
	  classes which have been extensively subclassed.
	
	- when using macro expansion/variable substitution to access the table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named "Demo.prg" (without the quotation marks) by using
	  the following code:
	
	  LOCAL lcAlias, nMem, x
	  CLEAR
	  @ 2,1 SAY "Starting User Object Memory Use"
	  @ 3,1 SAY SYS(1016)       && User Object Memory Use
	  @ 4,1 SAY "Current User Object Memory Use"
	
	  FOR x = 1 TO 100000
	  	lcAlias = "ABCDEF"
	  	CREATE CURSOR (lcAlias) (fld1 c(10))
	  	cValue = &lcAlias..fld1
	  	USE IN (lcAlias)
	  	@ 1,1 SAY lcAlias
	  	@ 5,1 SAY SYS(1016)  && User Object Memory Use
	  ENDFOR
	  RETURN
	
	2. Save and run the program file, and note that the following error message
	  eventually appears:
	
	  Alias is not found.
	
	3. After the error message appears, a fatal exception error occurs.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet kbVS600sp4fix kbVS600sp4 kbVS600sp5fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
