---
layout: page
title: "Q230227: Using Certificate Server-Generated CA Certificates with Netscape"
permalink: kb/230/Q230227/
---

## Q230227: Using Certificate Server-Generated CA Certificates with Netscape

	Article: Q230227
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Certificate Authority (CA) certificates created by Microsoft Certificate Server
	are not Base64 encoded, which is expected by Netscape Navigator.
	
	MORE INFORMATION
	================
	
	The Bin264 utility is available to perform Base64 encoding of certificates.
	Please note that this utility is not supported by Microsoft in any way and is
	provided for testing purposes only.
	
	For more information about the Bin264 utility and Base64 encoding, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/security/tech/certificates/formats.asp
	
	The CertUtil utility installs automatically with Certificate Server 2.0 and can
	also be used to encode certificates to Base64.
	
	Usage: CertUtil [Options] -encode InFile OutFile, where InFile is the binary
	certificate and OutFile is the resulting Base64 certificate.
	
	Additional query words: root base-64 64-bit akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbhowto
	Solution Type     : kbnofix
	
	=============================================================================
	
