---
layout: page
title: "Q255502: PRB: Err Msg: ASP 0178 When You Run a WebClass in Windows 2000"
permalink: /kb/255/Q255502/
---

## Q255502: PRB: Err Msg: ASP 0178 When You Run a WebClass in Windows 2000

{% raw %}

	Article: Q255502
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCOMt kbOSWin2000 kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis500
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 2000 
	- Microsoft Internet Information Server 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a WebClass (IIS Application) in Visual Basic 6.0 under Windows
	2000, the following error message appears in the browser:
	
	  Server object, ASP 0178 (0x800A0005) The call to Server.CreateObject failed
	  while checking permissions. Access is denied to this object.
	
	This error only occurs when you run the WebClass from within the Visual Basic
	integrated development environment (IDE). It does not occur when you run the
	WebClass in a compiled state.
	
	CAUSE
	=====
	
	The authenticating user, usually the IUSR_<computername> account if you
	use anonymous access, does not have the appropriate permissions to access the
	DCOM Server (VB6.exe in this case). When you debug WebClasses in the Visual
	Basic IDE, the "launching user" is the Interactive user and the user who is
	accessing the DCOM Server is the "authenticating user."
	
	Because there is no DCOM entry for VB6.exe, DCOM uses the default permissions. In
	Windows 2000, the DCOM default access permissions are only given to the System
	account and the launching user by default. Because the launching user and the
	user accessing the DCOM Server are not the same, the error occurs.
	
	WORKAROUND
	==========
	
	To work around this problem, add a DCOM entry for VB6.exe into the registry.
	This will enable you to set specific DCOM permissions for debugging WebClasses
	in Visual Basic. The instructions for doing this are in the following Microsoft
	Knowledge Base article:
	
	  Q259725 PRB: Error Occurs When You Debug a COM+ Component Under the Visual
	  Basic IDE with an ASP Client
	
	MORE INFORMATION
	================
	
	This behavior does not occur in Windows NT 4.0 and Internet Information Server
	(IIS) 4.0.
	
	For additional information regarding the ASP 0178 error under Windows NT 4.0,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q198432 PRB: Server Object Error 'ASP 0178' Instantiating COM Object
	
	  Q192152 PRB: Server Object Error 'ASP 0178 : 800a0005' from WebClasses
	
	Please see the following MSDN Online Library Help topic for further information
	on COM security:
	
	  COM Security Defaults
	  (http://msdn.microsoft.com/library/psdk/com/security_0icz.htm)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCOMt kbOSWin2000 kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis500 
	Technology        : kbOSWin2000 kbVBSearch kbiisSearch kbAudDeveloper kbOSWinSearch kbZNotKeyword6 kbiis500 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :2000,5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
