---
layout: page
title: "Q268822: XWEB: Redirecting http://&lt;servername&gt;/exchange Users to https://"
permalink: kb/268/Q268822/
---

## Q268822: XWEB: Redirecting http://&lt;servername&gt;/exchange Users to https://

	Article: Q268822
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbfile
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to customize the error feature for the Exchange
	Server virtual directory to redirect Outlook Web Access (OWA) users to use the
	"https://" prefix.
	
	An Exchange Server administrator who has just enabled the use of Secure Sockets
	Layer (SSL) to gain access to the OWA server by using the Internet for greater
	security may want to seamlessly switch former users of the
	"http://server_name/exchange" Uniform Resource Locator (URL) to use the
	"https://server_name/exchange" URL.
	
	MORE INFORMATION
	================
	
	To redirect OWA users to use the "https://" prefix by using the Custom Errors
	page for the Exchange Server virtual directory:
	
	1. Copy the following example to an .htm file (use Notepad if you want to, just
	  make sure that the file name has an .htm extension):
	
	  <html>
	  <head> <meta http-equiv="Content-Type" content="text/html;
	  charset=windows-1252"> <meta http-equiv="refresh"
	  content="0;url=https://<server_name>/exchange/logon.asp"> <meta
	  name="GENERATOR" content="Microsoft FrontPage 4.0"> <meta name="ProgId"
	  content="FrontPage.Editor.Document"> <title></title>
	  </head>
	
	  </html>
	
	2. Replace <server_name> with your server name. For example, if your
	  server is named OWAserver, the line should look like the following line:
	
	  <meta http-equiv="refresh"
	  content="0;url=https://OWAserver/exchange/logon.asp">
	
	3. Save this .htm file in the same folder that the custom errors for the
	  Exchange Server virtual directory are located in. To determine the location
	  of those files, right-click the Exchange Server virtual directory, open the
	  properties, and then click the Custom Errors tab. Copy your new .htm file to
	  that location.
	
	4. To change the default error message for 403.4 errors, click 403;4 error, and
	  then click Edit Properties. The properties for this error are displayed in a
	  dialog box. Leave the message type as File, and copy or move the .htm file
	  that you created to the same default folder that the custom errors are
	  located in. Change the end of the entry for the file to reflect the name of
	  the new .htm file that you just copied to this folder. Click OK.
	
	After you perform these steps, if you go to http://<server_name>/exchange,
	where <server_name> is your Microsoft Internet Information Service (IIS)
	server name, you should be redirected to https://<server_name>/exchange
	and the Logon.asp page to continue.
	
	Additional query words: "outlook web access" security
	
	======================================================================
	Keywords          : kbfile 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
