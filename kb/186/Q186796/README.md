---
layout: page
title: "Q186796: Troubleshooting &quot;Invalid Password&quot; Error Using SSL Certificates"
permalink: /kb/186/Q186796/
---

## Q186796: Troubleshooting &quot;Invalid Password&quot; Error Using SSL Certificates

{% raw %}

	Article: Q186796
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot the "Invalid Password" error
	message.
	
	NOTE: This error is a generic message that can indicate many different problems;
	the least likely being that the password is in fact, incorrect. This document
	provides a systematic approach to addressing, if not resolving this issue.
	
	MORE INFORMATION
	================
	
	1. Is the password being entered correctly?
	
	  Password problems often result from having the CAPS LOCK key set on the
	  keyboard. Although this is often checked, it is mentioned for the sake of
	  thoroughness. Also double-check that you are not using an old password.
	
	2. Has the Signed Certificate been corrupted in some way?
	
	  Because the Certificate is issued through e-mail, there are a few formatting
	  errors that may result. The Certificate may go through several mail servers
	  before it reaches the destination server and the mail is retrieved by an
	  e-mail client that formats the document. cc:Mail is known to add spaces at
	  the beginning and end of each line of the Certificate. Outlook sometimes
	  moves the "----End Certificate----" line up to the last line of the
	  Certificate. Manual removal of these formatting issues often resolves the
	  "invalid password" error.
	
	The following is a Signed Certificate as it may appear in the message you receive
	from Verisign:
	
	     -----BEGIN CERTIFICATE-----
	     JIEBSDSCEXoCHQEwLQMJSoZILvoNVQECSQAwcSETMRkOAMUTBhMuVrM
	     mIoAnBdNVBAoTF1JTQSBEYXRhIFNlY3VyaXR5LCBJbmMuMRwwGgYDVQ
	     QLExNQZXJzb25hIENlcnRpZmljYXRlMSQwIgYDVQQDExtPcGVuIE1hc
	     mtldCBUZXN0IFNlcnZlciAxMTAwHhcNOTUwNzE5MjAyNzMwWhcNOTYw
	     NTE0MjAyOTEwWjBzMQswCQYDVQQGEwJVUzEgMB4GA1UEChMXUlNBIER
	     hdGEgU2VjdXJpdHksIEluYy4xHDAaBgNVBAsTE1BlcnNvbmEgQ2VydG
	     lmaWNhdGUxJDAiBgNVBAMTG09wZW4gTWFya2V0IFRlc3QgU2VydmVyI
	     DExMDBcMA0GCSqGSIb3DQEBAQUAA0sAMEgCQQDU/7lrgR6vkVNX40BA
	     q1poGdSmGkD1iN3sEPfSTGxNJXY58XH3JoZ4nrF7mIfvpghNi1taYim
	     vhbBPNqYe4yLPAgMBAAEwDQYJKoZIhvcNAQECBQADQQBqyCpws9EaAj
	     KKAefuNP+z+8NY8khckgyHN2LLpfhv+iP8m+bF66HNDUlFz8ZrVOu3W
	     QapgLPV90kIskNKXX3a
	     ------END CERTIFICATE-----
	
	However, if there is corruption in the document, it may look like the following.
	Notice the spaces at the end of each line.
	
	     -----BEGIN CERTICATE-----
	
	     JIEBSDSCEXoCHQEwLQMJSoZILvoNVQECSQAwcSETMRkOAMUTBhMuVrM
	     mIoAnBdNVBAoTF1JTQSBEYXRhIFNlY3VyaXR5LCBJbmMuMRwwGgYDVQ
	     QLExNQZXJzb25hIENlcnRpZmljYXRlMSQwIgYDVQQDExtPcGVuIE1hc
	     mtldCBUZXN0IFNlcnZlciAxMTAwHhcNOTUwNzE5MjAyNzMwWhcNOTYw
	     NTE0MjAyOTEwWjBzMQswCQYDVQQGEwJVUzEgMB4GA1UEChMXUlNBIER
	     hdGEgU2VjdXJpdHksIEluYy4xHDAaBgNVBAsTE1BlcnNvbmEgQ2VydG
	     lmaWNhdGUxJDAiBgNVBAMTG09wZW4gTWFya2V0IFRlc3QgU2VydmVyI
	     DExMDBcMA0GCSqGSIb3DQEBAQUAA0sAMEgCQQDU/7lrgR6vkVNX40BA
	     q1poGdSmGkD1iN3sEPfSTGxNJXY58XH3JoZ4nrF7mIfvpghNi1taYim
	     vhbBPNqYe4yLPAgMBAAEwDQYJKoZIhvcNAQECBQADQQBqyCpws9EaAj
	     KKAefuNP+z+8NY8khckgyHN2LLpfhv+iP8m+bF66HNDUlFz8ZrVOu3W
	     QapgLPV90kIskNKXX3a ------END CERTIFICATE-----
	
	It is important to reformat the document in order to ensure its installation.
	Always follow this procedure if you suspect the Certificate is corrupt:
	
	a. Remove any blank lines occurring between the Begin and End Certificate
	  markers.
	
	b. Remove any leading or trailing spaces from the lines between the Begin and
	  End markers. A good method for doing this is to use the END key on the
	  keyboard to detect the end of each line. If the ending character is a space
	  or group of spaces, remove them.
	
	c. Remove any unusual characters or formatting symbols; o or "/par" are good
	  examples.
	
	d. Ensure that the Begin and End Certificate markers are on a line to
	  themselves. The first sample certificate above shows this case. The markers
	  should begin with a dash; make sure that no spaces appear as the initial
	  character.
	
	In some instances, it has been found that the 128-bit version of Service Pack 3
	provides the most stability. Windows NT domestic version ships with 128-bit
	encryption standard; however, Windows NT Service Packs come in both 128-bit and
	40-bit versions. The 40-bit version of each Service Pack is available from the
	Microsoft Web site at no charge. The 128-bit version of the Service Pack must be
	purchased from Microsoft or downloaded from www.microsoft.com.
	
	NOTE: When you generate a certificate request, it is encoded in ASN.1 format.
	This bug causes Key Manager to create faulty ASN.1 encodings. Therefore, the
	certificate request created is invalid. This doesn't affect the signing of the
	certificate, so the Certificate Authority does not detect it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 2.0, 3.0, and 4.0.
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200
	Version           : WINNT:1.0,2.0,3.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
