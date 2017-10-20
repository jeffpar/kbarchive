---
layout: page
title: "Q304952: Error Message: &quot;Passport Partner Error&quot; at Login"
permalink: /kb/304/Q304952/
---

## Q304952: Error Message: &quot;Passport Partner Error&quot; at Login

{% raw %}

	Article: Q304952
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you sign in to Passport, you are not returned to the participant Web site
	and you receive the following error message:
	
	  Passport Partner Error
	
	CAUSE
	=====
	
	There is a problem with the key installation or configuration of Passport on the
	participant Web site.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- Verify that your encryption key is installed properly. Try rerunning the key
	  installation program; at the very least, check the current version of the key
	  on the server by using the showcurrent command. For more information, see the
	  following Passport Software Development Kit (SDK) Web site:
	
	  Installing the Encryption Key
	  http://www.passport.com/sdkdocuments/sdk14/Implementation/enckey.htm
	
	- Use the Passport Manager Administration utility to check your currently
	  configured Site ID. If your Site ID and return URL / RootURL correlation
	  don't match, users see a Passport network page informing them that something
	  is wrong with the Site ID.
	
	- If your site is being hosted on mirrored servers, make sure that all of the
	  sites use the same encryption key if they are intended to serve the same
	  site. Symptoms of a bad key include Windows NT event 5021, or failure to set
	  cookies even though a Ticket and Profile arrived on the query string.
	
	- If you have configured a server for multiple Passport sites, verify that the
	  following are true:
	
	   - The Web site name field in the Passport Administration Utility for each
	     site is set correctly.
	
	   - The key installation command used the /s siteName option and the site name
	     matches the Web site name that was given.
	
	   - The Host Name/IP Address resolves to the correct Passport site on your
	     server.
	
	MORE INFORMATION
	================
	
	The following may also appear in conjunction with the error message that is
	listed in the "Symptoms" section:
	
	  An error has occurred at the site you are trying to log into. However, you
	  are already signed in to Passport as < customerxxx@hotmail.com <mailto:
	  customerxxx@hotmail.com> >, so you don't need to sign in.
	
	On the Beta Pre-production environment, you may receive the following error
	message:
	
	  Passport Service Unavailable
	
	This may be accompanied by NT event errors. For more information, see the
	following Passport SDK Web site:
	
	  Passport Manager Windows NT Events
	  "http://www.passport.com/sdkdocuments/sdk14/Reference/operations/ntevents.htm
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q303211 Passport Error Message: '[Object Error] No such partner or key
	  version found'
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassportSearch
	Version           : :1.3,1.4,1.99
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
