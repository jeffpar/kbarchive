---
layout: page
title: "Q216904: How to Access a Client Authentication Certificate"
permalink: kb/216/Q216904/
---

## Q216904: How to Access a Client Authentication Certificate

	Article: Q216904
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can access a user's Client Authentication certificate from the Windows 2000
	Active Directory. A Client Authentication certificate is an optional
	UserCertificate property on the user object.
	
	MORE INFORMATION
	================
	
	The following Visual Basic or Visual Basic Script code will access the
	UserCertificate object:
	
	  Dim oUser, vCert
	  Dim strName, strDN
	  StrName = "CN=Frodo Baggins"
	  StrDN = "CN=Users,DC=iis,DC=nttest,DC=microsoft,DC=com"
	  Set oUser = GetObject("LDAP://" & strName & "," & strDN)
	  vCert = oUser.userCertificate
	  Set oUser = Nothing
	
	The strDN must be replaced with the domain information for your environment. In
	this example, it is set to the Users object in the IIS.nttest.microsoft.com
	domain.
	
	You can set a user's client authentication certificate by using the Directory
	Management administration tool.
	
	Note: If Microsoft Certificate Services is installed, then the certificate is
	automatically added to the user's list of certificates when the client requests
	a certificate.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
