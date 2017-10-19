---
layout: page
title: "Q190718: WD97: Invalid Page Fault in Module Unknown Opening HTML Document"
permalink: /kb/190/Q190718/
---

## Q190718: WD97: Invalid Page Fault in Module Unknown Opening HTML Document

	Article: Q190718
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:4.0,4.01,97
	Operating System(s): 
	Keyword(s): kbdta word97 kbwdinternet
	Last Modified: 05-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Internet Explorer versions 4.0, 4.01 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Hypertext Markup Language (HTML) document in Word, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, the following error message is displayed:
	
	  WINWORD caused an invalid page fault in module <unknown> at
	  0000:00000013.
	
	CAUSE
	=====
	
	The HTML document may contain a virtual path deeper than two folder levels. For
	example, if you open the HTML document in Microsoft Internet Explorer and view
	the source of the HTML document, you may find a virtual path to a graphic file
	similar to the following:
	
	  <IMG SRC="../../ms.jpg">
	
	To view the source of the document in Internet Explorer, click Source on the View
	menu.
	
	This behavior occurs because the version of Distributed Component Object Model
	(DCOM) that is installed by Internet Explorer version 4.0 or 4.01 is unable to
	correctly parse a virtual path that is two or more folder levels deep.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Explorer
	versions 4.0 and 4.01 for Windows 95.
	
	
	
	
	MORE INFORMATION
	================
	
	DCOM is a protocol that enables software components to communicate directly over
	a network in a reliable, secure, and efficient manner. Previously called
	"Network OLE," COM is designed for use across multiple network transports,
	including Internet protocols such as HTTP. COM is based on the Open Software
	Foundation's DCE- RPC spec and will work with both Java applets and ActiveX
	components through its use of the Component Object Model (COM).
	
	For more information on DCOM, please visit the following URL on the Microsoft
	Internet Web Site:
	
	  http://www.microsoft.com/com/dcom95/dcom95.asp
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q184530 Err Msg: Winword Caused an Invalid Page Fault in Module Unknown
	
	Additional query words: ipf ie ie4 ie40 ie401
	
	======================================================================
	Keywords          : kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbIEsearch kbWord97 kbWord97Search kbZNotKeyword2 kbIE95Search kbZNotKeyword3 kbIE400Win95 kbIE401Win95
	Version           : WINDOWS:4.0,4.01,97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
