---
layout: page
title: "Q222028: Setting Up Digest Authentication for Use with IIS 5.0"
permalink: /kb/222/Q222028/
---

## Q222028: Setting Up Digest Authentication for Use with IIS 5.0

	Article: Q222028
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Digest Authentication is new to Windows 2000 and Internet Information Services
	5.0. This form of authentication encrypts the user's password information, and
	provides a mechanism for aiding in the prevention of some common server attacks
	(such as a replay attack).
	
	In order to use Digest Authentication in Windows 2000, the server must have
	access to an Active Directory Server that is set up for Digest Authentication.
	For information, please refer to the following IIS documentation:
	
	  http://localhost/iishelp/iis/htm/core/iiauths.htm#enabledigest
	  (http://localhost/iishelp/iis/htm/core/iiauths.htm#enabledigest)
	
	If the server running IIS is not a Active Directory Server, or does not have
	access to the Active Directory, this authentication will not work. For more
	information about making the server a Directory Server, see the Windows 2000
	documentation.
	
	If the server is already a Directory Server, perform the following steps:
	
	1. Open the Active Directory Users and Computers.
	
	2. Open the domain that you want to administer.
	
	3. Double-click the user name that you want to use with Digest Authentication.
	
	4. In Account Options, select Store password using reversible encryption.
	
	5. Click OK.
	
	6. Reset the user's password now in order for the encryption to take place. To
	  reset the user's password, right-click the user name in the directory and
	  click Reset Password.
	
	7. Click OK.
	
	In order for Internet Information Services 5.0 to use Digest Authentication, you
	must select it in Internet Service Manager. To do this, perform the following
	steps:
	
	1. Open Internet Services Manager.
	
	2. Expand the Web server that you want to make the change in, and then open the
	  Web site's properties.
	
	3. Click the Directory Security tab.
	
	4. Under Anonymous Access and Authentication Control, click Edit.
	
	5. Select Digest Authentication from the list, and then click OK.
	
	MORE INFORMATION
	================
	
	For more information about Digest Authentication, see RFC2069, or the IETF
	(Internet Engineering Task Force) document found at the following Web address:
	
	  ftp://ftp.ietf.org/rfc/rfc2617.txt
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
