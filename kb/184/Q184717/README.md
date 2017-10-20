---
layout: page
title: "Q184717: AspEnableParentPaths MetaBase Property Should Be Set To False"
permalink: /kb/184/Q184717/
---

## Q184717: AspEnableParentPaths MetaBase Property Should Be Set To False

{% raw %}

	Article: Q184717
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Active Server Pages (ASP) code that uses the following parent directory notation
	is enabled by default:
	
	  <!-- #include file="..\default.htm"-->
	
	CAUSE
	=====
	
	The AspEnableParentPaths property in the MetaBase specifies whether an ASP can
	allow paths relative to the current directory (using the ..\ notation). This may
	be a security risk.
	
	In a secure environment, the AspEnableParentPaths property should be set to
	False, but the default installation of Internet Information Server version 4.0
	sets it to True.
	
	NOTE: Disabling ASP Parent Paths will only affect the execution of dynamic
	content on .asp pages. This does not affect the server's ability to reference
	static content using HTML code (whether it is called from .htm, .html or .asp
	files). The following line in a default.asp would properly display the image
	without returning an ASP 0131 error, even after AspEnableParentPaths = False:
	
	  <img src="../images/logo.jpg">
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Open the Internet Service Manager in the Microsoft Management Console.
	
	2. Right-click on the Web server in question.
	
	3. Select Properties on the pop-up menu.
	
	4. Click the Home Directory tab.
	
	5. Select Configuration in the Application Settings box.
	
	6. Click the App Options tab.
	
	7. Clear the Enable Parent Paths option.
	
	8. Click OK twice to return to the Microsoft Management Console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in IIS versions 4.0 and 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
