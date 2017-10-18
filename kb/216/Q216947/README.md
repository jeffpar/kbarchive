---
layout: page
title: "Q216947: How Special Characters in the Name Field Effect Certificates"
permalink: kb/216/Q216947/
---

## Q216947: How Special Characters in the Name Field Effect Certificates

	Article: Q216947
	Product(s): Internet Information Server
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes why, when special characters are included as part of a
	name in a certificate, they cause that part of the name to be encoded as a
	Unicode string rather than a printable string. This process of promoting string
	encoding from Printable to Unicode is fully documented in the relevant IETF
	standard (pkix part 1). However, applications written before the standard may
	have problems processing certificates, particularly CA Certificates, that
	contain Unicode names. Before including these special characters in a CA
	certificate name, it is advisable to confirm that all applications using
	certificates from a CA can correctly process certificates containing the Unicode
	names.
	
	This affects all releases of Microsoft Certificate Server, including version 1.0
	that shipped with the Windows NT Option Pack, the QFE update for Exchange
	Server, and the SP4 update.
	
	MORE INFORMATION
	================
	
	The IETF standard requires that where possible, the names in certificates be
	encoded as Printable Strings. The Printable String character set is as follows:
	
	  Upper case letters (A to Z)
	  Lower case letters (a to z)
	  Numbers (0 to 9)
	  Some punctuation characters (space) ' ( ) + , - . / : = ?
	
	The standard also requires that names containing any character outside of the
	Printable String character set are encoded as a type of Unicode string known as
	a BMP string. For example:
	
	  Jones and Partner's = Encoded as Printable String
	  Jones & Partner's = Encoded as BMP string
	
	If, when installing Certificate Server, you use a character outside of the
	Printable String character set as any part on the CA's name, that part of the
	CA's name will be encoded as a BMP string. In addition, any certificate that the
	CA issues will contain the same name and a BMP string in the issuer name of the
	certificate.
	
	As vendors update their products to conform to the new standard, this problem
	will diminish. However, it is advisable at this time to only use characters
	outside of the Printable String character set in a Certificate Server's name
	where you are confident that all applications can correctly process certificates
	containing BMP strings.
	
	Because the name is in a signed object (for example a certificate), removal of
	the BMP string requires that you reinstall the Certificate Server, and re- issue
	the certificates it has issued.
	
	Additional query words: Certificate, Encoding, Compatibility
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
