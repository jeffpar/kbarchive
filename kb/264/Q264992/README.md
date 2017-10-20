---
layout: page
title: "Q264992: PRB: Error C0042116 &quot;Problem Installing CAB x.CAB&quot;"
permalink: /kb/264/Q264992/
---

## Q264992: PRB: Error C0042116 &quot;Problem Installing CAB x.CAB&quot;

{% raw %}

	Article: Q264992
	Product(s): Internet Information Server
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Package and Deployment Wizard (PDW) to deploy an Internet
	Information Server (IIS) application to a Web server, you receive the following
	error message:
	
	  Unexpected error number C0042116 has occurred: The Web server returned the
	  following error: There was a problem installing CAB x.CAB. Please check it
	  and the INF x.INF for validity.
	
	CAUSE
	=====
	
	This error occurs because the Scripts virtual directory is configured to run
	under Microsoft Transaction Server and Microsoft Component Object Model
	(MTS/COM+), and the Identity of the MTS/COM+ package does not have sufficient
	rights to install the CAB file.
	
	RESOLUTION
	==========
	
	Internet Information Server 4.0:
	
	To resolve this problem in IIS 4.0, set the Scripts virtual directory to run
	in-process as follows:
	
	1. Start the Internet Service Manager. To do this, click Start, select Program
	  Files, and then select Windows NT 4.0 Option Pack. Select Microsoft Internet
	  Information Server, and then select Internet Service Manager.
	
	2. Expand the Internet Information Server node in the left pane to reveal the
	  available computers.
	
	3. Expand the computer name in the left pane to reveal the available Web sites.
	
	4. Expand the Web site to which you are attempting to deploy your application.
	  This reveals the available virtual directories.
	
	5. Right-click the Scripts virtual directory, and select Properties.
	
	6. On the virtual directory, clear the Run in separate memory space check box.
	
	Internet Information Services 5.0:
	
	To resolve this problem in IIS 5.0, set the Application Protection in the Scripts
	virtual directory as follows:
	
	1. On a Windows-2000 based computer, click Start, and then select Programs.
	  Point to Administrative Tools, and then click Internet Services Manager.
	
	2. Expand the computer name in the left pane to reveal the available Web sites.
	
	3. Expand the Web site to which you are attempting to deploy your application.
	  This reveals the available virtual directories.
	
	4. Right-click the Scripts virtual directory, and select Properties.
	
	5. In the Scripts virtual directory, set the Application Protection to either
	  Low(IIS Process) or High(Isolated).
	
	  NOTE: If you set the Application Protection to run as a High (Isolated)
	  process, you should configure the Identity of the COM+ package to run under
	  an account that has Administrative rights.
	
	MORE INFORMATION
	================
	
	Because the Posting Acceptor (Cpshost.dll) calls the RevertToSelf API before it
	calls the Rinstall.exe application, the rinstall.exe application runs under the
	context of the process token rather than the thread token. Unless the process
	token is configured specifically for the Package and Deployment Wizard, in most
	cases, it will be in the IWAM_computername account. The IWAM_computername
	account does not have sufficient rights to install the CAB file.
	
	REFERENCES
	==========
	
	For additional information about the Package and Deployment Wizard, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q242767 INFO: Deploying WebClasses with the Package and Deployment Wizard
	  (PDW)
	
	Additional query words: Error C0042116
	
	======================================================================
	Keywords          : kberrmsg kbDeployment kbVBp600 kbWebClasses kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbVBSearch kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis500 kbiis400 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
