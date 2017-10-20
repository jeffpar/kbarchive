---
layout: page
title: "Q319041: FIX: Internal Consistency Error with View and GOTO Command"
permalink: /kb/319/Q319041/
---

## Q319041: FIX: Internal Consistency Error with View and GOTO Command

{% raw %}

	Article: Q319041
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use table buffering with a table that has a compound index file (.cdx),
	and you issue a GOTO command, you receive the following error message:
	
	  Internal Consistency Error
	
	After you receive this message, Visual FoxPro closes.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0.
	
	This problem was first corrected in Visual FoxPro for Windows 7.0 Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Paste the following code in a program (.prg) file named Test, and then run the
	program from the Command window:
	
	  SET SAFETY OFF
	  ON ERROR *
	  CLOSE DATABASES  ALL
	  DELETE DATABASE Test DELETETABLES
	  CREATE DATABASE Test
	  CREATE TABLE Test (F1 c(1))
	  FOR i=1 TO 196/2
	     INSERT INTO Test VALUES("a")
	     INSERT INTO Test VALUES("b")
	  NEXT
	  INDEX ON F1 tag test
	  SET ORDER TO 1
	  SET MULTILOCKS ON
	  CURSORSETPROP("Buffering",5)
	  REPLACE f1 WITH "d" FOR f1="b"
	  REPLACE f1 WITH "b" FOR f1="a"
	  INSERT INTO Test VALUES("c")
	  GO 196
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
