---
layout: page
title: "Q185653: FIX: MAPIMessage.Object in Watch Window Causes Program Error"
permalink: kb/185/Q185653/
---

## Q185653: FIX: MAPIMessage.Object in Watch Window Causes Program Error

	Article: Q185653
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Scrolling up and down in the Debug Watch window to see the properties of a
	MAPIMessage.Object causes an Application error and Visual FoxPro is shut down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure that you have Microsoft Exchange installed on the test computer and
	  have created a valid Exchange Profile.
	
	2. Create a program file and type the following code:
	
	        oleMAPISession = CREATEOBJECT( "MSMAPI.MAPISession" )
	        oleMAPIMessage = CREATEOBJECT( "MSMAPI.MAPIMessages" )
	        WITH oleMAPISession
	           .Signon()
	              IF ( .SessionID > 0 )
	                 oleMAPIMessage.SessionID = .SessionID
	                 ACTIVATE WINDOW watch
	                 oleMAPIMessage.FETCH()
	                 SUSPEND
	              ENDIF
	         ENDWITH
	
	3. Save and run the program.
	
	4. When the Debug window opens (this may take a minute depending the speed of
	  the computer), enter "oleMapiMesssage" (without the quotation marks) in the
	  Watch window.
	
	5. Expand the MAPI control (oleMapiMessage) and scroll down or up in the Watch
	  window.
	
	At this point, you will get an Application error and Visual FoxPro shuts down.
	
	Additional query words: vfoxwin kbDSupport kbdse kbvfp600fix
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
