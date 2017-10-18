---
layout: page
title: "Q246203: XWEB: Configuring OWA Outside the Default Web Site"
permalink: kb/246/Q246203/
---

## Q246203: XWEB: Configuring OWA Outside the Default Web Site

	Article: Q246203
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Outlook Web Access (OWA) is installed on the default Web site during setup.
	Sometimes, you may want to run OWA from another Web site on the same server.
	This article offers information about running OWA from another site on the same
	server.
	
	MORE INFORMATION
	================
	
	Follow these steps to configure OWA for use with a different Web site under
	Microsoft Internet Information Server (IIS) 4.0.
	
	1. Start the Microsoft Management Console (MMC) Internet Service snap-in.
	
	2. Expand the Default Web Site.
	
	3. Right-click the Default Web site, and then click Properties.
	
	4. Click the ISAPI Filters tab.
	
	5. In the Filter Name field, highlight "Exchfilt", and then click Remove.
	
	6. Expand the server node on which you want OWA to reside.
	
	7. Right-click the new Web site, and then click Properties.
	
	8. Click the ISAPI Filters tab, and then click Add.
	
	9. In the Filter Name field, type "Exchfilt" (without the quotation marks).
	
	10. In the Executable field, type "c:\Winnt\System32\Exchfilt.dll" (without the
	  quotation marks) (assuming that Windows NT is installed on drive C), and
	  then click Finish.
	
	NOTE: The status of the Exchfilt filter always shows a red arrow pointing down to
	indicate it is not loaded. This is not true, and the filter will work anyway.
	
	11. Right-click the new Web site, click New, and then click Virtual Directory.
	
	12. Type "Exchange" (without the quotation marks) as the alias, and then click
	  Next.
	
	13. Type "c:\Exchsrvr\Webdata" (without the quotation marks) as the path, and
	  then click Next (assuming that Exchange Server is installed on drive C).
	
	14. Click to select the Allow Read, Allow Script, Allow Execute, and Allow
	  Directory Browsing check boxes for access permissions, and then click
	  Finish.
	
	15. Right-click the newly created virtual directory, and then click Properties.
	
	16. Click the Directory Security tab.
	
	17. If OWA is installed on the same server as Exchange Server, confirm that the
	  Allow Anonymous and the Windows NT Challenge/Response check boxes are both
	  selected.
	
	  If OWA is on its own server or your users access OWA from the Internet, then
	  make sure that the Allow Anonymous and the Basic Authentication check boxes
	  are both selected.
	
	18. In Control Panel, double-click Services, and stop the WWW service.
	
	19. Start the WWW service (this allows the Exchfilt.dll file to load).
	
	20. Make sure the new Web Site is started.
	
	Now you should be able to access OWA by using the following URL:
	
	  http://<new_server_name>/exchange
	
	You can also configure host headers to access OWA from the Internet on this new
	Web site.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q190008 HOW TO: Use Host Header Names to Host Multiple Sites from One IP
	  Address in IIS 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
