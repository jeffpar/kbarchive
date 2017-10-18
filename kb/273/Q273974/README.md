---
layout: page
title: "Q273974: PRB: Session_OnStart Fires When EnableSessionState=False"
permalink: kb/273/Q273974/
---

## Q273974: PRB: Session_OnStart Fires When EnableSessionState=False

	Article: Q273974
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbASP kbASPObj kbGrpDSASP kbDSupport
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the EnableSessionState directive is set to False in Active Server Pages
	(ASP) page, and you request this directive, the Session_OnStart event still
	executes the first time that the page is requested, and the ASPSESSIONID cookie
	is still set.
	
	The following code shows the EnableSessionState directive set to False:
	
	  <%@ Language=VBScript EnableSessionState=False %>
	  <HTML>
	  <BODY>
	  <%
	    'Server-Side code here.
	  %>
	  </BODY>
	  </HTML>
	
	In addition, if your Session_OnStart event references the Session object, and if
	you use Microsoft Visual Basic Scripting Edition (VBScript), you may receive the
	following error message:
	
	  Microsoft VBScript runtime error '800a000d'
	  Type mismatch: 'Session'
	
	NOTE: This error does not recur unless you restart the application because
	subsequent requests for the ASP page, even from new sessions, do not cause the
	Session_OnStart event to run.
	
	CAUSE
	=====
	
	EnableSessionState=False disables the use of the Session object for the ASP page
	and disables serialization of concurrent requests to the same Session.
	
	NOTE: By default, concurrent requests to the same Session are serialized; that
	is, only one request executes at a time. This avoids the problems that occur if
	two or more separate requests are writing data to the same Session object at the
	same time.
	
	RESOLUTION
	==========
	
	To fully disable Session for an ASP page, you must update the Internet
	Information Server (IIS) configuration. Because you cannot disable Session at a
	page level, you must disable it at a Virtual Directory/Web Application level as
	follows:
	
	1. Open the Internet Services Manager (MMC), and locate the Virtual
	  Directory/Web Application whose Session state you want to disable.
	
	2. Right-click the Virtual Directory/Web Application, and then click Properties.
	
	3. On the Directory, Virtual Directory, or Home Directory tab, click
	  Configuration.
	
	4. On the App Options tab, clear the Enable Session State object.
	
	5. Apply the changes.
	
	To avoid the "Type mismatch" error, if you set EnableSessionState=False, and the
	Session_OnStart event references the Session object, you can test for
	IsObject(Session) as follows:
	
	  Sub Session_OnStart
	    If IsObject(Session) Then
	      Session("Var") = "Value"
	    End If
	  End Sub
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q234771 FIX: Error 800a2328 Returned When Browsing a VB 6.0 WebClass
	
	  Q242425 Using Session Objects with Session State Disabled Returns Error
	
	  Q244465 HOWTO: Disable ASP Session State in Active Server Pages
	
	Additional query words: error 800a000d
	
	======================================================================
	Keywords          : kbASP kbASPObj kbGrpDSASP kbDSupport 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
