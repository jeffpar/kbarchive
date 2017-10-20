---
layout: page
title: "Q131181: How to Manage the Exiting Process with QueryUnLoad Event"
permalink: /kb/131/Q131181/
---

## Q131181: How to Manage the Exiting Process with QueryUnLoad Event

{% raw %}

	Article: Q131181
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a user attempts to leave a form, you want to query the user to ensure that
	they really want to leave the form. Using the QueryUnload event of a form, you
	can ask the user, and then take appropriate action in response.
	
	MORE INFORMATION
	================
	
	As described in the Help menu, the QueryUnload event occurs before the Destroy
	event. The ReleaseType property is set prior to the QueryUnload event being
	called. The QueryUnload event occurs when:
	
	- The CLEAR WINDOWS, RELEASE WINDOWS, or QUIT command is executed in code.
	
	- The user double-clicks the Control-menu box.
	
	- The user chooses Close from the Control menu on a Form.
	
	QueryUnload is where you should put your exit confirmation dialog box to verify
	that the user really wants to leave. The QueryUnload event uses a related
	property, the ReleaseType property, to indicate how the user is exiting. This is
	a particularly useful for users choosing the Close option from the Control menu
	on a form.
	
	The following table summarizes the values for the ReleaseType property and
	indicates when the QueryUnload event is called.
	
	Action                 ReleaseType Value    QueryUnload Called?
	---------------------------------------------------------------
	QUIT                   2                    Yes
	CLEAR WINDOWS          1                    Yes
	RELEASE WINDOWS        1                    Yes
	Click in Close Box     1                    Yes
	RELEASE thisform       0                    No
	
	Note that the QueryUnload event is not called when a RELEASE thisform command is
	called. Therefore, if you are using the RELEASE thisform command as a means of
	exiting a form, you won't be able to use the code example below in the
	QueryUnload event; you'll need to use an alternate method to achieve the same
	result.
	
	Code Sample
	-----------
	
	The following code sample demonstrates how to use the QueryUnload event in a
	form:
	
	     *--------------------------------------------------------------*
	     * Program: QUNLDTST - QueryUnload test code                    *
	     * Purpose: Demonstrates trapping user exit from form.      *
	     *--------------------------------------------------------------*
	     cMessageTitle = 'Test'
	     cMessageText  = 'Did you *really* mean to close this form?'
	     nDialogType   = 4 + 32 + 256
	     *  4   = Yes and No buttons
	     *  32  = Question mark icon
	     *  256 = Second button is default
	     nAnswer = MESSAGEBOX(cMessageText, nDialogType, cMessageTitle)
	     DO CASE
	       CASE nAnswer = 6
	         RELEASE THISFORM
	       CASE nAnswer = 7
	         NODEFAULT
	     ENDCASE
	
	The use of NODEFAULT in the DO CASE construction overrides the default action of
	closing the form, in effect canceling the user's actions.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
