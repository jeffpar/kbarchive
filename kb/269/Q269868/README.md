---
layout: page
title: "Q269868: How to Bypass the Authentication Prompt When You Use OWA"
permalink: kb/269/Q269868/
---

## Q269868: How to Bypass the Authentication Prompt When You Use OWA

	Article: Q269868
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Outlook Web Access, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Outlook Web Access (OWA) forces an incoming client to log on to the
	site. In most cases, the IIS computer is configured to use Basic authentication
	with SSL. Because OWA forces the client to log on and the server requires Basic
	authentication, a dialog box appears to the client to enter his or her
	credentials when they attempt to access OWA from the Logon.asp page
	(http://servername/exchange/logon.asp).
	
	MORE INFORMATION
	================
	
	In instances where a site is required to present authentication at the root of
	the site (for example, http://servername), and then go to the Exchange directory
	after authentication, it may be necessary to avoid the force of authentication
	that OWA initiates. In these situations, when the user tries to log on to the
	page (Logon.asp), they are presented with another dialog box to gain
	authentication to the OWA mailbox even though they have already provided them
	previously.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To work around this, you need to modify the following section of code, which is
	located in Logonfrm.asp:
	
	  '=======================
	  ' MainLogon
	  ' Authenticates, and logs on user
	  '
	  '=======================
	   Sub MainLogon
	   
	   	On Error Goto 0
	   
	       urlIsNewWindow = Request.QueryString("isnewwindow")
	   	CheckSession
	   
	       ' Logoff if already logged on
	   	ClearSession
	       SetSessionStuff
	   
	   	bstrMailbox = Request.QueryString("mailbox")
	   <BR/>
	
	   	If Session(CURRENT_MAILBOX) <> bstrMailbox Then
	           Session(CURRENT_MAILBOX) = bstrMailbox
	   		Response.Buffer = TRUE
	   		Response.Status = ("401 Unauthorized")
	   		Response.end
	   	End If
	
	The section of this code that must be modified is the following "If...then"
	statement:
	
	   	If Session(CURRENT_MAILBOX) <> bstrMailbox Then
	           Session(CURRENT_MAILBOX) = bstrMailbox
	   		Response.Buffer = TRUE
	   		'Response.Status = ("401 Unauthorized")
	   		'Response.end
	   	End If
	
	Both the 'Response.Status = ("401 Unauthorized")' and Response.end statements
	need to be remarked (') out. The "401 Unauthorized" error message that is being
	set is sent back to the client the first time regardless of whether the client
	has already logged on successfully to the Web site. This is the statement that
	actually forces the second authentication prompt. The last statement
	(Response.end) stops any further code execution from occurring.
	
	The OWA code will still properly assign the variables that are needed to bring up
	the appropriate mailbox without another authentication dialog box.
	
	Additional query words: owa authentication 401 force
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbiisSearch kbiis500 kbiis400 kbiis300 kbOWASearch kbOWA550
	Version           : :3.0,4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
