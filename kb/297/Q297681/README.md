---
layout: page
title: "Q297681: Err Msg: This Security Certificate Was Issued by a Company..."
permalink: /kb/297/Q297681/
---

## Q297681: Err Msg: This Security Certificate Was Issued by a Company...

	Article: Q297681
	Product(s): Internet Information Server
	Version(s): 4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.0,5.01,5.01 Service Pack 1,5.01 S
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Explorer versions 5, 5.01, 5.01 Service Pack 1, 5.01 Service Pack 2, 5.5, 5.5 Service Pack 1 for Windows 2000 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5, 5.01, 5.01 Service Pack 1, 5.01 Service Pack 2, 5.5, 5.5 Service Pack 1 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to a secure Web site, you may receive the following message:
	
	  This security certificate was issued by a company that you have not chosen to
	  trust
	
	CAUSE
	=====
	
	The root certificate of the Certificate Authority (CA) that issued the Web
	site's certificate is not in the client browser's Trusted Root Certification
	Authority store. The message does not affect the establishment of a Secure
	Sockets Layer (SSL) session between the client and the server.
	
	RESOLUTION
	==========
	
	The steps below are used to install the root certificate into the client's
	browser. This eliminates the security message the next time you visit the site.
	Note that these steps will only work for Microsoft Internet Explorer browsers.
	
	NOTE: The requirement to install the Certificate Authority Certificate only
	exists with non-trusted CAs, such as Microsoft Certificate Server.
	
	1. During the default installation of Certificate Server, a shared folder is
	  generated to store the root certificate file. The default location of this
	  folder is C:\Certconfig. In this folder, locate the root certificate file.
	  The default naming standard is as follows:
	
	  servername.domain.com_name_of_certificate_server.crt
	
	If you cannot find the root certificate file, search your hard drives for all
	files that end in .crt. Double-click each .crt file that is returned in the
	search and view its details to confirm that its serial number is the same as the
	serial number of the root certificate that issued your Web server certificate.
	
	To view the serial number of your Web site's root certificate, securely browse to
	your Web site (that is, use the https:// protocol) and double-click the padlock
	icon in the lower right corner of your browser. Click the Certification Path tab
	and double-click the top certificate. The serial number of this certificate
	should match the root certificate that your search returned.
	
	2. Export the root certificate (.crt) file to a Base64 root certificate (.cer)
	  file. To do this, follow these steps:
	
	  a. In Windows Explorer, double-click the root certificate file.
	
	  b. Click the Details tab and select Copy to file to start the Certificate
	     Manager Export Wizard.
	
	  c. On the second screen of the wizard select Base64, and on the third screen
	     provide a path and file name for the certificate.
	
	NOTE: This is the file that you use in the sample ASP code that is provided in
	this article.
	
	  d. Click Next and then click Finish.
	
	3. Modify line 11 of the following code to point to the Base64 root certificate
	  file that you created in step 2.
	
	  <HTML>
	  <HEAD>
	  <TITLE>Installing A Root Certificate</TITLE>
	  <BR>Root Certificate Authority Installation
	  <BR>
	  <BR>
	
	  <%@ LANGUAGE="VBScript"%>
	  <%
	  Set fs = CreateObject("Scripting.FileSystemObject")
	  Set MyFile = fs.OpenTextFile("c:\certificates\base64.cer", 1)
	
	  Output = ""
	
	  Do While MyFile.AtEndOfStream <> true
	    line = Chr(34) & MyFile.ReadLine & Chr(34)
	    If MyFile.AtEndOfStream <> true then
	      line = line & " & _" & Chr(10)
	    End If
	    Output = Output & line
	  Loop
	
	  MyFile.Close
	
	  Set MyFile = Nothing
	  Set fs = Nothing
	  %>
	
	  <SCRIPT language="VBSCRIPT">
	  on error resume next
	  Dim Str, CEnroll
	
	  Set CEnroll = CreateObject("CEnroll.CEnroll.1")
	  Str = <% Response.Write Output %>
	
	  CEnroll.installPKCS7(Str)
	
	  Set CEnroll = Nothing
	  </SCRIPT>
	  </HEAD>
	  </HTML>
	
	4. Save the modified code as Rootinstall.asp to your Web site location. By
	  default this is \Inetpub\Wwwroot.
	
	5. Browse to the Rootinstall.asp file from a client browser. If your root
	  certificate is not already in the store, you are prompted to install it.
	
	6. Click OK. The certificate is automatically installed into the Trusted Root
	  Store on the client browser.
	
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q290625 HOWTO: IIS5: How to Configure SSL in a Windows 2000 IIS 5 Test
	  Environment Using Certificate Server 2.0
	
	  Q216339 Using Secure Sockets Layer, Root Certifying Authority Certificates,
	  and Iisca.exe
	
	  Q265847 Error Message: The Page Cannot Be Displayed . . . Cannot Find Server
	  or DNS Error
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	
	Additional query words: certificate,trust,root,ssl,https,iis,certificate server
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis500 kbiis400 kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE2000Search kbIE500Win2000 kbIE501Win2000 kbIE501Win2000SP1 kbIE501Win2000SP2 kbIE550Win2000SP1 kbIE550Win2000 kbIE400WinNT400 kbIE401WinNT400 kbIE401WinNT400SP1 kbIE401WinNT400SP2 kbIE501WinNT400SP1 kbIE501WinNT400SP2 kbIE550WinNT400SP1 kbIE500WinNT400 kbIE501WinNT400 kbIE550WinNT400 kbZnotKeyword7 kbIE550Search
	Version           : :4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,5,5.0,5.01,5.01 Service Pack 1,5.01 Service Pack 2,5.5,5.5 Service Pack 1
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
