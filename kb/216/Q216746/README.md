---
layout: page
title: "Q216746: FP: Uppercase Links to Files Are Broken Publishing to UNIX"
permalink: kb/216/Q216746/
---

## Q216746: FP: Uppercase Links to Files Are Broken Publishing to UNIX

	Article: Q216746
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- FrontPage 2002 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you publish Web content that contains uppercase links from a Windows- based
	personal computer to a Web server that resides on UNIX, the links may break.
	
	CAUSE
	=====
	
	Windows-based computers perform case-insensitive compares when resolving URLs,
	while UNIX-based servers perform case-sensitive compares. URLs by definition are
	case-sensitive, so the UNIX systems apply them literally, while Windows-based
	Web servers make a reasonable simplification.
	
	RESOLUTION
	==========
	
	To resolve this problem, make your links relative to the case of the directories
	where the links point.
	
	For instance, if you make a relative link to an image in your Web called
	Picture.gif, and you enter the URL: IMAGES/picture.gif, this link will work
	properly for Web servers on Windows. If you publish this Web to a UNIX Web
	Server, the link will appear broken when browsing to it. This is because the URL
	points to "IMAGES" and the actual folder is named (lower case) "images."
	
	In this situation, you would need to modify the URL: images/picture.gif so that
	"images" matches the case of the directory on the UNIX Web server. The other
	option is to change the case of the images folder on the UNIX Web server to
	"IMAGES."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: front page FPSE FP 2002 2000 FP98
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPageServXSearch _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage98Search kbZNotKeyword3 kbFrontPage2000ServX kbFrontPage2002ServX kbZNotKeyword5
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
