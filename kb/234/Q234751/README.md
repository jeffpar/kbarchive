---
layout: page
title: "Q234751: XWEB: Installing and Using OWA Language Packs"
permalink: kb/234/Q234751/
---

## Q234751: XWEB: Installing and Using OWA Language Packs

	Article: Q234751
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Language Packs for Outlook Web Access (OWA) are available for download from the
	following location:
	
	  http://www.microsoft.com/exchange/downloads/55/sp4.asp
	
	To ensure you are using the latest Language Pack, upgrade to the latest client
	and server service packs. Check your service pack documentation for more
	information.
	
	Note: On the Exchange 5.5 Service Pack 3 CD-ROM, OWA language packs can be found
	in the \CLIENT\LANGPACK directory.
	
	MORE INFORMATION
	================
	
	After you install your selected Language Pack, you can configure Internet
	Explorer to use or test the selected language by following the steps below.
	
	1. In Internet Explorer, type the URL to access the OWA logon page, for example,
	  "http://<servername>/Exchange" (without the quotation marks); in HTTP
	  Get Request, the browser displays an Accept-Language field. The value of this
	  field depends upon the language preferences set in Internet Explorer.
	
	2. To set language preferences in Internet Explorer, on the Tools menu, click
	  Internet Options, and then click Languages. In the Language Preference dialog
	  box, click Add to add other languages. For example, to add French, in the Add
	  Language dialog box, select French (France) [fr]; this is represented by the
	  [fr] language code. You can change the priority of the languages; in the
	  Language Preference dialog box, select the language you want to move, and
	  then click either Move Up or Move Down accordingly.
	
	3. If you change your language preferences so that French (France) [fr] follows
	  English (United States) [en-us], the Accept Language field looks like [fr,
	  en-us]. OWA installs an Internet Server Application Programming Interface
	  (ISAPI) filter called Exchfilt.dll that handles the Accept Language field and
	  redirects browsers to the relevant language folder. In this example, browsers
	  using [fr, en-us] would be redirected to <Exchsrvr>\Webdata\Frn. The
	  same principle also allows you to view other OWA languages.
	
	NOTE: It might be necessary for you to stop and restart the IISAdmin service
	after you install the Russian language pack.
	
	To find out more about this mechanism, install Network Monitor and observe the
	behavior of the HTTP protocol between an Internet Explorer client and the OWA
	server.
	
	You can find more information on the Accept-Language header file and the
	currently defined language codes at the following Web site:
	
	  ftp://ftp.isi.edu/in-notes/rfc1766.txt
	
	Additional query words: IE
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
