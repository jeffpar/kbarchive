---
layout: page
title: "Q246924: FP: Error Message: The Destination File System Ignores Case"
permalink: /kb/246/Q246924/
---

## Q246924: FP: Error Message: The Destination File System Ignores Case

{% raw %}

	Article: Q246924
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- FrontPage 2002 Server Extensions from Microsoft 
	- Microsoft FrontPage 2000 
	- FrontPage 2000 Server Extensions from Microsoft 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q246922.
	
	For a Microsoft FrontPage 97 version of this article, see Q201609.
	
	SYMPTOMS
	========
	
	When you attempt to publish from a UNIX server to a server running on a
	Windows-based operating system, the following error message appears:
	
	  The destination Web ignores case. The following pairs of names will
	  conflict:
	  <filename.txt> and <FileName.txt>
	  No files were copied. Name all files in your Web uniquely and try again.
	
	CAUSE
	=====
	
	UNIX is a case sensitive operating system. For example, mypage.htm and
	MyPage.htm are completely different files and may exist in the same folder.
	
	Windows-based operating systems are not case sensitive. For example, mypage.htm
	and MyPage.htm are the same file name and cannot both be published to the same
	destination.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Open the Web on the UNIX server and rename the files listed in the message.
	
	2. If you are prompted to update hyperlinks, click Yes.
	
	3. Republish the Web to your Windows server.
	
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q216746 FPSE2000: Uppercase Links to Files Are Broken Publishing to UNIX
	  Server
	
	  Q219192 FP2000: Publishing to UNIX May Produce Broken Hyperlinks
	
	Additional query words: front page fp2k
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2000 kbFrontPage2002 kbFrontPageServXSearch kbZNotKeyword2 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage2000ServX kbFrontPage2002ServX kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
