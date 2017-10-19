---
layout: page
title: "Q280391: HOWTO: Send Digitally Signed Messages By Using CDOSYS/CDOEX"
permalink: /kb/280/Q280391/
---

## Q280391: HOWTO: Send Digitally Signed Messages By Using CDOSYS/CDOEX

	Article: Q280391
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbenv kbtool kbActMsg kbCDO kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 22-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Windows XP Professional 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Collaboration Data Objects for Windows 2000 (CDOSYS) and Microsoft
	Collaboration Data Objects for Exchange 2000 (CDOEX) do not directly provide a
	way to digitally sign or encrypt a message. The application programming
	interface (API) does not expose any functionality to generate a valid signature.
	However, you can use the Cryptography API in combination with CDOSYS or CDOEX to
	digitally sign and/or encrypt a message.
	
	MORE INFORMATION
	================
	
	You can use the COM version of the Cryptography API (CAPICOM) to easily sign
	and/or encrypt CDOSYS or CDOEX messages. You can obtain the CAPICOM DLL from the
	following Microsoft "Platform SDK Redistributable: CAPICOM 1.0A" Web site:
	
	  http://www.microsoft.com/downloads/release.asp?releaseid=30316
	
	Digitally Signing a Message
	---------------------------
	
	1. Start with a CDOSYS or CDOEX IMessage object. Configure this message with
	  sender, recipient, subject, body, attachments, and any other necessary items.
	
	2. Create a new IMessage object. Open the existing message from step 1 by using
	  this new message's IDatasource::OpenObject method.
	
	3. Get the new IMessage object's IBodyPart root, and then set the following
	  properties:
	
	  oBodyPart.ContentMediaType = "application/pkcs7-mime;smime-type=signed-data;name=""smime.p7m"""
	  oBodyPart.ContentTransferEncoding = "base64"
	  oBodyPart.Fields("urn:schemas:mailheader:content-disposition") = "attachment;FileName=""smime.p7m"""
	  oBodyPart.Fields.Update
	
	4. Use the CAPICOM Signer object and the sender's certificate to sign the
	  content of the new IMessage object.
	
	5. Send the new message, and then discard the original message.
	
	Encrypting a Message
	--------------------
	
	1. Start with a CDOSYS or CDOEX IMessage object. Configure this message with
	  sender, recipient, subject, body, attachments, and any other necessary items.
	
	2. Create a new IMessage object. Open the existing message from step 1 by using
	  this new message's IDatasource::OpenObject method.
	
	3. Get the new IMessage object's IBodyPart root, and then set the following
	  properties:
	
	  oBodyPart.ContentMediaType = "application/pkcs7-mime;smime-type=enveloped-data;name=smime.p7m;"
	  oBodyPart.ContentTransferEncoding = "base64"
	  oBodyPart.Fields("urn:schemas:mailheader:content-disposition") = "attachment;FileName=""smime.p7m"""
	  oBodyPart.Fields.Update
	
	4. Use the CAPICOM EnvelopedData object and the recipient's certificate to
	  encrypt the content of the new IMessage object.
	
	5. Send the new message, and discard the original.
	
	Digitally Signing and Encrypting a Message
	------------------------------------------
	
	The steps are the same, but the order is important. You must first sign the
	message, and then encrypt the message.
	
	Sample Code
	-----------
	
	Notes About the Sample Code:
	
	- The sample calls two non-existent functions, GetCertForSignature and
	  GetCertForEnvelope. The programmer must obtain the appropriate certificate.
	- The sample code requires references to the CAPICOM 1.0 Type Library, the
	  Microsoft ActiveX Data Objects 2.5 Library, and the appropriate CDO Library.
	
	  '******************************************************************
	  '
	  ' SignMessage
	  '
	  ' Takes oMsg as input (non-secure message) and returns a new
	  ' message that is digitally signed.
	  '
	  '******************************************************************
	  Public Function SignMessage(oMsg As CDO.Message) As CDO.Message
	      Dim oSecMsg As New CDO.Message
	      Dim oBodyPart As CDO.IBodyPart
	      Dim oSignedData As New CAPICOM.SignedData
	      Dim strData As String
	      Dim strContent As String
	      Dim oStream As ADODB.Stream
	      Dim oSigner As New CAPICOM.Signer
	      Dim oCert As CAPICOM.Certificate
	      Dim oAttr As New CAPICOM.Attribute
	      Dim byteData() As Byte
	      
	      On Error GoTo handle_error
	      
	      ' Copy input into output message
	      oSecMsg.DataSource.OpenObject oMsg, cdoIMessage
	      
	      ' Set up main bodypart
	      Set oBodyPart = oSecMsg.BodyPart
	      oBodyPart.ContentMediaType = "application/pkcs7-mime;smime-type=signed-data;name=""smime.p7m"""
	      oBodyPart.ContentTransferEncoding = "base64"
	      oBodyPart.Fields("urn:schemas:mailheader:content-disposition") = "attachment;FileName=""smime.p7m"""
	      oBodyPart.Fields.Update
	              
	      ' Get certificate
	      Set oCert = GetCertForSignature(oSecMsg.From)
	      
	      ' If no cert, throw an error and exit
	      If oCert Is Nothing Then
	          MsgBox "No valid certificate found for sender.", , "Error"
	          Set SignMessage = Nothing
	      End If
	      
	      ' Add cert to signer object
	      oSigner.Certificate = oCert
	      
	      ' Add signing time attribute to signer object
	      oAttr.Name = CAPICOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME
	      oAttr.Value = Now
	      oSigner.AuthenticatedAttributes.Add oAttr
	
	      ' Sign the content (root bodypart)
	      strContent = oMsg.BodyPart.GetStream.ReadText
	      oSignedData.Content = StrConv(strContent, vbFromUnicode)
	
	      strData = oSignedData.Sign(oSigner, False, CAPICOM_ENCODE_BINARY)
	
	      ' Write the cms blob into the main bodypart
	      ' let CDO do the base64 encoding
	      Set oStream = oSecMsg.BodyPart.GetDecodedContentStream
	      
	      oStream.Type = adTypeBinary
	
	      ' Get the string data as a byte array
	      byteData = strData
	      
	      ' Write the data to the stream and flush it
	      oStream.Write byteData
	      oStream.Flush
	      
	      GoTo cleanup
	      
	      ' Report error
	  handle_error:
	      MsgBox Err.Number & ": " & Err.Description, , "Error:"
	      Set oSecMsg = Nothing
	      
	      ' Clean up memory
	  cleanup:
	      Set oBodyPart = Nothing
	      Set oSignedData = Nothing
	      Set oStream = Nothing
	      Set oSigner = Nothing
	      Set oCert = Nothing
	      Set oAttr = Nothing
	      
	      ' Return new message
	      Set SignMessage = oSecMsg
	  End Function
	
	  '******************************************************************
	  '
	  ' EnvelopeMessage
	  '
	  ' Takes oMsg as input (non-secure message) and returns a new
	  ' message that is enveloped.
	  '
	  '******************************************************************
	  Public Function EnvelopeMessage(oMsg As CDO.Message, iCertStore As Integer, Optional strQuery As String) As CDO.Message
	      Dim oSecMsg As New CDO.Message
	      Dim oBodyPart As CDO.IBodyPart
	      Dim oEnvelopedData As New CAPICOM.EnvelopedData
	      Dim oCert As CAPICOM.Certificate
	      Dim oStream As ADODB.Stream
	      Dim strData As String
	      Dim strContent As String
	      Dim byteData() As Byte
	      
	      ' Copy input into output message
	      oSecMsg.DataSource.OpenObject oMsg, cdoIMessage
	      
	      ' Set up main bodypart
	      Set oBodyPart = oSecMsg.BodyPart
	      oBodyPart.ContentMediaType = "application/pkcs7-mime;smime-type=enveloped-data;name=smime.p7m;"
	      oBodyPart.ContentTransferEncoding = "base64"
	      oBodyPart.Fields("urn:schemas:mailheader:content-disposition") = "attachment;FileName=""smime.p7m"""
	      oBodyPart.Fields.Update
	      
	      ' Get recipient's cert
	      If strQuery = "" Then
	          Set oCert = GetCertForEnvelope(oSecMsg.To, iCertStore)
	      Else
	          Set oCert = GetCertForEnvelope(oSecMsg.To, iCertStore, strQuery)
	      End If
	      
	      oEnvelopedData.Recipients.Add oCert
	      
	      ' Encrypt content
	      strContent = oMsg.BodyPart.GetStream.ReadText
	      oEnvelopedData.Content = StrConv(strContent, vbFromUnicode)
	      strData = oEnvelopedData.Encrypt(CAPICOM_ENCODE_BINARY)
	      
	      ' Write the CMS blob into the main bodypart
	      ' let CDO do the base64 encoding
	      Set oStream = oSecMsg.BodyPart.GetDecodedContentStream
	      
	      oStream.Type = adTypeBinary
	      
	      ' Get the string data as a byte array
	      byteData = strData
	      
	      ' Write the data to the stream and flush it
	      oStream.Write byteData
	      oStream.Flush
	      
	      GoTo cleanup
	      
	  handle_error:
	      MsgBox Err.Number & ": " & Err.Description, , "Error:"
	      Set oSecMsg = Nothing
	      
	      ' Clean up memory
	  cleanup:
	      Set oBodyPart = Nothing
	      Set oEnvelopedData = Nothing
	      Set oStream = Nothing
	      Set oCert = Nothing
	      
	      ' Return new message
	      Set EnvelopeMessage = oSecMsg
	  End Function
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbActMsg kbCDO kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbOSWinXP kbExchange2000Search kbExchange2000Serv kbOSWinXPSearch
	Version           : :2000
	Issue type        : kbhowto
	
	=============================================================================
	
