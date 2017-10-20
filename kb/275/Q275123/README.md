---
layout: page
title: "Q275123: FP: Prompts for User Name/Password w/Digest Authentication"
permalink: /kb/275/Q275123/
---

## Q275123: FP: Prompts for User Name/Password w/Digest Authentication

{% raw %}

	Article: Q275123
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 and 2002 version of this article, see Q291373.
	
	SYMPTOMS
	========
	
	When you attempt to use Microsoft FrontPage 97 or Microsoft FrontPage 98 to
	author a Web site that uses Digest Authentication, you are continually prompted
	for a user name and password.
	
	NOTE: Microsoft Internet Information Services (IIS) versions 5.0 and later can
	use a form of Internet security called Digest Authentication, which is defined
	in RFC 2069. For more information, see the "References" section later in this
	article.
	
	CAUSE
	=====
	
	Although Microsoft Internet Explorer versions 5.0 and later can use Digest
	Authentication, FrontPage 97 and 98 do not support this type of authentication.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following authentication methods:
	
	- Windows Integrated Security on Microsoft Windows 2000.
	- Windows NTLM on Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows
	  Millennium Edition (Me), and Microsoft Windows NT 4.0.
	- Basic/Clear Text on all versions of Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For additional information about Digest Authentication, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q264921 How IIS Authenticates Browser Clients
	
	  Q222028 Setting Up Digest Authentication for Use with IIS 5.0
	
	To view the specification for Digest Authentication, see the following:
	
	  RFC 2617 HTTP Authentication: Basic and Digest Access Authentication
	
	Additional query words: front page fp98 fp97 97 98 frontpage98 frontpage97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
