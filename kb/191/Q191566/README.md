---
layout: page
title: "Q191566: PRB: Cannot Access Network Resource If Client Certificate Mapped"
permalink: kb/191/Q191566/
---

## Q191566: PRB: Cannot Access Network Resource If Client Certificate Mapped

	Article: Q191566
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbASP kbGrpDSASP kbDSupport kbiis400 kbiis500
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Active Server Pages (ASP) access to network resources fails if the application
	is running a Secure Sockets Layer (SSL) session that utilizes a client
	certificate that is mapped to a Microsoft Windows NT account.
	
	Examples of errors include the following:
	
	- If you use Scripting.FileSystemObject to access a file that is stored on a
	  network share, you receive the following error message:
	
	  Server object error 'ASP 0177:800a0046'
	  Server.CreateObject Failed
	
	- If you access a Microsoft Access database on a network server, you receive
	  the following error message:
	
	  Microsoft OLE DB Provider for ODBC Drivers error '80004005'
	
	  [Microsoft][ODBC Microsoft Access 97 Driver] The Microsoft Jet
	  Database engine cannot open the file '******'. It is already opened
	  exclusively by another user, or you need permission to view its data.
	
	For additional information on accessing network resources from IIS, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q158229 INFO: Security Ramifications for IIS Applications
	
	CAUSE
	=====
	
	These errors occur because the Client Certificate Mapping process performs a
	NETWORK logon when it impersonates the mapped userid. A NETWORK logon disallows
	access to resources outside of those that exist on the local computer.
	
	RESOLUTION
	==========
	
	To work around this issue, move data locally, or do not map your client
	certificate to a Windows NT account. Other options include using Anonymous or
	Basic authentication.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbGrpDSASP kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
