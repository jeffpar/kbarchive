---
layout: page
title: "Q318095: FP: Hyperlinks Updated Even Though You Choose Not to Update"
permalink: kb/318/Q318095/
---

## Q318095: FP: Hyperlinks Updated Even Though You Choose Not to Update

	Article: Q318095
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- FrontPage 2002 Server Extensions from Microsoft 
	- SharePoint Team Services from Microsoft 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft FrontPage, when you try to rename a file and you click No when you
	are prompted with the following message
	
	  There are <x> pages that have hyperlinks to this page.
	
	  Do you want to update these pages so that the hyperlinks will not be broken?
	
	the hyperlinks are updated anyway.
	
	CAUSE
	=====
	
	This problem can occur if you are using the Microsoft FrontPage 2000 client on a
	server that is based on FrontPage 2002 Server Extensions or SharePoint Team
	Services from Microsoft.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the file and then rename the copy. To do this,
	follow these steps:
	
	1. In FrontPage, open your Web.
	
	2. Right-click the page you want to rename, and then click Copy on the shortcut
	  menu.
	
	3. Right-click the Folder list, and then click Paste on the shortcut menu. A
	  copy of the page with a file name similar to the following is created:
	
	  pagename_copy(1).htm
	
	4. Right-click the original Web page in the Folder list, and then click Delete
	  on the shortcut menu.
	
	5. Right-click the copy of the Web page you created in step 3, and then click
	  Rename on the shortcut menu. Type the file name that you want to use, and
	  then press ENTER.
	
	The new copy of your Web page has no links that point to it.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: front page SPTS STS FPSE
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbbogus kbFrontPageServXSearch kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage2002ServX kbZNotKeyword5 kbSharePtTeamSvc
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
