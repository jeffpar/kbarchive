---
layout: page
title: "Q187836: XWEB: How to Use Outlook Web Access Web Services &amp; HTML Forms"
permalink: kb/187/Q187836/
---

## Q187836: XWEB: How to Use Outlook Web Access Web Services &amp; HTML Forms

	Article: Q187836
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:4.0,5.0,5.5,8.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Outlook Web Access Web Services is for clients that cannot use custom 32- bit
	Outlook forms, such as the 16-bit Windows and Macintosh clients. These clients
	are not capable of displaying the custom 32-bit Outlook forms created with the
	32-bit versions of Outlook. Web Services allows these clients to use their
	default browser and Outlook Web Access (OWA) to display HTML versions of custom
	32-bit Outlook forms.
	
	MORE INFORMATION
	================
	
	Before using the Web Services to view HTML versions of custom 32-bit Outlook
	forms, the following prerequisites must be met:
	
	1. Outlook Web Access must be available to your Exchange Server computer.
	
	2. The Microsoft HTML Form Converter included in Exchange Server 5.5 Service
	  Pack 1 must have been used to install an HTML version of the custom 32-bit
	  Outlook form to the OWA server.
	
	3. The client computer must have a Java-script-aware browser installed and
	  properly configured.
	
	4. The client computer must have the Outlook client installed and the Web
	  Services options enabled and configured.
	
	To configure Web Services at the client, on the Tools menu, click Options, and
	then click the Exchange Server tab. On the tab, click the Web Services button.
	Click the "Use Outlook Web Access to open messages not understood by Outlook
	client" option. In addition, the Web Services Location needs to contain the
	following URL with your OWA servername (that is,
	http://<yourservername>/exchange/forms/openitem.asp). You may enable the
	Prompt User option also if you want.
	
	In a client that encounters a custom 32-bit Outlook form, the form is represented
	by a custom icon. This icon indicates that the client is unable to view this
	form. Starting the form results in the default browser being opened and the OWA
	logon page being displayed to the user. After the user enters the correct
	credentials for his or her mailbox, an HTML version of the form is displayed,
	containing the data from the original custom 32-bit Outlook form.
	
	In addition, you can use Web Services to add a New Web Form command to the
	Compose menu. Selecting this command results in the same logon process as above
	and then a Launch Custom Forms window. This window displays all the currently
	installed HTML forms on this OWA server. Selecting one of these forms allows the
	user to compose and send messages using that form. If a message is sent to a
	32-bit Outlook user, the correct form is displayed.
	
	To enable this feature, on the Tools menu, click Options, and then click the
	Exchange Server tab. Click the Web Services button, and then click the Activate
	Web Forms link on the Compose Menu option. The Directory Page Location needs to
	contain the following URL with your OWA servername (that is,
	http://<yourservername>/exchange/forms/pickform.asp).
	
	NOTE: The URL examples must contain the name of your OWA server, but the
	remainder of the URL must be exactly as shown here.
	
	NOTE: Currently Web Forms does not function correctly when Secure Sockets Layer
	(SSL) has been enabled on the Exchange Server virtual directory.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbOWASearch kbZNotKeyword3
	Version           : MACINTOSH:8.0; WINDOWS:4.0,5.0,5.5,8.0
	Issue type        : kbhowto
	
	=============================================================================
	
