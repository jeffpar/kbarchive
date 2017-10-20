---
layout: page
title: "Q308255: HTTP 403.5 - Forbidden: SSL 128 Required Error Occurs"
permalink: /kb/308/Q308255/
---

## Q308255: HTTP 403.5 - Forbidden: SSL 128 Required Error Occurs

{% raw %}

	Article: Q308255
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.1 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to browse to a Web site by using HTTP, the following error may
	occur in your browser, even though you have disabled the Require Secure Channel
	option:
	
	  HTTP 403.5 - Forbidden: SSL 128 required
	
	CAUSE
	=====
	
	When you enable the 128-bit SSL requirement in conjunction with the general SSL
	requirement, the 128-bit SSL requirement remains enabled until it is explicitly
	turned off (independent of the parent SSL requirement).
	
	RESOLUTION
	==========
	
	To resolve this problem, follow the steps that correspond to the version of IIS
	that you are using.
	
	For Internet Information Server 4.0:
	
	1. Open the Internet Services Manager, right-click the problem Web site, and
	  then click Properties.
	
	2. Click the Directory Security tab, and then click Edit next to Secure
	  Communications.
	
	3. Click Encryption Settings, and then click to uncheck the Require 128-bit
	  encryption check box.
	
	4. Click OK three times to close the dialog boxes.
	
	For Internet Information Services 5.0 and 5.1:
	
	1. Open the Internet Services Manager, right-click the problem Web site, and
	  then click Properties.
	
	2. Click the Directory Security tab, and then click Edit next to Secure
	  Communications.
	
	3. Click to check the Require Secure Channel (SSL) check box.
	
	4. Click to uncheck the Require 128-bit encryption check box.
	
	5. Click to uncheck the Require Secure Channel (SSL) check box.
	
	6. Click OK to close all open dialog boxes. Select Inheritance Overrides
	  accordingly, if you are prompted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft IIS 4.0, 5.0, and 5.1.
	
	MORE INFORMATION
	================
	
	For additional information on configuring SSL, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q300398 IIS: Cannot Create a 128-bit SSL Session with IIS
	
	  Q299525 HOWTO: Set Up SSL Using IIS 5.0 and Certificate Server 2.0
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q267932 Secure Communication Shows Key Manager Button, But No Edit Button
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
