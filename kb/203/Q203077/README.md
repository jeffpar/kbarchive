---
layout: page
title: "Q203077: BUG: Duplicating Sockets Is Invalid Over IPX/SPX in Windows 9x"
permalink: /kb/203/Q203077/
---

## Q203077: BUG: Duplicating Sockets Is Invalid Over IPX/SPX in Windows 9x

{% raw %}

	Article: Q203077
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98
	Operating System(s): 
	Keyword(s): kbOSWin95 kbOSWin98 kbDSupport
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using DuplicateHandle() for shared sockets over SPX in Windows 9x, subsequent
	socket operations on the duplicated socket operations on the duplicated socket
	always fail. WSAGetLastError() reports error WSANOTSOCK.
	
	NOTE: This is reproducible in both Windows 95 and Windows 98.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, please click the article number(s) below to view the
	article(s) in the Microsoft Knowledge Base:
	
	  Q156319 BUG: Inherited Socket Becomes Invalid If Parent Exits on Win95
	
	  Q150523 BUG: Socket Inheritance in Windows 95 and Windows NT 3.51
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin95 kbOSWin98 kbDSupport 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95,98
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
