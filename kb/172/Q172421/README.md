---
layout: page
title: "Q172421: Verisign Certificate Password Not Accepted in Key Manager"
permalink: /kb/172/Q172421/
---

## Q172421: Verisign Certificate Password Not Accepted in Key Manager

{% raw %}

	Article: Q172421
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install a Verisign certificate, Key Manager may not accept the
	password assigned for that certificate, and the certificate fails to install.
	
	RESOLUTION
	==========
	
	Perform the following steps to work around this problem:
	
	1. Open the certificate in a text editor (such as Notepad).
	
	2. Insert blank lines before "Begin Certificate" and after "End Certificate" as
	  below:
	
	        <insert blank line here>
	        -----BEGIN CERTIFICATE-----
	        MIICiTCCAjOgAwIBAgICAmMwDQYJKoZIhvcNAQEEBQAwgYIxCzAJBgNVBAYTAlVTMRI
	        wEAYDVQQKEwlNaWNyb3NvZnQxJjAkBgNVBAsTHVBlcnNvbmFsIGFuZCBCdXNpbmVzcy
	        BTeXN0ZW1zMTcwNQYDVQQDEy5NaWNyb3NvZnQgRGVtbyBDQSAtLSBGb3IgVGVzdGluZ
	        yBQdXJwb3NlcyBPbmx5MB4XDTk3MDYxMTEzMTYzOFoXDTk4MDYxMTEzMTYzOFowaTEL
	        MAkGA1UEBhMCVVMxEjAQBgNVBAgTCUNoYXJsb3R0ZTELMAkGA1UEBxMCTkMxEjAQBgN
	        VBAoTCU1pY3Jvc29mdDEOMAwGA1UECxMFSXRlYW0xFTATBgNVBAMUDHN0dW1wanVtcG
	        VyMjBbMA0GCSqGSIb3DQEBAQUAA0oAMEcCQG+iFOxAWKwpYwXa/eQKL30g0XIwDk0K7
	        op8LOoygU86Uih/NkU4dYzVTBUVtvtxEoVyKARBD3ofPBRFEUuaFskCAwEAAaOBqzCB
	        qDCBpQYDVR0BBIGdMIGaoYGFMIGCMQswCQYDVQQGEwJVUzESMBAGA1UEChMJTWljcm9
	        zb2Z0MSYwJAYDVQQLEx1QZXJzb25hbCBhbmQgQnVzaW5lc3MgU3lzdGVtczE3MDUGA1
	        UEAxMuTWljcm9zb2Z0IERlbW8gQ0EgLS0gRm9yIFRlc3RpbmcgUHVycG9zZXMgT25se
	        YIQUkMFyaAAfKoR0JtrD7asoDANBgkqhkiG9w0BAQQFAANBACJBMQ19GkgYwcbSShm5
	        rjnWzgcyamyKVmODav3HDJEkyJRNm2QHBq2NGfQkFXx2zJHLSlP597Vr96g9NlX3uoI=
	        -----END CERTIFICATE-----
	        <insert blank line here>
	
	3. Save the file and then attempt to install the certificate as before in Key
	  Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Internet Information
	Server version 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Verisign certificate is manufactured by Verisign, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q180018 : SGCINST.EXE Appears to Execute but SGC Does Not Work
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
