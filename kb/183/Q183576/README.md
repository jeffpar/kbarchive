---
layout: page
title: "Q183576: Problems Using Visual Basic Sample Program (ado_vb)"
permalink: /kb/183/Q183576/
---

## Q183576: Problems Using Visual Basic Sample Program (ado_vb)

	Article: Q183576
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Several problems occur when you try to use certain functions in the Visual Basic
	sample program located in the following subdirectory:
	
	    ..\sna\samples\ado_vb.
	
	This is the list of problems:
	
	- Multiple error message dialog boxes appear for each error; that is, one for
	  the Visual Basic (VB) error and one for each error in the Connection object's
	  error collection.
	
	- Control buttons and menu items are enabled or disabled inappropriately.
	
	- After you use the Filter, Find, OpenRS, or Sort command, the next time the
	  function is invoked, the input dialog box does not display the previous value
	  used.
	
	- The tab order on the controls is wrong; that is, when you are editing a
	  record, selecting a tab may move the cursor beyond the next text box.
	
	- When a remote command has completed successfully, the message from the AS/400
	  is not returned to the application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.0, included with Microsoft SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
