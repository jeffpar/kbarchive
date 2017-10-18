---
layout: page
title: "Q295298: INFO: IIS 5: What Does Check on Pending Requests Do?"
permalink: kb/295/Q295298/
---

## Q295298: INFO: IIS 5: What Does Check on Pending Requests Do?

	Article: Q295298
	Product(s): Internet Information Server
	Version(s): 2.0,5.0
	Operating System(s): 
	Keyword(s): kbgrpdsvc
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Certificate Services, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article briefly describes what occurs when a certificate request is
	submitted to Certificate Services 2.0 through the Certificate Services Web pages
	and what happens when you check your pending request on the Certificate Services
	Web pages.
	
	MORE INFORMATION
	================
	
	If the Certificate Authority (CA) has a policy of not issuing certificates
	automatically, when your browser submits a request for a certificate, the
	following page is displayed:
	
	  Certificate Pending
	  Your certificate request has been received. However, you must wait for an
	  administrator to issue the certificate you requested.
	  Please return to this web site in a day or two to retrieve your certificate.
	  Note: You must return with this web browser within 10 days to retrieve your
	  certificate
	
	When you generate a request and submit it to Certificate Services 2.0 through the
	Web pages, the server places a cookie on your computer. The server uses this
	cookie to look up the pending requests that you made when you return to check
	the status of your pending requests.
	
	When you return to http://computer_name/certsrv and select Check on a Pending
	Request, a page displaying the pending requests appears and you select the
	request from the list.
	
	If the server reports that there are no pending requests, one of the following
	may be the problem:
	
	- The Certsrv page is being accessed by using a different URL than the one that
	  was used to submit the request. For example, the request was submitted by
	  using http://Computer_Name/Certsrv, and you are trying to view the pending
	  requests by using http://IP_Address/Certsrv.
	
	- The client browser has cookies disabled.
	
	- The server is unable to retrieve the cookie that is stored on the client
	  computer.
	
	- The cookie that is returned by the client is corrupt.
	
	- The cookie has expired.
	
	- The right bracket (]) delimiter was not found in the cookie list.
	
	The following code can be used to see which cookies the server stores on the
	client.
	
	Place the code on the server and browse to the page that contains the code with
	the Web browser to look at the cookies that are on the browser from that server.
	If this code does not produce the installed cookie, try restarting the IIS
	service on the server to refresh any related components that pertain to the
	cookie retrieval process.
	
	  <% @ Language="VBScript"%>
	  <%
	  	  
	  	   Dim ArrReq 
	  'Store the request information in an array.
	  	   ArrReq=Request.Cookies("Requests")
	
	  'Check if there are any requests.
	       	   if ""= ArrReq then
	       	
	          	Response.write "No Cookies Found" & "<BR>"
	          
	       	   else
	             	   
	  		Response.Write "The Cookies Stored are " & "<BR>"
	  			
	  'Split the string into individual cookies.
	
	                  Dim ArrCookies
	
	                  ArrCookies = Split(ArrReq,"]")
	
	                  Response.Write Ubound(ArrReq) & "<BR>" 
	  	         
	    	        Dim counter
	  'Split the cookies one by one appending the ']' which got removed by the Split command above.	
	  	        For counter=0 to UBOUND(ArrCookies)-1
	  	  	    Response.Write ArrCookies(counter) & "]" & "<BR>"	  		
	  	        Next
	  			
	  	   End If  
	  		
	  		
	  %>
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q241492 HOWTO: Read Cookies Using ASP and Visual C++
	
	  Q290625 HOWTO: IIS5: How to Configure SSL in a Windows 2000 IIS 5 Test
	  Environment Using Certificate Server 2.0
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbgrpdsvc 
	Technology        : kbiisSearch kbiis500 kbCertServSearch kbZNotKeyword3 kbCertServ200
	Version           : :2.0,5.0
	Issue type        : kbinfo
	Solution Type     : kbpending
	
	=============================================================================
	
