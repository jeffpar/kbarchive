---
layout: page
title: "Q77243: BUG: LinkTimeOut of -1 Waits Only 6553.5 Secs Before Time Out"
permalink: /kb/077/Q77243/
---

## Q77243: BUG: LinkTimeOut of -1 Waits Only 6553.5 Secs Before Time Out

{% raw %}

	Article: Q77243
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 2.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 2.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Contrary to the documentation and online Help for Microsoft Visual Basic,
	setting the LinkTimeOut property of a control to -1 will not cause the control
	to wait forever for a DDE operation to complete. Setting the LinkTimeOut
	property to -1 will cause the control to wait for 65535 intervals of 1/10
	second, for a total of approximately 1 hour and 49 minutes.
	
	WORKAROUND
	==========
	
	To work around this problem, you can trap the DDE time-out error using the On
	Error statement in Visual Basic. If the error was "Timeout while waiting for DDE
	response," you can retry the DDE operation until it succeeds. The following is a
	code example:
	
	     Sub DDE_Retry_Forever (Source as Control, commandx$)
	        On Local Error Goto Handler
	
	        Source.LinkExecute commandx$
	        Exit Sub
	
	        Handler:
	        If Err = 286 Then
	           Resume
	        Else
	           Error Err
	        End If
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: buglist1.00 buglist2.00 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB200
	Version           : :1.0,2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
