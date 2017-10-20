---
layout: page
title: "Q171379: HOWTO: Use the Proxy Property in the Internet Transfer Control"
permalink: /kb/171/Q171379/
---

## Q171379: HOWTO: Use the Proxy Property in the Internet Transfer Control

{% raw %}

	Article: Q171379
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Internet Transfer control allows you to go through a Proxy server to access
	information on an external FTP server. You can do this by specifying the
	AccessType and the name of the proxy server in the Internet Transfer Control.
	
	MORE INFORMATION
	================
	
	1. Set the AccessType property to icNamedProxy.
	
	2. An application can specify more than one proxy, including different proxies
	  for the different protocols. For example, if you specify "ftp=ftp://ftp-gw
	  gopher=http://jericho:99 proxy," FTP requests are made through the FTP proxy
	  "ftp-gw" that listens at port 21 (default for FTP), and Gopher requests are
	  made through a proxy called "jericho" that listens at port 99. All other
	  requests (for example, HTTP requests) are made through the proxy called
	  "proxy" that listens at port 80.
	
	Sample Code
	-----------
	
	     Private Sub Command1_Click()
	         Inet1.AccessType = icNamedProxy
	        ' Using an CERN proxy server won't work here, you need to
	        ' use a FTP proxy server when making FTP requests
	        ' because CERN proxy servers don't accept FTP requests.
	        ' Inet1.Proxy = "http://itgproxy:80"
	   
	         Inet1.Proxy = "ftp=ftp://ftp-gw"
	        'FTP proxy server works here because it expects FTP requests
	         Inet1.URL = "ftp://ftp.microsoft.com"
	         Inet1.Execute , "DIR"
	     End Sub
	
	     Private Sub Command2_Click()
	         Inet2.AccessType = icNamedProxy
	       ' Using a FTP proxy server doesn't work because you are
	       ' making an HTTP request to a FTP proxy server.
	       'Inet2.Proxy = "ftp=ftp://ftp-gw"
	         Inet2.Proxy = "http://proxy:80"
	       'CERN proxy server works here because it expects HTTP requests.
	         MsgBox Inet1.OpenURL("http://www.microsoft.com")
	     End Sub
	
	     Private Sub Command3_Click()
	         Inet3.AccessType = icNamedProxy
	       ' Or you could assign both the CERN proxy server
	       ' and the FTP proxy server and the Internet Transfer
	       ' Control will route it to the correct one
	       Inet3.Proxy = "ftp=ftp://ftp-gw http=http://itgproxy:80"
	       MsgBox Inet2.OpenURL("http://www.microsoft.com")
	     End Sub
	
	     Private Sub Inet1_StateChanged(ByVal State As Integer)
	         Dim vtData As Variant ' Data variable.
	         Select Case State
	         ' ... Other cases not shown.
	         Case icResponseCompleted ' 12
	             ' Open a file to write to.
	             Open "c:\temp\output.txt" For Binary Access _
	             Write As #1
	
	             ' Get the first chunk. NOTE: specify a Byte
	             ' array (icByteArray) to retrieve a binary file.
	             vtData = Inet1.GetChunk(1024, icString)
	
	             Do While LenB(vtData) > 0
	                 Put #1, , vtData
	                 ' Get next chunk.
	                 vtData = Inet1.GetChunk(1024, icString)
	             Loop
	             Put #1, , vtData
	             Close #1
	         End Select
	     End Sub
	
	What is CERN-Proxy?
	-------------------
	
	The CERN-proxy protocol is widely recognized throughout the World Wide Web (WWW)
	community as the standard for implementing proxy services in TCP/IP- based
	networks. It has its origins within the standards for Hypertext Transfer
	Protocol (HTTP) as a UNIX-based service first developed by members of
	Switzerland's Conseil Europeen pour la Recherche Nucleair (European Laboratory
	for Particle Physics, or CERN) in the early 1990s.
	
	As the CERN staff added application-aware proxy support for Hypertext Transfer
	Protocol daemon (HTTPd) servers (commonly known as Web servers) to their
	libraries, the WWW community built on these additions. In the time since it was
	first introduced, the CERN-proxy protocol has become an accepted industry
	standard for implementing HTTP proxy service. The Microsoft Proxy Server Web
	Proxy service is fully compatible with the CERN- proxy standard.
	
	To better understand how CERN-proxy works, it is important to understand the
	differences between how most Internet applications work (such as File Transfer
	Protocol (FTP) and Gopher) and how HTTP applications work.
	
	Standard TCP/IP applications such as FTP use TCP (or in some cases, User Datagram
	Protocol, or UDP) as the transport-level protocol for supporting client/server
	communications. For HTTP-based applications, a set of commands (called methods)
	are defined that are used in Web-based client/server communications. While
	CERN-compatible proxy services support WWW (HTTP), FTP, and Gopher requests, it
	is important to keep in mind that a CERN-based Web proxy server uses HTTP for
	all communications with its Web Proxy clients.
	
	Important: If your proxy server is a CERN proxy server, you cannot make direct
	FTP connections by using the Execute method. In this case, to get a file, use
	the OpenURL method with the Open, Put, and Close statements. You can also use
	the OpenURL method to get a directory listing by invoking the method and
	specifying the target directory as the URL.
	
	Additional query words: kbVBp500 kbActiveX kbCtrl kbInet kbDSupport kbdsi kbVBp600 kbVBp
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
