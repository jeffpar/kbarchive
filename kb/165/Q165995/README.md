---
layout: page
title: "Q165995: Valid User Fails to Authenticate with NT Challenge/Response"
permalink: /kb/165/Q165995/
---

## Q165995: Valid User Fails to Authenticate with NT Challenge/Response

	Article: Q165995
	Product(s): Internet Information Server
	Version(s): Winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have set IIS to use the Microsoft Windows NT Challenge/Response (NTCR), a
	valid user may not be able to successfully logon to IIS and will be prompted
	three times for his or her username and password. Then the user will get the
	following error message:
	
	  Access is denied.
	
	CAUSE
	=====
	
	By design, Windows NT Challenge/Response is supposed to pass the user's
	credentials to IIS and then be validated by the IIS server. If the user has been
	granted permission, the page will be accessed. If the user has NOT been granted
	permission, IIS will return the above error message.
	
	It should NOT return an authentication box. However, this may occur when the
	client is on the same subnet as the IIS server. When IIS challenges the client,
	the client thinks it should have access even if IIS is set to NTCR, and it pops
	up an authentication box. The credentials will show the following:
	
	  Resource:
	  Username:
	  Password:
	
	NOTE: The resource will be blank because NTCR failed.
	
	With Basic authentication type enabled, you would see the resource that you are
	trying to access. If you try and put in any credentials that are valid, it will
	fail except for the administrator/administrators of that IIS server.
	
	WORKAROUND
	==========
	
	To successfully be authenticated all the time, set the authentication type to
	Basic in Internet Service Manager, WWW properties. As a result, the client will
	be able to retrieve the correct resource no matter where it resides, and if the
	user is valid with Logon Locally Rights, he or she will gain access to the IIS
	server.
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : Winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
