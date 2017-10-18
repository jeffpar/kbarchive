---
layout: page
title: "Q241534: Internet Service Manager Connects to Wrong Web Site"
permalink: kb/241/Q241534/
---

## Q241534: Internet Service Manager Connects to Wrong Web Site

	Article: Q241534
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Service Manager Web Administrator tool located in the BackOffice
	Web Administrator tool does not connect to the Microsoft Internet Information
	Server (IIS) Administration Web site, but rather to the IISAdmin virtual
	directory for the default Web site. The IIS Web Administrator tool only allows
	customers to modify and change the properties of the default Web site. It does
	not display other Web sites on the server.
	
	CAUSE
	=====
	
	The BackOffice version of the Internet Service Manager Web Administration tool
	makes a connection to http://localhost/iisadmin. This connects on port 80 to the
	IISAdmin virtual directory under the default Web site. Microsoft Windows NT
	Option Pack installs an IIS HTML Administration component, but the IIS
	Administration Web site does not reside on port 80.
	
	WORKAROUND
	==========
	
	To work around this behavior, edit the active server page so that it connects to
	the proper port. You must first determine the port number on which the IIS
	Administration Web site is located.
	
	1. Start the Internet Service Manager tool.
	
	2. Right-click the Administration Web site, and then click Properties.
	
	3. Click the Web Site tab.
	
	4. Record the port number listed in the TCP Port field.
	
	5. Edit the Webadmin.asp file located in the C:\Inetpub\Wwwroot\Boadmin\Wedadmin
	  folder. Change the following line from
	
	  <TD ALIGN=CENTER><%=LinkButton(BOC_IIS, L_ISSManager_HTMLText,
	  L_WebAdmin_HTMLText, "Admin", "FFCC66", "333333", "808080", "60606A",
	  "/IISAdmin/Default.htm")%></TD>
	
	to
	
	  <TD ALIGN=CENTER><%=LinkButton(BOC_IIS, L_ISSManager_HTMLText,
	  L_WebAdmin_HTMLText, "Admin", "FFCC66", "333333", "808080", "60606A",
	  "http://<servername>:<portnumber>/IISAdmin/Default.htm")%></TD>
	
	where <servername> is the name of your BackOffice server and
	<portnumber> is the TCP port number for the Administration Web site.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
