---
layout: page
title: "Q203805: How to Map a Client Certificate to a Windows NT User Account"
permalink: kb/203/Q203805/
---

## Q203805: How to Map a Client Certificate to a Windows NT User Account

	Article: Q203805
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to map a client certificate to a Windows NT user
	account. When this is done, the resources available to the client browsing the
	Web site are determined by that user account's permissions in the Access Control
	Lists (ACLs).
	
	MORE INFORMATION
	================
	
	To map a client certificate to a user account, IIS must have access to a file
	that contains the ASCII text of that certificate. Because this is not typically
	available to the IIS computer, ASP is used to retrieve that information from the
	certificate, and then save it to a file on the server.
	
	The Obtaining Client Certificate Information with ASP topic in the Windows NT
	Option Pack product documentation explains how to do this. However, a limitation
	of that code is that it creates the same file for all certificates.
	
	To address this, the ASP code provided in this article creates a separate file
	for each certificate so that a file corresponding to each client is available
	for IIS to map to a user account.
	
	NOTE: This ASP code appends the certificate's information to the text file every
	time the certificate is used to browse the ASP file. Because of this, you may
	want to take steps so that this information is only obtained once. Otherwise,
	the text file will grow in size indefinitely. To do this, use one of the
	following methods:
	
	- Instruct the clients to only browse to the ASP file one time, in order to
	  "initialize" their mappings. Afterward, they should browse directly to the
	  other files used in that Web site or directory, bypassing the ASP file that
	  creates the text file.
	
	-or-
	
	- Add code to the ASP file to detect if a text file has already been created
	  for the certificate.
	
	NOTE: Because they use the Secure Sockets Layer (SSL), which encrypts and
	decrypts all data transmitted, pages that require certificates (which use the
	secure HTTPS protocol) load slower than pages that use the unsecured HTTP
	protocol.
	
	1. Create an ASP file, which the client will initially browse to in order to
	  provide the client information that will be mapped to a user account. In the
	  ASP file, add the following code above the <HTML> tag:
	
	  <% @Language = VBScript %>
	  <% 'Response.Buffer = True %>
	
	2. Next, add the following code between the <BODY> and </BODY>tags.
	
	  NOTE: In the "Set outStream = fs.OpenTextFile?" line, change the file path to
	  the directory that will contain the text files on your server.
	
	  <%  
	  'Obtain client name
	  cname = Request.ClientCertificate("SubjectCN")
	
	  'Instantiate the ASP FileSystemObject in order to create a text file
	  Set fs = Server.CreateObject("Scripting.FileSystemObject")
	
	  'Create text file using append mode. The client name is used to create the file name. 
	  Set outStream = fs.OpenTextFile( "c:\InetPub\wwwroot\ClientFiles\" & cname &".txt" , 8, True )
	
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
	  outStream.WriteLine( "# Account: " & Request.ServerVariables("REMOTE_USER"))
	
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
	
	3. Save the ASP file to the Web site or directory.
	
	4. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	5. Right-click the Web site or directory that will contain the client text
	  files, and then click Properties.
	
	6. On the Directory (or Home Directory) tab, make sure that Write access
	  permission is selected. This will allow the ASP file to create the text files
	  in that directory. Click OK to return to the MMC.
	
	7. Create and install a server certificate and key pair on the IIS computer.
	
	  NOTE: For information on how to do this using Microsoft Certificate Server,
	  see the following article in the Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	8. In the MMC, right-click the Web site or directory where you will use client
	  certificate mapping, and then click Properties. Click the Directory Security
	  tab.
	
	9. In the Secure Communications section, click the Edit button.
	
	10. In the Secure Communications dialog box, select the "Require Secure Channel
	  when accessing this resource" check box, and then select the Require Client
	  Certificates option.
	
	11. Have a client obtain a client certificate from the same Certificate
	  Authority (CA) that issued the server's certificate.
	
	  NOTE: For information on how to do this using Certificate Server, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	12. Have the client browse to the ASP file (that you created previously to
	  obtain client certificate information) using the HTTPS protocol. After the
	  client has successfully browsed to the ASP file using the client
	  certificate, a corresponding text file will be created on the server.
	
	13. Select the Enable Client Certificate Mapping check box, and then click the
	  Edit button.
	
	14. In the MMC, right-click the Web site or directory again, and then click
	  Properties. Click the Directory Security tab.
	
	15. In the Secure Communications section, click the Edit button.
	
	16. In the Secure Communications dialog box, select the Enable Client
	  Certificate Mapping check box, and then click the Edit button.
	
	17. On the Basic tab, click the Add button. Select the text file created for
	  that client certificate, and then click the Open button.
	
	18. Type a descriptive Map Name, select the Windows NT user account that the
	  client certificate should be mapped to, and then provide the user account's
	  password. Click OK until you return to the MMC.
	
	The next time the client browses to a file on this Web site or directory that
	requires a client certificate (using HTTPS), it will be logged on with the user
	account mapped to that client certificate.
	
	Additional References
	---------------------
	
	For more information please see the following topics in the product
	documentation:
	
	- Creating and Managing Server Key Pairs
	- Obtaining a Server Certificate
	- Enabling Client Certificates
	- Mapping Client Certificates to User Accounts
	- Obtaining Client Certificate Information with ASP
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: certsrv user name username wkz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
