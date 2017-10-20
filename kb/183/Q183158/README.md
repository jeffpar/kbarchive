---
layout: page
title: "Q183158: CPS: Phonebook Admin Does Not Start on Chinese Windows NT"
permalink: /kb/183/Q183158/
---

## Q183158: CPS: Phonebook Admin Does Not Start on Chinese Windows NT

{% raw %}

	Article: Q183158
	Product(s): Internet Information Server
	Version(s): winnt:4.0; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Phone Book Administrator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Phone Book Administrator on a computer running the
	Chinese version of Windows NT Server with English versions of the Windows NT
	Server 4.0 Option Pack, you may receive the following error message:
	
	  The application has failed to start correctly. Press ENTER to continue.
	
	CAUSE
	=====
	
	The English version of the Windows NT Server 4.0 Option Pack does not contain
	the updated Pbadmin.exe files needed to support the Chinese language version of
	Windows NT Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Remove the English version of Internet Information Server (IIS) 4.0
	  completely and then install the Chinese version of the Windows NT Server 4.0
	  Option Pack. This may result in the loss of your existing phone books, but
	  will ensure that you have all the fixes for the Chinese version of Windows NT
	  Server for all products.
	
	- If you already have the English version of IIS 4.0 installed on the computer
	  running the Chinese version of Windows NT Server 4.0 and are only concerned
	  with Phone Book Administrator, a hotfix version of Pbadmin.exe is available
	  by contacting Microsoft Technical Support and referring to this article.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Phone Book Administrator version
	1.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: Phone book Admin PBS cps phonebook cm
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbMCISSearch kbPBA
	Version           : winnt:4.0; :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
