---
layout: page
title: "Q279681: How to Force SSL Encryption for an OWA 2000 Client"
permalink: /kb/279/Q279681/
---

## Q279681: How to Force SSL Encryption for an OWA 2000 Client

{% raw %}

	Article: Q279681
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Exchange 2000 Enterprise Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Outlook Web Access 2000 (OWA), Microsoft recommends that you
	require Secure Sockets Layer (SSL) to encrypt or secure the data to ensure that
	all data is hidden from malicious users. However, when you configure Internet
	Information Services (IIS) 5.0 to require SSL for all incoming requests that are
	destined for OWA 2000, and a request comes in using non-SSL (http://), IIS
	responds with the following error message:
	
	  HTTP 403.4 - Forbidden: SSL required Internet Information Services
	
	This in turn forces the incoming client to manually type in HTTPS:// instead of
	HTTP:// to complete the SSL connection. Some administrators may want to have
	this accomplished automatically for the user so that any time a request comes in
	using HTTP://, it is redirected to HTTPS:// automatically. This eliminates any
	user interaction for the client and verifies that all incoming connections are
	SSL enabled.
	
	This article explains how to implement this solution with IIS 5.0 and OWA 2000
	with little to no impact on the user experience and server.
	
	MORE INFORMATION
	================
	
	To implement this solution, perform the following steps:
	
	1. Create an ASP page named Owahttps.asp that contains the following data, and
	  then save it in the Inetpub\Wwwroot\Owaasp directory:
	
	  NOTE: The SERVER_PORT and SERVER_NAME in the code should not be replaced with
	  an actual server port or server name. They are variables and the code snippet
	  should be copy/pasted as it is shown without modification.
	
	  <%
	        If Request.ServerVariables("SERVER_PORT")=80 Then
	           Dim strSecureURL
	           strSecureURL = "https://"
	           strSecureURL = strSecureURL & Request.ServerVariables("SERVER_NAME")
	           strSecureURL = strSecureURL & "/exchange"
	           Response.Redirect strSecureURL
	        End If
	     %>
	
	2. Open Internet Service Manager.
	
	3. Expand (double-click) Computer Name.
	
	4. Expand Default Web Site.
	
	5. Right-click the Exchange folder, and then click Properties.
	
	6. Click the Custom Errors tab.
	
	7. Double-click on the 403.4 error code.
	
	8. In the Message Type drop-down list, select URL.
	
	9. In the URL field, type "/owaasp/owahttps.asp" (without the quotation marks).
	
	10. Click OK.
	
	11. Click the Directory Security tab.
	
	12. In the Secure Communications section, click Edit.
	
	13. Click to check the Require secure channel (SSL) check box. (Click Require
	  128-bit encryption if you need to require 128-bit clients.)
	
	  NOTE: The Exchange folder is the only folder that needs to have the Required
	  setting selected for OWA to require SSL. If you have other folders that need
	  to be required, to allow for the HTTP request, verify that the OWAasp folder
	  does not have the requirement set.
	
	14. Click OK.
	
	15. Click OK.
	
	16. Type the following at a command prompt (or you can restart the server):
	
	  "net stop iisadmin /y " (without the quotation marks)
	
	  NOTE: Make a note of what services were stopped. When you use Exchange Server
	  2000, all Exchange Services stop when you stop IIS.
	
	17. Restart all stopped services.
	
	18. Test for functionality.
	
	Additional query words: iis 5 owa ssl redirect
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbExchangeSearch kbiis500 kbExchange2000Search kbExchange2000EntServ
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
