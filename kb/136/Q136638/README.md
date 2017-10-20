---
layout: page
title: "Q136638: HOWTO: Send E-mail Programmatically Using MSMAPI OLE Control"
permalink: /kb/136/Q136638/
---

## Q136638: HOWTO: Send E-mail Programmatically Using MSMAPI OLE Control

{% raw %}

	Article: Q136638
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to can gain access to the MSMAPI OLE controls
	programmatically by using the CREATEOBJECT() function to create an instance of a
	form and the AddObject method to create an instance of the controls. Then you
	can work with the methods and properties of the controls programmatically. Note
	that although the .ocx control must be placed on a form, the form itself never
	has to be visible as is the case in the example given in this article.
	
	MORE INFORMATION
	================
	
	Code Sample
	-----------
	
	     * Create an instance of a form, and then add the MSMAPI.MAPISession and
	     * MSMAPI.MAPIMessages OLE controls to that form:
	
	     oform = CreateObject("form")
	     oform.addobject("Session1","olecontrol","MSMAPI.mapiSession")
	     oform.addobject("Message1","olecontrol","MSMAPI.mapiMessages")
	
	     * Call the Signon method of the MAPISession control. If the user is not
	     * logged into mail, this will prompt the user to sign on. This also sets
	     * the SessionId property for the MAPIsession control:
	
	     oform.Session1.signon
	
	     * Set the SessionId of the MAPIMessage control to the SessionId of the
	     * MAPISession control, which was just obtained:
	
	     oform.Message1.sessionid = oform.Session1.sessionid
	
	     * Compose an e-mail message and set the subject line and Message text:
	
	     oform.Message1.compose
	     oform.Message1.msgsubject = "Memo from my FoxPro app"
	     oform.Message1.msgnotetext = "This works"
	
	     * Sends the e-mail message. The (1) is required to send the message.
	
	     oform.Message1.send(1)
	
	     * Optionally, sign off from mail:
	
	     oform.Session1.signoff
	
	     * Optionally, release the objects if they are no longer needed:
	
	     release oform
	
	NOTE: The Session and Message controls continue to exist as long as the variables
	oSession and Omessage are in scope. These variables may be declared as public to
	ensure that the controls are available throughout the entire application.
	
	Additional query words: MAPI e-mail mail
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
