---
layout: page
title: "Q234271: INFO: Installing a VeriSign SGC Certificate on IIS 4.0"
permalink: /kb/234/Q234271/
---

## Q234271: INFO: Installing a VeriSign SGC Certificate on IIS 4.0

{% raw %}

	Article: Q234271
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to install a VeriSign Server Gated Crypto (SGC)
	certificate on a computer running Microsoft Internet Information Server (IIS)
	version 4.0. VeriSign uses the term "Global ID" to refer to their SGC
	certificates.
	
	MORE INFORMATION
	================
	
	The process for configuring non-US versions of IIS 4.0 (for example, the English
	international 40-bit version) to use a VeriSign SGC certificate is as follows.
	
	Prerequisites
	
	Note: Bypass the Prerequisites section if Windows NT 4.0 Service Pack 4 has been
	applied to the IIS 4.0 computer.
	
	1. Ensure that you have at least Windows NT 4.0 Service Pack 3 applied on the
	  IIS computer.
	
	2. Make sure that you obtain the latest Schannel patch and Sgcinst.exe files
	  from ftp://ftp.microsoft.com/ and that you view the Readme file prior to
	  implementation on a live environment. For additional information, please see
	  the following article in the Microsoft Knowledge Base:
	
	  Q148427 Generic SSL (PCT/TLS) Updates for IIS and Microsoft Internet Products
	
	  You can download the current fix from the following location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/ssl-fix
	
	3. Check the EnableSGC registry value in the following registry key:
	
	  HKEY_LOCAL_MACHINE\system\CurrentControlSet\Control\SecurityProviders\SCHAN
	
	  NEL is set to 1. If this value is different or not created, use Registry
	  Editor to modify or add the DWord value.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Obtaining the SGC Certificate
	
	At this stage, the IIS computer is now configured with the necessary file
	revisions to accept the SGC certificate. Go to the VeriSign Web site and request
	a SGC digital ID. When VeriSign approves your certificate request, you will
	receive your certificate in the mail.
	
	NOTE: Some e-mail systems may corrupt the valid certificate. Please check with
	you vender. At present there are no known issues with Microsoft Exchange
	Server.
	
	Sample Certificate
	
	  
	
	  -----BEGIN CERTIFICATE-----
	  MIIBqDCCARECAQAwaTELMAkGA1UEBhMCVVMxDjAMBgNVBAgTBVRleGFzMRMwEQYD
	  VQQHEwpMYXNDb2xpbmFzMRIwEAYDVQQKEwlNaWNyb3NvZnQxDjAMBgNVBAsTBUl0
	  ZWFtMREwDwYDVQQDFAhOVFZPT0RPTzCBnjANBgkqhkiG9w0BAQEFAAOBjAAwgYgC
	  gYBxmmAWKbLJHg5TuVyjgzWW0JsY5Shaqd7BDWtqhzy4HfRTW22f31rlm8NeSXHn
	  EhLiwsGgNzWHJ8no1QIYzAgpDR79oqxvgrY4WS3PXT7OLwIDAQABoAAwDQYJKoZI
	  hvcNAQEEBQADgYEAVcyI4jtnnV6kMiByiq4Xg99yL0U7bIpEwAf3MIZHS7wuNqfY
	  acfhbRj6VFHT8ObprKGPmqXJvwrBmPrEuCs4Ik6PidAAeEfoaa3naIbM73tTvKN+
	  WD30lAfGBr8SZixLep4pMIN/wO0eu6f30cBuoPtDnDulNT8AuQHjkJIc8Qc=
	  -----END CERTIFICATE-----
	
	Configuring and Installing the Certificate
	
	The certificate will be sent in the body of an e-mail message. Copy the contents
	of the mail message into a text file using a plain text editor (which does not
	insert specific format information, such as Notepad.exe). Ensure that the very
	first line is "--Begin Certificate--" and the last line being "--End
	Certificate."
	
	Formatting of the Certificate
	
	Notes:
	
	- Do not use Microsoft Word. Microsoft Word specifically formats documents.
	  Microsoft Notepad.exe does not apply any specific formatting.
	
	- Make sure that you do not have the Word Wrap feature set on your text
	  processor and that there are no leading or trailing spaces on EACH line in
	  the certificate.
	
	- Make sure that the "Begin Certificate" and "End Certificate" lines are
	  separate from the main body of the message (certificate). Save this file as a
	  text file.
	
	1. Run the Sgcinst.exe utility that you obtained from the Microsoft FTP site
	  against the raw certificate. The command should be similar to the following:
	
	  C:\sgcinst.exe -i -o sgccert.txt rawcert.txt
	
	2. Install the new outputted file (for example Sgccert.txt) as the Certificate
	  in Key Manager.
	
	The IIS 4.0 computer should now negotiate 128-bit secure sessions.
	
	Additional query words: SGCInst Certificate
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
