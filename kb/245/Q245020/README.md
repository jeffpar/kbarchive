---
layout: page
title: "Q245020: BUG: Bus Error When Copying and Pasting In Browse Window"
permalink: /kb/245/Q245020/
---

## Q245020: BUG: Bus Error When Copying and Pasting In Browse Window

{% raw %}

	Article: Q245020
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbvfp300b kbXBase KbDBFDBC kbGrpDSFox
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro for Macintosh quits with a type 2 error, or the Macintosh computer
	stops responding, reporting a bus error in some cases, when copying and pasting
	in a Browse window. An error of type 11 may also appear.
	
	CAUSE
	=====
	
	This is known to happen when the field that is the copy source and copy
	destination is defined as eight characters wide. Microsoft has tested this on
	Macintosh operating systems 7.5.3, OS 8.1, OS 8.5, OS 8.5.1 and OS 9. We presume
	the problem happens on other Macintosh operating systems as well.
	
	RESOLUTION
	==========
	
	If it is possible, do not use character fields with a width of eight to copy and
	paste into.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code to create a new table, add two records and browse it:
	
	  CREATE TABLE test (test1 c(8), test2 c(10))
	  INSERT INTO test (test1,test2) VALUES ("Hello","Goodbye")
	  APPEND BLANK
	  BROWSE
	
	2. The test1 field is a character field that is eight characters wide. Copy the
	  data in it with either CMD+C or with the Copy command on the Edit menu.
	
	3. Move to the second record in the test1 field by using the down arrow key.
	
	4. Paste the data into the second record with either CMD+V or the Paste command
	  on the Edit menu.
	
	5. If the Macintosh computer does not stop responding or if Visual FoxPro does
	  not quit with an error of type 2, continue copying and pasting in the test1
	  field.
	
	Cutting and pasting also causes the computer to quit. Copy or cut and then
	pasting in a character field wider or narrower than eight characters has not
	been reported to be a problem.
	
	Additional query words: lock lockup freeze hang kbDSE
	
	======================================================================
	Keywords          : kbvfp300b kbXBase KbDBFDBC kbGrpDSFox 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
