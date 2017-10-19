---
layout: page
title: "Q191549: MIME Parts and Message Source for a Digitally Signed Message"
permalink: /kb/191/Q191549/
---

## Q191549: MIME Parts and Message Source for a Digitally Signed Message

	Article: Q191549
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following example describes what the MIME parts and message source will look
	like for a signed message.
	
	  X-Mailer: Microsoft Outlook Express 4.71.0729.0
	
	  From: "Ryan LaBrie" <ryanl@microsoft.com>
	
	  To: "steven@somecompany.com" <steven@somecompany.com>
	
	  Subject: signed message
	
	  Date: Wed, 30 Apr 1997 20:37:03 -0700
	
	  X-Priority: 3
	
	  X-MSMail-Priority: Normal
	
	  MIME-Version: 1.0
	
	  Content-Type: multipart/signed;
	
	  boundary="----=_NextPart_000_01BC55A9.8FA8A740";
	
	  micalg=sha1;
	
	  protocol=application/x-pkcs7-signature
	
	  X-MimeOLE: Produced By Microsoft MimeOLE Engine V4.71.0728.0
	
	  NOTE - This is a multi-part message in MIME format.
	
	  ------=_NextPart_000_01BC55A9.8FA8A740
	
	  Content-Type: multipart/alternative;
	
	  boundary="----=_NextPart_001_01BC55A9.8FAA2DE0"
	
	  ------=_NextPart_001_01BC55A9.8FAA2DE0
	
	  Content-Type: text/plain;
	
	  charset="iso-8859-1"
	
	  Content-Transfer-Encoding: quoted-printable
	
	  NOTE - This is a clear signed message.
	
	  ------=_NextPart_001_01BC55A9.8FAA2DE0
	
	  Content-Type: text/html;
	
	  charset="iso-8859-1"
	
	  Content-Transfer-Encoding: quoted-printable
	
	  <!DOCTYPE HTML PUBLIC "-//W3C//DTD W3 HTML 3.2//EN"><HTML>
	
	  <HEAD>
	
	  <META HTTP-EQUIV=3D"Content-Type" CONTENT=3D"text/html; =
	
	  charset=3DUS-ASCII">
	
	  <META content=3D'"Trident 4.71.0729.0"' name=3DGENERATOR>
	
	  </HEAD>
	
	  <BODY>
	
	  <P><FONT SIZE=3D2 FACE=3D"Arial">This is a clear signed message =
	
	  hopefully...</FONT></P>
	
	  </BODY>
	
	  </HTML>
	
	  ------=_NextPart_001_01BC55A9.8FAA2DE0--
	
	  ------=_NextPart_000_01BC55A9.8FA8A740
	
	  Content-Type: application/x-pkcs7-signature;
	
	  name="smime.p7s"
	
	  Content-Transfer-Encoding: base64
	
	  Content-Disposition: attachment;
	
	  filename="smime.p7s"
	
	  MIIGTAYJKoZIhvcNAQcCoIIGPTCCBjkCAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHAaCC
	  BTsw
	
	  ggU3MIIEoKADAgECAhBO9j8bsMhfLRsKSiktdU5hMA0GCSqGSIb3DQEBBAUAMGIxETAPBgNV
	  BAcT
	
	  CEludGVybmV0MRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjE0MDIGA1UECxMrVmVyaVNpZ24g
	  Q2xh
	
	  c3MgMSBDQSAtIEluZGl2aWR1YWwgU3Vic2NyaWJlcjAeFw05NzAyMjAwMDAwMDBaFw05ODAy
	  MjAy
	
	  . (lots of content deleted)
	
	  ------=_NextPart_000_01BC55A9.8FA8A740--
	
	The last part of the message is the signed hash of the message and is sent using
	the content-transfer-encoding type of Base64 which will allow the transmission
	of 8-bit data encoded in a 7-bit format. Hence, it is quite unreadable. This
	part of the message is listed as an attachment with the filename smime.p7s. Mail
	clients that are not S/MIME aware will display this file as an attachment. If
	the message is received by an S/MIME aware client, there will not be a visible
	attachment. In addition, in the above message, the certificate was included and
	would be available for importing into the Windows Address Book.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
