---
layout: page
title: "Q257695: FIX: Invalid Page Fault When Using Data Environment Designer"
permalink: kb/257/Q257695/
---

## Q257695: FIX: Invalid Page Fault When Using Data Environment Designer

	Article: Q257695
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbVBp600bug kbDataEnv kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Invalid Page Fault occurs when opening or closing members of the
	DataEnvironment Designer.
	
	CAUSE
	=====
	
	A bug in Visual Basic sometimes causes heap corruption in the DataEnvironment
	Designer when the text name of a child node is longer than the text name of its
	parent node. For example, if the name of a connection is TestConn, and the name
	of a stored procedure under the connection is TestStoredProc, then this problem
	may occur when opening or closing the stored procedure.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDatabase kbVBp600bug kbDataEnv kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
