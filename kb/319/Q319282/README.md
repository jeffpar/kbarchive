---
layout: page
title: "Q319282: FIX: SETFLDSTATE() Does Not Work for Field with Default Value"
permalink: /kb/319/Q319282/
---

## Q319282: FIX: SETFLDSTATE() Does Not Work for Field with Default Value

	Article: Q319282
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix
	Last Modified: 01-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you append a blank record to a table that has a default value in one of the
	fields, and you use the SETFLDSTATE() function to make it appear that the value
	in that field has not been modified, GETFLDSTATE() shows that SETFLDSTATE() did
	not reset the field state.
	
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
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	Run the following code in Visual FoxPro 7.0 build 9262 to observe the behavior.
	
	  CLEAR
	  SET SAFETY OFF
	  * Delete old database and table.
	  DELETE FILE TestDBC.*
	  DELETE FILE TestTable.*
	  *!* Create database, and table with default value.
	  CREATE DATABASE testDBC
	  CREATE TABLE testTable (cField1 C(10) DEFAULT 'x', ;
	        cField2 C(10) )
	
	  SET MULTILOCKS ON
	  CURSORSETPROP("Buffering",5)
	
	  APPEND BLANK
	  *!*  4 for the changed default value.
	
	  ? "GetFldState(): " + STR(GETFLDSTATE("cfield1"))
	
	  *!* This should tell VFP that the default has not been changed.
	  ? SETFLDSTATE( 1, 3 )                    
	
	  *!* However, observe that SETFLDSTATE was ignored.
	  ? "GetFldState(): " + STR(GETFLDSTATE("cField1"))
	
	  *!* Clean up
	  TABLEUPDATE(1)
	  CLOSE DATABASES ALL
	
	Examine the results that appear on the desktop. The second GETFLDSTATE() function
	returns 4, which indicates that the field has been modified. However, the
	SETFLDSTATE() function marks the appended record as unmodified. The
	SETFLDSTATE() function is effectively ignored.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 kbVFP700sp1fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
