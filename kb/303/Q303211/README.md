---
layout: page
title: "Q303211: Err Msg: &quot;[Object Error] No such partner or key version found&quot;"
permalink: kb/303/Q303211/
---

## Q303211: Err Msg: &quot;[Object Error] No such partner or key version found&quot;

	Article: Q303211
	Product(s): Microsoft Developer Network
	Version(s): 1.3,1.4,1.99
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, versions 1.3, 1.4, 1.99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to sign in to Passport, you may receive the following error
	message:
	
	  [Object Error] No such partner or key version found
	
	CAUSE
	=====
	
	The encryption key has been installed incorrectly or a network encryption
	problem exists on the Passport servers.
	
	RESOLUTION
	==========
	
	To resolve the problem, check the following:
	
	- This error may indicate that the partner site has installed an encryption key
	  that is different than the one that is registered in the Passport network for
	  the site. The site administrator should ensure that the site is using the key
	  that is registered for the site.
	
	- The encryption key may have been installed incorrectly. Check the kv
	  parameter on the query string and verify that it matches the version of the
	  current key that is installed. Rerun the key installation executable file as
	  directed by the key installation instructions that shipped with the
	  encryption key. For more information, see the following Passport SDK Web
	  site:
	
	  Installing the Encryption Key
	  http://www.passport.com/sdkdocuments/sdk14/Implementation/enckey.htm
	
	- There may be a problem with the key on the Passport Network. Notify your
	  Passport representative or e-mail Passport Developer Support at
	  nfssup@microsoft.com for assistance in verifying or correcting this.
	
	- When f values are returned on the query string after an attempted login, they
	  usually indicate a network problem. If you see f=7, an invalid key version
	  exists. Run the show current command to check the current key version that is
	  installed.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q304952 Error Message: 'Passport Partner Error' at Login
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassport130 kbPassport199 kbPassportSearch
	Version           : :1.3,1.4,1.99
	Issue type        : kbprb
	
	=============================================================================
	
