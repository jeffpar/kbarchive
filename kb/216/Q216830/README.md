---
layout: page
title: "Q216830: How to View the Contents of a Certificate"
permalink: /kb/216/Q216830/
---

## Q216830: How to View the Contents of a Certificate

{% raw %}

	Article: Q216830
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Option Pack ships with a tool called CertUtil, which can be used
	to display information about certificates. Most certificates are in one of two
	formats, either Base64-encoded or DER-encoded binary. CertUtil cannot handle the
	former directly, but it does have an option for converting the file from Base64
	to binary.
	
	MORE INFORMATION
	================
	
	If the file is Base64 encoded, you will first need to convert it. You can check
	the file to see if it's Base64 encoded or not. If it is Base64 encoded, it will
	look similar to the following:
	
	  
	
	  -----BEGIN CERTIFICATE-----
	  IjCCBMowggQzoAMCAQICEAlLTA9Y1WjWPxvngISRWxQwDQYJKoZIhvcNAQEEBQAw
	  gcwxFzAVBgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQLExZWZXJpU2lnbiBU
	  cnVzdCBOZXR3b3JrMUYwRAYDVQQLEz13d3cudmVyaXNpZ24uY29tL3JlcG9zaXRv
	  cnkvUlBBIEluY29ycC4gQnkgUmVmLixMSUFCLkxURChjKTk4MUgwRgYDVQQDEz9W
	  C2CGSAGG+EUBBwEBMIAwKAYIKwYBBQUHAgEWHGh0dHBzOi8vd3d3LnZlcmlzaWdu
	  LmNvbS9DUFMwYgYIKwYBBQUHAgIwVjAVFg5WZXJpU2lnbiwgSW5jLjADAgEBGj1W
	  ZXJpU2lnbidzIENQUyBpbmNvcnAuIGJ5IHJlZmVyZW5jZSBsaWFiLiBsdGQuIChj
	  KTk3IFZlcmlTaWduAAAAAAAAMBEGCWCGSAGG+EIBAQQEAwIHgDCBhgYKYIZIAYb4
	  RQEGAwR4FnZkNDY1MmJkNjNmMjA0NzAyOTI5ODc2M2M5ZDJmMjc1MDY5YzczNTli
	  ZWQxYjA1OWRhNzViYzRiYzk3MDE3NDdkYTVkM2YyMTQxYmVhZGIyYmQyZTg5MjFm
	  YTU2YmY0ZDQxMTQ5OTdhM2I4NDNmNGU1OTI2NTQxMA0GCSqGSIb3DQEBBAUAA4GB
	  AInZL/R7kMLBcunvA2KRxe+BE2i58wQBrlhtBk5kQ3oYSUsyjfEV3JiH/aBjC8QL
	  NYx0vBUt2bcYTZtmPLlhepbBiNi8X/Ke+Pf8c4RVYDs43a7SDw3fmo1BAkPD1BeG
	  ES9KTr3VCeTcoLZTfB5ZCERqVMoriTB7jzCUMItNvoe3Ig0K
	  -----END CERTIFICATE-----
	
	To convert to binary, type " CertUtil -decode cert.txt cert.cer " (without the
	quotation marks).
	
	Note:Cert.txt refers to the BASE64 file and Cert.cer is the name of the new
	binary file in this example.
	
	Now that you have the file converted, you can query its contents by typing "
	CertUtil cert.cer " (without the quotation marks).
	
	You should then see something similar to the following output:
	
	  
	
	  PKCS7 Message Certificates:
	  ================ Begin Nesting Level 1 ================
	  X509 Certificate:
	  Version: 3
	  Serial Number: 25f51e4e0000115a
	  Signature Algorithm:
	 Algorithm ObjectId: 1.2.840.113549.1.1.4
	 Algorithm Parameters:
		05 00                                              ..
	  Issuer: CN=MS CertSrv Test Group CA, OU=Windows NT, O=Microsoft, L=Redmond, S=WA, C=US
	  NotBefore: 10/23/1998 3:33 PM
	  NotAfter: 10/23/1999 3:33 PM
	  Subject: CN=Name (Signing), OU=IASG, O=Microsoft, L=Redmond, 
	                                     S=WA, C=US, E=name@domain.com
	  Public Key Algorithm:
	 Algorithm ObjectId: 1.2.840.113549.1.1.1
	 Algorithm Parameters:
		05 00                                              ..
	  PublicKey: UnusedBits=0
		30 48 02 41 00 d4 c1 0e  6f 0b 86 54 b8 9b 08 de   0H.A....o..T....
		41 87 b5 e8 62 83 a6 42  a6 63 de 5a 9e cc 17 f6   A...b..B.c.Z....
		72 95 52 1f 56 7a 95 ad  33 f0 8e c2 e8 c6 d4 95   r.R.Vz..3.......
		0d ce c4 7a 1a f3 10 28  ca 15 46 4e 48 52 8c 89   ...z...(..FNHR..
		87 f8 5d 0d 1b 02 03 01  00 01                     ..].......
	  Certificate Extensions: 6
	 2.5.29.15: Flags = 0(), Length = 4
	   Key Usage
	       Digital Signature, Key Encipherment, Data Encipherment, Key Agreement(B8)
	 2.5.29.37: Flags = 0(), Length = c
	   Enhanced Key Usage
	       Client Authentication(1.3.6.1.5.5.7.3.2)
	
	 2.5.29.35: Flags = 0(), Length = a9
	   Authority Key Identifier
	       KeyID=2A58 2026 5B9F CFB1 E328 F42A EA4D F8CA 19CB F3C4
	       Certificate Issuer:              Directory Address:
	                 CN=MS CertSrv Test Group CA
	                 OU=Windows NT
	                 O=Microsoft
	                 L=Redmond
	                 S=WA
	                 C=US
	       Certificate SerialNumber=1113 6100 AA00 2B86 11D2 5EF8 DDA0 99B4
	
	 2.5.29.31: Flags = 0(), Length = 91
	   CRL Distribution Points
	       [1]CRL Distribution Point              Distribution Point Name: 
	   Full Name:                        
	   URL=http://CERTSRV/CertSrv/CertEnroll/MS CertSrv Test Group CA.crl
	   [2]CRL Distribution Point              Distribution Point Name:                   
	   Full Name:                        
	   URL=file://\\CERTSRV\CertSrv\CertEnroll\MS CertSrv Test Group CA.crl 
	 2.5.29.19: Flags = 0(), Length = 2
	   Basic Constraints
	       Subject Type=End Entity         Path Length Constraint=None 
	 1.3.6.1.5.5.7.1.1: Flags = 0(), Length = 56
	   Authority Information Access
	       [1]Authority Info Access              
	   AccessMethod=Certification Authority Issuer(1.3.6.1.5.5.7.48.2)  
	   Alternative Name:                   
	   URL=http://CERTSRV/CertSrv/CertEnroll/CERTSRV_MS CertSrv Test Group CA.crt 
	  Non-root Certificate
	
	Note: This certificate was modified to fit in this window.
	
	For information on how to read the contents of a certificate, see the following
	article in the Microsoft Knowledge Base:
	
	  Q216831 How to Read and Analyze a Client Certificate
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
