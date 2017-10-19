---
layout: page
title: "Q170120: FP: Authors Cannot Log on to Virtual Servers on Multihomed IIS"
permalink: /kb/170/Q170120/
---

## Q170120: FP: Authors Cannot Log on to Virtual Servers on Multihomed IIS

	Article: Q170120
	Product(s): Word Front Page
	Version(s): windows:97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194332.
	
	SYMPTOMS
	========
	
	FrontPage authors may not be able to access Webs located within virtual servers
	on a multihomed computer running Microsoft Internet Information Server (IIS)
	versions 2.0 and 3.0. For example, a user who has author permissions, or who is
	a member of a Windows NT group that has author permissions for a Web, may not be
	able to access a Web within a virtual server. In this case, when trying to open
	the Web in FrontPage Explorer, access will not be granted if the author uses
	his/her own account information, but access will be granted if the author uses
	the administrator's account information. This may apply to both root Webs and
	subwebs within some or all virtual servers.
	
	CAUSE
	=====
	
	The first time you install IIS, a home directory that does not have an IP
	address associated with it is created. When you install FrontPage Server
	Extensions, the FrontPage Server Administrator identifies this home directory as
	"<Default Server>" (without the quotation marks). When you add virtual
	servers to the IIS, each one is assigned an IP address using the Directory
	Properties page in Internet Service Manager. The FrontPage Server Administrator
	identifies each one by it's IP address. If The FrontPage Server Extensions are
	installed into <Default Server> and any number of virtual servers, the
	Server Extensions may not be able to identify whether a particular user is a
	valid author of the Web.
	
	
	RESOLUTION
	==========
	
	Remove the FrontPage Server Extensions from the IIS <Default Server>,
	assign a valid IP address to the <Default Server> making it a virtual
	server, and then reinstall the FrontPage Server Extensions. To do this, follow
	these steps:
	
	1. Start the FrontPage Server Administrator.
	
	2. In the Select Port Number box, select the port that does not have an IP
	  address associated with it. The default is 80.
	
	3. Click Uninstall.
	
	4. Start the Internet Service Manager.
	
	5. Double-click WWW Service.
	
	6. Click the Directories tab.
	
	7. In the "WWW Service Properties for <machine name>" dialog box, double-
	  click the <Home> directory that does not have a corresponding IP
	  address in the Address column.
	
	  NOTE: This is the home directory created when IIS was installed.
	
	8. In the Edit Properties dialog box, click to select the Virtual Server check
	  box. In the "Virtual Server IP Address" box, type the valid IP address that
	  is bound to the server's network adapter but which has not been assigned to
	  another virtual server.
	
	9. Click OK twice.
	
	10. Start or switch to the FrontPage Server Administrator.
	
	11. Click Install.
	
	12. In the Server Type list, select "Microsoft Internet Information Server," and
	  then click OK.
	
	13. In the Multihosted Servers dialog box, select the IP address that you
	  specified in step 8. If any other IP addresses are selected, click each one
	  once to cancel the selection.
	
	14. Click OK twice.
	
	15. When you are prompted to enter the name of the administrator account for
	  this Web, type the appropriate information, and then click OK.
	
	16. If Basic Authentication is not enabled, but the FrontPage Server
	  Administrator prompts you to enable it, do not enable it. If Basic
	  Authentication is enabled, the FrontPage Server Administrator will prompt
	  you with a Log On Locally warning. Click OK.
	
	17. Click OK.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbiisSearch kbFrontPageSearch kbiis300 kbiis200 kbFrontPage97Search kbZNotKeyword3
	Version           : windows:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
