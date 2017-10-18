---
layout: page
title: "Q179958: When to Use &quot;Already Verified Authentication&quot;"
permalink: kb/179/Q179958/
---

## Q179958: When to Use &quot;Already Verified Authentication&quot;

	Article: Q179958
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Already Verified Authentication option is specified on the Security tab of
	the COM Transaction Integrator (COMTI) Remote Environment (RE) Properties dialog
	box.
	
	Under certain circumstances when you select that option, only a user ID is sent
	to the mainframe; no password is sent. The mainframe determines that this user
	ID has already been authenticated and does not require a password. This is
	possible when COMTI uses Microsoft Transaction Server (MTS) package credentials
	or Windows NT user credentials for authentication.
	
	However, if the COMTI security override is being used instead, the transport
	always insists on having both the user ID and the password. Both are sent to the
	host. If the Already Verified Authentication indicator is set on the RE, it is
	ignored in this case.
	
	MORE INFORMATION
	================
	
	Rationale for Using "Already Verified Authentication"
	-----------------------------------------------------
	
	When using integrated host security with MTS package credentials or Windows NT
	user credentials, mainframe credentials cannot be ascertained by COMTI or the
	client application.
	
	COMTI and SNA Server act as a trusted entity, verifying the user's identity
	first. Therefore, there is no need to send a password to the mainframe, which
	would waste more cycles to check it on the mainframe side.
	
	Rationale for Ignoring "Already Verified Authentication" When Using COMTI
	
	Security Override
	-----------------
	
	In this case, COMTI has direct access to the mainframe credentials. If COMTI
	would send only the user ID, an application could easily guess at one or another
	user ID, because user IDs are similar in most installations. Without having to
	know a password, the application could do things on the mainframe using the
	pilfered user ID.
	
	Identify security (ATTACHSEC=IDENTIFY in the CICS Connection definition) implies
	that the local logical unit (LU) on the computer has already verified the
	identity of the user, so the host can trust you. However, in the case of the
	application override, that is not true; COMTI is unable to determine who the
	user is.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100
	Version           : WINDOWS:1.0
	Issue type        : kbinfo
	
	=============================================================================
	
