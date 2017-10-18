---
layout: page
title: "Q318980: FIX: ICE Deleting Records in a Buffered Table"
permalink: kb/318/Q318980/
---

## Q318980: FIX: ICE Deleting Records in a Buffered Table

	Article: Q318980
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
	
	When you use optimistic table buffering and you append records to a table, and
	then you delete all the records in the table, you may receive the following
	error message:
	
	  Internal consistency error.
	
	If this message is reported, Visual FoxPro closes.
	
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
	
	Paste the following code in a program (.prg), and then run the file from the
	Command window:
	
	  LOCAL iRecordNum, iLoopVar
	
	  CLOSE DATABASES ALL
	  DELETE FILE testitem3.*
	  CREATE TABLE testitem3 (f1 c(5))
	
	  * Insert 1853 records in the table
	  FOR iLoopVar = 1 TO 1853   && Does not happen with 1852
	     INSERT INTO testitem3 VALUES ('xxxxx')
	  ENDFOR
	
	  INDEX ON f1 TAG f1
	  INDEX ON DELETED() TAG DELETED
	  USE
	
	  SET DELETED ON
	  USE testitem3 SHARED
	  SET ORDER TO 1
	  SET MULTILOCKS ON
	  =CURSORSETPROP('buffering', 5)
	  DELETE ALL
	
	  * Append 16 records to the table
	  FOR iRecordNum = 1 TO 16
	     ? iRecordNum
	     APPEND BLANK
	  NEXT iRecordNum
	
	  BROWSE NOWAIT
	
	After you run the program, you receive the error message that is described in the
	"Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
