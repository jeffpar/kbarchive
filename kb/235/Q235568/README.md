---
layout: page
title: "Q235568: Official Microsoft FrontPage 2000 Book Comments and Corrections"
permalink: /kb/235/Q235568/
---

## Q235568: Official Microsoft FrontPage 2000 Book Comments and Corrections

{% raw %}

	Article: Q235568
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Official Microsoft FrontPage 2000 Book ISBN 1-57231-992-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Official Microsoft FrontPage 2000 Book,
	ISBN 1-57231-992-5.
	
	The following topics are covered:
	
	- Page 46: Options Dialog Box Does Not Include A Proxies Tab
	
	- Pages 107 - 109: Proxy Server Text Corrections
	
	- Page 161: Correction For Accessing Frames Page Properties
	
	- Page 172: Text Correction
	
	- Pages 176 - 178: Figure And Text Clarification
	
	- Page 362: Delete Index Entry For Proxies Tab On
	
	- Page 363: Delete Index Entry For Proxies Tab, Options Dialog Box
	
	- Page 369: Author's Email Address Has Changed
	
	MORE INFORMATION
	================
	
	Page 46: Options Dialog Box Does Not Include A Proxies Tab
	----------------------------------------------------------
	
	Page 46, Figure 3-13 shows the Options dialog box containing a Proxies tab. This
	tab is no longer part of the Options dialog box.
	
	
	Pages 107 - 109: Proxy Server Text Corrections
	----------------------------------------------
	
	Replace the text in the Proxy Servers subheading, starting on page 107, with the
	following text:
	
	A proxy server, also called a firewall, protects a network from uninvited outside
	access. For example, communication can be inbound-communicating from the outside
	through the proxy server to your internal server-or it can be
	outbound-communicating from your server through a proxy to another server on the
	outside. Communication related to the Web site is permitted only through the
	proxy, so uninvited guests are barred from your system.
	
	If your local network uses a proxy server, you must specify that server in order
	to communicate with it. To specify a proxy server for your machine or to specify
	any server that can be used without going through the firewall, follow this
	procedure:
	
	1. Choose Options from the Tools menu and then click the General tab in the
	  Options dialog box.
	
	2. Click the Proxy Settings button. This brings up the Internet Properties
	  dialog box with the Connections tab selected.
	
	3. Click the LAN Settings button. This brings up the Local Area Network (LAN)
	  Settings dialog box.
	
	4. Select the Use A Proxy Server check box in the Local Area Network dialog box,
	  and then click the Advanced button to bring up the Proxy Settings dialog box.
	
	5. In the HTTP Proxy text box, enter the name of the proxy server and the port,
	  for example, itgproxy:1000. You can get the name and port from your network
	  administrator.
	
	  You can also create proxy settings for Secure, FTP, Gopher, and Socks
	  protocols. If you want to use the same proxy server for all protocols, select
	  the Use The Same Proxy Server For All Protocols check box. If you want to
	  list exceptions to the proxy settings, add them in the Exceptions section of
	  the Proxy Settings dialog box.
	
	6. After you update the information in the Proxy Settings dialog box, click OK.
	
	The proxy server information is saved and used for all future connections, so you
	don't have to enter the information repeatedly. Whenever you request a
	connection to a server (for example, when you are following a link), FrontPage
	checks to see if your organization has servers that are inside the firewall. If
	the server is available internally, FrontPage makes the connection directly. If
	not, FrontPage first connects to the proxy server and then has the proxy server
	connect to the server you want to use. This means that after you supply that
	information for the proxy server, FrontPage automatically handles all proxy
	communication, and you don't even have to be aware that a proxy server is in
	use.
	
	
	Page 161: Correction For Accessing Frames Page Properties
	---------------------------------------------------------
	
	Page 161, Frames Page Properties bullet:
	
	Change the first paragraph of this bullet to:
	"You can make changes to the frameset by selecting a page in the frameset and
	choosing Frame Properties from the Frame menu. This brings up the Frame
	Properties dialog box; click the Frames Page button. This brings up the Page
	Properties dialog box. Select the Frames tab. You have two options here:"
	
	
	Page 172: Text Correction
	-------------------------
	
	Page 172, last paragraph, first sentence:
	
	Change:
	"When you click Modify, FrontPage presents you with three new options: Colors,
	Graphics, and Styles."
	
	To:
	"When you click Modify, FrontPage presents you with three new options: Colors,
	Graphics, and Text."
	
	
	Pages 176 - 178: Figure And Text Clarification
	----------------------------------------------
	
	Page 176, first paragraph, first sentence:
	
	Change:
	"On the Font tab, as shown in Figure 7-7, you can change the font, its style, its
	size, and its horizontal and vertical alignment."
	
	To:
	"On the Font tab you can change the font you can change the font, its style, its
	size, and its horizontal and vertical alignment."
	
	Page 176, Modifying Styles subheading, first sentence:
	
	Change the Figure reference from:
	"Figure 7-8"
	
	To:
	"Figure 7-7"
	
	Page 177, Figure 7-7:
	
	Change the description from:
	"The Font tab of the Modify Theme dialog box when the Graphics button has been
	selected."
	
	To:
	"The Modify Theme dialog box after the Text button is clicked."
	
	Page 178, first paragraph, first sentence:
	
	Append the following text to the end of this sentence:
	", as shown in Figure 7-8."
	
	
	Page 362: Delete Index Entry For Proxies Tab On
	-----------------------------------------------
	
	In the second column at the top of the page, delete the subentry: Proxies tab on,
	108. This section is no longer in the text.
	
	
	Page 363: Delete Index Entry For Proxies Tab, Options Dialog Box
	----------------------------------------------------------------
	
	In the second column, delete the entry: Proxies tab, Options dialog box, 108.
	This section is no longer in the text.
	
	
	Page 369: Author's Email Address Has Changed
	--------------------------------------------
	
	Change:
	"wbp@msn.com"
	
	To:
	"brett@polonskydesign.com" (mailto:brett@polonskydesign.com)
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-992-5 EUBOOK OFF2000 FP
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
