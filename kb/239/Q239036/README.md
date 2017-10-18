---
layout: page
title: "Q239036: Stand-Alone Root Certificate Server May Not Appear in WSC Wizard"
permalink: kb/239/Q239036/
---

## Q239036: Stand-Alone Root Certificate Server May Not Appear in WSC Wizard

	Article: Q239036
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you request, renew, or replace a server certificate using the Web Site
	Certificate Wizard, your Certificate Services stand-alone Certificate Authority
	may not appear in the list of online authorities.
	
	CAUSE
	=====
	
	This only occurs if you are not using an Enterprise Certificate Authority
	(Directory Services integrated).
	
	WORKAROUND
	==========
	
	To create, renew, or replace a current certificate, you will need to use the
	forms available through your local Web server. The default URL is
	"http://server/certsrv" (where server is the local web server). Request a server
	certificate, and then send the request in PCKS #10 format.
	
	STATUS
	======
	
	This is a known issue in the Web Site Certificate Wizard that ships with
	Internet Information Services 5.0.
	
	Additional query words: iis certsrv certificate ca
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
