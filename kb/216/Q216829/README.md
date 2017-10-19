---
layout: page
title: "Q216829: How to Write a Client Authentication Certificate to a File"
permalink: /kb/216/Q216829/
---

## Q216829: How to Write a Client Authentication Certificate to a File

	Article: Q216829
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes it may be useful to store a public key certificate for future use. The
	following ASP code takes the client authentication certificate provided by the
	client and writes it to a file called c:\Cert.txt.
	
	For this to work, you must first configure a virtual directory to use SSL and
	require a client authentication certificate. You can analyze the certificate
	using the CERTUTIL tool that ships with the Windows NT Option Pack. For more
	information on how to do this, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q216830 IIS: How to View the Contents of a Certificate
	
	The following is the ASP code needed for this to work:
	
	  <% @Language = VBScript %>
	  <% Response.Buffer = True %>
	  <HTML>
	  <BODY> 
	  <% 
	  	'Instantiate the ASP FileSystemObject in order
	  	'to create a text file
	  	Set fs = Server.CreateObject("Scripting.FileSystemObject")
	
	  	'Create text file using append mode
	           Set outStream = fs.OpenTextFile( "C:\cert.txt", 8, True )
	
	  	'Save certificate issuer information to text file
	           outStream.WriteLine( "# Issuer: " & Request.ClientCertificate("Issuer") )
	
	           'Extract certificate subject (user) and account information
	  	'from certificate
	           su = Request.ClientCertificate( "Subject" )
	           mx = len(su)
	           for x = 1 to mx
	              if mid(su,x,1)=chr(10) or mid(su,x,1)=chr(13) then
	                 su=left(su,x-1)+";"+right(su,mx-x)
	  	    end if
	           next
	           outStream.WriteLine( "# Subject: " & su )
	  	 outStream.WriteLine( "# Account: " & Request.ServerVariables("REMOTE_USER") )
	
	  	'Extract encrypted certificate text from certificate; encode text as 64-bit data 
	           uue = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
	
	           outStream.WriteLine( "-----BEGIN CERTIFICATE-----" )
	           cer = Request.ClientCertificate( "Certificate" )
	           lcer = len(cer)
	           l = 0
	
	           for x = 1 to lcer step 3
	              a1 = asc(mid(cer,x,1))
	              if x+1 <= lcer then
	                  a2 = asc(mid(cer,x+1,1))
	                  if x+2 <=lcer then
	                      a3 = asc(mid(cer,x+2,1))
	                  else
	                      a3 = 0
	                  end if
	              else
	                  a2 = 0
	                  a3 = 0
	              end if
	              outStream.Write mid(uue, (a1 and 252)/4 +1 ,1)
	              outStream.Write mid(uue, (a1 and 3)*16 + (a2 and 240)/16 +1 ,1)
	              if x+1 <= lcer then
	                  outStream.Write mid(uue, (a2 and 15)*4 + (a3 and 192)/64 +1 ,1)
	                  if x+2 <= lcer then
	                      outStream.Write mid(uue, (a3 and 63) +1 ,1)
	                  else
	                      outStream.Write "="
	                  end if
	              else
	                  outStream.Write "=="
	              end if
	              l = l +4
	              if l = 64 then
	                  outStream.WriteLine("")
	                  l = 0
	              end if
	           next
	           if l > 0 then
	  	     outStream.WriteLine( "" )
	           end if
	           outStream.WriteLine( "-----END CERTIFICATE-----" )
	           
	           Response.Write "Client certificate information has been received and logged successfully<br>"
	   %>
	  </BODY> 
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
