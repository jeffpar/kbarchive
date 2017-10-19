---
layout: page
title: "Q321021: Unexpected Search Results Using Index Server with Local Web Site"
permalink: /kb/321/Q321021/
---

## Q321021: Unexpected Search Results Using Index Server with Local Web Site

	Article: Q321021
	Product(s): Internet Information Server
	Version(s): 2.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 22-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Index Server to index the content of a local Web site that uses
	redirects, you may receive unexpected content if you run a search.
	
	CAUSE
	=====
	
	This issue may occur because all virtual directories are based on a local
	physical path when they are initially created. By default, this path is added to
	the Web catalog in Index Server. If you change this virtual directory path so
	that it includes a redirect, the initial mapping that exists in Index Server is
	not removed.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Start Internet Services Manager.
	
	2. Right-click the virtual directory that you want to change, and then click
	  Properties.
	
	3. Click the Home directory tab, and then click "A directory located on this
	  computer".
	
	4. Click to clear the "Index this resource" check box, and then click Apply.
	
	5. On the Home directory tab, click "A redirection to a URL", and then click
	  Apply.
	
	Content is corrected at the next scheduled index. If you want to immediately
	remove the content, delete the contents of the Catalog.wci folder. For
	additional information about how to delete the Catalog.wci folder, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q191147 How to Resolve Catalog Corruption
	
	MORE INFORMATION
	================
	
	You cannot remove the virtual directory by using Index Server Manager. If you do
	so, the virtual directory is readded when you restart either the computer or
	Internet Information Services (IIS).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbIdxServSearch kbAudDeveloper kbiis500 kbiis400 kbIdxServ200
	Version           : :2.0,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
